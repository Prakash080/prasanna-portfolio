"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function BackgroundImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true immediately to avoid the error
    // The Next.js Image component will handle loading optimization
    setIsLoaded(true);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-15"
      aria-hidden="true"
    >
      {isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full max-w-4xl mx-auto opacity-25">
            <Image
              src="nataraja.png"
              alt="nataraja-background"
              fill
              priority
              sizes="100vw"
              className="object-contain"
              quality={60} // Lower quality for faster loading
            />
          </div>
        </div>
      )}
    </div>
  );
}
