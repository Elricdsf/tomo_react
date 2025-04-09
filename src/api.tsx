const dishes_url = import.meta.env.VITE_API_URL;
// dish
export const dishAddUrl = `${dishes_url}addDish`;
export const dishGetUrl = (id: string) => `${dishes_url}getDish/${id}`;
export const dishesGetUrl = (category?: string) =>
  category
    ? `${dishes_url}getDishes?category=${category}`
    : `${dishes_url}getDishes`;
export const dishDeleteUrl = (id: string) => `${dishes_url}deleteDish/${id}`;
export const dishEditUrl = (id: string) => `${dishes_url}editDish/${id}`;
// feedback
export const getFeedbackUrl = import.meta.env.VITE_FEEDBACK_URL;
