// Отзывы клиентов живут в src/content/reviews.json — редактируются через админку (/admin).
import reviewsData from '@/content/reviews.json';

export type Review = {
  author: string;
  source: string;
  method: 'laser' | 'sugaring' | 'wax';
  text: string;
  date: string;
};

export const reviews: Review[] = reviewsData.reviews as Review[];
