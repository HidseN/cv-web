import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Palette, Settings, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & IT Security",
      icon: Cloud,
      description:
        "Practical experience securing Microsoft 365 and Azure environments, implementing Conditional Access, MFA, Intune compliance, and endpoint protection strategies.",
      skills: [
        "Microsoft 365 Security & Compliance",
        "Azure AD / Entra ID (user & group management)",
        "Conditional Access & Multi-Factor Authentication",
        "Intune Device Compliance & Endpoint Management",
        "Endpoint Protection & Threat Response (Microsoft Defender)",
        "Network Security Fundamentals & Firewall Configurations",
      ],
    },
    {
      title: "Systems Administration",
      icon: Code2,
      description:
        "Hands-on experience maintaining Windows Server environments, Active Directory, and core networking infrastructure, with practical automation for routine tasks.",
      skills: [
        "Windows Server & Active Directory management",
        "DNS, DHCP, TCP/IP, VPN configuration",
        "Fundamentals of Virtualization (VMware / Hyper-V)",
        "PowerShell scripting for automation tasks",
      ],
    },
    {
      title: "Development & Scripting",
      icon: Database,
      description:
        "Capable of scripting, basic web development, and simple database operations to support IT processes and automation.",
      skills: [
        "Python scripting for automation tasks",
        "HTML & CSS for simple web interfaces",
        "SQL queries for reporting and analysis",
        "Git version control for project collaboration",
      ],
    },
  ];

  const additionalSkills = {
    "IT Tools & Platforms": [
      "Office 365 Administration",
      "Tickit AI",
      "VPN setup and troubleshooting",
      "Data Recovery & Backup operations",
      "Power Platform (Power Automate & Power Apps fundamentals)",
    ],
    "Continuous Learning & Development": [
      "Microsoft Learn courses",
      "Cybersecurity labs & hands-on exercises",
      "HackTheBox & online security challenges",
      "Self-study & industry certifications",
    ],
    "Professional Skills": [
      "Problem Solving & Analytical Thinking",
      "Team Collaboration & Knowledge Sharing",
      "Technical Documentation",
      "Time Management & Prioritization",
      "Adaptability & Continuous Learning",
    ],
  };

  const icons = [Palette, Settings, Globe];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An honest overview of my technical skills, highlighting practical experience in cloud security, systems administration, and scripting for automation.
          </p>
        </div>

        {/* Main skill categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-white via-blue-50 to-white border-transparent"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="w-12 h-12 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center shadow-glow">
                    <category.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional skills */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(additionalSkills).map(([category, skills], index) => {
            const Icon = icons[index];
            return (
              <Card
                key={category}
                className="group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white via-blue-50 to-white border-transparent"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shadow-glow">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <style>
        {`
          @keyframes gradient-slow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-slow {
            background-size: 200% 200%;
            animation: gradient-slow 12s ease infinite;
          }
          .animate-pulse-slow {
            animation: pulse 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
