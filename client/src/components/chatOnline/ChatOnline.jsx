import React from "react";
import "./chatOnline.css";

const ChatOnline = () => {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg" src="./person/myimg.jpg" alt="" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Pramakant</span>
      </div>
    </div>
  );
};

export default ChatOnline;
