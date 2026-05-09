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
        "Building or assembling small sheds, storage structures, or straightforward shelving using homeowner-approved materials.",
      ],
      fitNotGood: [
        "Structural framing changes, wall removals, or projects that require engineering and permits.",
        "Large custom built-ins and cabinetry runs that belong with a dedicated cabinet shop.",
        "Big exterior deck, balcony, or pergola projects that require multi-week crews.",
      ],
      localNote:
        "Many Carlsbad homes still have original builder-grade trim, fences, and doors. A focused carpentry visit is often used to tighten up the most visible areas first—entryways, living rooms, side yards, and primary bedrooms—before committing to larger projects.",
      audienceNotes: {
        homeowners:
          "Tightening up squeaky doors, refreshing trim, and repairing fences and gates so high-traffic areas in your Carlsbad home feel solid and put together.",
        rentals:
          "Quick carpentry fixes between tenants—adjusting doors, repairing trim, and tuning up fences and gates so Carlsbad rentals photograph and show well.",
        businesses:
          "Light carpentry tweaks for local offices and studios—simple shelving, wall protection, and trim repairs in the areas clients and staff see most.",
      },
      reviewSnippet: {
        quote:
          "They adjusted several doors, repaired trim, and fixed our side gate so everything looks like it should have from day one.",
        name: "Sandra L.",
        location: "Carlsbad, CA",
        role: "Homeowner",
      },
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
        "Swapping tired vanity lights, entry fixtures, and kitchen pendants for homeowner-supplied upgrades.",
      ],
      fitNotGood: [
        "Main panel upgrades, new circuit runs, or whole-home rewiring projects.",
        "Emergency power issues such as burning smells, arcing, repeated breaker trips, or complete loss of power.",
        "Exterior lighting projects that require trenching, new underground wiring, or lift equipment.",
        "Work that requires opening large sections of walls or ceilings to access concealed wiring.",
      ],
      localNote:
        "Many Carlsbad homeowners use an electrical visit to modernize key spaces like kitchens, living rooms, and primary bedrooms with better lighting and fan control—especially in homes that have not been updated since the early 2000s.",
      audienceNotes: {
        homeowners:
          "Upgrading everyday lighting, swapping dated fixtures, and fixing small electrical annoyances so your Carlsbad home feels brighter and easier to live in.",
        rentals:
          "Quick fixture swaps, safer outlets, and simple troubleshooting between tenants so Carlsbad rentals stay comfortable and guest-ready.",
        businesses:
          "Light electrical tweaks for small offices, studios, and client-facing spaces that need better lighting without a large project crew.",
      },
      reviewSnippet: {
        quote:
          "Our living room feels completely different after the new lighting and dimmers. Everything was labeled and tidy when they left.",
        name: "David R.",
        location: "Carlsbad, CA",
        role: "Homeowner",
      },
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
        "Installing or replacing a garbage disposer using existing electrical and plumbing connections.",
      ],
      fitNotGood: [
        "Slab leaks, main line issues, or any leaks that appear inside walls, ceilings, or below grade.",
        "Full repipes, major drain replacements, or work that requires opening large areas of finished surfaces.",
        "Complex shower valve replacements that require cutting into tiled surrounds.",
        "Sewer line problems, main shutoff replacements, or work requiring specialized plumbing equipment.",
      ],
      localNote:
        "In Carlsbad, it is common to see fixtures that are original to the home or have lived through years of hard water. Many visits combine faucet swaps, disposer replacements, and toilet repairs so everything in a kitchen or bath feels updated at the same time.",
      audienceNotes: {
        homeowners:
          "Taking care of drips, running toilets, and dated fixtures so kitchens and baths in your Carlsbad home feel clean, quiet, and easier to live with.",
        rentals:
          "Turnover-ready fixture swaps and basic leak repairs that keep Carlsbad rentals comfortable between guests or long-term tenants.",
        businesses:
          "Small fixture fixes for restrooms and break areas so customer and employee spaces stay presentable.",
      },
      reviewSnippet: {
        quote:
          "They replaced a leaky kitchen faucet, tuned up two toilets, and left everything cleaner than when they arrived.",
        name: "Mark T.",
        location: "Carlsbad, CA",
        role: "Homeowner",
      },
    },

    "honey-do-lists-small-repairs": {
      intro:
        "Honey-do visits in Carlsbad are designed to clear a mixed list of small repairs and improvements in one trip, so you do not have to coordinate several separate service calls.",
      schedulingNote:
        "These visits are booked with a every visit and a prioritized list. Items in the same area of the home are grouped together first so the highest-value fixes are completed within the scheduled time.",
      fitGood: [
        "A mixed list of small tasks like tightening hardware, adjusting doors, and swapping a few tired fixtures.",
        "Touch-ups before listing a Carlsbad home for sale—patching obvious wall damage, straightening hardware, and addressing small eyesores.",
        "Move-in or post-remodel punch lists where you need a second set of hands to finishing details.",
        "Adding or adjusting simple storage such as closet rods, shelves, and hooks.",
        "Basic weatherstripping, caulking touch-ups, and other quick comfort or appearance upgrades.",
      ],
      fitNotGood: [
        "Full interior repainting, large-scale drywall work, or flooring replacement.",
        "Major remodels, additions, or any project that requires permits and multiple trades on site.",
        "Emergency restoration work after flooding, fire, or significant water damage.",
        "Projects where the scope is still undefined or likely to grow into a multi-week remodel.",
      ],
      localNote:
        "Carlsbad homeowners often use a honey-do visit to catch up on the list of little fixes that pile up during busy seasons—especially before hosting guests or handing keys to a new tenant. Grouping those items into a single, well-planned visit keeps disruption low and results high.",
      audienceNotes: {
        homeowners:
          "Clearing the mixed list of small repairs and improvements that keeps your Carlsbad home from feeling truly finished.",
        rentals:
          "Catching up on minor issues between tenants—loose hardware, paint touch-ups, and basic repairs that keep rentals showing well.",
        businesses:
          "Straightening out small maintenance items in offices or studios so you can stay focused on clients instead of a persistent punch list.",
      },
      reviewSnippet: {
        quote:
          "Our Carlsbad home finally feels caught up—door latches work, hardware is straight, and all the little issues we kept putting off are handled.",
        name: "Rachel K.",
        location: "Carlsbad, CA",
        role: "Homeowner",
      },
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
        "Hanging artwork and mirrors with straightforward access to drywall or wood backing.",
      ],
      fitNotGood: [
        "Custom built-ins that require cabinet shop fabrication or detailed carpentry.",
        "Very large commercial furniture installations that need multi-person crews over several days.",
        "Hanging extremely heavy items on unknown or inaccessible framing without proper anchors or hardware.",
        "Projects that require cutting into walls to add backing or blocking in multiple locations.",
      ],
      localNote:
        "Many Carlsbad visits combine furniture assembly with TV mounting or light handyman work so new spaces—especially home offices and guest rooms—can be set up in a single visit.",
      audienceNotes: {
        homeowners:
          "Getting new furniture assembled, placed, and safely anchored so rooms in your Carlsbad home are ready to use the same day.",
        rentals:
          "Setting up beds, storage, and basic decor between guests or tenants so Carlsbad rentals photograph and function well.",
        businesses:
          "Assembling desks, shelving, and simple storage for Carlsbad offices and studios without a disruptive, multi-day install.",
      },
      reviewSnippet: {
        quote:
          "They assembled our bedroom furniture, anchored tall pieces, and left everything clean and ready to use.",
        name: "Kelly P.",
        location: "Carlsbad, CA",
        role: "Homeowner",
      },
    },

    "drywall-repair": {
      intro:
        "Drywall repair visits in Carlsbad focus on wall and ceiling damage—holes, cracks, and previous patches—that need to blend back into the room.",
      schedulingNote:
        "Most Carlsbad drywall repairs are scoped so patching, texture, and basic touch-up can be completed in one or two passes. For larger areas or specialty textures, work may be broken into phases with clear expectations on drying time.",
      fitGood: [
        "Patching drywall holes from door handles, accidents, or previous repairs.",
        "Repairing cracks along seams, corners, and around doors or windows.",
        "Blending new texture into existing orange peel or knockdown walls on limited areas.",
        "Prepping repaired areas for paint so walls look smooth under typical lighting.",
        "Touching up ceiling repairs after small plumbing fixes in one area.",
      ],
      fitNotGood: [
        "Full-room or whole-home skim coating and resurfacing.",
        "Major water damage that requires large sections of drywall removal and remediation.",
        "Structural issues causing ongoing movement or cracking.",
        "Popcorn ceiling removal across multiple rooms.",
      ],
      localNote:
        "In Carlsbad, it's common to see dings and cracks in high-traffic spaces or near doors that have shifted over time. Many visits focus on making the most visible walls and ceilings feel clean and finished again.",
      audienceNotes: {
        homeowners:
          "Cleaning up wall and ceiling damage in the rooms you notice most so your Carlsbad home feels ready for guests and everyday life.",
        rentals:
          "Making walls presentable between tenants so Carlsbad rentals show well and photograph cleanly.",
        businesses:
          "Repairing small wall damage in offices and studios so customer-facing spaces look maintained.",
      },
      reviewSnippet: {
        quote:
          "They patched several holes and cracks, matched the texture, and you can't tell anything was repaired.",
        name: "Josh C.",
        location: "Carlsbad, CA",
        role: "Homeowner",
      },
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
        "Relocating an existing TV from a stand to a wall mount in the same room.",
      ],
      fitNotGood: [
        "In-wall wiring that requires opening finished walls and running new electrical circuits.",
        "Large commercial video walls or multi-screen conference room systems.",
        "Mounting on fragile surfaces like stone or tile without proper planning and hardware.",
        "Very high or exterior installations that require special equipment or lifts.",
      ],
      localNote:
        "Many Carlsbad homeowners mount TVs in living rooms, bonus rooms, and bedrooms to free up floor space and create a cleaner look, often pairing the visit with furniture assembly or minor cable management.",
      audienceNotes: {
        homeowners:
          "Getting your TVs securely mounted, centered, and cable-managed so living spaces in your Carlsbad home feel finished and intentional.",
        rentals:
          "Mounting TVs and cleaning up cable runs in Carlsbad rentals so listings look clean and guest-friendly.",
        businesses:
          "Mounting TVs in waiting areas, break rooms, or small conference spaces without turning it into a big AV project.",
      },
      reviewSnippet: {
        quote:
          "They mounted our living room TV, set up the soundbar, and cleaned up the cables so everything looks built-in.",
        name: "Brian S.",
        location: "Carlsbad, CA",
        role: "Homeowner",
      },
    },
  },

  // --------------------
  // OCEANSIDE
  // --------------------
  oceanside: {
    "carpentry-woodwork": {
      intro:
        "Carpentry visits in Oceanside address the real range of this city's housing stock—salt-air-weathered beach cottages in South Oceanside and near the pier, established neighborhoods like Fire Mountain and Ocean Hills, and newer tract construction inland toward Rancho Del Oro.",
      schedulingNote:
        "Most Oceanside carpentry work is scoped so gate repairs, fence sections, and interior trim can be handled in one visit. Larger fence runs or multi-room trim work is broken into clear sections so timing and cost are predictable.",
      fitGood: [
        "Repairing or re-hanging courtyard and side-yard gates in South Oceanside and Fire Mountain homes where coastal humidity has worked on hinges and hardware.",
        "Adjusting and refitting interior doors that have dropped or swollen in older downtown-adjacent and Ocean Hills properties.",
        "Adding garage shelving and utility storage to homes near Camp Pendleton where families need organized space quickly after a move.",
        "Refreshing baseboards and interior trim in Rancho Del Oro homes where builder-standard material is ready for a practical upgrade.",
        "Fixing minor exterior wood details around door surrounds and steps before small splits turn into bigger repairs.",
      ],
      fitNotGood: [
        "Full property-line fence replacements requiring permits and multi-week timelines.",
        "Structural framing changes, wall removals, or additions requiring engineering review.",
        "Major deck builds or extensive exterior rebuilds after significant water or termite damage.",
      ],
      localNote:
        "Oceanside's coastal proximity accelerates wear on exterior wood in South O and along the pier corridor in ways that inland Rancho Del Oro homes do not see. At the same time, the high tenant turnover driven by the military community near Camp Pendleton means carpentry repairs—doors, trim, gates—cycle through rental properties more frequently here than in most other North County cities.",
      audienceNotes: {
        homeowners:
          "Keeping gates, doors, and interior trim in solid working order in Fire Mountain, Ocean Hills, and South Oceanside homes where coastal air and regular use take a real toll.",
        rentals:
          "Handling carpentry repairs efficiently between military and short-term tenant cycles so Oceanside rentals stay functional and easy to re-rent on tight turnover windows.",
        businesses:
          "Practical carpentry fixes for Oceanside storefronts and studios along Hill Street and Oceanside Boulevard—shelving, trim, and small repairs where customers notice them most.",
      },
      reviewSnippet: {
        quote:
          "Our Rancho Del Oro gate hadn't closed properly in two years and the living room trim had gaps everywhere. Both handled in one visit.",
        name: "Marcus T.",
        location: "Oceanside, CA",
        role: "Homeowner",
      },
    },

    electrical: {
      intro:
        "Lighting and small electrical visits in Oceanside cover the range between 1960s beach cottages with decades of patchwork updates and newer Rancho Del Oro homes where builder-basic fixtures are simply ready to be improved.",
      schedulingNote:
        "Most Oceanside electrical visits are booked as focused half-day windows so circuits can be shut off safely, fixtures swapped, controls updated, and everything tested and labeled before leaving.",
      fitGood: [
        "Replacing dated kitchen, bath, and entry fixtures in older South Oceanside, downtown-adjacent, and Ocean Hills homes with homeowner-supplied upgrades.",
        "Updating unbalanced or noisy ceiling fans in bedrooms and living rooms where boxes are properly supported.",
        "Adding dimmers or basic smart switches in main living areas where wiring configuration and box depth allow.",
        "Troubleshooting a single non-urgent issue at a switch, outlet, or fixture that used to work normally.",
        "Swapping exterior porch and entry fixtures without running new wiring.",
      ],
      fitNotGood: [
        "Panel service upgrades, meter relocations, or work requiring utility coordination and permits.",
        "Legacy wiring situations in pre-1980 cottages that go beyond simple fixture swaps.",
        "Emergency electrical situations—burning smells, arcing, or breakers that will not stay reset.",
        "Outdoor and coastal lighting requiring trenching or new underground wiring feeds.",
      ],
      localNote:
        "Oceanside has a wide spread of home ages. Near South O and the pier, many cottages have had fixtures updated inconsistently over the decades. In Rancho Del Oro and newer inland developments, homes are well-wired but still running on builder-grade fixtures and switches that are straightforward to improve with a single focused visit.",
      audienceNotes: {
        homeowners:
          "Updating fans, fixtures, and controls in Oceanside homes so main rooms feel brighter and more comfortable regardless of whether the house is a 1960s cottage or a 2000s build.",
        rentals:
          "Quick fixture swaps and basic troubleshooting between military tenant cycles and short-term guest stays so Oceanside rentals stay comfortable and guest-ready year-round.",
        businesses:
          "Lighting improvements for Oceanside clinics, studios, and storefronts where better light makes a real difference for staff and clients.",
      },
      reviewSnippet: {
        quote:
          "They replaced three fixtures and a noisy bedroom fan in our Rancho Del Oro house. Main rooms feel noticeably more comfortable now.",
        name: "Danielle R.",
        location: "Oceanside, CA",
        role: "Homeowner",
      },
    },

    "plumbing-fixtures-repairs": {
      intro:
        "Plumbing fixture visits in Oceanside tackle the faucets, toilets, and under-sink hardware that coastal humidity and hard water wear down faster—particularly in older South Oceanside cottages and high-turnover rental properties.",
      schedulingNote:
        "Most Oceanside plumbing visits are planned to shut water off once, handle a cluster of fixtures in the same kitchen or bath, and test everything before leaving—keeping the number of separate appointments low.",
      fitGood: [
        "Replacing corroded or hard-water-damaged kitchen and bath faucets with homeowner-supplied fixtures where shutoffs and access are clean.",
        "Swapping shower heads and hand showers in older baths without opening walls.",
        "Addressing running or constantly cycling toilets with new flapper assemblies and fill valves.",
        "Replacing leaking garbage disposers and visible P-traps or supply connections at accessible joints.",
      ],
      fitNotGood: [
        "Slab leaks, main line failures, or water appearing inside walls or ceilings.",
        "Full repipes or large drain replacement projects requiring extensive demolition.",
        "Complex shower valve repairs behind tiled surrounds requiring tile removal.",
        "Main shutoff replacements or sewer line issues requiring licensed specialty equipment.",
      ],
      localNote:
        "Coastal humidity and hard water hit fixtures harder in Oceanside than in inland communities. Homes near South Oceanside and the downtown area often have faucets and traps that have outlived their intended service life. In rentals near Camp Pendleton where tenant turnover is above average, fixture swaps are a practical part of keeping properties in good shape between leases.",
      audienceNotes: {
        homeowners:
          "Fixing the drips, running toilets, and corroded fixtures in South O cottages and Rancho Del Oro houses so kitchens and baths feel fresher and quieter.",
        rentals:
          "Turnover-ready faucet swaps and toilet repairs between military and short-term rental tenants so Oceanside properties stay comfortable and problem-free.",
        businesses:
          "Small fixture repairs in restrooms and break areas for Oceanside's coast-adjacent offices and service businesses.",
      },
      reviewSnippet: {
        quote:
          "They replaced our kitchen faucet, fixed a running toilet, and checked all the connections. Done before noon.",
        name: "Veronica S.",
        location: "South Oceanside, CA",
        role: "Homeowner and host",
      },
    },

    "honey-do-lists-small-repairs": {
      intro:
        "Honey-do visits in Oceanside are built around two real pressures: the vacation rental turnover windows near the pier and coastal neighborhoods, and the tight move-out checklists that come with a military community where tenants rotate on PCS timelines.",
      schedulingNote:
        "These visits are planned with a prioritized list shared in advance so the highest-visibility items get done first. Related tasks in the same room or exterior zone are batched together to keep the visit efficient.",
      fitGood: [
        "A blended list—adjusting exterior doors and gate hardware that salt air has stiffened, patching obvious wall damage, swapping a tired fixture, and tightening loose hardware throughout.",
        "Pre-checkout touch-ups for vacation rental hosts near Oceanside Pier who need units turned over cleanly between bookings.",
        "Move-out checklists for military tenants completing a PCS who need common damage items addressed on a tight timeline.",
        "Adding or adjusting basic storage—closet rods, hooks, door stops—so the property works better for the next occupant.",
      ],
      fitNotGood: [
        "Full interior or exterior repainting projects.",
        "Large-scale drywall removal or flooring replacement.",
        "Restoration work after water intrusion, storm damage, or flooding.",
        "Work where the scope is undefined and likely to grow beyond a single planned visit.",
      ],
      localNote:
        "Oceanside homeowners and landlords deal with two distinct pressures that do not apply equally elsewhere in North County: coastal wear that shows up faster on exterior hardware and wood, and above-average tenant turnover driven by the military community near Camp Pendleton. A well-planned honey-do visit is one of the most efficient ways to address both in a single trip.",
      audienceNotes: {
        homeowners:
          "Getting through the accumulated list of small repairs in your Fire Mountain, Ocean Hills, or South Oceanside home so it feels maintained and ready for everyday life or guests.",
        rentals:
          "Clearing the turnover checklist between bookings or military tenant changes so your Oceanside property is ready for photos and the next occupant without scheduling three separate trades.",
        businesses:
          "Small maintenance items for Oceanside offices and studios so client-facing spaces stay presentable without a disruptive project.",
      },
      reviewSnippet: {
        quote:
          "We're close to the base and our rentals turn over fast. They handled the whole list in one visit instead of us chasing three different people.",
        name: "James A.",
        location: "Oceanside, CA",
        role: "Landlord",
      },
    },

    "furniture-assembly-installation": {
      intro:
        "Furniture assembly visits in Oceanside are shaped by two consistent needs: military families who need new homes set up quickly after a PCS move, and short-term rental hosts near the pier and beach corridor who need to refresh or expand setups between guest seasons.",
      schedulingNote:
        "Most Oceanside furniture visits are planned around one or two rooms so pieces can be assembled, leveled, and anchored in sequence without spreading tools across the whole house.",
      fitGood: [
        "Assembling full bedroom sets—bed frame, dresser, nightstands—for families settling into a new home after relocating to Camp Pendleton.",
        "Building out desk, bookshelf, and storage arrangements for home offices and study areas.",
        "Anchoring tall wardrobes, bookshelves, and storage units to walls in homes with kids.",
        "Hanging wall shelves, hooks, and small storage cabinets on interior drywall walls.",
        "Setting up beds and basic furniture in vacation rental units near the pier for incoming guest seasons.",
      ],
      fitNotGood: [
        "Large commercial furniture installations requiring multiple days and crew coordination.",
        "Custom built-in furniture requiring carpentry or shop fabrication.",
        "Very heavy specialty pieces requiring rigging equipment or professional movers.",
        "Projects that involve relocating existing large furniture between multiple floors.",
      ],
      localNote:
        "Oceanside sees a higher rate of household moves than most nearby communities because of the military population near Camp Pendleton. That creates regular demand for efficient furniture setup—not just for new residents but for landlords furnishing rental units and hosts keeping vacation properties stocked year-round.",
      audienceNotes: {
        homeowners:
          "Getting new furniture assembled and placed quickly so Oceanside homes are livable right away—especially important for military families arriving in a new city on a tight timeline.",
        rentals:
          "Setting up beds, storage, and decor in short-term rentals and military-adjacent units so properties are guest-ready with minimal lead time.",
        businesses:
          "Assembling desks and basic office furniture for Oceanside studios and service businesses without a multi-day disruption.",
      },
      reviewSnippet: {
        quote:
          "We just PCS'd to Pendleton and needed the whole house set up fast. They assembled our beds, desks, and the kids' furniture in one day—huge relief.",
        name: "Carrie M.",
        location: "Oceanside, CA",
        role: "Homeowner",
      },
    },

    "drywall-repair": {
      intro:
        "Drywall repair visits in Oceanside address wall and ceiling damage from tenant turnover, coastal humidity, and older homes in South O and Fire Mountain where patches and cracks have accumulated over years of use.",
      schedulingNote:
        "Most Oceanside drywall visits are scoped to handle a group of repairs in the same area of the home so patching, texture, and basic touch-up can be completed in one or two passes with clear expectations on drying time.",
      fitGood: [
        "Patching holes from door handles, old TV anchors, and tenant damage in both owner-occupied homes and high-turnover rental properties.",
        "Repairing cracks near door frames, window openings, and corners in older South Oceanside and Fire Mountain homes.",
        "Blending new texture into existing orange peel or light knockdown finishes on limited areas.",
        "Smoothing previous rough patches that stand out under normal lighting.",
        "Touching up small ceiling areas after minor plumbing or electrical fixes.",
      ],
      fitNotGood: [
        "Widespread water or mold damage requiring professional remediation before any patch work.",
        "Whole-home re-texturing or skim coating projects.",
        "Popcorn ceiling removal across large areas.",
        "Foundation or structural movement that continues to open new cracks faster than they can be repaired.",
      ],
      localNote:
        "Rental properties near Camp Pendleton see more frequent tenant turnover than the regional average, which means drywall patches accumulate faster in Oceanside than in most neighboring cities. Near South O and the pier, older homes also show natural cracking from age and coastal soil conditions. Many visits focus on entries, living areas, and main bedrooms so the most visible rooms look clean and maintained.",
      audienceNotes: {
        homeowners:
          "Cleaning up wall and ceiling damage in the rooms you see most so your Oceanside home feels cared for, not accumulated-upon.",
        rentals:
          "Patching tenant damage and smoothing walls between occupants so Oceanside rentals photograph well and pass inspection without expensive full-room repairs.",
        businesses:
          "Repairing small wall damage in Oceanside shops and offices so customer-facing spaces look maintained and professional.",
      },
      reviewSnippet: {
        quote:
          "Three bedrooms needed patching after tenants moved out. They made it all look clean again and matched the texture. Saved us from repainting the whole room.",
        name: "Frank O.",
        location: "Oceanside, CA",
        role: "Landlord",
      },
    },

    "tv-mounting": {
      intro:
        "TV mounting visits in Oceanside cover a range of situations—from vacation rental hosts near the pier who need durable, guest-proof installs to homeowners in Rancho Del Oro and Ocean Hills setting up comfortable family rooms.",
      schedulingNote:
        "Most Oceanside TV installs are planned to locate studs, mount the bracket, hang the TV, and organize basic cables in one visit. Multiple TVs in the same home or adjacent rooms can often be grouped into a single appointment.",
      fitGood: [
        "Mounting TVs on interior drywall walls with accessible wood stud framing in living rooms and bedrooms.",
        "Installing tilt or full-motion mounts with homeowner-provided hardware.",
        "Setting up basic soundbars and streaming devices on or near the wall.",
        "Organizing and concealing surface wiring with low-profile raceways where possible.",
        "Moving TVs from stands to wall mounts to open up floor space in smaller South O cottages and rental units.",
      ],
      fitNotGood: [
        "In-wall power or signal runs requiring new electrical circuits or low-voltage cabling inside finished walls.",
        "Large commercial displays or multi-screen AV systems.",
        "Mounting on fireplace stone or tile without appropriate anchoring and planning.",
        "Exterior or high-mounted installs requiring lift equipment or specialized safety hardware.",
      ],
      localNote:
        "Oceanside has a significant inventory of short-term rental properties near the coast, and wall-mounted TVs hold up better to guest turnover than TVs on stands. In neighborhoods like Ocean Hills and Fire Mountain, homeowners mounting TVs for personal use want a clean, safe setup that works well for everyday viewing without the cord clutter.",
      audienceNotes: {
        homeowners:
          "Mounting TVs safely in Oceanside living rooms and bedrooms so spaces feel open and organized rather than defined by a stand and tangled cords.",
        rentals:
          "Installing wall-mounted TVs in vacation rentals and military-adjacent units so setups are durable, guest-friendly, and easy to clean around between stays.",
        businesses:
          "Mounting TVs in lobbies, break rooms, and small meeting spaces for Oceanside businesses without a complex AV project.",
      },
      reviewSnippet: {
        quote:
          "They mounted a TV in each bedroom and the living room of our rental in one visit. Everything is secure and looks clean—guests notice.",
        name: "Rosa V.",
        location: "South Oceanside, CA",
        role: "Short-term rental host",
      },
    },
  },

  // --------------------
  // ENCINITAS
  // --------------------
  encinitas: {
    "carpentry-woodwork": {
      intro:
        "Carpentry visits in Encinitas work across two distinct housing profiles—older Leucadia and Cardiff-by-the-Sea cottages where wood genuinely needs repair, and newer homes in New Encinitas and Olivenhain where trim and storage are ready for a thoughtful upgrade.",
      schedulingNote:
        "Most Encinitas carpentry work fits into a single visit. Larger trim packages in Olivenhain homes on bigger lots or multi-room built-in work in New Encinitas are broken into clear phases with expectations set before work begins.",
      fitGood: [
        "Repairing or refitting interior doors and casing that have shifted in older Cardiff-by-the-Sea and Leucadia cottages.",
        "Adding built-in shelving or organized storage in home offices and creative studios—common across Encinitas neighborhoods.",
        "Refreshing baseboards and casing in living rooms, entryways, and primary bedrooms in New Encinitas homes where builder trim is ready for an upgrade.",
        "Repairing fence sections and side-yard gates in Olivenhain and New Encinitas properties on larger lots.",
        "Fixing exterior wood details around door surrounds that have checked or split after years of coastal sun.",
      ],
      fitNotGood: [
        "Major structural changes, wall removals, or additions requiring engineering permits.",
        "Complex custom millwork and cabinetry better suited to a dedicated shop.",
        "Large deck or pergola projects in Olivenhain that require multi-week crews and permit coordination.",
      ],
      localNote:
        "Encinitas spans from 1950s-60s surf cottages in Leucadia to the equestrian lots of Olivenhain and the planned developments of New Encinitas. Carpentry visits that focus on the most visible and heavily used details—entryways, living rooms, storage—deliver the most noticeable improvement regardless of which neighborhood the home is in.",
      audienceNotes: {
        homeowners:
          "Keeping Leucadia and Cardiff cottages from showing their age, and personalizing newer homes in New Encinitas and Olivenhain so they feel less spec-built and more considered.",
        rentals:
          "Refreshing trim, doors, and small storage in Encinitas rentals so they photograph well and meet the quality standard this market expects.",
        businesses:
          "Carpentry for the yoga studios, boutiques, and creative offices along the 101 corridor—shelving, display details, and practical repairs that match a design-conscious space.",
      },
      reviewSnippet: {
        quote:
          "Our Leucadia cottage needed a lot of attention on the doors and trim. They worked through it methodically and now the place feels solid for the first time in years.",
        name: "Claire B.",
        location: "Leucadia, CA",
        role: "Homeowner",
      },
    },

    electrical: {
      intro:
        "Lighting and small electrical visits in Encinitas focus on making the most of each home's natural light and open layout—whether that means updating dated fixtures in a Cardiff cottage or adding dimmer zones to an open-plan New Encinitas living area.",
      schedulingNote:
        "Most Encinitas electrical visits are planned as focused half-day appointments, grouping fixtures and controls in the same rooms so circuits can be shut off once, work completed, and everything tested before leaving.",
      fitGood: [
        "Replacing dated dining, kitchen, and entry fixtures in Cardiff and Leucadia homes with homeowner-selected upgrades.",
        "Updating ceiling fans in bedrooms and living rooms where boxes are properly supported.",
        "Adding dimmers or smart switches in main living and dining areas where wiring configuration and box depth allow.",
        "Troubleshooting a single non-urgent outlet, switch, or light that has stopped working.",
        "Swapping exterior porch and carriage fixtures in Old Encinitas and Olivenhain homes without running new wiring.",
      ],
      fitNotGood: [
        "Panel upgrades, new subpanels, or changes to service size.",
        "New circuit runs for EV chargers, major appliances, or permitted additions.",
        "Emergency electrical problems—burning smells, arcing, or breakers that will not stay reset.",
        "Extensive landscape or low-voltage lighting requiring new underground wiring runs.",
      ],
      localNote:
        "Many Encinitas homes in Leucadia and Cardiff have had fixtures and controls updated piecemeal over decades, leaving a mix of styles and performance levels in the same house. New Encinitas and Olivenhain homes are better wired but often have builder-basic fixtures that hold back rooms that are otherwise well designed. A focused visit targets the highest-visibility spaces first.",
      audienceNotes: {
        homeowners:
          "Updating the fixtures, fans, and controls that make the biggest difference in how your Encinitas home feels to live in every day.",
        rentals:
          "Swapping tired fixtures between tenants and resolving simple electrical annoyances so Encinitas rentals stay at the quality level the market expects.",
        businesses:
          "Lighting updates for studios, wellness businesses, and boutiques along the 101 corridor—better light matters to clients and staff in these spaces.",
      },
      reviewSnippet: {
        quote:
          "They replaced the fixtures and added dimmers in our Cardiff cottage and now the living room actually feels like we designed it.",
        name: "Tara W.",
        location: "Cardiff-by-the-Sea, CA",
        role: "Homeowner",
      },
    },

    "plumbing-fixtures-repairs": {
      intro:
        "Plumbing fixture visits in Encinitas address a wide range—from original 1960s hardware in Leucadia cottages to builder-standard faucets and disposers in New Encinitas homes that owners are simply ready to upgrade.",
      schedulingNote:
        "Most Encinitas plumbing visits are planned to address several fixtures in the same kitchen or bath so water can be shut off once, repairs and replacements made, and everything tested in a single window.",
      fitGood: [
        "Replacing kitchen and bath faucets with homeowner-supplied fixtures where shutoffs and access are clean.",
        "Swapping shower heads and hand showers in both older and newer baths without opening walls.",
        "Addressing running or constantly cycling toilets with new fill valve and flapper assemblies.",
        "Replacing garbage disposers and visible P-traps or supply connections that are leaking at accessible joints.",
      ],
      fitNotGood: [
        "Hidden or slab leaks, main line problems, or water appearing inside walls or ceilings.",
        "Full repipes or major drain replacements requiring significant demolition.",
        "Complex shower valve work requiring tile removal in tiled surrounds.",
        "Sewer line replacements or main shutoff work requiring licensed specialty crews.",
      ],
      localNote:
        "Cardiff and Leucadia homeowners often deal with original or near-original plumbing hardware that has simply outlived its service life. In New Encinitas and Olivenhain, the focus is usually on upgrading builder-grade fixtures with options that match the quality of the rest of the home. Many visits combine a faucet, a toilet repair, and a disposer so a kitchen or bath feels noticeably refreshed after one appointment.",
      audienceNotes: {
        homeowners:
          "Refreshing kitchens and baths in Cardiff and Leucadia cottages, or upgrading builder-standard hardware in New Encinitas homes so fixtures finally match the quality the rest of your space deserves.",
        rentals:
          "Handling fixture swaps and small leak repairs between tenants in Encinitas rentals to prevent minor annoyances from turning into bigger maintenance calls.",
        businesses:
          "Small plumbing fixes in restrooms and break areas for Encinitas studios and offices so the space reflects the standard your clients expect.",
      },
      reviewSnippet: {
        quote:
          "We replaced faucets in two bathrooms and the kitchen in one visit. Everything matched and the leaky toilet in the hall bathroom is finally quiet.",
        name: "Nora F.",
        location: "Old Encinitas, CA",
        role: "Homeowner",
      },
    },

    "honey-do-lists-small-repairs": {
      intro:
        "Honey-do visits in Encinitas are designed for homeowners and hosts who have high standards for the details—whether it is a Leucadia cottage due for a careful round of small repairs or an Olivenhain home being readied for listing.",
      schedulingNote:
        "These visits are booked with a shared list so work can flow from room to room, starting with the items that matter most. A realistic scope is confirmed before the visit so the highest-priority fixes are always completed.",
      fitGood: [
        "A mixed list—adjusting sticky doors in Cardiff and Leucadia homes, patching wall dings, touching up caulking, and swapping hardware or a dated fixture.",
        "Pre-listing preparation for Encinitas homes going to market—patching obvious wall damage, straightening hardware, addressing visible eyesores before professional photography.",
        "Move-in punch lists for new homeowners in New Encinitas or Olivenhain who want details handled before furniture is fully in place.",
        "Basic weatherstripping, threshold adjustments, and small comfort improvements.",
      ],
      fitNotGood: [
        "Full interior repainting, large-scale drywall replacement, or flooring work.",
        "Major remodels or additions that require permits and multiple trades.",
        "Restoration work after flooding, significant water intrusion, or fire.",
        "Jobs where the scope is still undefined and likely to grow beyond a well-defined single visit.",
      ],
      localNote:
        "Encinitas homeowners tend to be detail-oriented and care about how their spaces look and function. Whether the goal is catching up on small items in a Leucadia cottage, getting an Olivenhain home ready for showings, or tidying up a busy household in New Encinitas, a focused honey-do visit delivers noticeable results without a remodel.",
      audienceNotes: {
        homeowners:
          "Clearing the collection of small repairs and visible improvements that keep your Encinitas home from feeling as thoughtful and finished as you would like.",
        rentals:
          "Handling the detail-level touch-ups between tenants that keep Encinitas rentals competitive in a market where condition genuinely matters.",
        businesses:
          "Keeping studios, boutiques, and offices along the 101 and in New Encinitas feeling fresh and well maintained without shutting down for a large project.",
      },
      reviewSnippet: {
        quote:
          "We were preparing our Cardiff house for listing and they went through the whole punch list in one visit. Small things, but they made a real difference in how the place shows.",
        name: "Phillip G.",
        location: "Cardiff-by-the-Sea, CA",
        role: "Homeowner",
      },
    },

    "furniture-assembly-installation": {
      intro:
        "Furniture assembly visits in Encinitas are common in homes that serve as work and creative spaces as well as living spaces—where a properly set-up office or studio matters as much as a finished bedroom.",
      schedulingNote:
        "Most Encinitas furniture visits are planned by room or zone—bedroom, office, or living area—so each space is fully assembled, leveled, and anchored before moving on.",
      fitGood: [
        "Assembling bedroom furniture—beds, dressers, wardrobes—in primary bedrooms and guest rooms.",
        "Building out home offices with desks, monitor stands, shelving, and task seating for the many Encinitas residents who work from home.",
        "Anchoring tall bookshelves and wardrobes to walls for safety.",
        "Installing wall shelves and simple floating cabinets on standard drywall surfaces.",
        "Hanging artwork, large mirrors, and framed pieces in living areas where framing is accessible.",
      ],
      fitNotGood: [
        "Custom built-ins requiring design, carpentry, and shop fabrication.",
        "Commercial or office rollouts requiring multiple installers and a fixed corporate spec.",
        "Very large or heavy specialty pieces that require rigging equipment or professional movers.",
        "Projects that require moving or clearing existing large furniture between floors.",
      ],
      localNote:
        "Encinitas has a high concentration of home offices, yoga and wellness studios, and creative workspaces. Many furniture visits combine bedroom setup with office or studio assembly so the home functions well for both everyday living and work without a drawn-out multi-day project.",
      audienceNotes: {
        homeowners:
          "Getting bedroom furniture, home office pieces, and wall storage assembled and placed so Encinitas homes are ready to live in without spending a weekend with an allen wrench.",
        rentals:
          "Setting up beds, storage, and wall decor between tenants so Encinitas rentals feel finished and appeal to renters who expect quality.",
        businesses:
          "Assembling desks, shelving, and workstations for creative studios and professional offices in Leucadia, Old Encinitas, and New Encinitas without a disruptive rollout.",
      },
      reviewSnippet: {
        quote:
          "They assembled everything in my home office and studio in one visit—desks, shelves, a wall unit—and anchored all of it properly. Exactly what I needed.",
        name: "Kenji L.",
        location: "Encinitas, CA",
        role: "Homeowner and designer",
      },
    },

    "drywall-repair": {
      intro:
        "Drywall repair visits in Encinitas focus on the quality this market demands—patches and texture that blend cleanly under natural light, whether in a decades-old Leucadia cottage or a newer New Encinitas home.",
      schedulingNote:
        "Most Encinitas drywall work is scoped to handle a cluster of repairs in the same rooms so patching, texture, and basic touch-up wrap up within one pass. Larger areas or specialty texture are broken into two passes with clear expectations on drying time.",
      fitGood: [
        "Patching holes from relocated artwork, shelving changes, and prior TV mounts in living areas and hallways.",
        "Repairing cracks at ceiling transitions, corners, and around doors or windows—common in older Leucadia and Cardiff homes.",
        "Blending limited areas of new texture into existing walls without redoing entire surfaces.",
        "Smoothing and refining previous patches that stand out under the natural light Encinitas homes receive.",
        "Touching up small ceiling areas after minor plumbing or electrical repairs.",
      ],
      fitNotGood: [
        "Widespread water or mold damage requiring remediation before any patch work.",
        "Whole-home skim coating or complete texture changes across multiple rooms.",
        "Popcorn ceiling removal spanning large areas.",
        "Ongoing structural movement that continues to open new cracks faster than repairs can keep up.",
      ],
      localNote:
        "Natural light is abundant in Encinitas, and it reveals imperfections that might go unnoticed elsewhere. Cardiff and Leucadia homes often have cracks and old patches touched up inconsistently over the years. In New Encinitas and Olivenhain, newer walls may have only a few patches but they show clearly against otherwise smooth surfaces. Many visits focus on open living areas and entryways where good light makes the result obvious.",
      audienceNotes: {
        homeowners:
          "Cleaning up drywall problems in the open living spaces, hallways, and rooms where Encinitas natural light makes every imperfection visible.",
        rentals:
          "Smoothing walls between tenants to keep Encinitas rentals competitive and looking maintained, not worn.",
        businesses:
          "Repairing visible wall damage in studios, boutiques, and professional offices so the space is consistent with the quality your clients associate with your brand.",
      },
      reviewSnippet: {
        quote:
          "Our Leucadia place had years of inconsistent patches. They redid the problem areas, matched the texture, and the living room walls are finally consistent.",
        name: "Annie K.",
        location: "Leucadia, CA",
        role: "Homeowner",
      },
    },

    "tv-mounting": {
      intro:
        "TV mounting visits in Encinitas focus on clean installs that keep living spaces calm and uncluttered—whether in a compact Cardiff cottage where every square foot matters or a larger New Encinitas home with a defined media space.",
      schedulingNote:
        "Most Encinitas TV installs are planned to locate studs, mount the bracket, hang the TV, and route basic cables in one visit. Multiple TVs in connected rooms are often grouped so the work is efficient.",
      fitGood: [
        "Mounting TVs on interior drywall walls with accessible stud framing.",
        "Installing tilt or full-motion mounts for living rooms, bedrooms, and open-plan areas.",
        "Integrating simple soundbars, streaming devices, and basic audio into the setup.",
        "Organizing and concealing surface wiring with low-profile raceways where appropriate.",
        "Relocating TVs from stands or furniture to wall mounts in existing rooms.",
      ],
      fitNotGood: [
        "In-wall wiring requiring new electrical circuits or major wall work in finished spaces.",
        "Mounting on fireplace stone, brick, or tile without appropriate anchors and planning.",
        "Complex multi-room AV systems with multiple zones and professional control equipment.",
        "Outdoor or unusually high installations requiring lifts or specialized mounting hardware.",
      ],
      localNote:
        "Open floor plans are common in both older Encinitas cottages and newer homes, and wall-mounted TVs help those spaces stay flexible and uncluttered. In Cardiff and Leucadia, smaller rooms benefit especially from keeping TVs off furniture. In New Encinitas and Olivenhain, larger family rooms call for properly centered, well-anchored mounts that match the room's finish level.",
      audienceNotes: {
        homeowners:
          "Mounting TVs in Encinitas living spaces so rooms feel intentional and open rather than defined by a screen sitting on a stand.",
        rentals:
          "Installing wall-mounted TVs in rentals so the setup is durable, easy to clean around, and looks polished in listing photos.",
        businesses:
          "Mounting TVs in studios, lobbies, and small meeting rooms without turning it into a major AV project.",
      },
      reviewSnippet: {
        quote:
          "Small living room, and having the TV on the wall instead of a stand made a huge difference for how the space feels. Clean and done right.",
        name: "Becca H.",
        location: "Cardiff-by-the-Sea, CA",
        role: "Homeowner",
      },
    },
  },

  // --------------------
  // VISTA
  // --------------------
  vista: {
    "carpentry-woodwork": {
      intro:
        "Carpentry visits in Vista focus on practical repairs—fence sections that have finally given out, interior doors that have dropped or swollen in older homes, and small exterior details that need straightforward fixes rather than cosmetic overhauls.",
      schedulingNote:
        "Most Vista carpentry projects are scoped so key fence, gate, and interior door repairs can be completed in one direct visit. Larger fence runs or multi-room trim work is broken into clear sections so timing and cost stay predictable.",
      fitGood: [
        "Repairing or replacing damaged fence sections and failing gates in Shadowridge and Twin Oaks Valley neighborhoods where dry inland air and sun accelerate wood movement.",
        "Adjusting interior doors that have dropped or stuck in older Vista Village area and Buena Creek properties.",
        "Adding garage shelving, laundry room storage, and utility closet organization to homes that have been waiting for a practical fix.",
        "Fixing exterior wood details around door surrounds and steps before small splits turn into larger repairs.",
      ],
      fitNotGood: [
        "Full property-line fence replacements requiring permits and multi-week timelines.",
        "Structural framing changes or wall removals requiring engineering review.",
        "Large deck builds or extensive exterior rebuilds.",
      ],
      localNote:
        "Vista's housing stock ranges from 1960s-70s ranch homes in the Vista Village area to 1980s-90s Shadowridge track homes and some manufactured housing in the Twin Oaks corridor. Many homes have original or near-original wood fences and interior doors that are ready for straightforward repair rather than full replacement. Practical, durable fixes that get things working again are the priority here.",
      audienceNotes: {
        homeowners:
          "Getting fences, gates, and interior doors working properly again so your Vista home feels cared for without overcomplicating a practical repair.",
        rentals:
          "Tightening up exterior gates and basic interior carpentry between tenants in Vista rental homes so properties stay functional and easy to re-rent.",
        businesses:
          "Straightforward carpentry repairs for Vista offices, service businesses, and light industrial spaces—shelving, trim, and small fixes that work rather than impress.",
      },
      reviewSnippet: {
        quote:
          "Our Shadowridge fence had a whole section leaning over and a few interior doors stuck all summer. They handled all of it in one visit.",
        name: "Tony R.",
        location: "Vista, CA",
        role: "Homeowner",
      },
    },

    electrical: {
      intro:
        "Electrical visits in Vista focus on practical lighting, fan, and control upgrades that make homes brighter and easier to live in—without turning every project into a formal electrician call.",
      schedulingNote:
        "Most Vista electrical visits are scheduled as grouped, focused appointments so fixtures in the same area of the home can be addressed together, shutting off circuits once and testing everything before leaving.",
      fitGood: [
        "Replacing interior fixtures and ceiling fans in older Vista Village, Buena Creek, and Shadowridge homes where original or outdated fixtures are still in place.",
        "Adding dimmers or basic smart switches in main living areas where wiring configuration and box depth allow.",
        "Troubleshooting a single non-urgent issue at a specific outlet, switch, or fixture that stopped working.",
        "Swapping vanity lights, kitchen fixtures, and entry lights with homeowner-provided options.",
      ],
      fitNotGood: [
        "Service panel replacements, new subpanels, or meter work.",
        "New circuit runs for additions, large appliances, or EV chargers.",
        "Emergency electrical situations—burning smells, arcing, or breakers that will not reset.",
        "Large outdoor or landscape lighting projects requiring new underground wiring.",
      ],
      localNote:
        "Vista's older homes in the Vista Village and Buena Creek areas may have had fixtures and wiring patched over the years without a clear upgrade path. In Shadowridge and Twin Oaks Valley, homes are more consistent but still often running on original 1980s-90s fixtures. A focused visit on main living spaces and bedrooms makes the most visible improvement quickly without a large project.",
      audienceNotes: {
        homeowners:
          "Making Vista homes brighter and more comfortable with practical fixture and fan updates that do not require a full electrician or a multi-day project.",
        rentals:
          "Swapping dated fixtures and handling basic electrical annoyances between tenants in Vista rentals so properties stay comfortable and attractive.",
        businesses:
          "Light electrical updates for Vista offices, service businesses, and studios that need better lighting on a planned, predictable schedule.",
      },
      reviewSnippet: {
        quote:
          "They updated the fans and lights in three rooms while I was at work. House looks completely different when I got home—no fuss.",
        name: "Sylvia M.",
        location: "Vista, CA",
        role: "Homeowner",
      },
    },

    "plumbing-fixtures-repairs": {
      intro:
        "Plumbing visits in Vista focus on getting small repairs done efficiently—faucets that drip, toilets that run all night, and fixtures that are simply worn out and need replacement before small annoyances become real water bills.",
      schedulingNote:
        "Most Vista plumbing visits are planned to handle a cluster of fixtures in the same area of the home at once so water gets shut off once, repairs happen, and everything is tested before the appointment ends.",
      fitGood: [
        "Replacing kitchen and bath faucets in older Vista homes where hard inland water has worn out cartridges and aerators.",
        "Swapping shower heads and hand showers for simpler, easier-to-clean options without opening walls.",
        "Addressing running or constantly cycling toilets with new flapper assemblies and fill valves.",
        "Replacing garbage disposers and visible P-traps or supply connections that are leaking.",
      ],
      fitNotGood: [
        "Slab leaks, main line problems, or water appearing inside walls or ceilings.",
        "Large repipes or major drain replacements requiring extensive demolition.",
        "Complex shower valve repairs requiring tile removal.",
        "Main shutoff or sewer line work requiring licensed specialty equipment.",
      ],
      localNote:
        "Vista's hard water is tougher on faucet cartridges, aerators, and supply lines than coastal communities where humidity plays the bigger role. Older homes in Vista Village and Buena Creek often have original fixtures that are well past their service life. Grouping a faucet swap, toilet repair, and disposer replacement into one visit is the most efficient way to refresh a kitchen or bath in this market.",
      audienceNotes: {
        homeowners:
          "Fixing the dripping faucets, running toilets, and worn fixtures in Vista homes so kitchens and bathrooms feel functional and quiet again.",
        rentals:
          "Handling fixture repairs and small plumbing annoyances between tenants in Vista rental homes so issues do not grow into larger maintenance problems.",
        businesses:
          "Small plumbing fixes in restrooms and break areas at Vista offices and service businesses.",
      },
      reviewSnippet: {
        quote:
          "Hard water had destroyed the faucet in the main bath and the kitchen faucet wobbled every time you used it. They swapped both plus the disposer in one trip.",
        name: "Luis G.",
        location: "Vista, CA",
        role: "Homeowner",
      },
    },

    "honey-do-lists-small-repairs": {
      intro:
        "Honey-do visits in Vista are built for homeowners and small landlords who need to clear a backlog of practical repairs efficiently—not one trade at a time, but everything together in a single organized visit.",
      schedulingNote:
        "Visits are planned with a prioritized list shared in advance so work flows from the most important items first. Related tasks in the same room or area are batched together to make the most of the time.",
      fitGood: [
        "A mixed list of practical repairs—adjusting doors that have stuck all summer, tightening gate hardware, patching obvious wall damage, and replacing worn fixtures or hardware.",
        "Move-in or move-out checklists for Vista rental homes where landlords need a thorough pass before the next tenant.",
        "Pre-sale touch-ups for homeowners in Shadowridge or Twin Oaks Valley addressing obvious small issues before listing.",
        "Adding basic weatherstripping, adjusting thresholds, and other low-cost comfort improvements.",
      ],
      fitNotGood: [
        "Full repainting projects, large drywall replacement, or flooring work.",
        "Full remodels requiring permits and multiple trades on site.",
        "Restoration work after significant water damage, flooding, or fire.",
        "Jobs where scope is uncertain and likely to grow beyond one well-planned visit.",
      ],
      localNote:
        "Vista homeowners and small landlords often manage properties without a regular maintenance crew, which means small repairs accumulate. A single, well-planned honey-do visit handles the kind of list—door adjustments, fence hardware, wall patches, fixture swaps—that would otherwise require scheduling four or five separate service calls.",
      audienceNotes: {
        homeowners:
          "Getting through the accumulated list of small repairs in your Vista home so the place feels properly maintained, not just occasionally attended to.",
        rentals:
          "Clearing move-in and move-out checklists for Vista rentals in one efficient trip rather than coordinating multiple trades over multiple days.",
        businesses:
          "Handling small maintenance items in Vista offices and service spaces so day-to-day operations are not interrupted by persistent small problems.",
      },
      reviewSnippet: {
        quote:
          "I had been putting off a list of about ten small things for months. They came in, worked through the whole list, and I could not believe how different the house felt.",
        name: "Kim B.",
        location: "Shadowridge, CA",
        role: "Homeowner",
      },
    },

    "furniture-assembly-installation": {
      intro:
        "Furniture assembly visits in Vista focus on getting new pieces out of boxes and into working rooms quickly—whether for a busy Shadowridge household or a landlord outfitting a rental in the Vista Village area.",
      schedulingNote:
        "Most Vista furniture visits are planned by room so pieces are assembled in logical sequence—beds first, then dressers, then desk or storage—and everything is placed and anchored before moving on.",
      fitGood: [
        "Assembling bedroom furniture—beds, dressers, bunk beds—for busy households in Shadowridge and Twin Oaks Valley.",
        "Building out desk, shelving, and seating arrangements for home offices and study areas.",
        "Anchoring tall bookshelves, wardrobes, and storage units to walls for safety in active households.",
        "Installing wall shelves, coat hooks, and basic storage on interior drywall walls.",
        "Hanging mirrors and artwork where stud framing is accessible.",
      ],
      fitNotGood: [
        "Custom built-in carpentry requiring fabrication and design.",
        "Large commercial office or retail rollouts with multiple installers and a structured project schedule.",
        "Very heavy pieces requiring professional rigging or moving equipment.",
        "Projects requiring relocating existing large furniture between floors.",
      ],
      localNote:
        "Vista households tend to be practical and busy—families with kids, working adults, and small landlords managing multiple properties. Furniture assembly visits here focus on speed and solid results: rooms assembled correctly, pieces properly anchored, and the space usable the same day without fanfare.",
      audienceNotes: {
        homeowners:
          "Getting new furniture assembled and placed in Vista homes so rooms are functional right away without spending a weekend deciphering flat-pack instructions.",
        rentals:
          "Setting up beds and basic furniture in Vista rental units so they are ready for new tenants on move-in day.",
        businesses:
          "Assembling desks, chairs, and storage for Vista office and service spaces with minimal downtime.",
      },
      reviewSnippet: {
        quote:
          "Bunk beds, two dressers, a desk—all assembled in one afternoon. Kids were sleeping in their new room that same night.",
        name: "Pam H.",
        location: "Vista, CA",
        role: "Homeowner",
      },
    },

    "drywall-repair": {
      intro:
        "Drywall repair visits in Vista focus on getting walls and ceilings looking clean again in high-use homes where door dings, anchor holes, and tenant damage are a normal part of the maintenance cycle.",
      schedulingNote:
        "Most Vista drywall work is scoped to handle a set of repairs in the same part of the home during one visit. Larger damage areas or rooms needing multiple coats are scoped with clear drying-time expectations.",
      fitGood: [
        "Patching holes from door handles, old anchors, removed shelving, and tenant damage in both owner-occupied homes and rental properties.",
        "Repairing cracks along seams, corners, and around doors and windows in older Vista Village area and Buena Creek homes.",
        "Blending small areas of new texture into existing knockdown or orange peel finishes.",
        "Smoothing previous rough patches that stand out under direct lighting.",
        "Touching up small ceiling areas after minor plumbing or electrical fixes.",
      ],
      fitNotGood: [
        "Widespread water damage or mold requiring professional remediation before any patch work.",
        "Whole-home resurfacing or skim coating projects.",
        "Popcorn ceiling removal across large areas.",
        "Foundation or structural movement that continues to produce new cracking.",
      ],
      localNote:
        "Vista rental properties and older owner-occupied homes see consistent drywall wear in high-traffic areas—hallways, bedrooms near doors, and around hardware that gets pulled on daily. Many visits in Vista focus on making those areas look clean and maintained rather than achieving a showroom finish, which keeps results realistic and cost-effective.",
      audienceNotes: {
        homeowners:
          "Cleaning up the dings, holes, and cracks in the most-used rooms of your Vista home so the space feels maintained rather than neglected.",
        rentals:
          "Patching tenant damage and smoothing walls between occupants so Vista rentals look acceptable for photos and move-in.",
        businesses:
          "Fixing small wall damage in Vista offices and service spaces so customer and employee areas look maintained.",
      },
      reviewSnippet: {
        quote:
          "Our tenant left a good amount of wall damage. They patched and textured everything in one visit and the rooms were ready to photograph the same week.",
        name: "Gary N.",
        location: "Vista, CA",
        role: "Landlord",
      },
    },

    "tv-mounting": {
      intro:
        "TV mounting visits in Vista focus on practical, durable installs that free up floor space in busy family rooms and bedrooms without overcomplicating the job.",
      schedulingNote:
        "Most Vista TV installs are planned so stud location, bracket mounting, TV hanging, and basic cable organization happen in one focused visit. Multiple TVs in the same home are often grouped for efficiency.",
      fitGood: [
        "Mounting TVs on interior drywall walls in family rooms and bedrooms where wood studs are accessible.",
        "Installing tilt or full-motion mounts with homeowner-provided hardware.",
        "Setting up basic soundbars and streaming devices on or adjacent to the wall.",
        "Organizing and managing surface wiring with raceways where the wall or room allows.",
        "Moving TVs from bulky entertainment centers or stands to clean wall mounts.",
      ],
      fitNotGood: [
        "In-wall power or signal runs requiring new electrical circuits or low-voltage cable runs inside finished walls.",
        "Commercial video walls or multi-screen AV systems.",
        "Mounting on masonry, brick, or tile surfaces without appropriate anchor planning.",
        "Exterior or unusually high installs requiring lift equipment or specialized hardware.",
      ],
      localNote:
        "Vista family rooms tend to be practical spaces where freeing up floor area from a TV stand makes a genuine difference. Many homes in Shadowridge and the Vista Village area have older entertainment centers or bulky TV furniture that would benefit from being replaced with a clean wall mount and properly managed cables.",
      audienceNotes: {
        homeowners:
          "Mounting TVs in Vista living rooms and bedrooms so spaces feel more open and easier to use for everyday family life.",
        rentals:
          "Installing wall-mounted TVs in Vista rental units for durability and easy cleaning between tenants.",
        businesses:
          "Mounting TVs in waiting areas, break rooms, and small meeting spaces for Vista offices without a big AV project.",
      },
      reviewSnippet: {
        quote:
          "They got rid of our big entertainment center by mounting the TV, and the family room feels twice as big now.",
        name: "Jerome C.",
        location: "Vista, CA",
        role: "Homeowner",
      },
    },
  },

  // --------------------
  // SAN MARCOS
  // --------------------
  "san-marcos": {
    "carpentry-woodwork": {
      intro:
        "Carpentry visits in San Marcos focus on two things: personalizing the newer construction in San Elijo Hills and Discovery Hills so homes feel less builder-standard, and handling the practical repairs that cycle through student and faculty rental properties near Cal State San Marcos.",
      schedulingNote:
        "Most San Marcos carpentry work fits into a single visit. Larger trim upgrades or built-in projects in San Elijo Hills homes are broken into clear, well-communicated phases.",
      fitGood: [
        "Adding shelving, cubbies, and organized storage in entryways, garages, and home offices in San Elijo Hills and Old Creek Ranch homes.",
        "Adjusting interior doors and refitting trim in townhomes and condos near CSUSM that have moved through normal post-construction settlement.",
        "Refreshing baseboards and casing in main living areas where builder-standard trim can be meaningfully improved.",
        "Repairing fence sections and patio gates in older Lake San Marcos properties and some Discovery Hills homes.",
      ],
      fitNotGood: [
        "Structural changes, wall removals, or additions requiring engineering permits.",
        "Complex custom cabinetry better suited to a dedicated shop.",
        "Large exterior deck or pergola builds requiring long timelines and permit coordination.",
      ],
      localNote:
        "San Marcos has a high proportion of newer construction across San Elijo Hills, Discovery Hills, and Old Creek Ranch—most of it built in the 2000s and 2010s. Carpentry visits here usually focus on moving past the builder-basic and personalizing spaces with practical storage and improved trim. Near CSUSM, rental properties see carpentry repairs that come from tenant use rather than age.",
      audienceNotes: {
        homeowners:
          "Personalizing the trim, storage, and small woodwork details in your San Elijo Hills or Discovery Hills home so it feels less like a spec house and more like yours.",
        rentals:
          "Handling door, trim, and gate repairs between student and faculty tenants near CSUSM so rental properties stay functional and easy to re-rent.",
        businesses:
          "Shelving, display, and small carpentry adjustments for San Marcos professional offices and commercial suites.",
      },
      reviewSnippet: {
        quote:
          "We added shelves and refreshed the casing in our main living area. Made a big difference in how the room feels—finally looks intentional.",
        name: "Rachel V.",
        location: "San Elijo Hills, CA",
        role: "Homeowner",
      },
    },

    electrical: {
      intro:
        "Electrical visits in San Marcos focus on moving newer homes past builder-basic lighting and controls—and on keeping rental properties near Cal State San Marcos functional and reliable for student and faculty tenants.",
      schedulingNote:
        "Most small electrical projects in San Marcos are scheduled as focused visits that group fixtures and controls in the same rooms, keeping work efficient and minimizing the number of circuit shutoffs.",
      fitGood: [
        "Replacing builder-grade kitchen, dining, and entry fixtures with homeowner-selected upgrades in San Elijo Hills and Discovery Hills homes.",
        "Updating ceiling fans in bedrooms and living areas where boxes are properly supported.",
        "Adding dimmers or smart switches in open-plan living spaces where wiring configuration and box depth allow.",
        "Troubleshooting a single non-urgent outlet, switch, or light that has stopped working.",
      ],
      fitNotGood: [
        "Panel upgrades, service size changes, or new subpanel installations.",
        "New circuit runs for EV chargers, large appliances, or additions.",
        "Emergency electrical problems—burning smells, arcing, or breakers that will not stay reset.",
        "HOA common-area or exterior lighting managed at the association level.",
      ],
      localNote:
        "San Marcos has a large inventory of newer construction where builder-grade fixtures were selected for cost, not character. A focused visit on main living areas—open-plan kitchen and dining rooms, living rooms, and primary bedrooms—delivers the most visible upgrade in the least time. Near CSUSM, rental properties benefit from reliable fixture replacements that hold up to tenant use.",
      audienceNotes: {
        homeowners:
          "Replacing the builder-basic fixtures and controls in your San Marcos home so key living areas feel more intentional and comfortable.",
        rentals:
          "Keeping electrical fixtures reliable and functional in student and faculty rentals near CSUSM so tenants stay comfortable and landlords avoid frequent callbacks.",
        businesses:
          "Lighting improvements for professional offices and commercial suites in San Marcos that need a brighter, more professional environment.",
      },
      reviewSnippet: {
        quote:
          "Our Discovery Hills home still had every original fixture from when it was built. They swapped the main ones and added dimmers and it finally feels like our house.",
        name: "Mia T.",
        location: "San Marcos, CA",
        role: "Homeowner",
      },
    },

    "plumbing-fixtures-repairs": {
      intro:
        "Plumbing visits in San Marcos focus on the natural upgrade cycle in newer homes—builder-grade faucets and disposers ready to be replaced—and on the practical repairs that student and faculty rentals near CSUSM regularly generate.",
      schedulingNote:
        "Most San Marcos plumbing visits are planned to handle a cluster of fixtures in the same kitchen or bath so water can be shut off once, repairs and replacements made, and everything tested before the appointment ends.",
      fitGood: [
        "Replacing kitchen and bath faucets with homeowner-supplied upgrades in San Elijo Hills, Discovery Hills, and Old Creek Ranch homes.",
        "Swapping shower heads and hand showers for better performance without opening walls.",
        "Addressing running or constantly cycling toilets with new fill valve and flapper assemblies.",
        "Replacing garbage disposers and accessible under-sink P-traps or supply connections that are leaking.",
      ],
      fitNotGood: [
        "Hidden leaks inside walls, slab leaks, or any water appearing in ceilings or under flooring.",
        "Large repipes or major drain replacements requiring significant demolition.",
        "Complex shower valve replacements requiring tile removal.",
        "Main shutoff or sewer line work requiring licensed specialty equipment.",
      ],
      localNote:
        "San Marcos homes in San Elijo Hills and Discovery Hills were built in the late 1990s through 2010s, and many are now in the window where original builder-grade faucets, disposers, and toilet internals are ready to be replaced. Near CSUSM, rental properties see more regular fixture wear from tenant use and benefit from straightforward swaps that reduce future maintenance calls.",
      audienceNotes: {
        homeowners:
          "Upgrading kitchen and bath fixtures in your San Marcos home from builder-standard to something that actually matches the rest of your renovation and taste.",
        rentals:
          "Handling reliable fixture swaps between student and faculty tenants near CSUSM so rentals stay comfortable and low-maintenance.",
        businesses:
          "Small plumbing repairs in San Marcos office and commercial suite restrooms and break areas.",
      },
      reviewSnippet: {
        quote:
          "We replaced the kitchen faucet, both bathroom faucets, and fixed a running toilet in one appointment. The kitchen finally looks like the rest of the remodel we did.",
        name: "Scott A.",
        location: "San Marcos, CA",
        role: "Homeowner",
      },
    },

    "honey-do-lists-small-repairs": {
      intro:
        "Honey-do visits in San Marcos are built around two recurring situations—families in San Elijo Hills clearing an accumulated punch list, and landlords with student or faculty rentals near CSUSM who need efficient semester-turnover visits.",
      schedulingNote:
        "Visits are planned with a prioritized list so work can move efficiently from room to room and the most important items are always completed first within the scheduled window.",
      fitGood: [
        "A mixed list that might include adjusting sticky doors, patching wall damage, swapping hardware, and addressing small exterior issues in San Elijo Hills or Discovery Hills homes.",
        "Move-in and move-out punch lists for student and faculty rentals near CSUSM—patching walls, tightening hardware, swapping worn fixtures.",
        "Pre-listing touch-ups for San Marcos homeowners preparing to sell—addressing visible small issues before professional photos.",
        "Adding basic organizational hardware—closet rods, hooks, shelving—that makes a home more functional.",
      ],
      fitNotGood: [
        "Full painting projects, large-scale drywall work, or flooring replacement.",
        "Major remodels requiring plans, permits, and multiple trades on site.",
        "Emergency restoration after flooding or fire.",
        "Projects where scope is undefined and likely to grow beyond one visit.",
      ],
      localNote:
        "San Marcos has a reliable semester-driven rhythm for student rental turnover in the CSUSM area. Landlords who schedule honey-do visits around lease changes avoid the situation where small items pile up into a bigger maintenance backlog. San Elijo Hills homeowners often use similar visits to catch up on accumulated small repairs before a listing or family milestone.",
      audienceNotes: {
        homeowners:
          "Getting through the list of small improvements and repairs that keeps your San Elijo Hills or Discovery Hills home from feeling fully caught up.",
        rentals:
          "Clearing student and faculty rental punch lists at the start and end of each lease so properties stay competitive and easy to rent.",
        businesses:
          "Handling small maintenance items in San Marcos professional offices and commercial suites so operations continue without interruption.",
      },
      reviewSnippet: {
        quote:
          "We have two rentals near CSUSM and always have a list at the end of each semester. They knock it out in one visit so we're ready for the next lease.",
        name: "Ken W.",
        location: "San Marcos, CA",
        role: "Landlord",
      },
    },

    "furniture-assembly-installation": {
      intro:
        "Furniture assembly visits in San Marcos cover the range from growing families setting up new rooms in San Elijo Hills to students and faculty moving into CSUSM-area housing who need efficient same-day setup.",
      schedulingNote:
        "Most San Marcos furniture visits are planned by room—bedroom, office, or living area—so pieces are assembled in sequence, placed correctly, and anchored before moving to the next space.",
      fitGood: [
        "Assembling bedroom sets, bunk beds, and storage furniture for families in San Elijo Hills, Discovery Hills, and Old Creek Ranch.",
        "Building out home office and study areas with desks, shelving, and seating.",
        "Anchoring tall furniture—bookshelves, wardrobes, tall dressers—to walls for safety in busy households.",
        "Installing wall shelves, coat hooks, and basic storage in entries, laundry rooms, and garages.",
        "Hanging artwork and mirrors on interior drywall walls.",
      ],
      fitNotGood: [
        "Custom built-in furniture requiring carpentry and shop fabrication.",
        "Large commercial or corporate office rollouts with multiple installers.",
        "Very heavy or specialty pieces requiring professional rigging or moving equipment.",
        "Projects requiring moving large existing furniture between floors.",
      ],
      localNote:
        "San Marcos households change frequently—growing families in newer developments, students and faculty rotating through CSUSM-area housing—and efficient furniture setup makes those transitions less disruptive. Many visits combine bedroom assembly with a home office or study area so the whole home functions well from the first day.",
      audienceNotes: {
        homeowners:
          "Getting new furniture assembled, placed, and anchored in San Marcos homes so rooms are usable right away instead of waiting weeks to get around to it.",
        rentals:
          "Outfitting student and faculty rentals near CSUSM with assembled, properly anchored furniture so units are move-in ready.",
        businesses:
          "Assembling desks and basic office furniture for San Marcos professional offices and commercial spaces with minimal downtime.",
      },
      reviewSnippet: {
        quote:
          "We moved into our San Elijo Hills house with a full garage of boxes. They did the kids' rooms and our home office in one day and we felt settled immediately.",
        name: "Diana L.",
        location: "San Elijo Hills, CA",
        role: "Homeowner",
      },
    },

    "drywall-repair": {
      intro:
        "Drywall repair visits in San Marcos focus on keeping newer homes looking as clean as they did at move-in, and on handling the wall damage that cycles through student and faculty rentals near CSUSM.",
      schedulingNote:
        "Most drywall work in San Marcos is scoped to address a cluster of patches and cracks in the same rooms during one visit, with clear expectations if a second pass is needed for drying time or additional coats.",
      fitGood: [
        "Patching holes from previous TV mounts, anchor points, and removed shelving in San Elijo Hills and Discovery Hills homes.",
        "Addressing tenant damage in CSUSM-area rental walls—punched holes, anchor damage, and door-handle impacts.",
        "Repairing cracks at corners, stairwells, and around door frames in newer construction.",
        "Blending limited areas of new texture into existing smooth or lightly textured finishes.",
        "Touching up small ceiling areas after minor plumbing or electrical repairs.",
      ],
      fitNotGood: [
        "Widespread water or mold damage requiring professional remediation.",
        "Whole-home skim coating or complete texture changes.",
        "Popcorn ceiling removal across multiple rooms.",
        "Structural problems that continue to produce new cracking despite repairs.",
      ],
      localNote:
        "Newer construction in San Marcos—particularly in San Elijo Hills—uses finishes that make even small patches highly visible if not matched and blended carefully. Rental properties near CSUSM cycle through tenants regularly and often accumulate wall damage faster than owner-occupied homes. Many visits focus on making the most visible rooms look fresh and neutral again.",
      audienceNotes: {
        homeowners:
          "Keeping walls and ceilings in your San Elijo Hills or Discovery Hills home looking as crisp as newer construction should.",
        rentals:
          "Patching and smoothing walls between student and faculty tenants near CSUSM so properties look maintained and photograph well for new leases.",
        businesses:
          "Repairing wall damage in San Marcos professional offices and commercial suites so client areas reflect the quality of your practice.",
      },
      reviewSnippet: {
        quote:
          "Our rental had wall damage in most of the bedrooms after a student tenancy. They patched everything, matched the texture, and the walls looked new for the incoming tenant.",
        name: "Janet P.",
        location: "San Marcos, CA",
        role: "Landlord",
      },
    },

    "tv-mounting": {
      intro:
        "TV mounting visits in San Marcos address two common needs: families setting up living rooms and loft spaces in San Elijo Hills homes, and landlords and tenants mounting TVs in rental properties near CSUSM.",
      schedulingNote:
        "Most San Marcos TV installs are scoped to mount one or more TVs in the same general area of the home, handle basic cable organization, and confirm the setup works before leaving—all in one visit.",
      fitGood: [
        "Mounting TVs on interior drywall with accessible wood stud framing in family rooms, living areas, and bedrooms.",
        "Installing tilt or full-motion mounts in open-plan living areas and loft spaces common in San Elijo Hills and Discovery Hills townhomes.",
        "Setting up simple soundbars and streaming devices alongside the TV.",
        "Organizing and concealing surface cables with low-profile raceways where appropriate.",
        "Moving TVs from stands or entertainment centers to clean wall mounts.",
      ],
      fitNotGood: [
        "In-wall wiring projects requiring new electrical circuits or low-voltage runs in finished walls.",
        "Complex commercial AV setups with multiple screens and zoned audio.",
        "Mounting on stone fireplace surrounds or tile without appropriate anchoring and planning.",
        "Outdoor or unusually high installations requiring specialized equipment or safety measures.",
      ],
      localNote:
        "Open-plan living areas in San Elijo Hills and Discovery Hills townhomes benefit from wall-mounted TVs that keep floor space open. Student and faculty rentals near CSUSM often benefit from mounted TVs that are more durable and easier to maintain than TVs on stands, which see more wear during tenant transitions.",
      audienceNotes: {
        homeowners:
          "Mounting TVs so San Marcos family rooms and living areas feel open and organized without entertainment furniture taking over the space.",
        rentals:
          "Installing wall-mounted TVs in CSUSM-area rentals for durability and ease of cleaning between tenants.",
        businesses:
          "Mounting TVs in conference rooms, common areas, and break spaces for San Marcos offices and commercial tenants without a major AV project.",
      },
      reviewSnippet: {
        quote:
          "They mounted TVs in the family room and our loft and organized the cables. Looks intentional now instead of like we just moved in.",
        name: "Eric S.",
        location: "San Elijo Hills, CA",
        role: "Homeowner",
      },
    },
  },

  // --------------------
  // BRESSI RANCH
  // --------------------
  "bressi-ranch": {
    "carpentry-woodwork": {
      intro:
        "Carpentry visits in Bressi Ranch focus on two things: personalizing the interior woodwork in homes built between 2002 and 2015 that are ready to move past builder-standard trim, and keeping courtyard gates and side-yard entries in good working order.",
      schedulingNote:
        "Most Bressi Ranch carpentry work fits into a single visit. Larger trim upgrades or built-in shelving projects in lofts and home offices are broken into clear phases by room.",
      fitGood: [
        "Adding built-in shelving, office niches, and organized storage in the lofts and home offices that are common in Bressi Ranch floor plans.",
        "Adjusting and refitting interior doors and casings where 15-20 years of normal settlement have left gaps and binding.",
        "Refreshing baseboards and trim in main-floor living and dining areas where builder-grade material has started to show wear or gaps at joints.",
        "Repairing and re-hanging courtyard gates, side-yard entries, and rear-yard fence sections that have shifted or lost hardware.",
      ],
      fitNotGood: [
        "Large structural changes or additions requiring HOA approval, engineering, and permits.",
        "Complex custom cabinetry projects better suited to a dedicated millwork shop.",
        "Major deck or pergola rebuilds requiring multi-week timelines and separate contractor coordination.",
      ],
      localNote:
        "Bressi Ranch homes were built in two primary waves—early 2000s and early 2010s. The earlier homes are now 20-plus years old and regularly need door adjustments, trim refresh, and gate repairs that come from normal settlement and use. The later builds are just reaching the point where owners are ready to move past builder finishes and make spaces feel more tailored to how they actually live.",
      audienceNotes: {
        homeowners:
          "Bringing trim, storage, and exterior woodwork in your Bressi Ranch home up to the community's finish standard and your own taste—whether that means a few door adjustments or a proper loft built-in.",
        rentals:
          "Keeping doors, trim, and courtyard gates in good working order between tenants so Bressi Ranch rental homes remain competitive and well-maintained.",
        businesses:
          "Carpentry improvements for small offices and professional suites in the Bressi Ranch area—shelving, display, and functional repairs where clients notice them.",
      },
      reviewSnippet: {
        quote:
          "Our 2004 Bressi Ranch home needed trim refresh in several rooms and our courtyard gate had been sticking for years. Both handled in one visit.",
        name: "Amanda F.",
        location: "Bressi Ranch, CA",
        role: "Homeowner",
      },
    },

    electrical: {
      intro:
        "Electrical visits in Bressi Ranch focus on replacing the builder-standard fixtures, fans, and controls installed in the early 2000s and 2010s with options that better match how the community actually lives today.",
      schedulingNote:
        "Most small electrical projects in Bressi Ranch are scheduled as focused visits that group fixtures in adjacent rooms so work is efficient, circuits are shut off once, and everything is tested and labeled before leaving.",
      fitGood: [
        "Replacing builder-basic kitchen, dining, and entry fixtures with homeowner-selected upgrades that better match the aesthetic of an improved Bressi Ranch home.",
        "Updating ceiling fans in main bedrooms and family rooms to quieter, more efficient models where boxes are properly supported.",
        "Adding dimmers and smart switches in open-plan main floors where neutral wiring is present and box depth allows.",
        "Troubleshooting a single non-urgent outlet, switch, or light that has stopped working after years of use.",
      ],
      fitNotGood: [
        "Service panel upgrades, meter relocations, or new subpanel installations.",
        "New circuit runs for EV chargers, major appliances, or additions requiring permits.",
        "Emergency situations—burning smells, arcing, or breakers that will not stay reset.",
        "HOA-managed exterior or community lighting.",
      ],
      localNote:
        "Bressi Ranch's newer construction means homes are generally well-wired, but the original fixtures and controls reflect the builder's cost priorities rather than the homeowner's taste. Many projects start with the main floor—open-plan kitchen, dining, and living areas—and the primary bedroom, where updated lighting and dimmer control make the largest visible difference.",
      audienceNotes: {
        homeowners:
          "Replacing the builder-grade fixtures and switches in your Bressi Ranch home so key spaces feel more finished and in line with what your other updates deserve.",
        rentals:
          "Swapping fixtures between tenants and handling basic electrical annoyances so Bressi Ranch rentals stay at the quality level the neighborhood commands.",
        businesses:
          "Lighting improvements for small professional offices and studios serving the Bressi Ranch and east Carlsbad community.",
      },
      reviewSnippet: {
        quote:
          "We finally replaced the original light fixtures on the main floor. The space feels completely different—like we actually chose the finishes.",
        name: "Derek N.",
        location: "Bressi Ranch, CA",
        role: "Homeowner",
      },
    },

    "plumbing-fixtures-repairs": {
      intro:
        "Plumbing visits in Bressi Ranch focus on the first-generation upgrade cycle: replacing the original builder-grade faucets, disposers, and toilet internals that have reached the end of their service life in homes built 10-20 years ago.",
      schedulingNote:
        "Most Bressi Ranch plumbing visits are planned to handle a cluster of fixtures in the same kitchen or bath so water can be shut off once, repairs and upgrades made, and everything tested before the window ends.",
      fitGood: [
        "Replacing builder-standard kitchen and bath faucets with homeowner-selected upgrades where existing shutoffs are accessible and in good condition.",
        "Swapping shower heads and hand showers in all bathrooms for better performance and cleaner aesthetics without opening walls.",
        "Addressing running or constantly cycling toilets with new fill valve and flapper assemblies—very common in 15-20 year old construction.",
        "Replacing garbage disposers and leaking P-traps or supply connections at accessible joints.",
      ],
      fitNotGood: [
        "Hidden or slab leaks, main line failures, or water appearing inside walls, ceilings, or under flooring.",
        "Large repipes or drain replacement projects requiring significant demolition.",
        "Complex shower valve repairs requiring tile removal in tiled surrounds.",
        "Main shutoff replacements or sewer line issues requiring licensed specialty equipment.",
      ],
      localNote:
        "Bressi Ranch homes were built primarily between 2002 and 2012 using builder-grade plumbing fixtures that are now reaching the natural end of their service life. Hard water in east Carlsbad accelerates wear on cartridges, aerators, and supply connections. Many homeowners here are doing their first proper round of kitchen and bath fixture upgrades—replacing builder faucets, updating shower hardware, and refreshing toilet internals that have been running intermittently.",
      audienceNotes: {
        homeowners:
          "Completing your first real round of kitchen and bath fixture upgrades in your Bressi Ranch home—faucets, disposers, and toilet internals that are ready to be replaced with options that match your other updates.",
        rentals:
          "Reliable fixture replacements between tenants so Bressi Ranch rentals stay functional and competitive without frequent small maintenance calls.",
        businesses:
          "Small plumbing fixes in kitchenettes and restrooms for the offices and professional suites near Bressi Ranch.",
      },
      reviewSnippet: {
        quote:
          "Three bathrooms and the kitchen, all faucets replaced plus the kitchen disposer. Everything done in one visit and the kitchen finally matches the countertops we put in last year.",
        name: "Lisa K.",
        location: "Bressi Ranch, CA",
        role: "Homeowner",
      },
    },

    "honey-do-lists-small-repairs": {
      intro:
        "Honey-do visits in Bressi Ranch are designed for active homeowners who want their homes feeling sharp—whether clearing a pre-event punch list, preparing for listing, or simply addressing the accumulated items from a busy year.",
      schedulingNote:
        "Visits are planned with a shared, prioritized list so work flows logically from the main floor down, starting with the items that matter most in the most visible spaces.",
      fitGood: [
        "A mixed list—adjusting interior doors that have settled, patching obvious drywall dings, replacing worn hardware, touching up caulking, and swapping a tired fixture.",
        "Pre-listing preparation for Bressi Ranch homes headed to market—addressing visible small issues before professional photography.",
        "Pre-event punch lists before gatherings or family visits so the home feels truly ready.",
        "Move-in or move-out lists for rental properties, handled efficiently in a single visit.",
      ],
      fitNotGood: [
        "Full interior repainting, large-scale drywall replacement, or flooring projects.",
        "Full remodels requiring plans, permits, and multiple trades.",
        "Emergency restoration after major water damage or fire.",
        "Work where scope is undefined and likely to grow beyond a well-scoped visit.",
      ],
      localNote:
        "Bressi Ranch homeowners tend to have high expectations for how their homes look and function—consistent with a community that has HOA standards and a well-kept neighborhood character. A focused honey-do visit is one of the most effective tools for clearing the accumulated list of small items that get postponed in a busy household.",
      audienceNotes: {
        homeowners:
          "Getting your Bressi Ranch home fully caught up on small repairs and details so it feels as sharp as the neighborhood it is part of.",
        rentals:
          "Handling pre- and post-tenancy punch lists for Bressi Ranch rental homes so properties stay aligned with community appearance standards.",
        businesses:
          "Small maintenance adjustments for professional offices and studios serving the Bressi Ranch and nearby east Carlsbad community.",
      },
      reviewSnippet: {
        quote:
          "We were preparing for a big family gathering and had a list of maybe fifteen small things. They came in, knocked through the list, and the house felt genuinely ready.",
        name: "Stephanie H.",
        location: "Bressi Ranch, CA",
        role: "Homeowner",
      },
    },

    "furniture-assembly-installation": {
      intro:
        "Furniture assembly visits in Bressi Ranch focus on setting up the comfortable, finished spaces this community is known for—coordinated bedroom sets, home office lofts, and living areas that feel complete rather than half-furnished.",
      schedulingNote:
        "Most Bressi Ranch furniture visits are planned by room—loft, primary bedroom, living area, or home office—so pieces are assembled in sequence, placed correctly, and anchored before moving to the next space.",
      fitGood: [
        "Assembling coordinated bedroom sets, storage pieces, and nightstands in primary and guest bedrooms.",
        "Setting up home office lofts—a common feature of Bressi Ranch floor plans—with desks, monitor setups, shelving, and seating.",
        "Anchoring tall bookcases, wardrobes, and storage units to walls.",
        "Installing wall shelves, floating shelves, and simple cabinets on interior drywall walls.",
        "Hanging artwork, large mirrors, and gallery walls in main living areas.",
      ],
      fitNotGood: [
        "Custom built-in furniture requiring design, fabrication, and dedicated carpentry.",
        "Large commercial installations requiring multiple installers and a staged project schedule.",
        "Very heavy items requiring professional movers or rigging equipment.",
        "Projects involving significant rearrangement of existing large furniture.",
      ],
      localNote:
        "Bressi Ranch floor plans are well-suited to good furniture—open main floors, defined loft spaces, and bedrooms with real wall room. Many visits combine bedroom and home office setup in the same appointment so the home functions well for both living and work from day one, without two separate visits.",
      audienceNotes: {
        homeowners:
          "Getting new furniture assembled, placed, and anchored in your Bressi Ranch home so rooms look finished and function well without a weekend of DIY assembly.",
        rentals:
          "Outfitting Bressi Ranch rental properties with assembled, properly anchored furniture so units are move-in ready and present well in photos.",
        businesses:
          "Assembling desks, seating, and storage for professional offices and suites near Bressi Ranch with minimal disruption.",
      },
      reviewSnippet: {
        quote:
          "We did our loft home office and primary bedroom in one visit. Desks, shelves, a full bedroom set—all anchored properly. The house finally feels complete.",
        name: "Ryan P.",
        location: "Bressi Ranch, CA",
        role: "Homeowner",
      },
    },

    "drywall-repair": {
      intro:
        "Drywall repair visits in Bressi Ranch focus on keeping walls and ceilings looking as clean as they did when the home was new—whether fixing holes from a gallery wall refresh, patching cracks near doorways, or smoothing areas left by a recent lighting or TV upgrade.",
      schedulingNote:
        "Most Bressi Ranch drywall work is scoped to handle a set of targeted repairs during one visit, with clear expectations if a second pass is needed for drying time or additional texture coats.",
      fitGood: [
        "Patching holes from previous TV mounts, removed gallery walls, or light fixture changes in main-floor living areas and hallways.",
        "Repairing settlement cracks near door frames, window openings, and stairwell corners—natural in 15-20 year old construction.",
        "Blending limited areas of new texture into existing lightly textured or smooth finishes in Bressi Ranch homes.",
        "Smoothing obvious previous repairs that stand out under recessed lighting or natural light.",
        "Touching up small ceiling areas after minor plumbing or electrical repairs.",
      ],
      fitNotGood: [
        "Widespread water or mold damage requiring professional remediation.",
        "Whole-home resurfacing or complete texture-change projects.",
        "Popcorn ceiling removal across multiple rooms.",
        "Ongoing structural movement that continues to produce new cracking.",
      ],
      localNote:
        "Bressi Ranch's clean, newer construction means small drywall imperfections stand out more against an otherwise well-finished interior. Homes here often need careful texture blending to match existing light knockdown or smooth finishes. Many visits focus on the main floor and high-visibility hallways and entries—the spaces that guests and residents see most—so the overall impression stays sharp.",
      audienceNotes: {
        homeowners:
          "Keeping walls and ceilings in your Bressi Ranch home looking as crisp and intentional as they did when you moved in—especially after lighting upgrades, TV moves, and gallery wall changes.",
        rentals:
          "Smoothing walls between tenants so Bressi Ranch rentals stay aligned with neighborhood appearance standards and photograph well for new listings.",
        businesses:
          "Repairing small wall damage in professional offices and studios near Bressi Ranch so client-facing spaces remain polished.",
      },
      reviewSnippet: {
        quote:
          "We'd moved the TV twice and rearranged our gallery wall, so there were holes everywhere. They patched all of it, matched the texture perfectly, and you can't tell anything was there.",
        name: "Courtney M.",
        location: "Bressi Ranch, CA",
        role: "Homeowner",
      },
    },

    "tv-mounting": {
      intro:
        "TV mounting visits in Bressi Ranch focus on clean, finished installs that match the polished standard of the neighborhood—whether that is a family room with an accent wall, a loft media space, or a primary bedroom.",
      schedulingNote:
        "Most Bressi Ranch TV installs are scoped to mount one or more TVs, organize basic cabling, and confirm everything is working before leaving—in one well-managed visit. Multiple TVs in the same home are typically grouped together.",
      fitGood: [
        "Mounting TVs on interior drywall walls with accessible stud framing in family rooms, living areas, and bedrooms.",
        "Installing tilt or full-motion mounts for open-plan main floors and loft media spaces.",
        "Setting up soundbars, streaming devices, and basic A/V components on or near the wall mount.",
        "Organizing and concealing surface wiring with neat routing or raceways where the wall allows.",
        "Moving TVs from stands or entertainment furniture to clean wall mounts as part of a room refresh.",
      ],
      fitNotGood: [
        "In-wall power or signal runs requiring new electrical circuits or low-voltage cabling in finished walls.",
        "Fireplace stone or tile mounting without appropriate anchor planning and hardware.",
        "Complex commercial AV systems with multiple display zones and professional control equipment.",
        "Outdoor or unusually high installs requiring lifts or specialized mounting hardware.",
      ],
      localNote:
        "Bressi Ranch open floor plans often have a natural TV wall in the family room and a secondary setup in a loft or bonus space. Wall-mounted TVs keep those areas open and consistent with the clean finish level of the community. Many homeowners pair a TV mount visit with a soundbar install and basic cable organization so the result looks intentional from the first day.",
      audienceNotes: {
        homeowners:
          "Mounting TVs so Bressi Ranch family rooms and loft spaces feel open, intentional, and properly finished rather than defined by a stand and tangled cables.",
        rentals:
          "Installing wall-mounted TVs in Bressi Ranch rentals so they are durable, easy to clean around, and present well in listing photos.",
        businesses:
          "Mounting TVs in offices, suites, and small conference rooms near Bressi Ranch without a large-scale AV project.",
      },
      reviewSnippet: {
        quote:
          "They mounted our family room TV and the one in the loft and managed all the cables so the setup looks built-in. Exactly what we were hoping for.",
        name: "Jason B.",
        location: "Bressi Ranch, CA",
        role: "Homeowner",
      },
    },
  },
};
