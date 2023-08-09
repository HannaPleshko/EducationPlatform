import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import Footer from "@Components/Footer/Footer";
import Header from "@Components/Header/Header";
import { animation } from "@assets/motion";

import style from "./style.module.scss";

const HomePage = () => {
  return (
    <>
      <Header />

      <motion.div
        initial="hiddenHorizontal"
        whileInView="visibleHorizontal"
        viewport={{ once: true }}
        className={classNames(style.preview, style.default)}
      >
        <div className={style.content}>
          <motion.h4 custom={1} variants={animation}>
            E-COURSE PLATFORM
          </motion.h4>

          <motion.h1 custom={2} variants={animation}>
            Learning and teaching online, made easy.
          </motion.h1>

          <motion.p custom={3} variants={animation}>
            Any subject, in any language, on any device, for all ages!
          </motion.p>

          <motion.div custom={4} variants={animation} className={style.btn}>
            About platform
          </motion.div>

          <div className={style.statictics}>
            <motion.p
              custom={5}
              variants={animation}
              className={style.studentsCount}
            >
              <div className={style.lightning}></div>
              <p>
                600<span>+</span>
              </p>
            </motion.p>
            <motion.p
              custom={6}
              variants={animation}
              className={style.students}
            >
              Students
            </motion.p>
          </div>
        </div>

        <div className={style.img}></div>
      </motion.div>

      <motion.div
        initial="hiddenVertical"
        whileInView="visibleVertical"
        viewport={{ amount: 0.2, once: true }}
        className={style.wrapper}
      >
        <div className={classNames(style.learn, style.default)}>
          <motion.div
            custom={1}
            variants={animation}
            className={style.img}
          ></motion.div>

          <div className={style.content}>
            <motion.h2 custom={2} variants={animation}>
              Learn a language in a playful way
            </motion.h2>

            <motion.p custom={3} variants={animation}>
              Make the process of learning programming languages more engaging
              by incorporating mini-games.
            </motion.p>

            <div className={style.icons}>
              <motion.div
                custom={4}
                variants={animation}
                className={style.sprint}
              >
                <div></div>
                <p>Sprint →</p>
              </motion.div>

              <motion.div
                custom={5}
                variants={animation}
                className={style.task}
              >
                <div></div>
                <p>Tasks →</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hiddenVertical"
        whileInView="visibleVertical"
        viewport={{ amount: 0.2, once: true }}
        className={classNames(style.knowledge, style.default)}
      >
        <div className={style.content}>
          <motion.h2 custom={2} variants={animation}>
            Elevate your learning journey
          </motion.h2>
          <motion.p custom={3} variants={animation}>
            Uncover the World of Language Learning Through Time-Honored and
            Modern Approaches{" "}
          </motion.p>
          <motion.div custom={4} variants={animation} className={style.btn}>
            Textbook →
          </motion.div>
        </div>

        <motion.div
          custom={1}
          variants={animation}
          className={style.img}
        ></motion.div>
      </motion.div>

      <motion.div
        initial="hiddenVertical"
        whileInView="visibleVertical"
        viewport={{ amount: 0.2, once: true }}
        className={style.wrapper}
      >
        <div className={classNames(style.statistic, style.default)}>
          <motion.div
            custom={1}
            variants={animation}
            className={style.img}
          ></motion.div>

          <div className={style.content}>
            <motion.h2 custom={2} variants={animation}>
              Watch your progress every day
            </motion.h2>

            <motion.p custom={3} variants={animation}>
              Save statistics on your achievements and mistakes
            </motion.p>

            <motion.div custom={4} variants={animation} className={style.btn}>
              Statistics →
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default HomePage;
