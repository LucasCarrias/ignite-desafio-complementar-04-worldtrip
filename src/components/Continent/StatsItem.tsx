import { Tooltip, Text, Flex, Icon, Box } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface StatsItemProps {
  value: number | string;
  legend: string;
  infoTooltip?: string;
}

export function StatsItem({ value, legend, infoTooltip }: StatsItemProps) {
  return (
    <Flex justify="space-between" flexDirection="column">
      <Text
        fontSize="48"
        fontWeight="600"
        textAlign="center"
        color="yellow.500"
      >
        {value}
      </Text>
      <Text textAlign="center" fontWeight="bold">
        {legend}
        {infoTooltip && (
        <Tooltip label={infoTooltip} display="inline">
          <Box as="span" ml="0.25rem">
            <Icon as={AiOutlineInfoCircle} />
          </Box>
        </Tooltip>
      )}
      </Text>
      
    </Flex>
  );
}
