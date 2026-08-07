export type Review = {
  author: string;
  source: 'Яндекс.Карты' | 'Сайт' | '[УКАЗАТЬ]';
  method: 'laser' | 'sugaring' | 'wax';
  text: string;
  date: string; // YYYY-MM-DD
};

// Реальные отзывы нужно добавить сюда перед публикацией.
// Ничего не выдумано намеренно — сейчас массив пуст, на сайте будет
// аккуратная заглушка "Отзывы скоро появятся" вместо вымышленных примеров.
export const reviews: Review[] = [];
