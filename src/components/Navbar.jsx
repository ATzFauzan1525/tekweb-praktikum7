import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-200 w-full">
      <div className="w-full px-12 py-4 flex justify-between items-center">

        {/* LOGO (klik kembali ke atas) */}
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="w-9 h-9" />

          {/* Font sama seperti footer */}
          <div className="leading-[0.95]">
            <div className="font-light text-[17px] tracking-wide" style={{ color: "#2E61A6" }}>
              ruang
            </div>
            <div className="font-light text-[17px] tracking-wide" style={{ color: "#2E61A6" }}>
              ekspresi
            </div>
          </div>
        </a>

        {/* MENU */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#home" className="text-gray-700 hover:text-[#2E61A6] transition-colors text-sm font-medium">Home</a>
          <a href="#about" className="text-gray-700 hover:text-[#2E61A6] transition-colors text-sm font-medium">About</a>
          <a href="#program" className="text-gray-700 hover:text-[#2E61A6] transition-colors text-sm font-medium">Program</a>
          <a href="#project" className="text-gray-700 hover:text-[#2E61A6] transition-colors text-sm font-medium">Project</a>
          <a href="#testimonials" className="text-gray-700 hover:text-[#2E61A6] transition-colors text-sm font-medium">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-[#2E61A6] transition-colors text-sm font-medium">Contact</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;