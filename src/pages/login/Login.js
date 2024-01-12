import axios from "axios";
import Form from "../../components/forms/Form";
import { useState } from "react";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import { useEffect } from "react";

const Login = () => {
  const [login, setLogin] = useState(null);
  const signIn = useSignIn();
  const navigate = useNavigate();

  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    } else {
      navigate("/dashboard");
    }
  }, []);

  const FormLogin = {
    inputs: [
      {
        label: "User Name",
        type: "text",
        name: "userName",
      },

      {
        label: "Password",
        type: "password",
        name: "password",
      },
    ],
  };

  const postLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/admin", login)
      .then((res) => {
        console.log(res);
        if (
          signIn({
            token: res.data.token,
            expiresIn: 3000000,
            tokenType: "Bearer",
            authState: res.data.admin,
          })
        ) {
          navigate("/dashboard");
        } else {
          console.log("error while authenticate");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    const data = { ...login, [name]: value };
    setLogin(data);
  };

  return (
    <div className=" w-full h-screnn flex items-center justify-center">
      {" "}
      <Form
        inputsForm={FormLogin}
        hedear="Login"
        buttomName="Login"
        onChange={(e) => handelChange(e)}
        onSubmit={postLogin}
      />{" "}
    </div>
  );
};

export default Login;
