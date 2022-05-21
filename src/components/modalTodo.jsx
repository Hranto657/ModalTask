import {
  Box,
  Button,
  Fade,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./modalTodo.css";

export default function ModalTodo() {
  const { isOpen, onToggle } = useDisclosure();

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false,
    },
  ]);

  const [text, setText] = useState();

  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        text: text,
        isCompleted: false,
      },
    ]);
  };

  const completedSize = todos.filter((todo) => todo.isCompleted).length;

  const onClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const onDelete = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const onChange = (newTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo;
        }
        return todo;
      })
    );
  };
  return (
    <div>
      <Button
        size="md"
        w="28"
        h="12"
        color="red.600"
        fontWeight="extrabold"
        fontSize="md"
        border="4px"
        borderColor="green.500"
        borderRadius="2xl"
        textTransform="uppercase"
        _focus={{ borderColor: "green.500" }}
        onClick={onToggle}
      >
        TodoList
      </Button>
      <Fade in={isOpen}>
        <Box
          w="450px"
          h="750px"
          ml="10"
          mt="1"
          bg="white"
          border="2px"
          borderRadius="2xl"
          borderColor="green.500"
        >
          <Text textAlign="center" fontSize="3xl" fontWeight="semibold" mt="10">
            Tasks List
          </Text>
          <Box className="main">
            <div className="todoForm">
              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  onAdd(text);
                  setText("");
                }}
              >
                <Input
                  w="300px"
                  h="40px"
                  fontSize="md"
                  color="gray.600"
                  bg="gray.50"
                  border="none"
                  borderColor="gray.50"
                  borderRadius="10px"
                  _hover={{ cursor: "pointer" }}
                  _focus={{ border: "none" }}
                  _active={{ border: "none" }}
                  type="text"
                  placeholder="Enter you task"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
                <button className="btn_input">Add</button>
              </form>
            </div>
            <div className="todoList">
              {todos.map((todo) => {
                return (
                  <div>
                    <form className="list">
                      <input
                        className={
                          todo.isCompleted ? "listinpdel listinp" : "listinp"
                        }
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={(e) => {
                          onChange({
                            ...todo,
                            isCompleted: e.target.checked,
                          });
                        }}
                      />
                      <h1
                        key={todo.id}
                        className={todo.isCompleted ? "listinpdel" : "listh1"}
                      >
                        {todo.text}
                      </h1>
                      <button
                        className="btn_delete"
                        type="button"
                        onClick={() => {
                          onDelete(todo);
                        }}
                      >
                        X
                      </button>
                    </form>
                  </div>
                );
              })}
            </div>
            <div className="todoFooter">
              <h1>
                {completedSize}/{todos.length} Completed
              </h1>
              <button onClick={onClearCompleted}>Clear Completed</button>
            </div>
          </Box>
        </Box>
      </Fade>
    </div>
  );
}
