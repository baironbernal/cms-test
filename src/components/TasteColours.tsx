import { useState } from 'react';
import Modal from './Modal'; // assumes you already have this component
import Card from './Card';

interface TasteColoursProps {
  title: string;
  items: {
    color: string; // e.g., 'red', 'green', 'white' (used for image src)
    title: string;
    description: string;
  }[];
}



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
      {/* Title */}
      <h2 className="inline-block text-2xl md:text-3xl font-bold mb-10 text-[var(--text-light)] border-b border-white pb-4">
        {title}
      </h2>

      {/* Main Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-xs mx-auto"
          >
          <Card
            key={index}
            imageSrc={`/img/colors/${item.color}.png`}
            title={item.title}
            description={item.description}
            onClick={() =>
              handleImageClick(`/img/colors/${item.color}.png`, item.title)
            }
          />
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