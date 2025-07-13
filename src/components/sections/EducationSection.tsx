import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, Calendar } from "lucide-react";

export const EducationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="education" className="py-20 bg-portfolio-bg">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2"></div>

            {/* Education Item */}
            <motion.div
              variants={itemVariants}
              className="relative flex items-center mb-8"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-accent-primary rounded-full transform md:-translate-x-1/2 z-10 border-4 border-portfolio-bg"></div>

              {/* Content Card */}
              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-portfolio-elevated rounded-xl p-6 border border-white/10 hover:border-accent-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">B.Tech in Computer Science</h3>
                      <p className="text-accent-primary font-semibold">Indian Institute of Technology Mandi</p>
                    </div>
                  </div>

                  <div className="flex items-center text-text-muted mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>2021 – Present</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-accent-success mr-2" />
                      <span className="text-text-secondary">Strong academic performance in Computer Science</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-accent-success mr-2" />
                      <span className="text-text-secondary">Table Tennis Team Captain</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-accent-success mr-2" />
                      <span className="text-text-secondary">56th Inter-IIT Sports Meet Participant</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-accent-success mr-2" />
                      <span className="text-text-secondary">Active in competitive programming and hackathons</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Achievements Highlight */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-portfolio-elevated rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-accent-primary mb-2">4+ Years</div>
                <div className="text-text-secondary">Computer Science Study</div>
              </div>
              <div className="bg-portfolio-elevated rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-accent-primary mb-2">Captain</div>
                <div className="text-text-secondary">Table Tennis Team</div>
              </div>
              <div className="bg-portfolio-elevated rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-accent-primary mb-2">IIT</div>
                <div className="text-text-secondary">Premier Institution</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};