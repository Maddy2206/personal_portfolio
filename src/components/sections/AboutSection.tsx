import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Database, Globe, Zap } from "lucide-react";

const skills = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "C++", category: "Programming" },
  { name: "DSA", category: "Programming" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "Tools" },
  { name: "Gemini API", category: "AI/ML" },
  { name: "Streamlit", category: "AI/ML" },
];

const traits = [
  {
    icon: Code,
    title: "Problem Solver",
    description: "Love tackling complex algorithms and competitive programming challenges."
  },
  {
    icon: Globe,
    title: "Full-Stack Developer",
    description: "Building end-to-end solutions with modern web technologies."
  },
  {
    icon: Database,
    title: "Data Enthusiast",
    description: "Working with databases and optimizing performance at scale."
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description: "Always optimizing for speed, efficiency, and user experience."
  }
];

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-portfolio-surface">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side - Education */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Education
                </h2>
                <div className="w-16 h-1 bg-gradient-primary mb-8"></div>
              </div>

              {/* Education Timeline */}
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
                
                <motion.div
                  variants={itemVariants}
                  className="relative bg-portfolio-elevated rounded-xl p-6 ml-16 border border-white/10"
                >
                  <div className="absolute -left-16 top-6 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🎓</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    B.Tech in Computer Science & Engineering
                  </h3>
                  <h4 className="text-lg text-accent-primary font-semibold mb-2">
                    IIT Mandi
                  </h4>
                  <p className="text-text-muted mb-4">2021 – Present</p>
                  
                  <div className="space-y-2 text-text-secondary">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-accent-primary rounded-full mr-3"></span>
                      <span>Team Captain - Table Tennis (56th Inter-IIT Sports Meet)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-accent-primary rounded-full mr-3"></span>
                      <span>Competitive Programming Enthusiast</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-accent-primary rounded-full mr-3"></span>
                      <span>Active in Technical Societies</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Technologies & Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                  Technologies & Skills
                </h2>
                <div className="w-16 h-1 bg-gradient-primary mb-8"></div>
              </div>

              {/* Skills as Tags */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-portfolio-glass rounded-full text-text-secondary border border-white/10 
                             hover:border-accent-primary/50 hover:text-accent-primary transition-all duration-300 cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};