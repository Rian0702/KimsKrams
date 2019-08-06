import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    entry: Entry
  }

  type Entry {
    name: String
    fields: Fields
  }

  type Fields {
    title: String
    body: String
  }
`;
