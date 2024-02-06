import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SuccessPopup = ({ successMessage }) => {
  toast.success(successMessage, {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default SuccessPopup;
