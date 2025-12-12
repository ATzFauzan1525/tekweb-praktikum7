import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#2E61A6" }} className="text-white border-none">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-8">

          {/* Logo + Deskripsi */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#2E61A6" }}
              >
                <img src="/logo-footer.svg" alt="Logo" className="w-10 h-10" />
              </div>

              <div className="leading-[0.95]">
                <div className="font-light text-[17px] tracking-wide">ruang</div>
                <div className="font-light text-[17px] tracking-wide">ekspresi</div>
              </div>
            </div>

            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Wadah kreatif dan kompetitif untuk mahasiswa yang ingin mengembangkan potensi melalui ideation,
              creation, collaboration, dan guidance.
            </p>

            <div className="space-y-3 text-sm text-blue-100">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Jl. Ringroad Selatan, Krapyak, Tamanan, Kec. Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55191</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>ruang_ekspresi@webmail.uad.ac.id</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.063l-1.548.772a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.741a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(0274) 511830</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Program</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-base mb-4">Programs</h4>
            <ul className="space-y-2.5 text-sm text-blue-100">
              <li><a href="#" className="hover:text-white transition-colors">Career Talks</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Extra Classes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Project Work</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentoring</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* GARIS PUTIH */}
      <div className="w-full h-[5px] bg-white opacity-90"></div>

      {/* COPYRIGHT */}
      <div style={{ backgroundColor: "#244E87" }} className="py-4 border-none">
        <div className="max-w-7xl mx-auto px-6 text-center text-blue-100 text-xs">
          <p>© 2025 Ruang Ekspresi | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
