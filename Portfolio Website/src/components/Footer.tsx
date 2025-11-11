import { motion } from "motion/react";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="mb-4 text-white">Victor Ikpebagha</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Creating digital experiences that make a difference. Thank you for taking the time to learn about my work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 flex items-center gap-2">
                Made with <Heart className="w-4 h-4 text-red-500" />
              </p>
              
              <p className="text-gray-400">
                © 2024 Victor Ikpebagha. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Back to top button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onClick={scrollToTop}
          className="absolute top-6 right-6 w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
}