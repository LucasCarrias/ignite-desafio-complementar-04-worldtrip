import { Image, Heading, Flex, Link, Icon } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { BsChevronLeft } from 'react-icons/bs';

export function Header() {
  const router = useRouter();

  const isHomePage = router.asPath === "/";

  return(
    <Heading w="100%">
      <Flex h="24" align="center" justify="center" w="100%" px="140px">
        {!isHomePage && <Link href="/" mr="auto"><Icon as={BsChevronLeft}/></Link>}
        <Image src="Logo.svg" h="14" position="relative" right="50%" translateX="50%" transform="auto"/>
      </Flex>
    </Heading>
  )
}