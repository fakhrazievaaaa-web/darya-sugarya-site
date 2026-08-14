// Методы эпиляции и общий FAQ живут в src/content/methods.json — редактируются через админку (/admin).
import methodsData from '@/content/methods.json';

export type FaqItem = { question: string; answer: string };

export type Method = {
  id: 'laser' | 'sugaring' | 'wax';
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whoFor: string;
  howItWorks: string;
  zones: string[];
  preparation: string[];
  aftercare: string[];
  limitations: string[];
  faceNote?: string;
  faq: FaqItem[];
};

export const methods: Method[] = methodsData.methods as Method[];
export const generalFaq: FaqItem[] = methodsData.generalFaq as FaqItem[];
