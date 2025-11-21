export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceProjectsColumn {
  title: string;
  items: string[];
}

export interface ServicePageContent {
  intro?: string;
  typicalProjectsHeading?: string;
  typicalProjectsIntro?: string;
  typicalProjectsColumns?: ServiceProjectsColumn[];
  pricingHeading?: string;
  pricingParagraphs?: string[];
  faq?: ServiceFaqItem[];
}

export const serviceContent: Record<string, ServicePageContent> = {
  "carpentry-woodwork": {
    intro: `Small to medium carpentry projects that keep trim, doors, and wood surfaces looking tidy without the mess and cost of a full remodel. Great for punch-list style repairs and light improvements around the house.`,
    typicalProjectsHeading: "Typical carpentry and woodwork projects",
    typicalProjectsIntro: `Projects that repair or refresh existing woodwork instead of rebuilding your home from the studs. Many of these can be grouped into a single, well-planned visit.`,
    typicalProjectsColumns: [
      {
        title: "Exterior repairs",
        items: [
          "Replace damaged fence boards or posts on wood fences",
          "Repair or rebuild wood gates that no longer close correctly",
          "Tighten or replace loose deck boards, steps, or handrails",
          "Patch small areas of trim or fascia that have started to rot"
        ]
      },
      {
        title: "Interior trim and doors",
        items: [
          "Adjust sticking interior doors and latches so they close smoothly",
          "Replace or install baseboards, casings, and simple trim profiles",
          "Repair small gaps, dings, and nail holes in door and window trim",
          "Secure loose handrails or simple interior guardrails"
        ]
      },
      {
        title: "Built-ins and storage",
        items: [
          "Install simple shelving in closets, garages, and pantries",
          "Re-secure sagging closet rods or supports",
          "Tune up cabinet doors and drawer fronts that no longer sit level",
          "Add basic blocking or backing in walls for future projects"
        ]
      }
    ],
    pricingHeading: "How pricing works for carpentry and woodwork visits",
    pricingParagraphs: [
      "Most carpentry and woodwork visits are priced as a single service visit that covers drive time, set-up, and clean-up, plus the time needed to complete your list of repairs.",
      "Smaller tasks can often be combined into one visit as long as they are in the same general area of the home and use similar tools. Grouping projects together keeps your overall cost lower than booking several separate trips.",
      "Material costs are billed in addition to labor. You are welcome to provide your own fixtures or lumber, or we can source common items locally and include them on your invoice."
    ],
    faq: [
      {
        question: "Do you handle small fence and gate repairs?",
        answer: "Yes. Replacing damaged fence boards, tightening hardware, and tuning up wood gates are all good fits for a handyman visit, as long as we are not rebuilding long runs of fence from scratch."
      },
      {
        question: "Can you build custom furniture or built-ins from scratch?",
        answer: "Custom furniture and fully built-in cabinetry are usually better handled by a dedicated carpenter or cabinet shop. Our carpentry visits focus on small repairs and straightforward projects that fit into a single service window."
      },
      {
        question: "Do I need to buy materials ahead of time?",
        answer: "You are welcome to purchase specific trim, lumber, or hardware if you have something particular in mind. Otherwise, we can recommend standard options, pick them up locally, and include them on your final invoice."
      }
    ]
  },

  electrical: {
    intro: `Small electrical projects that keep lights, switches, and outlets working properly without the disruption of a major rewire. Ideal for fixture swaps, device replacements, and simple troubleshooting.`,
    typicalProjectsHeading: "Typical electrical projects",
    typicalProjectsIntro: `Projects that stay within your existing wiring and panel, with easy access and a clear scope. Larger rewiring, new circuits, and panel upgrades are typically referred to a dedicated electrical contractor.`,
    typicalProjectsColumns: [
      {
        title: "Lighting upgrades",
        items: [
          "Replace outdated ceiling fixtures with new flush-mount or semi-flush lights",
          "Swap old incandescent fixtures for LED fixtures where wiring is already in place",
          "Install or replace basic bath vanity lights and entry lights",
          "Change out existing switches for dimmers where compatible"
        ]
      },
      {
        title: "Switches, dimmers, and outlets",
        items: [
          "Replace worn or noisy switches with new standard devices",
          "Install tamper-resistant or decor-style outlets in place of older devices",
          "Swap existing outlets for GFCI devices where required and wiring allows",
          "Replace cracked or discolored wall plates for a cleaner look"
        ]
      },
      {
        title: "Small troubleshooting and safety tweaks",
        items: [
          "Investigate flickering at a single fixture or device",
          "Tighten loose devices that have started to move in the box",
          "Label switches and controls so they are easier to understand",
          "Upgrade exposed extension cord set-ups to safer, code-aware solutions where feasible"
        ]
      }
    ],
    pricingHeading: "How pricing works for electrical visits",
    pricingParagraphs: [
      "Electrical visits are scheduled in blocks of time so there is room to safely shut off circuits, verify connections, and test devices before we leave.",
      "Pricing depends on access, ceiling height, and how many fixtures or devices we can group into one visit. Swapping several fixtures or devices in the same area is usually more cost-effective than doing them one at a time.",
      "Major work such as new circuits, panel changes, whole-house rewiring, or trenching for exterior power is outside the scope of a handyman visit. If your project turns out to be larger than expected, we can recommend when to involve a licensed electrical contractor."
    ],
    faq: [
      {
        question: "Can you replace light fixtures and ceiling fans?",
        answer: "Yes, as long as there is an existing, properly supported electrical box and the new fixture is a safe match for the location. Very heavy fixtures or fans on tall ceilings may require a different type of contractor or lift equipment."
      },
      {
        question: "Do you work on electrical panels or run new circuits?",
        answer: "No. Main service panels, subpanels, new circuits, and service upgrades should always be handled by a licensed electrical contractor. Our focus is on small, accessible projects within existing circuits."
      },
      {
        question: "Do I need to provide the fixtures and devices?",
        answer: "Most homeowners prefer to choose their own fixtures and devices so they match the rest of the home. If you would like suggestions, we can point you toward common options that work well in small projects."
      }
    ]
  },

  "furniture-assembly-installations": {
    intro: `Assembly and installation projects that turn boxes and loose parts into finished pieces of furniture, shelves, and wall décor without leaving packaging or fasteners behind.`,
    typicalProjectsHeading: "Typical furniture assembly and installation projects",
    typicalProjectsIntro: `Projects that involve unpacking, assembling, and securing ready-made pieces, rather than designing fully custom cabinetry or built-ins.`,
    typicalProjectsColumns: [
      {
        title: "Flat-pack furniture",
        items: [
          "Assemble desks, dressers, nightstands, and bookcases from major retailers",
          "Put together bed frames and headboards with included hardware",
          "Assemble small tables, benches, and storage cubes",
          "Level furniture on uneven floors so doors and drawers work smoothly"
        ]
      },
      {
        title: "Shelving and storage",
        items: [
          "Install simple wall-mounted shelving in living areas, garages, and closets",
          "Hang coat hooks, peg rails, and simple organizers",
          "Secure tall furniture to studs with anti-tip kits for safety",
          "Mount small cabinets or wall cubes within manufacturer limits"
        ]
      },
      {
        title: "Home décor installations",
        items: [
          "Hang curtain rods and basic window hardware",
          "Install towel bars, robe hooks, and bath accessories",
          "Hang framed art, mirrors, and decor pieces with appropriate anchors",
          "Adjust existing hardware so lines are straight and consistent"
        ]
      }
    ],
    pricingHeading: "How pricing works for furniture assembly and installations",
    pricingParagraphs: [
      "Furniture and installation visits are usually priced by time, with a minimum visit that covers travel, set-up, and clean-up.",
      "Clear instructions and complete hardware help keep your visit efficient. If pieces are missing or the product has manufacturing issues, additional time may be needed to make everything work safely.",
      "Very large or unusually complex systems, such as full-wall closet systems or commercial shelving, may require a separate review or a specialty installer."
    ],
    faq: [
      {
        question: "How many pieces can you assemble in one visit?",
        answer: "It depends on the size and complexity of each item. A typical visit might include several small pieces or one larger piece plus a few wall-mounted items. If you share your list ahead of time, we can estimate what fits comfortably into a single visit."
      },
      {
        question: "Can you secure tall furniture to the wall?",
        answer: "Yes. Securing tall dressers, bookcases, and media cabinets with manufacturer-supplied anti-tip brackets is a great fit for a handyman visit, especially in homes with kids or pets."
      },
      {
        question: "Do you bring anchors and basic hardware?",
        answer: "Yes. We carry common anchors and fasteners for drywall and wood framing. If your project needs specialty hardware or brackets, we may ask you to purchase those ahead of time or add a quick materials run to your visit."
      }
    ]
  },

  "plumbing-fixtures-repairs": {
    intro: `Small plumbing fixture repairs that address drips, minor leaks, and tired hardware without opening up walls or replacing major lines.`,
    typicalProjectsHeading: "Typical plumbing fixture and small repair projects",
    typicalProjectsIntro: `Tasks that focus on visible fixtures and connections you can see under sinks, at toilets, and at tubs or showers. Larger leaks inside walls or in main lines are usually best handled by a licensed plumber.`,
    typicalProjectsColumns: [
      {
        title: "Kitchen and bath fixtures",
        items: [
          "Replace kitchen and bath faucets with homeowner-supplied fixtures",
          "Swap out old showerheads for newer models",
          "Install hand-held shower kits where valves are compatible",
          "Replace decorative sink drains and trim where accessible"
        ]
      },
      {
        title: "Toilet repairs",
        items: [
          "Replace fill valves, flappers, and tank hardware that cause running toilets",
          "Swap out loose or worn toilet seats",
          "Re-seat toilets with new wax rings when minor leaks are visible at the base",
          "Tighten loose toilet bolts and address simple rocking issues"
        ]
      },
      {
        title: "Small under-sink repairs",
        items: [
          "Replace P-traps and tailpieces under sinks where corroded",
          "Tighten or replace loose slip-joint connections",
          "Swap out simple shut-off valves where access is straightforward",
          "Install or replace garbage disposers within existing electrical and plumbing connections"
        ]
      }
    ],
    pricingHeading: "How pricing works for plumbing fixture visits",
    pricingParagraphs: [
      "Most small plumbing tasks are completed within a standard visit, which includes shutoff, drain-down, and clean-up time.",
      "Pricing depends on access, how many fixtures are involved, and whether we discover existing damage such as rusted fittings or stuck shut-off valves.",
      "Significant leaks, broken pipes inside walls, or main-line issues are outside the scope of a handyman visit and are best handled by a licensed plumber."
    ],
    faq: [
      {
        question: "Can you fix leaks inside walls or ceilings?",
        answer: "No. Hidden leaks in supply or drain lines inside walls or ceilings should be handled by a licensed plumber. We can often help with small, visible leaks at traps, flexible connections, or fixtures."
      },
      {
        question: "Do you install new faucets and disposers I’ve already purchased?",
        answer: "Yes. Many homeowners prefer to choose fixtures that match their style. As long as they are compatible with your existing plumbing and electrical connections, installing them is a good fit for a handyman visit."
      },
      {
        question: "Will you shut off water to the whole house?",
        answer: "For some projects, yes. If individual shutoff valves are stuck or missing, we may need to shut off water at the main for a short time while repairs are made."
      }
    ]
  },

  "honey-do-lists-small-repairs": {
    intro: `A flexible visit designed to tackle a list of small repairs and improvements in one trip, so you do not have to schedule several separate service calls.`,
    typicalProjectsHeading: "Typical honey-do and small repair projects",
    typicalProjectsIntro: `Projects that are too small to justify calling multiple specialists, but important enough that you want them handled neatly and safely.`,
    typicalProjectsColumns: [
      {
        title: "Little fixes that add up",
        items: [
          "Replace loose or missing door and cabinet hardware",
          "Adjust interior doors that rub or do not latch properly",
          "Touch up caulking at sinks, tubs, and simple trim transitions",
          "Install or replace basic weatherstripping at exterior doors"
        ]
      },
      {
        title: "Safety and comfort tweaks",
        items: [
          "Secure loose handrails and grab bars where backing allows",
          "Install simple battery or plug-in safety devices, such as childproofing hardware",
          "Replace smoke or CO alarms where locations are already established",
          "Swap out tired switch and outlet plates for a cleaner look"
        ]
      },
      {
        title: "Light assembly and install tasks",
        items: [
          "Assemble small pieces of furniture that come flat-packed",
          "Hang simple shelves, hooks, or bulletin boards",
          "Install small bath accessories like towel bars and robe hooks",
          "Tidy up loose cords with basic cord-management solutions"
        ]
      }
    ],
    pricingHeading: "How pricing works for honey-do visits",
    pricingParagraphs: [
      "Honey-do visits are usually booked as a block of time, often a half-day, so we can work through a prioritized list efficiently.",
      "Grouping similar tasks together by room or by tool type helps you get more done in one visit. We can help you organize the list so the most important items are handled first.",
      "Very specialized tasks, like large-scale roofing, HVAC, or major electrical or plumbing work, are better left to those specific trades. We will let you know if anything on your list would be safer for a specialist."
    ],
    faq: [
      {
        question: "How many items can I include on my list?",
        answer: "You can include as many items as you like. We will help you prioritize the list and estimate what can be completed within a standard visit, then work from most important to least important."
      },
      {
        question: "Can you add new projects on the day of the visit?",
        answer: "If there is time left in the visit and we have the right tools and materials, we are happy to add small, related items. Larger surprises may need a follow-up visit so we can plan properly."
      },
      {
        question: "What if a task turns out to be bigger than expected?",
        answer: "If we uncover a larger issue, we will explain what we found and recommend next steps. Sometimes that means a future visit with more time set aside, and sometimes it means bringing in a specialist."
      }
    ]
  },

  "drywall-repair": {
    intro: `Small to medium drywall repairs that make walls and ceilings paint-ready again after dents, dings, or minor water spots.`,
    typicalProjectsHeading: "Typical drywall repair projects",
    typicalProjectsIntro: `Repairs that can be blended into surrounding surfaces without re-drywalling entire rooms. Most are completed with a mix of patching, sanding, and texture touch-ups.`,
    typicalProjectsColumns: [
      {
        title: "Wall repairs",
        items: [
          "Patch doorknob holes and small impact damage",
          "Repair nail pops and small cracks at seams",
          "Fill and sand holes left from shelves, TVs, or artwork",
          "Blend in patches where outlets or low-voltage boxes were removed"
        ]
      },
      {
        title: "Ceiling touch-ups",
        items: [
          "Repair small ceiling blemishes after minor leaks have been fixed",
          "Patch and blend around new light fixtures or fan boxes",
          "Touch up texture to reduce the visibility of past repairs",
          "Address small cracks at ceiling seams where movement has occurred"
        ]
      },
      {
        title: "Finishing for paint",
        items: [
          "Feather edges so patches are less visible once painted",
          "Prime repaired areas so touch-up paint adheres correctly",
          "Coordinate with your painter or provide basic touch-up painting if arranged",
          "Protect floors and furnishings and clean up dust before leaving"
        ]
      }
    ],
    pricingHeading: "How pricing works for drywall repair visits",
    pricingParagraphs: [
      "Drywall pricing is based on the number and size of patches, ceiling height, and the level of finish you want. Small, grouped repairs are more economical than scattered spots throughout the home.",
      "Some repairs require more than one visit to allow drying time between coats of compound, especially for deeper patches or areas that will be closely inspected.",
      "If there is ongoing moisture or structural movement, we may recommend addressing those issues first so your repairs last longer."
    ],
    faq: [
      {
        question: "Can you match my existing wall or ceiling texture?",
        answer: "We can usually get close enough that repairs are not obvious once painted, especially in standard textures. Very unique or hand-troweled finishes may still show a subtle transition."
      },
      {
        question: "Do you paint after drywall repairs?",
        answer: "We can often handle basic priming and small touch-ups if we have the correct paint on hand. Larger repainting projects are usually better handled by a dedicated painting contractor."
      },
      {
        question: "What if there was a leak involved?",
        answer: "The source of the leak should be repaired and the area fully dried before we begin drywall work. If we suspect there is still moisture or damage, we will recommend next steps before closing things up."
      }
    ]
  },

  "tv-mounting": {
    intro: `Safe, clean TV mounting and basic media setup so cables are organized and screens are at a comfortable viewing height.`,
    typicalProjectsHeading: "Typical TV mounting projects",
    typicalProjectsIntro: `Projects that use appropriate mounts and anchors for the wall type, with a focus on tidy cable routing and solid, level installation.`,
    typicalProjectsColumns: [
      {
        title: "Wall-mounted TVs",
        items: [
          "Mount flat-screen TVs to drywall or wood-framed walls with suitable anchors",
          "Level and center TVs over furniture, fireplaces, or media consoles",
          "Install tilting or low-profile mounts provided by the homeowner",
          "Confirm viewing height and angle before final tightening"
        ]
      },
      {
        title: "Cable management",
        items: [
          "Route HDMI and power cords along walls with low-profile raceways",
          "Bundle and secure loose cables behind media consoles",
          "Label key connections so future changes are easier",
          "Coordinate TV placement with existing outlets and low-voltage plates"
        ]
      },
      {
        title: "Small media extras",
        items: [
          "Mount small soundbars under or above the TV when brackets allow",
          "Install simple shelves for streaming boxes or small components",
          "Swap out aging surge strips for newer units that fit your setup",
          "Tidy up wall plates or blank off unused openings for a cleaner look"
        ]
      }
    ],
    pricingHeading: "How pricing works for TV mounting visits",
    pricingParagraphs: [
      "Pricing depends on TV size, mounting height, wall construction, and how complex the cable routing will be.",
      "Mounting multiple TVs in one visit is usually more cost-effective than scheduling separate trips, especially if they are on similar wall types.",
      "Running new in-wall power or low-voltage lines, cutting into masonry, or modifying existing electrical circuits generally requires a licensed electrician or low-voltage specialist."
    ],
    faq: [
      {
        question: "Do you provide the mounting brackets?",
        answer: "Most homeowners purchase their own mounts so they can match TV size and desired features. We are happy to help you choose an appropriate mount style before your visit."
      },
      {
        question: "Can you hide all of the cables inside the wall?",
        answer: "In many cases we can significantly tidy your cable situation with surface raceways and better routing. Full in-wall cable concealment or new in-wall power often requires additional planning and may need to follow specific electrical and building codes."
      },
      {
        question: "Will you help set up the TV once it is mounted?",
        answer: "We can help with basic connections to existing devices and make sure everything powers on. More advanced configuration, such as streaming account setup or complex audio systems, is usually outside the scope of a standard visit."
      }
    ]
  }
};
