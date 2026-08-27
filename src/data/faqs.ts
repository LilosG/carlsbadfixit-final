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
      question: "What carpentry repairs can a handyman do?",
      answer:
        "A handyman can handle trim, doors, fences, gates, and small framing or storage projects that fit within a scheduled visit. Larger multi-room remodels, shop-built built-ins, or structural changes that require permits are better suited for a licensed contractor.",
    },
    {
      question:
        "Does a handyman provide materials for carpentry work, or do I need to buy them?",
      answer:
        "You are welcome to supply your own lumber and hardware, or common materials can be sourced locally in North County. For specialty items, options and availability are confirmed before the visit so there are no surprises on the day.",
    },
    {
      question:
        "Can a handyman handle both indoor trim and outdoor wood repairs in the same visit?",
      answer:
        "Yes. Most visits combine interior trim and door work with small exterior items such as fence sections and gates, as long as everything fits safely within the scheduled time and does not require major structural work or permits.",
    },
  ],
  electrical: [
    {
      question: "What electrical work can a handyman do without a licensed electrician?",
      answer:
        "A handyman can swap existing light fixtures and ceiling fans, add dimmers and smart switches where wiring allows, and troubleshoot simple issues at a single light, switch, or outlet. New circuits, main panel work, and whole-home rewiring require a licensed electrical contractor.",
    },
    {
      question: "Do I need to buy my own light fixtures before a handyman visit?",
      answer:
        "Many homeowners prefer to choose their own fixtures and fans before scheduling. As long as they are compatible with the existing electrical boxes and locations, a handyman can install them cleanly and make sure all controls work correctly.",
    },
    {
      question: "Does a handyman handle electrical emergencies?",
      answer:
        "No. Burning smells, repeated breaker trips, arcing, or loss of power to large areas of the home are emergencies for a licensed electrician or your utility provider. Handyman electrical visits are best for planned upgrades and non-urgent small fixes.",
    },
  ],
  "furniture-assembly-installation": [
    {
      question: "What furniture assembly services does a handyman provide?",
      answer:
        "Typical visits include assembling flat-pack furniture, desks, beds, and storage units, anchoring tall pieces to walls to prevent tipping, and installing shelves, artwork, and simple wall décor. Every install is checked for level and stability before the visit ends.",
    },
    {
      question: "Can a handyman help with furniture placement and layout?",
      answer:
        "If you have a general idea of where pieces should go, a handyman can help fine-tune placement so furniture feels centered and practical in the space. For full interior design guidance, work with a designer first and bring in the handyman for the install.",
    },
    {
      question:
        "Does the handyman clean up packaging and leftover materials after assembly?",
      answer:
        "Yes. Packaging from new furniture and fixtures is collected and staged neatly for regular trash and recycling pickup. If a project generates unusually large volumes of material, disposal options are discussed ahead of time.",
    },
  ],
  "plumbing-fixtures-repairs": [
    {
      question: "What plumbing repairs can a handyman do without a licensed plumber?",
      answer:
        "A handyman can replace faucets, swap garbage disposers, repair running toilets, and fix accessible drain and supply line leaks. Slab leaks, sewer line work, and any repair requiring large sections of wall to be opened are referred to a licensed plumber.",
    },
    {
      question:
        "Should I buy my own faucets and fixtures before scheduling a handyman?",
      answer:
        "Most homeowners prefer to select fixtures that match their home before the visit. If you have questions about compatibility, share a few photos beforehand and a handyman can confirm what will work so your purchase is correct the first time.",
    },
    {
      question:
        "Can a handyman handle plumbing repairs in rental properties?",
      answer:
        "Yes. Many visits are scheduled for smaller rental homes and local businesses that need basic fixture repairs and replacements to keep kitchens, baths, and break areas presentable and comfortable between tenants.",
    },
  ],
  "honey-do-lists-small-repairs": [
    {
      question: "How many tasks can a handyman complete in one honey-do list visit?",
      answer:
        "Most visits complete 4–8 prioritized tasks within the scheduled time. Items are grouped by room so the highest-value fixes are handled first, and anything that does not fit is clearly noted for a follow-up visit rather than rushed.",
    },
    {
      question: "What tasks are included in a honey-do handyman visit?",
      answer:
        "Common honey-do tasks include tightening loose hardware, adjusting sticky doors, patching small wall dings, swapping worn fixtures, and touching up caulk or weatherstripping. The goal is clearing the accumulated list of small issues that make everyday living more frustrating than it should be.",
    },
    {
      question: "Is a handyman honey-do visit worth it before selling a home?",
      answer:
        "Yes. Many North County homeowners schedule a focused visit before listing to address wall dings, crooked hardware, sticking doors, and small repairs so showings feel cleaner and buyers can focus on the strengths of the home rather than deferred maintenance.",
    },
  ],
  "drywall-repair": [
    {
      question: "What size drywall holes and damage can a handyman repair?",
      answer:
        "Most handyman drywall visits cover moving-related holes, cracks along seams, and patches from previous repairs or removed hardware. Extensive damage, full-room skim coats, or multi-room remodel work is usually better handled by a dedicated drywall crew.",
    },
    {
      question: "Can a handyman match existing wall texture when patching drywall?",
      answer:
        "Yes. New texture is blended into the surrounding area so repairs do not stand out at a glance. Paint touch-up can often be completed when matching paint is available; otherwise options are discussed based on the existing finish and your goals for the space.",
    },
    {
      question: "Can a handyman repair water-damaged drywall?",
      answer:
        "A handyman can repair and refinish drywall after the underlying plumbing or roof issue has been properly fixed and fully dried out. Active leaks or suspected mold must be addressed by a licensed plumber, roofer, or remediation specialist before any cosmetic repair is scheduled.",
    },
  ],
  "tv-mounting": [
    {
      question: "What do I need before a handyman TV mounting appointment?",
      answer:
        "Have the TV, wall mount, and key components such as a soundbar or streaming device on site. The handyman will confirm mounting height, locate studs or appropriate anchors, and make sure everything is secure and positioned for comfortable everyday viewing.",
    },
    {
      question: "Can a handyman hide TV cables inside the wall?",
      answer:
        "In many cases, cables can be routed and concealed using surface raceways or in-wall rated kits designed for low-voltage and power. The best approach depends on wall construction, outlet locations, and the specific components being used.",
    },
    {
      question: "Can a handyman mount a TV in a rental property or apartment?",
      answer:
        "Yes. Solidly mounted TVs with clean cable management are a common request in rental homes and small multifamily units across North County. Visits focus on secure installs that hold up to guest turnover and look clean in listing photos.",
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
      question: "What handyman services are available in Carlsbad, CA?",
      answer:
        "Handyman services in Carlsbad include drywall patching, light fixture swaps, carpentry trim work, plumbing fixture replacements, TV mounting, furniture assembly, and honey-do punch lists. Most visits combine several tasks into a single appointment so repairs are efficient and cost-effective.",
    },
    {
      question: "Does a handyman in Carlsbad serve Aviara, Bressi Ranch, and La Costa?",
      answer:
        "Yes. Handyman visits in Carlsbad cover neighborhoods including Aviara, La Costa, Bressi Ranch, Carlsbad Village, and Robertson Ranch. If you are unsure whether your address falls in the current service rotation, reach out and availability will be confirmed quickly.",
    },
    {
      question: "How quickly can I get a handyman in Carlsbad, CA?",
      answer:
        "Scheduling lead time in Carlsbad typically ranges from a few days to about a week depending on project scope and current availability. Smaller punch lists and single-task visits are often easier to slot in on shorter notice. Share your list and a realistic timeline will be provided.",
    },
    {
      question: "Does a handyman in Carlsbad work on rental properties and ADUs?",
      answer:
        "Yes. Rental property owners and ADU landlords in Carlsbad regularly schedule visits for turnover touch-ups, fixture replacements, drywall repairs, and small maintenance tasks between tenancies. Visits are kept efficient and what was completed is clearly documented.",
    },
  ],
  oceanside: [
    {
      question: "What handyman services are available in Oceanside, CA?",
      answer:
        "Handyman services in Oceanside include carpentry, drywall repair, plumbing fixture replacements, electrical fixture swaps, furniture assembly, TV mounting, and honey-do punch lists. Both residential homeowners and small commercial properties are served.",
    },
    {
      question: "Does a handyman in Oceanside serve Fire Mountain and Eastside neighborhoods?",
      answer:
        "Yes. Handyman visits in Oceanside cover Fire Mountain, Historic Downtown, Eastside Oceanside, Rancho Del Oro, and communities near the 76 corridor. Availability in specific areas depends on project mix — reach out with your address to confirm.",
    },
    {
      question: "Can a handyman in Oceanside help with rental property repairs?",
      answer:
        "Yes. Turnover repairs, fixture swaps, drywall patches, and small maintenance tasks are handled for rental property owners in Oceanside. Visits are scoped with clear timing and quality results so units are ready for the next tenant or guest quickly.",
    },
    {
      question: "How do I get a handyman estimate in Oceanside, CA?",
      answer:
        "Share a short description of your project, your Oceanside location, and any helpful photos using the estimate request form or by calling or texting directly. A response with clear next steps and a no-obligation estimate typically follows within one business day.",
    },
  ],
  encinitas: [
    {
      question: "What handyman services are available in Encinitas, CA?",
      answer:
        "Handyman services in Encinitas include drywall repair and texture blending, carpentry and trim work, plumbing fixture replacements, electrical fixture swaps, TV mounting, furniture assembly, and mixed punch lists. Most visits combine several tasks into one efficient appointment.",
    },
    {
      question: "Does a handyman in Encinitas serve Leucadia, Cardiff, and Olivenhain?",
      answer:
        "Yes. Handyman visits in Encinitas cover Leucadia, Cardiff-by-the-Sea, Olivenhain, New Encinitas, and Old Encinitas. If you are in a less central part of Encinitas, reach out to confirm availability for your specific address.",
    },
    {
      question: "Is a handyman visit worth it before selling a home in Encinitas, CA?",
      answer:
        "Yes. Pre-listing repair visits are a common request in Encinitas. Drywall patches, fixture updates, door adjustments, and cosmetic trim touch-ups help a home show better without the cost of a full contractor. Many homeowners schedule this visit before professional photography.",
    },
    {
      question: "How quickly can I schedule a handyman in Encinitas, CA?",
      answer:
        "Lead time for a handyman visit in Encinitas is typically a few days to a week depending on availability. Sharing a project list and location upfront lets us confirm what fits in one visit and provide a no-obligation estimate with realistic scheduling options.",
    },
  ],
  vista: [
    {
      question: "What handyman services are available in Vista, CA?",
      answer:
        "Handyman services in Vista include carpentry and trim repairs, drywall patching, light fixture and ceiling fan replacements, plumbing fixture swaps, furniture assembly, TV mounting, and honey-do punch lists. Visits are scoped for clear timing and quality results.",
    },
    {
      question: "Does a handyman in Vista serve Shadowridge and Vista Village?",
      answer:
        "Yes. Handyman visits in Vista cover Shadowridge, South Vista, Vista Village, Twin Oaks Valley, and surrounding residential areas. Share your Vista address to confirm availability for your specific neighborhood.",
    },
    {
      question: "Can a handyman work on older homes with original fixtures in Vista, CA?",
      answer:
        "Yes. Older Vista homes often need extra care when swapping fixtures or patching walls due to existing textures and dated materials. Visits are planned around what can be completed cleanly in a single appointment, and anything requiring follow-up is clearly communicated upfront.",
    },
    {
      question: "How do I get a handyman estimate in Vista, CA?",
      answer:
        "Use the estimate form on this page or call or text directly. Share a brief description of your project, your Vista address, and any helpful photos. A clear estimate and scheduling options are typically provided within one business day.",
    },
  ],
  "san-marcos": [
    {
      question: "What handyman services are available in San Marcos, CA?",
      answer:
        "Handyman services in San Marcos include drywall repair, carpentry, plumbing fixture replacements, electrical fixture swaps, TV mounting, furniture assembly, and punch list visits. Both homeowners and small rental property owners are served.",
    },
    {
      question: "Does a handyman in San Marcos serve San Elijo Hills?",
      answer:
        "Yes. Handyman visits in San Marcos cover San Elijo Hills, Discovery Hills, Old Creek Ranch, Twin Oaks, and residential communities near Cal State San Marcos. Reach out with your address to confirm availability for your part of the city.",
    },
    {
      question: "Can a handyman handle punch list repairs in a newer San Marcos home?",
      answer:
        "Yes. Newer construction homes in San Marcos commonly need cosmetic fixes, fixture upgrades, and punch list items that fall between builder warranty work and large contractor scope. Those small-to-medium gaps are handled efficiently in a single scheduled visit.",
    },
    {
      question: "How quickly can I get a handyman in San Marcos, CA?",
      answer:
        "Typical lead time in San Marcos is a few days to about a week. Larger punch lists benefit from a bit more lead time so the visit can be scoped accurately. Share your list and a realistic schedule will be provided.",
    },
  ],
  "bressi-ranch": [
    {
      question: "Is there a handyman that serves Bressi Ranch in Carlsbad, CA?",
      answer:
        "Yes. Bressi Ranch is part of a regular Carlsbad service area. Home repair and improvement visits include drywall patching, carpentry, plumbing fixture replacements, electrical fixture swaps, TV mounting, furniture assembly, and honey-do punch lists.",
    },
    {
      question: "What home repairs do Bressi Ranch homeowners commonly need?",
      answer:
        "Bressi Ranch homes are newer planned community construction. Common requests include drywall repairs from wall anchors or door handles, fixture upgrades, ceiling fan installations, trim adjustments, and TV mounting in living rooms and primary bedrooms.",
    },
    {
      question: "Can a handyman do repairs in Bressi Ranch HOA communities?",
      answer:
        "Handyman visits in Bressi Ranch focus on interior repairs and improvements that do not require HOA approval — drywall patching, fixture swaps, carpentry, and similar tasks. If a project involves exterior changes that may need HOA sign-off, that is flagged before any work begins.",
    },
    {
      question: "How do I find and schedule a handyman in Bressi Ranch?",
      answer:
        "Submit the estimate request form on this page or call or text directly. Share your Bressi Ranch address, a short task list, and any helpful photos. A no-obligation estimate and scheduling options are typically provided within one business day.",
    },
  ],
};

export function getFaqItemsForCity(citySlug: string): FAQItem[] {
  return cityFaqs[citySlug] ?? [];
}
