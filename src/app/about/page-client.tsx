"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";

export default function AboutPageClient() {
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
              About the Artist
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My journey in classical dance, training, and artistic philosophy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-[600px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="assets/classical/001.JPG"
                  alt="Classical Dancer Portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold">
                My Dance Journey
              </h2>
              <p className="text-muted-foreground">
                My journey in classical dance began at the age of seven, when I
                was first introduced to the intricate footwork and expressive
                gestures of Bharatanatyam. What started as childhood curiosity
                quickly blossomed into a lifelong passion.
              </p>
              <p className="text-muted-foreground">
                Under the guidance of renowned gurus, I spent years mastering
                the technical aspects of multiple dance forms, including Kathak
                and Odissi, while developing my own artistic voice and
                interpretation.
              </p>
              <p className="text-muted-foreground">
                Today, with over 15 years of training and performance
                experience, I strive to preserve the rich traditions of
                classical dance while exploring contemporary themes and
                innovative choreography.
              </p>
              <div className="pt-4">
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  Dance is the hidden language of the soul. It communicates
                  emotions that words cannot express.
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training & Education */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Training & Education
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My formal training and educational background in classical dance.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  year: "2010-2015",
                  title: "Advanced Bharatanatyam Training",
                  institution: "Kalakshetra Foundation, Chennai",
                  description:
                    "Intensive training in the Kalakshetra style of Bharatanatyam under Guru Smt. Leela Samson, focusing on technical precision and abhinaya (expression).",
                },
                {
                  year: "2015-2017",
                  title: "Kathak Specialization",
                  institution: "Kathak Kendra, New Delhi",
                  description:
                    "Specialized training in the Lucknow gharana of Kathak under Pandit Birju Maharaj, emphasizing rhythmic footwork and graceful movements.",
                },
                {
                  year: "2017-2019",
                  title: "Master's in Performing Arts",
                  institution: "University of Delhi",
                  description:
                    "Academic study of dance history, theory, and choreography, culminating in a thesis on the evolution of classical dance in contemporary contexts.",
                },
                {
                  year: "2019-2021",
                  title: "International Dance Fellowship",
                  institution: "World Dance Alliance",
                  description:
                    "Collaborative research and performance opportunities with dancers from diverse cultural backgrounds, exploring cross-cultural influences in dance.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-10 border-l border-primary/30"
                >
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="mb-1 text-sm font-medium text-primary">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-1">
                    {item.title}
                  </h3>
                  <div className="text-sm text-muted-foreground mb-3">
                    {item.institution}
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-2 md:order-1"
            >
              <h2 className="text-3xl font-serif font-bold">
                Artistic Philosophy
              </h2>
              <p className="text-muted-foreground">
                I believe that classical dance is not merely a performance art
                but a spiritual practice that connects us to our cultural roots
                and universal human emotions. Each movement, gesture, and
                expression carries centuries of tradition and meaning.
              </p>
              <p className="text-muted-foreground">
                My approach to dance balances reverence for tradition with
                creative innovation. While I am deeply committed to preserving
                the authentic techniques and aesthetics of classical forms, I
                also explore how these ancient art forms can speak to
                contemporary audiences and address modern themes.
              </p>
              <p className="text-muted-foreground">
                Through my performances and teaching, I aim to make classical
                dance accessible to diverse audiences while maintaining its
                depth and integrity. I see dance as a powerful medium for
                cultural exchange, storytelling, and emotional expression.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=800&width=600&text=Dance+Philosophy"
                  alt="Dance Philosophy"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Teaching & Mentorship
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passing on the tradition through workshops, classes, and
              mentorship programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Regular Classes",
                description:
                  "Weekly classes for students of all levels, focusing on technique, theory, and performance skills.",
              },
              {
                title: "Intensive Workshops",
                description:
                  "Specialized workshops on specific aspects of classical dance, from abhinaya to rhythmic patterns.",
              },
              {
                title: "Mentorship Program",
                description:
                  "One-on-one guidance for advanced students pursuing professional careers in classical dance.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-serif font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
