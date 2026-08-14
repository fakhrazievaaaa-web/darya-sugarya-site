// Цены, комплексы и предложение первого визита живут в src/content/prices.json —
// именно этот файл редактируется через админку (/admin).
import pricesData from '@/content/prices.json';

export type PriceItem = {
  zone: string;
  price: number | null;
  duration?: number;
};

export type PriceGroup = {
  method: 'laser' | 'sugaring' | 'wax';
  title: string;
  items: PriceItem[];
};

export const priceGroups: PriceGroup[] = pricesData.priceGroups as PriceGroup[];

export type ComplexItem = {
  title: string;
  description: string;
  price: number | null;
  comparePriceHint?: string;
};

export const complexes: ComplexItem[] = pricesData.complexes as ComplexItem[];

export const firstVisitOffer = pricesData.firstVisitOffer;
