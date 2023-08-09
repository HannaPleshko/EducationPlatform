import React from 'react';

import Footer from '@Components/Footer/Footer';
import Header from '@Components/Header/Header';
import AuthForm from '@Components/AuthForm/AuthForm';

const RegistrationPage = () => {
  return (
    <>
      <Header />
      <AuthForm isRegistration={true} />
      <Footer />
    </>
  );
};

export default RegistrationPage;
