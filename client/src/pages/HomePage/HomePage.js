import React from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import { motion } from 'framer-motion';
import { animation } from '../../motion';

import style from './style.module.scss';

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
          <motion.p custom={1} variants={animation} className={style.textPlatform}>
            E-COURSE PLATFORM
          </motion.p>
          <motion.h1 custom={2} variants={animation}>
            Learning and teaching online, made easy.
          </motion.h1>
          <motion.p custom={3} variants={animation} className={style.textAdditional}>
            Any subject, in any language, on any device, for all ages!
          </motion.p>
          <motion.div
            custom={4}
            variants={animation}
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
          <motion.div custom={1} variants={animation} className={style.learnImg}></motion.div>
          <div className={style.learnBlockContent}>
            <motion.h2 custom={2} variants={animation}>
              Learn a language in a playful way
            </motion.h2>
            <motion.p custom={3} variants={animation}>
              Make learning programming languages more fun with mini-games
            </motion.p>
            <div className={style.wrapperIcons}>
              <motion.div custom={4} variants={animation} className={style.sprint}></motion.div>
              <motion.div custom={5} variants={animation} className={style.tasks}></motion.div>
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
          <motion.h2 custom={2} variants={animation}>
            Increase your knowledge
          </motion.h2>
          <motion.p custom={3} variants={animation}>
            Traditional and new effective approaches to learning languages
          </motion.p>
          <motion.div
            custom={4}
            variants={animation}
            className={`${style.bookBtn} ${style.button}`}
          >
            Textbook →
          </motion.div>
        </div>
        <motion.div custom={1} variants={animation} className={style.knowledgeImg}></motion.div>
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
            variants={animation}
            className={style.staticticsImg}
          ></motion.div>
          <div className={style.watchStatisticsBlockContent}>
            <motion.h2 custom={2} variants={animation}>
              Watch your progress every day
            </motion.h2>
            <motion.p custom={3} variants={animation}>
              Save statistics on your achievements and mistakes
            </motion.p>
            <motion.div
              custom={4}
              variants={animation}
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
