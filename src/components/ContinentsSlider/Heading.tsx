import { Text, Flex } from "@chakra-ui/react";

export function Heading() {
  return (
    <Flex
      my={26}
      direction="column"
      justify="center"
      align="center"
      h={100}
      fontWeight={500}
      fontSize={36}
    >
      <Text>Vamos nessa?</Text>
      <Text>Então escolha seu continente</Text>
    </Flex>
  );
}
