import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white py-20 overflow-hidden w-full">
      <div className="w-full px-12">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="font-bold" style={{ color: "#1E56A0" }}>
                RUANG EKSPRESI :
              </span>
              <span className="text-gray-800">
                {" "}Wadah kreatif & Kompetitif Mahasiswa
              </span>
            </h1>

            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-6 py-2 bg-yellow-200 rounded-full text-sm font-medium text-gray-800">Ideation</span>
              <span className="px-6 py-2 bg-green-200 rounded-full text-sm font-medium text-gray-800">Creation</span>
              <span className="px-6 py-2 bg-blue-200 rounded-full text-sm font-medium text-gray-800">Collaboration</span>
              <span className="px-6 py-2 bg-pink-200 rounded-full text-sm font-medium text-gray-800">Guidance & Support</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl w-full max-w-md md:max-w-lg">
              <img 
                src="Frame.svg"
                alt="Students collaborating"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;