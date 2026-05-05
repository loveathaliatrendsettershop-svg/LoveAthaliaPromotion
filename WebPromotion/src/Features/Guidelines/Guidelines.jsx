const guides = [
  {
    id: 1,
    step: "Step 1",
    title: "Browse Products",
    info: [
      "Visit our website and check available items.",
      "Each products includes:",
    ],
    details: ["Code (e.g., MAR-001)", "Price", "Sizes", "Details"],
  },
  {
    id: 2,
    step: "Step 2",
    title: "Click Order Now",
    info: [
      "Click the Order Now button.",
      "You will be redirected to our Facebook Messenger.",
    ],
  },
  {
    id: 3,
    step: "Step 3",
    title: "Send your order (MINE FORMAT)",
    info: [
      "Follow this Format:",
      "MINE + PRODUCT CODE + NUMBER OF PACKS",
      "EXAMPLE: MINE-MAR-001-4 PACKS",
    ],
  },
  {
    id: 4,
    step: "Step 4",
    title: "Order requirements",
    info: [
      "Minimum order varies per product.",
      "1 pack = 1 design",
      "Sizes: Based on product details (e.g., 3-7).",
      "Sizes are pre-assorted per pack which means that you can't choose specific sizes per pack.",
    ],
  },
  {
    id: 5,
    step: "Step 5",
    title: "Wait for Confirmation",
    info: [
      "Admin will confirm your order;",
      "You will receive:",
      "Total amount",
      "Payment details",
    ],
  },
  {
    id: 6,
    step: "Step 6",
    title: "Payment",
    info: [
      "Gcash",
      "Bank Transfer",
      "Cash (PICK-UP ONLY)",
      "Send your screenshot OR",
      "Reference number",
    ],
  },
  {
    id: 7,
    step: "Step 7",
    title: "Order Processing & Delivery",
    info: [
      "Orders will be processed after payment.",
      "ETA will be announced (e.g., March 1st week).",
      "Delivery details will be provided.",
    ],
  },

  {
    id: 8,
    step: "Kindly read this!",
    title: "📢 Important reminders",
    info: [
      "Minimum order depends on the product.",
      "Prices may vary depending on product.",
      "Designs can only be chosen once items are on-hand.",
      "Sizes cannot be selected per pack (pre-packed sets).",
      "No cancellation after confirmation."
    ]
  }
];

const GuideCard = ({ guide }) => (
  <div
    className={`h-full p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-3 ${
      guide.id === 8 ? "bg-[#FDE68A]" : "bg-[#FBDBE2]"
    }`}
  >
    <div className="mb-4">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        {guide.step}
      </p>
      <h2 className="text-lg font-bold text-gray-800 leading-tight">
        {guide.title}
      </h2>
    </div>

    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 leading-relaxed">
      {guide.info.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>

    {guide.details && (
      <ul className="list-disc pl-8 mt-2 space-y-1 text-sm text-gray-600">
        {guide.details.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

export default function Guidelines() {
  return (
    <section
      id="guidelines"
      className="w-full min-h-full pt-4 md:pt-8 bg-white mb-10"
    >
      <div className="w-full max-w-7xl mx-auto py-6 px-5 md:px-10">
        <h1 className="font-inter text-2xl md:text-6xl font-bold tracking-wider text-center mb-5 md:mb-15">
          GUIDELINES
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {guides.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </div>
    </section>
  );
}
