import React from "react";

export default function Logo({ className = "h-12" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} style={{ height: undefined }}>
      {/* Pinwheel icon */}
      <svg
        viewBox="0 0 100 100"
        className="h-full w-auto flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100" height="100" fill="white" />
        <path d="M 0,0 L 50,0 A 50,50 0 0,0 0,50 Z" fill="#C9A84C" />
        <path d="M 100,100 L 50,100 A 50,50 0 0,1 100,50 Z" fill="#C9A84C" />
        <path d="M 50,0 C 44,16 44,34 50,50 C 56,34 56,16 50,0 Z" fill="#0d1b2a" />
        <path d="M 100,50 C 84,44 66,44 50,50 C 66,56 84,56 100,50 Z" fill="#0d1b2a" />
        <path d="M 50,100 C 56,84 56,66 50,50 C 44,66 44,84 50,100 Z" fill="#0d1b2a" />
        <path d="M 0,50 C 16,56 34,56 50,50 C 34,44 16,44 0,50 Z" fill="#0d1b2a" />
      </svg>

      {/* Text */}
      <div className="flex flex-col justify-center leading-none">
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "1.35em",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
          }}
        >
          Steady Yield
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#C9A84C",
            fontWeight: 600,
            fontSize: "0.45em",
            letterSpacing: "0.15em",
            marginTop: "0.25em",
          }}
        >
          TRUST. RELIABILITY. GROWTH.
        </span>
      </div>
    </div>
  );
}
