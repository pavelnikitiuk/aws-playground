import { Box } from '@chakra-ui/react';
import React from 'react';

function SliceRenderer({ slices, sliceMap }) {
  return slices
    .filter(({ slice_type: sliceType }) => Boolean(sliceMap[sliceType]))
    .map(({ slice_type: sliceType, ...otherProps }) => {
      const sliceConfig = sliceMap[sliceType];
      const { Component, model } = sliceConfig;

      return (
        <Box key={otherProps.id} as="section" mb="10">
          <Component {...model(otherProps)} />
        </Box>
      );
    });
}

export default SliceRenderer;
