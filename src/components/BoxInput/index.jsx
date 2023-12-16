import React from "react";

export const BoxInput = ({
  label,
  typeInput,
  nameInput,
  handleValues,
  value,
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={nameInput}>{label}</label>
      <input
        className="outline-none rounded-sm border-b-2 dark:bg-slate-800 bg-slate-200 dark:border-cyan-200 border-slate-900 p-1"
        type={typeInput}
        id={nameInput}
        name={nameInput}
        onChange={(e) => handleValues(nameInput, e.target.value)}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
