const ApiBuilder = require("claudia-api-builder");
const superb = require("superb");

const api = new ApiBuilder();

api.get("/hello", function () {
  return "hello world";
});

api.get("/greet", function (req) {
  return `${req.queryString.name} is ${superb.random()}`;
});

module.exports = api;
