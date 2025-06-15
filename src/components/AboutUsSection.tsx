import { motion } from "framer-motion";

const headline = "We believe moments are more than just pictures — they're a lasting legacy of feelings.";

const aboutParagraphs = [
  "We're a documentation team that captures more than just the moment, It also has a sense of it.",
  "From the light laughter before the contract to the tears in the last hug, We're here to capture it all without disturbing the magic itself.",
  "With a cinematic approach and selective editing, Every photo you get is more than just documentation, but a movie that's cut from your life story, and you won't get that opportunity again."
];

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8 - custom * 0.15,
      delay: 0.15 * custom,
      ease: [0.22, 1, 0.36, 1],
    }
  }),
};

const bgImageUrl = "/lovable-uploads/9cb2c52a-a3e8-4a41-9d46-2e9fc18bc48c.png";

const AboutUsSection = () => (
  <section
    id="about-us"
    className="relative py-20 bg-cream-50 overflow-hidden"
  >
    {/* Bg Image Layer with blur + overlay */}
    <div className="absolute inset-0 -z-10">
      <img
        src={bgImageUrl}
        alt=""
        className="w-full h-full object-cover object-center opacity-60 blur-[2.5px]"
        style={{ filter: "blur(4px)" }}
        draggable={false}
      />
      {/* Cream/white overlay for readability */}
      <div
        className="absolute inset-0 bg-cream-50/70"
        aria-hidden="true"
      />
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Headline */}
      <motion.h2
        className="text-4xl md:text-5xl text-center font-serif italic font-light text-stone-800 mb-8 drop-shadow-lg"
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.55 }}
        custom={0}
      >
        {headline}
      </motion.h2>
      {/* Paragraphs */}
      <div className="space-y-6 max-w-2xl mx-auto">
        {aboutParagraphs.map((text, idx) => (
          <motion.p
            key={idx}
            className="text-lg md:text-xl text-center text-stone-700 font-light drop-shadow"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.55 }}
            custom={idx + 1}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUsSection;
