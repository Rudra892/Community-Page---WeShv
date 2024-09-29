import Single from '../Review/Single';
import Examples from './Examples';
import { Heading, Flex } from '@chakra-ui/react';
const UseCase = () => {
  return (

      <Flex direction='column' mt={100}>
        <Heading as='h1' fontSize={['sm', 'x-large']} textAlign='center'>
           Public or Private spaces
        </Heading>
        <Single
          text='You can make community. WeShv is flexible,power drivern  diverse community types.'
          my={5}
        />
        <Examples />
      </Flex>
  );
};

export default UseCase;
