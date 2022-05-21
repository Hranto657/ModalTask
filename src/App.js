import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import Header from "./components/header";

const theme = extendTheme();

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  );
}

export default App;
