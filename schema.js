const gql = require("graphql-tag");

const typeDefs = gql`
  type Contact {
    id: Int!
    first_name: String!
    last_name: String!
    email: String!
    company_id: Int
  }

  input ContactModel {
    email: String!
  }

  input ContactInput {
    email: String!
    first_name: String!
    last_name: String!
  }

  type Query {
    findContact(input: ContactModel): Contact
    getAllContacts: [Contact]!
  }

  type Mutation {
    createContact(input: ContactInput!): Contact!
    updateContact(id: Int!, input: ContactInput!): Boolean!
    deleteContact(id: Int!): Boolean!
  }
`;

module.exports = typeDefs;
