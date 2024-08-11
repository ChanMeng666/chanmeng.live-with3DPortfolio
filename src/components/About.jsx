import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";

// const ServiceCard = ({ index, title, icon }) => {
//     return (
//         <Tilt className="xs:w-[250px] w-full">
//             <motion.div
//                 variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
//                 className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
//             >
//                 <div
//                     option={{
//                         max: 45,
//                         scale: 1,
//                         speed: 450,
//                     }}
//                     className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
//                 >
//                     <img src={icon} alt={title} className="w-16 h-16 object-contain" />
//                     <h3 className="text-white text-[20px] font-bold text-center">
//                         {title}
//                     </h3>
//                 </div>
//             </motion.div>
//         </Tilt>
//     );
// };

const ServiceCard = ({ index, title, icon }) => (
    <div className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>
        </motion.div>
    </div>
);

const About = () => {
    return (
        <div className="bg-about-pattern md:bg-auto bg-no-repeat xl:bg-right bg-right-top max-md:bg-20% md:bg-40%">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>About Me</h2>
            </motion.div>
            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
            >
                I'm Chan Meng,
                an IT professional with a Master's in Applied Computing from Lincoln University (NZ).
                Specialising in user-centric software solutions,
                my expertise spans front-end and back-end technologies including ReactJS, Vue.js, Angular, and NodeJS.
                I have been deeply involved in significant projects for mobile and web platforms,
                enhancing business operations through innovative applications.
                Proficient in database management and web deployment,
                I actively contribute to tech communities and volunteer initiatives.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(About, "about");
