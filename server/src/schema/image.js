import { gql } from "apollo-server-express";

export default gql`
  type Image {
    fields: ImageFields
  }

  type ImageFields {
    title: String
    file: File
  }
`;
