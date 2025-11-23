import { ImageWithFallback } from "../ui/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "../../config/projects.config";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-6 lg:px-8 bg-white relative"
    >
      {/* Parallax background shapes */}
      <motion.div
        className="absolute top-40 right-0 w-64 h-64 border-2 border-gray-200"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 150]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 45]),
        }}
      />
      <motion.div
        className="absolute bottom-40 left-0 w-48 h-48 bg-gray-100"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, -45]),
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex items-end justify-between mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl">
            <div className="text-gray-600 mb-4">Our Work</div>
            <h2 className="text-5xl md:text-6xl tracking-tight text-gray-900">
              Selected Projects
            </h2>
          </div>
          <motion.button
            className="hidden md:flex items-center gap-2 text-gray-900 hover:gap-3 transition-all"
            whileHover={{ x: 10 }}
          >
            View All Projects
            <ArrowUpRight size={20} />
          </motion.button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="relative aspect-4/3 bg-gray-100 overflow-hidden mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  initial={{ scale: 1.2 }}
                  animate={isInView ? { scale: 1 } : { scale: 1.2 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                  >
                    <ArrowUpRight className="text-gray-900" size={28} />
                  </motion.div>
                </motion.div>
              </motion.div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.category}</p>
                </div>
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUpRight
                    size={24}
                    className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="md:hidden flex items-center gap-2 text-gray-900 hover:gap-3 transition-all mt-12 mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          View All Projects
          <ArrowUpRight size={20} />
        </motion.button>
      </div>
    </section>
  );
}
