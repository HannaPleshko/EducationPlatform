import React from "react";

import Footer from "@Components/Footer/Footer";
import Header from "@Components/Header/Header";
import AuthForm from "@Components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <>
      <Header />
      <AuthForm isRegistration={false} />
      <Footer />
    </>
  );
};

export default AuthPage;
