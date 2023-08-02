import { useState } from 'react';
import Course from '../../components/AdminOptions/Course';
import User from '../../components/AdminOptions/User';
import Header from '../../components/Header/Header';
import style from './style.module.scss';

function AdminPage() {
  const [currentOption, setCurrentOption] = useState('Users');
  console.log(currentOption);

  return (
    <>
      <Header setCurrentOption={setCurrentOption} options={['Users', 'Courses']} />

      <div className={style.wrapper}>
        <h1>Administration</h1>
        {currentOption === 'Users' ? <User /> : <Course />}
      </div>
    </>
  );
}

export default AdminPage;
