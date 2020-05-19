import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function NewItemForm() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const onChange = (e) => {
    setNewTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(newTodo);
    dispatch({ type: "ADD_TODO", message: newTodo });
    setNewTodo("");
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        onChange={onChange}
        value={newTodo}
        label="new todo"
        type="text"
      />
      <Button
        style={{ marginTop: 10, marginLeft: 20 }}
        variant="outlined"
        type="submit"
      >
        Add Item
      </Button>
    </form>
  );
}
