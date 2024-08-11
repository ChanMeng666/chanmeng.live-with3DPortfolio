import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../../static";
import { SectionWrapper } from "../hoc/index";
import { projects } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_link,
  website_link,
  icon,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxWords = 500;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const descriptionWithDots = description
    .split("")
    .slice(0, maxWords)
    .join("")
    .concat("...");

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/*<Tilt*/}
      {/*  options={{*/}
      {/*    max: 45,*/}
      {/*    scale: 1,*/}
      {/*    speed: 450,*/}
      {/*  }}*/}
      {/*  className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[660px] relative"*/}
      {/*>*/}
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[660px] relative">
        <div className="relative w-full h-[230px]">
          {website_link !== "" ? (
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl cursor-pointer"
              onClick={() => window.open(website_link, "_blank")}
            />
          ) : (
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          )}

          <div className="absolute top-0 right-0 m-3 card-img_hover">
            <div
              onClick={() => window.open(source_link, "_blank")}
              className="project-link_button w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={icon === "github" ? github : github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">
            {description.length > 500
              ? isExpanded
                ? description
                : descriptionWithDots
              : description}
          </p>

          {description.split("").length > maxWords && (
            <button
              onClick={handleToggle}
              className="bg-secondary py-3 px-3 text-white font-bold shadow-md shadow-primary rounded-xl w-fit-content my-3 hover:bg-[#333333] hover:text-[#eeeeee]"
            >
              {isExpanded ? "View less" : "View more"}
            </button>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 absolute bottom-0.5 ">
          {tags.map((tag, index) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
      {/*</Tilt>*/}
    </motion.div>
  );
};

const Project = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="mt-10 md:mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Project, "project");
