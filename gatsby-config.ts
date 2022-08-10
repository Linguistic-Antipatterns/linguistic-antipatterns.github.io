import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Linguistic Antipatterns`,
    siteUrl: `https://www.linguistic-antipatterns.com/`,
    description: `This is a website to teach you to identify and fix linguistic antipatterns in your code`,
    image: `/LA_logo.png`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "antipatterns",
        path: `${__dirname}/content/antipatterns/`,
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-smartypants`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Linguistic Antipatterns`,
        short_name: `Linguistic Antipatterns`,
        start_url: `/`,
        background_color: `#e2e8f0`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon/LA_Logo_bold_closer.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-EG6B433LWR", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ],
};

export default config;
