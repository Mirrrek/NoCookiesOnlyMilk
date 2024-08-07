import { allowedHosts, libraries, ElementIdentifier } from '@/config';
import log from '@/log';

main();

function main() {
    if (isAllowedHost()) {
        log('INFO', 'Current host is allowed');
        return;
    }

    let lastCheck = 0;

    const observer = new MutationObserver((mutation) => mutation.some((r) => r.addedNodes.length > 0) && check());

    observer.observe(document.body, {
        subtree: true,
        childList: true
    });

    check();

    function check(): void {
        setTimeout(() => {
            if (Date.now() - lastCheck > 50) {
                lastCheck = Date.now();
                removePopup();
            }
        }, 55);
    }
}

function isAllowedHost(): boolean {
    return allowedHosts.some((allowedHost) => window.location.hostname === allowedHost.hostname ||
        (allowedHost.subdomains && window.location.hostname.endsWith(`.${allowedHost.hostname}`)));
}

function removePopup(): boolean {
    return libraries.map((library) => {
        if (library.url !== undefined && !library.url.test(window.location.href)) {
            return null;
        }

        const element = getElement(library);

        if (element) {
            element.remove();
            document.body.style.removeProperty('overflow');

            log('INFO', 'Popup element removed');
        }

        return element !== null;
    }).some((removed) => removed);
}

function getElement(identifier: ElementIdentifier): HTMLElement | null {
    const elements = identifier.value instanceof RegExp ?
        [...document.querySelectorAll(`${identifier.tag ?? '*'}[${identifier.property}]`)].filter((element) => (RegExp)(identifier.value).test(element.getAttribute(identifier.property) ?? '')) :
        [...document.querySelectorAll(`${identifier.tag ?? '*'}[${identifier.property}="${identifier.value}"]`)];

    if (elements.length > 1) {
        log('WARN', `Found more than one element with "${identifier.property}" set to "${identifier.value}"`);
    }

    if (elements.length === 0) {
        return null;
    }

    const element = elements[0];
    if (!(element instanceof HTMLElement)) {
        log('ERROR', `Element with "${identifier.property}" set to "${identifier.value}" is not an HTMLElement`);
        return null;
    }

    return element ?? null;
}
