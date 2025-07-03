import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal'; // assumes you already have this component

interface TasteColoursProps {
  title: string;
  items: {
    color: string; // e.g., 'red', 'green', 'white' (used for image src)
    title: string;
    description: string;
    hasBorder?: boolean;
  }[];
}

const hoverScale = {
  whileHover: { scale: 0.95 },
  transition: { type: 'spring', stiffness: 300 },
};

const TasteColours = ({ title, items }: TasteColoursProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string }>({
    src: '',
    alt: '',
  });

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
    console.log(`Image clicked: ${alt}`);
  };

  return (
    <section className="py-12 px-6 md:px-12 text-center">
      <h2 className="inline-block text-2xl md:text-3xl font-bold mb-10 text-[var(--text-light)] border-b border-white pb-4">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-xs mx-auto"
          >
            <motion.img
              src={`/img/colors/${item.color}.png`}
              alt={item.title}
              className={`w-full h-full object-contain mb-4 cursor-pointer`}
              onClick={() =>
                handleImageClick(`/img/colors/${item.color}.png`, item.title)
              }
              whileHover={hoverScale.whileHover}
              transition={hoverScale.transition}
            />
            <h3 className="text-lg font-bold text-gray-300 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl uppercase tracking-wide mb-2">
              {item.title}
            </h3>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        src={selectedImage.src}
        alt={selectedImage.alt}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};

export default TasteColours;