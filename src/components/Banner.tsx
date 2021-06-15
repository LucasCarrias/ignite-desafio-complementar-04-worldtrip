import { Flex, Stack, Heading, Text, Image } from '@chakra-ui/react';

export function Banner() {
  return(
    <Flex backgroundImage="BannerBackground.png" h="80" justify="space-between" maxWidth={1440} height={335} mx="auto">
      <Flex direction="column" justify="space-evenly" fontSize={36} lineHeight={54} maxWidth="480px" ml="28">
        <Heading color="gray.50" fontWeight="500" mt="20">
          5 Continentes,
          infinitas possibilidades.
        </Heading>
        <Text color="gray.100" fontSize={20} lineHeight="6" mb={70} mt="5">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
        </Text>
      </Flex>
      <Image src="Airplane.svg" bottom={-33} right="4" position="relative" />
    </Flex>
  );
}