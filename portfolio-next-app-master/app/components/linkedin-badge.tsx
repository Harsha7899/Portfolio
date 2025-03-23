"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    LI: any;
  }
}

const LinkedInBadge: React.FC = () => {
  const badgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://platform.linkedin.com/badges/js/profile.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://platform.linkedin.com/badges/js/profile.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.LI && window.LI.Widget) {
          window.LI.Widget.init();
        }
      };
      document.body.appendChild(script);
    } else {
      // If already loaded, force widget refresh
      setTimeout(() => {
        if (window.LI && window.LI.Widget) {
          window.LI.Widget.init();
        }
      }, 500);
    }
  }, []);

  return (
    <div ref={badgeRef}>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="medium"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity="harshamattaparthy"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://www.linkedin.com/in/harshamattaparthy/?trk=public-profile-badge-profile-badge-profile-name"
        ></a>
      </div>
    </div>
  );
};

export default LinkedInBadge;
