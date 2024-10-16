import React, { useEffect } from "react";
import "./message.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { format } from "timeago.js";

const Message = ({ message, own }) => {
  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img className="messageImg" src="/person/myimg.jpg" alt="" />
          <p className="messageText">{message ? message.text : "loading..."}</p>
        </div>
        <div className="messageBottom">
          {message ? format(message.createdAt) : "loading..."}
        </div>
      </div>
    </>
  );
};

export default Message;
