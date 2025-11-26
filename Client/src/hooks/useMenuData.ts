import { useEffect, useState } from "react";
import axios from "axios";
import { Category, FoodItem } from "../types";

interface FullCategory {
  id: number;
  name: string;
  items: FoodItem[];
}

export default function useMenuData() {
  const [menuCategories, setMenuCategories] = useState<FullCategory[]>([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "http://91.108.121.244:8000";

  useEffect(() => {
    async function loadData() {
      try {
        const categoryRes = await axios.get(`${BASE_URL}/api/foodmenucategory`);
        const categories: Category[] = categoryRes.data;
        const foodRes = await axios.get(`${BASE_URL}/api/foodmenue/`);
        const foodItems: FoodItem[] = foodRes.data;

        const grouped = categories.map((cat) => ({
          id: cat.id,
          name: cat.name,
          items: foodItems.filter(
            (item) => item.foodMenueCategory_id === cat.id
          ).map(item => ({
            ...item,
            image: item.image.startsWith("C:") 
              ? "" 
              : `${BASE_URL}/${item.image}`
          }))
        }));

        setMenuCategories(grouped);
      } catch (error) {
        console.log("Error loading menu:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return { menuCategories, loading };
}
