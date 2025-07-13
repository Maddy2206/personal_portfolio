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
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              I'm a passionate full-stack developer and competitive programmer pursuing B.Tech at IIT Mandi. 
              I love creating efficient, scalable solutions and pushing the boundaries of what's possible with code. 
              When I'm not coding, you'll find me on the table tennis court leading my team to victory.
            </p>
          </motion.div>

          {/* Traits Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                variants={itemVariants}
                className="bg-portfolio-elevated rounded-xl p-6 text-center hover:bg-portfolio-glass transition-all duration-300 border border-white/5"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                  <trait.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{trait.title}</h3>
                <p className="text-text-muted text-sm">{trait.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
              Technologies & Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-portfolio-glass rounded-full text-text-secondary border border-white/10 
                           hover:border-accent-primary/50 hover:text-accent-primary transition-all duration-300 cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};