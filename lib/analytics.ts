/**
 * GA4 events the site sends beyond the automatic page_view.
 *
 * `gtag` is defined by the inline init script in components/shared/Analytics.tsx,
 * which only loads on the production deploy (or with NEXT_PUBLIC_GA_DEBUG=1),
 * so every call here is a no-op in dev and preview builds.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type LeadEvent = {
  /** Where the submission was posted from: the row's `source` in medkong.leads. */
  source: 'medkong-website' | 'medkong-macs';
  /** Which form: the demo dialog, the /contact page, or the MAC request form. */
  placement: 'dialog' | 'contact' | 'mac';
  /** Module names (demo forms) or jurisdictions (MAC form) the visitor selected. */
  selections: string[];
};

/**
 * A successful lead-form submission. `generate_lead` is one of GA4's
 * recommended event names, so it appears with its own reporting and can be
 * marked as a key event (conversion) in the property without any custom
 * definition. The parameters let key-event reports split by form.
 */
export function trackLead({ source, placement, selections }: LeadEvent) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'generate_lead', {
    lead_source: source,
    form_placement: placement,
    selections: selections.join(', '),
    selection_count: selections.length,
  });
}
