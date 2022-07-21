module.exports = {
  siteMetadata: {
    title: `Fuel Pass Generator`,
    siteUrl: `https://fuelpass.maheshsamudra.lk`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }]
};
