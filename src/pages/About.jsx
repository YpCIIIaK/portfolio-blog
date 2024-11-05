import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'HTML5+',
    'React',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'CSS3',
    'Redux',
    'Git',
    'REST APIs',
    'GraphQL',
    'Webpack',
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-textSecondary">
              <p className="mb-4">
                Hello! I'm Vladimir, a frontend developer with a passion for creating
                beautiful and functional web applications. My journey in web development
                began during my school years, and I've been hooked ever since.
              </p>
              <p className="mb-4">
                I specialize in React and its ecosystem, building responsive and
                performant web applications. I love working with modern JavaScript
                and staying up-to-date with the latest web technologies.
              </p>
              <p className="mb-4">
                When I'm not coding, im still learning new things in development field.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Skills & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-textSecondary"
                  >
                    <span className="text-secondary">▹</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            CV
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;