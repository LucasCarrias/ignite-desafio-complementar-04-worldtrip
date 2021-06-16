import { Flex, Box, Text } from "@chakra-ui/react";

interface HeadingProps {
  bannerUrl: string;
  title: string;
}

export function Heading({ bannerUrl, title }: HeadingProps) {
  return (
    <Flex
      background={`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${bannerUrl})`}
      h={500}
      backgroundSize="100%"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Text
        fontWeight={600}
        fontSize={48}
        color="gray.50"
        position="relative"
        left="10%"
        top="70%"
      >
        {title}
      </Text>
    </Flex>
  );
}
