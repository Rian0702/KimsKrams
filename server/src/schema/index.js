import { gql } from "apollo-server-express";

import userSchema from "./user";
import messageSchema from "./message";
import imageSchema from "./image";
import receiptSchema from "./receipt";
import fileSchema from "./file";
import pageSchema from "./page";

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [
  linkSchema,
  userSchema,
  messageSchema,
  imageSchema,
  receiptSchema,
  fileSchema,
  pageSchema
];
