interface TasteColoursProps {
  title: string;
  items: {
    color: string;
    title: string;
    description: string;
    hasBorder?: boolean;
  }[];
}

const TasteColours = ({ title, items }: TasteColoursProps) => {
  return (
    <section className="py-12 px-6 md:px-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[var(--text-light)]">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-xs mx-auto"
          >
            <div
              className={`w-12 h-16 rounded-md mb-4 ${
                item.hasBorder ? 'border border-gray-400' : ''
              }`}
              style={{ backgroundColor: item.color }}
            ></div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-2">
              {item.title}
            </h3>
            <p className="text-[var(--text-gray)] text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TasteColours;
