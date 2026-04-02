# Step 1: astro.config.mjs — remove partytown
with open("astro.config.mjs", "r") as f:
    content = f.read()

old_import = 'import partytown from "@astrojs/partytown";\n'
if old_import not in content:
    print("ERROR: partytown import not found in astro.config.mjs")
    exit(1)
content = content.replace(old_import, "")

old_integration = '''    partytown({
      config: {
        forward: ["dataLayer.push", "gtag"],
      },
    }),'''
if old_integration not in content:
    print("ERROR: partytown integration not found in astro.config.mjs")
    exit(1)
content = content.replace(old_integration, "")

with open("astro.config.mjs", "w") as f:
    f.write(content)
print("astro.config.mjs: partytown removed")

# Step 2: BaseLayout.astro — replace partytown GA4 with standard async
with open("src/layouts/BaseLayout.astro", "r") as f:
    content = f.read()

old_ga = '''    <!-- Google Analytics (GA4) with Partytown for performance -->
    <script
      type="text/partytown"
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-8L6X2ZZ5JH"
      is:inline></script>
    <script type="text/partytown" src="/ga-init.js" is:inline></script>
    <script type="text/partytown" src="/ga-events.js" is:inline></script>'''

new_ga = '''    <!-- Google Analytics (GA4) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8L6X2ZZ5JH"></script>
    <script is:inline>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8L6X2ZZ5JH');
    </script>'''

if old_ga not in content:
    print("ERROR: partytown GA4 block not found in BaseLayout.astro")
    exit(1)
content = content.replace(old_ga, new_ga)

old_ahrefs = '''    <script
      type="text/partytown"
      src="https://analytics.ahrefs.com/analytics.js"
      data-key="wkBUuhMf8Osy6n8MvgXn6w"
      async
      is:inline></script>'''
new_ahrefs = '''    <script async src="https://analytics.ahrefs.com/analytics.js" data-key="wkBUuhMf8Osy6n8MvgXn6w"></script>'''

if old_ahrefs not in content:
    print("ERROR: Ahrefs partytown script not found in BaseLayout.astro")
    exit(1)
content = content.replace(old_ahrefs, new_ahrefs)

with open("src/layouts/BaseLayout.astro", "w") as f:
    f.write(content)
print("BaseLayout.astro: standard async GA4 implemented")
