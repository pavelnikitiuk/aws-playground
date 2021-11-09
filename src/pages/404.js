import * as React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <title>Not found</title>
    <Flex justifyContent="center" alignItems="center" h="calc(100vh - 10rem)">
      <Heading>Page not found</Heading>
    </Flex>
  </Layout>
);

export default NotFoundPage;
