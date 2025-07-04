import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';


const Foods = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
  };

  return (
    <div className="text-white font-sans px-6 md:px-16 py-12">
      <section className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Left image */}
        <motion.div
          className="cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{ scale: 0.98 }}
          onClick={() => handleImageClick('/img/1.png', 'Pot')}
        >
          <img src="/img/1.png" alt="Pot" className="w-full h-auto object-contain" />
        </motion.div>

        {/* Right images */}
        <div className="flex flex-col gap-4 justify-between">
          {[
            { src: '/img/3.png', alt: 'Chef', delay: 0.2 },
            { src: '/img/2.png', alt: 'Egg yolks', delay: 0.4 },
          ].map(({ src, alt, delay }) => (
            <motion.img
              key={alt}
              src={src}
              alt={alt}
              className="w-full h-auto object-contain cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 0.98 }}
              onClick={() => handleImageClick(src, alt)}
            />
          ))}
        </div>

        {/* Text section */}
        <motion.div
          className="flex flex-col justify-start px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h1
            className="text-xl lg:text-2xl font-light mb-4 uppercase tracking-wide cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 150, damping: 14 }}
          >
            WHAT DOES COOKING MEAN?
          </motion.h1>

          <hr className="border-t border-gray-600 mb-4 w-full" />

          <motion.p
            className="text-base text-[var(--text-gray)] leading-relaxed mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing?
            <br /><br />
            This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out.
          </motion.p>

          <motion.p
            className="text-sm text-[var(--red-color)] font-bold uppercase mb-1"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 120, damping: 10 }}
          >
            The perfect egg
          </motion.p>

          <motion.p
            className="text-sm text-white font-semibold"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 120, damping: 10 }}
          >
            Keep water between 67 and 68°C <br /> for a flavourful, tender yolk
          </motion.p>
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