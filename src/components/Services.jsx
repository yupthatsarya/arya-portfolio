import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const workData = [
  {
    id: '01',
    title: 'HEALTHPULSE — RESPIRATORY SOUND CLASSIFIER',
    description:
      'A machine-learning based respiratory sound classification project built using the ICBHI 2017 dataset. The system uses a YAMNet and Random Forest pipeline and reached around 87% accuracy, with a stethoscope integration for low-cost physical examination of wheezes and crackles.',
    capabilities: ['YAMNet', 'Random Forest', 'ICBHI 2017 dataset', 'Respiratory sound classification', 'Stethoscope integration', 'Around 87% accuracy'],
  },
  {
    id: '02',
    title: 'MULTIPLE-LAYER PROMPT INJECTION DETECTION',
    description:
      'A security research project focused on detecting prompt injection attacks against AI language models. The system combines classification, similarity-based and pattern-based checks, with the frontend deployed on Vercel.',
    capabilities: ['Prompt injection detection', 'Classification checks', 'Similarity checks', 'Pattern-based checks', 'Security research', 'Vercel deployment'],
  },
  {
    id: '03',
    title: 'OFFLINE OTP GENERATOR',
    description:
      'A hardware and software project for generating OTPs for website authentication without an internet connection, using an ESP32, DS3231 real-time clock module and OLED display.',
    capabilities: ['ESP32', 'DS3231 RTC module', 'OLED display interfacing', 'Arduino IDE', 'Offline OTP generation', 'Website authentication'],
  },
  {
    id: '04',
    title: 'CYBERSECURITY & CTFs',
    description:
      'Active participation in practical cybersecurity challenges, including a first-place finish in a weekly TryHackMe CTF competition and a Top 20 individual finish at Hackemon 2.0 by Coding Club RVCE.',
    capabilities: ['TryHackMe CTF — First place', 'Hackemon 2.0 — Top 20 individual', 'Blockchain CTF participant', 'Security problem solving'],
  },
  {
    id: '05',
    title: 'TECHNICAL TOOLKIT',
    description:
      'A growing technical foundation across programming, machine learning, engineering tools, developer tooling and embedded systems.',
    capabilities: ['C', 'C++', 'Python', 'HTML', 'CSS', 'YAMNet', 'Random Forest', 'AutoCAD', 'Fusion 360', 'Git', 'GitHub', 'VS Code', 'ESP32'],
  },
  {
    id: '06',
    title: 'LEADERSHIP & COMMUNITY',
    description:
      'Alongside technical work, I contribute to student communities through organising, content creation and leadership roles across RVCE clubs and initiatives.',
    capabilities: ['Google Developer Group RVCE', 'Coding Club RVCE', 'Rotaract RVCE', 'Studio Zero RVCE', 'Computer Vision 36-hour National Level Hackathon', 'SIP ClubShowcase organising', 'NEC IIT Bombay x RVCE E-CELL'],
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!titleRef.current) return;

    const animation = gsap.fromTo(
      titleRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => animation.kill();
  }, []);

  return (
    <section id="service" className="md:min-h-screen bg-[#050505] text-white pt-12 pb-12 md:pb-24 px-6 md:px-16 flex flex-col relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-end md:items-start justify-end w-full mt-0 z-0 pb-12">
        <div className="flex flex-col md:flex-row items-start justify-end gap-2 md:gap-4 lg:gap-8 pr-2 md:pr-0 text-right">
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[1.1] md:leading-[0.9] text-right"
          >
            WHAT I<br />WORK ON
          </h2>
        </div>
      </div>

      <div className="z-10 relative mt-0 -mx-6 md:-mx-16 border-t border-white/20">
        {workData.map((work, index) => {
          const isHighlighted = activeIndex === index || (!isMobile && hoveredIndex === index);

          return (
            <div
              key={work.id}
              className={`border-b border-white/20 py-5 md:py-7 px-6 md:px-16 cursor-pointer transition-all duration-300 ease-in-out ${
                isHighlighted ? 'bg-[#E98E96]' : ''
              }`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start">
                <div className="flex items-start justify-between w-full lg:w-1/2 gap-2">
                  <div className="flex items-start gap-3 md:gap-16 w-full min-w-0">
                    <div className="h-7 flex items-center md:h-10 flex-shrink-0">
                      <span className={`text-lg md:text-3xl font-medium leading-none ${isHighlighted ? 'text-black' : 'text-white'}`}>
                        {work.id}
                      </span>
                    </div>

                    <div className="flex flex-col w-full min-w-0">
                      <div className="h-7 flex items-center md:h-10">
                        <h3 className={`text-[11px] sm:text-sm md:text-xl lg:text-2xl font-black uppercase tracking-wide leading-none transition-colors duration-300 whitespace-nowrap overflow-hidden text-ellipsis ${isHighlighted ? 'text-black' : 'text-white'}`}>
                          {work.title}
                        </h3>
                      </div>

                      <div className={`overflow-hidden transition-all duration-500 ease-in-out w-full ${
                        activeIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pt-6 lg:pt-8 flex flex-col gap-3">
                          <ul className={`text-sm md:text-base font-light space-y-2 flex flex-col ${
                            isHighlighted ? 'text-black/80' : 'text-gray-300'
                          }`}>
                            {work.capabilities.map((capability) => (
                              <li key={capability} className="flex items-start gap-3">
                                <span className={`mt-1.5 opacity-70 text-[10px] ${
                                  isHighlighted ? 'text-black' : 'text-[#E98E96]'
                                }`}>■</span>
                                <span>{capability}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-7 flex items-center flex-shrink-0 lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-6 h-6 transition-all duration-300 ${
                        isHighlighted ? 'text-black' : 'text-[#E98E96]'
                      } ${activeIndex === index ? '-rotate-45' : 'rotate-45'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className="flex flex-row gap-6 w-full lg:w-1/2 justify-between lg:justify-end relative items-start">
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-start w-full ${
                    activeIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-4 md:pt-6 lg:pt-[72px] flex flex-col gap-6 w-full pr-0 lg:pr-12">
                      <p className={`text-base md:text-lg leading-relaxed max-w-lg font-light ${
                        isHighlighted ? 'text-black/80' : 'text-gray-300'
                      }`}>
                        {work.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center justify-center pt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-10 h-10 transition-transform duration-300 ${
                        isHighlighted ? 'text-black rotate-45' : 'text-[#E98E96]'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
