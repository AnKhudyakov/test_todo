import { options } from "../../../helpers/formInitialValues";
import Input from "../Inputs/Input";
import Select from "../Select/Select";
import styles from "./Form.module.scss";

const Form = () => {
  return (
    <div className={styles.form}>
      <Input  name="Name" type="text" />
      <Input  name="Age" type="number" />
      <Select name="Subscription" options={options} />
      <div className={styles.checkbox_wrapper}>
        <Input type="checkbox" name="Employment" />
      </div>
    </div>
  );
};
export default Form;
