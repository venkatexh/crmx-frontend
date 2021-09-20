import "../../sass/components/login.component.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth/signin";
import Axios from "axios";
import hostHeader from "../../config/host";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    Axios.post(`${hostHeader.url}/api/auth/signin`, user).then((res) => {
      if (res.status === 200) {
        sessionStorage.setItem("loggedUser", JSON.stringify(res.data));
        dispatch(login(res.data));
      } else {
        setErrorMessage(res.error.message);
      }
    });
  };

  return (
    <form className={"formContainer"}>
      <div className={"header"}>Login</div>
      <div className={"inputsContainer"}>
        <input
          className={"authInput"}
          type={"email"}
          placeholder={"myemail@domain.com"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className={"authInput"}
          type={"password"}
          placeholder={"mypassword"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className={"utilityContainer"}>
        <span>{errorMessage}</span>
        <button className={"loginButton"} onClick={handleLogin} type={"submit"}>
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
