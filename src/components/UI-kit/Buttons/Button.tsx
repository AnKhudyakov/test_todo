import React, { useContext } from "react";
import { ToDoContext } from "../../../context";
import { ToDoContextType } from "../../../vite-env";
import styles from "./Button.module.scss";

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
};

const Button = ({ handleClick, type, value }: ButtonProps) => {
  const { isToggled } = useContext(ToDoContext) as ToDoContextType;
  return (
    <button
      className={isToggled ? styles.btn_light : styles.btn}
      type={type}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Button;
