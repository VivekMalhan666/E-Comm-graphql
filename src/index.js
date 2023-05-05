import { ApolloServer, gql } from "apollo-server";
import { products } from "./utils/products.js";
import { categories } from "./utils/categories.js";

const typeDefs = gql`
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
  }
  type Category {
    name: String!
    id: ID!
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World",
    products: () => products,
    product: (parent, args, context) => {
      const product = products.find((product) => product.id === args.id);
      return product;
    },
    categories: () => categories,
    category: (parent, args, context) => {
      const category = categories.find((category) => category.id === args.id);
      return category;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(url);
});
