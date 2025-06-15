
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface ScrollQuoteRevealProps {
  quote: string;
  author?: string;
  className?: string;
}

const ScrollQuoteReveal = ({ quote, author, className }: ScrollQuoteRevealProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.blockquote
      ref={ref}
      className={`max-w-3xl mx-auto text-center px-4 py-8 ${className || ""}`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", duration: 0.8 }
        }
      }}
    >
      <p className="text-2xl md:text-3xl font-serif italic text-amber-900 mb-2 leading-normal">
        "{quote}"
      </p>
      {author && (
        <span className="block text-base text-amber-700 mt-2 font-light">
          – {author}
        </span>
      )}
    </motion.blockquote>
  );
};

export default ScrollQuoteReveal;
