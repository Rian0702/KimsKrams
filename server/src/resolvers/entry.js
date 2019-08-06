import { getEntry } from "../contentful/service";

export default {
  Query: {
    entry: async () => {
      return await getEntry();
    }
  }
};
