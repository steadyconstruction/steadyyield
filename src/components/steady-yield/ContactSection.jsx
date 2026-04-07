import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Home } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gallery-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-body font-semibold text-gold tracking-widest uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy leading-tight">
              Let's Talk About
              <br />
              Your Property
            </h2>
            <div className="yield-line w-20 mt-6 mb-8" />
            <p className="font-body text-lg text-navy/60 leading-relaxed mb-12">
              Whether you are a landlord interested in guaranteed rent or a tenant looking for accommodation, our Dublin team is ready to help. We will come back to you promptly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-navy">Registered Office</p>
                  <p className="font-body text-sm text-navy/60 mt-1">
                    20 Harcourt Street, Dublin 2, D02 H364
                    <br />
                    <span className="text-navy/40 text-xs">By appointment only</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-navy">Email Us</p>
                  <p className="font-body text-sm text-navy/60 mt-1">We respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 flex-shrink-0">
                  <Home className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-navy">Property Types</p>
                  <p className="font-body text-sm text-navy/60 mt-1">
                    Apartments, houses, multi-unit blocks
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Tally Form in gold frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Gold border frame */}
            <div className="absolute -inset-3 border border-gold/30 pointer-events-none z-10" />
            <div className="bg-navy overflow-hidden" style={{ minHeight: "800px" }}>
              <iframe
                src="https://tally.so/embed/LZ0OjG?alignLeft=1&hideTitle=1&transparentBackground=0"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Contact Steady Yield"
                className="w-full"
                style={{ minHeight: "800px", background: "#0D1B2A" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}