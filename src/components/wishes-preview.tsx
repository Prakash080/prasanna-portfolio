"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, Heart } from "lucide-react";

// Sample wishes preview data
const previewWishes = [
  {
    id: 1,
    name: "Emma Thompson",
    avatar: "/placeholder.svg?height=100&width=100",
    message:
      "Wishing you all the happiness and joy on your special day! May your life be filled with wonderful memories.",
    likes: 24,
  },
  {
    id: 2,
    name: "James Wilson",
    avatar: "/placeholder.svg?height=100&width=100",
    message:
      "Congratulations! May your journey together be filled with love and laughter. Best wishes for a beautiful future!",
    likes: 18,
  },
];

export default function WishesPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Heartfelt Wishes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read some of the beautiful messages from our friends and family.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {previewWishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={wish.avatar} alt={wish.name} />
                      <AvatarFallback>{wish.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium mb-2">{wish.name}</h3>
                      <p className="text-muted-foreground">{wish.message}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-custom-light dark:text-custom-light" />
                    <span className="text-sm text-muted-foreground">
                      {wish.likes}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/wishes">
            <Button className="group bg-custom-dark text-custom-light hover:bg-opacity-90 shadow-md">
              View All Wishes
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
