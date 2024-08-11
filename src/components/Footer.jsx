import React from "react";
import { helloChan } from "../../static";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { footerIcons } from "../constants/index";

const Footer = () => {
  return (
    <div
      className={`${styles.paddingX} w-full flex flex-col gap-10 md:flex-row justify-evenly items-center py-2 min-h-[100px] top-0 z-20 bg-primary`}
    >
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex justify-center items-center gap-10"
      >
        <img src={helloChan} alt="LOGO" className="max-w-[100px] h-auto" />

        <div>
          <h3 className={styles.homeSubText}>Chan Meng</h3>
          <p style={{ color: "white" }}>Email: ChanMeng666@outlook.com</p>
          <p style={{ color: "gray" }}>&copy; Copyright 2024. All Rights Reserved.</p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col justify-center items-center gap-5"
      >
        <div className="flex gap-10 social-icon">
          {footerIcons.map((icon, index) => (
              // <Link
              //   to={icon.link}
              //   target="_blank"
              //   className="link"
              //   key={icon.name}
              // >
              //   <img src={icon.icon} alt={icon.name} />
              // </Link>
              <a
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer" // 提高安全性，避免 opener 可能带来的安全隐患
                  className="link"
                  key={icon.name}
              >
                <img src={icon.icon} alt={icon.name}/>
              </a>
          ))}
        </div>
        <div className="flex">
          <div className="heart top-[0.6rem] right-[0.625rem]"/>
          <p style={{ color: "gray" }}>Let's get in touch now</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
