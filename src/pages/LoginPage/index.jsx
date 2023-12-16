import React, { useState } from "react";

import { BoxInput, InputSubmit, TextTutorial } from "../../components";
import { useLogin } from "./useLogin";

const initialState = {
  emailUser: "",
  passwordUser: "",
};

export const LoginPage = () => {
  const { handleClick, handleValues, values } = useLogin();
  const [form, setform] = useState(initialState);

  return (
    <section className="min-h-screen flex justify-center items-center">
      <form
        onSubmit={handleClick}
        className="max-w-lg p-6 grid gap-4 rounded-lg dark:bg-slate-800 bg-slate-200"
      >
        <h1 className="text-2xl text-center font-bold uppercase">
          Tass International
        </h1>

        <BoxInput
          label={"Email"}
          typeInput={"email"}
          nameInput={"emailUser"}
          handleValues={handleValues}
          value={values.emailUser}
          placeholder={"ej: holamundo@gmail.com"}
        />

        <BoxInput
          label={"Password"}
          typeInput={"password"}
          nameInput={"password"}
          handleValues={handleValues}
          value={values.passwordUser}
          placeholder={"password"}
        />

        <InputSubmit text={"login"} />
        <TextTutorial />
      </form>
    </section>
  );
};
