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
      mx="140px"
      my="80px"
      spacing={70}
      maxWidth={1440}
      height="300px"
      justifyContent="space-between"
      align="center"
    >
      <Text w={600} textAlign="justify" lineHeight="36px" fontSize="24px">
        {description}
      </Text>
      <HStack spacing={42}>
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
