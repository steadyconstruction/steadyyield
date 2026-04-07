import React from "react";
import { motion } from "framer-motion";
import { Search, ClipboardCheck } from "lucide-react";

const inspections = [
  {
    Icon: Search,
    title: "6-Month Light Inspections",
    description:
      "Regular walkthroughs every six months to check on the property's condition and address any minor issues before they escalate.",
  },
  {
    Icon: ClipboardCheck,
    title: "Annual Full Inspections",
    description:
      "A comprehensive annual inspection covering every aspect of the property, with a full written report and photographs sent directly to you.",
  },
];

export default function InspectionsSection({ image }) {
  return (
    <section id="inspections" className="bg-navy py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-body font-semibold text-gold tracking-widest uppercase mb-4">
              Property Care
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gallery-white leading-tight">
              Proactive Inspections
              <br />
              & Reporting
            </h2>
            <div className="yield-line w-20 mt-6 mb-8" />
            <p className="font-body text-lg text-gallery-white/60 leading-relaxed mb-12">
              We don't wait for problems to appear. We inspect regularly and report in full, so you always know the exact condition of your asset.
            </p>

            <div className="space-y-8">
              {inspections.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex gap-5 p-6 border border-gallery-white/10 hover:border-gold/30 transition-colors duration-300"
                >
                  <item.Icon className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-gallery-white mb-2">
                      {item.title}
                    </h4>
                    <p className="font-body text-sm text-gallery-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={image}
              alt="Property inspection"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}