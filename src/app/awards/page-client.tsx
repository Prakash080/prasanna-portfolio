"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, Quote } from "lucide-react";
import { awards, certificates, pressQuotes } from "@/constants/constants";

export default function AwardsPageClient() {
  return (
    <main className="min-h-screen pt-20">
      <SiteHeader />

      {/* Awards Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Awards & Recognition
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Honors, achievements, and acknowledgments received throughout my
              dance career.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Major Awards */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-center">
                Major Awards
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {awards.map((award, index) => (
                  <motion.div
                    key={award.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden h-full">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2 h-full">
                          <div className="relative h-[200px] md:h-full">
                            <Image
                              src={award.image}
                              alt={award.title}
                              fill
                              className="object-cover"
                            />
                            <div className="fade-to-right md:block hidden"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent md:hidden"></div>
                          </div>
                          <div className="p-6 flex flex-col">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="bg-primary/10 p-2 rounded-full">
                                <Award className="h-5 w-5 text-gold" />
                              </div>
                              <div>
                                <h3 className="font-serif font-semibold text-xl text-gold">
                                  {award.title}
                                </h3>
                                <p className="text-muted-foreground text-sm">
                                  {award.organization}
                                </p>
                              </div>
                            </div>
                            <p className="text-muted-foreground mb-4 flex-grow">
                              {award.description}
                            </p>
                            <div className="flex items-center text-muted-foreground text-sm">
                              <Calendar className="h-4 w-4 mr-2 text-gold" />
                              <span>{award.year}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Press Mentions */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-center">
                Special Mentions
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {pressQuotes.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardContent className="p-6">
                        <div className="flex flex-col h-full">
                          <div className="text-primary mb-4">
                            <Quote className="h-6 w-6" />
                          </div>
                          <blockquote className="italic mb-6 flex-grow">
                            {item.quote}
                          </blockquote>
                          <div className="flex justify-between items-center text-sm text-muted-foreground">
                            <span className="font-medium">{item.source}</span>
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certificates & Recognitions */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 text-center">
                Certificates & Recognitions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certificates.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-lg overflow-hidden shadow-md"
                  >
                    <div className="relative h-[200px]">
                      <Image
                        src={item.image}
                        alt={`Certificate ${item.id}`}
                        fill
                        className="object-cover"
                      />
                      <div className="fade-to-bottom md:block hidden"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent md:hidden"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif font-semibold text-lg mb-2 text-gold">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {item.organization}
                      </p>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-gold" />
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
