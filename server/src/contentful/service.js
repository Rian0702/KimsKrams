var contentful = require("contentful");

const client = contentful.createClient({
  space: "z16bxyuntl3a",
  accessToken:
    "e24d935a89f62eb4e375e7d320388372a5ae9f6b7928255958b7739993ff2cbf"
});

export const getEntry = async () => {
  const test = await client.getEntry("3K9b0esdy0q0yGqgW2g6Ke");
  console.log("test", test);
  return client.getEntry("3K9b0esdy0q0yGqgW2g6Ke");
};
