import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
// bgImage prop removed — solid navy background used instead

const testimonials = [
  {
    quote:
      "I have not dealt with a single tenant issue in months. The rent arrives every month without fail and sometimes even a few days earlier than the set date. Best decision I made. Thank you Momin. I highly recommend.",
    name: "George",
    role: "Landlord, Drumcondra",
    initial: "G",
  },
  {
    quote:
      "Momin has been the best to deal with, always a quick response back. The commercial lease aspect was what sold me. I knew I could get my property back if I needed to sell. Everything he promised, he delivered.",
    name: "Aoife",
    role: "Landlord, Phibsborough",
    initial: "A",
  },
  {
    quote:
      "I've been with Momin for the past 10 months and he has been great to deal with. The inspection reports give me full confidence the property is being maintained properly. Because of how seamless the process is, I have given Momin 2 more commercial properties of mine.",
    name: "Patrick",
    role: "Landlord, Blanchardstown Business Park",
    initial: "P",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-navy py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-sm font-body font-semibold text-gold tracking-widest uppercase mb-4">
            Landlord Stories
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gallery-white leading-tight">
            What Landlords Say
          </h2>
          <div className="yield-line w-20 mt-6 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative p-8 lg:p-10 bg-gallery-white/5 border border-gallery-white/10 hover:border-gold/30 transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="font-body text-sm text-gallery-white leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>

              <div className="yield-line w-10 mb-5" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-sm font-bold text-gold">{t.initial}</span>
                </div>
                <div>
                  <p className="font-heading text-base font-semibold text-gallery-white">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-gallery-white/50 mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}