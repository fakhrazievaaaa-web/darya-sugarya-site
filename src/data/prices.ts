// Все цены — в одном месте. Заполните значения price перед публикацией.
// duration — в минутах, для отображения длительности процедуры.

export type PriceItem = {
  zone: string;
  price: number | null; // null = ещё не указана цена, покажется "[УКАЗАТЬ ЦЕНУ]"
  duration?: number;
};

export type PriceGroup = {
  method: 'laser' | 'sugaring' | 'wax';
  title: string;
  items: PriceItem[];
};

export const priceGroups: PriceGroup[] = [
  {
    method: 'laser',
    title: 'Лазерная эпиляция',
    items: [
      { zone: 'Подмышки', price: null, duration: 15 },
      { zone: 'Голени', price: null, duration: 30 },
      { zone: 'Бёдра', price: null, duration: 30 },
      { zone: 'Ноги полностью', price: null, duration: 60 },
      { zone: 'Классическое бикини', price: null, duration: 20 },
      { zone: 'Глубокое бикини', price: null, duration: 30 },
      { zone: 'Руки полностью', price: null, duration: 30 },
      // Лицо исключено намеренно — лазерная эпиляция лица в студии не проводится.
    ],
  },
  {
    method: 'sugaring',
    title: 'Шугаринг',
    items: [
      { zone: 'Подмышки', price: null, duration: 15 },
      { zone: 'Голени', price: null, duration: 30 },
      { zone: 'Бёдра', price: null, duration: 30 },
      { zone: 'Ноги полностью', price: null, duration: 45 },
      { zone: 'Классическое бикини', price: null, duration: 20 },
      { zone: 'Глубокое бикини', price: null, duration: 40 },
      { zone: 'Руки полностью', price: null, duration: 25 },
      { zone: 'Лицо', price: null, duration: 15 },
    ],
  },
  {
    method: 'wax',
    title: 'Восковая депиляция',
    items: [
      { zone: 'Подмышки', price: null, duration: 15 },
      { zone: 'Голени', price: null, duration: 25 },
      { zone: 'Бёдра', price: null, duration: 25 },
      { zone: 'Ноги полностью', price: null, duration: 40 },
      { zone: 'Классическое бикини', price: null, duration: 20 },
      { zone: 'Руки полностью', price: null, duration: 20 },
    ],
  },
];

export type ComplexItem = {
  title: string;
  description: string;
  price: number | null;
  comparePriceHint?: string; // например: "выгоднее, чем по отдельности"
};

export const complexes: ComplexItem[] = [
  {
    title: '[УКАЗАТЬ название комплекса, например: «Классическое бикини + подмышки»]',
    description: '[УКАЗАТЬ состав комплекса]',
    price: null,
    comparePriceHint: '[УКАЗАТЬ выгоду по сравнению с отдельными услугами]',
  },
  {
    title: '[УКАЗАТЬ название комплекса, например: «Ноги полностью + бикини + подмышки»]',
    description: '[УКАЗАТЬ состав комплекса]',
    price: null,
  },
];

export const firstVisitOffer = {
  title: '[УКАЗАТЬ, есть ли предложение для первого визита]',
  description: '[УКАЗАТЬ условия: на что распространяется, суммируется ли с другими предложениями]',
};
