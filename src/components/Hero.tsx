import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import CVimg from "@/assets/CVimg.jpg";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/hidsen/", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: Github, href: "https://github.com/HidseN", label: "GitHub", color: "hover:text-gray-900" },
  { icon: Mail, href: "mailto:senahidramic0204@gmail.com", label: "Email", color: "hover:text-red-500" }
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      {/* Subtle background circles */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground">
              Senahid <span className="text-accent-foreground">Ramic</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 font-light">
              Junior Software Engineer & IT Systems Administrator
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/80 leading-relaxed max-w-md mx-auto md:mx-0">
              Passionate IT professional transitioning from software development to systems administration
              with a strong focus on cybersecurity. Dedicated to building secure, efficient systems and 
              expanding expertise in modern development practices.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4">
              <Button variant="secondary" size="lg" className="group transform transition-transform hover:scale-105 w-full sm:w-auto">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
              <Button variant="secondary" size="lg" className="group transform transition-transform hover:scale-105 w-full sm:w-auto">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center md:justify-start flex-wrap mt-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`text-primary-foreground/70 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 ${color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Profile image */}
          <div className="flex-shrink-0 relative mb-8 md:mb-0 group">
            <div className="relative w-64 mt-24 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96 rounded-full overflow-hidden 
                            border-4 border-white 
                            p-1 transition-transform duration-500 
                            transform group-hover:scale-105 group-hover:rotate-1 
                            shadow-lg">
              
              {/* Actual image */}
              <img 
                src={CVimg} 
                alt="Senahid Ramic - Professional Headshot" 
                className="w-full h-full object-cover rounded-full transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
