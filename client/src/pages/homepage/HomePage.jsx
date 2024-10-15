import React, { useContext } from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };
  const goto = () => {
    navigate("/");
  };
  const gotoM = () => {
    navigate("/messenger");
  };
  return (
    <div id="cont">
      <div>
        <h3>
          <span>C</span>atch<span>U</span>p...
        </h3>
      </div>

      <div>
        <button className="homebutton" onClick={gotoM}>
          Messenger
        </button>
        <button className="homebutton" onClick={goto}>
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
