import { Divider } from '@chakra-ui/react';
import { Banner } from "../components/Banner";
import { ContinentsSlider } from '../components/ContinentsSlider';
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <>
      <Banner />
      <TravelTypes />
      <Divider bg="gray.600" h={1} w={90} mx="auto" my={["24px", "auto"]} borderRadius="full"/>
      <ContinentsSlider />
    </>
  );
}
