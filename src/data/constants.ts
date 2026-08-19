import { makeLinks, type NavItem, type NavLink } from "../scripts/navigation";

// Website name, appended to the end of site titles and used in certain alt text.
export const siteName = "Arts by Carole";
export const siteUrl = "https://artsbycarole.com";
export const formKey = "";
export const isTemplate = false; // template check to disable certain features

// // Service names
// const serviceNames = [
//   "Interior Painting",
//   "Exterior Painting",
//   "Cabinet Finishing",
//   "Commercial Painting",
// ];

// // Constants used to reference predefined service names.
// export const SERVICE = {
//   INTERIOR: serviceNames[0],
//   EXTERIOR: serviceNames[1],
//   CABINETS: serviceNames[2],
//   COMMERCIAL: serviceNames[3],
// };
// // Generate links for services in nav
// export const serviceLinks = makeLinks(serviceNames, '/services');

// The navigation links shown in the header and footer.
export const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { href: "/gallery/art-gallery", label: "Art Gallery" },
      { href: "/gallery/autographs", label: "Autographs" },
      { href: "/gallery/ephemera", label: "Ephemera" },
    ],
  },
  { href: "/exhibits-and-recognition", label: "Exhibits and Recognition" },
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
export const contactEmail = "carolevq@aol.com";
export const contactPhone = "(801) 721-9242";
