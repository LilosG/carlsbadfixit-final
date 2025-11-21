export interface MoneyContentEntry {
  intro?: string;
  schedulingNote?: string;
  fitGood?: string[];
  fitNotGood?: string[];
  localNote?: string;
  reviewSnippet?: {
    quote: string;
    name: string;
    location: string;
    role?: string;
  };
}

export const moneyContent: Record<string, Record<string, MoneyContentEntry>> = {
  carlsbad: {
    "carpentry-woodwork": {
      intro:
        "Carpentry visits in Carlsbad often combine fence and gate repairs with trim, doors, and small framing projects. The goal is to leave things solid, square, and ready for daily use.",
      schedulingNote:
        "Many carpentry projects in Carlsbad can be completed in a single visit when materials are selected up front. Larger trim packages or multiple rooms may be broken into phases so you always know what is planned.",
      fitGood: [
        "Repairing or replacing damaged fence sections, gates, and small exterior structures.",
        "Installing new interior or exterior doors, casing, and hardware.",
        "Adding or updating baseboards, casings, and simple trim details.",
        "Assembling and anchoring small sheds or storage structures."
      ],
      fitNotGood: [
        "Full home remodels or large additions that require permits and multiple trades.",
        "Major structural changes such as moving load-bearing walls or rebuilding decks."
      ],
      localNote:
        "Common requests in Carlsbad include repairing coastal weather wear on fences and gates, refreshing interior trim before listing a home for sale, and fixing sticky doors in older homes.",
      reviewSnippet: {
        quote:
          "They repaired our side gate and a few sections of fencing in one visit, and everything closes smoothly again.",
        name: "Sarah M.",
        location: "Carlsbad, CA",
        role: "Homeowner"
      }
    },
    electrical: {
      intro:
        "Lighting and small electrical visits in Carlsbad focus on swapping fixtures, adding dimmers, and resolving simple issues that do not require a full electrical contractor.",
      schedulingNote:
        "Most lighting and small electrical projects are scheduled as focused half-day visits so there is enough time to safely test circuits and clean up before leaving.",
      fitGood: [
        "Replacing interior light fixtures and ceiling fans with existing wiring in place.",
        "Adding dimmers or smart switches where a neutral is already present.",
        "Troubleshooting non-code, non-urgent issues like a single non-working light or switch."
      ],
      fitNotGood: [
        "Main panel upgrades, new circuit runs, or whole-home rewiring.",
        "Emergency power issues such as main power loss or burning smells."
      ],
      localNote:
        "Many Carlsbad homeowners use an electrical visit to modernize key spaces like kitchens and living rooms with better lighting and fan control.",
      reviewSnippet: {
        quote:
          "Our living room feels completely different after the new lighting and dimmers. Everything was labeled and tidy.",
        name: "David R.",
        location: "Encinitas, CA",
        role: "Homeowner"
      }
    }
  }
};
