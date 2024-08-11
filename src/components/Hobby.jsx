import React, { useState } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { panelsData } from "../constants/index";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const ExpandCard = ({
  name,
  imageUrl,
  activePanel,
  index,
  handlePanelClick,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      key={index}
      className={`panel bg-cover bg-center bg-no-repeat	h-[80vh] rounded-[50px] text-white cursor-pointer m-[10px] relative ${
        index === activePanel ? "active" : ""
      }`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => handlePanelClick(index)}
    >
      {index === activePanel && (
        <h5 className="text-center text-[0.5rem] sm:text-[1rem] md:text-[1.5rem] lg:text-[3rem] absolute">
            {name}
        </h5>
        )}
    </motion.div>
  );
};

const Hobby = () => {
  const [activePanel, setActivePanel] = useState(2);

  const handlePanelClick = (index) => {
    setActivePanel(index);
  };

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Embracing beautiful life</p>
        <h2 className={styles.sectionHeadText}>Hobbies</h2>
      </motion.div>

      <div className="flex">
        {panelsData.map((panel, index) => (
          <ExpandCard
            key={panel.name}
            index={index}
            activePanel={activePanel}
            handlePanelClick={handlePanelClick}
            {...panel}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Hobby, "hobby");
