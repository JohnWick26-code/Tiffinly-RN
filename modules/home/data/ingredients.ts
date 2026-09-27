export const ingredients = [
  { id: 'onion', emoji: '🧅' },
  { id: 'tomato', emoji: '🍅' },
  { id: 'potato', emoji: '🥔' },
  { id: 'garlic', emoji: '🧄' },
  { id: 'ginger', emoji: '🫚' },
  { id: 'chilli', emoji: '🌶️' },
  { id: 'carrot', emoji: '🥕' },
  { id: 'capsicum', emoji: '🫑' },
  { id: 'spinach', emoji: '🥬' },
  { id: 'brinjal', emoji: '🍆' },
  { id: 'peas', emoji: '🫛' },
  { id: 'corn', emoji: '🌽' },
  { id: 'lemon', emoji: '🍋' },
  { id: 'coconut', emoji: '🥥' },
  { id: 'mushroom', emoji: '🍄' },
  { id: 'rice', emoji: '🍚' },
  { id: 'atta', emoji: '🌾' },
  { id: 'dal', emoji: '🫘' },
  { id: 'paneer', emoji: '🧀' },
  { id: 'milk', emoji: '🥛' },
  { id: 'egg', emoji: '🥚' },
  { id: 'chicken', emoji: '🍗' },
  { id: 'fish', emoji: '🐟' },
  { id: 'butter', emoji: '🧈' },
  { id: 'bread', emoji: '🍞' },
] as const;

export type Ingredient = (typeof ingredients)[number];

export type IngredientId = Ingredient['id'];
