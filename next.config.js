/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "ogle.ng", "https://ogle.ng"],
  },
  experimental: {
    appDir: true,
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoic2FtZmF2IiwiYSI6ImNreTB2cHF1cTA1bGoyb2xsY3VvazU5bmIifQ.E1EL215k2CB7mwfS-LIXAA",
    GOOGLE_CLIENT_ID:
      "95071508636-t1fm1jtgi18nbumlh44qb3eg9fi1btej.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    NEXTAUTH_URL: "http://locahost:3000",
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
