"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { contacts } from "@/constants/constants"

export default function ContactPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSuccess(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.log(error);
      setErrorMessage("There was an error submitting your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen pt-20">
      <SiteHeader />

      {/* Contact Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get in touch for performances, workshops, collaborations, or general inquiries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif font-bold mb-6 text-[#D2AC58]">Send a Message</h2>

                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-primary/10 text-primary rounded-md mb-6"
                    >
                      Thank you for your message! I&apos;ll get back to you as soon as possible.
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {errorMessage && (
                        <div className="bg-destructive/10 text-destructive p-4 rounded-md mb-6">{errorMessage}</div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          placeholder="What is this regarding?"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Your message"
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full btn-elegant-filled" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">{contacts.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">{contacts.mobile}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-muted-foreground">{contacts.location}</p>
                      <p className="text-muted-foreground">(Available for inter-state performances)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Connect on Social Media</h2>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href={contacts.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-card rounded-lg hover:bg-muted transition-colors"
                  >
                    <span>Instagram</span>
                  </a>

                  <a
                    href={contacts.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-card rounded-lg hover:bg-muted transition-colors"
                  >
                    <span>Whatapp</span>
                  </a>
                </div>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-serif font-semibold text-lg mb-3">Response Time</h3>
                <p className="text-muted-foreground">
                  I typically respond to inquiries within 24-48 hours. For urgent matters related to bookings or
                  performances, please mention Urgent in your subject line.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

