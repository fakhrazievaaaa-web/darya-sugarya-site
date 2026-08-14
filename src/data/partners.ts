// Партнёры живут в src/content/partners.json — редактируются через админку (/admin).
import partnersData from '@/content/partners.json';

export type Partner = {
  slug: string;
  name: string;
  logo?: string;
  offerTitle: string;
  offerDescription: string;
  validUntil?: string;
  applicableServices: string[];
  combinesWithOtherOffers: boolean;
  promoCode?: string;
  utmCampaign: string;
};

export const partners: Partner[] = partnersData.partners as Partner[];
