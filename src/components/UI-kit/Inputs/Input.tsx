import { getIn } from "formik";
import { useContext } from "react";
import { ToDoContext } from "../../../context";
import { ToDoContextType } from "../../../vite-env";
import ArrowButton from "../Buttons/ArrowButton";
import styles from "./Input.module.scss";

type InputProps = {
  name: string;
  type: string;
};

function Input({ name, type }: InputProps) {
  const { formik, isToggled } = useContext(ToDoContext) as ToDoContextType;
  const styleInput =
    isToggled && type !== "checkbox"
      ? styles[`${type}_light`]
      : styles[`${type}`];

  const handleDecrease = () => {
    if (getIn(formik.values, name) > 18)
      formik.setFieldValue(name, getIn(formik.values, name) - 1);
  };

  const handleIncrease = () => {
    if (getIn(formik.values, name) < 100)
      formik.setFieldValue(name, getIn(formik.values, name) + 1);
  };

  return (
    <div className={styles.container}>
      <input
        className={styleInput}
        type={type}
        value={getIn(formik.values, name)}
        name={name}
        onChange={formik.handleChange}
        placeholder={name}
        checked={getIn(formik.values, name)}
        id="check1"
        min="18"
        max="100"
      />
      {type === "number" && (
        <div className={styles.btns}>
          <ArrowButton type="decrease" handleClick={handleDecrease} />
          <ArrowButton type="increase" handleClick={handleIncrease} />
        </div>
      )}
      {type === "checkbox" && (
        <label
          className={isToggled ? styles.label_light : styles.label}
          htmlFor="check1"
        >
          Employed
        </label>
      )}
    </div>
  );
}
export default Input;
