export const Category = {
  products: (parent, { filter }, context) => {
    const { products } = context;
    const productsArray = products.filter(
      (product) => product.categoryId === parent.id
    );
    let filteredProducts = productsArray;
    if (filter) {
      if (filter.onSale) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }
    }
    return filteredProducts;
  },
};
