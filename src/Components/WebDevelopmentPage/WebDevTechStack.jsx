import React from "react"
import { motion } from "framer-motion"

const WebDevTechStack = () => {
  const frontendTechnologies = [
    {
      name: "HTML5",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      alt: "HTML5 Logo",
    },
    {
      name: "CSS3",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      alt: "CSS3 Logo",
    },
    {
      name: "JavaScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      alt: "JavaScript Logo",
    },
    {
      name: "React",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      alt: "React Logo",
    },
    {
      name: "Next.js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      alt: "Next.js Logo",
    },
    {
      name: "Vue.js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
      alt: "Vue.js Logo",
    },
    {
      name: "Angular",
      icon: "https://angular.io/assets/images/logos/angular/angular.svg",
      alt: "Angular Logo",
    },
  ]

  const backendTechnologies = [
    {
      name: "Node.js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      alt: "Node.js Logo",
    },
    {
      name: "Python",
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      alt: "Python Logo",
    },
    {
      name: "Java",
      icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
      alt: "Java Logo",
    },
    {
      name: "PHP",
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      alt: "PHP Logo",
    },
    {
      name: "Ruby",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
      alt: "Ruby Logo",
    },
    // {
    //   name: "C#",
    //   icon: "https://upload.wikimedia.org/wikipedia/de/0/05/C_Sharp_Logo.svg",
    //   alt: "C# Logo",
    // },
    {
      name: "Express",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      alt: "Express Logo",
    },
  ]

  const databaseTechnologies = [
    {
      name: "MySQL",
      icon: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
      alt: "MySQL Logo",
    },
    {
      name: "PostgreSQL",
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      alt: "PostgreSQL Logo",
    },
    {
      name: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB Logo",
    },
    {
      name: "Firebase",
      icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      alt: "Firebase Logo",
    },
  ]

  const toolsTechnologies = [
    {
      name: "Git",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
      alt: "Git Logo",
    },
    {
      name: "Docker",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
      alt: "Docker Logo",
    },
    {
      name: "AWS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      alt: "AWS Logo",
    },
    {
      name: "Azure",
      icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
      alt: "Azure Logo",
    },
    {
      name: "VS Code",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      alt: "VS Code Logo",
    },
    {
      name: "GraphQL",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
      alt: "GraphQL Logo",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="w-full bg-slate-50 dark:bg-[#1a2634] py-16 border-y border-slate-200 dark:border-slate-700">
      <div className="px-4 md:px-20 lg:px-40 flex justify-center">
        <div className="max-w-6xl w-full flex flex-col items-center gap-10">
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Technologies We Master
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0d131b] dark:text-white">
              Full-Stack Development Expertise
            </h2>
          </motion.div>

          <div className="w-full space-y-12">
            <div>
              <h3 className="text-xl font-bold text-center text-[#0d131b] dark:text-white mb-6">
                Frontend Technologies
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 w-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {frontendTechnologies.map((tech, index) => (
                  <motion.div
                    key={`frontend-${index}`}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-[#151f2b] border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.alt}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src =
                          "https://via.placeholder.com/32x32/cccccc/666666?text=" +
                          tech.name.charAt(0)
                      }}
                    />
                    <span className="text-xs font-medium text-center text-[#0d131b] dark:text-slate-200">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-center text-[#0d131b] dark:text-white mb-6">
                Backend Technologies
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 w-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {backendTechnologies.map((tech, index) => (
                  <motion.div
                    key={`backend-${index}`}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-[#151f2b] border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.alt}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src =
                          "https://via.placeholder.com/32x32/cccccc/666666?text=" +
                          tech.name.charAt(0)
                      }}
                    />
                    <span className="text-xs font-medium text-center text-[#0d131b] dark:text-slate-200">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-center text-[#0d131b] dark:text-white mb-6">
                Database & Tools
              </h3>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                {[...databaseTechnologies, ...toolsTechnologies].map(
                  (tech, index) => (
                    <motion.div
                      key={`other-${index}`}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-[#151f2b] border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.alt}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src =
                            "https://via.placeholder.com/32x32/cccccc/666666?text=" +
                            tech.name.charAt(0)
                        }}
                      />
                      <span className="text-xs font-medium text-center text-[#0d131b] dark:text-slate-200">
                        {tech.name}
                      </span>
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebDevTechStack
