import { Flex, Text, HStack, Icon } from "@chakra-ui/react";
import { StatsItem } from "./StatsItem";

interface ContinentContentProps {
  description: string;
  stats: {
    countries: number;
    languages: number;
    top_100_count: number;
  };
}

export function Content({ description, stats }: ContinentContentProps) {
  return (
    <Flex
      mx={["1rem", "140px"]}
      my={["24px", "80px"]}
      maxWidth={["100%", "140px"]}
      height={["auto", "300px"]}
      justifyContent="space-between"
      align="center"
      flexDirection={["column", "row"]}
    >
      <Text w={["100%", "600px"]} textAlign="justify" lineHeight={["21px", "36px"]} fontSize={["14px", "24px"]}>
        {description}
      </Text>
      <HStack spacing={42} mt={["1rem", "0"]}>
        <StatsItem value={stats.countries} legend="países" />
        <StatsItem value={stats.languages} legend="linguas" />
        <StatsItem
          value={stats.top_100_count}
          legend="cidades + 100"
          infoTooltip="Número de cidades entre as mais visitadas do mundo"
        />
      </HStack>
    </Flex>
  );
}
