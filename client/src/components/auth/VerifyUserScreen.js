import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import "./VerifyUserScreen.css";

const VerifyUserScreen = () => {
  const [info, setInfo] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    async function fetchData() {
      try {
        const { data } = await axios.get(
          `/api/auth/verifyuser/${params.verifyToken}`,
          config
        );
        console.log(data);

        if (data.success === true) {
          localStorage.setItem("authToken", data.token);
          navigate("/");
        }
      } catch (error) {
        setInfo(error.response.data.error);
      }
    }
    fetchData();
  });

  return (
    <div className="verifyuser-screen">
      <span className="error-message">{info} </span>
    </div>
  );
};

export default VerifyUserScreen;
