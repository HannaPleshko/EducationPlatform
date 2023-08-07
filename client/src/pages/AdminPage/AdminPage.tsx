import React, { useState } from "react";

import Header from "../../components/Header/Header";
import Content from "../../components/AdminOptions/Content";

import style from "./style.module.scss";

function AdminPage() {
  const [curOption, setCurOption] = useState('user');

  return (
    <>
      <Header
        setCurOption={setCurOption}
        options={["user", "course"]}
      />

      <Content curOption={curOption} />
    </>
  );
}

export default AdminPage;
