module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.jimmylam.dev',
    title: 'My Portfolio',
    description: 'Web development portfolio of Jimmy Lam',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-smoothscroll',
    'gatsby-plugin-netlify',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Quicksand\:300,400,700`],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'svg-images',
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'about-markdowns',
        path: './src/md-about/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects-markdowns',
        path: './src/md-projects/',
      },
    },
  ],
};
