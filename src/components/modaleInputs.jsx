import React from "react";
import {
  Box,
  Button,
  Fade,
  Input,
  InputLeftElement,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { EditIcon, LockIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function ModalInputs() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  const { isOpen, onToggle } = useDisclosure();
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
        Inputs
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
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text fontSize="3xl" fontWeight="semibold" mt="10">
            Create Account
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <InputLeftElement
                children={<EditIcon />}
                w="14px"
                h="14px"
                mt="40px"
                ml="3"
                fontSize="lg"
                color="gray.600"
              />
              <Input
                w="320px"
                h="48px"
                mt="6"
                pl="10"
                fontSize="md"
                color="gray.600"
                bg="gray.50"
                border="none"
                borderColor="gray.50"
                borderRadius="2xl"
                _hover={{ cursor: "pointer" }}
                _focus={{ border: "none" }}
                _active={{ border: "none" }}
                id="email"
                placeholder="E-mail"
                {...register("email", {
                  required: "The field is required",
                  pattern: {
                    value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+.)+[A-Za-z]+$/,
                    message: "Incorrect E-Mail",
                  },
                })}
              />
              <Box
                mt="2"
                ml="3"
                fontSize="md"
                fontWeight="semibold"
                color="red.700"
              >
                <p>{errors?.email && errors?.email?.message}</p>
              </Box>
            </FormControl>
            <FormControl>
              <InputLeftElement
                children={<LockIcon />}
                w="14px"
                h="14px"
                mt="40px"
                ml="3"
                fontSize="lg"
                color="gray.600"
              />
              <Input
                w="320px"
                h="48px"
                mt="6"
                pl="10"
                fontSize="md"
                color="gray.600"
                bg="gray.50"
                border="none"
                borderColor="gray.50"
                borderRadius="2xl"
                _hover={{ cursor: "pointer" }}
                _focus={{ border: "none" }}
                _active={{ border: "none" }}
                type="password"
                id="password"
                placeholder="Password"
                {...register("password", {
                  required: "The field is required",
                  minLength: {
                    value: 8,
                    message: "Incorrect Password",
                  },
                })}
              />
              <InputRightElement
                children={<ViewOffIcon />}
                w="14px"
                h="14px"
                mt="40px"
                mr="3"
                fontSize="lg"
                color="gray.600"
              />
              <Box
                mt="2"
                ml="3"
                fontSize="md"
                fontWeight="semibold"
                color="red.700"
              >
                <p>{errors?.password && errors?.password?.message}</p>
              </Box>
            </FormControl>
            <FormControl>
              <InputLeftElement
                children={
                  <LockIcon
                    w="19px"
                    h="19px"
                    mt="36px"
                    ml="10px"
                    fontSize="lg"
                    color="gray.600"
                  />
                }
              />
              <Input
                w="320px"
                h="48px"
                mt="6"
                pl="10"
                fontSize="md"
                color="gray.600"
                bg="gray.50"
                border="none"
                borderColor="gray.50"
                borderRadius="2xl"
                _hover={{ cursor: "pointer" }}
                _focus={{ border: "none" }}
                _active={{ border: "none" }}
                type="password"
                id="pass"
                placeholder="Confirm Password"
                {...register("pass", {
                  required: "The field is required",
                  minLength: {
                    value: 8,
                    message: "Incorrect Password",
                  },
                })}
              />
              <InputRightElement
                children={<ViewOffIcon />}
                w="14px"
                h="14px"
                mt="40px"
                mr="3"
                fontSize="lg"
                color="gray.600"
              />
              <Box
                mt="2"
                ml="3"
                fontSize="md"
                fontWeight="semibold"
                color="red.700"
              >
                <p>{errors?.pass && errors?.pass?.message}</p>
              </Box>
            </FormControl>
            <Box fontSize="10px" mt="3" ml="2">
              <p>
                By creating an account, you agree to our Terms & Conditions
                <br />
                and Privacy Policy
              </p>
            </Box>
            <Button
              mt="10"
              type="submit"
              w="320px"
              h="48px"
              borderRadius="xl"
              bg="green.400"
              _hover={{ bg: "green.400" }}
              _active={{ bg: "green.400" }}
              _focus={{ bg: "green.400" }}
              fontSize="lg"
              color="white"
              fontWeight="semibold"
            >
              Continue
            </Button>
          </form>
          <Box display="flex" mt="20px" alignItems="center">
            <Box w="135px" h="3px" bg="gray.50" />
            <Box ml="4" mr="4" fontSize="md" color="black">
              <p>OR</p>
            </Box>
            <Box w="135px" h="3px" bg="gray.50" />
          </Box>
          <Button
            mt="6"
            w="320px"
            h="48px"
            border="2px"
            borderRadius="xl"
            borderColor="gray.300"
            bg="white"
            _hover={{ bg: "white" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            fontSize="lg"
            color="gray.900"
            fontWeight="semibold"
          >
            <FontAwesomeIcon icon={faAppleWhole} color="black" size="md" />
            <Box ml="10px" mt="4px">
              Continue With Apple
            </Box>
          </Button>
          <Box display="flex" mt="7">
            <Button
              w="44px"
              h="44px"
              mr="5"
              border="2px"
              borderRadius="xl"
              borderColor="gray.300"
              bg="white"
              _hover={{ bg: "white" }}
              _active={{ bg: "white" }}
              _focus={{ bg: "white" }}
              fontSize="lg"
              color="gray.900"
              fontWeight="semibold"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </Button>
            <Button
              w="44px"
              h="44px"
              border="2px"
              borderRadius="xl"
              borderColor="gray.300"
              bg="white"
              _hover={{ bg: "white" }}
              _active={{ bg: "white" }}
              _focus={{ bg: "white" }}
              fontSize="lg"
              color="gray.900"
              fontWeight="semibold"
            >
              <FontAwesomeIcon icon={faFacebookF} color="blue" />
            </Button>
          </Box>
        </Box>
      </Fade>
    </div>
  );
}
