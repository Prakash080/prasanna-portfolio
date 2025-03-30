"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, Ticket, ExternalLink } from "lucide-react";

// Sample performance data
const upcomingPerformances = [
  {
    id: 1,
    title: "Rhythm of the Soul",
    date: "June 15, 2023",
    time: "7:00 PM",
    venue: "National Theatre, New Delhi",
    description:
      "A solo Bharatanatyam performance exploring the nine emotions (navarasas) through classical and contemporary compositions.",
    image: "/placeholder.svg?height=600&width=800&text=Performance+1",
    ticketLink: "#",
  },
  {
    id: 2,
    title: "Tales of Ancient India",
    date: "August 22, 2023",
    time: "6:30 PM",
    venue: "Cultural Center, Mumbai",
    description:
      "A thematic presentation bringing to life stories from Indian mythology through the expressive medium of Kathak.",
    image: "/placeholder.svg?height=600&width=800&text=Performance+2",
    ticketLink: "#",
  },
  {
    id: 3,
    title: "Modern Interpretations",
    date: "October 5, 2023",
    time: "8:00 PM",
    venue: "International Arts Festival, Bangalore",
    description:
      "An innovative fusion of classical dance techniques with contemporary themes, accompanied by live music.",
    image: "/placeholder.svg?height=600&width=800&text=Performance+3",
    ticketLink: "#",
  },
];

const pastPerformances = [
  {
    id: 4,
    title: "Eternal Rhythm",
    date: "November 12, 2022",
    venue: "Dance Academy Auditorium, Chennai",
    description:
      "A traditional Bharatanatyam recital featuring margam pieces including alarippu, jatiswaram, shabdam, varnam, and tillana.",
    image: "/placeholder.svg?height=600&width=800&text=Past+Performance+1",
    videoLink: "#",
  },
  {
    id: 5,
    title: "Storytelling Through Dance",
    date: "September 3, 2022",
    venue: "Heritage Festival, Jaipur",
    description:
      "A narrative-based performance depicting episodes from the Ramayana through classical dance movements and expressions.",
    image: "/placeholder.svg?height=600&width=800&text=Past+Performance+2",
    videoLink: "#",
  },
  {
    id: 6,
    title: "Rhythmic Conversations",
    date: "July 18, 2022",
    venue: "City Convention Center, Kolkata",
    description:
      "A collaborative performance with musicians exploring the relationship between dance and rhythm in classical traditions.",
    image: "/placeholder.svg?height=600&width=800&text=Past+Performance+3",
    videoLink: "#",
  },
  {
    id: 7,
    title: "Dance Dialogue",
    date: "May 5, 2022",
    venue: "Arts Council, Hyderabad",
    description:
      "A cross-cultural exchange featuring classical Indian dance alongside other world dance forms, highlighting similarities and differences.",
    image: "/placeholder.svg?height=600&width=800&text=Past+Performance+4",
    videoLink: "#",
  },
];

export default function PerformancesPageClient() {
  const [activeTab, setActiveTab] = useState("upcoming");

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
              Performances
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Upcoming shows and past performances showcasing classical dance in
              various venues and festivals.
            </p>
          </motion.div>

          <Tabs
            defaultValue="upcoming"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="upcoming" className="text-base px-6">
                  Upcoming
                </TabsTrigger>
                <TabsTrigger value="past" className="text-base px-6">
                  Past
                </TabsTrigger>
              </TabsList>
            </div>
            {activeTab == "upcoming" ? <TabsContent value="upcoming">
              <div className="space-y-12">
                {upcomingPerformances.map((performance, index) => (
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
                              <Calendar className="h-4 w-4 mr-2 text-primary" />
                              <span>{performance.date}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="h-4 w-4 mr-2 text-primary" />
                              <span>{performance.time}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-2 text-primary" />
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
                          <Button variant="outline" className="btn-elegant">
                            Learn More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent> : <TabsContent value="past">
              <div className="grid md:grid-cols-2 gap-8">
                {pastPerformances.map((performance, index) => (
                  <motion.div
                    key={performance.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-lg overflow-hidden shadow-md"
                  >
                    <div className="relative h-[250px]">
                      <Image
                        src={performance.image || "/placeholder.svg"}
                        alt={performance.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-4">
                          <h3 className="text-xl font-serif font-bold text-white mb-1">
                            {performance.title}
                          </h3>
                          <div className="flex items-center text-white/80 text-sm">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{performance.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        <span>{performance.venue}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {performance.description}
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" /> Watch
                        Performance
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>}
          </Tabs>
        </div>
      </section>
    </main>
  );
}
