import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterScreen.css";

const RegisterScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [preferredProgrammingLanguage, setPreferredProgrammingLanguage] =
    useState("C++");
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      // history.push("/");
      navigate("/");
    }
  });

  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setInfo("");
      }, 5000);
      return setInfo("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/register",
        {
          name,
          username,
          email,
          password,
          gender,
          preferredProgrammingLanguage,
        },
        config
      );

      if (data.success) {
        setInfo(
          "User Successfully created !!. Please check your E-mail for verification."
        );
        setTimeout(() => {
          setInfo("");
          navigate("/login");
          // history.push("/login");
        }, 5000);
      }
      // localStorage.setItem("authToken", data.token);
    } catch (error) {
      setInfo(error.response.data.error);
      setTimeout(() => {
        setInfo("");
      }, 5000);
    }
  };

  return (
    <div className="register-screen">
      <form onSubmit={registerHandler} className="register-screen__form">
        <h3 className="register-screen__title">Register</h3>
        {info && <span className="error-message">{info}</span>}

        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            required
            id="username"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            required
            id="email"
            placeholder="Enter your Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender: </label>
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="preferredProgrammingLanguage">
            Choose your Preferred Language:{" "}
          </label>
          <select
            name="preferredProgrammingLanguage"
            id="preferredProgrammingLanguage"
            value={preferredProgrammingLanguage}
            onChange={(e) => setPreferredProgrammingLanguage(e.target.value)}
          >
            <option value="C++">C++</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="Node.js">Node.js</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>

        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterScreen;
