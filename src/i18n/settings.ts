export function getOptions(lng: string, ns: string | string[]) {
  return {
    lng,
    fallbackLng: 'en',
    ns,
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false,
    },
  };
}
