import {
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Mission = ({ ctaLink, ctaText }) => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const imageUrl =
    "url('https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f2acb2cbba8032240f4d5dd_creators-right%402x.jpg')";
  
  return (
    <Flex
      as='section'
      direction='row'
      height={['36rem', '36rem', '50.8rem', '36.9rem']}
      bgImage={['none', 'none', imageUrl, imageUrl]}
      backgroundSize='cover'
      align='center'
      justify='center'
      mt={4}
    >
      <VStack
        fontWeight='normal'
        backgroundColor={bg}
        w={['80%', '80%', '50%']}
        h='100%'
        mt={10}
        p={5}
      >
        <Heading as='h2' fontWeight='bold' fontSize='xl' color="#ff24a4">
          Bringing The Gap
        </Heading>
        <Text w={['90%', '50%']} align='center' opacity='0.6'>
        At WeShv, our mission is to unite communities in the fight against food waste and scarcity. By connecting donors, NGOs, volunteers, and local hosts, we aim to ensure surplus food reaches those in need while promoting sustainable practices.
        </Text>
        <Text w={['90%', '50%']} align='center' opacity='0.6'>
        We leverage innovative tools, such as freshness tags and map hotspots, to identify areas in urgent need of assistance. Through partnerships with open kitchens and food banks, we provide educational sessions that teach creative ways to repurpose excess food, empowering volunteers with a point-based system to track their contributions.
        </Text>
        <Text mb={3} w={['90%', '50%']} align='center' opacity='0.6'>
        Our commitment to transparency means meticulously tracking each donation from its source to its destination.</Text>
        
        <Link to={ctaLink}>
          <Flex justify='center'>
            <Button
              bg="#ff24a4"
              color="white"
              size='lg'
              py='4'
              px='4'
              lineHeight='1'
              borderRadius='8px'
              _hover={{
                bg: "white",
                color: "#ff24a4",
                border: "2px solid #ff24a4"
              }}
            >
              {ctaText}
            </Button>
          </Flex>
        </Link>
      </VStack>
    </Flex>
  );
};

export default Mission;