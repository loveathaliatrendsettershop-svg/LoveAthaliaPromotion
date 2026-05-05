import reg1 from "../../assets/images/reg1.JPG";
import reg2 from "../../assets/images/reg2.JPG";
import reg3 from "../../assets/images/reg3.JPG";
import reg4 from "../../assets/images/reg4.jpg";

const permits = [
  { id: 1, img: reg3},
  { id: 2, img: reg1},
  { id: 3, img: reg2},
  { id: 4, img: reg4}
];

export default function BusinessPermits() {
  return (
    <section className="w-full h-auto py-10 md:py-20 px-5 md:px-10 bg-[#F7E394]">
      <h2 className="text-2xl md:text-5xl tracking-wider font-bold text-center mb-4">
        BUSINESS PERMITS
      </h2>

      <p className="text-center md:max-w-5xl md:text-xl text-sm mx-auto mb-10 text-gray-700">
        Your safety and trust are our priority. Our store operates with the
        proper business permits and complies with local regulations. We ensure
        secure transactions and quality products so you can shop with confidence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {permits.map((permit) => (
          <div
            key={permit.id}
            className="w-full h-140 overflow-hidden rounded-xl shadow-md hover:scale-105 transition duration-300"
          >
            <img
              src={permit.img}
              alt={`Permit ${permit.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}