import { useContext } from "react";

import { AuthContext } from "../auth/AuthContext";
// import { SocketContext } from "./socketContext";
// import { ChatContext } from "./chat/ChatContext";

export const useContextApp = () => {
  const useAuthContext = useContext(AuthContext);
  //   const useSocketApp = useContext(SocketContext);
  //   const useChat = useContext(ChatContext);

  return {
    useAuthContext,
    //  useSocketApp,
    //  useChat,
  };
};
