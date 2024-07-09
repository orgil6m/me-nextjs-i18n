import { toast } from "react-toastify";

const ToastSettings = {
  className: "toast-message",
  autoClose: 2500,
  pauseOnHover: false,
  hideProgressBar: true,
  closeOnClick: true,
  newestOnTop: true,
};

export const ShowToast = (message, status) => {
  switch (status) {
    case "success":
      toast.success(message, ToastSettings);
      break;
    case "error":
      toast.error(message, ToastSettings);
      break;
    case "info":
      toast.info(message, ToastSettings);
      break;
    default:
      break;
  }
};
