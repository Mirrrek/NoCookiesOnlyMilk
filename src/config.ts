export type AllowedUrl = RegExp;

export const allowedUrls: AllowedUrl[] = [
    // Nothing for now
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
