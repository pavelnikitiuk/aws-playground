import React from 'react';
import renderer from 'react-test-renderer';
import SliceRenderer from './index';

const MOCK_COMPONENT = jest.fn().mockReturnValue('it is test a');
const MOCK_MODEL = jest.fn();

const MOCK_SLICE_DATA = [
  {
    id: 1,
    slice_type: 'test-1',
  },
  {
    id: 2,
    slice_type: 'test-2',
  },
];

const MOCK_SLICE_MAP = {
  'test-1': {
    Component: MOCK_COMPONENT,
    model: MOCK_MODEL,
  },
};

describe('Given the SliceRenderer component', () => {
  describe('when it is rendered', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = renderer.create(
        <SliceRenderer slices={MOCK_SLICE_DATA} sliceMap={MOCK_SLICE_MAP} />,
      );
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should create model from passed data', () => {
      expect(MOCK_MODEL).toHaveBeenCalledWith({ id: 1 });
    });
  });
});
