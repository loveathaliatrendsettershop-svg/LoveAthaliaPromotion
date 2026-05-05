import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import banner from "../../assets/images/Homepage-banner.png"

function Hero() {
  const fullText = "Style Your Little Ones with Love!";
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { hash } = useLocation();

  // Scroll to section when coming from another page (e.g. /#about)
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // small delay to let the page render first
      }
    }
  }, [hash]);

  // Detect when Hero is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typing animation (runs when visible)
  useEffect(() => {
    if (!isVisible) return;

    setText("");
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="hero" className="relative w-full h-screen mb-10 md:mb-20">

   
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={banner}
        alt="banner"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-[#8b333d]/60 backdrop-blur-sm" />

      {/* text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-yellow-400">
        <h1 className="text-3xl md:text-6xl leading-normal tracking-wider text-center font-playfair font-bold">
          {text}
          <span className="animate-pulse">|</span>
        </h1>
      </div>

    </section>
  );
}

export default Hero;