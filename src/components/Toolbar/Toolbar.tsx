import { useContext, useEffect } from "react";
import { ToDoContext } from "../../context";
import { ToDoContextType } from "../../vite-env";
import Button from "../UI-kit/Buttons/Button";
import Form from "../UI-kit/Forms/Form";
import Switcher from "../UI-kit/Switcher/Switcher";
import styles from "./Toolbar.module.scss";
import { initialValues } from "../../helpers/formInitialValues";

function Toolbar() {
  const {
    activeToDoId,
    isToggled,
    formik,
    removeToDo,
    getActive,
  } = useContext(ToDoContext) as ToDoContextType;

  useEffect(() => {
    const activeToDo = getActive();
    if (activeToDo) {
      for (let field in activeToDo) {
        if (field !== "id") {
          formik.setFieldValue(field, activeToDo[field]);
        }
      }
    } else {
      formik.setValues(initialValues);
    }
  }, [getActive()]);

  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit}>
        <Form />
        {getActive() ? (
          <Button type="submit" value="Update" />
        ) : (
          <Button type="submit" value="Insert" />
        )}
      </form>
      <div className={styles.devider} />
      <Switcher />
      <Button
        type="button"
        value="Delete"
        handleClick={() => removeToDo(activeToDoId)}
      />
      <p className={isToggled ? styles.label_light : styles.label}>
        Insert Row
      </p>
    </div>
  );
}

export default Toolbar;
