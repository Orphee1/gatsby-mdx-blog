module.exports = {
  siteMetadata: {
    title: `Gatsby MDX Blog`,
    description: `Awesome blog build with Gatsby and MDX`,
    titleTemplate: `%s | HL MDX Blog`,
    url: `https://hlrecording-gatsby-mdx-blog.netlify.app/`,
    image: `mainImg.png`,
    twitterUsername: `@HugoLattard`,
  },
  plugins: [
    //     `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `gatsbyjs`,
      },
    },
    //     {
    //       resolve: `gatsby-plugin-prefetch-google-fonts`,
    //       options: {
    //         fonts: [
    //           {
    //             family: `Roboto`,
    //             variants: [`400`, `500`, `700`],
    //           },
    //           {
    //             family: `Open Sans`,
    //           },
    //         ],
    //       },
    //     },
  ],
}
