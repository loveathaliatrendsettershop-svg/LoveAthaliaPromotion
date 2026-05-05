import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const ITEMS_PER_PAGE = 10;
const API = `${import.meta.env.VITE_API_URL}/api`;

const toSlug = (str) => str.toLowerCase().replace(/\s+/g, "-");

export default function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeCategory, setActiveCategory] = useState("All Products");
  const [search, setSearch] = useState("");
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [sortBy, setSortBy] = useState("Recommended");
  const [currentPage, setCurrentPage] = useState(1);

  const { hash } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [prodRes, catRes] = await Promise.all([
          fetch(`${API}/products`),
          fetch(`${API}/productcategory`),
        ]);
        const prodData = await prodRes.json();
        const catData = await catRes.json();
        setProducts(prodData);
        setCategories(catData);
      } catch (err) {
        console.error("Failed to fetch:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!hash || categories.length === 0) return;
    const slug = hash.replace("#", "");
    const matched = categories.find((cat) => cat.slug === slug);
    if (matched) {
      setActiveCategory(matched.name);
      setCurrentPage(1);
    }
  }, [hash, categories]);

  const categoryNames = ["All Products", ...categories.map((c) => c.name)];

  const filtered = products
    .filter((p) =>
      activeCategory === "All Products" ? true : p.category === activeCategory
    )
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "Price (low to high)") return a.retailPrice - b.retailPrice;
    if (sortBy === "Price (high to low)") return b.retailPrice - a.retailPrice;
    if (sortBy === "Name A-Z") return a.name.localeCompare(b.name);
    if (sortBy === "Name Z-A") return b.name.localeCompare(a.name);
    if (sortBy === "Newest")
      return new Date(b.createdAt) - new Date(a.createdAt);
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const paginated = sorted.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const getImage = (product) =>
    product.images && product.images.length > 0 ? product.images[0] : null;

  const getSizeNames = (sizes) => {
    if (!sizes || sizes.length === 0) return "—";
    return sizes.map((s) => (typeof s === "object" ? s.name : s)).join(", ");
  };

  const getSetNames = (sets) => {
    if (!sets || sets.length === 0) return "—";
    return sets.map((s) => (typeof s === "object" ? s.name : s)).join(", ");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400 text-lg">
        Loading products...
      </div>
    );
  }

  return (
    <div className="px-4 md:px-16 py-10 md:py-20 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-inter text-center mb-6 md:mb-15 tracking-wider">
        {activeCategory}
      </h1>

      {/* Filter + Search Row */}
      <div
        id="filters"
        className="flex flex-wrap items-center justify-between gap-4 mb-6"
      >
        <div className="flex flex-wrap gap-3">
          {categoryNames.map((cat) => (
            <button
              key={cat}
              id={toSlug(cat)}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full border-2 text-sm font-semibold transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-[#8b333d] text-white border-[#8b333d]"
                  : "bg-white text-[#8b333d] border-[#8b333d] hover:bg-[#8b333d] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-full pl-9 pr-4 py-2 text-sm md:text-base w-48 md:w-70 bg-[#BF939878] focus:outline-none focus:border-[#8b333d]"
          />
        </div>
      </div>

      {/* Count + Sort Row */}
      <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
        <p>{sorted.length} products</p>
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1);
            }}
            className="appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-semibold text-gray-700 focus:outline-none focus:border-[#8b333d] bg-white cursor-pointer"
          >
            <option>Recommended</option>
            <option>Newest</option>
            <option>Price (low to high)</option>
            <option>Price (high to low)</option>
            <option>Name A-Z</option>
            <option>Name Z-A</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-xs">
            ▼
          </span>
        </div>
      </div>

      {/* Product Grid */}
      {paginated.length === 0 ? (
        <div className="text-center text-gray-400 py-20 text-lg">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {paginated.map((product) => (
            <div
              key={product._id}
              className="flex flex-col bg-white hover:scale-105 transition rounded-2xl border border-gray-300 overflow-hidden shadow-xl cursor-pointer"
              onMouseEnter={() => setHoveredId(product._id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => {
                setSelectedProduct(product);
                setShowFullDesc(false);
              }}
            >
              <div className="relative overflow-hidden">
                {getImage(product) ? (
                  <img
                    src={getImage(product)}
                    alt={product.name}
                    className="h-35 md:h-70 w-full object-cover transition rounded-t-2xl"
                  />
                ) : (
                  <div className="h-35 md:h-70 w-full bg-gray-100 rounded-t-2xl flex items-center justify-center text-gray-300 text-sm">
                    No Image
                  </div>
                )}
                {hoveredId === product._id && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs text-center py-2 font-semibold">
                    Quick View
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center px-2 pt-2">
                <h3 className="text-xs md:text-lg font-semibold">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 font-bold">
                  Slot: {product.slot ?? "—"}
                </p>
              </div>

              <p className="text-xs md:text-lg px-2">
                ₱{product.retailPrice?.toFixed(2)}
              </p>

              <div className="flex flex-col md:flex-row md:justify-between md:items-center px-2 pb-2 mt-auto">
                <div>
                  <p className="text-xs md:text-sm text-gray-400 font-bold">
                    Qty In Pack: {product.quantityPerPack}
                  </p>
                  <p className="text-xs md:text-sm text-gray-400 font-bold">
                    Sizes: {getSizeNames(product.size)}
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
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mb-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ‹
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg border text-sm font-semibold transition-colors duration-200 ${
                currentPage === page
                  ? "bg-[#8b333d] text-white border-[#8b333d]"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-lg border border-gray-300 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ›
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
          onClick={() => {
            setSelectedProduct(null);
            setShowFullDesc(false);
          }}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto md:overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left — Image */}
            <div className="relative md:w-[60%] shrink-0 p-4 max-h-[40vh] md:max-h-none">
              {getImage(selectedProduct) ? (
                <img
                  src={getImage(selectedProduct)}
                  alt={selectedProduct.name}
                  className="w-full h-[220px] md:h-full md:min-h-[480px] object-cover rounded-xl"
                />
              ) : (
                <div className="w-full h-[220px] md:min-h-[480px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-300">
                  No Image
                </div>
              )}
              {selectedProduct.productCode && (
                <span className="absolute bottom-6 left-6 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {selectedProduct.productCode}
                </span>
              )}
            </div>

            {/* Right — Details */}
            <div className="flex flex-col px-6 md:px-10 py-6 md:py-8 md:w-[40%] relative md:overflow-y-auto">
              <button
                className="absolute top-4 right-5 text-gray-400 hover:text-black text-2xl leading-none"
                onClick={() => {
                  setSelectedProduct(null);
                  setShowFullDesc(false);
                }}
              >
                ✕
              </button>

              <h2 className="text-xl md:text-2xl font-semibold mb-1 pr-6">
                {selectedProduct.name}
              </h2>

              <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3">
                SKU: {selectedProduct.productCode}
              </p>

              <p className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
                ₱{selectedProduct.retailPrice?.toFixed(2)}
              </p>

              {selectedProduct.productDescription && (
                <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 leading-relaxed">
                  {showFullDesc ||
                  selectedProduct.productDescription.length <= 150
                    ? selectedProduct.productDescription
                    : selectedProduct.productDescription.slice(0, 150)}
                  {selectedProduct.productDescription.length > 150 && (
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
                <p>Qty in Pack: {selectedProduct.quantityPerPack}</p>
                <p>Available Slot: {selectedProduct.slot ?? "—"}</p>
                <p>Stock: {selectedProduct.stock}</p>
                <p>Set: {getSetNames(selectedProduct.set)}</p>
                <p>Sizes in Pack: {getSizeNames(selectedProduct.size)}</p>
                <p>Category: {selectedProduct.category}</p>
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
    </div>
  );
}
