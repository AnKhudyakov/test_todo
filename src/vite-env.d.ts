/// <reference types="vite/client" />

export interface Fields {
  Name: string;
  Age: number;
  Subscription: string;
  Employment: boolean;
}

export interface IToDo extends Fields {
  id: string;
}

export type ToDoContextType = {
  toDos: IToDo[];
  activeToDoId: string;
  isToggled: boolean;
  setIsToggled: Dispatch<React.SetStateAction<boolean>>;
  formik: FormikValues;
  createToDo: (formData: Fields) => void;
  updateToDo: (updatedToDo: IToDo) => void;
  removeToDo: (id: string) => void;
  setActive: (id: string) => void;
  getActive: () => INote | undefined;
  setToDosFromLS: () => void;
};
