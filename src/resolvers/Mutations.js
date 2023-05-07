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
  addReview: (parent, { input }, { reviews }) => {
    const { date, title, comment, rating, productId } = input;
    const newReview = { id: uuid(), title, date, comment, rating, productId };
    reviews.push(newReview);
    return newReview;
  },
  deleteCategory: (parent, { input }, { categories, products }) => {
    const { id } = input;
    const categoryToBeDeleted = categories.filter(
      (category) => id === category.id
    );
    categories.pop(categoryToBeDeleted);
    const newId = {
      categoryId: null,
    };
    products = products.map((product) =>
      product.categoryId === id ? { ...product, ...newId } : { ...product }
    );
    return true;
  },
  deleteProduct: (parent, { input }, { products, reviews }) => {
    const { id } = input;
    const deletedProduct = products.filter((product) => product.id === id);
    const deletedReviews = reviews.filter((review) => review.productId === id);
    reviews.pop(deletedReviews);
    products.pop(deletedProduct);
    return deletedProduct ? true : false;
  },
  deleteReview: (parent, { input }, { reviews }) => {
    reviews = reviews.filter((review) => review.id === input.id);
    return true;
  },
};
