import React from 'react';

import Header from '@layout/Header/Header';
import Footer from '@layout/Footer/Footer';
import Content from './Content';

import style from './style.module.scss';
import Navigation from './Navigation';

const Courses: React.FC = () => {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <div className={style.content}>
          <Navigation />

          <Content />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Courses;
