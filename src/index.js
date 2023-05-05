import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.js";
import { Query, Category, Product, Mutation } from "./resolvers/index.js";
import { categories, products, reviews } from "./db/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
    Mutation,
  },
  context: {
    categories,
    products,
    reviews,
  },
});
server.listen().then(({ url }) => {
  console.log("Server is running at " + url);
});
