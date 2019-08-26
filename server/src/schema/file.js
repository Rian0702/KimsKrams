import { gql } from "apollo-server-express";

export default gql`
  type File {
    url: String
    fileName: String
  }
`;
