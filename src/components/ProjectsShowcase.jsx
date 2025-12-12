import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const ProjectsShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      category: "UI/UX Design",
      title: "Creative Portfolio Platform",
      description:
        "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
      members: [
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: "https://i.pravatar.cc/150?img=12",
        },
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: "https://i.pravatar.cc/150?img=13",
        },
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: "https://i.pravatar.cc/150?img=14",
        },
      ],
    },
    {
      category: "Web Development",
      title: "Creative Portfolio Platform",
      description:
        "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
      members: [
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: "https://i.pravatar.cc/150?img=15",
        },
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: "https://i.pravatar.cc/150?img=16",
        },
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: "https://i.pravatar.cc/150?img=17",
        },
      ],
    },
    {
      category: "Mobile Development",
      title: "Creative Portfolio Platform",
      description:
        "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas",
      members: [
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: "https://i.pravatar.cc/150?img=18",
        },
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: "https://i.pravatar.cc/150?img=19",
        },
        {
          name: "Budi Santoso",
          role: "Frontend Developer",
          avatar: "https://i.pravatar.cc/150?img=20",
        },
      ],
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const categoryColors = {
    "UI/UX Design": "bg-blue-100 text-blue-700",
    "Web Development": "bg-blue-100 text-blue-700",
    "Mobile Development": "bg-blue-100 text-blue-700",
  };

return (
  <section className="py-16 bg-gray-50 w-full">
    <div className="w-full px-6 md:px-12">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Showcase <span style={{ color: "#1E56A0" }}>Student Projects</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
        </p>
      </div>

      {/* PROJECT CONTAINER */}
      <div className="relative h-[600px] w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300
            ${index === currentProject ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <div className="bg-pink-50 rounded-3xl shadow-lg h-full relative px-6 md:px-12 py-10 flex items-center overflow-hidden">

              <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-[160px] items-center w-full h-full">

                {/* LEFT SIDE */}
                <div className="flex flex-col space-y-4 pl-8 md:pl-20 pr-20 md:pr-32">

                  <span
                    className={`inline-block px-4 py-2 ${categoryColors[project.category]} rounded-full text-sm font-medium w-fit`}
                  >
                    {project.category}
                  </span>

                  <h3 className="text-3xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 text-sm max-w-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-4">
                    <p className="font-semibold text-gray-900 mb-3 text-sm">Tim Pembuat :</p>
                    <div className="space-y-3">
                      {project.members.map((member, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{member.name}</p>
                            <p className="text-xs text-gray-600">{member.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BUTTON */}
                  <div className="pt-8">
                    <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition flex items-center gap-2 text-sm">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                  </div>
                </div>

                {/* RIGHT SIDE: IMAGE FRAME */}
                <div className="flex justify-start items-center pl-4">
                  <div className="w-[90%] h-[380px] md:h-[450px] rounded-3xl overflow-hidden border-4 border-pink-300 shadow-md bg-white">
                    <img
                      src="Frame.svg"
                      alt="Project showcase"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

              </div>

              {/* LEFT ARROW */}
              <button
                onClick={prevProject}
                className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-black transition-all shadow-lg z-10"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* RIGHT ARROW */}
              <button
                onClick={nextProject}
                className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-black transition-all shadow-lg z-10"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);
};

export default ProjectsShowcase;
