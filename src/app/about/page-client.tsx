"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import { imagesSrc } from "@/constants/assets";

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
              A Journey Rooted in Passion
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
                  src={imagesSrc[0]}
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
                Grace in Motion: A Lifelong Dedication to Dance
              </h2>
              <p className="text-muted-foreground">
                Prasanna’s journey in classical dance began in 2015 under the
                esteemed guidance of Smt. Sumitra Sunil at Saraswathi
                Nruthyalaya Academy, where she trained in the rich traditions of
                the Mysore style of Bharatanatyam. From early training to
                mastering the art form, her unwavering passion has guided every
                step of her journey.
              </p>
              <p className="text-muted-foreground">
                After two years of rigorous practice, she grasped the
                fundamentals of Bharatanatyam. By 2018, with three additional
                years of dedicated training, she was ready for her first stage
                performance. Despite challenges, her perseverance and discipline
                paved the way for regular stage appearances, proving that true
                artistry is cultivated through patience and dedication.
              </p>
              <p className="text-muted-foreground">
                Today, alongside preparing for the UPSC exams, Prasanna remains
                deeply connected to Bharatanatyam, ensuring that her passion
                continues to thrive while nurturing the next generation of
                dancers.
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
              My expertise, formal training, and educational background in
              classical dance.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  year: "2015–2022",
                  title: "Advanced Bharatanatyam Training",
                  institution:
                    "Saraswathi Nrithyalaya International Academy, Bangalore",
                  description:
                    "Intensive training in the Mysore style of Bharatanatyam under Guru Smt. Sumitra Sunil, focusing on technical precision and abhinaya (expression).",
                },
                {
                  year: "",
                  title: "Specialized in Thanjavur Style & Radhakalpa Method",
                  institution: "",
                  description:
                    "Trained in the refined techniques of the Thanjavur style, blending it with the expressive depth of the Radhakalpa method.",
                },
                {
                  year: "",
                  title:
                    "Proficient in Semi-Classical, Sangeetha & Yoga Practices",
                  institution: "",
                  description:
                    "Integrating music and movement with classical traditions, enhancing both physical and spiritual well-being.",
                },
                {
                  year: "",
                  title: "Junior Board Exam",
                  institution: "",
                  description:
                    "Successfully passed the foundational level of classical dance certification, demonstrating technical proficiency and understanding.",
                },
                {
                  year: "",
                  title: "Senior Board Exam",
                  institution: "",
                  description:
                    "Achieved an advanced level certification, showcasing expertise and dedication to Bharatanatyam.",
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
                I believe that classical dance is more than just a performance
                art—it is a spiritual practice that connects us to our cultural
                roots and evokes universal human emotions. Each movement,
                gesture, and expression carries centuries of tradition,
                embodying the essence of Bharatanatyam.
              </p>
              <p className="text-muted-foreground">
                With expertise in the Thanjavur style and the Radhakalpa method,
                my approach balances reverence for tradition with creative
                innovation. While I am deeply committed to preserving the
                authentic techniques and aesthetics of classical dance, my
                exposure to semi-classical, sangeetha, yoga, and even
                contemporary forms like Zumba and Western dance allows me to
                explore how this art form resonates with modern audiences.
              </p>
              <p className="text-muted-foreground">
                Through regular performances and dedicated teaching, I strive to
                make Bharatanatyam accessible and meaningful while upholding its
                depth and integrity. I see dance as a powerful medium for
                cultural exchange, storytelling, and emotional expression,
                fostering a deeper appreciation for this timeless art.
              </p>
              <div className="pt-4">
                <blockquote className="border-l-4 border-primary pl-4 italic">
                  Bharatanatyam is the poetry of the body, the rhythm of the
                  soul, and the expression of the divine.
                </blockquote>
              </div>
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
                  src={imagesSrc[1]}
                  alt="Dance Philosophy"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kaladwaraka */}
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
              Founder and Creator of{" "}
              <span className="text-4xl md:text-5xl text-gold">
                Kaladwaraka
              </span>{" "}
              Academy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A platform dedicated to nurturing the next generation of classical
              dancers. With a focus on holistic development, I aim to instill
              not just technical skills but also a deep appreciation for the art
              form.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="items-center justify-center flex flex-col space-y-4"
          >
            <div className="rounded-full p-3 lg:p-6 bg-transparent shadow-xl dark:bg-white ">
              <Image
                src={"logo/kaladwaraka-logo.png"}
                height={150}
                width={150}
                alt="logo"
              />
            </div>
          </motion.div>
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
