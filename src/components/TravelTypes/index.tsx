import {
  Flex,
  useBreakpointValue,
  Grid,
  Icon,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Card } from "./Card";
import { FaCocktail, FaUmbrellaBeach, FaBuilding } from "react-icons/fa";
import { GiGreekTemple, GiEarthAmerica } from "react-icons/gi";
import { BsCircleFill } from "react-icons/bs";

const TRAVEL_TYPES = [
  { title: "vida noturna", icon: FaCocktail },
  { title: "praia", icon: FaUmbrellaBeach },
  { title: "moderno", icon: FaBuilding },
  { title: "clássico", icon: GiGreekTemple },
  { title: "e mais...", icon: GiEarthAmerica },
];

export function TravelTypes() {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (isWideScreen) {
    return (
      <Flex justify="space-between" p="28">
        {TRAVEL_TYPES.map((type) => (
          <Card key={type.title} icon={type.icon}>
            {type.title}
          </Card>
        ))}
      </Flex>
    );
  }

  return (
    <Wrap justify="space-around" mx={["25px","auto"]} my="36px" spacing="24px" maxWidth="480px">
      {TRAVEL_TYPES.map((type) => (
        <WrapItem mx="auto">
          <Flex w="100%" align="center">
            <Icon
              as={BsCircleFill}
              fontSize="0.5rem"
              color="yellow.500"
              mr="0.5rem"
            />
            <Text fontSize="18px" fontWeight="500" color="gray.600">{type.title}</Text>
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
}
