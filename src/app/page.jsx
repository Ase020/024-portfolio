import Image from "next/image";

const Homepage = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* header */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>

      {/* Desc */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-8">
        <h1 className="capitalize text-2xl sm:text-4xl md:text-6xl font-bold">
          Crafting digital experiences, Designing tomorrow.
        </h1>

        <p className="text-sm sm:text-base md:text-xl">
          Step into my digital gallery, where originality and imagination come
          together. With a strong sense of design and expertise in programming,
          my portfolio features a range of projects that demonstrate my
          dedication to achieving the highest standards.
        </p>

        <div className="flex items-center gap-4 w-full">
          <button className="capitalize bg-black text-white rounded-lg p-2 sm:p-3 ring-1 ring-black">
            view my work
          </button>
          <button className="capitalize rounded-lg p-2 sm:p-3 ring-1 ring-black">
            contact me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
