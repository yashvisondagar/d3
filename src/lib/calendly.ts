const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";
const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

let loading: Promise<void> | null = null;

function ensureCss() {
  if (typeof document === "undefined") return;
  if (document.querySelector(`link[href="${WIDGET_CSS}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = WIDGET_CSS;
  document.head.appendChild(link);
}

export function loadCalendly(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.Calendly) return Promise.resolve();
  if (loading) return loading;

  ensureCss();

  loading = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${WIDGET_JS}"]`,
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(new Error("Calendly failed to load")),
      );
      if (window.Calendly) resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = WIDGET_JS;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly failed to load"));
    document.body.appendChild(script);
  });

  return loading;
}

/** Opens Calendly as an on-page popup (does not leave the site). */
export async function openCalendlyPopup(url: string) {
  await loadCalendly();
  window.Calendly?.initPopupWidget({ url });
}
