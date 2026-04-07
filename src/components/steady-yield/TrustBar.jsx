import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "1-10", label: "Year Lease Terms" },
  { value: "100%", label: "On-Time Payment Rate" },
  { value: "0", label: "Void Periods" },
  { value: "24hr", label: "Response Time" },
];

export default function TrustBar() {
  return (
    <section className="bg-navy border-t border-gallery-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-3xl md:text-4xl font-bold text-gold">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-body text-gallery-white/50 tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}