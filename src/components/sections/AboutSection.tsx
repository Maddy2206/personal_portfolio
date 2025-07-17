import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Database, Globe, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
            <motion.div variants={itemVariants}>
              <Card className="border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-4">
                    <span className="text-2xl">🎓</span>
                    Education
                  </CardTitle>
                  <div className="w-16 h-1 bg-gradient-primary"></div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">
                      B.Tech in Computer Science & Engineering
                    </h3>
                    <h4 className="text-lg text-primary font-semibold">
                      IIT Mandi
                    </h4>
                    <p className="text-muted-foreground">2021 – Present</p>
                    
                    <div className="space-y-3 mt-4">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        <span className="text-muted-foreground">Team Captain - Table Tennis (56th Inter-IIT Sports Meet)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        <span className="text-muted-foreground">Competitive Programming Enthusiast</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        <span className="text-muted-foreground">Active in Technical Societies</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Side - Technologies & Skills */}
            <motion.div variants={itemVariants}>
              <Card className="border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-foreground flex items-center gap-4">
                    <span className="text-2xl">⚡</span>
                    Technologies & Skills
                  </CardTitle>
                  <div className="w-16 h-1 bg-gradient-primary"></div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <motion.span
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-secondary/50 rounded-full text-secondary-foreground border border-border/50 
                                 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};