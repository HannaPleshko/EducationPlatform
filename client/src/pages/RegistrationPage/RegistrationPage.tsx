import React from 'react';

import Footer from '@layout/Footer/Footer';
import Header from '@layout/Header/Header';
import AuthForm from '@layout/AuthForm/AuthForm';

const RegistrationPage: React.FC = () => {
  return (
    <>
      <Header />
      <AuthForm isRegistration={true} />
      <Footer />
    </>
  );
};

export default RegistrationPage;
