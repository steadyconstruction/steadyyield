import React from "react";
import { motion } from "framer-motion";

const advantages = [
  {
    title: "Greater Flexibility Under Irish Law",
    description:
      "Under recent RTB regulations, residential tenants in Ireland can build up tenancy rights over time, making it more complex for landlords to regain possession of their property. Leasing to Steady Yield as a company under a commercial agreement operates outside of these residential tenancy rules, giving you a clearer and more straightforward path should your circumstances change.",
  },
  {
    title: "Flexible Exit Options",
    description:
      "Need to sell or move back in? We offer a genuine exit path. Typically just 3 to 6 months notice depending on the agreement length, and often sooner.",
  },
  {
    title: "Long-Term Certainty",
    description:
      "Lease terms from 1 to 10 years provide you with predictable, stable income over the long run, without the volatility of short term lets or frequent tenant turnover.",
  },
  {
    title: "One Professional Relationship",
    description:
      "You deal with us, not individual tenants. One point of contact, one monthly payment, one professional management partner.",
  },
];

export default function CommercialSection({ image }) {
  return (
    <section id="commercial" className="bg-gallery-white py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <img
              src={image}
              alt="Commercial lease protection"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm font-body font-semibold text-gold tracking-widest uppercase mb-4">
              Key Advantage
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy leading-tight">
              Commercial Lease
              <br />
              Protection
            </h2>
            <div className="yield-line w-20 mt-6 mb-8" />
            <p className="font-body text-lg text-navy/60 leading-relaxed mb-10">
              Unlike standard residential tenancies, our commercial lease model gives you significantly stronger legal protections and far more flexibility as a landlord.
            </p>

            <div className="space-y-7">
              {advantages.map((adv, i) => (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 border-l-2 border-gold/30 pl-5"
                >
                  <div>
                    <h4 className="font-heading text-base font-semibold text-navy mb-1">
                      {adv.title}
                    </h4>
                    <p className="font-body text-sm text-navy/60 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}