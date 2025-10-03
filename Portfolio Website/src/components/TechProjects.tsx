import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

export function TechProjects() {
  const techProjects = [
    {
      id: 1,
      title: "React Design System",
      description: "Comprehensive component library with TypeScript, Storybook, and automated testing. Used by 3 production applications.",
      technologies: ["React", "TypeScript", "Storybook", "Jest", "Rollup"],
      githubLink: "https://github.com/Veetor114/New-design-system.git",
      stars: 247,
      forks: 34,
      highlights: [
        "40+ reusable components",
        "95% test coverage",
        "Automated npm publishing",
        "Dark mode support"
      ]
    },
    {
      id: 2,
      title: "AI-Powered Code Review Tool",
      description: "CLI tool that uses OpenAI GPT to analyze code quality, suggest improvements, and detect potential bugs before commits.",
      technologies: ["Node.js", "OpenAI API", "TypeScript", "Commander.js", "Chalk"],
      githubLink: "https://github.com/Veetor114",
      stars: 892,
      forks: 127,
      highlights: [
        "Supports 10+ languages",
        "Integrates with Git hooks",
        "Custom rule configuration",
        "1000+ weekly downloads"
      ]
    },
    {
      id: 3,
      title: "Real-time Collaboration Platform",
      description: "Full-stack application enabling real-time document editing with WebSocket connections, similar to Google Docs functionality.",
      technologies: ["Next.js", "Socket.io", "PostgreSQL", "Redis", "Prisma"],
      githubLink: "https://github.com/Veetor114",
      stars: 156,
      forks: 28,
      highlights: [
        "Real-time editing",
        "User presence indicators",
        "Version history",
        "Role-based permissions"
      ]
    },
    {
      id: 4,
      title: "Performance Monitoring Dashboard",
      description: "Open-source APM tool for monitoring web application performance with custom metrics and alerting system.",
      technologies: ["React", "D3.js", "Express.js", "InfluxDB", "Docker"],
      githubLink: "https://github.com/Veetor114",
      stars: 421,
      forks: 67,
      highlights: [
        "Custom metrics tracking",
        "Real-time alerts",
        "Performance insights",
        "Docker deployment"
      ]
    }
  ];

  return (
    <section id="tech-projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-gray-900 dark:text-gray-100">Open Source & Tech Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my technical skills through open-source contributions and personal projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {techProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group border-l-4 border-l-green-500 dark:bg-gray-700">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-gray-900 dark:text-gray-100 group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors mb-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {project.forks}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-3 text-gray-700 dark:text-gray-300">Key Highlights</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 text-gray-700 dark:text-gray-300">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="outline" 
                          className="text-xs border-blue-200 dark:border-blue-600 text-blue-700 dark:text-blue-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button 
                      size="sm"
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 flex-1"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Want to see more? Check out my GitHub profile for additional projects and contributions.
          </p>
          <Button 
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
            onClick={() => window.open('https://github.com/Veetor114', '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View GitHub Profile
          </Button>
        </motion.div>
      </div>
    </section>
  );
}