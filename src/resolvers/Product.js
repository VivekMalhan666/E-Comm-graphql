export const Product = {
  category: (parent, args, context) => {
    const { categories } = context;
    const { categoryId } = parent;
    return categories.find((category) => category.id === categoryId);
  },
  reviews: ({ id }, args, { reviews }) => {
    return reviews.filter((review) => review.productId === id);
  },
};
