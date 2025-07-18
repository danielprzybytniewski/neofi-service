type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#blockchain-feature" },
  { label: "Testimonial", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export type FooterLink = {
  name: string;
  href: string;
};

export const footerQuickLinks: FooterLink[] = [
  { name: "Home", href: "#hero" },
  { name: "Features", href: "#blockchain-feature" },
  { name: "Community", href: "#" },
  { name: "Support", href: "#" },
];

export const footerHelpLinks: FooterLink[] = [
  { name: "Help Centre", href: "#" },
  { name: "FAQ", href: "#faq" },
  { name: "Forum", href: "#" },
];

export const footerSocialMediaLinks: FooterLink[] = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "LinkedIn", href: "#" },
];
