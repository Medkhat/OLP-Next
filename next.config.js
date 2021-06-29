const withImages = require("next-images");
module.exports = withImages({
  env: {
    BASE_URL: "http://localhost:8080",
    UsersServiceBaseURL: "http://185.100.65.220:5010",
    CoursesServiceBaseURL: "http://185.100.65.220:5011/api/v1",
    BlogServiceBaseURL: "http://185.100.65.220:5012/api/v1",
    ResourcesURL: "http://185.100.65.220:5012/resource/v1",
  },
  esModule: true,
  images: {
    domains: ["185.100.65.220"],
  },
  webpack(config, options) {
    return config;
  },
});
