import { getReceipt, getReceipts } from "../contentful/service";

export default {
  Query: {
    receipt: async (parent, { id }) => {
      return await getReceipt(id);
    },
    receipts: async () => {
      return await getReceipts();
    }
  }
};
