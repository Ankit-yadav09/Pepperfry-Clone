import {
  Box,
  Button,
  Flex,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Show,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Signup = () => {
  const [show, setShow] = React.useState(false);
  const handleSubmit = () => {
    alert("hello");
  };
  const handleClick = () => setShow(!show);
  return (
    <Flex px="6" gap="3rem">
      <Show above="md">
        <Box w="45%">
          <Image
            w="100%"
            h="100%"
            src="https://ii1.pepperfry.com/media/wysiwyg/banners/Web_IMG_17Dec1x_2712.jpg"
            alt="sign up"
          />
        </Box>
      </Show>
      <Box w={{base:"100%",md:"40%",lg:"55%"}}>
        <VStack w="100%" rowGap="10rem">
          <VStack w="100%">
            <form
              style={{
                width: "100%",
                rowGap: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
              onSubmit={handleSubmit}
            >
              <FormControl isRequired>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Enter  Your Name Here"
                    variant="flushed"
                    focusBorderColor="#f16521"
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type="text"
                    placeholder="Enter  Your Mobile No Here"
                    variant="flushed"
                    focusBorderColor="#f16521"
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type="email"
                    placeholder="Enter  Your Email Here"
                    variant="flushed"
                    focusBorderColor="#f16521"
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter  Your password Here"
                    variant="flushed"
                    focusBorderColor="#f16521"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      color="#f16521"
                      onClick={handleClick}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                width="100%"
                type="submit"
                variant="solid"
                _hover={{}}
                bg="#f16521"
                color={"white"}
              >
                Yeah! I Want Credits
              </Button>
            </form>
            <Box>
              By registering you agree to our
              <Link alignSelf="start" href="#" textDecoration="underline">
                Terms & Conditions
              </Link>
            </Box>
          </VStack>
          <VStack w="100%">
            <Box w="100%">
              <Button
                w="100%"
                color="#f16521"
                fontSize="0.9rem"
                variant="outline"
              >
                Existing User? Log In
              </Button>
            </Box>
            <Box w="100%">
              <Button
                display="flex"
                w="100%"
                rightIcon={
                  <Image
                    w="40%"
                    h="100%"
                    src="https://ii1.pepperfry.com/images/social_login_google_2x.png"
                    alt="logo"
                  />
                }
                fontSize="0.9rem"
                variant="unstyled"
              >
                OR Continue with
              </Button>
            </Box>
          </VStack>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Signup;
