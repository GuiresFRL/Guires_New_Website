import StaticPage from "@/components/StaticPage";
import { css, html, js } from "@/content/news";
import { jsonld } from "@/content/jsonld";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Guires News & Media | Announcements, Insights & Press",
  description: "Latest news from Guires Research & Innovation Centre: company announcements, milestones, recognition, research insights and life at Guires across Guires Labs, Pepgra and Pubrica.",
  path: "/news",
});

export default function NewsPage() {
  return <StaticPage id="news" css={css} html={html} js={js} jsonld={jsonld.news} />;
}
