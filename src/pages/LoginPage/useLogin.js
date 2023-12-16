import React, { useState } from "react";
import { useUserStore } from "../../store/userStore";
import { useAuthStore } from "../../store/authStore";

const initialState = {
  emailUser: "",
  password: "",
};

export const useLogin = () => {
  const [values, setValues] = useState(initialState);
  const { setAuthLogged } = useAuthStore((state) => state);
  const { setToken, setUser } = useUserStore((state) => state);

  const handleClick = () => {
    if (!values.emailUser) return alert("El nombre de usuario es necesario");
    setToken(true);
    setUser(values.emailUser);
    setAuthLogged(true);
  };

  const handleValues = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };
  return { handleClick, handleValues, values };
};
