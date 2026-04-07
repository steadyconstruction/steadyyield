import React from "react";

const navLinks = [
  { label: "Landlords", href: "#landlords" },
  { label: "Tenants", href: "#tenants" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gallery-white/10" style={{ backgroundColor: '#0d1b2a' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <img
              src="https://media.base44.com/images/public/69d516936e59faa54b8f3315/eec02e9c0_Screenshot2026-03-18at72551pm.png"
              alt="Steady Yield"
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="font-body text-xs text-gallery-white/30">
              Fully registered & insured in Ireland
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading text-sm font-semibold text-gallery-white mb-1">
              Quick Links
            </h4>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-gallery-white/40 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <h4 className="font-heading text-sm font-semibold text-gallery-white mb-1">
              Contact
            </h4>
            <p className="font-body text-sm text-gallery-white/40">
              20 Harcourt Street, Dublin 2
            </p>
            <p className="font-body text-xs text-gallery-white/30">
              By appointment only
            </p>
            <a
              href="https://www.steadyyield.ie"
              className="font-body text-sm text-gold/60 hover:text-gold transition-colors mt-1"
            >
              steadyyield.ie
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gallery-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-gallery-white/25">
            © {new Date().getFullYear()} Steady Yield. All rights reserved. Registered in Ireland.
          </p>
          <div className="flex gap-6">
            <span className="font-body text-xs text-gallery-white/25 cursor-pointer hover:text-gallery-white/50 transition-colors">Privacy Policy</span>
            <span className="font-body text-xs text-gallery-white/25 cursor-pointer hover:text-gallery-white/50 transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}