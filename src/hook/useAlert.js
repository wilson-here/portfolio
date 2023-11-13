// if we want to use a logic thru out the project, relate to state management -> write custom hook

import { useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }) =>
    setAlert({ show: true, text, type });

  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });

  //   hook return object of state, function to manipulate state. not jsx
  return { alert, showAlert, hideAlert };
};

export default useAlert;
