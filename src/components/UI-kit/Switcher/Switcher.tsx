import { useContext } from "react";
import { ToDoContext } from "../../../context";
import { ToDoContextType } from "../../../vite-env";
import styles from "./Switcher.module.scss";

const Switcher = () => {
  const { isToggled, setIsToggled } = useContext(
    ToDoContext
  ) as ToDoContextType;
  return (
    <div className={styles.container}>
      <label className={isToggled ? styles.switcher_light : styles.switcher}>
        <input
          type="checkbox"
          checked={isToggled}
          onChange={() => setIsToggled(!isToggled)}
        />
        <span className={styles.switch} />
      </label>
      <p className={isToggled ? styles.label_light : styles.label}> Mode</p>
    </div>
  );
};

export default Switcher;
