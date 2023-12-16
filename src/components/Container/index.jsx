import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="dark:bg-slate-900 bg-sky-900 dark:text-cyan-100 text-slate-900 min-h-screen ">
      {children}
    </div>
  );
};
