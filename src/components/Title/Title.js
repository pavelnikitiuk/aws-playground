import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import RichText from '../RichText';
import { textPropTypes } from '../RichText/RichText';

function Title({ text, description, aside }) {
  return (
    <>
      <header>
        <Flex justifyContent="space-between" wrap="wrap">
          <Box flex="1" mb="10">
            <RichText text={text} />
            <RichText text={description} />
          </Box>
          <Box as="aside">
            <RichText text={aside} />
          </Box>
        </Flex>
      </header>
      <section />

    </>
  );
}

Title.propTypes = {
  text: textPropTypes.isRequired,
  description: textPropTypes.isRequired,
  aside: textPropTypes.isRequired,
};

export default Title;
