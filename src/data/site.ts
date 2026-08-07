// ЭТОТ ФАЙЛ — единственное место, где нужно менять базовые контакты студии.
// Замените значения [УКАЗАТЬ] на реальные данные перед публикацией сайта.

export const site = {
  name: 'Дарья Шугарья',
  legalNamePlaceholder: '[УКАЗАТЬ юридическое наименование / ИП]',
  city: 'Москва',
  district: 'Таганка',
  metro: ['Таганская', 'Марксистская'],
  domain: 'daryasugarya.ru',

  address: '[УКАЗАТЬ точный адрес]',
  addressComment: '[УКАЗАТЬ этаж, вход, домофон при необходимости]',
  walkTimeFromMetro: '[УКАЗАТЬ время пешком от метро]',

  phone: '[УКАЗАТЬ телефон]',
  phoneHref: 'tel:[УКАЗАТЬ_ТЕЛЕФОН_В_ФОРМАТЕ_+7XXXXXXXXXX]',

  workingHours: '[УКАЗАТЬ режим работы]',

  messengers: {
    whatsapp: '[УКАЗАТЬ ссылку WhatsApp]',
    telegram: '[УКАЗАТЬ ссылку Telegram]',
  },

  socials: {
    instagram: '[УКАЗАТЬ, если используется]',
    vk: '[УКАЗАТЬ, если используется]',
  },

  yandexMapsUrl: '[УКАЗАТЬ ссылку на карточку Яндекс.Карт]',
  yandexMetrikaId: '[УКАЗАТЬ ПОСЛЕ СОЗДАНИЯ]',

  // Базовая ссылка YCLIENTS. К ней при необходимости добавляются UTM-параметры
  // через функцию withUtm() ниже — отдельно менять ссылку в компонентах не нужно.
  yclientsBaseUrl: '[УКАЗАТЬ ссылку YCLIENTS]',
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
