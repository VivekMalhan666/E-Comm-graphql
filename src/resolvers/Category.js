import { products } from "../db/products.js";

export const Category = {
  products: (parent, args, context) => {
    const productsArray = products.filter(
      (product) => product.categoryId === parent.id
    );
    return productsArray;
  },
};
