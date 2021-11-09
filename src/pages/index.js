import * as React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <title>Pavel Nikitsiuk</title>
    <Flex justifyContent="center" alignItems="center" h="calc(100vh - 10rem)">
      <Heading>Pavel Nikitsiuk</Heading>
    </Flex>
  </Layout>
);

export default IndexPage;
