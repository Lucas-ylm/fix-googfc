const baseConfig =
  process.env.BUILD_DEST === "preview"
    ? {
        basePath: process.env.NODE_ENV === "production" ? "/clients/peugeot-2024" : "",
        env: {
          BASE_PATH: process.env.NODE_ENV === "production" ? "/clients/peugeot-2024" : "",
          BASE_URL: "https://madlab.mpublicite.fr/clients/peugeot-2024",
        },
      }
    : {
        env: {
          BASE_PATH: "",
          BASE_URL: "https://l-avenir-commence-maintenant.lemonde.fr",
        },
      };
/** @type {import('next').NextConfig} */
const nextConfig = {
  ...baseConfig,
  output: "export",
  trailingSlash: true,
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
