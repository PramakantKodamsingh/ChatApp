import React, { useContext } from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };
  return (
    <div id="cont">
      <div>
        <h3>
          <span>C</span>atch<span>U</span>p...
        </h3>
      </div>

      <div>
        <button className="homebutton" onClick={navigate("/")}>
          Home
        </button>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
