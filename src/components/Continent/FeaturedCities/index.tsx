import { Stack, SimpleGrid, Text } from "@chakra-ui/react";
import { CityCard } from "./CityCard";

interface Country {
  name: string;
  flag_image_url: string;
}

interface FeaturedCity {
  id: number;
  name: string;
  country: Country;
  image_url: string;
}

interface FeaturedCitiesProps {
  cities: FeaturedCity[];
}

export function FeaturedCities({ cities }: FeaturedCitiesProps) {
  return (
    <>
      <Stack mx={["1rem", "140px"]} mb="35px">
        <Text color="gray.600" fontSize="36px" fontWeight="500" mb={["20px", "40px"]}>
          Cidades +100
        </Text>
        <SimpleGrid columns={[1, 4]} gap={["20px", "45px"]}>
          {cities.map((city) => (
            <CityCard
              key={city.id}
              name={city.name}
              country={city.country}
              image_url={city.image_url}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
}
