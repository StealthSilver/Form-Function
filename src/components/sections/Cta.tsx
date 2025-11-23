import { ArrowRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section id="contact" ref={ref} className="py-24 px-6 lg:px-8 bg-white">
      <motion.div className="max-w-7xl mx-auto" style={{ scale, opacity }}>
        <motion.div
          className="bg-gray-900 text-white px-12 py-20 lg:px-20 lg:py-28 relative overflow-hidden"
          initial={{ rotateX: 15 }}
          animate={isInView ? { rotateX: 0 } : { rotateX: 15 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background patterns */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          <div className="max-w-3xl relative z-10">
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                "Let's",
                "create",
                "something",
                "extraordinary",
                "together",
              ].map((word, index) => (
                <motion.span
                  key={word}
                  className="inline-block mr-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.05,
                    color: "#d1d5db",
                    transition: { duration: 0.2 },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Ready to elevate your brand? Get in touch and let's discuss how we
              can bring your vision to life.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                className="px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gray-200"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform relative z-10"
                />
              </motion.button>
              <motion.button
                className="px-8 py-4 border border-white text-white hover:bg-white/10 transition-colors duration-200"
                whileHover={{ scale: 1.05, borderWidth: "2px" }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </motion.div>
          </div>

          {/* Decorative corner elements */}
          <motion.div
            className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-white/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-white/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
