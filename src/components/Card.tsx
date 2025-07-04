// Card.tsx
import { motion } from 'framer-motion';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  onClick: () => void;
}

const Card = ({ imageSrc, title, description, onClick }: CardProps) => {
  return (
    <div className="flex flex-col items-center text-center max-w-xs mx-auto">
      <motion.img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-contain mb-4 cursor-pointer"
        whileHover={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 150, damping: 12 }}
        onClick={onClick}
      />
      <h3 className="text-lg font-bold text-gray-300 md:text-base lg:text-lg xl:text-xl 2xl:text-2xl uppercase tracking-wide mb-2">
        {title}
      </h3>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Card;