"use client";

import { useEffect, useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import {
  locations,
  mumbaiMapView,
  type Location,
  type LocationId,
} from "@/data/locations";
import "leaflet/dist/leaflet.css";

type RealMumbaiMapProps = {
  hovered: LocationId | null;
  selected: LocationId | null;
  onHover: (id: LocationId | null) => void;
  onSelect: (id: LocationId) => void;
};

function goldIcon(active: boolean) {
  const size = active ? 36 : 28;
  return L.divIcon({
    className: "d3-map-pin",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
    html: `<span class="d3-pin-dot${active ? " is-active" : ""}"></span>`,
  });
}

function FlyToFocus({
  location,
}: {
  location: Location | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (!location) return;
    map.flyTo([location.coords.lat, location.coords.lng], 13, {
      duration: 0.85,
    });
  }, [location, map]);

  return null;
}

export default function RealMumbaiMap({
  hovered,
  selected,
  onHover,
  onSelect,
}: RealMumbaiMapProps) {
  const focusId = hovered ?? selected;
  const focus = useMemo(
    () => locations.find((l) => l.id === focusId) ?? null,
    [focusId],
  );

  return (
    <MapContainer
      center={[mumbaiMapView.center.lat, mumbaiMapView.center.lng]}
      zoom={mumbaiMapView.zoom}
      scrollWheelZoom
      className="h-full w-full"
      style={{ background: "#ebe2d4", height: "100%", width: "100%" }}
    >
      {/* Real OpenStreetMap tiles — accurate Mumbai streets & coastline */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      <FlyToFocus location={focus} />
      {locations.map((loc) => {
        const active = loc.id === hovered || loc.id === selected;
        return (
          <Marker
            key={loc.id}
            position={[loc.coords.lat, loc.coords.lng]}
            icon={goldIcon(active)}
            eventHandlers={{
              click: () => onSelect(loc.id),
              mouseover: () => onHover(loc.id),
              mouseout: () => onHover(null),
            }}
          >
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.clients.length} client
              {loc.clients.length > 1 ? "s" : ""} — click pin to open gallery
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
