import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      {/* Background image */}
      <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full">
        <img
          src={heroImage}
          alt="Modern Dublin architecture"
          className="w-full h-full object-cover opacity-30 lg:opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="max-w-2xl pt-20">


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-gallery-white leading-tight"
          >
            Guaranteed
            <br />
            Rent.{" "}
            <span className="text-gold">Zero</span>
            <br />
            Hassle.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-lg md:text-xl font-body text-gallery-white/70 leading-relaxed max-w-lg"
          >
            We lease your Dublin property for 1 to 10 years and pay you every
            month, whether it's occupied or not. Full management. Complete
            peace of mind.
          </motion.p>

          {/* Key proof points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 text-sm font-body text-gallery-white/60"
          >
            {["No void periods", "Full property management", "Commercial lease flexibility"].map((pt) => (
              <span key={pt} className="flex items-center gap-2">
                <span className="text-gold">✓</span> {pt}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-body font-semibold text-sm tracking-wide hover:bg-gold/90 transition-all duration-300"
            >
              Get My Guaranteed Rent
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 border border-gallery-white/30 text-gallery-white font-body font-medium text-sm hover:border-gold hover:text-gold transition-all duration-300"
            >
              See How It Works
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="w-5 h-5 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}