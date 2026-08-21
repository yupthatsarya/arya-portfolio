import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import centerImage from "../assets/hero_assets/hero_center.PNG";

const Hero = ({ onPreloadComplete }) => {
  const [text, setText] = useState('ARYA');

  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  // Prevent animation from starting twice
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    hasAnimated.current = true;

    const target = 'PORTFOLIO';
    const start = 'ARYA';

    let iterations = 0;
    let intervalId;
    let timeoutId;
    let cancelled = false;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });

    document.body.style.overflow = 'hidden';

    // Set initial positions BEFORE animation starts
    gsap.set(containerRef.current, {
      top: '50%',
    });

    gsap.set(subtitleRef.current, {
      y: 30,
      opacity: 0,
    });

    gsap.set(buttonsRef.current, {
      y: 30,
      opacity: 0,
    });

    gsap.set(imageRef.current, {
      yPercent: 110,
    });

    const imageLoadPromise = new Promise((resolve) => {
      const image = new Image();

      image.src = centerImage;

      if (image.complete) {
        resolve();
      } else {
        image.onload = resolve;
        image.onerror = resolve;
      }
    });

    const delayPromise = new Promise((resolve) => {
      timeoutId = setTimeout(resolve, 700);
    });

    Promise.all([imageLoadPromise, delayPromise]).then(() => {
      if (cancelled) return;

      intervalId = setInterval(() => {
        if (cancelled) return;

        const currentText = target
          .split('')
          .map((letter, index) => {
            if (index < Math.floor(iterations)) {
              return target[index];
            }

            if (index < start.length) {
              return start[index];
            }

            return '';
          })
          .join('');

        setText(currentText);

        if (iterations >= target.length) {
          clearInterval(intervalId);

          setText(target);

          const isMobile = window.innerWidth < 768;

          const timeline = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = '';

              if (onPreloadComplete) {
                onPreloadComplete();
              }
            },
          });

          // Move PORTFOLIO upward
          timeline.to(
            containerRef.current,
            {
              top: isMobile ? '24%' : '45%',
              duration: 1.2,
              ease: 'power3.inOut',
            },
            '+=0.1'
          );

          // Show subtitle
          timeline.to(
            subtitleRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
            },
            '-=0.7'
          );

          // Show buttons
          timeline.to(
            buttonsRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out',
            },
            '-=0.6'
          );

          // Bring your image upward ONCE
          timeline.to(
            imageRef.current,
            {
              yPercent: 0,
              duration: 1.3,
              ease: 'power3.out',
            },
            '-=0.9'
          );
        }

        iterations += 1 / 3;
      }, 50);
    });

    return () => {
      cancelled = true;

      clearTimeout(timeoutId);
      clearInterval(intervalId);

      document.body.style.overflow = '';
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full h-[100svh] min-h-[100svh] overflow-hidden bg-[#151518]"
      style={{
        background:
          'radial-gradient(circle at 50% 35%, #302326 0%, #1c191c 45%, #121214 85%)',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* PORTFOLIO section */}
      <div
        ref={containerRef}
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none flex flex-col items-center"
      >
        <h1 className="text-[16vw] sm:text-[15vw] md:text-[10rem] lg:text-[14rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-600 drop-shadow-2xl leading-none uppercase whitespace-nowrap">
          {text}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-3 md:absolute md:-bottom-12 md:left-8 text-white text-sm sm:text-base md:text-2xl lg:text-4xl drop-shadow-md whitespace-nowrap"
        >
          <span className="font-bold">Cybersecurity</span>{' '}
          <span className="font-light italic text-gray-300">
            Enthusiast
          </span>
        </p>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="mt-4 md:absolute md:-bottom-20 md:right-20 flex items-center gap-3 pointer-events-auto whitespace-nowrap"
        >
          <a
            href="#contact"
            aria-label="Go to contact section"
            className="group w-11 h-11 md:w-12 md:h-12 rounded-full border border-gray-400/30 flex items-center justify-center backdrop-blur-md bg-black/20 hover:bg-white/10 hover:border-gray-400/50 transition-all duration-300"
          >
            <svg
              className="w-4 h-4 text-gray-300 transition-transform duration-300 group-hover:rotate-45"
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
            className="px-6 py-3 md:px-6 md:py-2.5 rounded-full border border-gray-400/30 flex items-center justify-center backdrop-blur-md bg-black/20 hover:bg-white/10 hover:border-gray-400/50 transition-all duration-300"
          >
            <span className="text-gray-300 text-sm md:text-base italic font-light tracking-wider">
              Contact
            </span>
          </a>
        </div>
      </div>

      {/* YOUR IMAGE — ABSOLUTELY POSITIONED */}
      <div
        ref={imageRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full flex justify-center pointer-events-none"
      >
        <img
          src={centerImage}
          alt="Arya Pattanshetty"
          className="
            w-[125vw]
            max-w-none
            h-auto
            object-contain
            md:w-auto
            md:max-w-2xl
            md:max-h-[82vh]
            drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]
          "
        />
      </div>
    </section>
  );
};

export default Hero;