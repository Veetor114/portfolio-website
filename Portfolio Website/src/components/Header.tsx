import image_4ee319136295a6e514718f5d7d391a9b58c4b22d from 'figma:asset/4ee319136295a6e514718f5d7d391a9b58c4b22d.png';
import image_f74eccc7741823e48a4919da75dc1a3272e7a9ea from 'figma:asset/f74eccc7741823e48a4919da75dc1a3272e7a9ea.png';
import image_4ee319136295a6e514718f5d7d391a9b58c4b22d from 'figma:asset/4ee319136295a6e514718f5d7d391a9b58c4b22d.png';
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 px-6 bg-[rgba(0,0,0,0)] relative">
      {/* Theme Toggle Button */}
      <div className="absolute top-8 right-8 z-10">
        <ThemeToggle />
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
            <ImageWithFallback
              src={image_4ee319136295a6e514718f5d7d391a9b58c4b22d}
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 text-gray-900 dark:text-gray-100"
          >
            Victor Ikpebagha
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 text-green-700 dark:text-green-400"
          >
            UI/UX Designer & Fronend Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            I create beautiful, functional digital experiences that solve real problems. From user research to pixel-perfect interfaces and seamless code implementation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-green-600 hover:bg-green-700 px-8 py-3"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 px-8 py-3"
            >
              Let's Talk
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
