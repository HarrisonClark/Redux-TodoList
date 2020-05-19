import React from "react";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import NewTodoForm from "./NewTodoForm.js";
import ClearAll from "./ClearAll.js";
import TodoList from "./TodoList.js";
import Layout from "./Layout";
import { Typography } from "@material-ui/core";

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Typography variant="h2">Redux Todo List</Typography>
        <NewTodoForm />
        <TodoList />
        <ClearAll />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Layout>
    </Provider>
  );
}
