import { Stack, Image, Text, Flex } from "@chakra-ui/react";

interface Country {
  name: string;
  flag_image_url: string;
}

interface CityCardProps {
  name: string;
  country: Country;
  image_url: string;
}

export function CityCard({ name, country, image_url }: CityCardProps) {
  return (
    <Stack w={["256px"]} spacing={0} mx={["auto", "0"]}>
      <Image src={image_url} alt={name} borderTopRadius="0.25rem" />
      <Flex
        justifyContent="space-between"
        align="center"
        p="24px"
        borderBottomRadius="0.25rem"
        borderLeft="1px"
        borderBottom="1px"
        borderRight="1px"
        borderColor="yellow.50"
      >
        <Stack >
          <Text fontWeight="600" fontSize="20px" color="gray.900">
            {name}
          </Text>
          <Text fontWeight="500" >{country.name}</Text>
        </Stack>
        <Image
          src={country.flag_image_url}
          alt={country.name}
          fit="cover"
          h="30px"
          w="30px"
          borderRadius="full"
        />
      </Flex>
    </Stack>
  );
}
