import React from 'react';

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#1B191C] text-[#E7DDD5] px-6 md:px-16 py-24 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-[#BFA49A] mb-6">
          Let's connect
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
          <div>
            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.85] mb-10">
              GET IN
              <br />
              <span className="text-[#B87A73]">TOUCH.</span>
            </h2>

            <p className="text-[#BFAFA8] text-lg md:text-xl max-w-xl leading-relaxed">
              Open to learning opportunities, technical collaborations,
              creative ideas and meaningful projects.
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:pb-4">
            <div className="border-t border-[#BFA49A]/30 pt-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#BFA49A] mb-3">
                Email
              </p>

              <a
                href="mailto:aryapattanshetty@gmail.com"
                className="text-xl md:text-3xl font-medium break-all hover:text-[#D8A49A] transition-colors"
              >
                aryapattanshetty@gmail.com
              </a>
            </div>

            <div className="border-t border-[#BFA49A]/30 pt-6">
              <p className="text-sm uppercase tracking-[0.2em] text-[#BFA49A] mb-5">
                Find me online
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/artsy._.arya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-[#BFA49A]/30 bg-[#262126] hover:bg-[#754845] hover:text-white transition-all duration-300 font-medium"
                >
                  Instagram ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/arya-pattanshetty-614247382/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-[#BFA49A]/30 bg-[#262126] hover:bg-[#754845] hover:text-white transition-all duration-300 font-medium"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://github.com/yupthatsarya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-[#BFA49A]/30 bg-[#262126] hover:bg-[#754845] hover:text-white transition-all duration-300 font-medium"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;