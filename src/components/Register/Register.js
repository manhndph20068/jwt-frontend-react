import "./Register.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [conFirmPassword, setConFirmPassword] = useState("");
  const defaultValidInput = {
    isValidEmail: true,
    isValidPhone: true,
    isValidUsername: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  };
  const [objCheckInput, setObjCheckInput] = useState(defaultValidInput);

  let history = useHistory();

  const handLogin = () => {
    history.push("/login");
  };

  const inValidInputs = () => {
    setObjCheckInput(defaultValidInput);

    if (!email) {
      toast.error("Email is required");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }

    var regx = /\S+@\S+\.\S+/;
    if (!regx.test(email)) {
      toast.error("Please enter a valid email address");
      setObjCheckInput({ ...defaultValidInput, isValidEmail: false });
      return false;
    }

    if (!phone) {
      toast.error("Phone is required");
      setObjCheckInput({ ...defaultValidInput, isValidPhone: false });
      return false;
    }

    if (!password) {
      toast.error("Password is required");
      setObjCheckInput({ ...defaultValidInput, isValidPassword: false });
      return false;
    }

    if (password !== conFirmPassword) {
      toast.error("Your Return pass is not the same");
      setObjCheckInput({ ...defaultValidInput, isValidConfirmPassword: false });
      return false;
    }

    return true;
  };

  const handleRegister = () => {
    let check = inValidInputs();

    if (check === true) {
      axios.post("http://localhost:8089/api/v1/register", {
        email,
        phone,
        username,
        password,
      });
    }
  };

  useEffect(() => {
    // axios.get("http://localhost:8089/api/v1/test-api").then((data) => {
    //   console.log("check data: ", data);
    // });
  }, []);

  return (
    <div className="register-container">
      <div className="container">
        <div className="row px-3 px-sm-3">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="brand">Manh</div>
            <div className="detail">hihi</div>
          </div>

          <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
            <div className="brand d-sm-none">Manh</div>
            <div className="form-group">
              <label>Email: </label>
              <input
                type="text"
                className={
                  objCheckInput.isValidEmail
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone number: </label>
              <input
                type="text"
                className={
                  objCheckInput.isValidPhone
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Username: </label>
              <input
                type="text"
                className={
                  objCheckInput.isValidUsername
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input
                type="password"
                className={
                  objCheckInput.isValidPassword
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Re-enter password: </label>
              <input
                type="password"
                className={
                  objCheckInput.isValidConfirmPassword
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Re-enter password"
                value={conFirmPassword}
                onChange={(e) => setConFirmPassword(e.target.value)}
              />
            </div>

            <button
              className="btn btn-primary"
              onClick={() => handleRegister()}
            >
              Register
            </button>
            <hr></hr>
            <div className="text-center">
              <button className="btn btn-success" onClick={() => handLogin()}>
                Already've an account?. Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
