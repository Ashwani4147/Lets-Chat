// import React,{useContext} from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { ChatContext } from '../context/ChatContext';



// const Message = ({message}) => {
//   const {currentUser}=useContext(AuthContext)
//   const {data}=useContext(ChatContext)


//   console.log(message)

//   return (
//     <div className='message owner'>
//         <div className='messageInfo'>
//             <img src={message.senderId=== currentUser.uid
//              ? currentUser.photoURL
//             : data.user.photoURL}  alt="" />
//             <span>Just now</span>
//         </div>
//         <div className='messageContent'>
//             <p>Hello message</p>
//           <img src="https://images.pexels.com/photos/14384723/pexels-photo-14384723.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> 
//         </div>
      
//     </div>
//   )
// }

// export default Message;

//lama dev code

import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
