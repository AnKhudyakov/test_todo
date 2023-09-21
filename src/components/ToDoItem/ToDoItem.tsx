import { IToDo } from "../../vite-env";
import styles from "./ToDoItem.module.scss";

type ToDoItemProps = {
  toDo: IToDo;
};

function ToDoItem({ toDo }: ToDoItemProps) {
  return (
    <>
      <td className={styles.name}>{toDo.Name}</td>
      <td>{toDo.Age}</td>
      <td>{toDo.Subscription}</td>
      <td>{toDo.Employment ? "Employed" : "Unemployed"}</td>
    </>
  );
}

export default ToDoItem;
