// Контактные данные и настройки студии живут в src/content/settings.json —
// именно этот файл редактируется через админку (/admin). Здесь мы просто
// подключаем их и добавляем вспомогательные функции, которые нужны коду.
import settingsData from '@/content/settings.json';

export const site = {
  name: settingsData.name,
  legalNamePlaceholder: settingsData.legalNamePlaceholder,
  city: settingsData.city,
  district: settingsData.district,
  metro: settingsData.metro,
  domain: settingsData.domain,

  address: settingsData.address,
  addressComment: settingsData.addressComment,
  walkTimeFromMetro: settingsData.walkTimeFromMetro,

  phone: settingsData.phone,
  phoneHref: settingsData.phoneHref,

  workingHours: settingsData.workingHours,

  messengers: {
    whatsapp: settingsData.whatsapp,
    telegram: settingsData.telegram,
  },

  socials: {
    instagram: settingsData.instagram,
    vk: settingsData.vk,
  },

  yandexMapsUrl: settingsData.yandexMapsUrl,
  yandexMetrikaId: settingsData.yandexMetrikaId,

  yclientsBaseUrl: settingsData.yclientsBaseUrl,
};

type UtmParams = {
  source: string;
  medium: string;
  campaign: string;
};

// Формирует ссылку записи с UTM-метками — используется на партнёрских
// страницах и в статьях блога, чтобы отследить источник клиента.
export function withUtm(baseUrl: string, utm?: UtmParams): string {
  if (!utm) return baseUrl;
  const params = new URLSearchParams({
    utm_source: utm.source,
    utm_medium: utm.medium,
    utm_campaign: utm.campaign,
  });
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}${params.toString()}`;
}

export const analyticsGoals = {
  bookingHeader: 'click_booking_header',
  bookingHero: 'click_booking_hero',
  bookingService: 'click_booking_service',
  bookingPrice: 'click_booking_price',
  bookingMobile: 'click_booking_mobile',
  phone: 'click_phone',
  messenger: 'click_messenger',
  route: 'click_route',
  partnerOffer: 'click_partner_offer',
  outboundYclients: 'outbound_yclients',
};
