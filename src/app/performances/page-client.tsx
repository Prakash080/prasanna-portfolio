"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Clock,
  Ticket,
  ExternalLink,
  Play,
  Mic2,
} from "lucide-react";
import { VideoPlayer } from "@/components/video-player";
import { imagesSrc, videosSrc } from "@/constants/assets";

// Sample performance data
interface Performance {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  ticketLink: string;
  hasTeaser: boolean;
  teaserYoutubeId?: string;
}

const upcomingPerformances: Performance[] = [
  // {
  //   id: 1,
  //   title: "Rhythm of the Soul",
  //   date: "June 15, 2023",
  //   time: "7:00 PM",
  //   venue: "National Theatre, New Delhi",
  //   description:
  //     "A solo Bharatanatyam performance exploring the nine emotions (navarasas) through classical and contemporary compositions.",
  //   image: "/placeholder.svg?height=600&width=800&text=Performance+1",
  //   ticketLink: "#",
  //   hasTeaser: true,
  //   teaserYoutubeId: "dQw4w9WgXcQ", // Replace with actual YouTube ID
  // },
];

const pastPerformances = [
  {
    id: 201,
    category: "Performance",
    title: "Kanna Nidarinchara",
    description:
      "A divine connection between Krishna and his devotee. The choreography blends classical elegance with storytelling, making it a visually enchanting performance.",
    thumbnail: imagesSrc[48],
    src: videosSrc.performance[0],
    isYouTube: false,
    date: "September 04, 2024",
  },
  {
    id: 202,
    category: "Performance",
    title: "Sri Ganaraya",
    description:
      "Sri Ganaraya is a vibrant Bharatanatyam performance piece that pays homage to Lord Ganesha, the remover of obstacles.",
    thumbnail: imagesSrc[31],
    src: videosSrc.performance[1],
    isYouTube: false,
    date: "September 10, 2024",
  },
  {
    id: 203,
    category: "Performance",
    title: "Nagapambe",
    description:
      "Nagapambe is a mesmerizing Bharatanatyam piece dedicated to the serpent deity.",
    thumbnail: imagesSrc[3],
    src: videosSrc.performance[2],
    isYouTube: false,
    date: "September 10, 2024",
  },
  {
    id: 204,
    category: "Performance",
    title: "Aigiri Nandini",
    description:
      "Aigiri Nandini is a powerful Bharatanatyam piece that glorifies Goddess Durga’s strength and victory over evil.",
    thumbnail: imagesSrc[54],
    src: videosSrc.performance[3],
    isYouTube: false,
    date: "March 01, 2024",
  },
  {
    id: 205,
    category: "Performance",
    title: "Maadu Mekum Kanne",
    description:
      "Maadu Mekum Kanne is a soulful Bharatanatyam piece depicting the tender bond between Mother Yashoda and little Krishna.",
    thumbnail: imagesSrc[6],
    src: videosSrc.performance[4],
    isYouTube: false,
    date: "March 01, 2024",
  },
];

// Workshop videos data
const workshopVideos = [
  {
    id: 301,
    category: "Workshop",
    title: "Ek Do Teen",
    description:
      "Trained a group of parents for the annual day of the school, showcasing the beauty of Dance.",
    thumbnail: imagesSrc[57],
    src: videosSrc.workshop[0],
    isYouTube: false,
    date: "March 08, 2025",
  },
  {
    id: 302,
    category: "Workshop",
    title: "One-One Training",
    description:
      "Guiding a student in a one-on-one training session, focusing on the nuances of Dance.",
    thumbnail: imagesSrc[55],
    src: videosSrc.workshop[1],
    isYouTube: false,
    date: "December 18, 2024",
  },
  {
    id: 303,
    category: "Workshop",
    title: "Group Discussion",
    description:
      "Discussing the importance of Dance in a group setting, emphasizing its cultural significance.",
    thumbnail: imagesSrc[56],
    src: videosSrc.workshop[2],
    isYouTube: false,
    date: "December 18, 2024",
  },
];

export default function PerformancesPageClient() {
  const [, setActiveTab] = useState("workshop");
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [showTeaserModal, setShowTeaserModal] = useState<boolean>(false);
  const [selectedTeaser, setSelectedTeaser] = useState<string | null>(null);

  // Get video by ID
  const getVideoById = (id: number) => {
    return [...pastPerformances, ...workshopVideos].find(
      (video) => video.id === id,
    );
  };

  // Handle teaser click
  const handleTeaserClick = (youtubeId: string) => {
    setSelectedTeaser(youtubeId);
    setShowTeaserModal(true);
  };

  // Close teaser modal
  const closeTeaserModal = () => {
    setShowTeaserModal(false);
    setSelectedTeaser(null);
  };

  return (
    <main className="min-h-screen pt-20">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Performances & Videos
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore upcoming shows, past performances, and workshop videos
              showcasing classical dance.
            </p>
          </motion.div>

          <Tabs
            defaultValue="past" // Changed default to "past"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="upcoming" className="text-base px-6">
                  Upcoming Performances
                </TabsTrigger>
                <TabsTrigger value="past" className="text-base px-6">
                  Past Performances
                </TabsTrigger>
                <TabsTrigger value="workshop" className="text-base px-6">
                  Workshop Videos
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Upcoming Performances Tab */}
            <TabsContent value="upcoming">
              <div className="space-y-12">
                {upcomingPerformances.length === 0 ? (
                  <div className="items-center text-lg flex flex-col font-medium text-center">
                    <Mic2 className="h-8 w-8 text-gold" />
                    Upcoming performances will be Announced soon.
                  </div>
                ) : (
                  upcomingPerformances.map((performance, index) => (
                    <motion.div
                      key={performance.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-card rounded-lg overflow-hidden shadow-md"
                    >
                      <div className="grid md:grid-cols-2">
                        <div className="relative h-[300px] md:h-auto">
                          <Image
                            src={performance.image || "/placeholder.svg"}
                            alt={performance.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 md:p-8 flex flex-col justify-between">
                          <div>
                            <h2 className="text-2xl font-serif font-bold mb-4">
                              {performance.title}
                            </h2>
                            <div className="space-y-3 mb-6">
                              <div className="flex items-center text-muted-foreground">
                                <Calendar className="h-4 w-4 mr-2 text-gold" />
                                <span>{performance.date}</span>
                              </div>
                              <div className="flex items-center text-muted-foreground">
                                <Clock className="h-4 w-4 mr-2 text-gold" />
                                <span>{performance.time}</span>
                              </div>
                              <div className="flex items-center text-muted-foreground">
                                <MapPin className="h-4 w-4 mr-2 text-gold" />
                                <span>{performance.venue}</span>
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-6">
                              {performance.description}
                            </p>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="btn-elegant-filled">
                              <Ticket className="h-4 w-4 mr-2" /> Book Tickets
                            </Button>
                            {performance.hasTeaser && (
                              <Button
                                variant="outline"
                                className="btn-elegant"
                                onClick={() =>
                                  handleTeaserClick(
                                    performance.teaserYoutubeId!,
                                  )
                                }
                              >
                                <Play className="h-4 w-4 mr-2" /> Watch Teaser
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </TabsContent>

            {/* Past Performances Tab */}
            <TabsContent value="past">
              {/* Video Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastPerformances.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="cursor-pointer"
                    onClick={() => setSelectedVideo(video.id)}
                  >
                    <Card>
                      <CardContent className="p-0">
                        <div className="px-6 pt-6">
                          <VideoPlayer
                            src={video.src}
                            poster={video.thumbnail}
                            title={video.title}
                            aspectRatio="16/9"
                            className="w-full"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-medium px-2 py-1 bg-gold/10 text-gold rounded-full">
                              {video.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {video.date}
                            </span>
                          </div>
                          <h3 className="font-serif font-semibold text-lg mb-1">
                            {video.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {video.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Workshop Videos Tab */}
            <TabsContent value="workshop">
              {/* Video Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workshopVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="cursor-pointer"
                    onClick={() => setSelectedVideo(video.id)}
                  >
                    <Card>
                      <CardContent className="p-0">
                        <div className="px-6 pt-6">
                          <VideoPlayer
                            src={video.src}
                            poster={video.thumbnail}
                            title={video.title}
                            aspectRatio="16/9"
                            className="w-full"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-medium px-2 py-1 bg-gold/10 text-gold rounded-full">
                              {video.category}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {video.date}
                            </span>
                          </div>
                          <h3 className="font-serif font-semibold text-lg mb-1">
                            {video.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {video.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Teaser Modal */}
      {showTeaserModal && selectedTeaser && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeTeaserModal}
        >
          <div
            className="relative max-w-4xl w-full bg-card rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video">
              {selectedVideo !== null && (
                <VideoPlayer
                  src={getVideoById(selectedVideo)?.src ?? "/placeholder.mp4"}
                  isYouTube={false}
                  youtubeId={selectedTeaser}
                  className="w-full h-full"
                />
              )}
            </div>
            <div className="absolute top-2 right-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-black/50 hover:bg-black/70 text-white"
                onClick={closeTeaserModal}
              >
                <ExternalLink className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
