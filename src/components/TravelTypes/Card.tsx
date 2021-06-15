import { Flex, Icon, Text } from "@chakra-ui/react";
import React, { ElementType } from "react";

interface CardProps {
  children: string;
  icon: ElementType;
}

export function Card({ children, icon }: CardProps) {
  return (
    <Flex direction="column" justify="space-between" align="center">
      <Icon as={icon} fontSize={85} color="yellow.500" mb="6"/>
      <Text fontWeight="600" color="gray.500" fontSize={24}>{children}</Text>
    </Flex>
  );
}
