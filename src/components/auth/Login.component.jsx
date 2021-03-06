import "../../sass/components/login.component.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth/signin";
import { GoogleLogin } from "react-google-login";
import Axios from "axios";
import { withRouter } from "react-router";
import hostHeader from "../../config/host";
import { Link } from "react-router-dom";

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
          }
        })
        .catch((error) => {
          setErrorMessage(error.response.data.error.message);
          setLoading(false);
        });
    }
  };

  const handleGoogleLogin = (googleData) => {
    console.log(googleData);
    Axios.post(`${hostHeader.url}/api/auth/google`, {
      idToken: googleData.tokenId,
      accessToken: googleData.accessToken,
    })
      .then((res) => {
        if (res.status === 200) {
          sessionStorage.setItem("loggedUser", JSON.stringify(res.data));
          dispatch(login(res.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className={"formContainer"}>
      <div className={"header"}>Login</div>
      <div className={"inputsContainer"}>
        <input
          className={"authInput"}
          type={"email"}
          placeholder={"email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className={"authInput"}
          type={"password"}
          placeholder={"password"}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorMessage("");
          }}
          value={password}
        />
      </div>
      <div className={"utilityContainer"}>
        <span className={"errorMessage"}>{errorMessage}</span>Use email:
        test@test.com, password: test
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
      <div className={"googleLogin"}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText={"Login with Google"}
          onSuccess={handleGoogleLogin}
          onFailure={handleGoogleLogin}
          cookiePolicy={"single_host_origin"}
          accessType={"offline"}
          prompt={"consent"}
        />
      </div>
      <div>
        <div className={"header"}>Don't Have an Account?</div>
        <div className={"utilityContainer"}>
          <Link to={"/signup"}>
            <button className={"loginButton"}>Sign up</button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default withRouter(LoginForm);
