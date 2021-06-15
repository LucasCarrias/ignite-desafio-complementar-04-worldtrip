import {AppProps} from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../../styles/theme';
import React from 'react';
import { Header } from '../components/Header';

import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import '../../styles/swiper.global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
