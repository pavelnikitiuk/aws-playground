import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './index';

describe('Given the Layout component', () => {
  describe('when it is rendered', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = renderer.create(
        <Layout>Hello</Layout>,
      );
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
