import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  // router v6.23
  const routerError = useRouteError();
  // console.log(routerError);

  const { status, statusText, error } = routerError;

  return (
    <div className="min-h-96 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-gray-500">{status}</h1>
      <h1 className="text-4xl font-semibold my-3 text-red-500">{statusText}</h1>
      {/* <h1 className="text-xl font-semibold my-3 text-blue-500">
        {error.message}
      </h1> */}
    </div>
  );
};

export default NotFound;
