import Script from "next/script";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Prefix root-absolute URLs ("/x.jpg", "/#id", url(/x)) so the site works under a sub-path.
const withBase = (s) =>
  BASE
    ? s.replace(/(["'(])\/(?=[A-Za-z#]|["'])/g, `$1${BASE}/`)
    : s;

/**
 * Renders one approved Guires page: its styles, server-rendered markup (crawlable),
 * JSON-LD structured data, and the interactive behaviour (animations, tabs, forms).
 */
export default function StaticPage({ id, css, html, js, jsonld }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: withBase(css) }} />
      {(jsonld || []).map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <div id={`page-${id}`} dangerouslySetInnerHTML={{ __html: withBase(html) }} />
      <Script id={`page-${id}-script`} strategy="afterInteractive">{withBase(js)}</Script>
    </>
  );
}
