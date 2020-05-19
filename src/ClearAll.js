import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

export default function ClearAll() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  if (todos.length === 0) {
    return <div></div>;
  } else {
    return (
      <Button
        size="small"
        variant="outlined"
        style={{ marginBottom: 10 }}
        onClick={() => dispatch({ type: "CLEAR_ALL" })}
      >
        Clear all todos
      </Button>
    );
  }
}
