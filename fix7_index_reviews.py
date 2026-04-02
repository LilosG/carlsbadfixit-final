with open("src/pages/index.astro", "r") as f:
    content = f.read()

old_import = 'import { getLocalBusinessJsonLd } from "../lib/seo";'
new_import = 'import { getLocalBusinessJsonLd, getReviewsJsonLd } from "../lib/seo";'
if old_import not in content:
    print("ERROR: import not found in index.astro")
    exit(1)
content = content.replace(old_import, new_import)

old_ldjson = '''const localBusinessJsonLd = JSON.stringify(
  getLocalBusinessJsonLd(serviceAreas.map((area) => area.label)),
);'''
new_ldjson = '''const localBusinessJsonLd = JSON.stringify(
  getLocalBusinessJsonLd(serviceAreas.map((area) => area.label)),
);
const reviewsJsonLd = JSON.stringify(getReviewsJsonLd(testimonials));'''
if old_ldjson not in content:
    print("ERROR: localBusinessJsonLd block not found in index.astro")
    exit(1)
content = content.replace(old_ldjson, new_ldjson)

old_script = '''  <script
    type="application/ld+json"
    slot="head"
    is:inline
    set:html={localBusinessJsonLd}
  />'''
new_script = '''  <script
    type="application/ld+json"
    slot="head"
    is:inline
    set:html={localBusinessJsonLd}
  />
  <script
    type="application/ld+json"
    slot="head"
    is:inline
    set:html={reviewsJsonLd}
  />'''
if old_script not in content:
    print("ERROR: localBusinessJsonLd script tag not found in index.astro")
    exit(1)
content = content.replace(old_script, new_script)

with open("src/pages/index.astro", "w") as f:
    f.write(content)
print("index.astro updated")
