declare module 'virtual:translation-helper' {
    export function addTranslation<T extends {
        "en": Record<string, string>,
        "ru": Record<keyof T['en'], string>,
    }>(translation: T): Record<keyof T['en'], string> & {ns:string};     
}
