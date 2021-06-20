import { Flex, Box, Text } from "@chakra-ui/react";

interface HeadingProps {
  bannerUrl: string;
  title: string;
}

export function Heading({ bannerUrl, title }: HeadingProps) {
  return (
    <Flex
      background={`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${bannerUrl})`}
      h={["150px", "500px"]}
      backgroundSize="100%"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      justifyContent="center"
      alignContent="center"
    >
      <Text
        fontWeight={600}
        fontSize={["28px", "48px"]}
        color="gray.50"
        position={["initial", "relative"]}
        left="10%"
        top="70%"
        lineHeight={["150px"]}
      >
        {title}
      </Text>
    </Flex>
  );
}
