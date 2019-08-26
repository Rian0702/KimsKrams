import { getReceipt } from "../contentful/service";

export default {
  Query: {
    receipt: async (parent, { id }) => {
      return await getReceipt(id);
    }
  }
};
