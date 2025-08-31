import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 2000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "senahidramic0204@gmail.com", href: "mailto:senahidramic0204@gmail.com" },
    { icon: Phone, label: "Phone", value: "+387 xxx xxx xxx", href: "tel:+38762134567" },
    { icon: MapPin, label: "Location", value: "Sarajevo, Bosnia and Herzegovina", href: "#" }
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hidsen/", color: "hover:text-blue-600" },
    { icon: Github, label: "GitHub", href: "https://github.com/HidseN", color: "hover:text-gray-900" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/", color: "hover:text-blue-500" },
    { icon: Mail, label: "Email", href: "mailto:senahidramic0204@gmail.com", color: "hover:text-red-500" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background/70 to-background/100 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute -top-40 -left-40 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? I'd love to hear from you. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Social */}
          <div className="space-y-12">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-card border-transparent">
                  <CardContent className="p-6">
                    <a href={info.href} className="flex items-center gap-4 group">
                      <div className="w-14 h-14 bg-gradient-hero rounded-lg flex items-center justify-center shadow-glow">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-muted-foreground text-sm">{info.label}</div>
                        <div className="text-foreground font-semibold group-hover:text-primary transition-colors">{info.value}</div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 hover:shadow-glow hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-card border-transparent">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input id="firstName" name="firstName" placeholder="First Name" required className="border-border/50 focus:border-primary" />
                  <Input id="lastName" name="lastName" placeholder="Last Name" required className="border-border/50 focus:border-primary" />
                </div>

                <Input id="email" name="email" type="email" placeholder="Email Address" required className="border-border/50 focus:border-primary" />
                <Input id="subject" name="subject" placeholder="Subject" required className="border-border/50 focus:border-primary" />
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or just say hello..."
                  required
                  className="border-border/50 focus:border-primary resize-none"
                />

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          .shadow-glow {
            box-shadow: 0 10px 30px rgba(0,0,0,0.1), 0 0 60px rgba(0,0,0,0.05);
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
