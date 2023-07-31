import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './style.module.scss';
import { motion } from 'framer-motion';

const textAnimation = {
  hiddenHorizontal: {
    x: 100,
    opacity: 0,
  },
  visibleHorizontal: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
  hiddenVertical: {
    y: -100,
    opacity: 0,
  },
  visibleVertical: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

function HomePage() {
  return (
    <>
      <Header />

      <motion.div
        initial="hiddenHorizontal"
        whileInView="visibleHorizontal"
        viewport={{ once: true }}
        className={style.preview}
      >
        <div className={style.previewContent}>
          <motion.p custom={1} variants={textAnimation} className={style.textPlatform}>
            E-COURSE PLATFORM
          </motion.p>
          <motion.h1 custom={2} variants={textAnimation}>
            Learning and teaching online, made easy.
          </motion.h1>
          <motion.p custom={3} variants={textAnimation} className={style.textAdditional}>
            Any subject, in any language, on any device, for all ages!
          </motion.p>
          <motion.div
            custom={4}
            variants={textAnimation}
            className={`${style.btn} ${style.button}`}
          >
            About platform
          </motion.div>
          <div className={style.statictics}>
            <p className={style.studentsCount}>
              <span className={style.lightning}></span>600 <span>+</span>
            </p>
            <p className={style.students}>Students</p>
          </div>
        </div>
        <div className={style.manImg}></div>
      </motion.div>

      <motion.div
        initial="hiddenVertical"
        whileInView="visibleVertical"
        viewport={{ amount: 0.2, once: true }}
        className={style.learnBlock}
      >
        <div className={style.learnBlockWidth}>
          <motion.div custom={1} variants={textAnimation} className={style.learnImg}></motion.div>
          <div className={style.learnBlockContent}>
            <motion.h2 custom={2} variants={textAnimation}>
              Learn a language in a playful way
            </motion.h2>
            <motion.p custom={3} variants={textAnimation}>
              Make learning programming languages more fun with mini-games
            </motion.p>
            <div className={style.wrapperIcons}>
              <motion.div custom={4} variants={textAnimation} className={style.sprint}></motion.div>
              <motion.div custom={5} variants={textAnimation} className={style.tasks}></motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hiddenVertical"
        whileInView="visibleVertical"
        viewport={{ amount: 0.2, once: true }}
        className={style.knowledgeBlock}
      >
        <div className={style.knowledgeBlockContent}>
          <motion.h2 custom={2} variants={textAnimation}>
            Increase your knowledge
          </motion.h2>
          <motion.p custom={3} variants={textAnimation}>
            Traditional and new effective approaches to learning languages
          </motion.p>
          <motion.div
            custom={4}
            variants={textAnimation}
            className={`${style.bookBtn} ${style.button}`}
          >
            Textbook →
          </motion.div>
        </div>
        <motion.div custom={1} variants={textAnimation} className={style.knowledgeImg}></motion.div>
      </motion.div>

      <motion.div
        initial="hiddenVertical"
        whileInView="visibleVertical"
        viewport={{ amount: 0.2, once: true }}
        className={style.watchStatisticsBlock}
      >
        <div className={style.watchStatisticsBlockWidth}>
          <motion.div
            custom={1}
            variants={textAnimation}
            className={style.staticticsImg}
          ></motion.div>
          <div className={style.watchStatisticsBlockContent}>
            <motion.h2 custom={2} variants={textAnimation}>
              Watch your progress every day
            </motion.h2>
            <motion.p custom={3} variants={textAnimation}>
              Save statistics on your achievements and mistakes
            </motion.p>
            <motion.div
              custom={4}
              variants={textAnimation}
              className={`${style.bookBtn} ${style.button}`}
            >
              Statistics →
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
}

export default HomePage;
