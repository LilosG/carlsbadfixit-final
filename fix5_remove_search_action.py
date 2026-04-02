with open("src/layouts/BaseLayout.astro", "r") as f:
    content = f.read()

old = '''  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/search/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },'''

if old not in content:
    print("ERROR: SearchAction block not found in BaseLayout.astro")
    exit(1)

content = content.replace(old, "")
with open("src/layouts/BaseLayout.astro", "w") as f:
    f.write(content)
print("BaseLayout.astro: SearchAction removed")
