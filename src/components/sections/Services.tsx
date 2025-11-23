import { Palette, Layout, Smartphone, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description:
        "Creating distinctive visual identities that capture your brand's essence and resonate with your audience.",
    },
    {
      icon: Layout,
      title: "Web Design",
      description:
        "Designing beautiful, intuitive websites that deliver exceptional user experiences across all devices.",
    },
    {
      icon: Smartphone,
      title: "App Design",
      description:
        "Crafting elegant mobile experiences that users love, with seamless interactions and stunning visuals.",
    },
    {
      icon: Sparkles,
      title: "Creative Direction",
      description:
        "Guiding your creative vision from concept to execution with strategic thinking and artistic excellence.",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 px-6 lg:px-8 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-900 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-gray-600 mb-4">What We Do</div>
          <h2 className="text-5xl md:text-6xl tracking-tight text-gray-900">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 hover:shadow-lg transition-shadow duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-0 h-0 bg-gray-900"
                whileHover={{ width: "100px", height: "100px" }}
                transition={{ duration: 0.4 }}
              />

              <motion.div
                className="w-14 h-14 bg-gray-900 text-white flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors relative z-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon size={28} />
              </motion.div>

              <h3 className="text-2xl text-gray-900 mb-4 relative z-10">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {service.description}
              </p>

              {/* Number indicator */}
              <motion.div
                className="absolute bottom-4 right-4 text-6xl opacity-5"
                initial={{ scale: 0, rotate: -180 }}
                animate={
                  isInView
                    ? { scale: 1, rotate: 0 }
                    : { scale: 0, rotate: -180 }
                }
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                0{index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
