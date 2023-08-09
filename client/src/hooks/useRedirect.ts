import React from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "cookies-ts";

import { User } from "@Interfaces/AppInterfaces";

const cookies = new Cookies();

const useRedirect = () => {
  const navigate = useNavigate();

  return (isRegistration: boolean) => {
    if (isRegistration) {
      navigate("/auth");
      return;
    }

    const token = cookies.get("access_token");

    if (token) {
      const user: User = jwt_decode(token);
      if (user.role === 3) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  };
};

export default useRedirect;
