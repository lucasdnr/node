import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate();

  function onCloseHandler() {
    // go up one level, this will close the modal
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={onCloseHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
