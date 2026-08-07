export type Master = {
  slug: string;
  name: string;
  role: string;
  photo: string; // путь в /public/images/masters/
  education: string;
  focus: string[]; // направления, с которыми работает
  about: string;
  isFounder?: boolean;
};

// Архитектура поддерживает несколько мастеров — просто добавьте новый объект в массив.
export const masters: Master[] = [
  {
    slug: 'darya',
    name: 'Дарья',
    role: 'Основательница студии, мастер',
    photo: '/images/masters/darya.jpg', // [УКАЗАТЬ фото]
    education: 'Диплом по направлению «Эстетическая коррекция волосяного покрова»',
    focus: ['Лазерная эпиляция', 'Шугаринг', 'Восковая депиляция'],
    about:
      'Дарья лично контролирует качество работы в студии и практикует все три метода удаления волос, поэтому может честно объяснить разницу между ними и помочь с выбором.',
    isFounder: true,
  },
];
