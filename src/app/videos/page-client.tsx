"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

// Sample video data
const performanceVideos = [
  {
    id: 1,
    title: "Bharatanatyam Solo Performance",
    description:
      "A traditional Bharatanatyam performance exploring the navarasas (nine emotions) through classical compositions.",
    thumbnail: "/placeholder.svg?height=720&width=1280&text=Bharatanatyam+Performance",
    embedId: "dQw4w9WgXcQ", // YouTube video ID (placeholder)
    date: "June 15, 2022",
  },
  {
    id: 2,
    title: "Kathak Rhythmic Patterns",
    description:
      "An exploration of complex rhythmic patterns and footwork in the Kathak tradition, accompanied by live tabla.",
    thumbnail: "/placeholder.svg?height=720&width=1280&text=Kathak+Performance",
    embedId: "dQw4w9WgXcQ", // YouTube video ID (placeholder)
    date: "August 22, 2022",
  },
  {
    id: 3,
    title: "Odissi Dance Drama",
    description: "A narrative-based Odissi performance depicting stories from ancient Indian mythology.",
    thumbnail: "/placeholder.svg?height=720&width=1280&text=Odissi+Performance",
    embedId: "dQw4w9WgXcQ", // YouTube video ID (placeholder)
    date: "October 5, 2022",
  },
  {
    id: 4,
    title: "Contemporary Classical Fusion",
    description:
      "A modern interpretation of classical dance forms, blending traditional techniques with contemporary themes.",
    thumbnail: "/placeholder.svg?height=720&width=1280&text=Fusion+Performance",
    embedId: "dQw4w9WgXcQ", // YouTube video ID (placeholder)
    date: "December 12, 2022",
  },
]

const workshopVideos = [
  {
    id: 5,
    title: "Introduction to Bharatanatyam",
    description: "A beginner's guide to the basic postures, hand gestures, and expressions in Bharatanatyam.",
    thumbnail: "/placeholder.svg?height=720&width=1280&text=Bharatanatyam+Workshop",
    embedId: "dQw4w9WgXcQ", // YouTube video ID (placeholder)
    date: "January 15, 2023",
  },
  {
    id: 6,
    title: "Advanced Kathak Techniques",
    description: "A workshop focusing on complex footwork patterns and pirouettes in the Kathak tradition.",
    thumbnail: "/placeholder.svg?height=720&width=1280&text=Kathak+Workshop",
    embedId: "dQw4w9WgXcQ", // YouTube video ID (placeholder)
    date: "March 22, 2023",
  },
  {
    id: 7,
    title: "Expressive Storytelling in Dance",
    description: "Techniques for effective abhinaya (expression) and storytelling through classical dance movements.",
    thumbnail: "/placeholder.svg?height=720&width=1280&text=Storytelling+Workshop",
    embedId: "dQw4w9WgXcQ", // YouTube video ID (placeholder)
    date: "May 5, 2023",
  },
]

const interviewVideos = [
  {
    id: 8,
    title: "The Journey of a Classical Dancer",
    description:
      "An in-depth interview discussing the path, challenges, and rewards of pursuing classical dance professionally.",
    thumbnail: "/placeholder.svg?height=720&width=1280&text=Dance+Journey+Interview",
    embedId: "dQw4w9WgXcQ", // YouTube video ID (placeholder)
    date: "February 10, 2023",
  },
  {
    id: 9,
    title: "Preserving Traditional Art Forms",
    description: "A conversation about the importance of preserving classical dance traditions in the modern world.",
    thumbnail: "/placeholder.svg?height=720&width=1280&text=Preservation+Interview",
    embedId: "dQw4w9WgXcQ", // YouTube video ID (placeholder)
    date: "April 18, 2023",
  },
]

export default function VideosPageClient() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("performances")

  const allVideos = [...performanceVideos, ...workshopVideos, ...interviewVideos]

  const getVideoById = (id: number) => {
    return allVideos.find((video) => video.id === id)
  }

  return (
    <main className="min-h-screen pt-20">
      <SiteHeader />

      {/* Videos Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Videos</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch performances, workshops, interviews, and behind-the-scenes footage.
            </p>
          </motion.div>

          {/* Featured Video Player */}
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${getVideoById(activeVideo)?.embedId}`}
                    title={getVideoById(activeVideo)?.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-serif font-bold mb-2">{getVideoById(activeVideo)?.title}</h2>
                  <p className="text-muted-foreground mb-2">{getVideoById(activeVideo)?.date}</p>
                  <p className="text-muted-foreground">{getVideoById(activeVideo)?.description}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Video Categories */}
          <Tabs defaultValue="performances" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="performances" className="text-base px-6">
                  Performances
                </TabsTrigger>
                <TabsTrigger value="workshops" className="text-base px-6">
                  Workshops
                </TabsTrigger>
                <TabsTrigger value="interviews" className="text-base px-6">
                  Interviews
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="performances">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {performanceVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="cursor-pointer"
                    onClick={() => setActiveVideo(video.id)}
                  >
                    <Card>
                      <CardContent className="p-0">
                        <div className="relative aspect-video group">
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <div className="bg-primary/90 rounded-full p-3">
                              <Play className="h-8 w-8 text-primary-foreground" />
                            </div>
                          </div>
                          <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-serif font-semibold text-lg mb-1">{video.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{video.date}</p>
                          <p className="text-muted-foreground text-sm line-clamp-2">{video.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workshops">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workshopVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="cursor-pointer"
                    onClick={() => setActiveVideo(video.id)}
                  >
                    <Card>
                      <CardContent className="p-0">
                        <div className="relative aspect-video group">
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <div className="bg-primary/90 rounded-full p-3">
                              <Play className="h-8 w-8 text-primary-foreground" />
                            </div>
                          </div>
                          <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-serif font-semibold text-lg mb-1">{video.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{video.date}</p>
                          <p className="text-muted-foreground text-sm line-clamp-2">{video.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="interviews">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {interviewVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="cursor-pointer"
                    onClick={() => setActiveVideo(video.id)}
                  >
                    <Card>
                      <CardContent className="p-0">
                        <div className="relative aspect-video group">
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <div className="bg-primary/90 rounded-full p-3">
                              <Play className="h-8 w-8 text-primary-foreground" />
                            </div>
                          </div>
                          <img
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-serif font-semibold text-lg mb-1">{video.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{video.date}</p>
                          <p className="text-muted-foreground text-sm line-clamp-2">{video.description}</p>
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
    </main>
  )
}