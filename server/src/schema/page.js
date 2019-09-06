import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    page(id: String!): Page
    startPage: Page
  }

  type Page {
    name: String
    fields: Fields
  }

  type Fields {
    pageName: String
    headline: String
    bodyText: String
    image: Image
    isStartPage: Boolean
  }
`;
