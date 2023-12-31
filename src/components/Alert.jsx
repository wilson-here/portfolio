import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div className="fixed top-20 left-8 right-8 flex justify-center items-center z-50 max-w-[384px] mx-auto">
      <div
        className={`${
          type === "danger" ? "bg-red-500" : "bg-green-500"
        } p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center`}
        role="alert"
      >
        <p
          className={` flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
