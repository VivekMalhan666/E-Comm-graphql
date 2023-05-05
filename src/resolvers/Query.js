export const Query = {
  hello: () => "Hello World",
  products: (parent, { filter }, { products, reviews }) => {
    let filteredProducts = products;
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;
          return avgProductRating >= avgRating;
        });
      }
    }
    return filteredProducts;
  },
  product: (parent, args, context) => {
    const { products } = context;
    const product = products.find((product) => product.id === args.id);
    return product;
  },
  categories: () => categories,
  category: (parent, args, context) => {
    const { categories } = context;
    const category = categories.find((category) => category.id === args.id);
    return category;
  },
};
