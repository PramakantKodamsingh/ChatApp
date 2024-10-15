import React, { useEffect, useState } from "react";
import "./conversations.css";
import axios from "axios";

const Conversations = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if conversation is defined and has members
    if (conversation && conversation.members) {
      const friendId = conversation.members.find((m) => m !== currentUser._id); // Assuming currentUser is available and has _id

      // Fetch user data based on friendId
      const getUser = async () => {
        try {
          const res = await axios.get(
            "http://localhost:8080/api/v1/users/getuser?userId=" + friendId
          );
          console.log(res.data); // Logs user data received from the API
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      };

      // Only make the request if friendId is found

      getUser();
    }
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img className="conversationImg" src="/person/myimg.jpg" alt="" />
      <span className="conversationName">Pramakant Kodamsingh</span>
    </div>
  );
};

export default Conversations;
