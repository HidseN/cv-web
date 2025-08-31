import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = useCallback((href: string) => {
    const target = href === "#home" ? document.body : document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  }, []);

  const navLinkClasses =
    "text-gray-800 font-medium transition-transform duration-300 transform hover:scale-105 relative nav-link";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-card border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#home")}
          className="text-2xl font-bold text-gray-800 hover:text-gray-800 transition-colors"
        >
          Hid<span className="text-primary">seN</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={navLinkClasses}
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300"></span>
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("#contact")}
            variant="secondary"
            className="ml-4 bg-primary font-bold text-white transition-transform hover:scale-105 hover:bg-primary hover:text-white"
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-gray-800">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col space-y-6 mt-8">
              <span className="text-xl font-bold text-gray-800">Menu</span>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-lg font-medium text-gray-800 hover:text-gray-800 transition-transform duration-300 transform py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="mt-6 w-full font-bold text-white bg-primary transform transition-transform hover:scale-105"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>

      <style>{`
        .nav-link span {
          width: 0;
        }
        .nav-link:hover span {
          width: 100%;
        }
      `}</style>
    </header>
  );
};

export default Navigation;
