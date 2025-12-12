import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      message: "Kolaborasi antar disiplin ilmu di sini luar biasa! Saya belajar banyak hal dari teman-teman lain jurusan lain",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      message: "Kolaborasi antar disiplin ilmu di sini luar biasa! Saya belajar banyak hal dari teman-teman lain jurusan lain",
      avatar: "https://i.pravatar.cc/150?img=13"
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      message: "Kolaborasi antar disiplin ilmu di sini luar biasa! Saya belajar banyak hal dari teman-teman lain jurusan lain",
      avatar: "https://i.pravatar.cc/150?img=14"
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      message: "Kolaborasi antar disiplin ilmu di sini luar biasa! Saya belajar banyak hal dari teman-teman lain jurusan lain",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      message: "Kolaborasi antar disiplin ilmu di sini luar biasa! Saya belajar banyak hal dari teman-teman lain jurusan lain",
      avatar: "https://i.pravatar.cc/150?img=16"
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      message: "Kolaborasi antar disiplin ilmu di sini luar biasa! Saya belajar banyak hal dari teman-teman lain jurusan lain",
      avatar: "https://i.pravatar.cc/150?img=17"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 w-full">
      <div className="w-full px-12">
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-blue-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;