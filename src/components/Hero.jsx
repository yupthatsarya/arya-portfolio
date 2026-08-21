import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import centerImage from "../assets/hero_assets/hero_center.PNG";

const Hero = ({ onPreloadComplete }) => {
  const [text, setText] = useState('ARYA');
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    const target = 'PORTFOLIO';
    const start = 'ARYA';
    let iterations = 0;
    let intervalId;
    let timeoutId;

    const imageLoadPromise = new Promise((resolve) => {
      const img = new window.Image();
      img.src = centerImage;

      if (img.complete) resolve();
      else {
        img.onload = resolve;
        img.onerror = resolve;
      }
    });

    const delayPromise = new Promise((resolve) => {
      timeoutId = setTimeout(resolve, 1000);
    });

    let isMounted = true;

    Promise.all([imageLoadPromise, delayPromise]).then(() => {
      if (!isMounted) return;

      intervalId = setInterval(() => {
        setText(() =>
          target
            .split('')
            .map((letter, index) => {
              if (index < Math.floor(iterations)) return target[index];
              if (index < start.length) return start[index];
              return '';
            })
            .join('')
        );

        if (iterations >= target.length) {
          clearInterval(intervalId);

          const tl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = 'auto';

              if (onPreloadComplete) {
                onPreloadComplete();
              }
            },
          });

          const isMobile = window.innerWidth < 768;

          tl.to(
            containerRef.current,
            {
              top: isMobile ? '20%' : '45%',
              duration: 1.5,
              ease: 'power3.inOut',
            },
            '+=0.2'
          );

          tl.fromTo(
            [subtitleRef.current, buttonsRef.current],
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.2,
              ease: 'power3.out',
            },
            '-=1.0'
          );

          tl.fromTo(
            imageRef.current,
            { y: '100vh' },
            {
              y: 0,
              duration: 1.5,
              ease: 'power3.out',
            },
            '-=1.2'
          );
        }

        iterations += 1 / 3;
      }, 50);
    });

    return () => {
      isMounted = false;
      document.body.style.overflow = 'auto';
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [onPreloadComplete]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end justify-center overflow-hidden bg-[#141316]"
    >
      {/* Subtle warm glow behind the image */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(117,72,69,0.42),transparent_42%)]" />

      {/* Large background text */}
      <div
        ref={containerRef}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none flex flex-col items-start w-max"
      >
        <h1 className="text-[16vw] md:text-[10rem] lg:text-[14rem] font-black tracking-tighter leading-none uppercase text-[#D9C8BD] opacity-90 drop-shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
          {text}
        </h1>

        <p
          ref={subtitleRef}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-12 md:left-8 text-[#E7DDD5] text-base md:text-2xl lg:text-4xl z-10 opacity-0 w-max"
        >
          <span className="font-bold">Cybersecurity</span>{' '}
          <span className="font-light italic text-[#BFA49A]">
            Enthusiast
          </span>
        </p>

        <div
          ref={buttonsRef}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-12 md:left-auto md:right-20 flex items-center gap-2 md:gap-4 pointer-events-auto z-10 opacity-0 w-max"
        >
          <a
            href="#contact"
            aria-label="Go to contact section"
            className="group w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#BFA49A]/40 flex items-center justify-center bg-[#262126]/80 backdrop-blur-md hover:bg-[#754845] transition-all duration-300"
          >
            <svg
              className="w-4 h-4 text-[#E7DDD5] transition-transform duration-300 group-hover:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 7L7 17M7 17H16M7 17V8"
              />
            </svg>
          </a>

          <a
            href="#contact"
            className="px-5 py-2 md:px-6 md:py-2.5 rounded-full border border-[#BFA49A]/40 bg-[#262126]/80 backdrop-blur-md hover:bg-[#754845] transition-all duration-300"
          >
            <span className="text-[#E7DDD5] text-sm md:text-base italic font-medium tracking-wider">
              Contact
            </span>
          </a>
        </div>
      </div>

      {/* Your photograph */}
      <div
        ref={imageRef}
        className="relative z-10 flex flex-col items-center w-full pointer-events-none translate-y-[100vh]"
      >
        <img
          src={centerImage}
          alt="Arya Pattanshetty"
          className="w-full max-w-xl md:max-w-2xl object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.65)]"
        />
      </div>
    </section>
  );
};

export default Hero;