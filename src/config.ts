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
    bodyScroll?: boolean;
} & ElementIdentifier;

export const libraries: Library[] = [
    {
        popupID: 'onetrust-consent-sdk'
    }
]
