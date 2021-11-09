import { SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

function ThemeModeToggler() {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle theme mode"
      onClick={toggleColorMode}
      icon={<SunIcon />}
    />
  );
}

export default ThemeModeToggler;
