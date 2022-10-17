import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./PrivateScreen.css";

const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: check auth token and push in history

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateData();
  }, []);

  // TODO: change this error
  return error ? (
    <div>
      <span className="error-message">{error}</span>
      <Link to="/login" className="btn btn-primary">
        Login
      </Link>
    </div>
  ) : (
    <div>
      <div className="private-access-text">{privateData}</div>

      <button
        onClick={() => {
          localStorage.removeItem("authToken");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default PrivateScreen;
