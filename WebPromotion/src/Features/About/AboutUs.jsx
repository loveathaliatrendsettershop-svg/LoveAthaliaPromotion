import banner from "/src/assets/images/aboutus-banner.jpg";

export default function AboutUs() {
  return (
    <section className="w-full md:h-screen">
      <div className="w-full h-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-full overflow-hidden">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-full md:w-1/2 h-full bg-[#BF939878] p-8 md:p-16 overflow-y-auto">
          <h2 className="mb-6 md:mb-10 text-3xl md:text-5xl tracking-wide leading-tight font-bold">
            Love Athalia's <br /> Essentials
          </h2>

          <p className="mb-4 text-gray-700 text-sm md:text-lg text-left md:text-justify">
            Love Athalia Trendsetters Online Shop is a clothing business that
            specializes in selling trendy and high-quality clothing in large
            quantities at affordable prices. Like many successful enterprises,
            it started as a small venture.
          </p>

          <p className="mb-4 text-gray-700 text-sm md:text-lg text-left md:text-justify">
            The shop initially began as a retail clothing store established
            during the pandemic in 2022.
          </p>

          <p className="mb-4 text-gray-700 text-sm md:text-lg text-left md:text-justify">
            As the business gradually expanded and gained more customers, it
            transitioned into a wholesale clothing business in 2024. Today, Love
            Athalia Trendsetters Online Shop continues to grow while remaining
            competitive in the market by providing fashionable and
            budget-friendly clothing.
          </p>

          <p className="mb-4 text-gray-700 text-sm md:text-lg text-left md:text-justify">
            The owner, Shane Anne C. Gapas, is a single mother whose experience
            in managing sales and operations has equipped her with the knowledge
            and skills needed to run her business efficiently. The name of the
            business was inspired by the owner’s daughter, Athalia Gapas. Her
            name symbolizes growth and hope, reflecting the owner’s vision of
            building a prosperous and successful future for the business.
          </p>
        </div>
      </div>
    </section>
  );
}
