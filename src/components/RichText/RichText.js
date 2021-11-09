import React from 'react';
import {
  shape, arrayOf, string, array,
} from 'prop-types';
import { RichText as PrismicRichText } from 'prismic-reactjs';
import { serializer as defaultSerializer } from './serializer';

export const createSerializer = (serializers) => (type, element, content, children, key) => {
  const serializer = serializers[type];

  if (!serializer) {
    return null;
  }

  const { Component, props = {}, render } = serializer;

  if (render) {
    return render(element, content, children, key);
  }

  return (
    <Component key={key} {...props}>
      {children}
    </Component>
  );
};

function RichText({ text }) {
  return (
    <PrismicRichText
      render={text}
      htmlSerializer={createSerializer(defaultSerializer)}
    />
  );
}

export const textPropTypes = arrayOf(
  shape({
    type: string,
    text: string,
    // eslint-disable-next-line react/forbid-prop-types
    spans: array,
  }),
);

RichText.propTypes = {
  text: textPropTypes.isRequired,
};

export default RichText;
