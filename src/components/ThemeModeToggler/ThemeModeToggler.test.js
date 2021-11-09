import React from 'react';
import renderer from 'react-test-renderer';
import ThemeModeToggler from './index';

describe('Given the ThemeModeToggler component', () => {
  describe('when it is rendered', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = renderer.create(
        <ThemeModeToggler />,
      );
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
