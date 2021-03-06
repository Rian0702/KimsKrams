var contentful = require("contentful");
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const client = contentful.createClient({
  space: "bltc5ksbsy0r",
  accessToken: "6N5GE2YALxcBN3FcQMlqQl3m6o9BvsCiuIiWeL_IhjM"
});

export const getReceipt = async id => {
  const receipt = await client.getEntry(id).then(entry => {
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
  return receipt;
};

export const getPage = async id => {
  const page = await client.getEntry(id).then(entry => {
    const rawRichTextField = entry.fields.body;
    const bodyText = documentToHtmlString(rawRichTextField);
    return {
      ...entry,
      fields: {
        ...entry.fields,
        bodyText
      }
    };
  });
  return page;
};

export const getStartPage = async () => {
  const page = await client.getEntry("5VMLbLH50Q88ewaE6Lmfw0").then(entry => {
    const rawRichTextField = entry.fields.body;
    const bodyText = documentToHtmlString(rawRichTextField);
    return {
      ...entry,
      fields: {
        ...entry.fields,
        bodyText
      }
    };
  });
  return page;
};

export const getReceipts = async () => {
  const receipts = await client
    .getEntries({
      content_type: "recipe"
    })
    .then(entries => {
      console.log("ent", entries.items);
      return entries.items.map(entry => {
        return {
          ...entry,
          fields: {
            ...entry.fields,
            instructionText: documentToHtmlString(entry.fields.instruction)
          }
        };
      });
    });
  return receipts;
};
