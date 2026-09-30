import { SITE_URL } from "@/lib/seo";

export default function sitemap() {
  const now = new Date("2026-09-30");
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1,
      images: ["/og-image.jpg", "/team.jpg", "/ganesan-anbazhagan.jpg", "/radhika-ganesan.jpg", "/manish-ganesan.jpg", "/suresh.jpg", "/sineka-sivalingam.jpg",
        "/facilities/formulation.jpg", "/facilities/nutraceutical.jpg", "/facilities/cosmeceutical.jpg", "/facilities/microbiology.jpg",
        "/facilities/sensory.jpg", "/facilities/pilot.jpg", "/facilities/packaging.jpg", "/facilities/store.jpg"].map((p) => SITE_URL + p) },
    { url: `${SITE_URL}/careers`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/news`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
