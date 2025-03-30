"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, MapPin, Award, Play } from "lucide-react";
import { awards } from "@/constants/constants";

export default function HomePageClient() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <main className="min-h-screen">
      <SiteHeader />

      {/* Hero Section with image on left and content on right */}
      <section
        ref={ref}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Hero Image with fade effect */}
            <motion.div
              style={{ opacity, scale }}
              className="relative h-[500px] md:h-[70vh] rounded-lg overflow-hidden"
            >
              <Image
                src="assets/classical/023.jpg"
                alt="Classical Dance Performance"
                fill
                className="object-cover"
                priority
              />
              <div className="fade-to-right md:block hidden"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent md:hidden"></div>
            </motion.div>

            {/* Right side - Hero Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="z-10"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-serif font-bold mb-6"
              >
                The Art of <span className="text-gold">Classical Dance</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl mb-8"
              >
                Expressing emotions through movement, rhythm, and storytelling
                in the ancient tradition of classical dance.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/performances">
                  <Button className="btn-elegant-filled">
                    Upcoming Performances
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/bookings">
                  <Button variant="outline" className="btn-elegant">
                    Book a Performance
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <ChevronRight className="h-8 w-8 text-gold rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* Introduction Section with enhanced animations */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-serif font-bold"
              >
                About the Dancer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground"
              >
                With over 15 years of training in classical dance forms, I bring
                stories to life through movement and expression. My performances
                blend traditional techniques with contemporary interpretations,
                creating a unique experience for audiences.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted-foreground"
              >
                I have performed at prestigious venues across the country and
                internationally, sharing the rich cultural heritage of classical
                dance with diverse audiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-4"
              >
                <Link href="/about">
                  <Button className="btn-elegant">
                    Read My Story
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative h-[500px] rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src="assets/classical/012.jpg"
                  alt="Classical Dancer Portrait"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Performances with enhanced animations */}
      <section className="py-20 bg-muted">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Featured Performances
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Highlights from recent performances and upcoming events.
              Experience the beauty and grace of classical dance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "assets/classical/006.JPG",
              "assets/classical/018.jpg",
              "assets/classical/003.jpg",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="bg-card rounded-lg overflow-hidden shadow-md h-full">
                  <div className="relative h-[250px]">
                    <Image
                      src={item}
                      alt={`Performance ${index}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-white border-white hover:bg-white/20"
                      >
                        <Play className="h-4 w-4 mr-2" /> Watch Teaser
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-2">
                      {index === 0
                        ? "Rhythm of the Soul"
                        : index === 1
                          ? "Tales of Ancient India"
                          : "Modern Interpretations"}
                    </h3>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-2 text-gold" />
                      <span className="text-sm">
                        {index === 0
                          ? "June 15, 2023"
                          : index === 1
                            ? "August 22, 2023"
                            : "October 5, 2023"}
                      </span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-2 text-gold" />
                      <span className="text-sm">
                        {index === 0
                          ? "National Theatre, New Delhi"
                          : index === 1
                            ? "Cultural Center, Mumbai"
                            : "International Arts Festival, Bangalore"}
                      </span>
                    </div>
                    <Link href="/performances">
                      <Button variant="link" className="p-0 h-auto text-gold">
                        Learn more <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/performances">
              <Button className="btn-elegant">
                View All Performances
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition with enhanced animations */}
      <section className="py-20 bg-muted">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Awards & Recognition
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrating achievements and honors received for contributions to
              classical dance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-card rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gold/10 p-3 rounded-full mr-4">
                    <Award className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="text-sm text-muted-foreground">
                  {item.organization} - {item.year}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/awards">
              <Button className="btn-elegant">
                View All Achievements
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview with enhanced animations */}
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
              Gallery Highlights
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Capturing moments of grace, expression, and movement from
              performances around the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "assets/classical/016.jpg",
              "assets/classical/019.jpg",
              "assets/classical/013.jpg",
              "assets/classical/023.jpg",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="group"
              >
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={item}
                    alt={`Gallery Image ${index}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <p className="text-white font-medium">View Image</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/gallery">
              <Button className="btn-elegant">
                Explore Full Gallery
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA with enhanced animations */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-lg p-8 md:p-12 shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent" />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  Ready to Experience Classical Dance?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Whether you&apos;re interested in booking a performance,
                  attending a workshop, or simply want to learn more about
                  classical dance, I&apos;d love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/contact">
                      <Button className="btn-elegant-filled">
                        Get in Touch
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/bookings">
                      <Button variant="outline" className="btn-elegant">
                        Book a Workshop
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
