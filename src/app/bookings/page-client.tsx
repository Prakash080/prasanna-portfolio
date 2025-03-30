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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, Users, MapPin, DollarSign, Mail } from "lucide-react"

export default function BookingsPageClient() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    eventType: "performance",
    eventDate: "",
    eventTime: "",
    venue: "",
    audienceSize: "",
    duration: "",
    additionalInfo: "",
    termsAccepted: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value

    setFormState({
      ...formState,
      [e.target.name]: value,
    })
  }

  const handleRadioChange = (value: string) => {
    setFormState({
      ...formState,
      eventType: value,
    })
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormState({
      ...formState,
      termsAccepted: checked,
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
        phone: "",
        organization: "",
        eventType: "performance",
        eventDate: "",
        eventTime: "",
        venue: "",
        audienceSize: "",
        duration: "",
        additionalInfo: "",
        termsAccepted: false,
      })
    } catch (error) {
      console.log(error);
      setErrorMessage("There was an error submitting your booking request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen pt-20">
      <SiteHeader />

      {/* Bookings Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Book a Performance</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Request a performance or workshop for your event, festival, or educational institution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2"
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif font-bold mb-6 text-[#D2AC58]">Booking Request Form</h2>

                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-primary/10 text-primary rounded-md mb-6"
                    >
                      <h3 className="font-semibold text-lg mb-2">Thank you for your booking request!</h3>
                      <p>
                        I&apos;ll review your request and get back to you within 48 hours to discuss details and
                        availability.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {errorMessage && (
                        <div className="bg-destructive/10 text-destructive p-4 rounded-md mb-6">{errorMessage}</div>
                      )}

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Contact Information</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
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
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="organization">Organization/Institution</Label>
                            <Input
                              id="organization"
                              name="organization"
                              value={formState.organization}
                              onChange={handleChange}
                              placeholder="Enter your organization name"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Event Details</h3>

                        <div className="space-y-3">
                          <Label>Event Type *</Label>
                          <RadioGroup
                            value={formState.eventType}
                            onValueChange={handleRadioChange}
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="performance" id="performance" />
                              <Label htmlFor="performance" className="cursor-pointer">
                                Performance
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="workshop" id="workshop" />
                              <Label htmlFor="workshop" className="cursor-pointer">
                                Workshop
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="lecture" id="lecture" />
                              <Label htmlFor="lecture" className="cursor-pointer">
                                Lecture Demonstration
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" />
                              <Label htmlFor="other" className="cursor-pointer">
                                Other
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="eventDate">Event Date *</Label>
                            <div className="relative">
                              <Input
                                id="eventDate"
                                name="eventDate"
                                type="date"
                                value={formState.eventDate}
                                onChange={handleChange}
                                required
                              />
                              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="eventTime">Event Time *</Label>
                            <div className="relative">
                              <Input
                                id="eventTime"
                                name="eventTime"
                                type="time"
                                value={formState.eventTime}
                                onChange={handleChange}
                                required
                              />
                              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="venue">Venue/Location *</Label>
                            <div className="relative">
                              <Input
                                id="venue"
                                name="venue"
                                value={formState.venue}
                                onChange={handleChange}
                                placeholder="Enter venue name and address"
                                required
                              />
                              <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="audienceSize">Expected Audience Size *</Label>
                            <div className="relative">
                              <Input
                                id="audienceSize"
                                name="audienceSize"
                                value={formState.audienceSize}
                                onChange={handleChange}
                                placeholder="Approximate number of attendees"
                                required
                              />
                              <Users className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="duration">Preferred Duration *</Label>
                            <div className="relative">
                              <Input
                                id="duration"
                                name="duration"
                                value={formState.duration}
                                onChange={handleChange}
                                placeholder="e.g., 60 minutes, 2 hours"
                                required
                              />
                              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="additionalInfo">Additional Information</Label>
                          <Textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            value={formState.additionalInfo}
                            onChange={handleChange}
                            placeholder="Please provide any additional details about your event, specific requirements, or questions"
                            rows={4}
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="termsAccepted"
                            checked={formState.termsAccepted}
                            onCheckedChange={handleCheckboxChange}
                            required
                          />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor="termsAccepted"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              I agree to the terms and conditions
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              By submitting this form, you agree to be contacted regarding your booking request.
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        className="w-full btn-elegant-filled"
                        disabled={isSubmitting || !formState.termsAccepted}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Booking Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-serif font-bold mb-4">Booking Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-8 w-8 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Availability</h3>
                        <p className="text-sm text-muted-foreground">
                          Bookings are typically confirmed 2-3 months in advance. For urgent requests, please contact
                          directly.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <DollarSign className="h-8 w-8 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Pricing</h3>
                        <p className="text-sm text-muted-foreground">
                          Fees vary based on event type, duration, location, and technical requirements. A detailed
                          quote will be provided after reviewing your request.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="h-8 w-8 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-sm text-muted-foreground">
                          Available for performances nationwide and internationally. Travel and accommodation
                          arrangements to be discussed.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-serif font-bold mb-4">Available Performance Types</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm">Solo Classical Dance Recitals (60-90 minutes)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm">Thematic Performances (45-60 minutes)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm">Lecture Demonstrations (90-120 minutes)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm">Workshops for Beginners to Advanced (2-3 hours)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm">Masterclasses for Dance Students (3-4 hours)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-sm">Cultural Events and Festival Performances</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-serif font-semibold text-lg mb-3">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have questions about booking a performance or workshop, please don&apos;t hesitate to contact
                  directly.
                </p>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">bookings@natya-dance.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

