with open("src/lib/seo.ts", "r") as f:
    content = f.read()

old = 'export function getArticleJsonLd(meta: ArticleMeta) {'
new = '''export type TestimonialItem = {
  name: string;
  location: string;
  text: string;
  source?: string;
};

export function getReviewsJsonLd(testimonials: TestimonialItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#localbusiness`,
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewBody: t.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      itemReviewed: {
        "@id": `${SITE_URL}#localbusiness`,
      },
    })),
  };
}

export function getArticleJsonLd(meta: ArticleMeta) {'''

if 'export function getArticleJsonLd(meta: ArticleMeta) {' not in content:
    print("ERROR: anchor not found in seo.ts")
    exit(1)

content = content.replace(old, new)
with open("src/lib/seo.ts", "w") as f:
    f.write(content)
print("seo.ts: getReviewsJsonLd added")
