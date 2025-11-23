"use client";
import StarIcon from "@mui/icons-material/Star";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote:
        "Form & Function transformed our brand identity completely. Their attention to detail and creative vision exceeded all our expectations.",
      author: "Sarah Mitchell",
      role: "CEO, TechStart",
      rating: 5,
    },
    {
      quote:
        "Working with this team was an absolute pleasure. They brought our vision to life with elegance and precision.",
      author: "James Chen",
      role: "Founder, Modern Living",
      rating: 5,
    },
    {
      quote:
        "The best design agency we've ever worked with. Professional, creative, and always on point with their deliverables.",
      author: "Emma Thompson",
      role: "Marketing Director, Luxe Brands",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 px-6 lg:px-8 bg-gray-50 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0,0,0,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(0,0,0,0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(0,0,0,0.05) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-gray-600 mb-4">Testimonials</div>
          <h2 className="text-5xl md:text-6xl tracking-tight text-gray-900">
            What Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 relative group"
              initial={{ opacity: 0, y: 80, rotateX: -15 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotateX: 0 }
                  : { opacity: 0, y: 80, rotateX: -15 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{
                y: -15,
                boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 },
              }}
            >
              {/* Decorative quote mark */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-gray-900 text-white flex items-center justify-center text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0, rotate: -180 }}
                animate={
                  isInView
                    ? { scale: 1, rotate: 0 }
                    : { scale: 0, rotate: -180 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              >
                "
              </motion.div>

              <motion.div
                className="flex gap-1 mb-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
              >
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isInView
                        ? { scale: 1, rotate: 0 }
                        : { scale: 0, rotate: -180 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + 0.5 + i * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <StarIcon
                      style={{ fontSize: 20 }}
                      className="fill-gray-900 text-gray-900"
                    />
                  </motion.div>
                ))}
              </motion.div>

              <p className="text-gray-900 mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <motion.div
                className="pt-6 border-t border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
              >
                <div className="text-gray-900 mb-1">{testimonial.author}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </motion.div>

              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
