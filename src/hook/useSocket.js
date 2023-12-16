import { useCallback, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

export const useSocket = (serverPath) => {
  const [socket, setSocket] = useState(null);
  const [online, setOnline] = useState(false);

  const connnectSocket = useCallback(() => {
    const token = localStorage.getItem("token");
    const socketTemp = io.connect(serverPath, {
      transports: ["websocket"],
      autoConnect: true,
      forceNew: true,
      query: {
        "x-token": token,
      },
    });
    setSocket(socketTemp);
  }, [serverPath]);

  //   console.log(socket);
  const disconnectSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);

  useEffect(() => {
    setOnline(socket?.connected);
  }, [socket]);

  useEffect(() => {
    socket?.on("connect", () => {
      socket.emit("my_event", {
        "x-token": localStorage.getItem("token"),
      });
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket?.on("disconnect", () => setOnline(false));
  }, [socket]);

  useEffect(() => {
    socket?.on("my_event", () => {
      console.log("my_event");
    });
  }, [socket]);

  return {
    socket,
    online,
    connnectSocket,
    disconnectSocket,
  };
};
