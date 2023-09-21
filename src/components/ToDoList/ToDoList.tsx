import { useContext, useEffect } from "react";
import { ToDoContext } from "../../context";
import { ToDoContextType } from "../../vite-env";
import ToDoItem from "../ToDoItem/ToDoItem";
import styles from "./ToDoList.module.scss";

function ToDoList() {
  const {
    toDos,
    activeToDoId,
    isToggled,
    setActive,
    getActive,
    setToDosFromLS,
  } = useContext(ToDoContext) as ToDoContextType;

  useEffect(() => {
    setToDosFromLS();
  }, []);

  return (
    <div className={styles.container}>
      <div className={isToggled ? styles.head_light : styles.head}></div>
      <table className={isToggled ? styles.table_light : styles.table}>
        <thead>
          <tr className={isToggled ? styles.row_light : styles.row}>
            <th className={styles.column_name}>Name</th>
            <th className={styles.column_age}>Age</th>
            <th className={styles.column_sub}>Subscription</th>
            <th className={styles.column_emp}>Employment</th>
          </tr>
        </thead>
        <tbody className={styles.list}>
          {!toDos.length && <tr>No ToDos</tr>}
          {toDos.map((row) => (
            <tr
              className={
                activeToDoId === row.id ? styles.active : styles.default
              }
              key={row.id}
              onClick={() =>
                getActive()?.id !== row.id ? setActive(row.id) : setActive("")
              }
            >
              <ToDoItem toDo={row} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ToDoList;
