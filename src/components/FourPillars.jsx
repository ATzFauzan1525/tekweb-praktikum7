import React from 'react';

const FourPillars = () => {
  const pillars = [
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Ideation",
      description: "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terstruktur."
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      title: "Creation",
      description: "Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini."
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaboration",
      description: "Bekerja sama dalam tim multidisiplin untuk menjalankan solusi yang komprehensif."
    },
    {
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01-.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      title: "Guidance & Support",
      description: "Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="w-full px-12">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Empat Pilar{' '}
            <span style={{ color: "#1E56A0" }}>
              Ruang Ekspresi
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const bgColors = ['bg-yellow-100', 'bg-green-100', 'bg-blue-100', 'bg-pink-100'];
            const textColors = ['text-yellow-700', 'text-green-700', 'text-blue-700', 'text-pink-700'];
            return (
              <div key={index} className={`${bgColors[index]} p-8 rounded-2xl`}>
                <div className={`mb-5 ${textColors[index]}`}>
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-700 text-xs leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FourPillars;