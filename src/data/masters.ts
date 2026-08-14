// Мастера студии живут в src/content/masters.json — редактируются через админку (/admin).
import mastersData from '@/content/masters.json';

export type Master = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  education: string;
  focus: string[];
  about: string;
  isFounder?: boolean;
};

export const masters: Master[] = mastersData.masters as Master[];
