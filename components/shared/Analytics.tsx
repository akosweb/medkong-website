import Script from 'next/script';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';

/** GA4 measurement ID for the MEDKONG property. */
const GA_MEASUREMENT_ID = 'G-CBWQBJSPXR';

/**
 * Analytics wrapper combining Google Analytics 4 and Vercel Web Analytics.
 *
 * GA4: Only the production deploy reports. Preview builds and local dev would
 * otherwise mix their traffic into the same property, which quietly ruins the
 * numbers — and you don't notice until you're trying to read them.
 * Set NEXT_PUBLIC_GA_DEBUG=1 to opt a non-production build in for testing.
 *
 * Vercel Analytics: Always enabled on all Vercel deployments (production and preview).
 * Automatically disabled in local development.
 *
 * `afterInteractive` keeps both tags off the critical path: they load once the
 * page is interactive, so analytics never delays the first paint.
 */
export function Analytics() {
  const isProduction = process.env.VERCEL_ENV === 'production';
  const forceOn = process.env.NEXT_PUBLIC_GA_DEBUG === '1';

  const shouldLoadGA4 = isProduction || forceOn;

  return (
    <>
      {shouldLoadGA4 && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
          </Script>
        </>
      )}
      <VercelAnalytics />
    </>
  );
}
