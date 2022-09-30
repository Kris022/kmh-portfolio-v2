
import ProjectItem from "./ProjectItem";

import portfolioImg from "../public/portfolio-website.jpg";
import faceRecImg from "../public/opencv-gate.jpg";
import vleImg from "../public/vle.jpg";
import lvlImg from "../public/level-generation.jpg";


export default function ProjectGird() {
    return (
      <div className="w-full text-white">
        <div id="projects" className="max-w-[800px] mx-auto px-2 py-16">
          <h1 className="text-4xl mt-10 p-4">Projects</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Portfolio Website"
              desc="Next.js, React, Tailwindcss"
              thumbnail={portfolioImg}
              url="/works/portfolio-website"
            />
            <ProjectItem
              title="Facial Recognition Gateway"
              desc="Python, OpenCV, TKinter"
              thumbnail={faceRecImg}
              url="/works/opencv-project"
            />
            <ProjectItem
              title="Simple VLE"
              desc="JS, PHP, XAMPP"
              thumbnail={vleImg}
              url="/works/simpleVLE"
            />
            <ProjectItem
              title="Procedural Level Generation"
              desc="C++, SFML"
              thumbnail={lvlImg}
              url="/works/dungeon-crawler-project"
            />
          </div>
        </div>
      </div>
    );
  }