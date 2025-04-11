import { useEffect, useState } from "react";

const Title = () => {
   const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 50);
   };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-primary text-white text-center title-navbar fixed-top shadow ${
        isVisible ? "title-visible" : "title-hidden"
      }`}
    >
      <div>
        <h1 className="mb-2 display-6">Reactive 35+5 Clock</h1>
        <small className="text-white-50">By vinay</small>
      </div>

      <style>{`
        .title-navbar {
          padding: 1rem 0.5rem 0; /* ✅ bottom padding set to 0 */
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
          z-index: 1040;
        }

        .title-visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .title-hidden {
          opacity: 0;
          transform: translateY(-100%);
          pointer-events: none;
        }

        .title-navbar h1 {
          font-weight: 300;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .title-navbar h1 {
            font-size: 1.75rem;
          }

          .title-navbar small {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .title-navbar {
            padding: 0.75rem 0.25rem 0; /* ✅ also bottom padding 0 on small screens */
          }
        }
      `}</style>
    </header>
  );
};

export default Title;