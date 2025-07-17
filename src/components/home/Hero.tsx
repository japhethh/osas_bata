const Hero = () => {
  return (
    <div className="max-w-4xl h-[90vh] mx-auto px-4">
      <div className="flex justify-center  items-center">
        <div className="flex flex-col items-center translate-y-18">
          <div>
            <img src="/assets/hero-pepegang.svg" alt="Hero" />
          </div>
          <div className="mt-8">
            <img src="/assets/hero-text.svg" alt="Hero" />
          </div>
          <div>
            <img src="/assets/hero-osas-image.svg" alt="Hero" />
          </div>
          <div>
            <img src="/assets/hero-button.svg" alt="button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
