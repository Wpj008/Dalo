import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-dmi-charcoal text-white px-6"
      data-testid="page-404"
    >
      <div className="font-serif text-[120px] sm:text-[180px] leading-none text-dmi-gold/60 italic font-light">
        404
      </div>
      <p className="dmi-lead text-white/70 mt-2">
       Le site est en Construction. Revenez plus tard !
      </p>
      <Link to="/" className="btn-gold mt-10" data-testid="404-home-link">
        Back to home
      </Link>
    </div>
  );
}
