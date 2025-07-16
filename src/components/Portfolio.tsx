import { Navigation } from "./Navigation";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";

import { ExperienceSection } from "./sections/ExperienceSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { AchievementsSection } from "./sections/AchievementsSection";

import { ContactSection } from "./sections/ContactSection";

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-portfolio-bg text-text-primary">
      <Navigation />
      
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        
        <div id="experience">
          <ExperienceSection />
        </div>
        
        <div id="projects">
          <ProjectsSection />
        </div>
        
        <div id="achievements">
          <AchievementsSection />
        </div>
        
        
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-portfolio-surface border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-text-muted">
            © 2024 Medhansh Rawat. Built with passion using React, Framer Motion, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};