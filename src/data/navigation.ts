export interface NavLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}

export const primaryNavLinks: NavLink[] = [
  { label: "About", href: "/about/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export const footerSections: FooterSection[] = [
  {
    title: "Site",
    links: [
      { label: "Services", href: "/services/" },
      { label: "Service areas", href: "/service-areas/" },
      { label: "About", href: "/about/" },
      { label: "Contact", href: "/contact/" },
      { label: "Blog", href: "/blog/" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq/" },
      { label: "Who we work with", href: "/who-we-work-with/" },
    ],
  },
];
