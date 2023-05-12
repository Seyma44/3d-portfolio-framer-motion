import { motion } from "framer-motion"
import { styles } from "../styles"
import { HeroSceneCanvas } from "./canvas"
import { arrow } from '../assets'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-9 h-9 mb-5 rounded-full bg-[#c2dad5]' />
          <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div>
        <div className='flex flex-col justify-start items-start mt-7 mr-0'>
          <div className='w-80 sm:h-2 h-2 green-gradient' />
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#c2dad5]'>Seyma</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Game Designer & <br className='sm:block hidden' />
            Developer
          </p>
        </div>
      </div>

      <HeroSceneCanvas />

      <div className='absolute xs:bottom-10 bottom-32  w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[65px] h-[54px] border-secondary flex justify-center items-start p-2'>
            <motion.img
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              src={arrow}
            /> 
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

