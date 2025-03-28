"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Header from "@/components/header";

// Sample gallery data
const galleryImages = [
  {
    id: 1,
    src: "assets/classical/001.JPG",
    alt: "Gallery Image 1",
    title: "Summer Memories",
  },
  {
    id: 2,
    src: "assets/classical/002.jpg",
    alt: "Gallery Image 2",
    title: "Winter Wonderland",
  },
  {
    id: 3,
    src: "assets/saree/003.jpg",
    alt: "Gallery Image 3",
    title: "Spring Blossoms",
  },
  {
    id: 4,
    src: "assets/classical/004.JPG",
    alt: "Gallery Image 4",
    title: "Autumn Leaves",
  },
  {
    id: 5,
    src: "assets/western/001.jpg",
    alt: "Gallery Image 5",
    title: "Beach Day",
  },
  {
    id: 6,
    src: "assets/classical/005.JPG",
    alt: "Gallery Image 6",
    title: "Mountain Hike",
  },
  {
    id: 7,
    src: "assets/saree/006.jpg",
    alt: "Gallery Image 7",
    title: "City Lights",
  },
  {
    id: 8,
    src: "assets/western/007.jpg",
    alt: "Gallery Image 8",
    title: "Countryside",
  },
  {
    id: 9,
    src: "assets/classical/008.jpg",
    alt: "Gallery Image 9",
    title: "Sunset Views",
  },
];

export default function GalleryPageClient() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return;

    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }

    setSelectedImage(galleryImages[newIndex].id);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container px-4 py-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our collection of beautiful memories captured over
            time.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                className="overflow-hidden cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-square relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 flex items-end justify-center pb-4">
                      <h3 className="text-white font-medium">{image.title}</h3>
                    </div>
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages.find((img) => img.id === selectedImage) && (
                <div className="relative w-full h-full">
                  <Image
                    src={
                      galleryImages.find((img) => img.id === selectedImage)!
                        .src || "/placeholder.svg"
                    }
                    alt={
                      galleryImages.find((img) => img.id === selectedImage)!.alt
                    }
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70 rounded-full"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <h3 className="text-xl font-medium">
                  {galleryImages.find((img) => img.id === selectedImage)?.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
