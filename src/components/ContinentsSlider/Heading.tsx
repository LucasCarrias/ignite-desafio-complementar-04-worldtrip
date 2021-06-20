import { Text, Flex } from "@chakra-ui/react";

export function Heading() {
  return (
    <Flex
      my={["0", "26px"]}
      direction="column"
      justify="center"
      align="center"
      h={100}
      fontWeight={500}
      fontSize={["20px", "36px"]}
      color="gray.600"
    >
      <Text>Vamos nessa?</Text>
      <Text>Então escolha seu continente</Text>
    </Flex>
  );
}
