module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
      },
      `gatsby-plugin-antd`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
      
           `gatsby-transformer-remark`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `posts`,
              path: `${__dirname}/src/posts`,
              ignore: [`**/\.*`], // ignore files starting with a dot
          },
      },
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                // A unique name for the search index. This should be descriptive of
                // what the index contains. This is required.
                name: 'pages',

                // Set the search engine to create the index. This is required.
                // The following engines are supported: flexsearch, lunr
                engine: 'flexsearch',

                // Provide options to the engine. This is optional and only recommended
                // for advanced users.
                //
                // Note: Only the flexsearch engine supports options.
                engineOptions: 'speed',

                // GraphQL query used to fetch all data for the search index. This is
                // required.
                query: `
          {
            allMarkdownRemark {
              nodes {
                id
                frontmatter {
                  title
                  description
                  date
                  path
                }
                rawMarkdownBody
              }
            }
          }
        `,

                // Field used as the reference value for each document.
                // Default: 'id'.
                ref: 'id',

                // List of keys to index. The values of the keys are taken from the
                // normalizer function below.
                // Default: all fields
                index: ['title', 'body'],

                // List of keys to store and make available in your UI. The values of
                // the keys are taken from the normalizer function below.
                // Default: all fields
                store: ['id','path','title'],

                // Function used to map the result from the GraphQL query. This should
                // return an array of items to index in the form of flat objects
                // containing properties to index. The objects must contain the `ref`
                // field above (default: 'id'). This is required.
                normalizer: ({ data }) =>
                    data.allMarkdownRemark.nodes.map(node => ({
                        id: node.id,
                        title: node.frontmatter.title,
                        path: node.frontmatter.path,
                        body: node.rawMarkdownBody,
                    })),
            },
      },
      {
          resolve: "gatsby-plugin-page-creator",
          options: {
              path: `${__dirname}/src/posts`,
          },
      },
      
    ],

}
   
    // in gatsby-config.js



