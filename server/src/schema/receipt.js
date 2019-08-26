import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    receipt(id: String!): Receipt!
  }

  type Receipt {
    name: String
    fields: ReceiptFields
  }

  type ReceiptFields {
    title: String
    headline: String
    ingredients: [String]
    image: Image
    slug: String
    instructionText: String
  }
`;
