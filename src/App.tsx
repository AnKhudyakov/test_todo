import { useContext } from "react";
import styles from "./App.module.scss";
import ToDoList from "./components/ToDoList/ToDoList";
import Toolbar from "./components/Toolbar/Toolbar";
import { ToDoContext } from "./context";
import { ToDoContextType } from "./vite-env";

function App() {
  const { isToggled } = useContext(ToDoContext) as ToDoContextType;
  return (
    <div className={isToggled ? styles.container_light : styles.container}>
      <Toolbar />
      <ToDoList />
    </div>
  );
}

export default App;
