import image_d3d033e0b4506f9778d2eab39f978fb0789e86c9 from 'figma:asset/d3d033e0b4506f9778d2eab39f978fb0789e86c9.png';
import image_f5c9904b478c0830fb263092e6c26978f4bdfb74 from 'figma:asset/f5c9904b478c0830fb263092e6c26978f4bdfb74.png';
import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Gas Delivery Platform",
      description: "Complete UI/UX overhaul of a gas delivery platform, resulting in 40% increase in conversions",
      image: "",
      contributions: ["UI/UX Design", "User Research", "Prototyping", "Frontend Development"],
      liveLink: "https://e-commerce-platform-ruby.vercel.app/",
      githubLink: "https://github.com/Veetor114/E-commerce-platform-.git",
      caseStudy: true
    },
    {
      id: 2,
      title: "FinTech Mobile App",
      description: "User-centered design for a personal finance mobile app with emphasis on accessibility and security",
      image: image_f5c9904b478c0830fb263092e6c26978f4bdfb74,
      contributions: ["Mobile Design", "User Flows", "Interaction Design", "React Native Development"],
      liveLink: "https://personal-finance-app-pi-nine.vercel.app/",
      githubLink: "https://github.com/Veetor114/Personal-finance-app.git",
      caseStudy: true
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Data visualization dashboard for SaaS platform with real-time updates and customizable widgets",
      image: image_d3d033e0b4506f9778d2eab39f978fb0789e86c9,
      contributions: ["Dashboard Design", "Data Visualization", "React Development", "API Integration"],
      liveLink: "https://business-support-system-analytics-d.vercel.app/",
      githubLink: "https://github.com/Veetor114/Business-Support-System-Analytics-Dashboard.git",
      caseStudy: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-gray-900 dark:text-gray-100">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work spanning UI/UX design, frontend development, and full-stack applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-gray-900 group-hover:text-green-700 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2 text-gray-700">Key Contributions</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.contributions.map((contribution) => (
                        <Badge 
                          key={contribution}
                          variant="outline" 
                          className="text-xs border-green-200 text-green-700"
                        >
                          {contribution}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button 
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 flex-1"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {project.caseStudy ? 'Case Study' : 'Live Demo'}
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}