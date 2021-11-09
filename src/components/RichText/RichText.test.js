import React from 'react';
import renderer from 'react-test-renderer';
import RichText from './index';

const MOCK_TEXT_DATA = [
  {
    type: 'paragraph',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    spans: [
      {
        start: 0,
        end: 15,
        type: 'hyperlink',
        data: { link_type: 'Web', url: 'tel:+123456' },
      },
    ],
  },
  {
    type: 'paragraph',
    text: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    spans: [
      {
        start: 0,
        end: 24,
        type: 'hyperlink',
        data: { link_type: 'Web', url: '#', target: '_blank' },
      },
    ],
  },
  {
    type: 'heading1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    spans: [
      {
        start: 0,
        end: 8,
        type: 'hyperlink',
        data: { link_type: 'Web', url: '#', target: '_blank' },
      },
    ],
  },
  {
    type: 'heading3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    spans: [
      {
        start: 0,
        end: 6,
        type: 'hyperlink',
        data: { link_type: 'Web', url: '#', target: '_blank' },
      },
    ],
  },
  { type: 'list-item', text: 'list-item;', spans: [] },
];

describe('Given the RichText component', () => {
  describe('when it is rendered', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = renderer.create(<RichText text={MOCK_TEXT_DATA} />);
    });

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
