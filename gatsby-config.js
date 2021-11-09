/* eslint-disable import/no-extraneous-dependencies */

require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://pavel.nikiti.uk',
    title: 'Pavel Nikitiuk',
  },
  plugins: [
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: '/',
        background_color: '#888',
        theme_color: '#fff',
        display: 'standalone',
        icon: './public/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.PRISMIC_SERVICE,
        accessToken: process.env.PRISMIC_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        // replace all _ to / as Prismic uid do not alow use /
        linkResolver: (doc) => `/${doc.uid.replace(/_/g, '/')}`,
      },
    },
  ],
};
