import "../../sass/components/login.component.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth/signin";
import Axios from "axios";
import hostHeader from "../../config/host";
import { withRouter } from "react-router";

const LoginForm = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || !email.trim()) {
      setErrorMessage("Please enter your email.");
    } else if (password === "" || !password.trim()) {
      setErrorMessage("Please enter your password.");
    } else {
      setLoading(true);
      const user = {
        email,
        password,
      };
      Axios.post(`${hostHeader.url}/api/auth/signin`, user)
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.setItem("loggedUser", JSON.stringify(res.data));
            dispatch(login(res.data));
            props.history.push("/dashboard");
          }
        })
        .catch((error) => {
          setErrorMessage(error.response.data.error.message);
          setLoading(false);
        });
    }
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
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorMessage("");
          }}
          value={password}
        />
      </div>
      <div className={"utilityContainer"}>
        <span className={"errorMessage"}>{errorMessage}</span>
        <button className={"loginButton"} onClick={handleLogin} type={"submit"}>
          {loading ? (
            <img
              src={"loaders/btn_loader.gif"}
              alt={"loader"}
              className={"btnLoader"}
            />
          ) : (
            "Login"
          )}
        </button>
      </div>
      <div>
        <div className={"header"}>Don't Have an Account?</div>
      </div>
    </form>
  );
};

export default withRouter(LoginForm);
