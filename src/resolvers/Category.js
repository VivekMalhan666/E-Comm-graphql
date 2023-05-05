export const Category = {
  products: (parent, args, context) => {
    const { products } = context;
    const productsArray = products.filter(
      (product) => product.categoryId === parent.id
    );
    return productsArray;
  },
};
