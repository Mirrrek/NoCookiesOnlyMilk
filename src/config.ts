export type AllowedHost = { hostname: string, subdomains?: boolean };

export const allowedHosts: AllowedHost[] = [
    { hostname: 'google.com', subdomains: true },
    { hostname: 'youtube.com', subdomains: true }
]

export type ElementIdentifier = {
    tag?: string;
    property: string;
    value: string | RegExp;
}

export type Library = {
    url?: RegExp;
} & ElementIdentifier;

export const libraries: Library[] = [
    { property: 'class', value: 'fc-consent-root' },
    { property: 'id', value: 'onetrust-consent-sdk' },
    { property: 'id', value: 'usercentrics-root' },
    { property: 'id', value: 'iubenda-cs-banner' },
    { property: 'id', value: 'qc-cmp2-container' },
    { property: 'id', value: 'uniccmp' },
    { property: 'class', value: 'cookieChoiceInfo' },
    { property: 'class', value: 'avia-cookie-consent-wrap' },
    { property: 'class', value: 'cookie-consent' },
    { tag: 'iframe', property: 'src', value: /^https?\:\/\/cdn.privacy-mgmt.com\// }
]
