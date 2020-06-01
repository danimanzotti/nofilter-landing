/**
 * Function that registers a click on an outbound link in Analytics.
 * This function takes a valid URL string as an argument, and uses that URL string
 * as the event label. Setting the transport method to 'beacon' lets the hit be sent
 * using 'navigator.sendBeacon' in browser that support it.
 */
export const getOutboundLink = (url, event) => {
  window.gtag('event', event, {
    // 'event_category': 'category',
    // 'event_label': 'label',
    transport_type: 'beacon',
    event_callback: () => {
      document.location = url;
    },
  });
};
