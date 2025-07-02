

const Foods = () => {
  return (
    <div className="text-[var(--text-light)] font-sans">
      {/* Top Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-12 py-10">
        {/* Left Large Image */}
        <picture>
          <img
            src="/images/pot.jpg"
            alt="Pot"
            className="w-full h-full object-cover rounded-md"
          />
        </picture>

        {/* Right Column: Two images stacked + text */}
        <div className="flex flex-col gap-4 justify-between">
          {/* Top small image */}
          <img
            src="/images/chef-hands.jpg"
            alt="Chef plating"
            className="w-full h-auto object-cover rounded-md"
          />
          {/* Middle small image */}
          <img
            src="/images/eggs.jpg"
            alt="Egg yolks"
            className="w-full h-auto object-cover rounded-md"
          />

          {/* Description Text */}
          <div className="mt-4">
            <h1 className="text-xl md:text-2xl font-semibold mb-4 uppercase tracking-wide">
              WHAT DOES COOKING MEAN?
            </h1>
            <p className="text-[var(--text-gray)] mb-4 leading-relaxed border-l-4 border-[var(--highlight)] pl-4">
              Is it simply applying heat to a food product? A way of making certain food safe to eat?
              Or a way to create flavour and make food more appealing? This is just part of what Hervé This,
              the father of molecular gastronomy, has dedicated his life to finding out.
              <br /><br />
              We spoke to him to find out what his experiments have told him. And in the process,
              discovered the secret to cooking the perfect egg.
            </p>
            <p className="text-sm font-semibold text-[var(--highlight)]">
              THE PERFECT YOLK:<br />
              <span className="text-[var(--text-light)]">
                Keep water between 67 and 68°C for a flavourful, tender yolk
              </span>
            </p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default Foods;
