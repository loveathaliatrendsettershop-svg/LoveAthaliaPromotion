export default function About() {
  return (
    <section className="w-full h-auto bg-[#F7F0D4] py-15 md:py-25 px-10 md:px-20">
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-4">
        

        <div className="flex flex-col gap-4 md:gap-10 w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Where are we Located?
          </h2>
          <p className="text-gray-700 text-sm md:text-base text-justify leading-relaxed max-w-lg">
            Our store is based in Caloocan City, Philippines. We proudly provide
            carefully selected kids' clothes in good condition to families
            looking for affordable and quality clothing.
          </p>
        </div>

        <div className="w-full md:w-1/2 h-72 md:h-90 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Love Athalia Essential Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.1!2d120.9842!3d14.6760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQwJzMzLjYiTiAxMjDCsDU5JzAzLjEiRQ!5e0!3m2!1sen!2sph!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}