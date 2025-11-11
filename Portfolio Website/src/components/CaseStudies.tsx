import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, Users, Clock, Target } from "lucide-react";

export function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Conversion Optimization",
      subtitle: "Gas-cooker Retailer Platform Redesign",
      problem: "The existing checkout process had a 70% abandonment rate, and users struggled to find products through the complex navigation system.",
      research: [
        "Conducted 15 user interviews with existing customers",
        "Analyzed heatmaps and user session recordings",
        "Performed competitive analysis of gas retailers",
      ],
      process: [
        "Created user personas based on behavioral data",
        "Redesigned information architecture and navigation",
        "Prototyped new checkout flow with progressive disclosure",
        "Implemented responsive design system with accessibility focus"
      ],
      results: [
        { metric: "Conversion Rate", improvement: "+40%", icon: TrendingUp },
        { metric: "Checkout Completion", improvement: "+55%", icon: Target },
        { metric: "Page Load Time", improvement: "-60%", icon: Clock },
        { metric: "User Satisfaction", improvement: "+85%", icon: Users }
      ],
      technologies: ["Figma", "React", "Next.js", "Stripe API", "auth", "Google Analytics"]
    },
    {
      id: 2,
      title: "Personal Finance App",
      subtitle: "Helping Users Track Expenses and Budgets Effectively",
      problem: "Users often struggled to track their expenses and budgets with clarity. Existing solutions felt complicated, and people had difficulty viewing insights like charts and categories. This led to poor budgeting habits and lack of financial awareness.",
      research: [
        "Collected feedback from early users about confusion in tracking daily transactions",
        "Analyzed pain points in competitor apps (Mint, YNAB, etc.)",
        "Reviewed best practices for financial dashboards and user flows",
        "Validated design ideas with quick prototypes tested among peers"
      ],
      process: [
        "Designed clean, intuitive navigation with five key areas: Home, Transactions, Budget, Banks, Settings",
        "Implemented superbase + Node.js backend for secure data storage and real-time syncing",
        "Built responsive UI with React and Tailwind CSS for seamless cross-device usage",
        "Added visual charts for better insights, making budgets and expenses more understandable",
        "Integrated quick-action buttons for Send Money, Request, Pay Bills, and Savings with superbase functionality",
        "Streamlined budget setup and expense entry with minimal steps"
      ],
      results: [
        { metric: "User Clarity", improvement: "+70%", icon: Users },
        { metric: "Budget Setup Success Rate", improvement: "+50%", icon: Target },
        { metric: "Transaction Entry Speed", improvement: "-40% time", icon: Clock },
        { metric: "User Retention", improvement: "+30%", icon: TrendingUp }
      ],
      technologies: ["React", "Tailwind CSS", "superbase","stripe API", "Node.js", "Chart.js", "auth", "react native"]
    },
    {
      id: 3,
      title: "Business Analytics Dashboard",
      subtitle: "BEAPOne Business Support System Analytics Dashboard",
      problem: "BNL struggled with fragmented monitoring across 19 SaaS modules, long customer issue resolution times, and difficulty maintaining compliance and performance oversight.",
      research: [
        "Analyzed 25,642+ daily operations across 19 modules",
        "Conducted interviews with 18 concurrent staff members",
        "Benchmarked compliance requirements against Nigerian regulatory standards",
        "Simulated real-time data flows for KPI testing"
      ],
      process: [
        "Designed modular components (MetricsCard, CustomerOverview, PerformanceCharts, AuditLogs, RealTimeMonitor, WidgetCustomizer)",
        "Implemented centralized KPI tracking (efficiency, compliance, resolution time, query performance)",
        "Developed responsive UI with Nigerian cultural palette",
        "Simulated real-time metrics for testing and demos"
      ],
      results: [
        { metric: "Admin Efficiency", improvement: "+87.3%", icon: TrendingUp },
        { metric: "Compliance Rate", improvement: "99.5%", icon: Target },
        { metric: "Resolution Time", improvement: "33 min avg (47% faster)", icon: Clock },
        { metric: "System Uptime", improvement: "99.8%", icon: Users }
      ],
      technologies: [
        "React 18+", 
        "TypeScript", 
        "Tailwind CSS v4", 
        "Shadcn/UI", 
        "Lucide React", 
        "Recharts"
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-gray-900 dark:text-gray-100">Case Studies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Deep dives into my design process, challenges faced, and measurable results achieved.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 dark:bg-gray-800">
                <CardHeader className="text-center mb-8">
                  <CardTitle className="text-gray-900 dark:text-gray-100 mb-2">{study.title}</CardTitle>
                  <CardDescription className="text-blue-700 dark:text-blue-400">{study.subtitle}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Problem */}
                  <div>
                    <h3 className="mb-4 text-green-700 dark:text-green-400">Problem</h3>
                    <p className="text-gray-600 dark:text-gray-300">{study.problem}</p>
                  </div>

                  {/* Research & Process Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="mb-4 text-green-700 dark:text-green-400">Research</h3>
                      <ul className="space-y-2">
                        {study.research.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="mb-4 text-blue-700 dark:text-blue-400">Process</h3>
                      <ul className="space-y-2">
                        {study.process.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="mb-6 text-gray-900 dark:text-gray-100">Results</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {study.results.map((result, idx) => {
                        const IconComponent = result.icon;
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
                          >
                            <IconComponent className="w-8 h-8 mx-auto mb-3 text-green-600 dark:text-green-400" />
                            <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1">
                              {result.improvement}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">{result.metric}</div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="mb-4 text-gray-700 dark:text-gray-300">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <Badge 
                          key={tech}
                          variant="secondary"
                          className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
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