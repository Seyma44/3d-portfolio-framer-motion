import React from "react"
import Tilt from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-lily-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >
       As a game developer, my primary focus is on creating interactive 
       and immersive gaming experiences. I possess strong programming 
       skills and specialize in game development frameworks such as Unity 
       or Unreal Engine. My role involves designing and implementing gameplay 
       mechanics, character behavior, and game logic. I collaborate with artists, 
       sound designers, and other members of the game development team to bring 
       the game's vision to life. I also ensure the game runs smoothly by optimizing 
       performance and fixing any bugs or glitches. Additionally, I stay up-to-date 
       with the latest trends in the gaming industry and continuously explore new
        technologies to enhance the gameplay experience for players. Being a game 
        developer allows me to combine my passion for programming with my love for 
        gaming, creating enjoyable experiences for gamers worldwide.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");