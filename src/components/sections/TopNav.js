import React from 'react';
import { Box, Button, Flex, Text, useColorMode } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import store from '../../store/AuthStore';
import { observer } from 'mobx-react-lite';

const MenuItem = (props) => {
  const { children, isLast, to = '/', ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display='block'
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const CloseIcon = () => (
  <svg width='24' viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
    <title>Close</title>
    <path
      fill='black'
      d='M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z'
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width='24px'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
    fill='black'
  >
    <title>Menu</title>
    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
  </svg>
);

const TopNav = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  const handleLogout = () => {
    store.setLoggedInUser({})
  }

  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mb={8}
      p={8}
      {...props}
    >
      <Flex align='center'>
        <Text
          color="#ff24a4"
          fontSize='3xl'
          fontWeight='extrabold'
          w='100'
        >
          WeShv
        </Text>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to='/pricing'></MenuItem>
          {store.isAuthenticated ? (
            <MenuItem>{store.loggedInUser.fullName}</MenuItem>
          ) : (
            <MenuItem to='/login'>Login</MenuItem>
          )}
          <MenuItem>
            {colorMode === 'light' ? (
              <FaMoon onClick={toggleColorMode} />
            ) : (
              <FaSun onClick={toggleColorMode} />
            )}
          </MenuItem>
          {!store.isAuthenticated ? (
            <MenuItem to='/signup' isLast>
              <Button
                size='sm'
                rounded='md'
                color='white'
                bg='#ff24a4'
                _hover={{
                  bg: 'white',
                  color: '#ff24a4',
                  border: '2px',
                  borderColor: '#ff24a4',
                }}
              >
                Get started
              </Button>
            </MenuItem>
          ) : (
            <MenuItem isLast>
              <Button
                size='sm'
                rounded='md'
                color='#ff24a4'
                bg='transparent'
                border='2px'
                borderColor='#ff24a4'
                _hover={{
                  bg: '#ff24a4',
                  color: 'white',
                }}
                onClick={handleLogout}
              >
                Log out
              </Button>
            </MenuItem>
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default observer(TopNav);