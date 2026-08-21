const Footer = () => {
  return (
    <footer className="bg-[#4A252B] text-[#FFF6F1] px-6 md:px-16 py-12 min-h-screen flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div>
          <p className="text-[#E8B8B1] text-sm mb-4">
            Connect with me
          </p>

          <a
            href="mailto:aryapattanshetty@gmail.com"
            className="text-3xl md:text-5xl font-medium hover:text-[#F3A6A1] transition-colors break-all"
          >
            aryapattanshetty@gmail.com
          </a>

          <div className="flex flex-wrap gap-6 text-sm mt-10 text-[#E8B8B1]">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>

            <a href="#service" className="hover:text-white transition-colors">
              Work
            </a>

            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="md:text-right">
          <h3 className="text-2xl font-medium mb-3">
            Let's connect
          </h3>

          <p className="text-[#E8B8B1] max-w-xs md:ml-auto leading-relaxed">
            Open to learning opportunities, technical collaborations and
            meaningful projects.
          </p>
        </div>
      </div>

      <div className="border-y border-[#FFFFFF]/15 py-8 mt-12 flex flex-wrap justify-between gap-6 text-lg font-medium">
        <a
          href="https://www.instagram.com/artsy._.arya/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F3A6A1] transition-colors"
        >
          Instagram
        </a>

        <a
          href="https://www.linkedin.com/in/arya-pattanshetty-614247382/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F3A6A1] transition-colors"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/yupthatsarya"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F3A6A1] transition-colors"
        >
          GitHub
        </a>
      </div>

      <div className="flex-1 flex items-center justify-center py-16">
        <h1 className="text-[22vw] md:text-[18vw] font-black tracking-tighter leading-none text-[#F8D8D2]">
          ARYA
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#D7A8A5]">
        <p>
          © {new Date().getFullYear()} Arya Pattanshetty. All Rights Reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Privacy policy
          </a>

          <a href="#" className="hover:text-white transition-colors">
            Terms and conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;