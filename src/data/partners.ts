export type Partner = {
  slug: string; // используется в URL: /partners/[slug]/
  name: string;
  logo?: string;
  offerTitle: string;
  offerDescription: string;
  validUntil?: string; // YYYY-MM-DD
  applicableServices: string[];
  combinesWithOtherOffers: boolean;
  promoCode?: string;
  utmCampaign: string; // используется в utm_campaign для этого партнёра
};

// Пример структуры — удалите или замените на реальных партнёров.
// Каждый новый объект автоматически создаёт страницу /partners/[slug]/
export const partners: Partner[] = [
  {
    slug: 'example-partner',
    name: '[УКАЗАТЬ название партнёра]',
    offerTitle: '[УКАЗАТЬ предложение для клиентов партнёра]',
    offerDescription: '[УКАЗАТЬ условия и срок действия]',
    applicableServices: ['[УКАЗАТЬ услуги]'],
    combinesWithOtherOffers: false,
    utmCampaign: 'example-partner',
  },
];
