import React from 'react';
import { Elements } from 'prismic-reactjs';
import {
  Text, Heading, Link, List, ListIcon, ListItem,
} from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

export const serializer = {
  [Elements.heading1]: {
    Component: Heading,
    props: {
      as: 'h1',
      size: '4xl',
      mb: '5',
    },
  },
  [Elements.heading2]: {
    Component: Heading,
    props: {
      as: 'h2',
      size: '2xl',
      mb: '5',
    },
  },
  [Elements.heading3]: {
    Component: Heading,
    props: {
      as: 'h3',
      size: 'xl',
      mb: '2',
    },
  },
  [Elements.heading4]: {
    Component: Heading,
    props: {
      as: 'h4',
      size: 'l',
    },
  },
  [Elements.paragraph]: {
    Component: Text,
    props: {
      fontSize: 'xl',
    },
  },
  [Elements.hyperlink]: {
    render: (element, content, children, key) => (
      <Link
        color="teal.500"
        key={key}
        href={element.data.url}
        isExternal={!!element.data.target}
      >
        {content}
      </Link>
    ),
  },
  [Elements.list]: {
    Component: List,
  },
  [Elements.listItem]: {
    render: (element, content, children, key) => (
      <ListItem
        key={key}
        m={2}
      >
        <ListIcon as={SettingsIcon} color="green.500" />
        {children}
      </ListItem>
    ),
  },
  [Elements.em]: {
    Component: Text,
    props: {
      as: 'i',
    },
  },
};
