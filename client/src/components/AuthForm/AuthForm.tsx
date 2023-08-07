import { useState, useContext, useEffect } from "react";

import { useCreateUserMutation, useAuthenticateMutation } from "../../services/user";
import { AuthContext } from "../../context/AuthContext";
import useRedirect from "../../hooks/useRedirect";

import Input from "../Input/Input";
import SelectRole from "./SelectRole";

import style from "./style.module.scss";

interface AuthFormProps {
  isRegistration: boolean;
}

interface FormValues {
  email: string;
  pwd: string;
  name: string;
  surname: string;
  role: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ isRegistration }) => {
  const [form, setForm] = useState<FormValues>({
    email: "",
    pwd: "",
    name: "",
    surname: "",
    role: "1",
  });

  const redirect = useRedirect();

  const { login } = useContext(AuthContext);

  const [createUser, { isSuccess: isRegistered }] = useCreateUserMutation();
  const [getUser, { isSuccess: isLoggedIn }] = useAuthenticateMutation();

  const sendRequest = async () => {
    try {
      isRegistration ? await createUser(form) : await getUser(form);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: any) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    if (isRegistered || isLoggedIn) {
      login();
      redirect(isRegistration);
    }
  }, [isRegistered, isLoggedIn]);

  return (
    <div className={style.wrapper}>
      <div className={style.loginForm}>
        {isRegistration ? <h1>Sign Up</h1> : <h1>Login</h1>}

        <div className={style.inps}>
          {["email", "pwd"].map((el, index) => (
            <Input key={index} name={el} handleChange={handleChange} />
          ))}

          {isRegistration && (
            <>
              {["name", "surname"].map((el, index) => (
                <Input key={index} name={el} handleChange={handleChange} />
              ))}

              <SelectRole
                name="role"
                value={form["role"]}
                handleChange={handleChange}
              />
            </>
          )}
        </div>

        <div onClick={sendRequest} className={style.btn}>
          {isRegistration ? "Create User" : "Login"}
        </div>
      </div>

      <div className={style.image}></div>
    </div>
  );
};

export default AuthForm;
