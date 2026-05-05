import IntroductionPhoto from "../../assets/images/introduction-banner.jpg";
import {Link} from "react-router-dom";

export default function Introduction() {
  return (
    <section className="w-full h-auto mb-10 md:mb-20">
      <div className="w-full flex flex-col md:flex-row items-stretch  gap-7 md:gap-12 px-8 md:px-16 py-10 md:py-16">
        <div className=" w-full md:w-1/2 flex flex-col gap-5 md:gap-7">
          <h2 className="font-bold text-2xl md:text-4xl tracking-wider leading-snug">
            About Love Athalia <br /> Essentials
          </h2>
          <p className="leading-relaxed text-base md:text-lg text-left md:text-justify">
            Love Athalia’s Essentials is an online clothing shop that offers
            stylish, affordable, and quality apparel for everyday wear. The shop
            is committed to providing carefully selected pieces that are trendy,
            comfortable, and in excellent condition.
          </p>

          <p className="leading-relaxed text-base md:text-lg text-left md:text-justify">
            Inspired by the name Athalia, the business reflects growth,
            dedication, and the vision of building a better future through
            passion and hard work.
          </p>

          <Link to="/About" className="border-2 rounded-2xl text-xs md:text-lg px-2 py-2 w-fit hover:bg-[#8b333d] hover:text-white transition">
            Learn More
          </Link>

           </div>

          <div className="w-full md:w-1/2">
            <img className="w-full h-full object-cover rounded-3xl "src={IntroductionPhoto} alt="This is a Photo!" />
          </div>
      </div>
    </section>
  );
}
