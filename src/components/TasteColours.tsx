
const TasteColours = () => {
  return (
  <>
     {/* Taste the Colours Section */}
      <section className="py-12 px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">TASTE THE COLOURS</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* RED */}
          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <div
              className="w-12 h-16 rounded-md mb-4"
              style={{ backgroundColor: 'var(--red-color)' }}
            ></div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-2">RED</h3>
            <p className="text-[var(--text-gray)] text-sm">
              Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.
            </p>
          </div>

          {/* GREEN */}
          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <div
              className="w-12 h-16 rounded-md mb-4"
              style={{ backgroundColor: 'var(--green-color)' }}
            ></div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-2">Green</h3>
            <p className="text-[var(--text-gray)] text-sm">
              Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours.
            </p>
          </div>

          {/* WHITE */}
          <div className="flex flex-col items-center text-center max-w-xs mx-auto">
            <div
              className="w-12 h-16 rounded-md mb-4 border border-gray-400"
              style={{ backgroundColor: 'var(--white-color)' }}
            ></div>
            <h3 className="text-lg font-bold uppercase tracking-wide mb-2">White</h3>
            <p className="text-[var(--text-gray)] text-sm">
              White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.
            </p>
          </div>
        </div>
      </section>
  </>
  );
};

export default TasteColours;
