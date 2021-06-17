import {
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <Flex
      backgroundImage="BannerBackground.png"
      h="80"
      justify="space-between"
      maxWidth={1440}
      height={["164px", "335"]}
      mx="auto"
      w="100%"
    >
      <Flex
        direction="column"
        justify="space-evenly"
        lineHeight={54}
        maxWidth={["100%", "480px"]}
        ml={["16px", "28"]}
        mr="26px"
      >
        <Heading color="gray.50" fontWeight="500" mt="20" fontSize={["20px", "36"]}>
          5 Continentes, infinitas possibilidades.
        </Heading>
        <Text color="gray.100" fontSize={["14px", "20px"]} lineHeight="6" mb={70} mt="5">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
      {isWideScreen && (
        <Image src="Airplane.svg" bottom={-33} right="4" position="relative" />
      )}
    </Flex>
  );
}
