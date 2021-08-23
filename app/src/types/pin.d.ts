import { FOOD_SUBCATEGORIES, CATEGORIES } from "@/constants/pin";

export type Pin = {
  _id: string;
  title: string;
  lat: number;
  lng: number;
  description: string;
  remainingCount: number;
  category: typeof CATEGORIES[number];
  subcategory: typeof FOOD_SUBCATEGORIES[number];
};
