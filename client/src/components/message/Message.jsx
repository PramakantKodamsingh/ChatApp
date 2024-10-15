import React, { useEffect } from "react";
import "./message.css";
import { useSelector } from "react-redux";
import axios from "axios";

const Message = ({ own }) => {
  // const { user } = useSelector((state) => state.user);

  // const getConversations = async () => {
  //   try {
  //     const res = await axios.get("/conversations/");
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // getConversations();

  return (
    <>
      <div className={own ? "message own" : "message"}>
        <div className="messageTop">
          <img className="messageImg" src="/person/myimg.jpg" alt="" />
          <p className="messageText">
            Hello this is massage Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quo, quidem.
          </p>
        </div>
        <div className="messageBottom">1 hour ago</div>
      </div>
    </>
  );
};

export default Message;
