import React from "react";
import ProjectItem from "./ProjectItem";
import propertyImg from "../public/assets/projects/property.png";
import servicecarImg from "../public/assets/projects/servicecar.png"

const Projects=() => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase  lg:text-4xl md:text-3xl text-2xl tracking-widest text-[#9126b8] font-mono">Projects</p>
        <h2>What I`ve Build</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title="Property Finder" backgroundImg={propertyImg} projectUrl='/property' />
          <ProjectItem title="Service Car" backgroundImg={servicecarImg} projectUrl='/property' />
          <ProjectItem title="Service Car" backgroundImg={servicecarImg} projectUrl='/property' />
          <ProjectItem title="Service Car" backgroundImg={servicecarImg} projectUrl='/property' />
        </div>
      </div>
    </div>
  );
}

export default Projects;
