"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Sample gallery preview images
const previewImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Gallery Preview 1",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Gallery Preview 2",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Gallery Preview 3",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Gallery Preview 4",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Gallery Preview 5",
  },
];

export default function GalleryPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section ref={ref} className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Gallery Highlights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A preview of our beautiful collection. Visit the full gallery to see
            more.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-4 pb-4 overflow-x-auto scrollbar-hide"
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {previewImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="flex-shrink-0 w-[280px] md:w-[320px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="rounded-lg overflow-hidden shadow-lg group">
                  <div className="relative aspect-[4/3]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-4">
                      <p className="text-white font-medium">View</p>
                    </div>
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/gallery">
            <Button className="group bg-custom-light text-custom-dark hover:bg-opacity-90 shadow-md">
              View Full Gallery
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
