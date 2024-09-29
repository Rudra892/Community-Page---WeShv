import React from 'react';
import { Flex, Text, VStack, Badge } from '@chakra-ui/react';

const MenuItem = (props) => {
  const { children, isLast, ...rest } = props;
  return (
    <Text
      mt={3}
      ml={{ base: 0, sm: isLast ? 0 : 8 }}
      display='block'
      fontWeight='light'
      fontSize='small'
      {...rest}
    >
      {children}
    </Text>
  );
};

const LeftNav = () => {
  return (
    <Flex
      as='aside'
      align='left'
      justify='space-between'
      wrap='wrap'
      w='25%'
      mb={8}
      mt={5}
      height='69vh'
    >
      <VStack display='block' flexBasis='auto'>
        {/* welcome section */}
        <Flex align='left' justify='flex-start' direction='column' pt={0}>
          <MenuItem>
            <Text as='span' fontWeight='bold' fontSize='sm' color="#ff24a4">
              Profile
            </Text>
          </MenuItem>
          <MenuItem>
            <Flex>
              🙏🏼
              <Text ml={2}>Dashboard</Text>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex>
              👋🏼
              <Text ml={2}>Contributions</Text>
              <Badge ml={105}>7</Badge>
            </Flex>
          </MenuItem>

          {/* theory section */}
          <MenuItem mt={6}>
            <Text as='span' fontWeight='bold' fontSize='sm' color="#ff24a4">
              Map
            </Text>
          </MenuItem>
          <MenuItem>
            <Flex>
              🎯
              <Text ml={2}>Hotspots</Text>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex>
              💬
              <Text ml={2}>Tag Alerts</Text>
              <Badge ml={90}>3</Badge>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex>
              🎧
              <Text ml={2}>Map Editors</Text>
              <Badge ml={118}>1</Badge>
            </Flex>
          </MenuItem>

          {/* practice section */}
          <MenuItem mt={6}>
            <Text as='span' fontWeight='bold' fontSize='sm' color="#ff24a4">
              Community
            </Text>
          </MenuItem>
          <MenuItem>
            <Flex>
              🔒
              <Text ml={2}>Local Page</Text>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex>
              🔒
              <Text ml={2}>Global Pages</Text>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex>
              🔒
              <Text ml={2}>History</Text>
            </Flex>
          </MenuItem>
          {/* end practice */}

          {/* meditation groups */}
          <MenuItem mt={6}>
            <Text as='span' fontWeight='bold' fontSize='sm' color="#ff24a4">
              Events
            </Text>
          </MenuItem>
          <MenuItem>
            <Flex>
              🍃
              <Text ml={2}>Surplus Sundays</Text>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex>
              🗻
              <Text ml={2}>The Kitchen Ways</Text>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex>
              🌻
              <Text ml={2}>A Food Drill</Text>
            </Flex>
          </MenuItem>
          {/* end meditation groups */}
        </Flex>
      </VStack>
    </Flex>
  );
};

export default LeftNav;