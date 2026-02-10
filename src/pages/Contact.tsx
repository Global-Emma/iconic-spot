import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            subtitle="Contact Us"
            title="We'd Love to Hear From You"
            description="Visit us, call us, or send a message. We're always here for you."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">Our Location</h3>
                </div>
                <p className="font-body text-muted-foreground mb-3">
                  3 Obi Okoli Ave, Awka 234000, Anambra, Nigeria
                </p>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  Plus Code: 63C8+R8 Awka • Free street parking & parking lot
                </p>
                <a
                  href="https://maps.google.com/?q=3+Obi+Okoli+Ave+Awka+Anambra+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-body font-semibold text-sm hover:underline"
                >
                  Get Directions <ArrowRight size={14} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">Call Us</h3>
                </div>
                <a href="tel:08144237799" className="font-body text-lg font-semibold text-foreground hover:text-primary transition-colors">
                  0814 423 7799
                </a>
                <p className="font-body text-sm text-muted-foreground mt-2">
                  For orders, reservations, or inquiries
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">Hours</h3>
                </div>
                <div className="space-y-2 font-body text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday – Saturday</span>
                    <span className="font-medium">Open 24 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium">11:00 AM – 11:00 PM</span>
                  </div>
                </div>
              </motion.div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:08144237799"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <Phone size={16} /> Call Now
                </a>
                <a
                  href="https://wa.me/2348144237799"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-body font-semibold text-sm hover:bg-muted transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-xl overflow-hidden border border-border h-[500px] lg:h-auto min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0!2d7.0747!3d6.2106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzguMiJOIDfCsDA0JzI5LjAiRQ!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Iconic Spot Location"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
