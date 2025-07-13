import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Trophy, Medal, Star, Shield } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "National Table Tennis Player",
    description: "Team Captain at IIT Mandi, 56th Inter-IIT Sports Meet",
    category: "Sports",
    color: "accent-warning"
  },
  {
    icon: Shield,
    title: "AWS Certified Solutions Architect",
    description: "Associate level certification in cloud architecture",
    category: "Cloud",
    color: "accent-primary"
  },
  {
    icon: Medal,
    title: "Microsoft Certified: Azure Fundamentals",
    description: "Foundational knowledge of cloud services",
    category: "Cloud",
    color: "accent-secondary"
  },
  {
    icon: Star,
    title: "Full Stack Web Development",
    description: "Coursera Specialization Certificate",
    category: "Development",
    color: "accent-success"
  },
  {
    icon: Award,
    title: "Data Structures & Algorithms",
    description: "Coursera Specialization Certificate",
    category: "Programming",
    color: "accent-primary"
  },
  {
    icon: Trophy,
    title: "Competitive Programming",
    description: "Active participant in CodeChef, Codeforces, and LeetCode",
    category: "Programming",
    color: "accent-secondary"
  }
];

export const AchievementsSection = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="achievements" className="py-20 bg-portfolio-surface">
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
              Achievements & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Recognition of my dedication to continuous learning and excellence in various domains.
            </p>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <div className="bg-portfolio-elevated rounded-xl p-6 border border-white/10 hover:border-accent-primary/30 
                              transition-all duration-300 h-full text-center relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent-primary/5 opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center 
                                   group-hover:animate-pulse`}>
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-portfolio-glass 
                                     text-text-secondary border border-white/10`}>
                        {achievement.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-primary mb-2">5+</div>
                <div className="text-text-secondary text-sm">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-primary mb-2">National</div>
                <div className="text-text-secondary text-sm">Sports Level</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-primary mb-2">Captain</div>
                <div className="text-text-secondary text-sm">Leadership Role</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-primary mb-2">Multiple</div>
                <div className="text-text-secondary text-sm">Domains</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};