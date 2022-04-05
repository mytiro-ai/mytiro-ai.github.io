module.exports = {
  siteMetadata: {
    title: "myTiro - Track. Learn. Tweak",
    titleTemplate: "%s",
    description:
      "The most comprehensive personal time, activity, and focus tracker.",
    url: "https://mytiro.ai", // No trailing slash allowed!
    image: "/static/Logo-0bb592d2045106ef6d15946d57144df1.svg", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-223294038-2",
      },
    },
  ],
};
