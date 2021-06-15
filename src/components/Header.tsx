import { Image, Heading, Center } from "@chakra-ui/react";

export function Header() {
  return(
    <Heading w="100%">
      <Center h="24">
        <Image src="Logo.svg" h="14"/>
      </Center>
    </Heading>
  )
}