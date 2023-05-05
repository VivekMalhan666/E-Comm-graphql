import { categories } from "../db/categories.js";

export const Product = {
  category: (parent, args, context) => {
    const { categoryId } = parent;
    return categories.find((category) => category.id === categoryId);
  },
};
