import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Code, Heart, Zap } from "lucide-react";

const activities = [
  {
    icon: Users,
    title: "Sports Leadership",
    description: "Leading the Table Tennis team at IIT Mandi as Captain, participating in Inter-IIT competitions and mentoring junior players.",
    highlights: [
      "Team Captain for Table Tennis",
      "56th Inter-IIT Sports Meet participant",
      "Mentoring junior athletes",
      "Promoting sports culture on campus"
    ]
  },
  {
    icon: Code,
    title: "Hackathon Participation",
    description: "Active participant in various hackathons and coding competitions, building innovative solutions under tight deadlines.",
    highlights: [
      "Multiple hackathon participations",
      "Team collaboration and leadership",
      "Rapid prototyping skills",
      "Innovation under pressure"
    ]
  },
  {
    icon: Heart,
    title: "Community Service",
    description: "Volunteering for various social causes and contributing to community development initiatives.",
    highlights: [
      "Teaching underprivileged children",
      "Environmental awareness campaigns",
      "Blood donation drives",
      "Community outreach programs"
    ]
  },
  {
    icon: Zap,
    title: "Technical Clubs",
    description: "Active member of technical clubs and societies, organizing events and sharing knowledge with peers.",
    highlights: [
      "Programming club member",
      "Workshop organization",
      "Peer mentoring",
      "Technical event management"
    ]
  }
];

export const ExtracurricularsSection = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="extracurriculars" className="py-20 bg-portfolio-bg">
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
              Beyond Coding
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              My involvement in various activities that shape my holistic development and leadership skills.
            </p>
          </motion.div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-portfolio-elevated rounded-xl p-8 border border-white/10 hover:border-accent-primary/30 
                           transition-all duration-300 h-full"
                >
                  {/* Activity Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <activity.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                      {activity.title}
                    </h3>
                  </div>

                  {/* Activity Description */}
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-4">Key Highlights:</h4>
                    <ul className="space-y-3">
                      {activity.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-text-secondary">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Leadership Quote */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-portfolio-elevated rounded-xl p-8 border border-white/10 max-w-4xl mx-auto">
              <blockquote className="text-xl md:text-2xl text-text-primary font-light italic mb-4">
                "Leadership is not about being in charge. It's about taking care of those in your charge."
              </blockquote>
              <p className="text-text-muted">
                This philosophy guides my approach to all leadership roles and team collaborations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};