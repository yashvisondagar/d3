"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectImage } from "@/data/locations";
import { cn } from "@/lib/cn";

type PinterestMasonryProps = {
  images: ProjectImage[];
  className?: string;
};

export function PinterestMasonry({ images, className }: PinterestMasonryProps) {
  if (images.length === 0) {
    return (
      <p className="py-12 text-center font-sans text-sm text-charcoal/60">
        No images yet for this location.
      </p>
    );
  }

  return (
    <ul
      className={cn(
        "columns-1 gap-3 sm:columns-2 sm:gap-4 md:columns-3",
        className,
      )}
      data-testid="pinterest-masonry"
    >
      {images.map((image, index) => (
        <motion.li
          key={image.id}
          className="mb-3 break-inside-avoid sm:mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: Math.min(index * 0.03, 0.45), duration: 0.45 }}
        >
          <div className="relative overflow-hidden bg-sand">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full object-cover transition duration-500 hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
