import { uuid } from "uuidv4";
export const Mutation = {
  addCategory: (parent, { input }, { categories }) => {
    const newcategory = {
      id: uuid(),
      name: input.name,
    };
    categories.push(newcategory);
    return newcategory;
  },
  addProduct: (parent, { input }, { products }) => {
    const { name, description, quantity, price, image, onSale, categoryId } =
      input;
    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      price,
      image,
      onSale,
      categoryId,
    };
    products.push(newProduct);
    return newProduct;
  },
};