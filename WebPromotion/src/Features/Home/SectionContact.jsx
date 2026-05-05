import contact from "../../assets/images/contact-banner.jpeg";
import { Link } from "react-router-dom";

function SectionContact() {
  return (
    <section id="contact" className="w-full h-auto bg-[#F7E394] mb-10 md:mb-20">
      <div className="w-full mx-auto">
        <article className="flex w-full gap-2 md:gap-6 items-stretch rounded-3xl">
          
          {/* LEFT IMAGE */}
          <div className="w-1/2">
            <img
              className="w-full h-full object-cover"
              src={contact}
              alt="Contact banner"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-1/2 py-2 md:px-12 md:py-16">
            
            {/* CONTACT */}
            <div className="flex flex-col gap-4 p-2 md:p-8">
              <h2 className="font-bold text-xs md:text-4xl text-gray-900">
                Contact & Inquiry
              </h2>
              <p className="text-xs md:text-lg">
                Have questions or need assistance? <br />
                
                <Link
                  to="/faq"
                  className="text-blue-600 hover:underline"
                >
                  Here is our FAQS!
                </Link>

              </p>
            </div>

            {/* SOCIAL */}
            <div className="flex flex-col gap-4 p-2 md:p-8">
              <h2 className="font-bold text-xs md:text-4xl text-gray-900">
                Social Media
              </h2>
              <p className="text-xs md:text-lg">
                You can also message us through: <br />
                Facebook:{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=100070071061317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Love Athalia Essentials
                </a>
              </p>
            </div>

            {/* HOURS */}
            <div className="flex flex-col gap-4 p-2 md:p-8">
              <h2 className="font-bold text-xs md:text-4xl text-gray-900">
                Business Hours
              </h2>
              <p className="text-xs md:text-lg">
                Monday - Saturday: 9:00 AM - 6:00 PM <br />
                Sunday: Closed
              </p>
            </div>

          </div>
        </article>
      </div>
    </section>
  );
}

export default SectionContact;