import React from "react";
// import { useContextChatApp } from "../../context/useContext";
// import { chatTypes } from "../../context/chat/chatTypes";

export const TextTutorial = () => {
  //   const {
  //     useChat: { dispatch },
  //   } = useContextChatApp();

  return (
    <p
      className="flex gap-1 text-center justify-center cursor-pointer"
      // onClick={() => {
      //   dispatch({
      //     type: chatTypes.SHOW_TUTORIAL,
      //   });
      // }}
    >
      <span>Click here to view the application tutorial!</span>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    </p>
  );
};
