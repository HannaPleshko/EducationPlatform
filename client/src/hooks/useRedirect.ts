import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Cookies from "cookies-ts";

const cookies = new Cookies();

interface FormValues {
  email: string;
  pwd: string;
  name: string;
  surname: string;
  role: string | number;
}

export default function useRedirect() {
  const navigate = useNavigate();

  return (isRegistration: boolean) => {
    debugger
    if (isRegistration) {
      navigate("/auth");
      return;
    }

    const token = cookies.get("access_token");

    if (token) {
      const user: FormValues = jwt_decode(token);
      if (user.role === 3) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  };
}
