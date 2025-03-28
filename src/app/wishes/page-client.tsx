"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart } from "lucide-react";
import Header from "@/components/header";

// Sample wishes data
const initialWishes = [
  {
    id: 1,
    name: "Emma Thompson",
    avatar: "/placeholder.svg?height=100&width=100",
    message:
      "Wishing you all the happiness and joy on your special day! May your life be filled with wonderful memories.",
    date: "2 days ago",
    likes: 24,
  },
  {
    id: 2,
    name: "James Wilson",
    avatar: "/placeholder.svg?height=100&width=100",
    message:
      "Congratulations! May your journey together be filled with love and laughter. Best wishes for a beautiful future!",
    date: "3 days ago",
    likes: 18,
  },
  {
    id: 3,
    name: "Sophia Martinez",
    avatar: "/placeholder.svg?height=100&width=100",
    message:
      "So happy for you both! Sending you love and blessings for this new chapter in your lives.",
    date: "5 days ago",
    likes: 32,
  },
];

export default function WishesPageClient() {
  const [wishes, setWishes] = useState(initialWishes);
  const [newWish, setNewWish] = useState({ name: "", message: "" });
  const [likedWishes, setLikedWishes] = useState<number[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWish.name.trim() || !newWish.message.trim()) return;

    const newWishItem = {
      id: wishes.length + 1,
      name: newWish.name,
      avatar: "/placeholder.svg?height=100&width=100",
      message: newWish.message,
      date: "Just now",
      likes: 0,
    };

    setWishes([newWishItem, ...wishes]);
    setNewWish({ name: "", message: "" });
  };

  const handleLike = (id: number) => {
    if (likedWishes.includes(id)) return;

    setLikedWishes([...likedWishes, id]);
    setWishes(
      wishes.map((wish) =>
        wish.id === id ? { ...wish, likes: wish.likes + 1 } : wish
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container px-4 py-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Wishes & Messages</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Share your thoughts, wishes, and congratulations with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-1"
          >
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Leave a Wish</h2>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={newWish.name}
                      onChange={(e) =>
                        setNewWish({ ...newWish, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      value={newWish.message}
                      onChange={(e) =>
                        setNewWish({ ...newWish, message: e.target.value })
                      }
                      placeholder="Write your wish or message here..."
                      rows={5}
                      required
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md"
                    type="submit"
                  >
                    Send Wish
                  </motion.button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:col-span-2"
          >
            <h2 className="text-2xl font-semibold mb-6">Recent Wishes</h2>
            <div className="space-y-6">
              <AnimatePresence>
                {wishes.map((wish, index) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={wish.avatar} alt={wish.name} />
                            <AvatarFallback>
                              {wish.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="font-medium">{wish.name}</h3>
                              <span className="text-xs text-muted-foreground">
                                {wish.date}
                              </span>
                            </div>
                            <p className="text-muted-foreground">
                              {wish.message}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between border-t pt-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-1"
                          onClick={() => handleLike(wish.id)}
                          disabled={likedWishes.includes(wish.id)}
                        >
                          <Heart
                            className={`h-4 w-4 ${
                              likedWishes.includes(wish.id)
                                ? "fill-red-500 text-red-500"
                                : ""
                            }`}
                          />
                          <span>{wish.likes}</span>
                        </Button>
                        <Button variant="ghost" size="sm">
                          Reply
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
