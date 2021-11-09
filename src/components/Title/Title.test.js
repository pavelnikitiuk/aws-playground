import React from 'react';
import renderer from 'react-test-renderer';
import Title from './index';

const MOCK_TEXT = [];

describe('Given the Title component', () => {
  describe('when it is rendered', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = renderer.create(
        <Title text={MOCK_TEXT} aside={MOCK_TEXT} description={MOCK_TEXT} />,
      );
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
