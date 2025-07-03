import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal'; 

const Foods = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string }>({ src: '', alt: '' });

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
    console.log(`Image clicked: ${alt}`);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const hoverScale = {
    whileHover: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 300 },
  };

  return (
    <div className="text-white font-sans px-6 md:px-16 py-12">
      <section className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.div
          className="col-span-1"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          {...hoverScale}
          onClick={() => handleImageClick('/img/1.png', 'Pot')}
        >
          <img src="/img/1.png" alt="Pot" className="w-full h-auto object-contain cursor-pointer" />
        </motion.div>

        <div className="flex flex-col gap-4 justify-between">
          <motion.img
            src="/img/3.png"
            alt="Chef"
            className="w-full h-auto object-contain cursor-pointer"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            {...hoverScale}
            onClick={() => handleImageClick('/img/3.png', 'Chef')}
          />
          <motion.img
            src="/img/2.png"
            alt="Egg yolks"
            className="w-full h-auto object-contain cursor-pointer"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            {...hoverScale}
            onClick={() => handleImageClick('/img/2.png', 'Egg yolks')}
          />
        </div>

        <motion.div
          className="flex flex-col justify-start px-4 cursor-pointer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          onClick={() => console.log('Text content clicked')}
        >
          <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-light mb-4 uppercase tracking-wide">
            WHAT DOES COOKING MEAN?
          </h1>
          <hr className="border-t border-gray-600 mb-4 w-full" />

          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[var(--text-gray)] leading-relaxed mb-6">
            Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing?
            <br /><br />
            This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out.
          </p>

          <p className="text-xs md:text-sm lg:text-base xl:text-lg text-[var(--red-color)] font-bold uppercase mb-1">
            The perfect egg
          </p>
          <p className="text-xs md:text-sm lg:text-base xl:text-lg text-white font-semibold">
            Keep water between 67 and 68°C <br /> for a flavourful, tender yolk
          </p>
        </motion.div>
      </section>

      {/* Modal */}
      <Modal
        src={selectedImage.src}
        alt={selectedImage.alt}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Foods;