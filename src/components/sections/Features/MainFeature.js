import React from 'react';
import Header from './Header';
import { Box, Grid } from '@chakra-ui/react';
import Feature from './Feature';

const MainFeature = () => {
  return (
    <Box as='section' mt={4} mb={5}>
      <Header />
      <Grid
        templateRows='repeat(3, 1fr)'
        templateColumns={{sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(6, 1fr)'}}
        gap={4}
        p={[3, 5, 10, 2]}
      >
        <Feature
          rowSpan={{sm: 3, md: 3, lg: 2}}
          colSpan={2}
          heading='👋
          About our Communities'
          text="Join our node-based community ecosystem where Donors, NGOs, Volunteers, and Hosts unite to tackle food wastage. We operate digital freshness tags to ensure quality and use map-based hotspots to direct food to areas in need. Our 'Food Fuel Centers' serve as pickup hubs managed by Hosts. Dive into our OpKitchens, partner with community kitchens, and track food from donation to destination with our unique FoodLife tags."
          features={[
            'Community Pages',
            'Social Interactions',
            'Waste Management Events',
            'Event alerts',
            'Food Waste Technique sharing',
          ]}
        />
        <Feature
          rowSpan={1}
          colSpan={2}
          heading='⛳️
          United for a Sustainable Future: WeShv Community'
          text='Provide a dedicated home for your coaching clients to get access to resources, connect with each other, and interact directly with you.'
        />
        <Feature
          rowSpan={1}
          colSpan={2}
          heading='📚
          Uniting Communities for a Greener Future'
          text='Add a community to your course, help your students connect with each other, and improve student-outcomes. Integrate with Teachable, Kajabi, and other course platforms.'
        />
        <Feature
          rowSpan={1}
          colSpan={2}
          heading='🚲
          Empowering Local Networks Through Shared Resources'
          text='Give your customers the space to share ideas with each other for how to best use your product.'
        />
        <Feature
          rowSpan={1}
          colSpan={2}
          heading='🎯
          A Health-Conscious Approach to Food Sharing'
          text='Building an engaged community is a super power for any brand. Integrate your community directly into your product or website.'
        />
        <Feature
          rowSpan={1}
          colSpan={2}
          heading='🧒🏽
          Transforming Surplus Into Opportunity with Expert Guidance'
          text='Provide a space for your students, parents, and teachers to gather for your microschool pod. Share resources, discuss schoolwork, and stay organized.'
        />
        <Feature
          rowSpan={1}
          colSpan={2}
          heading='📰
          Tracking Food Journeys for a Transparent and Fair System'
          text='Your readers are smart and have so much in common. Help them meet each other and continue the discussion inside of your own community.'
        />
        <Feature
          rowSpan={1}
          colSpan={2}
          heading='🎤
          Sunday Sessions: Learning, Sharing, and Growing Together
'
          text='Your listeners want to keep the conversation going after the episode is over. Offer premium content they can’t get anywhere else.'
        />
      </Grid>
    </Box>
  );
};

export default MainFeature;
