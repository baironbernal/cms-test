const Foods = () => {
  return (
    <div className="bg-[#0e1514] text-white font-sans px-6 md:px-16 py-12">
      <section className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left Image (Large pot) */}
        <div className="col-span-1">
          <img
            src="/img/1.png"
            alt="Pot"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Center: Two stacked images */}
        <div className="flex flex-col gap-4 justify-between">
          <img
            src="/img/3.png"
            alt="Chef"
            className="w-full h-auto  object-contain"
          />
          <img
            src="/img/2.png"
            alt="Egg yolks"
            className="w-full h-auto  object-contain"
          />
        </div>

        {/* Right: Text content */}
        <div className="flex flex-col justify-start px-4">
          <h1 className="text-xl md:text-2xl font-light mb-4 uppercase tracking-wide">
            WHAT DOES COOKING MEAN?
          </h1>
          <hr className="border-t border-gray-600 mb-4 w-full" />

          <p className="text-gray-300 leading-relaxed mb-6">
            Is it simply applying heat to a food product? A way of making
            certain food safe to eat? Or a way to create flavour and make food
            more appealing? This is just part of what Hervé This, the father of
            molecular gastronomy, has dedicated his life to finding out.
            <br /><br />
            We spoke to him to find out what his experiments have told him. And
            in the process even discovered the secret to cooking the perfect egg...
          </p>

          <p className="text-[#ff4e32] text-sm font-bold uppercase mb-1">
            The perfect egg
          </p>
          <p className="text-white text-sm font-semibold">
            Keep water between 67 and 68°C <br /> for a flavourful, tender yolk
          </p>
        </div>
      </section>
    </div>
  );
};

export default Foods;
