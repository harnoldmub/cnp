export const MANAGED_PAGES = [
  { key: "home", label: "Accueil", href: "/", defaultEnabled: true, showInNavigation: true, showInFooter: false },
  { key: "presentation", label: "Presentation", href: "/presentation", defaultEnabled: true, showInNavigation: true, showInFooter: true },
  { key: "programme", label: "Programme", href: "/programme", defaultEnabled: false, showInNavigation: true, showInFooter: true },
  { key: "intervenants", label: "Intervenants", href: "/intervenants", defaultEnabled: false, showInNavigation: true, showInFooter: false },
  { key: "partenaires", label: "Partenaires", href: "/partenaires", defaultEnabled: true, showInNavigation: true, showInFooter: true },
  { key: "participer", label: "Participer", href: "/participer", defaultEnabled: true, showInNavigation: true, showInFooter: true },
  { key: "contact", label: "Contact", href: "/contact", defaultEnabled: true, showInNavigation: true, showInFooter: true },
  { key: "magazine", label: "Magazine", href: "/magazine", defaultEnabled: true, showInNavigation: false, showInFooter: false },
  { key: "soumettre-projet", label: "Soumettre projet", href: "/soumettre-projet", defaultEnabled: true, showInNavigation: false, showInFooter: false },
  { key: "projet-soumis", label: "Projet soumis", href: "/projet-soumis", defaultEnabled: true, showInNavigation: false, showInFooter: false },
] as const;

export type ManagedPageKey = (typeof MANAGED_PAGES)[number]["key"];
