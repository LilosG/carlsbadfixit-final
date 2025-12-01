export interface MoneyContentEntry {
  intro?: string;
  schedulingNote?: string;
  fitGood?: string[];
  fitNotGood?: string[];
  localNote?: string;
  audienceNotes?: {
    homeowners?: string;
    rentals?: string;
    businesses?: string;
  };
  reviewSnippet?: {
    quote: string;
    name: string;
    location: string;
    role?: string;
  };
}

export const moneyContent: Record<string, Record<string, MoneyContentEntry>> = {
  // --------------------
  // CARLSBAD
  // --------------------
  carlsbad: {
    "carpentry-woodwork": {
      intro:
        "Carpentry visits in Carlsbad focus on trim, doors, fences, gates, and small wood details that make everyday spaces feel more finished without committing to a full remodel.",
      schedulingNote:
        "Most small carpentry projects in Carlsbad are scoped so the mess stays contained and the work can be completed in one focused visit. Larger or multi-room projects may be broken into clear phases so you always know what is planned next.",
      fitGood: [
        "Repairing or replacing sagging wood gates and small fence sections that no longer close smoothly.",
        "Installing or adjusting interior and exterior doors, casing, and basic hardware.",
        "Adding or updating baseboards, casings, and simple trim details in one or two rooms.",
        "Building or assembling small sheds, storage structures, or straightforward shelving using homeowner-approved materials."
      ],
      fitNotGood: [
        "Structural framing changes, wall removals, or projects that require engineering and permits.",
        "Large custom built-ins and cabinetry runs that belong with a dedicated cabinet shop.",
        "Big exterior deck, balcony, or pergola projects that require multi-week crews."
      ],
      localNote:
        "Many Carlsbad homes still have original builder-grade trim, fences, and doors. A focused carpentry visit is often used to tighten up the most visible areas first—entryways, living rooms, side yards, and primary bedrooms—before committing to larger projects.",
      audienceNotes: {
        homeowners:
          "Tightening up squeaky doors, refreshing trim, and repairing fences and gates so high-traffic areas in your Carlsbad home feel solid and put together.",
        rentals:
          "Quick carpentry fixes between tenants—adjusting doors, repairing trim, and tuning up fences and gates so Carlsbad rentals photograph and show well.",
        businesses:
          "Light carpentry tweaks for local offices and studios—simple shelving, wall protection, and trim repairs in the areas clients and staff see most."
      },
      reviewSnippet: {
        quote:
          "They adjusted several doors, repaired trim, and fixed our side gate so everything looks like it should have from day one.",
        name: "Sandra L.",
        location: "Carlsbad, CA",
        role: "Homeowner"
      }
    },

    electrical: {
      intro:
        "Lighting and small electrical visits in Carlsbad focus on swapping fixtures, adding dimmers, tuning fans, and resolving simple issues that do not require a full electrical contractor.",
      schedulingNote:
        "Most lighting and small electrical projects are scheduled as focused half-day visits so there is time to safely shut off circuits, verify connections, label controls, and clean up before leaving.",
      fitGood: [
        "Replacing interior light fixtures and ceiling fans where an existing, properly supported box is already in place.",
        "Adding dimmers or smart switches where a neutral is present and the box has enough depth for safe installation.",
        "Troubleshooting non-urgent issues at a single light, switch, or outlet that used to work normally.",
        "Swapping tired vanity lights, entry fixtures, and kitchen pendants for homeowner-supplied upgrades."
      ],
      fitNotGood: [
        "Main panel upgrades, new circuit runs, or whole-home rewiring projects.",
        "Emergency power issues such as burning smells, arcing, repeated breaker trips, or complete loss of power.",
        "Exterior lighting projects that require trenching, new underground wiring, or lift equipment.",
        "Work that requires opening large sections of walls or ceilings to access concealed wiring."
      ],
      localNote:
        "Many Carlsbad homeowners use an electrical visit to modernize key spaces like kitchens, living rooms, and primary bedrooms with better lighting and fan control—especially in homes that have not been updated since the early 2000s.",
      audienceNotes: {
        homeowners:
          "Upgrading everyday lighting, swapping dated fixtures, and fixing small electrical annoyances so your Carlsbad home feels brighter and easier to live in.",
        rentals:
          "Quick fixture swaps, safer outlets, and simple troubleshooting between tenants so Carlsbad rentals stay comfortable and guest-ready.",
        businesses:
          "Light electrical tweaks for small offices, studios, and client-facing spaces that need better lighting without a large project crew."
      },
      reviewSnippet: {
        quote:
          "Our living room feels completely different after the new lighting and dimmers. Everything was labeled and tidy when they left.",
        name: "David R.",
        location: "Carlsbad, CA",
        role: "Homeowner"
      }
    },

    "plumbing-fixtures-repairs": {
      intro:
        "Plumbing fixture visits in Carlsbad focus on the small, visible issues that make day-to-day life frustrating—dripping faucets, running toilets, and tired hardware that needs a clean replacement.",
      schedulingNote:
        "Most small plumbing visits in Carlsbad are scheduled with enough time to shut off water, make clean repairs, and test each fixture before turning everything back on. When several fixtures are in the same area, they are often grouped into one visit to keep costs predictable.",
      fitGood: [
        "Swapping kitchen or bath faucets with homeowner-supplied fixtures where shutoffs and access are straightforward.",
        "Replacing showerheads and hand-shower kits without opening walls or altering valves.",
        "Addressing running or constantly refilling toilets with new internal tank parts.",
        "Replacing under-sink P-traps or tailpieces that are corroded or leaking at visible joints.",
        "Installing or replacing a garbage disposer using existing electrical and plumbing connections."
      ],
      fitNotGood: [
        "Slab leaks, main line issues, or any leaks that appear inside walls, ceilings, or below grade.",
        "Full repipes, major drain replacements, or work that requires opening large areas of finished surfaces.",
        "Complex shower valve replacements that require cutting into tiled surrounds.",
        "Sewer line problems, main shutoff replacements, or work requiring specialized plumbing equipment."
      ],
      localNote:
        "In Carlsbad, it is common to see fixtures that are original to the home or have lived through years of hard water. Many visits combine faucet swaps, disposer replacements, and toilet repairs so everything in a kitchen or bath feels updated at the same time.",
      audienceNotes: {
        homeowners:
          "Taking care of drips, running toilets, and dated fixtures so kitchens and baths in your Carlsbad home feel clean, quiet, and easier to live with.",
        rentals:
          "Turnover-ready fixture swaps and basic leak repairs that keep Carlsbad rentals comfortable between guests or long-term tenants.",
        businesses:
          "Small fixture fixes for restrooms and break areas so customer and employee spaces stay presentable."
      },
      reviewSnippet: {
        quote:
          "They replaced a leaky kitchen faucet, tuned up two toilets, and left everything cleaner than when they arrived.",
        name: "Mark T.",
        location: "Carlsbad, CA",
        role: "Homeowner"
      }
    },

    "honey-do-lists-small-repairs": {
      intro:
        "Honey-do visits in Carlsbad are designed to clear a mixed list of small repairs and improvements in one trip, so you do not have to coordinate several separate service calls.",
      schedulingNote:
        "These visits are booked with a clear service window and a prioritized list. Items in the same area of the home are grouped together first so the highest-value fixes are completed within the scheduled time.",
      fitGood: [
        "A mixed list of small tasks like tightening hardware, adjusting doors, and swapping a few tired fixtures.",
        "Touch-ups before listing a Carlsbad home for sale—patching obvious wall damage, straightening hardware, and addressing small eyesores.",
        "Move-in or post-remodel punch lists where you need a second set of hands to tidy details.",
        "Adding or adjusting simple storage such as closet rods, shelves, and hooks.",
        "Basic weatherstripping, caulking touch-ups, and other quick comfort or appearance upgrades."
      ],
      fitNotGood: [
        "Full interior repainting, large-scale drywall work, or flooring replacement.",
        "Major remodels, additions, or any project that requires permits and multiple trades on site.",
        "Emergency restoration work after flooding, fire, or significant water damage.",
        "Projects where the scope is still undefined or likely to grow into a multi-week remodel."
      ],
      localNote:
        "Carlsbad homeowners often use a honey-do visit to catch up on the list of little fixes that pile up during busy seasons—especially before hosting guests or handing keys to a new tenant. Grouping those items into a single, well-planned visit keeps disruption low and results high.",
      audienceNotes: {
        homeowners:
          "Clearing the mixed list of small repairs and improvements that keeps your Carlsbad home from feeling truly finished.",
        rentals:
          "Catching up on minor issues between tenants—loose hardware, paint touch-ups, and basic repairs that keep rentals showing well.",
        businesses:
          "Straightening out small maintenance items in offices or studios so you can stay focused on clients instead of a persistent punch list."
      },
      reviewSnippet: {
        quote:
          "Our Carlsbad home finally feels caught up—door latches work, hardware is straight, and all the little issues we kept putting off are handled.",
        name: "Rachel K.",
        location: "Carlsbad, CA",
        role: "Homeowner"
      }
    },

    "furniture-assembly-installation": {
      intro:
        "Furniture assembly visits in Carlsbad focus on turning flat-pack boxes and new purchases into safe, finished pieces that are anchored and ready for daily use.",
      schedulingNote:
        "Most furniture and installation visits in Carlsbad are scheduled as focused blocks of time. Related items in the same room—beds, dressers, shelves—are grouped together so everything is assembled, leveled, and secured before we leave.",
      fitGood: [
        "Assembling beds, dressers, and nightstands in bedrooms with clear floor space.",
        "Putting together desks, bookcases, and storage pieces for home offices or living rooms.",
        "Anchoring tall furniture pieces to walls to help prevent tipping hazards.",
        "Installing wall shelves, small cabinets, and decor where standard framing is available.",
        "Hanging artwork and mirrors with straightforward access to drywall or wood backing."
      ],
      fitNotGood: [
        "Custom built-ins that require cabinet shop fabrication or detailed carpentry.",
        "Very large commercial furniture installations that need multi-person crews over several days.",
        "Hanging extremely heavy items on unknown or inaccessible framing without proper anchors or hardware.",
        "Projects that require cutting into walls to add backing or blocking in multiple locations."
      ],
      localNote:
        "Many Carlsbad visits combine furniture assembly with TV mounting or light handyman work so new spaces—especially home offices and guest rooms—can be set up in a single visit.",
      audienceNotes: {
        homeowners:
          "Getting new furniture assembled, placed, and safely anchored so rooms in your Carlsbad home are ready to use the same day.",
        rentals:
          "Setting up beds, storage, and basic decor between guests or tenants so Carlsbad rentals photograph and function well.",
        businesses:
          "Assembling desks, shelving, and simple storage for Carlsbad offices and studios without a disruptive, multi-day install."
      },
      reviewSnippet: {
        quote:
          "They assembled our bedroom furniture, anchored tall pieces, and left everything clean and ready to use.",
        name: "Kelly P.",
        location: "Carlsbad, CA",
        role: "Homeowner"
      }
    },

    "drywall-repair": {
      intro:
        "Drywall repair visits in Carlsbad focus on small to medium wall and ceiling damage—holes, cracks, and previous patches—that need to blend back into the room.",
      schedulingNote:
        "Most Carlsbad drywall repairs are scoped so patching, texture, and basic touch-up can be completed in one or two passes. For larger areas or specialty textures, work may be broken into phases with clear expectations on drying time.",
      fitGood: [
        "Patching small to medium drywall holes from door handles, accidents, or previous repairs.",
        "Repairing cracks along seams, corners, and around doors or windows.",
        "Blending new texture into existing orange peel or knockdown walls on limited areas.",
        "Prepping repaired areas for paint so walls look smooth under typical lighting.",
        "Touching up ceiling repairs after small plumbing fixes in one area."
      ],
      fitNotGood: [
        "Full-room or whole-home skim coating and resurfacing.",
        "Major water damage that requires large sections of drywall removal and remediation.",
        "Structural issues causing ongoing movement or cracking.",
        "Popcorn ceiling removal across multiple rooms."
      ],
      localNote:
        "In Carlsbad, it’s common to see dings and cracks in high-traffic spaces or near doors that have shifted over time. Many visits focus on making the most visible walls and ceilings feel clean and finished again.",
      audienceNotes: {
        homeowners:
          "Cleaning up wall and ceiling damage in the rooms you notice most so your Carlsbad home feels ready for guests and everyday life.",
        rentals:
          "Making walls presentable between tenants so Carlsbad rentals show well and photograph cleanly.",
        businesses:
          "Repairing small wall damage in offices and studios so customer-facing spaces look maintained."
      },
      reviewSnippet: {
        quote:
          "They patched several holes and cracks, matched the texture, and you can’t tell anything was repaired.",
        name: "Josh C.",
        location: "Carlsbad, CA",
        role: "Homeowner"
      }
    },

    "tv-mounting": {
      intro:
        "TV mounting visits in Carlsbad focus on safe, clean installations that keep cables organized and screens positioned for everyday watching—without risky DIY experiments.",
      schedulingNote:
        "Most TV mounting projects in Carlsbad are scoped so locating studs, mounting the bracket, hanging the TV, and basic cable routing can be completed in a single visit. Multiple TVs in nearby rooms are often grouped together.",
      fitGood: [
        "Mounting TVs on standard drywall with accessible wood studs.",
        "Installing tilt or full-motion mounts provided by the homeowner.",
        "Setting up basic soundbars and small media components on or near the TV wall.",
        "Organizing and concealing surface wiring using raceways where possible.",
        "Relocating an existing TV from a stand to a wall mount in the same room."
      ],
      fitNotGood: [
        "In-wall wiring that requires opening finished walls and running new electrical circuits.",
        "Large commercial video walls or multi-screen conference room systems.",
        "Mounting on fragile surfaces like stone or tile without proper planning and hardware.",
        "Very high or exterior installations that require special equipment or lifts."
      ],
      localNote:
        "Many Carlsbad homeowners mount TVs in living rooms, bonus rooms, and bedrooms to free up floor space and create a cleaner look, often pairing the visit with furniture assembly or minor cable management.",
      audienceNotes: {
        homeowners:
          "Getting your TVs securely mounted, centered, and cable-managed so living spaces in your Carlsbad home feel tidy and intentional.",
        rentals:
          "Mounting TVs and tidying cable runs in Carlsbad rentals so listings look clean and guest-friendly.",
        businesses:
          "Mounting TVs in waiting areas, break rooms, or small conference spaces without turning it into a big AV project."
      },
      reviewSnippet: {
        quote:
          "They mounted our living room TV, set up the soundbar, and cleaned up the cables so everything looks built-in.",
        name: "Brian S.",
        location: "Carlsbad, CA",
        role: "Homeowner"
      }
    }
  },

  // --------------------
  // OCEANSIDE
  // --------------------
  oceanside: {
    "carpentry-woodwork": {
      intro:
        "Carpentry visits in Oceanside focus on gates, fences, trim, and small wood projects that see extra wear from coastal air and regular use.",
      schedulingNote:
        "Most carpentry work in Oceanside is scheduled so damaged material can be removed, repairs made, and hardware upgraded in one focused visit. Larger fence or trim runs may be broken into clear sections.",
      fitGood: [
        "Repairing or replacing sagging wood gates and small fence sections that no longer close smoothly.",
        "Tightening up or replacing interior trim and casing that has gaps, dings, or tired caulking.",
        "Adding simple garage or shed shelving to get items off the floor.",
        "Fixing minor exterior wood details around doors or side yards that are starting to show coastal wear."
      ],
      fitNotGood: [
        "Large deck rebuilds, structural changes, or additions that require engineering and permits.",
        "Custom cabinet and millwork projects that belong in a dedicated cabinet shop.",
        "Extensive exterior rebuilds after major water or termite damage."
      ],
      localNote:
        "Oceanside homes mix older coastal cottages with newer inland construction. A focused carpentry visit is often used to tune up high-traffic entries, side yards, and trim in living areas so the house feels sturdy and well cared for.",
      audienceNotes: {
        homeowners:
          "Keeping gates, fences, and interior trim in good shape so your Oceanside home feels solid and ready for everyday use.",
        rentals:
          "Tightening up exterior gates, small fence runs, and interior trim between guests so short-term rentals look good in listing photos.",
        businesses:
          "Light carpentry fixes for Oceanside storefronts and studios—shelves, trim, and small repairs where customers notice them most."
      },
      reviewSnippet: {
        quote:
          "They repaired our Oceanside side gate and a few fence sections so everything lines up and latches again.",
        name: "Lena H.",
        location: "Oceanside, CA",
        role: "Homeowner"
      }
    },

    electrical: {
      intro:
        "Lighting and small electrical visits in Oceanside focus on making coastal homes feel brighter, safer, and more comfortable without turning every project into a full electrical remodel.",
      schedulingNote:
        "Most Oceanside electrical visits are booked as focused blocks of time so circuits can be shut off safely, fixtures swapped, and new controls tested before we leave.",
      fitGood: [
        "Swapping dated kitchen, hallway, or exterior fixtures for homeowner-supplied upgrades.",
        "Replacing noisy or unbalanced ceiling fans in bedrooms and living rooms where boxes are properly supported.",
        "Adding dimmers or simple smart switches in main living areas where wiring and box depth allow.",
        "Troubleshooting a single non-urgent issue at a light, switch, or outlet that used to work normally."
      ],
      fitNotGood: [
        "Main service panel upgrades, meter relocations, or work that needs utility coordination and permits.",
        "Whole-home rewiring projects in older Oceanside cottages with extensive legacy wiring.",
        "Emergency issues such as burning smells, arcing, or repeated breaker trips.",
        "Large exterior lighting projects that require trenching or new underground feeds."
      ],
      localNote:
        "Oceanside has a mix of older beach bungalows and newer inland homes. Many visits start with a few key fixture and fan updates so living rooms and bedrooms feel brighter and more comfortable right away.",
      audienceNotes: {
        homeowners:
          "Updating everyday lighting, ceiling fans, and switches in Oceanside homes so main rooms feel brighter and more comfortable.",
        rentals:
          "Quick fixture swaps and simple troubleshooting between guests or long-term tenants so rentals stay guest-ready.",
        businesses:
          "Light electrical adjustments for small offices and studios along the coast that need better lighting without shutting down operations."
      },
      reviewSnippet: {
        quote:
          "They swapped several fixtures and fans in our Oceanside home, labeled everything clearly, and left the place spotless.",
        name: "Jordan S.",
        location: "Oceanside, CA",
        role: "Homeowner"
      }
    },

    "plumbing-fixtures-repairs": {
      intro:
        "Plumbing fixture visits in Oceanside focus on the leaks, drips, and tired fixtures that show up faster in coastal homes and busy rentals.",
      schedulingNote:
        "Most plumbing visits in Oceanside are planned to handle several fixtures in the same part of the home so water can be shut off once, repairs made, and everything tested before leaving.",
      fitGood: [
        "Replacing kitchen and bath faucets that are corroded or no longer move smoothly.",
        "Swapping shower heads and hand showers for newer, easier-to-clean models without opening walls.",
        "Tuning up running or constantly refilling toilets with new internal tank parts.",
        "Replacing disposers and under-sink traps that are leaking at visible joints."
      ],
      fitNotGood: [
        "Slab leaks, main line issues, or any water showing up inside walls or ceilings.",
        "Full repipes, major drain replacements, or projects that require opening large areas of finished surfaces.",
        "Complex shower valve changes that need tile demo.",
        "Sewer line problems, main shutoff replacements, or work requiring specialized plumbing equipment."
      ],
      localNote:
        "Oceanside homes and rentals often have fixtures that have lived through years of hard water and coastal air. Many visits combine faucet swaps, disposer replacements, and toilet repairs so kitchens and baths feel quieter and more reliable in one trip.",
      audienceNotes: {
        homeowners:
          "Taking care of drips, running toilets, and tired fixtures so your Oceanside kitchen and baths feel cleaner and easier to live with.",
        rentals:
          "Turnover-ready fixture swaps and basic leak repairs that keep Oceanside rentals comfortable for guests and long-term tenants.",
        businesses:
          "Small fixture repairs in restrooms and break areas so coastal offices and studios stay presentable."
      },
      reviewSnippet: {
        quote:
          "They replaced two faucets, tuned up a noisy toilet, and checked everything before turning the water back on.",
        name: "Kevin L.",
        location: "Oceanside, CA",
        role: "Homeowner"
      }
    },

    "honey-do-lists-small-repairs": {
      intro:
        "Honey-do visits in Oceanside are built for the mixed lists that pile up in coastal homes—sticky doors, tired fixtures, and small eyesores that never quite make it to the top of the list.",
      schedulingNote:
        "These visits are scheduled with a clear service window and a prioritized list. Items in the same part of the home are grouped together first so the most important work is completed within the booked time.",
      fitGood: [
        "A blended list of small tasks like tightening hardware, adjusting doors and gates, and swapping dated fixtures.",
        "Touch-ups before listing an Oceanside home as a rental or for sale.",
        "Move-in punch lists after closing on a home where you want small fixes handled before furniture arrives."
      ],
      fitNotGood: [
        "Full exterior repainting, large-scale drywall replacement, or flooring projects.",
        "Major remodels, additions, or any work that requires permits and multiple trades onsite.",
        "Restoration work after serious water intrusion, flooding, or fire."
      ],
      localNote:
        "Oceanside homeowners often use a honey-do visit to catch up before guests arrive or before a busy rental season. Tackling the small, highly visible items first makes the home feel more cared for right away.",
      audienceNotes: {
        homeowners:
          "Clearing the nagging list of small repairs and upgrades so your Oceanside home feels tidy and ready for everyday life or visitors.",
        rentals:
          "Dialing in details between bookings—loose hardware, paint touch-ups, and small fixes that keep rentals reviewing well.",
        businesses:
          "Tidying up small maintenance items in coastal offices and studios so the space feels organized and professional for clients."
      },
      reviewSnippet: {
        quote:
          "Our Oceanside place finally looks ready for guests—little repairs that bothered us for months were handled in one visit.",
        name: "Elena P.",
        location: "Oceanside, CA",
        role: "Homeowner and host"
      }
    },

    "furniture-assembly-installation": {
      intro:
        "Furniture assembly visits in Oceanside focus on safely setting up new furniture and storage so rooms are ready for daily use or the next guest turn.",
      schedulingNote:
        "Most Oceanside furniture visits are planned around one or two rooms at a time so pieces can be assembled, leveled, and anchored before we move on.",
      fitGood: [
        "Assembling beds, nightstands, and dressers in guest rooms and primary bedrooms.",
        "Putting together sofas, media units, and storage for living areas.",
        "Anchoring tall furniture to walls in homes with kids, pets, or frequent guests.",
        "Hanging simple shelves, artwork, and mirrors on standard drywall surfaces.",
        "Setting up basic desks, chairs, and shelving for home offices."
      ],
      fitNotGood: [
        "Large commercial installs that require multi-day crews and staging.",
        "Custom built-in furniture that needs carpentry and design work.",
        "Very heavy or specialty items that require rigging or special equipment.",
        "Projects that require opening walls or adding blocking in many locations."
      ],
      localNote:
        "In Oceanside, many visits pair furniture assembly with small repairs or TV mounting so second homes and rentals can be set up quickly before busy seasons.",
      audienceNotes: {
        homeowners:
          "Getting new furniture assembled and placed so Oceanside rooms are ready to enjoy without a long DIY weekend.",
        rentals:
          "Setting up beds, storage, and wall decor between bookings so Oceanside rentals feel consistent and guest-ready.",
        businesses:
          "Assembling desks and basic storage for Oceanside offices and studios with minimal disruption."
      },
      reviewSnippet: {
        quote:
          "They built out two bedrooms and our small office in one visit so the place was ready for guests.",
        name: "Tyler G.",
        location: "Oceanside, CA",
        role: "Homeowner"
      }
    },

    "drywall-repair": {
      intro:
        "Drywall repair visits in Oceanside focus on patching and blending wall and ceiling damage so signs of previous repairs and moves do not distract from the space.",
      schedulingNote:
        "Most Oceanside drywall work is scoped to handle a group of small to medium patches in the same area during one visit. Larger repairs may be broken into phases to allow for proper drying between coats.",
      fitGood: [
        "Patching holes from accidents, wall anchors, or past TV mounts.",
        "Repairing cracks around doors, windows, and corners where movement has shown up.",
        "Blending new texture into existing orange peel or knockdown surfaces on limited areas.",
        "Touching up small ceiling patches after plumbing or electrical work.",
        "Smoothing out rough previous patches that stand out under normal lighting."
      ],
      fitNotGood: [
        "Wide-spread water damage or mold that requires remediation and large-scale drywall removal.",
        "Whole-home resurfacing or skim coating projects.",
        "Popcorn ceiling removal across large areas.",
        "Structural issues that continue to cause movement and new cracking."
      ],
      localNote:
        "Oceanside homes often see extra cosmetic wear in busy areas and near doors that are opened to the outside frequently. Many visits focus on making the most visible walls and ceilings feel clean and neutral again.",
      audienceNotes: {
        homeowners:
          "Cleaning up drywall issues in the hallways, living areas, and bedrooms you notice most so your Oceanside home feels calmer and more finished.",
        rentals:
          "Smoothing walls between guests so your listing photos and in-person showings look tidy.",
        businesses:
          "Repairing small wall damage in Oceanside shops, studios, and offices so customer areas look well maintained."
      },
      reviewSnippet: {
        quote:
          "They patched old TV holes and door dings and you would never know there had been damage.",
        name: "Peter W.",
        location: "Oceanside, CA",
        role: "Homeowner"
      }
    },

    "tv-mounting": {
      intro:
        "TV mounting visits in Oceanside focus on secure, clean installs that work well in both full-time residences and short-term rentals.",
      schedulingNote:
        "Most Oceanside TV installs are scoped so stud-finding, bracket mounting, TV hanging, and basic cable routing can be handled in one visit. Multiple TVs in adjacent rooms can often be grouped.",
      fitGood: [
        "Mounting TVs on interior drywall where wood studs are accessible.",
        "Installing tilt or full-motion mounts with homeowner-provided hardware.",
        "Setting up simple soundbars and streaming devices alongside the TV.",
        "Organizing surface wiring with low-profile raceways where possible.",
        "Moving TVs from stands to wall mounts to free up floor space."
      ],
      fitNotGood: [
        "In-wall wiring projects that require new power or low-voltage runs inside finished walls.",
        "Specialty installs on brick, stone, or tile that require advanced anchoring and planning.",
        "Large commercial displays and multi-screen setups.",
        "Outdoor or high-mounted TVs that need special lifts or equipment."
      ],
      localNote:
        "Oceanside homeowners and hosts often mount TVs in living rooms and bedrooms to keep spaces open, especially in smaller beach-area homes and rentals.",
      audienceNotes: {
        homeowners:
          "Mounting TVs safely and neatly so your Oceanside living spaces feel open and organized.",
        rentals:
          "Mounting TVs and taming cables so Oceanside rentals feel guest-ready and durable between stays.",
        businesses:
          "Installing TVs in lobbies, break rooms, or small meeting spaces without turning it into a major AV project."
      },
      reviewSnippet: {
        quote:
          "They mounted TVs in our living room and two bedrooms and cleaned up the mess of cables we had before.",
        name: "Gina F.",
        location: "Oceanside, CA",
        role: "Homeowner"
      }
    }
  },

  // --------------------
  // ENCINITAS
  // --------------------
  encinitas: {
    "carpentry-woodwork": {
      intro:
        "Carpentry visits in Encinitas focus on trim, built-ins, and small wood projects that make beach cottages and newer homes feel more finished and intentional.",
      schedulingNote:
        "Most carpentry projects in Encinitas are scoped to fit into a single visit, with larger trim packages or multi-room work broken into clear phases.",
      fitGood: [
        "Tuning up interior doors and casing in living areas, bedrooms, and hallways.",
        "Adding simple built-in shelving or storage in home offices and creative studios.",
        "Refreshing baseboards and trim in high-visibility rooms before new flooring or paint.",
        "Repairing damaged trim or stair details where everyday use has taken a toll."
      ],
      fitNotGood: [
        "Major structural framing changes, wall removals, or additions that require permits.",
        "Complex custom cabinetry runs that belong in a dedicated cabinet or millwork shop.",
        "Large outdoor structures like decks or pergolas that need engineering and long timelines."
      ],
      localNote:
        "Encinitas homes often blend a relaxed coastal feel with thoughtful details. Many carpentry visits tighten up those details in living rooms, offices, and entryways so the home feels more put together without a full remodel.",
      audienceNotes: {
        homeowners:
          "Bringing trim, doors, and small wood details in Encinitas homes up to the same standard as the rest of your space.",
        rentals:
          "Refreshing visible trim and storage in Encinitas rentals so they photograph well and feel cared for between tenants.",
        businesses:
          "Light carpentry improvements for studios and boutiques—shelving, wall protection, and trim where clients notice it most."
      },
      reviewSnippet: {
        quote:
          "They added shelving and tightened up our trim so the main living space finally feels finished.",
        name: "Emily R.",
        location: "Encinitas, CA",
        role: "Homeowner"
      }
    },

    electrical: {
      intro:
        "Electrical visits in Encinitas focus on lighting, fans, and small upgrades that make everyday spaces feel brighter and more comfortable without a full electrician crew.",
      schedulingNote:
        "Most small electrical projects in Encinitas are scheduled in focused blocks so fixtures can be swapped, controls updated, and everything tested within a clear service window.",
      fitGood: [
        "Replacing dated dining, kitchen, and entry fixtures with homeowner-supplied upgrades.",
        "Updating bedroom and living room ceiling fans where boxes are already properly supported.",
        "Adding dimmers or simple smart switches in main rooms where wiring and box depth allow.",
        "Troubleshooting a single non-urgent issue at an outlet, light, or switch."
      ],
      fitNotGood: [
        "Panel upgrades, new subpanels, and whole-home rewiring projects.",
        "New circuit runs for large appliances, EV chargers, or additions.",
        "Emergency electrical issues such as burning smells or repeated breaker trips.",
        "Extensive exterior or landscape lighting requiring new underground wiring."
      ],
      localNote:
        "In Encinitas, many projects center on making main living spaces feel brighter and more flexible, especially in homes with combined living, dining, and workspace areas.",
      audienceNotes: {
        homeowners:
          "Updating key fixtures and controls so Encinitas homes feel brighter and more comfortable for day-to-day life.",
        rentals:
          "Swapping tired fixtures and resolving simple electrical annoyances between tenants in Encinitas rentals.",
        businesses:
          "Light electrical updates for creative studios and small offices that need better lighting without a full remodel."
      },
      reviewSnippet: {
        quote:
          "Our main living space feels completely different with the new lighting and dimmers.",
        name: "Megan T.",
        location: "Encinitas, CA",
        role: "Homeowner"
      }
    },

    "plumbing-fixtures-repairs": {
      intro:
        "Plumbing visits in Encinitas focus on visible fixtures and small leaks in kitchens and baths so day-to-day life feels easier and quieter.",
      schedulingNote:
        "Most Encinitas plumbing visits are planned to handle several fixtures in the same area of the home so shutoffs, repairs, and testing can all happen within one window.",
      fitGood: [
        "Swapping faucets and fixtures in kitchens and baths where access and shutoffs are straightforward.",
        "Replacing shower heads and hand showers for updated flow and easier cleaning.",
        "Addressing running or constantly refilling toilets with new internal tank components.",
        "Replacing disposers and accessible under-sink traps that are leaking at visible joints."
      ],
      fitNotGood: [
        "Hidden leaks in walls or ceilings, slab leaks, or main line problems.",
        "Full repipes, major drain replacements, or large projects needing multiple trades.",
        "Complex valve work that requires cutting into tiled surrounds.",
        "Sewer line replacements or work that requires advanced plumbing equipment."
      ],
      localNote:
        "Encinitas homeowners often use a plumbing visit to tackle a small group of fixtures at once so a kitchen or bath feels updated without waiting for a bigger remodel.",
      audienceNotes: {
        homeowners:
          "Refreshing day-to-day fixtures so kitchens and baths in Encinitas homes feel quieter, cleaner, and easier to live with.",
        rentals:
          "Handling small leaks and fixture swaps between tenants to keep Encinitas rentals in good shape.",
        businesses:
          "Taking care of small plumbing issues in restrooms and break rooms so studios and offices stay professional."
      },
      reviewSnippet: {
        quote:
          "They took care of our dripping faucets and a running toilet in one visit and left everything tidy.",
        name: "James P.",
        location: "Encinitas, CA",
        role: "Homeowner"
      }
    },

    "honey-do-lists-small-repairs": {
      intro:
        "Honey-do visits in Encinitas are built for mixed lists that blend small carpentry, fixtures, and finishing details into one focused trip.",
      schedulingNote:
        "These visits are booked with a prioritized list so work can move efficiently from one area of the home to the next, starting with the items you care about most.",
      fitGood: [
        "A mixed list of small tasks like tightening hardware, patching a few wall dings, and swapping simple fixtures.",
        "Pre-listing touch-ups before putting an Encinitas home on the market.",
        "Move-in punch lists where you want a second set of hands on the details before furniture is fully in place."
      ],
      fitNotGood: [
        "Whole-home painting, large drywall projects, or flooring replacement.",
        "Major remodels or additions that require plans, permits, and multiple trades.",
        "Emergency restoration work after serious water or fire damage."
      ],
      localNote:
        "Encinitas homeowners often book honey-do visits to catch up on the kind of details that make a home feel considered—especially in open living spaces and home offices.",
      audienceNotes: {
        homeowners:
          "Clearing the collection of small repairs and improvements that keep your Encinitas home from feeling fully finished.",
        rentals:
          "Catching up on small issues between tenants so Encinitas rentals photograph and show well.",
        businesses:
          "Tidying up small maintenance items in studios and offices so clients see a space that matches your brand."
      },
      reviewSnippet: {
        quote:
          "They knocked out our Encinitas punch list in one visit, and all the little annoyances are finally gone.",
        name: "Sophie K.",
        location: "Encinitas, CA",
        role: "Homeowner"
      }
    },

    "furniture-assembly-installation": {
      intro:
        "Furniture assembly visits in Encinitas focus on setting up pieces for homes that double as work, creative, and family spaces so everything feels intentional and safe.",
      schedulingNote:
        "Most Encinitas furniture visits are planned to complete one or two rooms at a time—assembling, placing, and anchoring pieces before moving on.",
      fitGood: [
        "Assembling beds, dressers, and storage in bedrooms and guest rooms.",
        "Building out desks, shelving, and seating for home offices and creative studios.",
        "Anchoring tall bookcases and cabinets to walls for extra safety.",
        "Installing wall shelves and simple cabinets on standard drywall surfaces.",
        "Hanging artwork and mirrors where framing is straightforward to locate."
      ],
      fitNotGood: [
        "Custom built-ins that require design work, carpentry, and finishing.",
        "Large commercial furniture installs needing multiple techs and long schedules.",
        "Very heavy or specialty items that require special rigging or engineering.",
        "Projects that include moving existing heavy furniture between floors."
      ],
      localNote:
        "Encinitas homeowners often combine furniture assembly with small handyman tasks so open-plan spaces and studios feel organized without a big remodel.",
      audienceNotes: {
        homeowners:
          "Getting new furniture set up and secured so Encinitas rooms feel functional and calm rather than cluttered with boxes.",
        rentals:
          "Assembling and anchoring key pieces between tenants so Encinitas rentals stay comfortable and safe.",
        businesses:
          "Setting up desks, shelving, and basic storage for Encinitas offices and studios without a disruptive rollout."
      },
      reviewSnippet: {
        quote:
          "They assembled several pieces for our home office and studio, anchored what needed anchoring, and cleaned everything up.",
        name: "Alex N.",
        location: "Encinitas, CA",
        role: "Homeowner"
      }
    },

    "drywall-repair": {
      intro:
        "Drywall repair visits in Encinitas focus on smoothing out wall and ceiling damage so the eye falls on your space—not on old patches or cracks.",
      schedulingNote:
        "Most drywall work in Encinitas is scoped to handle a cluster of repairs in the same rooms so patching, texture, and basic touch-up can wrap up within one visit or clearly defined phases.",
      fitGood: [
        "Patching holes from artwork, shelving, and light remodeling work.",
        "Repairing cracks at corners, ceilings, and around doors or windows.",
        "Blending limited areas of new texture into existing walls.",
        "Smoothing and refining previous patches that stand out under natural light.",
        "Touching up small ceiling areas after minor plumbing or electrical fixes."
      ],
      fitNotGood: [
        "Large-scale damage across multiple rooms from leaks or structural issues.",
        "Whole-home re-texturing and skim coating.",
        "Popcorn ceiling removal throughout the house.",
        "Ongoing movement or structural issues that continue to open new cracks."
      ],
      localNote:
        "In Encinitas, natural light often makes imperfections more noticeable. Many visits target the most visible living spaces so they feel calm and cohesive again.",
      audienceNotes: {
        homeowners:
          "Cleaning up damaged walls and ceilings in the open living and work areas you use every day.",
        rentals:
          "Smoothing walls between tenants so Encinitas rentals show well and feel maintained.",
        businesses:
          "Repairing wall damage in customer-facing Encinitas studios and offices so the space reflects your brand."
      },
      reviewSnippet: {
        quote:
          "They fixed several cracks and rough patches, and the walls finally match the rest of the room.",
        name: "Taylor H.",
        location: "Encinitas, CA",
        role: "Homeowner"
      }
    },

    "tv-mounting": {
      intro:
        "TV mounting visits in Encinitas focus on clean, safe installs that work with relaxed, multi-use living spaces.",
      schedulingNote:
        "Most Encinitas TV installs are planned to locate studs, mount brackets, hang TVs, and organize basic cables in a single visit. Multiple TVs in connected spaces can often be handled together.",
      fitGood: [
        "Mounting TVs on standard drywall with accessible stud framing.",
        "Installing tilt or full-motion mounts for living rooms and bedrooms.",
        "Integrating small soundbars and streaming devices into the setup.",
        "Tidying surface wiring with low-profile raceways where appropriate.",
        "Moving TVs off of furniture and onto walls to free up floor space."
      ],
      fitNotGood: [
        "In-wall wiring that requires new electrical or low-voltage runs in finished walls.",
        "Mounting on stone or tile fireplaces without special planning and hardware.",
        "Complex commercial AV setups with multiple screens and audio zones.",
        "Outdoor or high-mounted TVs that need specialized lifts or safety measures."
      ],
      localNote:
        "Encinitas homes often mix living, work, and creative areas in the same rooms. Mounting TVs cleanly helps keep those spaces flexible and uncluttered.",
      audienceNotes: {
        homeowners:
          "Mounting TVs so Encinitas living spaces feel open and intentional rather than dominated by equipment.",
        rentals:
          "Installing TVs in rentals so guests have an easy-to-use setup that stands up to frequent use.",
        businesses:
          "Mounting TVs in small meeting rooms, studios, and lobbies without turning it into a full AV project."
      },
      reviewSnippet: {
        quote:
          "They mounted our TVs in the living room and bedroom, set up the basics, and left everything looking clean.",
        name: "Jared F.",
        location: "Encinitas, CA",
        role: "Homeowner"
      }
    }
  },

  // --------------------
  // VISTA
  // --------------------
  vista: {
    "carpentry-woodwork": {
      intro:
        "Carpentry visits in Vista focus on fences, gates, and interior trim that see a lot of use in busy households.",
      schedulingNote:
        "Most Vista carpentry projects are scoped so key repairs and upgrades can be completed in one visit, with larger fence or trim runs split into clear sections.",
      fitGood: [
        "Repairing or replacing small sections of fencing and gates that no longer close properly.",
        "Adjusting interior doors and trim in high-traffic rooms and hallways.",
        "Adding simple shelving or storage solutions in garages, laundry rooms, and closets.",
        "Fixing minor exterior wood details around doors and steps that are starting to show wear."
      ],
      fitNotGood: [
        "Full fence replacements across an entire property line.",
        "Major structural framing changes or additions that require permits.",
        "Large deck projects or extensive exterior rebuilds."
      ],
      localNote:
        "Vista homeowners often start with the most visible and heavily used areas—front gates, side yards, and main living spaces—so the home feels solid and easier to live in day to day.",
      audienceNotes: {
        homeowners:
          "Keeping fences, gates, and interior trim in good working order so your Vista home feels cared for.",
        rentals:
          "Tightening up exterior gates and interior woodwork between tenants so Vista rentals are easier to manage.",
        businesses:
          "Basic carpentry tweaks for Vista offices and service businesses—shelves, trim, and small repairs where customers notice."
      },
      reviewSnippet: {
        quote:
          "They fixed our side gate and cleaned up some interior trim so everything finally lines up and closes like it should.",
        name: "Carlos G.",
        location: "Vista, CA",
        role: "Homeowner"
      }
    },

    electrical: {
      intro:
        "Electrical visits in Vista focus on lighting, fans, and small troubleshooting so everyday spaces are brighter and safer.",
      schedulingNote:
        "Most Vista electrical work is scheduled as a focused visit that groups fixtures in the same area of the home to keep things efficient.",
      fitGood: [
        "Replacing interior light fixtures and ceiling fans using existing, properly supported boxes.",
        "Adding dimmers or simple smart switches where wiring allows.",
        "Troubleshooting a single outlet, light, or switch that has stopped working.",
        "Refreshing vanity lights or entry fixtures with homeowner-supplied options."
      ],
      fitNotGood: [
        "Panel replacements, service upgrades, or new subpanels.",
        "Running new circuits for large appliances or additions.",
        "Emergency electrical issues involving burning smells, arcing, or repeat breaker trips.",
        "Large outdoor lighting projects needing trenching or special equipment."
      ],
      localNote:
        "Vista properties range from older homes to newer builds. Many projects start with getting main living spaces and bedrooms properly lit and comfortable with updated fixtures and fans.",
      audienceNotes: {
        homeowners:
          "Updating lighting and controls so Vista homes feel brighter and more comfortable without a full electrical remodel.",
        rentals:
          "Swapping out tired fixtures and handling basic troubleshooting between tenants in Vista rentals.",
        businesses:
          "Light electrical updates for offices and service spaces that need better lighting on a predictable schedule."
      },
      reviewSnippet: {
        quote:
          "They updated several fixtures and a couple of switches in our Vista home and explained everything clearly.",
        name: "Nina A.",
        location: "Vista, CA",
        role: "Homeowner"
      }
    },

    "plumbing-fixtures-repairs": {
      intro:
        "Plumbing visits in Vista focus on small fixture repairs and replacements so leaks and drips do not linger on your to-do list.",
      schedulingNote:
        "Most Vista plumbing visits are scheduled so several fixtures in the same area of the home can be handled at once for predictable timing and cost.",
      fitGood: [
        "Replacing faucets and shutoffs in kitchens and baths where access is straightforward.",
        "Swapping shower heads and hand showers without opening walls.",
        "Tuning up running or constantly refilling toilets with new internal parts.",
        "Replacing disposers and accessible under-sink traps that are leaking at visible joints."
      ],
      fitNotGood: [
        "Slab leaks, main line issues, or water showing up inside walls or ceilings.",
        "Large repiping or drain projects that require opening extensive finished surfaces.",
        "Complex shower valve changes that need tile demo.",
        "Sewer line issues or main shutoff replacements needing specialized equipment."
      ],
      localNote:
        "Vista homes often see a mix of older and newer plumbing fixtures. Many visits combine several small fixes so a kitchen or bath feels updated and quiet again.",
      audienceNotes: {
        homeowners:
          "Taking care of drips, running toilets, and tired fixtures so Vista kitchens and baths feel easier to live with.",
        rentals:
          "Handling basic fixture repairs and replacements between tenants in Vista rentals to prevent small issues from growing.",
        businesses:
          "Making small plumbing fixes in restrooms and sinks so Vista offices and shops stay pleasant for staff and customers."
      },
      reviewSnippet: {
        quote:
          "They quickly handled a leaky faucet and a running toilet and checked everything before they left.",
        name: "Derek L.",
        location: "Vista, CA",
        role: "Homeowner"
      }
    },

    "honey-do-lists-small-repairs": {
      intro:
        "Honey-do visits in Vista are built for mixed lists of small tasks so one visit can make your home feel noticeably more put together.",
      schedulingNote:
        "Visits are scheduled with a clear list and priorities so the most important items are completed first, often grouped by room or area of the home.",
      fitGood: [
        "A combination of small tasks like patching wall dings, tightening hardware, and adjusting doors.",
        "Touch-ups before move-in or after a tenant moves out.",
        "Clearing a backlog of minor issues that keep your Vista home from feeling finished."
      ],
      fitNotGood: [
        "Large painting projects, major drywall replacement, or flooring work.",
        "Full remodels or additions that require several trades on site.",
        "Emergency restoration work after significant water or fire damage."
      ],
      localNote:
        "Vista homeowners and small landlords often use honey-do visits to get through a backlog of smaller issues in one planned trip instead of several separate service calls.",
      audienceNotes: {
        homeowners:
          "Clearing the pile of small repairs and improvements that keep your Vista home from feeling dialed in.",
        rentals:
          "Handling move-in and move-out punch lists efficiently between tenants in Vista.",
        businesses:
          "Tackling small maintenance items in Vista workspaces so you can stay focused on operations."
      },
      reviewSnippet: {
        quote:
          "They went through our list one by one and left the house feeling much more put together.",
        name: "Andrea F.",
        location: "Vista, CA",
        role: "Homeowner"
      }
    },

    "furniture-assembly-installation": {
      intro:
        "Furniture assembly visits in Vista focus on making sure new pieces are assembled correctly, safely anchored, and placed where they actually work for your household.",
      schedulingNote:
        "Most Vista furniture visits are scheduled around one or two rooms at a time, grouping related pieces so everything is assembled and in position before the visit wraps.",
      fitGood: [
        "Assembling beds, dressers, and storage pieces for bedrooms and guest rooms.",
        "Setting up desks, shelving, and seating for home offices or homework areas.",
        "Anchoring tall furniture in homes with kids, pets, or busy traffic.",
        "Installing simple wall shelves and hooks on standard framed walls.",
        "Hanging artwork and mirrors on drywall where framing is accessible."
      ],
      fitNotGood: [
        "Custom furniture installations that require carpentry or built-in fabrication.",
        "Large commercial rollouts with many workstations and a fixed corporate spec.",
        "Very heavy pieces that need special rigging or additional labor to move.",
        "Projects that require moving existing large furniture between floors."
      ],
      localNote:
        "Vista households often need help getting furniture from boxes to fully functioning rooms, especially when juggling work, school, and family schedules.",
      audienceNotes: {
        homeowners:
          "Getting new furniture assembled and anchored so rooms in your Vista home feel usable and safe right away.",
        rentals:
          "Setting up beds and storage between tenants so Vista rentals are ready for new move-ins.",
        businesses:
          "Assembling desks and basic storage for Vista offices and service spaces without a big disruption."
      },
      reviewSnippet: {
        quote:
          "They assembled and placed several pieces that had been sitting in boxes and now the rooms finally feel finished.",
        name: "Sarah J.",
        location: "Vista, CA",
        role: "Homeowner"
      }
    },

    "drywall-repair": {
      intro:
        "Drywall repair visits in Vista focus on patching and blending damage so everyday wear and previous projects do not stand out on your walls.",
      schedulingNote:
        "Most Vista drywall work is scoped to take care of a set of patches in the same part of the home so patching, texture, and light touch-up can be completed efficiently.",
      fitGood: [
        "Patching small to medium holes from accidents, installs, or old hardware.",
        "Repairing cracks at corners, seams, and around windows or doors.",
        "Blending small areas of new texture into existing walls.",
        "Smoothing out rough or uneven older patches.",
        "Touching up small ceiling repairs after minor leaks or trades work."
      ],
      fitNotGood: [
        "Large-scale water damage or mold that needs remediation and major replacement.",
        "Whole-home skim coating or complete texture changes.",
        "Popcorn ceiling removal across multiple rooms.",
        "Structural or foundation issues that continue to cause new cracks."
      ],
      localNote:
        "Vista homes see plenty of day-to-day use. Many drywall visits focus on high-traffic spaces like hallways, entries, and living rooms so the most noticeable surfaces feel clean again.",
      audienceNotes: {
        homeowners:
          "Cleaning up visible drywall problems in the parts of your Vista home you walk through and see all day.",
        rentals:
          "Making walls presentable between tenants so Vista rentals show as cared for rather than worn out.",
        businesses:
          "Repairing small wall damage in Vista offices and shops so customer areas look maintained."
      },
      reviewSnippet: {
        quote:
          "They fixed several problem spots around the house and the walls look much better under normal lighting.",
        name: "Omar K.",
        location: "Vista, CA",
        role: "Homeowner"
      }
    },

    "tv-mounting": {
      intro:
        "TV mounting visits in Vista focus on safe, practical installations that keep family rooms and bedrooms comfortable and uncluttered.",
      schedulingNote:
        "Most Vista TV installs are scoped to mount one or more TVs in the same general area of the home so bracket installation, TV hanging, and cable organizing can happen in a single visit.",
      fitGood: [
        "Mounting TVs on interior drywall with accessible studs.",
        "Installing tilt or full-motion mounts for living areas and bedrooms.",
        "Setting up basic soundbars and small media devices along with the TV.",
        "Tidying surface wiring using raceways or neat routing where possible.",
        "Transitioning TVs from stands or bulky furniture onto walls."
      ],
      fitNotGood: [
        "In-wall power or signal runs that require new electrical circuits or major wall work.",
        "Complex multi-screen or commercial AV systems.",
        "Mounting on masonry or tile surfaces without appropriate planning.",
        "Outdoor or unusually high installs needing specialized safety equipment."
      ],
      localNote:
        "Vista homes often benefit from getting TVs off bulky furniture and onto walls so living rooms and bedrooms feel more open.",
      audienceNotes: {
        homeowners:
          "Mounting TVs so main rooms in your Vista home feel more open, safe, and organized.",
        rentals:
          "Installing wall-mounted TVs in rentals so spaces are durable and easy to clean between tenants.",
        businesses:
          "Mounting TVs in waiting areas, break rooms, or conference spaces without a huge AV project."
      },
      reviewSnippet: {
        quote:
          "They mounted our TVs in the family room and bedroom and cleaned up the cable mess we had before.",
        name: "Henry L.",
        location: "Vista, CA",
        role: "Homeowner"
      }
    }
  },

  // --------------------
  // SAN MARCOS
  // --------------------
  "san-marcos": {
    "carpentry-woodwork": {
      intro:
        "Carpentry visits in San Marcos focus on interior trim, doors, and small wood projects that personalize townhomes, condos, and single-family homes.",
      schedulingNote:
        "Most carpentry projects in San Marcos are scoped to fit into a single visit, with larger upgrades broken into clear phases by room or level.",
      fitGood: [
        "Adjusting and tightening interior doors and trim in newer homes where things never quite lined up.",
        "Adding simple shelving, cubbies, or storage in entryways, lofts, and home offices.",
        "Refreshing baseboards or casing in a few high-visibility rooms.",
        "Repairing small wood details around stairs and railings that see daily use."
      ],
      fitNotGood: [
        "Large structural changes or additions that require engineering and permits.",
        "Complex custom built-ins better suited for a cabinet shop.",
        "Deck and exterior structure rebuilds that need long timelines."
      ],
      localNote:
        "San Marcos has a large mix of newer construction. Many carpentry visits focus on making those spaces feel less builder-basic and more tailored to how you actually live.",
      audienceNotes: {
        homeowners:
          "Customizing trim and small wood details so your San Marcos home feels more like yours and less like a spec house.",
        rentals:
          "Tightening up doors and trim so student and faculty rentals feel solid and easy to maintain.",
        businesses:
          "Light carpentry improvements in San Marcos offices and suites—shelving, trim, and small tweaks where customers notice."
      },
      reviewSnippet: {
        quote:
          "They added storage and cleaned up our trim so the main floor feels much more finished.",
        name: "Lauren P.",
        location: "San Marcos, CA",
        role: "Homeowner"
      }
    },

    electrical: {
      intro:
        "Electrical visits in San Marcos focus on lighting, fan, and small control upgrades in townhomes, condos, and single-family homes.",
      schedulingNote:
        "Most small electrical projects in San Marcos are scheduled as tidy, focused visits that group fixtures in the same rooms or areas.",
      fitGood: [
        "Swapping out builder-basic fixtures for homeowner-selected options in dining, kitchen, or entry areas.",
        "Updating bedroom and living room ceiling fans to quieter, more efficient models.",
        "Adding dimmers or simple smart switches where wiring allows.",
        "Troubleshooting a single outlet, light, or switch that used to work but now needs attention."
      ],
      fitNotGood: [
        "Panel upgrades, new meter locations, or service size changes.",
        "New circuit runs for EV chargers, additions, or large equipment.",
        "Emergency electrical issues with burning smells or repeated breaker trips.",
        "Extensive outdoor or common-area lighting projects managed by an HOA."
      ],
      localNote:
        "In San Marcos, many projects are about upgrading the feel of newer spaces rather than starting from scratch—especially in open-plan living and kitchen areas.",
      audienceNotes: {
        homeowners:
          "Upgrading key fixtures and controls so San Marcos homes feel brighter and easier to use day to day.",
        rentals:
          "Swapping fixtures and resolving small electrical annoyances between tenants in San Marcos rentals.",
        businesses:
          "Light electrical updates for local offices and studios that need better lighting on a predictable schedule."
      },
      reviewSnippet: {
        quote:
          "They replaced several builder-basic fixtures and added a couple of dimmers, which made a big difference.",
        name: "Chris D.",
        location: "San Marcos, CA",
        role: "Homeowner"
      }
    },

    "plumbing-fixtures-repairs": {
      intro:
        "Plumbing fixture visits in San Marcos focus on small, visible updates that make kitchens and baths feel more tailored and easier to use.",
      schedulingNote:
        "Most plumbing visits in San Marcos are planned to address several fixtures in the same room or area so work stays efficient and predictable.",
      fitGood: [
        "Replacing kitchen and bath faucets with homeowner-supplied fixtures.",
        "Swapping shower heads and hand showers for better performance.",
        "Tuning up running toilets with new internal tank parts.",
        "Replacing disposers and simple under-sink drains that are leaking at visible joints."
      ],
      fitNotGood: [
        "Hidden leaks in walls or ceilings, slab leaks, or main line problems.",
        "Large-scale repiping or drain replacements that need extensive demo.",
        "Complex valve changes behind tile that require significant tile work.",
        "Sewer line issues or main shutoff replacements requiring specialized crews."
      ],
      localNote:
        "San Marcos homes often start with decent fixtures that eventually need an upgrade. Many visits bundle faucet swaps and toilet repairs so spaces feel updated without a renovation.",
      audienceNotes: {
        homeowners:
          "Refreshing fixtures so San Marcos kitchens and baths feel cleaner, quieter, and easier to live with.",
        rentals:
          "Handling fixture swaps and basic repairs between tenants so rentals stay comfortable and low-maintenance.",
        businesses:
          "Small plumbing fixes in restrooms and break areas so local offices stay pleasant for staff and visitors."
      },
      reviewSnippet: {
        quote:
          "They replaced a couple of faucets and tuned up two toilets in one visit and cleaned up everything before leaving.",
        name: "Olivia H.",
        location: "San Marcos, CA",
        role: "Homeowner"
      }
    },

    "honey-do-lists-small-repairs": {
      intro:
        "Honey-do visits in San Marcos are designed to take care of the mixed list of small fixes that come with busy households and rentals.",
      schedulingNote:
        "Each visit is scheduled with a clear list and priority order so work flows smoothly and the most important items are completed first.",
      fitGood: [
        "A mix of tightening hardware, patching small wall damage, and swapping simple fixtures.",
        "Move-in or move-out lists for rentals and family homes.",
        "Pre-listing touch-ups before professional photos or showings."
      ],
      fitNotGood: [
        "Large painting projects, extensive drywall replacement, or flooring work.",
        "Remodels or additions that require multiple trades and permits.",
        "Restoration after major water or fire damage."
      ],
      localNote:
        "San Marcos homeowners and landlords often use honey-do visits to keep homes and rentals ready for the next season, school year, or tenant change without engaging multiple contractors.",
      audienceNotes: {
        homeowners:
          "Clearing the backlog of small tasks so your San Marcos home feels caught up and easier to maintain.",
        rentals:
          "Handling student and faculty rental punch lists between leases.",
        businesses:
          "Tidying up small repairs and adjustments in San Marcos workspaces so you can stay focused on your business."
      },
      reviewSnippet: {
        quote:
          "They moved through our list efficiently and left our place feeling ready for the next chapter.",
        name: "Ethan R.",
        location: "San Marcos, CA",
        role: "Homeowner"
      }
    },

    "furniture-assembly-installation": {
      intro:
        "Furniture assembly visits in San Marcos focus on turning newer construction and campus-adjacent homes into finished, functional spaces.",
      schedulingNote:
        "Most San Marcos furniture visits are planned to complete one living area, office, or set of bedrooms at a time so furniture is assembled, placed, and anchored before we move on.",
      fitGood: [
        "Assembling bedroom sets, desks, and storage in townhomes, condos, and single-family homes.",
        "Setting up workstations for home offices and hybrid workers.",
        "Anchoring tall furniture for added safety in homes with kids or roommates.",
        "Installing simple shelving and hooks in entries, laundry rooms, and garages.",
        "Hanging artwork and mirrors on drywall in main living areas."
      ],
      fitNotGood: [
        "Large commercial rollouts that require many installers over multiple days.",
        "Custom built-in furniture that needs carpentry and finishing.",
        "Very heavy, specialty items that require rigging or professional movers.",
        "Projects that involve moving existing heavy furniture between floors or buildings."
      ],
      localNote:
        "San Marcos homes often see frequent furniture changes as families grow and students and faculty move in and out. Many visits combine assembly and small handyman tasks so spaces feel ready quickly.",
      audienceNotes: {
        homeowners:
          "Getting new furniture out of boxes and fully set up so your San Marcos home feels settled instead of in transition.",
        rentals:
          "Outfitting student and faculty rentals with assembled, anchored pieces between leases.",
        businesses:
          "Assembling desks, shelving, and simple storage for San Marcos offices and studios with minimal downtime."
      },
      reviewSnippet: {
        quote:
          "They put together several pieces and anchored tall ones so our place feels much more livable and safe.",
        name: "Holly W.",
        location: "San Marcos, CA",
        role: "Homeowner"
      }
    },

    "drywall-repair": {
      intro:
        "Drywall repair visits in San Marcos focus on patching and blending damage so newer homes and condos stay looking fresh instead of scuffed and patched.",
      schedulingNote:
        "Most drywall work in San Marcos is scoped to handle multiple small to medium repairs within the same visit, with clear expectations if a second pass is needed for drying time.",
      fitGood: [
        "Patching holes left behind by TV mounts, decor, and shelving.",
        "Repairing cracks at corners, stairwells, and around openings.",
        "Blending small areas of new texture into existing finishes.",
        "Smoothing rough previous repairs so walls look consistent.",
        "Touching up small ceiling areas after minor leaks or trade work."
      ],
      fitNotGood: [
        "Widespread water damage or mold that requires remediation and major replacement.",
        "Whole-home skim coating or complete texture changes.",
        "Popcorn ceiling removal across large spaces.",
        "Structural problems that continue to produce new cracks."
      ],
      localNote:
        "San Marcos has a large inventory of newer homes where a few highly visible repairs can dramatically improve how tidy a space feels.",
      audienceNotes: {
        homeowners:
          "Cleaning up drywall issues in the main living, kitchen, and hallway areas where you notice them daily.",
        rentals:
          "Making walls presentable between leases so San Marcos rentals feel fresh for the next tenant.",
        businesses:
          "Repairing wall damage in San Marcos offices and suites so customer areas align with your professional image."
      },
      reviewSnippet: {
        quote:
          "They patched old mount holes and a few cracks so our walls finally look like they did when we moved in.",
        name: "Zach R.",
        location: "San Marcos, CA",
        role: "Homeowner"
      }
    },

    "tv-mounting": {
      intro:
        "TV mounting visits in San Marcos focus on clean, secure installs that work well in open-plan living areas, townhomes, and student rentals.",
      schedulingNote:
        "Most San Marcos TV installs are designed so bracket mounting, TV hanging, and basic cable organization can be completed in a single visit, often for more than one TV in the same home.",
      fitGood: [
        "Mounting TVs on interior walls where wood studs are accessible.",
        "Installing tilt or full-motion mounts for living rooms, lofts, and bedrooms.",
        "Setting up simple soundbars and media devices with the TV.",
        "Organizing surface wiring with low-profile raceways where appropriate.",
        "Transferring TVs from stands to wall mounts in the same rooms."
      ],
      fitNotGood: [
        "In-wall wiring projects that need new circuits or extensive wall work.",
        "Complex multi-screen or commercial AV systems.",
        "Mounts on stone or tile surfaces without special planning and anchors.",
        "Outdoor TVs in exposed areas that need special protection."
      ],
      localNote:
        "San Marcos households and rentals often benefit from mounted TVs that free up floor space and reduce the risk of bumps and tip-overs in busy rooms.",
      audienceNotes: {
        homeowners:
          "Mounting TVs so your San Marcos living areas feel open, safe, and easier to arrange.",
        rentals:
          "Installing mounted TVs in rentals for durability and neatness between tenants.",
        businesses:
          "Mounting TVs in conference rooms and common spaces without a complex AV project."
      },
      reviewSnippet: {
        quote:
          "They mounted our TVs in the living room and loft space and made the wiring look neat instead of cluttered.",
        name: "Brent H.",
        location: "San Marcos, CA",
        role: "Homeowner"
      }
    }
  },

  // --------------------
  // BRESSI RANCH
  // --------------------
  "bressi-ranch": {
    "carpentry-woodwork": {
      intro:
        "Carpentry visits in Bressi Ranch focus on trim, built-ins, and small exterior details that keep planned community homes feeling sharp and well cared for.",
      schedulingNote:
        "Most Bressi Ranch carpentry projects are scoped to fit into a single visit, with larger trim or built-in work broken into clear phases by room.",
      fitGood: [
        "Tuning up interior doors, casings, and baseboards in high-visibility areas.",
        "Adding simple built-ins or shelving in lofts, home offices, and living rooms.",
        "Repairing small exterior wood details such as side-yard gates or trim around doors.",
        "Adjusting stair and railing details that see daily use."
      ],
      fitNotGood: [
        "Large structural changes or additions that require HOA approval and permits.",
        "Complex custom cabinetry better suited for a cabinet shop.",
        "Major deck or exterior structure rebuilds."
      ],
      localNote:
        "Bressi Ranch homes often start with a strong baseline of trim and details. Many carpentry visits focus on personalizing those details and keeping gates and small exterior elements in good working order.",
      audienceNotes: {
        homeowners:
          "Fine-tuning trim and small wood details so your Bressi Ranch home feels polished and tailored.",
        rentals:
          "Keeping doors, trim, and small exterior elements in good shape between tenants so homes show well.",
        businesses:
          "Light carpentry adjustments for neighborhood offices and studios that serve Bressi Ranch residents."
      },
      reviewSnippet: {
        quote:
          "They cleaned up our trim and fixed a side gate so everything looks and works the way it should.",
        name: "Hannah S.",
        location: "Bressi Ranch, CA",
        role: "Homeowner"
      }
    },

    electrical: {
      intro:
        "Electrical visits in Bressi Ranch focus on upgrading builder-basic fixtures, fans, and controls so homes feel more custom and comfortable.",
      schedulingNote:
        "Most small electrical projects in Bressi Ranch are structured as focused visits that group fixtures in the same rooms or areas.",
      fitGood: [
        "Replacing stock dining, kitchen, and entry fixtures with homeowner-selected upgrades.",
        "Updating bedroom and living room ceiling fans to quieter, more efficient models.",
        "Adding dimmers or simple smart switches for better control in main living spaces.",
        "Troubleshooting a single non-urgent outlet, switch, or light issue."
      ],
      fitNotGood: [
        "Panel changes, meter moves, or service size upgrades.",
        "New circuit runs for major equipment or additions.",
        "Emergency electrical problems with burning smells or arcing.",
        "Large landscape lighting projects that require new wiring."
      ],
      localNote:
        "Many Bressi Ranch projects center on replacing stock fixtures and controls with options that better match how you actually use each room.",
      audienceNotes: {
        homeowners:
          "Upgrading lighting and fan control so your Bressi Ranch home feels less builder-basic and more tailored.",
        rentals:
          "Refreshing fixtures between tenants so homes remain attractive and easy to rent.",
        businesses:
          "Light electrical improvements for local offices and studios serving the community."
      },
      reviewSnippet: {
        quote:
          "Swapping out a few key fixtures made our main floor feel like a different house.",
        name: "Paul J.",
        location: "Bressi Ranch, CA",
        role: "Homeowner"
      }
    },

    "plumbing-fixtures-repairs": {
      intro:
        "Plumbing visits in Bressi Ranch focus on fixture upgrades and small repairs that improve day-to-day comfort without major construction.",
      schedulingNote:
        "Most plumbing visits here are planned to handle several fixtures in the same kitchen or bath so shutdowns and testing happen once.",
      fitGood: [
        "Replacing kitchen and bath faucets with upgraded homeowner-supplied options.",
        "Swapping shower heads and hand showers for better performance.",
        "Addressing running toilets with new internal tank parts.",
        "Replacing disposers and simple under-sink drains that are leaking at visible joints."
      ],
      fitNotGood: [
        "Hidden leaks behind walls or under slabs.",
        "Major repipes, large drain replacements, or projects requiring significant demo.",
        "Complex valve replacements in tiled showers.",
        "Sewer line work or main shutoff replacements requiring specialized crews."
      ],
      localNote:
        "Bressi Ranch homes are often at the stage where original fixtures are ready to be upgraded. Many visits combine faucet, disposer, and toilet work so a kitchen or bath feels refreshed all at once.",
      audienceNotes: {
        homeowners:
          "Updating fixtures so kitchens and baths in your Bressi Ranch home feel quieter, cleaner, and more in line with your taste.",
        rentals:
          "Handling fixture swaps and basic plumbing repairs so rentals stay comfortable and low-maintenance.",
        businesses:
          "Small plumbing fixes in restrooms and kitchenettes for nearby offices."
      },
      reviewSnippet: {
        quote:
          "They updated a couple of faucets and tuned up our toilets so everything works smoothly again.",
        name: "Mark E.",
        location: "Bressi Ranch, CA",
        role: "Homeowner"
      }
    },

    "honey-do-lists-small-repairs": {
      intro:
        "Honey-do visits in Bressi Ranch are ideal for clearing a list of small cosmetic and functional issues so your home feels ready for hosting and everyday life.",
      schedulingNote:
        "Visits are planned with a prioritized list, often starting with the most visible rooms on the main floor before moving to secondary spaces.",
      fitGood: [
        "A mix of tightening hardware, patching small wall damage, and swapping simple fixtures.",
        "Pre-photo touch-ups before listing or renting a Bressi Ranch home.",
        "Move-in or move-out lists where you want details handled in a single visit."
      ],
      fitNotGood: [
        "Large painting jobs, major drywall replacement, or flooring projects.",
        "Full remodels that require design work, permits, and multiple trades.",
        "Emergency restoration work after major water or fire damage."
      ],
      localNote:
        "Bressi Ranch homeowners often use honey-do visits before big events, listing dates, or busy seasons so everything feels aligned with the neighborhood’s tidy standard.",
      audienceNotes: {
        homeowners:
          "Clearing the list of small fixes so your Bressi Ranch home feels dialed in and guest-ready.",
        rentals:
          "Handling punch lists between tenants so properties stay in line with community expectations.",
        businesses:
          "Tidying up small repair items in nearby offices and studios that serve local residents."
      },
      reviewSnippet: {
        quote:
          "They moved through our list efficiently, and the house feels truly ready for guests now.",
        name: "Dana C.",
        location: "Bressi Ranch, CA",
        role: "Homeowner"
      }
    },

    "furniture-assembly-installation": {
      intro:
        "Furniture assembly visits in Bressi Ranch focus on turning builder-basic rooms into finished, livable spaces that match the neighborhood’s polished feel.",
      schedulingNote:
        "Most furniture visits in Bressi Ranch are planned by room—living areas, lofts, offices, or bedrooms—so furniture is assembled, placed, and anchored before we move on.",
      fitGood: [
        "Assembling coordinated bedroom sets and storage pieces.",
        "Setting up living room seating, media units, and accent tables.",
        "Anchoring tall furniture to walls for safety and peace of mind.",
        "Installing shelves and simple cabinets on framed interior walls.",
        "Hanging artwork and mirrors to complete finished spaces."
      ],
      fitNotGood: [
        "Custom built-ins and cabinetry requiring design and carpentry.",
        "Large commercial installations needing multiple installers and long schedules.",
        "Very heavy items that require professional movers or rigging.",
        "Projects that involve significant rearranging of existing heavy furniture."
      ],
      localNote:
        "Bressi Ranch homes often have great bones but need furniture set up correctly to feel finished. Many visits combine assembly with small handyman tasks for a more complete result.",
      audienceNotes: {
        homeowners:
          "Getting new furniture out of boxes and into position so your Bressi Ranch home feels put together instead of half-furnished.",
        rentals:
          "Setting up quality furniture in rentals so spaces feel cohesive and durable between tenants.",
        businesses:
          "Assembling desks and seating for nearby offices and studios serving the community."
      },
      reviewSnippet: {
        quote:
          "They assembled and placed several pieces across our main floor and loft so the house finally feels complete.",
        name: "Morgan L.",
        location: "Bressi Ranch, CA",
        role: "Homeowner"
      }
    },

    "drywall-repair": {
      intro:
        "Drywall repair visits in Bressi Ranch focus on keeping walls and ceilings looking as crisp as the rest of the neighborhood.",
      schedulingNote:
        "Most drywall work here is scoped to address a targeted set of patches and cracks within a visit, with clear expectations if follow-up is needed for dry time or additional coats.",
      fitGood: [
        "Patching holes from decor changes, shelving, and small accidents.",
        "Repairing cracks near stairwells, doorways, and corners.",
        "Blending small areas of new texture into existing finishes.",
        "Smoothing out obvious previous repairs that stand out in good lighting.",
        "Touching up small ceiling areas after minor leaks are resolved."
      ],
      fitNotGood: [
        "Extensive water damage or mold requiring remediation and large replacement.",
        "Whole-home resurfacing or major texture changes.",
        "Popcorn removal on multiple ceilings.",
        "Ongoing structural issues that continue to cause cracking."
      ],
      localNote:
        "In Bressi Ranch, small drywall issues can stand out against otherwise well-kept homes. Many visits focus on the main floor and high-visibility hallways and entries.",
      audienceNotes: {
        homeowners:
          "Cleaning up wall and ceiling damage so your Bressi Ranch home feels as crisp as it did when it was new.",
        rentals:
          "Smoothing walls between tenants so Bressi Ranch rentals stay aligned with neighborhood standards.",
        businesses:
          "Repairing small wall damage in local offices and studios so client areas look professional."
      },
      reviewSnippet: {
        quote:
          "They fixed several small problem spots and you would never know there had been patches.",
        name: "Allison P.",
        location: "Bressi Ranch, CA",
        role: "Homeowner"
      }
    },

    "tv-mounting": {
      intro:
        "TV mounting visits in Bressi Ranch focus on clean, safe installs that match the organized, finished feel of the neighborhood homes.",
      schedulingNote:
        "Most TV installs in Bressi Ranch are scoped to mount one or more TVs on interior walls, tidy the cabling, and confirm everything works before we leave.",
      fitGood: [
        "Mounting TVs on interior drywall with accessible wood studs.",
        "Installing tilt or full-motion mounts in family rooms, lofts, and bedrooms.",
        "Setting up simple soundbars and streaming devices alongside the display.",
        "Organizing surface wiring with neat routing or raceways where appropriate.",
        "Moving TVs from bulky furniture to wall mounts to open up space."
      ],
      fitNotGood: [
        "In-wall wiring projects that require new electrical or low-voltage runs.",
        "Mounting on stone or tile fireplaces without special anchors and planning.",
        "Complex commercial AV setups with many screens and advanced audio.",
        "Outdoor or exposed installs that need specific weather protection."
      ],
      localNote:
        "Bressi Ranch living spaces often benefit from wall-mounted TVs that keep floors open and lines clean, especially in open main-floor layouts.",
      audienceNotes: {
        homeowners:
          "Mounting TVs so your Bressi Ranch living spaces feel tidy, open, and aligned with the rest of your home’s finish level.",
        rentals:
          "Installing mounted TVs in rentals so spaces are durable and easy to reset between occupants.",
        businesses:
          "Mounting TVs in neighborhood offices and studios for client or staff use without a big AV project."
      },
      reviewSnippet: {
        quote:
          "They mounted our family room and loft TVs and made the cables disappear into a neat, simple setup.",
        name: "Trent D.",
        location: "Bressi Ranch, CA",
        role: "Homeowner"
      }
    }
  }
};
