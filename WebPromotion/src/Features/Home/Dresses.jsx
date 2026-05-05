import dressphutu from "../../assets/images/dress-banner.jpg";
import { Link } from "react-router-dom";

export default function Dresses() {
  return (
    <section className="h-auto w-full bg-[#FCC1AE] mb-10 md:mb-20">
      <div className="w-full mx-auto">
        <article className="flex w-full gap-2 md:gap-6 items-stretch rounded-3xl">

          {/* Image */}
          <div className="w-2/3 h-75 md:h-125">
            <img
              className="w-full h-full object-cover"
              src={dressphutu}
              alt="Dress Collection"
            />
          </div>

          {/* Text */}
          <div className="w-1/3 flex flex-col justify-center items-start gap-2 md:gap-4 pr-2 md:pr-0">
            <h2 className="text-sm md:text-6xl font-bold tracking-wider leading-normal font-playfair text-gray-800">
              Dress <br /> Collection
            </h2>
            <p className="text-black text-xs md:text-2xl">
              You can find our Dress Collection in our Dresses Category!
            </p>
            <Link
              to="/products#dresses"
              className="bg-white text-black hover:bg-[#8b333d] hover:text-white rounded-3xl px-2 py-1 md:px-3 md:py-3 text-xs md:text-base hidden md:inline-block"
            >
              See More
            </Link>
          </div>

        </article>
      </div>
    </section>
  );
}