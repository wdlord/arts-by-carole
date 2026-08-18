export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  children: NavLink[];
};

export type NavItem = NavLink | NavGroup;

/** Used for path comparison */
export function normalizePath(path: string): string {
  return path.replace(/\/$/, "");
}

/** Checks if a given link is the current path */
export function isCurrentPath(currentPath: string, link: string): boolean {
  return normalizePath(currentPath) === normalizePath(link);
}

/** Check if a given NavGroup contains the current path */
export function containsCurrentPath(
  currentPath: string,
  children: { href: string }[]
): boolean {
  return children.some((item) => isCurrentPath(currentPath, item.href));
}

/** Checks if a given NavItem is a NavGroup */
export function isNavGroup(item: NavItem): item is NavGroup {
  return "children" in item;
}

/** Gets a page ID (hash not included) from a display label */
export function labelToID(label: string): string {
  return label.toLowerCase().split(' ').join('-');
}

/** Generates url links for an array of labels */
export function makeLinks(names: string[], prefix: string) {
  return names.map((name) => ({
    href: `${prefix}#${labelToID(name)}`,
    label: name,
  }));
}