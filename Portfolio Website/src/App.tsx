import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { CaseStudies } from "./components/CaseStudies";
import { TechProjects } from "./components/TechProjects";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Admin } from "./components/Admin";
import { ThemeProvider } from "./components/ThemeProvider";
import { useState, useEffect } from "react";

export default function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    // Check if admin mode is requested via URL hash
    const hash = window.location.hash;
    if (hash === '#admin') {
      setShowAdmin(true);
      // Remove hash from URL for security
      window.history.replaceState('', document.title, window.location.pathname + window.location.search);
    }
  }, []);

  if (showAdmin) {
    return (
      <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
        <div className="min-h-screen">
          <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 p-4">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <h1 className="text-gray-900 dark:text-gray-100">Portfolio Admin</h1>
              <button 
                onClick={() => setShowAdmin(false)}
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                ← Back to Portfolio
              </button>
            </div>
          </div>
          <Admin />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen">
        <Header />
        <About />
        <Projects />
        <CaseStudies />
        <TechProjects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}