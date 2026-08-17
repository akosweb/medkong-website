import Script from 'next/script';

/** GA4 measurement ID for the MEDKONG property. */
const GA_MEASUREMENT_ID = 'G-CBWQBJSPXR';

/**
 * Google Analytics 4.
 *
 * Only the production deploy reports. Preview builds and local dev would
 * otherwise mix their traffic into the same property, which quietly ruins the
 * numbers — and you don't notice until you're trying to read them.
 * Set NEXT_PUBLIC_GA_DEBUG=1 to opt a non-production build in for testing.
 *
 * `afterInteractive` keeps both tags off the critical path: they load once the
 * page is interactive, so analytics never delays the first paint.
 */
export function Analytics() {
  const isProduction = process.env.VERCEL_ENV === 'production';
  const forceOn = process.env.NEXT_PUBLIC_GA_DEBUG === '1';

  if (!isProduction && !forceOn) return null;

  return (
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
  );
}
