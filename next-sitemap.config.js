/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || "https://netrosystems.com",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000, // optional
  exclude: ["/_not-found"], // exclude error pages
  outDir: "./public", // where to put sitemap & robots.txt
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
  },
};
