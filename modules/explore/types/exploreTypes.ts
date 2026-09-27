export interface ExploreVideo {
  provider: string;
  id: string;
  url: string;
}

export interface ExploreRecipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  images: number[];
  video: ExploreVideo | null;
  author: string;
  cuisine: string;
  mealType: string;
  dietType: string;
  cookingSkill: string;
  totalTimeMinutes: number;
  servings: number;
  calories: number;
  protein: number;
  averageRating: number;
  ratingsCount: number;
  likesCount: number;
  tags: string[];
  ingredients: string[];
  steps: string[];
}
