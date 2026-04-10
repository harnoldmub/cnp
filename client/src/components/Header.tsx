import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVisiblePages } from "@/lib/pageSettings";

interface HeaderProps {
  variant?: "light" | "dark";
}

export default function Header({ variant: _variant }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { navigationPages } = useVisiblePages();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#140907]/95 backdrop-blur-xl">
      <div className="cnp-container py-2.5">
        <div className="flex items-center justify-between gap-4 lg:hidden">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo-white.png" alt="Congo Na Paris" className="h-11 w-auto" />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className="hidden items-center gap-5 lg:grid lg:grid-cols-[auto_1fr_auto]">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo-white.png" alt="Congo Na Paris" className="h-12 w-auto" />
          </Link>

          <div className="flex items-center justify-center gap-3">
            <nav className="flex items-center justify-center gap-1.5">
            {navigationPages.map((item) => {
              const active = location === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3.5 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-white hover:bg-white/5 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            </nav>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://my.weezevent.com/congo-na-paris-construire-la-paix"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="rounded-full px-5 py-2.5 font-semibold uppercase">
                Reserver
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#120806] lg:hidden">
          <div className="cnp-container space-y-3 py-5">
            {navigationPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-2xl px-4 py-3 text-base font-semibold ${
                  location === item.href
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/5 text-white/80"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://my.weezevent.com/congo-na-paris-construire-la-paix"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <Button className="w-full rounded-full uppercase">
                Reserver
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
