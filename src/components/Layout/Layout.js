import React from 'react';
import { node } from 'prop-types';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import ThemeModeToggler from '../ThemeModeToggler';

function Layout({ children, ...otherProps }) {
  const background = useColorModeValue('gray.100', 'gray.700');
  const contentBackground = useColorModeValue('white', 'gray.900');
  return (
    <Box bg={background} p={{ md: 10 }}>
      <Flex
        bg={contentBackground}
        border="1px solid rgba(0,0,0,.025)"
        boxShadow="0 1rem 3rem rgba(0,0,0,.175)"
        p={10}
        direction="column"
        maxW={{ xl: '1200px' }}
        m="0 auto"
        {...otherProps}
      >
        <Box position="absolute" top="10" right="10">
          <ThemeModeToggler />
        </Box>
        {children}
      </Flex>
    </Box>
  );
}

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
