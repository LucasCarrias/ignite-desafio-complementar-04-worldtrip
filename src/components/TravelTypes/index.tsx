import {Flex} from '@chakra-ui/react'; 
import { Card } from './Card';
import { FaCocktail, FaUmbrellaBeach, FaBuilding } from 'react-icons/fa';
import { GiGreekTemple, GiEarthAmerica } from 'react-icons/gi';


export function TravelTypes() {
  return <Flex justify="space-between" p="28" >
    <Card icon={FaCocktail}>
      vida noturna
    </Card>
    <Card icon={FaUmbrellaBeach}>
      praia
    </Card>
    <Card icon={FaBuilding}>
      moderno
    </Card>
    <Card icon={GiGreekTemple}>
      clássico
    </Card>
    <Card icon={GiEarthAmerica}>
      e mais...
    </Card>
  </Flex>;
}