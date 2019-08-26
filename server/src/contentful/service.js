var contentful = require("contentful");
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const client = contentful.createClient({
  space: "bltc5ksbsy0r",
  accessToken: "6N5GE2YALxcBN3FcQMlqQl3m6o9BvsCiuIiWeL_IhjM"
});

export const getReceipt = async id => {
  const test = await client.getEntry(id).then(entry => {
    const rawRichTextField = entry.fields.instruction;
    const instructionText = documentToHtmlString(rawRichTextField);
    return {
      ...entry,
      fields: {
        ...entry.fields,
        instructionText
      }
    };
  });
  console.log("test", test);
  return test;
};
