import "../static/css/login.css";
import { verifyLogin } from "../00delete/login";
import { signIn } from "../utils/signin";

const Login = () => (
  <div>
    <form id="lg_form">
      <div className="form-group">
        <input id="email" type="email" placeholder="email" required />
      </div>
      <div className="form-group">
        <input id="password" type="password" placeholder="password" required />
      </div>
      <button
        id="lg_button"
        className="btn btn-block"
        type="submit"
        onClick={signIn}
      >
        Login
      </button>
    </form>
  </div>
);

export default Login;
