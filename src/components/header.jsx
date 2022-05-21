import { Box } from "@chakra-ui/react";
import React from "react";
import ModalInputs from "./modaleInputs";
import ModalTodo from "./modalTodo";

export default function Header() {
  return (
    <Box display="flex">
      <ModalInputs />
      <ModalTodo />
    </Box>
  );
}
