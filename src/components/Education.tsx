import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "Faculty of Engineering and Natural Sciences - International University of Sarajevo",
      location: "Sarajevo, BiH",
      period: "2020 - 2024",
      gpa: "3.1/4.0",
      description:
        "Studied software engineering fundamentals, algorithms, and data structures, while gaining hands-on exposure to IT operations and development practices.",
      coursework: [
        "Data Structures & Algorithms",
        "Software Engineering Principles",
        "Database Fundamentals",
        "Computer Networks",
        "Introduction to Cybersecurity",
        "Web Development Basics",
      ],
    },
    {
      degree: "CCNA Networking Program: Introduction to Networks v7.0 (ITN)",
      institution: "Cisco Networking Academy",
      location: "Online",
      period: "2023",
      description:
        "Learned networking fundamentals including TCP/IP, Ethernet, subnetting, and routing concepts. Practiced configuring network devices and troubleshooting network issues.",
      coursework: [
        "Networking Basics",
        "IPv4/IPv6 Addressing",
        "Ethernet & Switching",
        "Routing Fundamentals",
        "Subnetting",
        "Network Protocols Overview",
      ],
    },
  ];

  const certifications = [
    { title: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", date: "2023" },
    { title: "Linux Basics", issuer: "Cisco Networking Academy", date: "2023" },
    { title: "GDPR & Compliance Awareness", issuer: "Refram Creative Solutions", date: "2025" },
  ];

const achievements = [
  "Participated in internal IT workshops, gaining hands-on experience with Microsoft 365 administration",
  "Completed online courses in cybersecurity and networking to strengthen practical IT skills",
  "Automated repetitive data-entry and reporting tasks, reducing manual work for the team",
  "Assisted in implementing basic IT security and compliance measures within Microsoft 365",
  "Collaborated on IT projects to improve workflow efficiency and support colleagues",
  "Developed guides for Microsoft 365 tools, helping team members adopt new digital workflows",
];




  return (
    <section id="education" className="py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Academic background and professional certifications reflecting hands-on IT skills, networking knowledge, and ongoing learning.
          </p>
        </div>

        {/* Education */}
        <div className="space-y-10">
          <h3 className="text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="group shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 bg-gradient-to-br from-white via-blue-50 to-white border-transparent"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground mb-2">{edu.degree}</CardTitle>
                      <div className="text-muted-foreground">
                        <div className="font-medium text-primary">{edu.institution}</div>
                        <div className="text-sm">{edu.location}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-primary font-medium mb-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      {edu.gpa && (
                        <div className="text-sm text-muted-foreground">
                          GPA: <span className="font-medium text-foreground">{edu.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">{edu.description}</p>
                  <h4 className="font-medium text-foreground mb-2">Key Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <Badge
                        key={courseIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-10 mt-16">
          <h3 className="text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white via-blue-50 to-white border-transparent"
              >
                <CardContent className="p-6 flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow flex-shrink-0">
                    <Award className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-foreground mb-1 leading-tight">{cert.title}</h4>
                    <p className="text-sm text-primary font-medium mb-1">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground mb-0">Issued: {cert.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Achievements */}
        <div className="space-y-10 mt-16">
          <h3 className="text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            Professional Achievements
          </h3>
          <Card className="group shadow-xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <CardContent className="p-6">
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className={`text-muted-foreground leading-relaxed flex items-start transform transition duration-500 delay-${index * 100}`}
                  >
                    <span className="text-primary mr-3 font-bold animate-pulse-slow">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.05); opacity: 0.9; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Education;
