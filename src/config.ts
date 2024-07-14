export type AllowedHost = { hostname: string, subdomains?: boolean };

export const allowedHosts: AllowedHost[] = [
    { hostname: 'google.com', subdomains: true },
    { hostname: 'youtube.com', subdomains: true }
]

export type ElementIdentifier = {
    popupID: string;
} | {
    popupClass: string;
}

export type Library = {
    url?: RegExp;
} & ElementIdentifier;

export const libraries: Library[] = [
    { popupClass: 'fc-consent-root' },
    { popupID: 'onetrust-consent-sdk' },
    { popupID: 'usercentrics-root' },
    { popupID: 'iubenda-cs-banner' },
    { popupID: 'uniccmp' },
    { popupClass: 'cookieChoiceInfo' },
    { popupClass: 'avia-cookie-consent-wrap' },
    { popupClass: 'cookie-consent' }
]
