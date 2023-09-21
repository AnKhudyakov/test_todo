import { getIn } from "formik";
import { useContext, useState } from "react";
import { ToDoContext } from "../../../context";
import { ToDoContextType } from "../../../vite-env";
import ArrowButton from "../Buttons/ArrowButton";
import styles from "./Select.module.scss";

type SelectProps = {
  options: string[];
  name: string;
};

function Select({ name, options }: SelectProps) {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const { formik, isToggled } = useContext(ToDoContext) as ToDoContextType;

  return (
    <div
      className={styles.custom_dropdown}
      onClick={() => setIsDropDownVisible(!isDropDownVisible)}
    >
      <div className={styles.select_container}>
        {isDropDownVisible && (
          <div className={styles.select} onChange={formik.handleChange}>
            {options.map((el) => (
              <div
                className={styles.options}
                key={el}
                onClick={() => formik.setFieldValue("Subscription", el)}
              >
                {el}
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className={
          isToggled
            ? isDropDownVisible
              ? styles.selected_visible
              : styles.selected_light
            : styles.selected
        }
      >
        {getIn(formik.values, name) !== ""
          ? getIn(formik.values, name)
          : "Choose variant"}
      </div>
      <div className={styles.btns}>
        {isDropDownVisible ? (
          <ArrowButton type="increase" />
        ) : (
          <ArrowButton type="decrease" />
        )}
      </div>
    </div>
  );
}
export default Select;
