import facility from "../../assets/images/facility.jpg";
import facility2 from "../../assets/images/facility2.jpg";
import facility3 from "../../assets/images/facility3.jpg";
import facility4 from "../../assets/images/facility4.jpg";

const facilities = [
  { id: 1, img: facility },
  { id: 2, img: facility2 },
  { id: 3, img: facility3 },
  { id: 4, img: facility4 },
];

export default function Facilities() {
  return (
    <section className="w-full min-h-screen py-10 md:py-25 px-5 md:px-10 bg-white">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-center items-stretch">


        <div className="relative w-full md:w-1/2 flex flex-col justify-center gap-5 md:gap-8 p-10 md:p-16 overflow-hidden min-h-[600px]">
        
          <img
            src={facility}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
          />

     
          <div className="absolute inset-0 bg-white/50"></div>

     
          <div className="relative z-10 text-gray-800">
            <h2 className="text-3xl md:text-5xl font-normal tracking-wide leading-snug">
              Your Needs, Our <br /> Services
            </h2>
            <p className="max-w-sm mt-4 text-sm md:text-base text-gray-700">
              We carefully select every item to ensure that only clothes in good
              condition are offered to our customers. Quality and cleanliness
              are always our priority.
            </p>
          </div>
        </div>


        <div className="w-full md:w-1/2 grid grid-cols-2 gap-3 md:gap-4">
          {facilities.map((f) => (
            <div
              key={f.id}
              className="w-full h-56 md:h-96 overflow-hidden shadow-sm hover:scale-105 transition duration-300"
            >
              <img
                src={f.img}
                alt={`Facility ${f.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}