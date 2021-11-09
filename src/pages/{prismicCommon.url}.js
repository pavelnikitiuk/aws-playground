import * as React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { graphql } from 'gatsby';
import get from 'lodash.get';
import { Helmet } from 'react-helmet';
import { SLICE_TYPES } from '../constants/slices';
import RichText from '../components/RichText';
import Title from '../components/Title';
import SliceRenderer from '../components/SliceRenderer';
import { createRichTextModel } from '../models/richText';
import { createTitleModel } from '../models/title';
import Layout from '../components/Layout';

const sliceMap = {
  [SLICE_TYPES.RICH_TEXT]: { Component: RichText, model: createRichTextModel },
  [SLICE_TYPES.TITLE]: { Component: Title, model: createTitleModel },
};

const PageTemplate = ({ data }) => {
  if (!data) return null;
  const slices = get(data, 'prismicCommon.data.body');
  const title = get(data, 'prismicCommon.data.title');
  const scripts = get(data, 'prismicCommon.data.scripts');

  return (
    <Layout>
      <title>{title}</title>
      <Helmet>
        <script>{scripts}</script>
      </Helmet>
      <SliceRenderer sliceMap={sliceMap} slices={slices} />
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: shape({
    pageCommon: shape({
      data: shape({
        body: arrayOf(
          shape({
            id: string,
            slice_type: string,
          }),
        ),
      }),
    }),
  }),
};

PageTemplate.defaultProps = {
  data: null,
};

export const query = graphql`
  query CommonQuery($id: String) {
    prismicCommon(id: { eq: $id }) {
      data {
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ... on PrismicCommonDataBodyTitle {
            primary {
              description {
                richText
              }
              text {
                richText
              }
              aside {
                richText
              }
            }
            id
          }
          ... on PrismicCommonDataBodyRichText {
            id
            primary {
              text {
                richText
              }
            }
          }
        }
        title
        scripts
      }
      uid
    }
  }
`;

export default PageTemplate;
