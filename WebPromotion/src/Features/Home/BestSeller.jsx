import { useEffect, useState } from "react";
import ProductSection from "../Shared/ProductSection";

export default function SectionNewArrival() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products/best-sellers`);
        const data = await res.json();

        // ✅ NORMALIZE DATA (fix [object Object] + backend mismatch)
        const formatted = data.map((p) => ({
          id: p._id,
          name: p.name,

          // handle image array or string
          image: Array.isArray(p.images) ? p.images[0] : p.images || "",

          // FIX PRICE ISSUE
          price: p.retailPrice ?? p.wholesalePrice ?? 0,

          quantity: p.quantityPerPack ?? 0,
          slot: p.slot ?? 0,

          // FIX POPULATED OBJECTS (avoid [object Object])
          sizes: Array.isArray(p.size)
            ? p.size.map((s) => s.name)
            : [],

          sets: Array.isArray(p.set)
            ? p.set.map((s) => s.name)
            : [],

          sku: p.productCode ?? "",
          label: p.category ?? "",
          description: p.productDescription ?? "",

          totalSold: p.totalSold ?? 0,
        }));

        setProducts(formatted);
      } catch (err) {
        console.error("Best seller fetch error:", err);
      }
    };

    fetchBestSellers();
  }, []);

  return (
    <div id="bestseller">
      <ProductSection
        title="Best Seller"
        linkTo="/products#best-seller"
        products={products}
        cardColor="bg-white"
        showCategory={true}
      />
    </div>
  );
}
