import LoginForm from "../../components/auth/Login.component";
import '../../sass/pages/login.page.scss'

const Login = () => {
  return (
    <div className={'loginPage'}>
      <LoginForm />
    </div>
  );
};

export default Login;
