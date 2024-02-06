import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ErrorPopup = ({ errorMessage }) => {
  toast.error(errorMessage);
  return (
    <ToastContainer
      position="top-center"
      autoClose={1500}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition:Bounce
    />
  );
};

export default ErrorPopup;
