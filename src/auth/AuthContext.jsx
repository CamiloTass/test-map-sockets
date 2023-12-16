import { useCallback } from "react";

import { createContext, useState } from "react";
import { fetchUser, fetchWitchToken } from "../helper/fetch";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  name: null,
  email: null,
  logged: false,
  checking: true,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async ({ email, password }) => {
    const res = await fetchUser("auth/login", { email, password }, "POST");

    localStorage.setItem("token", "2626266262622");
    setAuth({
      uid: 22222222,
      checking: false,
      logged: true,
      name: "camilo",
      email: email,
    });

    if (res.ok) {
      localStorage.setItem("token", "2626266262622");

      // setAuth({
      //   uid: res.user.uid,
      //   checking: false,
      //   logged: true,
      //   name: res.user.name,
      //   email: res.user.email,
      // });
      setAuth({
        uid: 22222222,
        checking: false,
        logged: true,
        name: "camilo",
        email: "camilo.go",
      });
    }
    return res;
  };

  const verifyToken = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      });

      return false;
    }

    const res = await fetchWitchToken("/auth/renow");

    if (!res.ok) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null,
      });

      return false;
    }

    localStorage.setItem("token", res.token);

    setAuth({
      uid: res.user.uid,
      checking: false,
      logged: true,
      name: res.user.name,
      email: res.user.email,
    });

    return true;
  }, []);

  const logout = () => {
    localStorage.removeItem("token");

    setAuth({
      uid: null,
      checking: false,
      logged: false,
      name: null,
      email: null,
    });
  };

  const store = { login, logout, verifyToken, auth };

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};
