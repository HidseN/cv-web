import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Github, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/hidsen/", label: "LinkedIn", color: "hover:text-blue-600" },
    { icon: Github, href: "https://github.com/HidseN", label: "GitHub", color: "hover:text-gray-900" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter", color: "hover:text-blue-500" },
    { icon: Mail, href: "mailto:senahidramic0204@gmail.com", label: "Email", color: "hover:text-red-500" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto px-7 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* Brand & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h3 className="text-2xl font-bold">
              Senahid<span className="text-accent-foreground"> Ramic</span>
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-xs">
              IT System Administrator with a BSc in Software Engineering, experienced in Microsoft 365, Azure, and IT service management. Skilled in improving workflows, supporting IT operations, and creating resources that enhance team productivity.
            </p>
            <div className="flex gap-3 justify-center md:justify-start flex-wrap">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className={`text-primary-foreground/70 transition-all duration-500 transform hover:scale-125 ${social.color}`}
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="relative text-primary-foreground/80 hover:text-primary-foreground after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary-foreground after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h4 className="text-lg font-bold">Get In Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>senahidramic0204@gmail.com</p>
              <p>+387 xxx xxx xxx</p>
              <p>Sarajevo, Bosnia and Herzegovina</p>
            </div>
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="secondary"
              className="mt-2 transform transition-transform hover:scale-105 w-full md:w-auto"
            >
              <Mail className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </div>

        </div>

        <Separator className="bg-primary-foreground/20 my-4" />

        {/* Copyright */}
        <div className="text-center text-primary-foreground/80 font-medium pt-2">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Senahid Ramic – made with <Heart className="h-4 w-4 text-red-500" /> and lots of coffee.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .shadow-glow { box-shadow: 0 10px 30px rgba(0,0,0,0.1), 0 0 60px rgba(0,0,0,0.05); }
      `}</style>
    </footer>
  );
};

export default Footer;
