import React, { useState } from 'react';

import Header from '@layout/Header/Header';
import Content from '@components/Administration/Content';
import { AdminNavigationContent } from '@Interfaces';
import { AdminNavigation } from '@constants/options';

const Administartion: React.FC = () => {
  const [curOption, setCurOption] = useState<string>(AdminNavigationContent.USERS);

  return (
    <>
      <Header setCurOption={setCurOption} options={AdminNavigation} />
      <Content curOption={curOption} />
    </>
  );
};

export default Administartion;
