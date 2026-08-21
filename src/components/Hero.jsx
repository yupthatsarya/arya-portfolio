import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import centerImage from '../assets/hero_assets/hero_center.png';

const Hero = ({ onPreloadComplete }) => {
  const [text, setText] = useState('ARYA');

  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  // Prevent the intro animation from ever running twice
  const animationStarted = useRef(false);

  useEffect(() => {
    if (animationStarted.current) return;

    animationStarted.current = true;

    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    const target = 'PORTFOLIO';
    const start = 'ARYA';

    let iterations = 0;
    let intervalId;
    let timeoutId;
    let isMounted = true;

    const imageLoadPromise = new Promise((resolve) => {
      const img = new window.Image();
      img.src = centerImage;

      if (img.complete) {
        resolve();
      } else {
        img.onload = resolve;
        img.onerror = resolve;
      }
    });

    const delayPromise = new Promise((resolve) => {
      timeoutId = setTimeout(resolve, 700);
    });

    Promise.all([imageLoadPromise, delayPromise]).then(() => {
      if (!isMounted) return;

      intervalId = setInterval(() => {
        if (!isMounted) return;

        setText(
          target
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
            .join('')
        );

        if (iterations >= target.length) {
          clearInterval(intervalId);
          setText(target);

          const isMobile = window.innerWidth < 768;

          const tl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = 'auto';

              if (onPreloadComplete) {
                onPreloadComplete();
              }
            },
          });

          tl.to(
            containerRef.current,
            {
              top: isMobile ? '26%' : '45%',
              duration: 1.4,
              ease: 'power3.inOut',
            },
            '+=0.15'
          );

          tl.fromTo(
            [subtitleRef.current, buttonsRef.current],
            {
              y: 40,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.15,
              ease: 'power3.out',
            },
            '-=0.9'
          );

          tl.fromTo(
            imageRef.current,
            {
              y: '100%',
            },
            {
              y: 0,
              duration: 1.4,
              ease: 'power3.out',
            },
            '-=1.1'
          );
        }

        iterations += 1 / 3;
      }, 50);
    });

    return () => {
      isMounted = false;

      clearTimeout(timeoutId);
      clearInterval(intervalId);

      document.body.style.overflow = 'auto';
    };
  }, [onPreloadComplete]);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] md:min-h-screen w-full overflow-hidden bg-[#121214]"
      style={{
        background:
          'radial-gradient(circle at 50% 38%, #2a2022 0%, #1a181b 38%, #111114 75%)',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

      {/* PORTFOLIO text area */}
      <div
        ref={containerRef}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none flex flex-col items-start w-max"
      >
        <h1 className="text-[17vw] md:text-[10rem] lg:text-[14rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-700 drop-shadow-2xl pr-2 md:pr-8 leading-none uppercase">
          {text}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="absolute left-1/2 -translate-x-1/2 -bottom-10 md:translate-x-0 md:-bottom-12 md:left-8 text-white text-sm sm:text-base md:text-2xl lg:text-4xl drop-shadow-md z-10 opacity-0 whitespace-nowrap"
        >
          <span className="font-bold">Cybersecurity</span>{' '}
          <span className="font-light italic text-gray-300">Enthusiast</span>
        </p>

        {/* Buttons */}
        <div
          ref={buttonsRef}
          className="absolute left-1/2 -translate-x-1/2 -bottom-[5.5rem] md:translate-x-0 md:-bottom-12 md:left-auto md:right-20 flex items-center gap-3 md:gap-4 pointer-events-auto z-10 opacity-0 whitespace-nowrap"
        >
          <a
            href="#contact"
            aria-label="Go to contact section"
            className="group w-12 h-12 md:w-12 md:h-12 rounded-full border border-gray-400/30 flex items-center justify-center backdrop-blur-md bg-black/20 hover:bg-white/10 hover:border-gray-400/50 transition-all duration-300 cursor-pointer"
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
            className="px-6 py-3 md:px-6 md:py-2.5 rounded-full border border-gray-400/30 flex items-center justify-center backdrop-blur-md bg-black/20 hover:bg-white/10 hover:border-gray-400/50 transition-all duration-300 cursor-pointer"
          >
            <span className="text-gray-300 text-sm md:text-base italic font-light tracking-wider">
              Contact
            </span>
          </a>
        </div>
      </div>

      {/* Your image */}
      <div
        ref={imageRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none translate-y-full w-full flex justify-center"
      >
        <img
          src={centerImage}
          alt="Arya Pattanshetty"
          className="
            h-auto
            w-[72vw]
            max-w-[420px]
            md:w-auto
            md:max-w-2xl
            md:max-h-[82vh]
            object-contain
            drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]
          "
        />
      </div>
    </section>
  );
};

export default Hero;