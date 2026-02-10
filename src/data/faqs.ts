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
        "Most visits focus on trim, doors, fences, gates, and small framing or storage projects that can be completed in a clear service window. Larger, multi-room remodels, built-ins that require a shop, or structural changes are usually better suited for a full-service contractor.",
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
        "Many homeowners prefer to choose their own fixtures and fans. As long as they are compatible with the existing electrical boxes and locations, we are happy to install them and make sure everything is secure and tidy.",
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
        "Typical visits include assembling flat-pack furniture, desks, beds, and storage, anchoring tall pieces to walls, and installing shelves, artwork, and simple wall décor. We focus on safe, tidy installs that are ready for daily use.",
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
        "Most visits are built around a prioritized list of small to medium tasks that can be completed safely within the scheduled time. We group items by room or area so the highest-value fixes are handled first, and anything that does not fit can be clearly noted for a future visit.",
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
        "Yes. Many North County homeowners schedule a focused visit before listing to tidy obvious cosmetic issues such as wall dings, crooked hardware, and small repairs so showings feel cleaner and buyers can focus on the strengths of the home.",
    },
  ],
  "drywall-repair": [
    {
      question: "What size drywall repairs are a good fit?",
      answer:
        "Most visits cover small to medium wall and ceiling damage such as moving-related holes, cracks along seams, and a few larger patches from previous work. Extensive damage, full-room skim coats, or multi-room remodel work is usually better handled by a dedicated drywall crew.",
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
        "Yes. Solidly mounted TVs with tidy cabling are a common request in rental homes and small multifamily units around North County. We focus on safe installs that balance guest comfort with practical long-term maintenance.",
    },
  ],
};

export function getFaqItemsForService(serviceSlug: ServiceSlug): FAQItem[] {
  return serviceFaqs[serviceSlug] ?? [];
}
