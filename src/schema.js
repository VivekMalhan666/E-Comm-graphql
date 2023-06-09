import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    hello: String
    products(filter: ProductFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }
  type Mutation {
    addCategory(input: AddCategoryInput!): Category!
    addProduct(input: AddProductInput!): Product!
    addReview(input: AddReviewInput!): Review!
    deleteCategory(input: DeleteCategoryInput!): Boolean!
    deleteProduct(input: DeleteProductInput!): Boolean!
    deleteReview(input: DeleteReviewInput!): Boolean!
    updateCategory(input: UpdateCategoryInput!): Category!
    updateProduct(input: UpdateProductInput!): Product!
    updateReview(input: UpdateReviewInput!): Review!
  }
  type Product {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    image: String!
    id: ID!
    category: Category
    reviews: [Review!]!
  }
  type Category {
    name: String!
    id: ID!
    products(filter: ProductFilterInput): [Product!]!
  }
  type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
  }
  input ProductFilterInput {
    onSale: Boolean
    avgRating: Int
  }
  input AddCategoryInput {
    name: String!
  }
  input AddProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: String!
  }
  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: String!
  }
  input DeleteCategoryInput {
    id: String!
  }
  input DeleteProductInput {
    id: String!
  }
  input DeleteReviewInput {
    id: String!
  }
  input UpdateCategoryInput {
    id: String!
    name: String!
  }
  input UpdateProductInput {
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: String
    id: String!
  }
  input UpdateReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: String
    id: String!
  }
`;
