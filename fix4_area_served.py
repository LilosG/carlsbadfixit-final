with open("src/lib/seo.ts", "r") as f:
    content = f.read()

old = '''export function getLocalBusinessJsonLd(areaLabels: string[]) {
  const business = getBusinessProvider();

  return {
    "@context": "https://schema.org",
    ...business,
    areaServed: areaLabels.map((label) => ({
      "@type": "Place",
      name: label,
    })),
  };
}'''

new = '''const AREA_SAME_AS: Record<string, string> = {
  "Carlsbad, CA": "https://en.wikipedia.org/wiki/Carlsbad,_California",
  "Oceanside, CA": "https://en.wikipedia.org/wiki/Oceanside,_California",
  "Encinitas, CA": "https://en.wikipedia.org/wiki/Encinitas,_California",
  "Vista, CA": "https://en.wikipedia.org/wiki/Vista,_California",
  "San Marcos, CA": "https://en.wikipedia.org/wiki/San_Marcos,_California",
  "Bressi Ranch, CA": "https://en.wikipedia.org/wiki/Bressi_Ranch,_California",
};

export function getLocalBusinessJsonLd(areaLabels: string[]) {
  const business = getBusinessProvider();

  return {
    "@context": "https://schema.org",
    ...business,
    areaServed: areaLabels.map((label) => ({
      "@type": "City",
      name: label,
      ...(AREA_SAME_AS[label] ? { sameAs: AREA_SAME_AS[label] } : {}),
    })),
  };
}'''

if old not in content:
    print("ERROR: target block not found in seo.ts")
    exit(1)

content = content.replace(old, new)
with open("src/lib/seo.ts", "w") as f:
    f.write(content)
print("seo.ts: areaServed Wikipedia sameAs added")
