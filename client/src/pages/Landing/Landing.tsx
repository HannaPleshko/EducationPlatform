import React, { useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';

import Footer from '@layout/Footer/Footer';
import Header from '@layout/Header/Header';
import { animation } from '@assets/motion';
import { useGetUsersQuery } from '@services';
import { LandingNavigationContent, UserGridApiResponse } from '@interface';

import { Accordion, AccordionDetails, AccordionSummary, Avatar, AvatarGroup, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { ChevronRight } from '@mui/icons-material';
import style from './style.module.scss';
import { LandingNavigation } from '@constants/options';

const ButtonMotion = motion(Button);
const AvatarGroupMotion = motion(AvatarGroup);
const PaperMotion = motion(Paper);

const listCourses = [
  {
    id: 1,
    title: 'Python for Beginners',
    description:
      'Master the fundamentals of Python programming with this introductory course. Learn basic syntax, data types, control flow, and more, and start building your own Python projects from scratch.',
    rating: 4.9,
  },
  {
    id: 2,
    title: 'JavaScript Web Development',
    description:
      'Dive into the world of web development with JavaScript. This course covers essential concepts such as DOM manipulation, event handling, AJAX, and introduces popular libraries and frameworks like React and Angular.',
    rating: 4.8,
  },
  {
    id: 3,
    title: 'Java Programming Masterclass',
    description:
      'Take your Java skills to the next level with this comprehensive masterclass. Learn object-oriented programming, data structures, algorithms, and advanced Java topics to become a proficient Java developer.',
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Full-Stack Web Development Bootcamp',
    description:
      'Become a full-stack web developer with this intensive bootcamp. Covering both front-end and back-end technologies, including HTML, CSS, JavaScript, Node.js, and MongoDB, this course will equip you with the skills needed to build modern web applications.',
    rating: 4.9,
  },
  {
    id: 5,
    title: 'Data Science with Python',
    description:
      'Explore the field of data science with Python. Learn data analysis, visualization, machine learning, and data manipulation techniques using popular Python libraries such as NumPy, Pandas, Matplotlib, and scikit-learn.',
    rating: 4.8,
  },
  {
    id: 6,
    title: 'Mobile App Development with React Native',
    description:
      'Build cross-platform mobile apps with React Native. This course covers the essentials of React Native development, including components, navigation, state management, and deploying apps to iOS and Android platforms.',
    rating: 4.7,
  },
];

const listFAQs = [
  {
    id: 1,
    question: 'Can I attend courses if I have no prior knowledge?',
    answer: 'Yes, our courses are designed for individuals with varying levels of experience, including complete beginners.',
  },
  {
    id: 2,
    question: 'How do I choose the right course for me?',
    answer: 'We offer guidance to help you choose a course based on your interests, career goals, and skill level.',
  },
  {
    id: 3,
    question: 'Do you provide job assistance after completing the course?',
    answer: 'Yes, we offer job placement assistance and support to help students transition into the workforce.',
  },
  {
    id: 4,
    question: 'What is the cost of the course and what payment options are available?',
    answer: 'Our course prices vary, and we offer flexible payment options to accommodate different financial situations.',
  },
  {
    id: 5,
    question: 'Does the school provide a certificate upon course completion?',
    answer: 'Yes, we provide certificates to students who successfully complete our courses.',
  },
  {
    id: 6,
    question: 'What learning formats are available?',
    answer: 'We offer a variety of learning formats, including in-person classes, online courses, and self-paced learning options.',
  },
  {
    id: 7,
    question: 'Will I acquire enough knowledge to start a career in IT after completing the courses?',
    answer: 'Our courses are designed to equip students with the skills and knowledge needed to pursue a career in the IT industry.',
  },
];

const Landing: React.FC = () => {
  const { data } = useGetUsersQuery<UserGridApiResponse>({});
  const [curOption, setCurOption] = useState<string>(LandingNavigationContent.ABOUT);

  return (
    <>
      <Header setCurOption={setCurOption} options={LandingNavigation} />

      <motion.div
        initial="hiddenHorizontal"
        whileInView="visibleHorizontal"
        viewport={{ once: true }}
        className={classNames(style.preview, style.default)}
        id={LandingNavigationContent.ABOUT}
      >
        <div className={style.previewContent}>
          <div className={style.content}>
            <motion.h4 custom={1} variants={animation}>
              E-COURSE PLATFORM
            </motion.h4>

            <motion.h1 custom={2} variants={animation}>
              Unlock Your Potential with HSchool
            </motion.h1>

            <motion.p custom={3} variants={animation}>
              HSchool offers learning for all, anytime, anywhere! Learn any subject, in any language, on any device. Join us today to start your
              educational journey!
            </motion.p>

            <Link to={'*'}>
              <ButtonMotion custom={4} variants={animation} className={style.btn} variant="outlined">
                About platform
              </ButtonMotion>
            </Link>

            <AvatarGroupMotion custom={5} variants={animation} total={data?.rowCount || 0}>
              <Avatar sx={{ bgcolor: '#e0b77f' }}>H</Avatar>
              <Avatar sx={{ bgcolor: '#7fbed4 ' }} />
            </AvatarGroupMotion>
          </div>
        </div>
      </motion.div>

      <motion.div initial="hiddenVertical" whileInView="visibleVertical" viewport={{ amount: 0.2, once: true }} className={style.wrapper}>
        <div className={classNames(style.learn, style.default)}>
          <motion.iframe
            custom={1}
            variants={animation}
            className={style.video}
            title="preview"
            src="https://www.youtube.com/embed/Dv7gLpW91DM"
          ></motion.iframe>

          <div className={style.content}>
            <motion.h2 custom={2} variants={animation}>
              Why Choose Our IT School?
            </motion.h2>

            <motion.ul custom={3} variants={animation}>
              <li>
                <span>1.</span> Career-Focused Curriculum: Our tailored courses are designed to equip you with the skills employers are looking for in
                today's competitive job market.
              </li>
              <li>
                <span>2.</span> Experienced Instructors: Learn from industry experts who are passionate about helping you succeed in your IT journey.
              </li>
              <li>
                <span>3.</span> Hands-On Learning: Get practical, real-world experience through projects and simulations that prepare you for the
                challenges of the tech industry.
              </li>
              <li>
                <span>4.</span> Job Placement Assistance: Our dedicated career services team provides guidance and support to help you land your dream
                job after graduation.
              </li>
              <li>
                <span>5.</span> Community Support: Join a supportive community of learners and professionals who share your passion for technology.
              </li>
            </motion.ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hiddenVertical"
        whileInView="visibleVertical"
        viewport={{ amount: 0.2, once: true }}
        className={classNames(style.knowledge, style.default)}
        id={LandingNavigationContent.BESTSELLERS}
      >
        <motion.h2 custom={2} variants={animation}>
          HSchool Best
        </motion.h2>
        <motion.p custom={3} variants={animation}>
          A selection of our best courses
        </motion.p>

        <div className={style.content}>
          {listCourses.map((el, index) => {
            return (
              <PaperMotion custom={index + 3} variants={animation} elevation={1} className={style.item}>
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <p>{el.rating} ⭐️⭐️⭐️⭐️⭐️ </p>
              </PaperMotion>
            );
          })}

          <Link to={'/auth'}>
            <ButtonMotion custom={9} variants={animation} className={style.btn} variant="outlined">
              See more courses
            </ButtonMotion>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial="hiddenVertical"
        whileInView="visibleVertical"
        viewport={{ amount: 0.2, once: true }}
        className={style.wrapper}
        id={LandingNavigationContent.FAQ}
      >
        <div className={classNames(style.statistic, style.default)}>
          <motion.div custom={1} variants={animation} className={style.img}></motion.div>

          <div className={style.content}>
            {listFAQs.map(el => (
              <Accordion key={el.id}>
                <AccordionSummary expandIcon={<ChevronRight />}>{el.question}</AccordionSummary>
                <AccordionDetails>{el.answer}</AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default Landing;
