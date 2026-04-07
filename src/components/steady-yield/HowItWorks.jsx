import React from "react";
import { motion } from "framer-motion";
import { Home, FileSignature, Settings, Banknote } from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: Home,
    title: "Property Assessment",
    description:
      "We evaluate your property and agree on a competitive fixed monthly rent based on location, size, and condition. No obligation, no pressure.",
  },
  {
    number: "02",
    Icon: FileSignature,
    title: "Sign the Lease",
    description:
      "We sign a commercial lease agreement tailored to your needs, from 1 to 10 years, giving you financial certainty and legal protection from day one.",
  },
  {
    number: "03",
    Icon: Settings,
    title: "We Take Over",
    description:
      "We assume full management responsibility. Tenant sourcing, maintenance, inspections - all handled by our professional team. You do nothing.",
  },
  {
    number: "04",
    Icon: Banknote,
    title: "Collect Your Rent",
    description:
      "Your agreed rent arrives every month, on time, regardless of occupancy levels. Occupied or vacant, your income never stops.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gallery-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm font-body font-semibold text-gold tracking-widest uppercase mb-4">
            Simple Process
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy leading-tight">
            How It Works
          </h2>
          <div className="yield-line w-20 mt-6 mx-auto" />
          <p className="mt-6 font-body text-lg text-navy/60 leading-relaxed">
            From initial assessment to guaranteed monthly income. Our process is straightforward and stress-free.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative inline-block mb-4">
                <span className="font-heading text-8xl font-bold text-navy/5 select-none leading-none">
                  {step.number}
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <step.Icon className="w-8 h-8 text-gold" />
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-navy/60 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}