import React, { useState } from 'react';

import Header from '@layout/Header/Header';
import Content from '@components/Administration/Content';
import { AdminNavigationContent } from '@interfaces';
import { AdminNavigation } from '@constants/options';
import Footer from '@layout/Footer/Footer';

const Administartion: React.FC = () => {
  const [curOption, setCurOption] = useState<string>(AdminNavigationContent.USERS);

  return (
    <>
      <Header setCurOption={setCurOption} options={AdminNavigation} />
      <Content curOption={curOption} />
      <Footer />
    </>
  );
};

export default Administartion;
