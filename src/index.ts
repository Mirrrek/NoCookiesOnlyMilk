import { allowedHosts, libraries, ElementIdentifier } from '@/config';
import log from '@/log';

main();

function main() {
    if (isAllowedHost()) {
        log('INFO', 'Current host is allowed');
        return;
    }

    let popupRemoved = false;
    let lastCheck = 0;

    const observer = new MutationObserver(check);

    observer.observe(document.body, {
        subtree: true,
        childList: true
    });

    check();

    function check(): void {
        setTimeout(() => {
            if (!popupRemoved && Date.now() - lastCheck > 50) {
                lastCheck = Date.now();
                popupRemoved = removePopup();
                popupRemoved && observer.disconnect();
            }
        }, 55);
    }
}

function isAllowedHost(): boolean {
    return allowedHosts.some((allowedHost) => window.location.hostname === allowedHost.hostname ||
        (allowedHost.subdomains && window.location.hostname.endsWith(`.${allowedHost.hostname}`)));
}

function removePopup(): boolean {
    return libraries.some((library) => {
        if (library.url !== undefined && !library.url.test(window.location.href)) {
            return null;
        }

        const element = getElement(library);

        if (element) {
            log('INFO', 'Popup element removed');
            element.style.display = 'none';

            if (library.bodyScroll === false) {
                document.body.style.removeProperty('overflow');
            }
        }

        return element !== null;
    });
}

function getElement(identifier: ElementIdentifier): HTMLElement | null {
    if ('popupID' in identifier) {
        return document.getElementById(identifier.popupID);
    }
    if ('popupClass' in identifier) {
        const elements = document.getElementsByClassName(identifier.popupClass);
        if (elements.length > 1) {
            log('WARN', `Found more than one element with class "${identifier.popupClass}"`);
        }
        if (elements.length === 0) {
            return null;
        }
        const element = elements[0];
        if (!(element instanceof HTMLElement)) {
            log('ERROR', `Element with class "${identifier.popupClass}" is not an HTMLElement`);
            return null;
        }
        return element ?? null;
    }

    log('ERROR', 'Invalid library configuration');

    return null;
}
