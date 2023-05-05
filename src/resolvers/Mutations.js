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
};
