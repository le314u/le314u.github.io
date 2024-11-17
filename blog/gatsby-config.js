/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  // pathPrefix: "./",
  siteMetadata: {
    title: `myFuckingBblog`,
    siteUrl: `https://www.314-u.com`,
    description: `This is my fucking blog`,

  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        '@components': './src/components',
        '@css': './src/styles',
        '@layout': './src/layout',
        '@pages': './src/pages',
        '@templates': './src/templates',
        '@utils': './src/utils',
        '@styles': './src/styles',
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'], // Adicione extensões conforme necessário
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data/`,
    },
  },
  `gatsby-transformer-json`, // transforma arquivos JSON
  `gatsby-transformer-remark`, // transforma os arquivos markdown
  `gatsby-transformer-csv`, // transforma os arquivos markdown
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Jersey 25 Static`,
          file: `https://fonts.googleapis.com/css2?family=Jersey+25&display=swap`,
        },
      ],
    },
  },
  {
    resolve: "gatsby-plugin-minify-html",
    options: {
      debug: true,
    },
  }




]
};