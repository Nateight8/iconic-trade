/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
    env: {
        mongodburl: "Your MongoDB connection String",
  }, 
    nextConfig : {
      reactStrictMode: true,
  }
};

module.exports = nextConfig
