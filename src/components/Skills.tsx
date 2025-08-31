import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code2, Database, Cloud, Palette, Settings, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Systems & Security",
      icon: Code2,
      skills: [
        { name: "Windows Server", level: 88 },
        { name: "Active Directory", level: 85 },
        { name: "Network Security", level: 80 },
        { name: "PowerShell", level: 75 },
        { name: "Linux Administration", level: 70 },
        { name: "VMware/Virtualization", level: 82 },
      ],
    },
    {
      title: "Development Skills",
      icon: Database,
      skills: [
        { name: "JavaScript", level: 75 },
        { name: "React", level: 70 },
        { name: "Python", level: 68 },
        { name: "HTML5 & CSS3", level: 80 },
        { name: "Git/Version Control", level: 75 },
        { name: "SQL Basics", level: 65 },
      ],
    },
    {
      title: "Cybersecurity Focus",
      icon: Cloud,
      skills: [
        { name: "Vulnerability Assessment", level: 78 },
        { name: "Incident Response", level: 72 },
        { name: "Network Monitoring", level: 80 },
        { name: "Malware Analysis", level: 65 },
        { name: "Security Protocols", level: 75 },
        { name: "Ethical Hacking", level: 60 },
      ],
    },
  ];

  const additionalSkills = {
    "IT Support & Tools": ["ServiceNow", "Office 365", "TCP/IP", "Router Configuration", "Data Recovery"],
    "Learning & Development": ["Cybersecurity Courses", "Coding Bootcamps", "Self-Study", "Online Certifications", "Tech Meetups"],
    "Soft Skills": ["Problem Solving", "Customer Service", "Technical Documentation", "Team Collaboration", "Continuous Learning"],
  };

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-gradient-to-r from-green-500 to-emerald-500";
    if (level >= 80) return "bg-gradient-to-r from-blue-500 to-cyan-500";
    if (level >= 70) return "bg-gradient-to-r from-yellow-500 to-orange-500";
    return "bg-gradient-to-r from-gray-400 to-gray-600";
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills spanning IT operations, cybersecurity, and 
            emerging software development capabilities.
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
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-2 rounded-full ${getSkillColor(skill.level)} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional skills */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(additionalSkills).map(([category, skills], index) => {
            const icons = [Palette, Settings, Globe];
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
