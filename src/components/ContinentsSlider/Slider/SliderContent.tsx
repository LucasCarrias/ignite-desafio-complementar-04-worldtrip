import { Flex, Text } from "@chakra-ui/react";

interface SliderContentProps {
  bgImagePath: string;
  title: string;
  subTitle: string;
}

export function SliderContent({
  bgImagePath,
  title,
  subTitle,
}: SliderContentProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      background={`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${bgImagePath})`}
      backgroundSize="100%"
      backgroundPosition="center"
      direction="column"
      align="center"
      justify="center"
      fontWeight="700"
    >
      <Text color="gray.50" fontSize={48}>
        {title}
      </Text>
      <Text color="gray.100" fontSize={24}>
        {subTitle}
      </Text>
    </Flex>
  );
}
