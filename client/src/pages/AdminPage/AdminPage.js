import { useState } from 'react';

import Course from '../../components/AdminOptions/Course';
import User from '../../components/AdminOptions/User';
import Header from '../../components/Header/Header';

import style from './style.module.scss';

function AdminPage() {
  const [currentOption, setCurrentOption] = useState(1);

  return (
    <>
      <Header setCurrentOption={setCurrentOption} options={[{ id: 1, item: 'Users' }, { id: 2, item: 'Courses' }]} />

      <div className={style.wrapper}>
        <h1>Administration</h1>
        {currentOption === 1 ? <User /> : <Course />}
      </div>
    </>
  );
}

export default AdminPage;
