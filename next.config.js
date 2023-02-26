/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "ogle.ng", "https://ogle.ng"],
  },

  env: {
    mapbox_key:
      "pk.eyJ1Ijoic2FtZmF2IiwiYSI6ImNreTB2cHF1cTA1bGoyb2xsY3VvazU5bmIifQ.E1EL215k2CB7mwfS-LIXAA",
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
