import type { Service } from "./services";

export type ServiceSlug = Service["slug"];

export interface FAQItem {
  question: string;
  answer: string;
}

export type ServiceFaqMap = Record<ServiceSlug, FAQItem[]>;

export const serviceFaqs: ServiceFaqMap = {
  "carpentry-woodwork": [
    {
      question:
        "What size carpentry projects are a good fit for a handyman visit?",
      answer:
        "Most visits focus on trim, doors, fences, gates, and small framing or storage projects that can be completed in a every visit. Larger, multi-room remodels, built-ins that require a shop, or structural changes are usually better suited for a full-service contractor.",
    },
    {
      question: "Do I need to buy my own materials for carpentry projects?",
      answer:
        "You are welcome to provide your own fixtures and materials, or we can source common items locally in North County. For more specialized lumber or hardware, we will confirm options and availability before your visit.",
    },
    {
      question: "Can you help with both interior and exterior wood repairs?",
      answer:
        "Yes. Typical visits combine interior trim and door work with small exterior items such as fence sections and gates, as long as everything fits safely into the scheduled time and does not require major structural work or permits.",
    },
  ],
  electrical: [
    {
      question:
        "What kinds of electrical work are included in a typical visit?",
      answer:
        "Most visits focus on swapping existing light fixtures and fans, adding dimmers and smart switches where wiring allows, and troubleshooting simple issues at a single light, switch, or outlet. Anything that involves new circuits, main panels, or whole-home rewiring is referred to a licensed electrical contractor.",
    },
    {
      question: "Do I need to provide my own light fixtures or fans?",
      answer:
        "Many homeowners prefer to choose their own fixtures and fans. As long as they are compatible with the existing electrical boxes and locations, we are happy to install them and make sure everything is secure and clean.",
    },
    {
      question: "Can you handle emergency electrical problems?",
      answer:
        "No. Emergency issues such as burning smells, repeated breaker trips, or loss of power to major areas of the home should be handled by a licensed electrician or your utility provider. Our visits are best for planned upgrades and non-urgent, small electrical fixes.",
    },
  ],
  "furniture-assembly-installation": [
    {
      question: "What types of furniture and installations can you help with?",
      answer:
        "Typical visits include assembling flat-pack furniture, desks, beds, and storage, anchoring tall pieces to walls, and installing shelves, artwork, and simple wall décor. We focus on safe, professional installs that are ready for daily use.",
    },
    {
      question: "Can you help decide where furniture and wall décor should go?",
      answer:
        "If you have a general idea of where things should go, we can help fine-tune placement so it feels centered and practical in the space. For full interior design services, we recommend working with a designer first and then bringing us in for the install work.",
    },
    {
      question: "Do you remove packaging and leftover materials?",
      answer:
        "Yes. Packaging from new furniture and fixtures is collected and staged neatly for your regular trash and recycling service. If a project generates unusually large amounts of material, we will discuss disposal options ahead of time.",
    },
  ],
  "plumbing-fixtures-repairs": [
    {
      question: "What plumbing work is included in a typical visit?",
      answer:
        "Visits are focused on visible fixtures and small leak repairs such as faucet swaps, disposer replacements, running toilets, and accessible drain and supply line issues. Slab leaks, sewer line work, and anything that requires opening large sections of walls are referred to a licensed plumber.",
    },
    {
      question: "Should I buy my own faucets and fixtures first?",
      answer:
        "Most homeowners prefer to select their own faucets, disposers, and trim that match the rest of the home. If you have questions about compatibility before you purchase, you can always share a few photos and we will confirm what will work best.",
    },
    {
      question:
        "Can you work on plumbing in rental properties and small businesses?",
      answer:
        "Yes. Many visits are scheduled for smaller rental homes and local businesses that need basic fixture repairs and replacements to keep kitchens, baths, and break areas presentable.",
    },
  ],
  "honey-do-lists-small-repairs": [
    {
      question: "How many items can we include in one honey-do visit?",
      answer:
        "Most visits are built around a prioritized list of repair and improvement tasks that can be completed safely within the scheduled time. We group items by room or area so the highest-value fixes are handled first, and anything that does not fit can be clearly noted for a future visit.",
    },
    {
      question:
        "What are examples of tasks that fit well into a honey-do list?",
      answer:
        "Common items include tightening loose hardware, adjusting doors, patching small wall dings, swapping a few fixtures, and touching up caulk or weatherstripping. The goal is to clear the list of small issues that make everyday living more frustrating than it needs to be.",
    },
    {
      question:
        "Is a honey-do visit a good fit before listing a home for sale?",
      answer:
        "Yes. Many North County homeowners schedule a focused visit before listing to address cosmetic issues such as wall dings, crooked hardware, and small repairs so showings feel cleaner and buyers can focus on the strengths of the home.",
    },
  ],
  "drywall-repair": [
    {
      question: "What size drywall repairs are a good fit?",
      answer:
        "Most visits cover wall and ceiling damage such as moving-related holes, cracks along seams, and a few larger patches from previous work. Extensive damage, full-room skim coats, or multi-room remodel work is usually better handled by a dedicated drywall crew.",
    },
    {
      question: "Can you match my existing wall texture and paint?",
      answer:
        "We blend new texture into the surrounding area so repairs do not jump out at a glance. Paint touch-up can often be completed when matching paint is available; otherwise we will discuss options based on the existing finish and your goals for the space.",
    },
    {
      question: "Do you handle stains from active leaks?",
      answer:
        "We can repair and refinish drywall after the underlying plumbing or roof issue has been properly fixed and dried out. Active leaks or suspected mold issues should be addressed by a licensed plumber, roofer, or remediation specialist before cosmetic repairs are scheduled.",
    },
  ],
  "tv-mounting": [
    {
      question: "What do I need to have ready for a TV mounting visit?",
      answer:
        "Have the TV, wall mount, and any key components such as a soundbar or streaming device on site. We will confirm mounting locations, find studs or appropriate anchors, and make sure everything is secure and positioned for comfortable viewing.",
    },
    {
      question: "Can you hide all of the cables inside the wall?",
      answer:
        "In many cases we can route and conceal cabling using surface channels or in-wall rated kits designed for low-voltage and power. The exact approach depends on your wall construction, outlet locations, and the components you are using.",
    },
    {
      question: "Is TV mounting a good fit for rental properties?",
      answer:
        "Yes. Solidly mounted TVs with clean cabling are a common request in rental homes and small multifamily units around North County. We focus on safe installs that balance guest comfort with practical long-term maintenance.",
    },
  ],
};

export function getFaqItemsForService(serviceSlug: ServiceSlug): FAQItem[] {
  return serviceFaqs[serviceSlug] ?? [];
}

// ---------------------------------------------------------------------------
// City-specific FAQs
// ---------------------------------------------------------------------------

export const cityFaqs: Record<string, FAQItem[]> = {
  carlsbad: [
    {
      question: "What kinds of home repairs does Carlsbad Fix It handle in Carlsbad?",
      answer: "We handle home repair and improvement projects in Carlsbad including drywall patching, light fixture swaps, carpentry trim work, plumbing fixture replacements, TV mounting, furniture assembly, and honey-do lists. Most visits combine several tasks into a single visit.",
    },
    {
      question: "Do you serve neighborhoods like Aviara, Bressi Ranch, and La Costa in Carlsbad?",
      answer: "Yes. We regularly work in Carlsbad neighborhoods including Aviara, La Costa, Bressi Ranch, Carlsbad Village, and Robertson Ranch, among others. If you are unsure whether your neighborhood is in our current rotation, reach out and we will confirm availability.",
    },
    {
      question: "How far in advance do I need to schedule a handyman visit in Carlsbad?",
      answer: "Scheduling lead time in Carlsbad typically ranges from a few days to about a week depending on project mix and current availability. Smaller punch lists and single-task visits are often easier to slot in quickly. Contact us with your list and we will give you a realistic timeline.",
    },
    {
      question: "Can Carlsbad Fix It handle repairs in a rental property or ADU in Carlsbad?",
      answer: "Yes. We work with small rental property owners and ADU landlords in Carlsbad for turnover touch-ups, fixture replacements, drywall repairs, and other small maintenance tasks between tenancies. We keep visits efficient and document what was completed.",
    },
  ],
  oceanside: [
    {
      question: "What handyman services are available in Oceanside?",
      answer: "Carlsbad Fix It provides home repair and improvement visits in Oceanside including carpentry, drywall repair, plumbing fixture replacements, electrical fixtures, furniture assembly, TV mounting, and honey-do lists. We serve both residential and small commercial properties.",
    },
    {
      question: "Do you work in Fire Mountain, Eastside Oceanside, or near Camp Pendleton?",
      answer: "Yes. We serve Oceanside neighborhoods including Fire Mountain, the Historic Downtown area, Eastside Oceanside, and communities near the 76 corridor. Availability near Camp Pendleton depends on project mix — reach out to confirm your specific location.",
    },
    {
      question: "Are you available for rental property repairs in Oceanside?",
      answer: "Yes. We handle turnover repairs, fixture swaps, drywall patches, and small maintenance tasks for rental property owners in Oceanside. Visits are scoped to completed with clear timing and quality results so your unit is back on the market quickly.",
    },
    {
      question: "How do I get an estimate for handyman work in Oceanside?",
      answer: "Share a short description of your project, your location in Oceanside, and any helpful photos using our estimate request form or by calling or texting directly. We typically follow up within one business day with clear next steps and a no-obligation estimate.",
    },
  ],
  encinitas: [
    {
      question: "What types of handyman projects do you handle in Encinitas?",
      answer: "We handle home repair and improvement visits in Encinitas including drywall repair and texture blending, carpentry and trim work, plumbing fixture replacements, electrical fixtures, TV mounting, furniture assembly, and mixed punch lists. Most visits combine several tasks into one efficient appointment.",
    },
    {
      question: "Do you serve Leucadia, Cardiff-by-the-Sea, and Olivenhain in Encinitas?",
      answer: "Yes. We serve Encinitas neighborhoods including Leucadia, Cardiff-by-the-Sea, Olivenhain, New Encinitas, and Old Encinitas. If you are in a less central part of Encinitas, contact us to confirm availability for your address.",
    },
    {
      question: "Can you help with pre-listing repairs or cosmetic fixes for a home sale in Encinitas?",
      answer: "Yes. Pre-listing repair visits are a common request in Encinitas. We can handle drywall patches, fixture updates, door adjustments, trim touch-ups, and other cosmetic fixes that help a home show better without requiring a large contractor.",
    },
    {
      question: "How does scheduling work for a handyman visit in Encinitas?",
      answer: "Send us your project list and location in Encinitas and we will confirm what can be handled in a single visit, provide a no-obligation estimate, and give you realistic scheduling options. Lead time is typically a few days to a week depending on availability.",
    },
  ],
  vista: [
    {
      question: "What handyman services does Carlsbad Fix It provide in Vista?",
      answer: "We provide home repair and improvement visits in Vista including carpentry and trim, drywall patching, light fixture and ceiling fan replacements, plumbing fixture swaps, furniture assembly, TV mounting, and honey-do style punch lists. Visits are scoped to completed with clear timing and quality results.",
    },
    {
      question: "Do you serve South Vista, Shadowridge, or Vista Village neighborhoods?",
      answer: "Yes. We serve Vista neighborhoods including Shadowridge, South Vista, Vista Village, and surrounding residential areas. Contact us with your address to confirm availability for your specific location.",
    },
    {
      question: "Can you help with small repairs in an older Vista home with original fixtures?",
      answer: "Yes. Older homes in Vista often need careful attention when swapping fixtures or patching walls due to existing textures and materials. We plan visits around what can be completed cleanly in a single appointment and communicate clearly about anything that may require follow-up.",
    },
    {
      question: "How do I request a handyman estimate in Vista?",
      answer: "Use the estimate form on this page or call or text directly. Share a brief description of your project, your Vista address, and any photos that help clarify the scope. We typically respond within one business day with a clear estimate and scheduling options.",
    },
  ],
  "san-marcos": [
    {
      question: "What handyman services are available in San Marcos?",
      answer: "Carlsbad Fix It provides home repair and improvement visits in San Marcos including drywall repair, carpentry, plumbing fixtures, electrical fixtures, TV mounting, furniture assembly, and punch list visits. We serve both homeowners and small rental property owners.",
    },
    {
      question: "Do you work in communities like San Elijo Hills or near Cal State San Marcos?",
      answer: "Yes. We serve San Marcos neighborhoods including San Elijo Hills, Twin Oaks, and residential communities near Cal State San Marcos. Reach out with your address to confirm availability for your part of San Marcos.",
    },
    {
      question: "Can you handle repairs in a newer construction home in San Marcos?",
      answer: "Yes. Newer construction homes in San Marcos commonly need cosmetic fixes, fixture upgrades, and small punch list items that fall between builder warranty work and large contractor scope. We handle those small-to-medium gaps efficiently in a single scheduled visit.",
    },
    {
      question: "How far in advance should I book a handyman in San Marcos?",
      answer: "Typical lead time in San Marcos is a few days to about a week. Larger punch lists benefit from a little more lead time so we can scope the visit accurately. Contact us with your list and we will give you a realistic schedule.",
    },
  ],
  "bressi-ranch": [
    {
      question: "Does Carlsbad Fix It serve Bressi Ranch?",
      answer: "Yes. We serve Bressi Ranch homeowners for home repair and improvement projects including drywall patching, carpentry, plumbing fixture replacements, electrical fixtures, TV mounting, furniture assembly, and honey-do lists. Bressi Ranch is part of our regular Carlsbad service area.",
    },
    {
      question: "What kinds of repairs are common in Bressi Ranch homes?",
      answer: "Bressi Ranch homes are typically newer planned community construction. Common requests include drywall repairs from wall anchors or door handles, fixture upgrades, ceiling fan installations, trim adjustments, and TV mounting in living rooms and master bedrooms.",
    },
    {
      question: "Can you handle HOA-compliant repairs in Bressi Ranch?",
      answer: "We focus on interior repairs and improvements that do not typically require HOA approval — drywall patching, fixture swaps, carpentry, and similar tasks. If your project involves exterior changes or anything that may require HOA sign-off, we will flag that before any work begins.",
    },
    {
      question: "How do I schedule a handyman visit in Bressi Ranch?",
      answer: "Submit the estimate request form on this page or call or text directly. Share your Bressi Ranch address, a short list of tasks, and any helpful photos. We will follow up within one business day with a no-obligation estimate and scheduling options.",
    },
  ],
};

export function getFaqItemsForCity(citySlug: string): FAQItem[] {
  return cityFaqs[citySlug] ?? [];
}
