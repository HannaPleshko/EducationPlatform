import React from "react";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AuthForm from "../../components/AuthForm/AuthForm";

function RegistrationPage() {
  return (
    <>
      <Header />
      <AuthForm isRegistration={false} />
      <Footer />
    </>
  );
}

export default RegistrationPage;
