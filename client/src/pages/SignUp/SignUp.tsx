import React, { useState } from 'react';

import Footer from '@layout/Footer/Footer';
import Header from '@layout/Header/Header';
import AuthForm from '@layout/AuthForm/AuthForm';
import { LandingNavigationContent } from '@interface';
import { LandingNavigation } from '@constants/options';

const SignUp: React.FC = () => {
  const [curOption, setCurOption] = useState<string>(LandingNavigationContent.ABOUT);

  return (
    <>
      <Header setCurOption={setCurOption} options={LandingNavigation} />
      <AuthForm isRegistration={true} />
      <Footer />
    </>
  );
};

export default SignUp;
