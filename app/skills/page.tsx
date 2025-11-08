import React from "react";

const SkillsPage = () => {
  const skillsData = [
    {
      name: "Languages",
      data: [
        { name: "JavaScript", level: 9 },
        { name: "TypeScript", level: 9 },
        { name: "HTML5", level: 9 },
        { name: "Python", level: 8 },
        { name: "C#", level: 8 },
        { name: "JSON", level: 9 },
        { name: "CSS", level: 6 },
        { name: "GDScript", level: 6 },
        { name: "Markdown", level: 5 },
        { name: "Kotlin", level: 4 },
        { name: "Swift", level: 4 },
        { name: "C++", level: 5 },
      ],
    },
    {
      name: "Frameworks",
      data: [
        { name: "Next.js", level: 8 },
        { name: "Svelte-Kit", level: 7 },
        { name: "Nuxt.js", level: 5 },
        { name: "Vue.js", level: "3" },
        { name: "Angular", level: "2" },
        { name: "Solid", level: "2" },
        { name: "Stencil", level: "2" },
        { name: "Svelte", level: "2" },
        { name: "Electron", level: "3" },
        { name: "Nextron", level: "4" },
      ],
    },
    {
      name: "Technologies",
      data: [
        // Javascript
        { name: "JSX", level: 9 },
        { name: "TailwindCSS", level: 7 },
        { name: "Node.js", level: 4 },
        { name: "Axios", level: "7" },
        { name: "Express", level: 5 },
        { name: "Expo", level: 6 },
        { name: "Three.js", level: 4 },
        { name: "GSAP", level: 4 },
        { name: "Cloudinary", level: 4 },

        // Python
        { name: "OpenCV", level: 6 },
        { name: "Numpy", level: 5 },
        { name: "customtkinter", level: 5 },
        { name: "Tensorflow", level: 3 },
        { name: "Tkinter", level: 3 },
      ],
    },
    {
      name: "Databases",
      data: [
        { name: "MongoDB", level: 6 },
        { name: "Mongoose", level: 7 },
        { name: "PostGreSQL", level: 7 },
      ],
    },
    {
      name: "Softwares",
      data: [
        // 3D Modeling
        { name: "Blender", level: 8 },
        { name: "Materialize", level: 7 },
        { name: "Laighter", level: 5 },

        // 2D Art
        { name: "Aseprite", level: 5 },

        // Coding
        { name: "GitHub", level: 8 },
        { name: "Visual Studio", level: 6 },
        { name: "VS Code", level: 8 },
        { name: "Git", level: 7 },
        { name: "XCode", level: 3 },
        { name: "Visual Paradigm", level: 4 },

        // Web Development
        { name: "Figma", level: 6 },

        // Adobe
        { name: "Adobe Photoshop", level: 8 },
        { name: "Adobe Audition", level: 7 },
        { name: "Adobe Illustrator", level: 4 },

        // Microsoft Office
        { name: "MS Word", level: "7" },
        { name: "MS Powerpoint", level: "5" },
        { name: "MS Excel", level: "3" },

        // Android
        { name: "Android Studio", level: 4 },
      ],
    },
    {
      name: "Game Engines",
      data: [
        { name: "Unity", level: "8" },
        { name: "Godot Engine", level: "7" },
        { name: "Unreal Engine", level: "5" },
      ],
    },
    {
      name: "Areas of Understanding",
      data: [
        { name: "Web Development", level: "9" },
        { name: "Game Development", level: "8" },
        { name: "Machine Learning", level: "4" },
      ],
    },
  ];

  const getSkillLevelStyle = (level: number) => {
    const width = `${level * 10}%`;
    return { width };
  };

  return (
    <div className="flex flex-col justify-start items-center w-full">
      <p className="py-4 text-lg">
        Below you will find my self-evaluated skill levels out of ten.
      </p>
      <div className="w-1/2 border-b-2"></div>
      <div className="w-1/2 flex flex-col justify-start items-start px-4 pb-4">
        {skillsData.map((section, sectionIndex) => (
          <div key={`section_${sectionIndex}`} className="w-full">
            <h2 className="py-2">{section.name}</h2>
            {section.data.map((skill, skillIndex) => {
              const skillLevelStyle = getSkillLevelStyle(skill.level as number);
              return (
                <div
                  key={`skill_${skillIndex}`}
                  className="skill-bar-container mb-2"
                >
                  <div className="skill-bar" style={skillLevelStyle}>
                    <span className="skill-name pl-2">{skill.name}</span>
                    <span className="skill-level px-2">{skill.level}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
