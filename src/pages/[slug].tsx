import { GetStaticPaths, GetStaticProps } from 'next';
import { Box } from '@chakra-ui/react';
import { Heading } from '../components/Continent/Heading';
import { api } from '../services/api';
import { Content } from '../components/Continent/Content';

interface FeaturedCity {
  id: number;
  name: string;
  country: string;
  image_url: string;
}

interface Continent {
  id: number;
  slug: string;
  name:  string;
  description: string;
  banner_url: string;
  stats: {
    countries: number;
    languages: number;
    top_100_count: number;
  };
  featured_cities: FeaturedCity[];
}

interface ContinentPageProps {
  continent: Continent;
}

export default function ContinentPage({continent}: ContinentPageProps) {
  return (
    <Box>
      <Heading bannerUrl={continent.banner_url} title={continent.name}/>
      <Content description={continent.description} stats={continent.stats}/>
    </Box>
  )
}

export const getStaticPaths:GetStaticPaths = async () => {
  return {
    paths: [
      {params: {slug: 'europe'}}
    ],
    fallback: false
  }
}

export const getStaticProps:GetStaticProps = async ({params}) => {
  const { slug } = params;
  const response = await api.get(`/continents?slug=${slug}`);

  const continent = response.data[0];

  if (!continent) {
    return {
      notFound: true
    }
  }

  return {
    props: { continent: response.data[0] }
  }
}