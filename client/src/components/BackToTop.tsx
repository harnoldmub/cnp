import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <Button
      size="icon"
      className="fixed bottom-5 right-5 z-50 h-11 w-11 rounded-full border border-white/10 bg-[#20100b]/90 text-white shadow-[0_12px_30px_rgba(0,0,0,0.28)] backdrop-blur hover:bg-[#2a1610]"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      data-testid="button-back-to-top"
      aria-label="Remonter en haut"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  );
}
