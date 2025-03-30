"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// Sample gallery data
const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=800&width=600&text=Gallery+1",
    alt: "Classical Dance Performance 1",
    title: "Bharatanatyam Solo",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=800&width=600&text=Gallery+2",
    alt: "Classical Dance Performance 2",
    title: "Kathak Expressions",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=800&width=600&text=Gallery+3",
    alt: "Classical Dance Performance 3",
    title: "Odissi Movements",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=800&width=600&text=Gallery+4",
    alt: "Classical Dance Performance 4",
    title: "Festival Performance",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=800&width=600&text=Gallery+5",
    alt: "Classical Dance Performance 5",
    title: "International Tour",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=800&width=600&text=Gallery+6",
    alt: "Classical Dance Performance 6",
    title: "Workshop Session",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=800&width=600&text=Gallery+7",
    alt: "Classical Dance Performance 7",
    title: "Costume Detail",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=800&width=600&text=Gallery+8",
    alt: "Classical Dance Performance 8",
    title: "Backstage Moments",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=800&width=600&text=Gallery+9",
    alt: "Classical Dance Performance 9",
    title: "Dance Academy",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=800&width=600&text=Gallery+10",
    alt: "Classical Dance Performance 10",
    title: "Cultural Exchange",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=800&width=600&text=Gallery+11",
    alt: "Classical Dance Performance 11",
    title: "Rehearsal",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=800&width=600&text=Gallery+12",
    alt: "Classical Dance Performance 12",
    title: "Stage Performance",
  },
]

export default function GalleryPageClient() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (id: number) => setSelectedImage(id)
  const closeLightbox = () => setSelectedImage(null)

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return

    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % galleryImages.length
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    }

    setSelectedImage(galleryImages[newIndex].id)
  }

  return (
    <main className="min-h-screen pt-20">
      <SiteHeader />

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A visual journey through performances, rehearsals, and moments captured in time.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                <div className="overflow-hidden rounded-lg shadow-md">
                  <div className="relative aspect-[3/4] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <h3 className="text-white font-serif font-medium text-lg">{image.title}</h3>
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
      </section>

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
                    src={galleryImages.find((img) => img.id === selectedImage)!.src || "/placeholder.svg"}
                    alt={galleryImages.find((img) => img.id === selectedImage)!.alt}
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
                <h3 className="text-xl font-serif font-medium">
                  {galleryImages.find((img) => img.id === selectedImage)?.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

