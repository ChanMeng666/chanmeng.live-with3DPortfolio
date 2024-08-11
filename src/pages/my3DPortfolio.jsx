import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
    About,
    Experience,
    Home,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
    Footer,
    ExpandCard,
    EarthCanvas,
} from "../components";
import {motion} from "framer-motion";
import {slideIn} from "../utils/motion";

const My3DPortfolio = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div
                    className="bg-home-pattern bg-cover bg-no-repeat bg-center"
                    id="home"
                >
                    <Navbar />
                    <Home />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <ExpandCard />
                <div className="relative z-0">
                    <motion.div
                        variants={slideIn("right", "tween", 0.2, 1)}
                        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
                    >
                        <EarthCanvas/>
                    </motion.div>
                    <StarsCanvas/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
};

export default My3DPortfolio;

