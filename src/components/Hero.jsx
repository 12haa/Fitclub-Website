import Header from "./Header/Header";
import "./Hero.css";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  //  Calculating Screen Width
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur blur-hero"></div>

      <div className="left-h">
        <Header />
        {/* Ad Section */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The Best Fitness Club In The Town</span>
        </div>
        {/* Hero Section */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal</span>
            <span> Body </span>
          </div>
          <div>
            <span>
              IN HERE WE WILL HELP YOU TI SHAPE AND BUILD YOUR IDEAL BODY AND
              LIVE UP YOUR LIFE TO FULLEST
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+987</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness Programs</span>
          </div>
        </div>
        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn"> Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn-join">Join Now</button>
        <motion.div
          initial={{ left: "238px" }}
          whileInView={{ left: "8px" }}
          transition={{ ...transition, type: "tween" }}
        >
          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 BPM</span>
          </div>
        </motion.div>

        {/* Hero Section */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.div
          initial={{ right: "11rem" }}
          whileInView={{ right: " 20rem" }}
          transition={{ ...transition, type: "tween" }}
        >
          <img src={hero_image_back} alt="" className="hero-image-back" />
        </motion.div>
        {/* Calories Section */}
        <div className="calories">
          <img src={Calories} alt="" className="calories-image" />
          <div className="calories-div">
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
