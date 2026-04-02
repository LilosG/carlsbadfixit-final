# Step 1: Add getLocalBusinessStubJsonLd to seo.ts
with open("src/lib/seo.ts", "r") as f:
    content = f.read()

old = 'export function getLocalBusinessJsonLd(areaLabels: string[]) {'
if old not in content:
    print("ERROR: anchor not found in seo.ts")
    exit(1)

stub_fn = '''export function getLocalBusinessStubJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#localbusiness`,
  };
}

'''
content = content.replace(old, stub_fn + old)
with open("src/lib/seo.ts", "w") as f:
    f.write(content)
print("seo.ts: stub function added")

# Step 2: about.astro
with open("src/pages/about.astro", "r") as f:
    content = f.read()

old_import = 'import { getBreadcrumbJsonLd, getLocalBusinessJsonLd } from "../lib/seo";'
new_import = 'import { getBreadcrumbJsonLd, getLocalBusinessStubJsonLd } from "../lib/seo";'
if old_import not in content:
    print("ERROR: import not found in about.astro")
    exit(1)
content = content.replace(old_import, new_import)

old_call = 'const aboutLocalBusinessJsonLd = JSON.stringify(\n  getLocalBusinessJsonLd(serviceAreas.map((area) => area.label)),\n);'
new_call = 'const aboutLocalBusinessJsonLd = JSON.stringify(\n  getLocalBusinessStubJsonLd(),\n);'
if old_call not in content:
    print("ERROR: call not found in about.astro")
    exit(1)
content = content.replace(old_call, new_call)

with open("src/pages/about.astro", "w") as f:
    f.write(content)
print("about.astro updated")

# Step 3: who-we-work-with.astro
with open("src/pages/who-we-work-with.astro", "r") as f:
    content = f.read()

old_import = 'import { getBreadcrumbJsonLd, getLocalBusinessJsonLd } from "../lib/seo";'
new_import = 'import { getBreadcrumbJsonLd, getLocalBusinessStubJsonLd } from "../lib/seo";'
if old_import not in content:
    print("ERROR: import not found in who-we-work-with.astro")
    exit(1)
content = content.replace(old_import, new_import)

old_call = 'const whoWeWorkWithLocalBusinessJsonLd = JSON.stringify(\n  getLocalBusinessJsonLd(serviceAreas.map((area) => area.label)),\n);'
new_call = 'const whoWeWorkWithLocalBusinessJsonLd = JSON.stringify(\n  getLocalBusinessStubJsonLd(),\n);'
if old_call not in content:
    print("ERROR: call not found in who-we-work-with.astro")
    exit(1)
content = content.replace(old_call, new_call)

with open("src/pages/who-we-work-with.astro", "w") as f:
    f.write(content)
print("who-we-work-with.astro updated")

# Step 4: contact.astro
with open("src/pages/contact.astro", "r") as f:
    content = f.read()

old_import = 'import { getBreadcrumbJsonLd, getLocalBusinessJsonLd } from "../lib/seo";'
new_import = 'import { getBreadcrumbJsonLd, getLocalBusinessStubJsonLd } from "../lib/seo";'
if old_import not in content:
    print("ERROR: import not found in contact.astro")
    exit(1)
content = content.replace(old_import, new_import)

old_call = 'const contactLocalBusinessJsonLd = JSON.stringify(\n  getLocalBusinessJsonLd(serviceAreas.map((area) => area.label)),\n);'
new_call = 'const contactLocalBusinessJsonLd = JSON.stringify(\n  getLocalBusinessStubJsonLd(),\n);'
if old_call not in content:
    print("ERROR: call not found in contact.astro")
    exit(1)
content = content.replace(old_call, new_call)

with open("src/pages/contact.astro", "w") as f:
    f.write(content)
print("contact.astro updated")

# Step 5: faq.astro
with open("src/pages/faq.astro", "r") as f:
    content = f.read()

old_import = '  getLocalBusinessJsonLd,'
new_import = '  getLocalBusinessStubJsonLd,'
if old_import not in content:
    print("ERROR: import not found in faq.astro")
    exit(1)
content = content.replace(old_import, new_import)

old_call = 'const faqLocalBusinessJsonLd = JSON.stringify(\n  getLocalBusinessJsonLd(serviceAreas.map((area) => area.label)),\n);'
new_call = 'const faqLocalBusinessJsonLd = JSON.stringify(\n  getLocalBusinessStubJsonLd(),\n);'
if old_call not in content:
    print("ERROR: call not found in faq.astro")
    exit(1)
content = content.replace(old_call, new_call)

with open("src/pages/faq.astro", "w") as f:
    f.write(content)
print("faq.astro updated")

# Step 6: services/[service].astro
with open("src/pages/services/[service].astro", "r") as f:
    content = f.read()

old_import = '  getLocalBusinessJsonLd,'
new_import = '  getLocalBusinessStubJsonLd,'
if old_import not in content:
    print("ERROR: import not found in [service].astro")
    exit(1)
content = content.replace(old_import, new_import, 1)

old_call = 'const localBusinessJsonLd = JSON.stringify(\n  getLocalBusinessJsonLd([primaryArea.label]),\n);'
new_call = 'const localBusinessJsonLd = JSON.stringify(\n  getLocalBusinessStubJsonLd(),\n);'
if old_call not in content:
    print("ERROR: call not found in [service].astro")
    exit(1)
content = content.replace(old_call, new_call)

with open("src/pages/services/[service].astro", "w") as f:
    f.write(content)
print("services/[service].astro updated")

# Step 7: service-areas/[city]/index.astro
with open("src/pages/service-areas/[city]/index.astro", "r") as f:
    content = f.read()

old_import = 'import { getBreadcrumbJsonLd, getLocalBusinessJsonLd } from "../../../lib/seo";'
new_import = 'import { getBreadcrumbJsonLd, getLocalBusinessStubJsonLd } from "../../../lib/seo";'
if old_import not in content:
    print("ERROR: import not found in city/index.astro")
    exit(1)
content = content.replace(old_import, new_import)

old_call = 'const localBusinessJsonLd = JSON.stringify(\n  getLocalBusinessJsonLd([city.label]),\n);'
new_call = 'const localBusinessJsonLd = JSON.stringify(\n  getLocalBusinessStubJsonLd(),\n);'
if old_call not in content:
    print("ERROR: call not found in city/index.astro")
    exit(1)
content = content.replace(old_call, new_call)

with open("src/pages/service-areas/[city]/index.astro", "w") as f:
    f.write(content)
print("service-areas/[city]/index.astro updated")

# Step 8: service-areas/[city]/[service].astro
with open("src/pages/service-areas/[city]/[service].astro", "r") as f:
    content = f.read()

old_import = '  getLocalBusinessJsonLd,'
new_import = '  getLocalBusinessStubJsonLd,'
if old_import not in content:
    print("ERROR: import not found in city/[service].astro")
    exit(1)
content = content.replace(old_import, new_import, 1)

old_call = 'const localBusinessJsonLd = JSON.stringify(\n  getLocalBusinessJsonLd([city.label]),\n);'
new_call = 'const localBusinessJsonLd = JSON.stringify(\n  getLocalBusinessStubJsonLd(),\n);'
if old_call not in content:
    print("ERROR: call not found in city/[service].astro")
    exit(1)
content = content.replace(old_call, new_call)

with open("src/pages/service-areas/[city]/[service].astro", "w") as f:
    f.write(content)
print("service-areas/[city]/[service].astro updated")

print("\nAll Fix 3 changes complete.")
