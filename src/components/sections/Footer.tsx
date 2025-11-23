import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const footerLinks = {
    Company: ["About", "Services", "Projects", "Contact"],
    Services: [
      "Brand Identity",
      "Web Design",
      "App Design",
      "Creative Direction",
    ],
    Connect: ["Instagram", "LinkedIn", "Twitter", "Email"],
  };

  const socialIcons = [
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Mail, href: "#" },
  ];

  return (
    <footer
      ref={ref}
      className="bg-gray-50 px-6 lg:px-8 py-20 relative overflow-hidden"
    >
      {/* Animated background element */}
      <motion.div
        className="absolute top-0 left-1/2 w-full h-full bg-gradient-to-b from-gray-100 to-transparent opacity-50"
        initial={{ x: "-50%", y: "100%" }}
        animate={isInView ? { x: "-50%", y: "0%" } : { x: "-50%", y: "100%" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="mb-4"
              whileHover={{ scale: 1.0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/logo.svg"
                alt="Form & Function Logo"
                className="h-10 w-auto"
              />
            </motion.h3>
            <p className="text-gray-600 mb-6 max-w-sm">
              A design studio dedicated to creating meaningful experiences
              through the perfect balance of form and function.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={
                    isInView
                      ? { scale: 1, rotate: 0 }
                      : { scale: 0, rotate: -180 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.15,

                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + columnIndex * 0.1 }}
            >
              <h4 className="text-gray-900 mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + columnIndex * 0.1 + linkIndex * 0.05,
                    }}
                  >
                    <motion.a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors inline-block relative group"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            © 2025 Form & Function. All rights reserved.
          </motion.p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service"].map((link, index) => (
              <motion.a
                key={link}
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors relative group"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
