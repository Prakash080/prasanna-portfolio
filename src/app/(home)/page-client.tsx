"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/header";
import PhotoSection from "@/components/photo-section";
import GalleryPreview from "@/components/gallery-preview";
import WishesPreview from "@/components/wishes-preview";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container px-4 text-center z-10"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Welcome to Our Memories
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Capture, share, and relive your most precious moments with our
            beautifully animated gallery experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link href="/gallery">
              <motion.span
                className="inline-block bg-custom-light text-custom-dark hover:bg-opacity-90 px-6 py-3 rounded-md font-medium mr-4 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Gallery
              </motion.span>
            </Link>
            <Link href="/wishes">
              <motion.span
                className="inline-block bg-custom-dark text-custom-light hover:bg-opacity-90 px-6 py-3 rounded-md font-medium shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Wishes
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background z-10" />
          <Image
            src="logo.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Photo Section */}
      <PhotoSection />

      {/* Gallery Preview */}
      <GalleryPreview />

      {/* Wishes Preview */}
      <WishesPreview />

      {/* Footer */}
      <footer className="bg-muted py-8">
        <div className="container px-4">
          <p className="text-muted-foreground">
            © Memory Gallery. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
