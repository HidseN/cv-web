import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "IT System Engineer – Digitalization",
      company: "NewCold Metal Constructions d.o.o.",
      location: "Usora, Bosnia and Herzegovina",
      period: "2024 - Present",
      description: [
        "Administer and manage Microsoft 365 (accounts, licensing, collaboration tools)",
        "Configure and maintain Microsoft Intune/Entra for device management and compliance",
        "Implement and monitor Windows Defender and endpoint security for proactive threat protection",
        "Conduct threat analysis and respond to incidents to maintain system integrity",
        "Manage Active Directory, Group Policy, and network access for secure IT operations",
        "Collaborate with teams to drive digital transformation initiatives"
      ],
      technologies: [
        "Microsoft 365 / Exchange Online / SharePoint / Teams Administration",
        "Intune / Entra",
        "Windows Defender",
        "Active Directory",
        "Network Security",
        "Firewall Management",
        "Threat Analysis and Incident Response",
        "DNS, DHCP, TCP/IP Networking",
      ]
    },
    {
      title: "Postal Delivery Officer",
      company: "Deutsche Post und DHL",
      location: "Kaufbeuren, Bavaria, Germany",
      period: "Jul 2024 – Oct 2024 · 4 mos",
      description: [
        "Managed daily routes and schedules, maintaining organization under tight deadlines",
        "Delivered letters and parcels reliably and on time",
        "Provided customer service and handled inquiries professionally"
      ],
      technologies: ["Time Management", "Reliability", "Communication"]
    },
    {
      title: "Delivery Assistant",
      company: "DHL",
      location: "Cologne, North Rhine-Westphalia, Germany",
      period: "Jul 2023 – Oct 2023 · 4 mos",
      description: [
        "Delivered packages efficiently and on schedule, ensuring high customer satisfaction",
        "Assisted logistics coordination and supported operations in a fast-paced environment"
      ],
      technologies: ["Logistics Systems", "Teamwork", "Problem Solving"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey through my professional career, highlighting key achievements and 
            the technologies I've mastered along the way.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group shadow-xl transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl border-transparent bg-gradient-to-r from-white via-blue-50 to-white"
            >
              <CardHeader className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-primary" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Calendar className="h-5 w-5" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex">
                      <span className="text-primary mr-3 font-bold animate-pulse">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 text-blue-800 font-semibold hover:scale-105 transition-transform duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
