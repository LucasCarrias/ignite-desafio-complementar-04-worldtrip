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
        fontSize={["24", "48"]}
        fontWeight="600"
        textAlign={["left", "center"]}
        color="yellow.500"
      >
        {value}
      </Text>
      <Text textAlign={["left", "center"]} fontWeight="bold" display="inline">
        {legend}
        {infoTooltip && (
        <Tooltip label={infoTooltip}>
          <Box as="span" ml={["0.1rem", "0.25rem"]} display="inline">
            <Icon as={AiOutlineInfoCircle}/>
          </Box>
        </Tooltip>
      )}
      </Text>
      
    </Flex>
  );
}
