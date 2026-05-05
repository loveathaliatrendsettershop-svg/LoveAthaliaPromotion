import { useState, useRef, useEffect } from "react";

const faqs = [
  { category: "Product & Ordering", question: "What products do you offer?", answer: "We offer kids' clothing sourced from Vietnam." },
  { category: "Product & Ordering", question: "How can I place an order?", answer: "Ordering is simple! I post preorder items in the group. Just comment “mine” along with the number of packs you want. Once your lineup is confirmed, cancellations are no longer allowed." },
  { category: "Product & Ordering", question: "How will I know if an item is still available?", answer: "Available onhand stocks are posted. Once the lineup comment section is closed, it means the lineup is already full and the items are sold out." },
  { category: "Payment & Shipping", question: "Which payment method do you accept?", answer: "We accept payment first through GCash or UnionBank." },
  { category: "Payment & Shipping", question: "Is downpayment required?", answer: "No downpayment is required. As a working mom, I don’t have time to collect downpayments. However, once the items arrive (either cleared from customs or already onhand), full payment must be settled before shipping." },
  { category: "Payment & Shipping", question: "Do you offer discounts?", answer: "Yes! We occasionally offer special discounts and sale items." },
  { category: "Shipping & Logistic", question: "What shippins options are available?", answer: "For customers near Caloocan, delivery can be arranged through Lalamove. For other areas, we ship via J&T or SPX through Shopee checkout." },
  { category: "Business hours & Policies", question: "What are your business hours?", answer: "Business hours are 7 PM onwards on weekdays. On weekends, hours are from 10 AM to 7 PM, depending on availability. I’m a working mom, and this business is my side hustle, so replies during weekdays may be late due to work." },
  { category: "Business hours & Policies", question: "Can I modify or cancel my order?", answer: "Confirmed orders cannot be canceled. If you cancel even one item, your entire lineup including future lineups will also be canceled." },
];

const categories = [
  "Product & Ordering",
  "Payment & Shipping",
  "Shipping & Logistic",
  "Business hours & Policies",
];

export default function Faq() {
  const [currentTab, setCurrentTab] = useState("Product & Ordering");
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef();

  // close dropdown kapag nag click sa labas
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered =
    currentTab === "All"
      ? faqs
      : faqs.filter((tab) => tab.category === currentTab);

  return (
    <section id="faq" className="w-full min-h-screen pt-16 bg-[#F2E9EA] flex flex-col">
  <div className="flex flex-col min-h-full">
      <div className="w-full mx-auto py-2 px-5 md:px-10 grow">

        {/* TITLE */}
        <h1 className="text-2xl md:text-6xl font-inter font-semibold text-center mb-6 md:mb-10 text-black">
          Frequently Asked Questions
        </h1>

        {/* 🔥 MOBILE CUSTOM DROPDOWN */}
        <div
          ref={dropdownRef}
          className="flex md:hidden justify-center mb-6 relative"
        >
          <div className="w-full">

            {/* BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-2 rounded-full bg-white text-black font-medium border border-gray-300 flex justify-between items-center"
            >
              {currentTab}
              <span>{isOpen ? "▲" : "▼"}</span>
            </button>

            {/* MENU */}
            {isOpen && (
              <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden z-50">
                {categories.map((category) => (
                  <div
                    key={category}
                    onClick={() => {
                      setCurrentTab(category);
                      setOpenIndex(null);
                      setIsOpen(false);
                    }}
                    className={`px-4 py-2 cursor-pointer text-black hover:bg-gray-100 ${
                      currentTab === category
                        ? "bg-gray-200 font-semibold"
                        : ""
                    }`}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden md:flex gap-3 justify-center mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setCurrentTab(category);
                setOpenIndex(null);
              }}
              className={`px-6 py-2 rounded-full cursor-pointer font-medium transition-all duration-200
              ${
                currentTab === category
                  ? "bg-black text-white font-bold"
                  : "bg-gray-100 text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ LIST */}
        <div className="flex flex-col gap-4 max-w-3xl mx-auto">
          {filtered.map((faq, index) => (
            <div
              key={index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
             className="bg-white rounded-xl p-4 md:p-6 shadow-sm cursor-pointer hover:shadow-md transition-all duration-200"
            >
              {/* QUESTION */}
              <div className="w-full font-semibold text-sm md:text-base flex justify-between items-center gap-4 text-gray-800">
                <span> {faq.question}</span>
                <span className="shrink-0">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-6" : "max-h-0"
                }`}
              >
                <p className="text-sm md:text-base text-gray-900">
                   {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
    </section>
  );
}