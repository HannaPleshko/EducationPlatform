import React from 'react';

import Footer from '@layout/Footer/Footer';
import Header from '@layout/Header/Header';
import AuthForm from '@layout/AuthForm/AuthForm';

const LoginPage: React.FC = () => {
  return (
    <>
      <Header />
      <AuthForm isRegistration={false} />
      <Footer />
    </>
  );
};

export default LoginPage;
