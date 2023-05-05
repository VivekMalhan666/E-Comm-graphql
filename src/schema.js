import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    id: ID!
    category: Category!
  }
  type Category {
    name: String!
    id: ID!
    products: [Product!]!
  }
`;
