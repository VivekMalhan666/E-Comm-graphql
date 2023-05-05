import { categories } from "../db/categories.js";
import { products } from "../db/products.js";

export const Query = {
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
};
