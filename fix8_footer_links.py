with open("src/components/SiteFooter.astro", "r") as f:
    content = f.read()

old_imports = '''import { footerSections } from "../data/navigation";
import { businessProfile } from "../data/site-config";'''
new_imports = '''import { footerSections } from "../data/navigation";
import { businessProfile } from "../data/site-config";
import { serviceAreas } from "../data/service-areas";
import { services } from "../data/services";'''

if old_imports not in content:
    print("ERROR: imports not found in SiteFooter.astro")
    exit(1)
content = content.replace(old_imports, new_imports)

old_sections = '''        {
          footerSections.map((section) => (
            <div class="space-y-2">
              <p class="text-cf-textMuted text-[11px] font-semibold tracking-wide uppercase">
                {section.title}
              </p>
              {section.links.map((link) => (
                
                  href={link.href}
                  class="text-cf-textMuted block text-[13px] underline-offset-4 hover:text-sky-300 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))
        }

        <div class="space-y-3">'''

new_sections = '''        {
          footerSections.map((section) => (
            <div class="space-y-2">
              <p class="text-cf-textMuted text-[11px] font-semibold tracking-wide uppercase">
                {section.title}
              </p>
              {section.links.map((link) => (
                
                  href={link.href}
                  class="text-cf-textMuted block text-[13px] underline-offset-4 hover:text-sky-300 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))
        }

        <div class="space-y-2">
          <p class="text-cf-textMuted text-[11px] font-semibold tracking-wide uppercase">
            Services
          </p>
          {
            services.map((service) => (
              
                href={`/services/${service.slug}/`}
                class="text-cf-textMuted block text-[13px] underline-offset-4 hover:text-sky-300 hover:underline"
              >
                {service.name}
              </a>
            ))
          }
        </div>

        <div class="space-y-2">
          <p class="text-cf-textMuted text-[11px] font-semibold tracking-wide uppercase">
            Service areas
          </p>
          {
            serviceAreas.map((area) => (
              
                href={`/service-areas/${area.slug}/`}
                class="text-cf-textMuted block text-[13px] underline-offset-4 hover:text-sky-300 hover:underline"
              >
                {area.label}
              </a>
            ))
          }
        </div>

        <div class="space-y-3">'''

if old_sections not in content:
    print("ERROR: footerSections block not found in SiteFooter.astro")
    exit(1)
content = content.replace(old_sections, new_sections)

with open("src/components/SiteFooter.astro", "w") as f:
    f.write(content)
print("SiteFooter.astro: city and service links added")
