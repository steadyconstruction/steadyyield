import React from "react";
import { motion } from "framer-motion";
import { HardHat, Monitor, GraduationCap, Clock } from "lucide-react";

const tenantTypes = [
  {
    Icon: HardHat,
    title: "Construction Professionals",
    description:
      "Flexible, quality accommodation close to Dublin's major development sites.",
  },
  {
    Icon: Monitor,
    title: "IT & Tech Workers",
    description:
      "Well-located rooms for tech professionals working in Dublin's Silicon Docks and beyond.",
  },
  {
    Icon: GraduationCap,
    title: "Students",
    description:
      "Affordable shared and private rooms near Dublin's universities and colleges.",
  },
  {
    Icon: Clock,
    title: "Short-Term Stays",
    description:
      "Flexible arrangements for corporate clients, tourists, and those between properties.",
  },
];

export default function TenantsSection() {
  return (
    <section id="tenants" className="bg-gallery-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-sm font-body font-semibold text-gold tracking-widest uppercase mb-4">
            For Tenants & Renters
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy leading-tight">
            Quality Rooms
            <br />
            Across Dublin
          </h2>
          <div className="yield-line w-20 mt-6" />
          <p className="mt-6 font-body text-lg text-navy/60 leading-relaxed">
            Professional, clean, well-maintained accommodation — whether you're a working professional, student, or need short-term housing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tenantTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 border border-navy/10 hover:border-gold/40 hover:shadow-xl transition-all duration-500"
            >
              <type.Icon className="w-7 h-7 text-gold mb-5" />
              <h4 className="font-heading text-lg font-semibold text-navy mb-3">
                {type.title}
              </h4>
              <p className="font-body text-sm text-navy/60 leading-relaxed">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-navy text-navy font-body font-semibold text-sm hover:bg-navy hover:text-gallery-white transition-all duration-300"
          >
            Find a Room in Dublin
          </a>
        </motion.div>
      </div>
    </section>
  );
}