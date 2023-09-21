import styles from "./ArrowButton.module.scss";
import React, { useContext } from "react";
import { ToDoContext } from "../../../context";
import { ToDoContextType } from "../../../vite-env";

type ButtonProps = {
  type: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const ArrowButton = ({ type, handleClick }: ButtonProps) => {
  const { isToggled } = useContext(ToDoContext) as ToDoContextType;
  return (
    <button
      type="button"
      className={isToggled ? styles.btn_light : styles.btn}
      onClick={handleClick}
    >
      <div className={styles[type]}></div>
    </button>
  );
};

export default ArrowButton;
