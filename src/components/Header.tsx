import { Image, Heading, Flex, Link, Icon } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { BsChevronLeft } from 'react-icons/bs';

export function Header() {
  const router = useRouter();

  const isHomePage = router.asPath === "/";

  return(
    <Heading w="100%" h="24">
      {!isHomePage && <Link href="/" position="absolute" left="140px" top="24px"><Icon as={BsChevronLeft}/></Link>}
      <Flex align="center" justify="center" w="100%" px="140px" h="24">
        <Image src="Logo.svg" h="14"/>
      </Flex>
    </Heading>
  )
}