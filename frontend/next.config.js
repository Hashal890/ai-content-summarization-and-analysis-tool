module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://ai-content-summarization-and-analysis.onrender.com/:path*",
      },
    ];
  },
};
