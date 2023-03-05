/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "ogle.ng", "https://ogle.ng"],
  },

  env: {
    mapbox_key:
      "pk.eyJ1Ijoic2FtZmF2IiwiYSI6ImNreTB2cHF1cTA1bGoyb2xsY3VvazU5bmIifQ.E1EL215k2CB7mwfS-LIXAA",
    GOOGLE_CLIENT_ID:
      "543078423507-22ebbs5qjqo3a7blgq9cvkldi18353fh.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    NEXTAUTH_URL: "https://ogle.netlify.app/",
    NEXTAUTH_URL2: "https://ogle.netlify.app/",
    JWT_SECRET: "de2b429805c96302d77595caffcbf218",

    FACEBOOK_CLIENT_ID: "1841280179586979",
    FACEBOOK_CLIENT_SECRET: "a7b0a64f51cb0d8b3505b84da3f7d899",
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/create-listing",
        destination: `http://localhost:4000/create-listing`,
      },
    ];
  },
};
