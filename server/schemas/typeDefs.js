const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar DataTime
  type Image {
      url: String
      public_id: String
  }
  
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    headline: String
    createdAt: DataTime
  }
  type Auth {
    token: ID!
    user: User
  }
  # ---------------------------------------------------------------------------
  input ImageInput {
    url: String
    public_id: String
  }
  input UserUpdateInput {
    username: String
    email: String
    firstName: String
    lastName: String
    headline: String
  }
  # ---------------------------------------------------------------------------
  type Query {
    me: User
    users: [User]
    user(_id: ID!): User
    profile: User!
  }
  # ---------------------------------------------------------------------------
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, firstName: String!, lastName: String!, email: String!, password: String!, image: String): Auth
    userUpdate(input: UserUpdateInput): User!
  }
`;

module.exports = typeDefs;
