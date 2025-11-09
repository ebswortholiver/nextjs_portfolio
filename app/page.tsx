import Link from "next/link";

const HomePage = () => {
  const projectData = [
    {
      title: "Portfolio",
      about:
        "A simple portfolio website, used to showcase my skills in all areas of digital development. Made in Next.js.",
      link: "https://github.com/ebswortholiver/nextjs_portfolio",
    },
    {
      title: "Procedural C.V.",
      about:
        "A Simple project used to generate a procedural CV for use with job applications and showcasing my abilities. Made with Next.js.",
      link: "https://github.com/ebswortholiver/nextjs_procedural-cv",
    },
    {
      title: "SVG Badge Generator",
      about:
        "Simple project that allows you to generate SVG badges for your projects. Made with Next.js.",
      link: "https://github.com/ebswortholiver/nextjs_svg-badge-generator",
    },
    {
      title: "Crosshair Colour Picker",
      about:
        "Simple overlay app for VALORANT. Uses the Overwolf API. Allows you to change the colour of the VALORANT crosshair using a pixel from a screenshot.",
      link: "https://github.com/ebswortholiver/typescript_crosshair-colour-picker",
    },
  ];

  return (
    <div className="flex flex-col justify-start items-center w-full">
      <p className="py-4 text-lg">
        Explore my projects by navigating using the buttons below!
      </p>
      <div className="w-1/2 border-b-2"></div>
      <div className="flex flex-wrap justify-between p-4">
        {projectData.map((project, index) => (
          <Link
            key={`project_${index}`}
            href={project.link}
            className="w-[49%] flex flex-col justify-center border-2 text-lg px-4 py-2 mb-4 hover-shadow"
          >
            <h2 className="font-bold text-xl">{project.title}</h2>
            <p>{project.about}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
