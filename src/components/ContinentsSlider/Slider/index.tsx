import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Text, Image, Stack, Flex } from "@chakra-ui/react";
import styles from "./slider.module.scss";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { SliderContent } from "./SliderContent";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export function Slider() {
  return (
    <Box my={["5", "20"]} mx={["0", "24px"]}>
      <Swiper
        className={styles["swiper-container"]}
        pagination={true}
        navigation={true}
      >
        <SwiperSlide className={styles["swiper-slide"]}>
          <SliderContent
            title="América do Sul"
            subTitle="Praias incríveis"
            bgImagePath="images/south_america/slide.jpg"
          />
        </SwiperSlide>

        <SwiperSlide className={styles["swiper-slide"]}>
          <SliderContent
            title="Europa"
            subTitle="O continente mais antigo"
            bgImagePath="images/europe/slide.jpg"
            slug="europe"
          />
        </SwiperSlide>

        <SwiperSlide className={styles["swiper-slide"]}>
          <SliderContent
            title="Africa"
            subTitle="Aventuras fantásticas"
            bgImagePath="images/africa/slide.jpg"
          />
        </SwiperSlide>

        <SwiperSlide className={styles["swiper-slide"]}>
          <SliderContent
            title="Asia"
            subTitle="Expandindo o seu universo"
            bgImagePath="images/asia/slide.jpg"
          />
        </SwiperSlide>

        <SwiperSlide className={styles["swiper-slide"]}>
          <SliderContent
            title="Antartica"
            subTitle="Esfriando a cabeça"
            bgImagePath="images/antartica/slide.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
