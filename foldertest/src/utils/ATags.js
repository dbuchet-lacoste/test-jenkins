/* TAGS FOR ANALYTICS */
let isDevelopementMode = false;

export const setTagInDevelopementMode = v => isDevelopementMode = v;

export const tagEvent = (category, action, label='', interaction=true) => {

    const logObject = {
        hitType: 'event',
        transport: 'beacon',
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
        nonInteraction: !interaction
    };

    if (isDevelopementMode) {
        console.log(`[DEV] Logging Event: `, logObject);
        return;
    }

    if (!window.ga) {
        console.warn(`No Google Analytics tracker found`);
        return;
    }

    window.ga('send', logObject);

};
