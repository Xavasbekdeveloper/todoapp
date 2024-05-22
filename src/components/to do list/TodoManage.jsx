import React, { Fragment, memo, useMemo } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const TodoManage = ({ data, deleteTodo, updateValue }) => {
  let total = useMemo(() => {
    return data.length;
  }, [data]);

  let todoItem = data?.map((item) => (
    <li key={item.id} className="todo__item">
      <b>{item.title}</b>
      <span>{item.text}</span>
      <span>{item.status}</span>
      <span>{item.time}</span>
      <div className="todo__list__btns">
        <button onClick={() => updateValue(item)}>
          <FaEdit className="todo__list__edit-btn" />
        </button>
        <button onClick={() => deleteTodo(item.id)}>
          <RiDeleteBin6Fill className="todo__list__delete-btn" />
        </button>
      </div>
    </li>
  ));
  return (
    <Fragment>
      <h2 className="todo__list__title">Total: {total}</h2>
      <ul className="todo__list">{todoItem}</ul>
    </Fragment>
  );
};

export default memo(TodoManage);
