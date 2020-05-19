import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";

export default function TodoList() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  function Message({ todo }) {
    if (todo.completed) {
      return (
        <ListItemText style={{ "text-decoration": "line-through" }}>
          {todo.message}
        </ListItemText>
      );
    } else {
      return <ListItemText>{todo.message}</ListItemText>;
    }
  }

  return (
    <div>
      <List>
        {todos.map((todo) => {
          if (todo.message) {
            return (
              <ListItem key={todo.pk}>
                <Button
                  style={{ width: "300px" }}
                  onClick={() => dispatch({ type: "TOGGLE_TODO", pk: todo.pk })}
                >
                  <Message todo={todo} />
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={todo.completed}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => dispatch({ type: "DELETE_TODO", pk: todo.pk })}
                >
                  X
                </Button>
              </ListItem>
            );
          } else {
            return <div></div>;
          }
        })}
      </List>
    </div>
  );
}
