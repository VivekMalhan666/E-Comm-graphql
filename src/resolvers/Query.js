export const Query = {
  hello: () => "Hello World",
  products: (parent, args, { products }) => products,
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
