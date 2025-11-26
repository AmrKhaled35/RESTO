export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}
export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  isactive: number;
}
export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  isactive: number;
  image: string;
  foodMenueCategory_id: number;
}

