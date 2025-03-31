"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { contacts } from "@/constants/constants";

export function SiteFooter() {
  return (
    <footer className="bg-muted py-12 mt-20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Image src={"logo.png"} alt={"logo"} height={64} width={64} />
            <p className="text-muted-foreground">
              Celebrating the art of classical dance through performances,
              workshops, and cultural events.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/performances"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Performances
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-medium">More</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/awards"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Awards
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/bookings"
                  className="text-muted-foreground hover:text-gold transition-colors"
                >
                  Bookings
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-medium">Connect</h4>
            <div className="flex space-x-4">
              <Link
                href={contacts.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors"
              >
                Instagram<Image src={"instagram.svg"} alt={"instagram"} width={32} height={32}/>
              </Link>
              <Link
                href={contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold transition-colors"
              >
                Whatsapp<Image src={"whatsapp.svg"} alt={"whatsapp"} width={24} height={24} className="mt-1"/>
              </Link>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-gold" />
                <span>{contacts.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-gold" />
                <span>{contacts.mobile}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border mt-8 pt-8 text-center text-muted-foreground"
        >
          <p>© 2025. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
