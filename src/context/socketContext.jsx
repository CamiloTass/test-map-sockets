import React, { useEffect } from "react";
import { createContext } from "react";
// import { useContextChatApp } from "./useContext";
// import { chatTypes } from "./chat/chatTypes";
// import { scrollToBottom } from "../helper/scrollToBottom";
import { useAuthStore } from "../store/authStore";
import { useSocket } from "../hook/useSocket";
import { useMapStore } from "../store/mapStore";

const urlSocket = "http://15.229.119.48:3000";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  //   const { dispatch } = useContextChatApp().useChat;
  //   const { auth } = useContextChatApp().useAuthContext;
  const { logged } = useAuthStore();
  const { setLatAndLng } = useMapStore((state) => state);

  const { socket, online, connnectSocket, disconnectSocket } = useSocket(
    urlSocket
    //  import.meta.env.VITE_API_URL_SOCKETSk
  );

  useEffect(() => {
    connnectSocket();
    //  if (auth.logged) {
    //    connnectSocket();
    //  }
  }, []);

  useEffect(() => {
    //  if (!auth.logged) {
    //    disconnectSocket();
    //  }
  }, []);

  //   useEffect(() => {
  //     socket?.on("userList", (users) =>
  //       dispatch({
  //         type: chatTypes.LOAD_USERS,
  //         payload: users,
  //       })
  //     );
  //   }, [socket, dispatch]);

  useEffect(() => {
    //  console.log("socket reaceived");
    socket?.on("my_response", (message) => {
      // dispatch({
      //   type: chatTypes.GET_MESSAGE,
      //   payload: message,
      // });
      setLatAndLng(message);
      // scrollToBottom("contentMessages", true);
    });
  }, [socket]);

  const store = {
    socket,
    online,
  };

  return (
    <SocketContext.Provider value={store}>{children}</SocketContext.Provider>
  );
};
