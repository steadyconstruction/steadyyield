import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Users, ClipboardList, FileText, DoorOpen } from "lucide-react";

const benefits = [
  {
    Icon: ShieldCheck,
    title: "Guaranteed Income",
    description: "Paid every month, occupied or vacant. No gaps, no chasing, no risk.",
  },
  {
    Icon: Wrench,
    title: "Full Maintenance",
    description: "Our in-house team handles all day-to-day repairs and upkeep.",
  },
  {
    Icon: Users,
    title: "Vetted Tenants",
    description: "We source and manage professionals, students, and corporate clients.",
  },
  {
    Icon: ClipboardList,
    title: "Annual Reports",
    description: "Detailed inspection reports with photos, giving you full transparency on your property's condition.",
  },
  {
    Icon: FileText,
    title: "Commercial Lease",
    description: "Stronger landlord protections compared to standard residential tenancies.",
  },
  {
    Icon: DoorOpen,
    title: "Flexible Exit",
    description: "Selling or moving back in? We typically require just 3 to 6 months notice.",
  },
];

export default function LandlordsSection({ image }) {
  return (
    <section id="landlords" className="bg-navy py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-sm font-body font-semibold text-gold tracking-widest uppercase mb-4">
            For Landlords
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gallery-white leading-tight">
            Your Property.
            <br />
            <span className="text-gold">Our Responsibility.</span>
          </h2>
          <div className="yield-line w-20 mt-6 mx-auto" />
          <p className="mt-6 font-body text-lg text-gallery-white/60 leading-relaxed">
            We take the uncertainty out of being a landlord. Fixed income, full management, and a team that treats your asset with care.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="p-6 border border-gallery-white/10 hover:border-gold/30 transition-all duration-400 group"
              >
                <b.Icon className="w-6 h-6 text-gold mb-3" />
                <h4 className="font-heading text-base font-semibold text-gallery-white mb-2">
                  {b.title}
                </h4>
                <p className="font-body text-sm text-gallery-white/55 leading-relaxed">
                  {b.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Image + income card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={image}
              alt="Premium Dublin property"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10" />

            {/* Income card overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-navy/95 backdrop-blur-sm border border-gold/30 p-5">
              <p className="font-body text-xs text-gallery-white/50 uppercase tracking-widest mb-1">
                Monthly Guaranteed Rent
              </p>
              <p className="font-heading text-3xl font-bold text-gold mb-3">€2,400</p>
              <p className="font-body text-xs text-gallery-white/50 mb-3">
                Paid every month, occupied or vacant
              </p>
              <div className="flex items-center justify-between text-xs font-body mb-2">
                <span className="text-gallery-white/60">Occupancy this month</span>
                <span className="text-gallery-white font-semibold">88%</span>
              </div>
              <div className="w-full h-1 bg-gallery-white/10 rounded-full">
                <div className="h-1 bg-gold rounded-full" style={{ width: "88%" }} />
              </div>
              <div className="flex items-center justify-between text-xs font-body mt-2">
                <span className="text-gallery-white/60">Your income received</span>
                <span className="text-gold font-semibold">100%</span>
              </div>
              <p className="mt-3 text-xs text-gold/70 flex items-center gap-1">
                <span>✓</span> Every payment on time
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}