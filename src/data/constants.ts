import { makeLinks, type NavItem, type NavLink } from "../scripts/navigation";

// Website name, appended to the end of site titles and used in certain alt text.
export const siteName = "Pilot Painting";
export const siteUrl = "https://replace-me.com";
export const formKey = "";
export const isTemplate = siteName == "Pilot Painting"; // template check to disable certain features

// Service names
const serviceNames = [
  "Interior Painting",
  "Exterior Painting",
  "Cabinet Finishing",
  "Commercial Painting",
];

// Constants used to reference predefined service names.
export const SERVICE = {
  INTERIOR: serviceNames[0],
  EXTERIOR: serviceNames[1],
  CABINETS: serviceNames[2],
  COMMERCIAL: serviceNames[3],
};
// Generate links for services in nav
export const serviceLinks = makeLinks(serviceNames, '/services');

// The navigation links shown in the header and footer.
export const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Services",
    href: "/services",
    children: [
      { href: "/services", label: "All Services" },
      ...serviceLinks,
    ],
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

// Filtered version of the above using only options with top level links.
export const quickLinks = navLinks.filter(
  (item) => ("href" in item)
) as NavLink[];

// What is our funnel connected to?
export const ctaLink = "/contact";
export var ctaTarget = "_self"; // usually doesn't need to be changed

// Contact details
export const contactEmail = "example.business@email.com";
export const contactPhone = "(555) 123-4567";
export const contactAddress = "Example Address";
export const businessHours = "Mon—Fri, 9:00am—5:00pm";

// Locations Served
const state1 = "CA";
export const locationsServed = [
  `Escondido, ${state1}`,
  `Oceanside, ${state1}`,
  `El Cajon, ${state1}`,
  `San Marcos, ${state1}`,
  `Carlsbad, ${state1}`,
  `Del Mar, ${state1}`,
  `Vista, ${state1}`,
  `Poway, ${state1}`,
  `Encinitas, ${state1}`,
].toSorted();

export const mainLocation = "San Diego";
export const yoe = "35";