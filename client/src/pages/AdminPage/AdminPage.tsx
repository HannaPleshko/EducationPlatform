import React, { useState } from 'react';

import Header from '@Components/Header/Header';
import Content from '@Components/AdminOptions/Content';
import { AdminNavigationContent } from '@Interfaces';
import { AdminNavigation } from '@constants/options';

import style from './style.module.scss';

const AdminPage = () => {
  const [curOption, setCurOption] = useState<string>(AdminNavigationContent.USERS);

  return (
    <>
      <Header setCurOption={setCurOption} options={AdminNavigation} />

      <Content curOption={curOption} />
    </>
  );
};

export default AdminPage;
