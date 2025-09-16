import { Card, CardContent } from "@/components/ui/card";
import { Shield, Cloud, Terminal, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Shield,
      title: "Cloud Security Focus",
      description:
        "Specializing in securing Microsoft 365 and Azure environments, with hands-on experience in identity protection, compliance policies, and Microsoft Defender.",
    },
    {
      icon: Cloud,
      title: "Modern IT Infrastructure",
      description:
        "Proven expertise in Microsoft Entra ID, Intune, Conditional Access, and automation for secure and scalable environments.",
    },
    {
      icon: Terminal,
      title: "Automation & Scripting",
      description:
        "Building security and administration tools with PowerShell, Graph API, and Terraform to streamline and harden operations.",
    },
    {
      icon: Zap,
      title: "Systems & Networking",
      description:
        "Strong foundation in TCP/IP, DNS, DHCP, VPN, and endpoint management, ensuring reliable and secure infrastructure.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background/50 via-background to-background/80 relative overflow-hidden"
    >
      {/* Optional animated background shapes */}
      <div className="absolute -top-40 -left-40 w-72 h-72 bg-primary-glow/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I specialize in securing Microsoft 365 and Azure environments, with
            hands-on experience in identity protection, Intune compliance, and
            Microsoft Defender. By combining a background in software
            engineering with IT administration, I design resilient, automated
            security solutions that scale and align with modern cloud-first
            strategies.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-elegant transition-transform duration-500 transform hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-primary/10 to-accent/10 border-border/50"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent animate-gradient-slow blur-2xl opacity-50"></div>
                  <highlight.icon className="h-8 w-8 text-primary-foreground relative z-10" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* My Journey Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="shadow-elegant bg-gradient-to-br from-primary/5 to-accent/5 transform hover:-translate-y-3 border-border/50 hover:shadow-glow transition-all duration-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey began with a passion for technology and a drive to
                  understand how systems can be secured against modern threats.
                  Over time, I built expertise in IT support and system
                  administration, gaining first-hand experience with enterprise
                  environments.
                </p>
                <p>
                  Today, my focus is on Microsoft 365 and Azure security —
                  implementing Conditional Access, hardening identities with MFA,
                  building Intune compliance frameworks, and leveraging Microsoft
                  Defender and Sentinel for detection and response.
                </p>
                <p>
                  By blending my background in software engineering with cloud
                  administration, I create solutions that are not only secure but
                  also automated, scalable, and aligned with real-world business
                  needs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tailwind animations */}
      <style>
        {`
          @keyframes gradient-slow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-slow {
            background-size: 200% 200%;
            animation: gradient-slow 10s ease infinite;
          }
          .animate-pulse-slow {
            animation: pulse 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default About;
