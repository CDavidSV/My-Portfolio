export const fallbackLanguage = "en";
export const defaultNamespace = "common";
export const languages: string[] = [fallbackLanguage, "es", "ja"];

export function getI18nOptions(
    lng = fallbackLanguage,
    ns: string | string[] = defaultNamespace
) {
    return {
        supportedLngs: languages,
        fallbackLng: fallbackLanguage,
        lng,
        fallbackNS: defaultNamespace,
        defaultNS: defaultNamespace,
        ns,
    };
}
