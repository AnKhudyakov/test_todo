import { faker } from "@faker-js/faker";
import React, { createContext, useState } from "react";
import { Fields, IToDo, ToDoContextType } from "../vite-env";
import { useFormik } from "formik";
import { initialValues } from "../helpers/formInitialValues";

type ToDoProviderProps = {
  children: React.ReactNode;
};

export const ToDoContext = createContext<ToDoContextType | null>(null);

export const TodoProvider = ({ children }: ToDoProviderProps) => {
  const initialToDo = Array.from({ length: 20 }, () => {
    return {
      id: faker.string.uuid(),
      Name: faker.person.fullName(),
      Age: faker.number.int({ min: 18, max: 100 }),
      Subscription: faker.string.fromCharacters([
        "Subscribed",
        "Not Subscribed",
        "Other",
      ]),
      Employment: faker.datatype.boolean(),
    };
  });

  const [toDos, setToDos] = useState<IToDo[]>(initialToDo);
  const [activeToDoId, setActiveToDoId] = useState<string>("");
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleFormSubmit = async () => {
    const activeToDo = getActive();
    if (activeToDo) {
      updateToDo({ ...formik.values, id: activeToDo.id });
    } else {
      createToDo(formik.values);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
  });

  const createToDo = (formData: Fields) => {
    const newToDo: IToDo = {
      ...formData,
      id: faker.string.uuid(),
    };
    setToDos([...toDos, newToDo]);
    setActiveToDoId(newToDo.id);
    localStorage.setItem("toDos", JSON.stringify([newToDo, ...toDos]));
  };

  const updateToDo = (updatedToDo: IToDo) => {
    const updatedToDos = toDos.map((toDo: IToDo) => {
      if (toDo.id === updatedToDo.id) {
        return updatedToDo;
      }
      return toDo;
    });
    setToDos([...updatedToDos]);
    localStorage.setItem("toDos", JSON.stringify([...updatedToDos]));
  };

  const removeToDo = (id: string) => {
    const newToDos = toDos.filter((toDo: IToDo) => {
      if (toDo.id != id) return toDo;
    });
    setToDos([...newToDos]);
    localStorage.setItem("toDos", JSON.stringify([...newToDos]));
  };

  const setActive = (id: string) => {
    setActiveToDoId(id);
  };

  const getActive = () => {
    let anctiveToDo: IToDo | undefined;
    if (activeToDoId) {
      anctiveToDo = toDos.find((toDo: IToDo) => toDo.id === activeToDoId);
    }
    return anctiveToDo;
  };

  const setToDosFromLS = () => {
    if (localStorage.length) {
      const toDoCash = localStorage.getItem("toDos");
      if (toDoCash) {
        setToDos(JSON.parse(toDoCash));
      }
    } else {
      localStorage.setItem("toDos", JSON.stringify(toDos));
    }
  };

  return (
    <ToDoContext.Provider
      value={{
        toDos,
        activeToDoId,
        isToggled,
        formik,
        setIsToggled,
        createToDo,
        updateToDo,
        removeToDo,
        setActive,
        getActive,
        setToDosFromLS,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
