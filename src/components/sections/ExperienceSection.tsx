import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experience = {
  company: "Samsung Research",
  role: "Software Intern",
  duration: "Jan 2024 – May 2024",
  location: "Bangalore, India",
  description: "Worked on real-time speech emotion detection on Bixby calls. Integrated SER pipeline into Android achieving sub-200ms latency.",
  achievements: [
    "Developed real-time speech emotion recognition system",
    "Integrated ML pipeline into Android platform",
    "Achieved sub-200ms latency for real-time processing",
    "Worked with Bixby voice assistant technology"
  ],
  technologies: ["Android", "Machine Learning", "Python", "Java", "TensorFlow"]
};

export const ExperienceSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-portfolio-surface">
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
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Professional experience building scalable solutions and working with cutting-edge technologies.
            </p>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-portfolio-elevated rounded-xl p-8 border border-white/10 hover:border-accent-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{experience.role}</h3>
                    <h4 className="text-xl text-accent-primary font-semibold mb-2">{experience.company}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-text-muted space-y-1 sm:space-y-0 sm:space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                {experience.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-text-primary mb-3">Key Achievements:</h5>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-text-secondary">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h5 className="text-lg font-semibold text-text-primary mb-3">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-portfolio-glass rounded-full text-sm text-text-secondary border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};