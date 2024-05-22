import React, { Fragment, memo, useCallback, useState } from "react";
import TodoCreate from "./TodoCreate";
import TodoManage from "./TodoManage";

import "./todo.scss";

let initialState = {
  id: null,
  title: "",
  text: "",
  status: "",
  time: "",
};

const TodoApp = () => {
  const [formData, setFormData] = useState(initialState);
  const [data, setData] = useState([]);

  let createTodo = useCallback((payload) => {
    setFormData((p) => ({ ...p, ...payload }));
  }, []);

  let getData = useCallback((todos) => {
    setData((prev) => [...prev, todos]);
    setFormData(initialState);
  }, []);

  let deleteTodo = useCallback(
    (id) => {
      if (confirm("Are you sure you want to delete this item?")) {
        let filterData = data?.filter((el) => el.id !== id);
        setData(filterData);
      }
    },
    [data]
  );

  let updateValue = useCallback((payload) => {
    setFormData(payload);
  }, []);

  let updateTodo = useCallback(
    (payload) => {
      let index = data?.findIndex((el) => el.id === payload.id);
      data?.splice(index, 1, payload);
      setData(data);
      setFormData(initialState);
    },
    [data]
  );

  return (
    <Fragment>
      <section className="todo">
        <h1 className="todo__title">To Do List</h1>

        <TodoCreate
          getData={getData}
          formData={formData}
          createTodo={createTodo}
          updateTodo={updateTodo}
        />
        <TodoManage
          updateValue={updateValue}
          deleteTodo={deleteTodo}
          data={data}
        />
      </section>
    </Fragment>
  );
};

export default memo(TodoApp);
