"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function PhotoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through time, capturing the most precious moments of our
            lives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Memory Photo"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Capturing Life&apos;s Beautiful Moments
            </h3>
            <p className="text-muted-foreground">
              Every photograph tells a story, a frozen moment in time that
              captures emotions, relationships, and milestones. Our gallery is a
              testament to the journey we&apos;ve taken together, filled with
              laughter, love, and unforgettable experiences.
            </p>
            <p className="text-muted-foreground">
              From casual gatherings to significant celebrations, these images
              represent the tapestry of our shared history. Each picture is more
              than just a visual record—it&apos;s a gateway to memories that continue
              to warm our hearts.
            </p>
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-custom-light text-custom-dark hover:bg-opacity-90 px-6 py-3 rounded-md font-medium shadow-md"
              >
                Read More
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="aspect-square relative rounded-lg overflow-hidden shadow-md group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-4">
                    <p className="text-white font-medium">Memory {item}</p>
                  </div>
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Image ${item}`}
                    alt={`Memory ${item}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
