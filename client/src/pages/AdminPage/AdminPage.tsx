import React, { useState } from "react";

import Header from "@Components/Header/Header";
import Content from "@Components/AdminOptions/Content";

import style from "./style.module.scss";

const AdminPage = () => {
  const [curOption, setCurOption] = useState("user");

  return (
    <>
      <Header setCurOption={setCurOption} options={["user", "course"]} />

      <Content curOption={curOption} />
    </>
  );
};

export default AdminPage;
