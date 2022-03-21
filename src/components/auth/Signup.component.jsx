import "../../sass/components/login.component.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth/signin";
import { GoogleLogin } from "react-google-login";
import Axios from "axios";
import { withRouter } from "react-router";
import hostHeader from "../../config/host";
import { Link } from "react-router-dom";

const SignupForm = (props) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [orgName, setOrgName] = useState("");
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
        firstName,
        lastName,
        email,
        password,
        orgName,
      };
      Axios.post(`${hostHeader.url}/api/auth/signup`, user)
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
      <div className={"header"}>Sign up</div>
      <div className={"inputsContainer"}>
        <input
          className={"authInput"}
          type={"text"}
          placeholder={"first name"}
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          className={"authInput"}
          type={"text"}
          placeholder={"last name"}
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
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
        <input
          className={"authInput"}
          type={"text"}
          placeholder={"organization name"}
          onChange={(e) => {
            setOrgName(e.target.value);
            setErrorMessage("");
          }}
          value={orgName}
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
            "Sign up"
          )}
        </button>
      </div>
      <div className={"googleLogin"}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText={"Sign up with Google"}
          onSuccess={handleGoogleLogin}
          onFailure={handleGoogleLogin}
          cookiePolicy={"single_host_origin"}
          accessType={"offline"}
          prompt={"consent"}
        />
      </div>
      <div>
        <div className={"header"}>Already have an account?</div>
        <div className={"utilityContainer"}>
          <Link to={"/login"}>
            <button className={"loginButton"}>Login</button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default withRouter(SignupForm);
