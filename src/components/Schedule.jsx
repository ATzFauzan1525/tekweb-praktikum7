import React from 'react';

const Schedule = () => {
  const programs = [
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Carrer Talks",
      description: "Sesi sharing dari praktisi industri dan alumni sukses",
      bgColor: "bg-yellow-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Extra Classes",
      description: "Kelas tambahan skill development dan workshop teknis",
      bgColor: "bg-green-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Project Work",
      description: "Mengerjakan project nyata dengan bimbingan mentor",
      bgColor: "bg-blue-100"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-pink-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Mentoring",
      description: "Sesi konsultasi personal dengan mentor berpengalaman",
      bgColor: "bg-pink-100"
    }
  ];

  return (
    <section className="py-16 bg-white w-full">
      <div className="w-full px-12">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Jadwal &{" "}
            <span style={{ color: "#1E56A0" }}>Program Kegiatan</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan pengembangan skill Setiap Sabtu
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl shadow-lg p-8 mb-10 border border-gray-100">
          
          <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-3"
              style={{ color: "#1E56A0" }}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Setiap Sabtu</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-5">

            <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-6 rounded-xl shadow-md border-l-4 border-yellow-400">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-base">Sesi Pagi</h4>
                  <p className="text-sm font-semibold mb-2" style={{ color: "#1E56A0" }}>
                    09:00 - 12:00 WIB
                  </p>
                  <p className="text-xs text-gray-700">
                    Workshop, Carrer Talks, dan Extra Classes Internal
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-6 rounded-xl shadow-md border-l-4 border-yellow-400">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-base">Sesi Sore</h4>
                  <p className="text-sm font-semibold mb-2" style={{ color: "#1E56A0" }}>
                    16:00 - 18:00 WIB
                  </p>
                  <p className="text-xs text-gray-700">
                    Project Work, Mentoring, dan Collaboration Session
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {programs.map((program, index) => (
            <div key={index} className={`${program.bgColor} p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow`}>
              <div className="mb-4">{program.icon}</div>
              <h4 className="font-bold text-gray-900 mb-2 text-base">{program.title}</h4>
              <p className="text-xs text-gray-700 leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Schedule;