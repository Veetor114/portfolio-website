import { motion } from "motion/react";
import { Badge } from "./ui/badge";

export function About() {
  const tools = [
    "Figma", "React", "Next.js", "TypeScript", 
    "Tailwind CSS", "Adobe Creative Suite", "Framer", "Supabase","notion"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-gray-900 dark:text-gray-100">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-green-700 dark:text-green-400">My name is victor and i am Problem Solver at Heart</h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              I am passionate about creating digital experiences that make people's lives easier. With good years of experience in design and development, I bridge the gap between beautiful aesthetics and functional code.
            </p>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              My approach combines user centered design thinking with modern development practices. 
              I believe in iterative design, data-driven decisions, and clean, maintainable code 
              that scales with your business.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When i am not designing or coding, you'll find me exploring new technologies, 
              contributing to open source projects, or mentoring junior developers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-blue-700 dark:text-blue-400">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Badge 
                    variant="secondary" 
                    className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-gray-700 hover:from-green-200 hover:to-blue-200 transition-all duration-300"
                  >
                    {tool}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
