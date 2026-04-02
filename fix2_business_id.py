# Fix seo.ts
with open("src/lib/seo.ts", "r") as f:
    content = f.read()

old = 'const BUSINESS_ID = `${SITE_URL}#local-business`;'
new = 'const BUSINESS_ID = `${SITE_URL}#localbusiness`;'

if old not in content:
    print("ERROR: target string not found in seo.ts")
    exit(1)

content = content.replace(old, new)
with open("src/lib/seo.ts", "w") as f:
    f.write(content)
print("seo.ts updated")

# Fix BaseLayout.astro
with open("src/layouts/BaseLayout.astro", "r") as f:
    content = f.read()

old = 'const businessId = `${siteUrl}#local-business`;'
new = 'const businessId = `${siteUrl}#localbusiness`;'

if old not in content:
    print("ERROR: target string not found in BaseLayout.astro")
    exit(1)

content = content.replace(old, new)
with open("src/layouts/BaseLayout.astro", "w") as f:
    f.write(content)
print("BaseLayout.astro updated")
