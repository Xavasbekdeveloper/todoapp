import React, { memo } from "react";

const TodoCreate = ({ updateTodo, getData, formData, createTodo }) => {
  const handleCreate = (e) => {
    e.preventDefault();

    if (formData.id) {
      updateTodo(formData);
    } else {
      let date = new Date();
      const newTodo = {
        ...formData,
        id: date.getTime(),
        time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      };
      getData(newTodo);
    }
  };

  return (
    <form onSubmit={handleCreate} className="todo__form" action="">
      <input
        required
        value={formData.title}
        onChange={(e) => createTodo({ title: e.target.value })}
        type="text"
        placeholder="Enter title"
      />
      <input
        required
        value={formData.text}
        onChange={(e) => createTodo({ text: e.target.value })}
        type="text"
        placeholder="Enter description"
      />
      <select
        required
        value={formData.status}
        onChange={(e) => createTodo({ status: e.target.value })}
        name=""
        id=""
      >
        <option disabled value="">
          Choose Status
        </option>
        <option value="important">Important</option>
        <option value="not must">Not must</option>
        <option value="average">Average</option>
      </select>
      <button>{formData.id ? "Save" : "Create"}</button>
    </form>
  );
};

export default memo(TodoCreate);
