import { getPage, getStartPage } from "../contentful/service";

export default {
  Query: {
    page: async (parent, { id }) => {
      return await getPage(id);
    },
    startPage: async () => {
      return await getStartPage();
    }
  }
};
