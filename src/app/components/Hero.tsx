import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Camp Himalayan Heights</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            128k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[280px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 shadow-lg">
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-lg text-gray-200">Location</p>
            </div>
            <p className="text-2xl font-bold text-white">
              Himalayas
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-lg text-gray-200">Distance</p>
              <p className="text-2xl font-bold text-white">125.50 km</p>
            </div>
            <div className="flex flex-col">
              <p className="text-lg text-gray-200">Elevation</p>
              <p className="text-2xl font-bold text-white">1.750 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
