import { Card, CardContent } from "@/components/ui/card";
import { Code, Lightbulb, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Development Foundation",
      description:
        "Growing expertise in modern development technologies including React, JavaScript, and Python with focus on secure coding practices.",
    },
    {
      icon: Lightbulb,
      title: "Security Mindset",
      description:
        "Deep interest in cybersecurity principles, threat analysis, and implementing security best practices in all projects.",
    },
    {
      icon: Users,
      title: "IT Support Expert",
      description:
        "Extensive experience in help desk support, user training, and troubleshooting complex technical issues.",
    },
    {
      icon: Target,
      title: "System Administration",
      description:
        "Proven track record in maintaining IT infrastructure, network security, and ensuring system reliability.",
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
  I am an IT System Administrator experienced in Microsoft 365, Active Directory, Intune/Entra, Windows support, and ITIL. Skilled in user management, troubleshooting, and resolving technical issues, with a solid understanding of threat management and core networking concepts (TCP/IP, DNS, DHCP, VPN).  

  With a BSc in Software Engineering and coursework in programming, databases, and cybersecurity, I am eager to grow in cybersecurity and remote IT roles, contributing to secure and efficient systems.
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
                <h3 className="text-xl font-semibold text-foreground mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* My Journey Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="shadow-elegant bg-gradient-to-br from-primary/5 to-accent/5 transform hover:-translate-y-3 border-border/50 hover:shadow-glow transition-all duration-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey in technology started with a fascination for how systems work and how they can be secured.
                  Through my role in IT support and system administration, I've gained valuable insights into network
                  security, user management, and infrastructure maintenance.
                </p>
                <p>
                  Currently expanding my skills in software development while maintaining my focus on cybersecurity. My
                  unique background in IT operations gives me a comprehensive understanding of both the development and
                  operational aspects of technology solutions.
                </p>
                <p>
                  In my free time, I study ethical hacking techniques, participate in cybersecurity challenges, and work
                  on personal coding projects that combine my interests in development and security.
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
