import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.js";
import { Query } from "./resolvers/Query.js";
import { Category } from "./resolvers/Category.js";
import { Product } from "./resolvers/Product.js";
import { categories } from "./db/categories.js";
import { products } from "./db/products.js";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
  },
  context: {
    categories,
    products,
  },
});
server.listen().then(({ url }) => {
  console.log("Server is running at " + url);
});
