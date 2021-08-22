export const CATEGORIES = ["Food"] as const;

const FOOD_SUBCATEGORIES = [
  "Vegetables",
  "Fruits",
  "Grains, legumes, nuts, and seeds",
  "Meat and poultry",
  "Fish and seafood",
  "Dairy foods",
  "Eggs",
];

export const SUBCATEGORIES = [...FOOD_SUBCATEGORIES] as const;
