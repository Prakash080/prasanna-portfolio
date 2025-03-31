"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { VideoPlayer } from "@/components/video-player";
import { imagesSrc, videosSrc } from "@/constants/assets";

// Sample featured video data
const featuredVideos = [
  {
    id: 1,
    title: "Bharatanatyam: The Divine Dance",
    description:
      "Experience the grace and precision of Bharatanatyam, one of India's oldest classical dance forms.",
    src: videosSrc.home[0], // Replace with your actual video path
    youtubeId: "", // Replace with actual YouTube ID
    isYouTube: false,
    thumbnail: imagesSrc[10], // Replace with your actual thumbnail path
  },
];

export function FeaturedVideo() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const activeVideo = featuredVideos[activeVideoIndex];

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Featured Videos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch selected performances showcasing the beauty and artistry of
            classical dance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-xs" // Constrain width for portrait video
          >
            <VideoPlayer
              src={activeVideo.src}
              poster={activeVideo.thumbnail}
              title={activeVideo.title}
              isYouTube={activeVideo.isYouTube}
              youtubeId={activeVideo.youtubeId}
              aspectRatio="9/16" // Using 9:16 aspect ratio for portrait video
              className="h-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-serif font-bold">
              {activeVideo.title}
            </h3>
            <p className="text-muted-foreground">{activeVideo.description}</p>
            <div className="space-y-4">
              <div className="space-y-3">
                {featuredVideos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`p-3 rounded-md cursor-pointer transition-colors ${
                      index === activeVideoIndex
                        ? "bg-gold/10 border-l-4 border-gold"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => setActiveVideoIndex(index)}
                  >
                    <h5 className="font-medium">{video.title}</h5>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Link href="/performances">
                <Button className="btn-elegant">
                  View All Videos
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
