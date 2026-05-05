import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductSection({
  title,
  linkTo,
  products,
  cardColor,
  showCategory,
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const productCard =
    "flex flex-col bg-white hover:scale-105 transition rounded-2xl border border-gray-300 overflow-hidden shadow-xl cursor-pointer";
  const imageCard = "h-35 md:h-70 w-full object-cover transition rounded-t-2xl";

  return (
    <>
      <section className="h-auto w-full bg-[#F7E394] mb-10 md:mb-20">
        <div className="w-full mx-auto px-4 md:px-16 py-4 md:py-14">
          {showCategory && (
            <div className="text-center text-lg font-inter md:text-5xl mb-5 md:mb-10">
              EXPLORE OUR COLLECTION
            </div>
          )}
          <article className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 items-stretch">
            <div
              className={`flex flex-col gap-4 md:gap-8 justify-evenly items-center ${cardColor}`}
            >
              <h2 className="text-xl md:text-3xl text-black font-playfair font-bold">
                {title}
              </h2>
              <Link
                to={linkTo}
                className="inline-block rounded-lg hover:text-white bg-white hover:bg-[#8b333d] border-2 text-black transition-colors duration-300 px-4 py-2"
              >
                See More
              </Link>
            </div>

            {products.map((product) => (
              <div
                key={product.id}
                className={productCard}
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={imageCard}
                />

                <div className="flex justify-between items-center px-2 pt-2">
                  <h3 className="text-xs md:text-lg font-semibold">
                    {product.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 font-bold">
                    Slot: {product.slot}
                  </p>
                </div>

                <p className="text-xs md:text-lg px-2">
                  ₱{product.price.toFixed(2)}
                </p>

                <div className="flex flex-col md:flex-row md:justify-between md:items-center px-2 pb-2 mt-auto">
                  <div>
                    <p className="text-xs md:text-sm text-gray-400 font-bold">
                      Qty In Pack: {product.quantity}
                    </p>
                    <p className="text-xs md:text-sm text-gray-400 font-bold">
                      Sizes In Pack: {product.sizes.join(", ")}
                    </p>
                  </div>
                  <a
                    href={`https://m.me/100070071061317?text=Hi!%20I%20want%20to%20order%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-2 bg-gray-900 hover:bg-[#8b333d] transition text-white py-2 font-semibold text-xs md:text-sm text-center block md:w-auto md:px-3 md:py-1 md:rounded-lg md:self-end"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </article>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto md:overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative md:w-[60%] shrink-0 p-4 max-h-[40vh] md:max-h-none">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-[220px] md:h-full md:min-h-[480px] object-cover rounded-xl"
              />
              {selectedProduct.label && (
                <span className="absolute bottom-6 left-6 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {selectedProduct.label}
                </span>
              )}
            </div>

            <div className="flex flex-col px-6 md:px-10 py-6 md:py-8 md:w-[40%] relative md:overflow-y-auto">
              <button
                className="absolute top-4 right-5 text-gray-400 hover:text-black text-2xl leading-none"
                onClick={() => setSelectedProduct(null)}
              >
                ✕
              </button>

              <h2 className="text-xl md:text-2xl font-semibold mb-1 pr-6">
                {selectedProduct.name}
              </h2>

              {selectedProduct.sku && (
                <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3">
                  SKU: {selectedProduct.sku}
                </p>
              )}

              <p className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                ₱{selectedProduct.price.toFixed(2)}
              </p>

              {selectedProduct.description && (
                <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 leading-relaxed">
                  {showFullDesc || selectedProduct.description.length <= 150
                    ? selectedProduct.description
                    : selectedProduct.description.slice(0, 140)}
                  {selectedProduct.description.length > 150 && (
                    <button
                      onClick={() => setShowFullDesc(!showFullDesc)}
                      className="text-gray-900 font-semibold underline ml-1 hover:text-[#8b333d] transition"
                    >
                      {showFullDesc ? "See less" : "See more"}
                    </button>
                  )}
                </p>
              )}

              <div className="text-xs md:text-sm text-gray-700 space-y-1 md:space-y-2 mb-4 md:mb-6">
                <p>Qty in Pack: {selectedProduct.quantity}</p>
                <p>Available Slot: {selectedProduct.slot}</p>
                {selectedProduct.sets && (
                  <p>Set: {selectedProduct.sets.join(", ")}</p>
                )}
                <p>Sizes in Pack: {selectedProduct.sizes.join(", ")}</p>
              </div>

              <div className="mt-auto">
                <a
                  href={`https://m.me/100070071061317?text=Hi!%20I%20want%20to%20order%20${encodeURIComponent(selectedProduct.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-900 hover:bg-[#8b333d] transition text-white py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base text-center block"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
