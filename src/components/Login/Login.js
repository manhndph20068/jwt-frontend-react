import "./Log.scss";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  let history = useHistory();

  const handCreateNewAcount = () => {
    history.push("/register");
  };

  return (
    <div className="login-container">
      <div className="container">
        <div className="row px-3 px-sm-3">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="brand">Manh</div>
            <div className="detail">hihi</div>
          </div>

          <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
            <div className="brand d-sm-none">Manh</div>
            <input
              type="text"
              className="form-control"
              placeholder="Email address or phone number"
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <button className="btn btn-primary">Login</button>
            <span className="text-center">
              <a className="forgot-password" href="/#">
                Forgot your password?
              </a>
            </span>
            <hr></hr>
            <div className="text-center">
              <button
                className="btn btn-success"
                onClick={() => handCreateNewAcount()}
              >
                Create new acount
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
