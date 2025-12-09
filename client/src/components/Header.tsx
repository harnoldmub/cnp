import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDark from "@assets/LOGOS-CNP1_(1)_1765307996148.png";
import logoWhite from "@assets/LOGOS-CNP_1765307996147.png";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
  external?: boolean;
}

const navItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "A propos",
    children: [
      { label: "Présentation", href: "/presentation" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Edition 2025",
    children: [
      { label: "Programme", href: "/programme" },
      { label: "Intervenants", href: "/intervenants" },
      { label: "Partenaires", href: "/partenaires" },
    ],
  },
  { label: "Participer", href: "/participer" },
  { label: "CNP Mag", href: "/magazine" },
  { label: "CNP TV", href: "https://youtube.com", external: true },
];

interface HeaderProps {
  variant?: "light" | "dark";
}

export default function Header({ variant = "light" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  const isActive = (href?: string) => href === location;

  const handleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const isDark = variant === "dark";

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b ${
        isDark
          ? "bg-[#050816] border-white/10"
          : "bg-white border-border"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" data-testid="link-home">
            <img
              src={isDark ? logoWhite : logoDark}
              alt="Congo Na Paris"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdown(item.label)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                        isDark
                          ? "text-white/90 hover:text-white"
                          : "text-foreground/80 hover:text-foreground"
                      }`}
                      data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div
                        className={`absolute top-full left-0 mt-1 min-w-[160px] rounded-md shadow-lg py-1 ${
                          isDark ? "bg-[#0a0d1a]" : "bg-white"
                        }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-4 py-2 text-sm hover-elevate ${
                              isDark
                                ? "text-white/80 hover:text-white"
                                : "text-foreground/80 hover:text-foreground"
                            }`}
                            data-testid={`nav-${child.label.toLowerCase().replace(/\s/g, "-")}`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isDark
                        ? "text-white/90 hover:text-white"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                    data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href!}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? isDark
                          ? "text-white"
                          : "text-foreground"
                        : isDark
                        ? "text-white/90 hover:text-white"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                    data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              className={isDark ? "text-white/80 hover:text-white" : ""}
              data-testid="button-search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className={`lg:hidden ${isDark ? "text-white/80 hover:text-white" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-t ${
            isDark ? "bg-[#050816] border-white/10" : "bg-white border-border"
          }`}
          data-testid="nav-mobile"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => handleDropdown(item.label)}
                      className={`flex items-center justify-between w-full px-3 py-2 text-base font-medium ${
                        isDark ? "text-white/90" : "text-foreground/80"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block px-3 py-2 text-sm ${
                              isDark ? "text-white/70" : "text-foreground/70"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block px-3 py-2 text-base font-medium ${
                      isDark ? "text-white/90" : "text-foreground/80"
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 text-base font-medium ${
                      isActive(item.href)
                        ? "text-primary"
                        : isDark
                        ? "text-white/90"
                        : "text-foreground/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
