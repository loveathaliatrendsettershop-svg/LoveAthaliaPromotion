import { useState, useEffect } from "react";
import ProductSection from "../Shared/ProductSection";

const API_BASE = `${import.meta.env.VITE_API_URL}`;

export default function SectionNewArrival() {
  const [products, setProducts] = useState([]);
  const [loading,  setLoading]  = useState(true);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const res  = await fetch(`${API_BASE}/api/products`);
        const data = await res.json();

        // Sort by newest first (createdAt descending)
        const sorted = [...data]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3) // show only the 8 most recent
          .map(p => ({
            id:          p._id,
            name:        p.name,
            image:       p.images?.[0] || null,
            price:       p.retailPrice      ?? 0,
            quantity:    p.quantityPerPack            ?? 0,
            slot:        p.slot             ?? 0,
            sizes:       (p.size ?? []).map(s => s?.name ?? s),
            sets:        (p.set  ?? []).map(s => s?.name ?? s),
            sku:         p.productCode      ?? '',
            label:       p.productCode      ?? '',
            description: p.productDescription ?? '',
          }));

        setProducts(sorted);
      } catch (err) {
        console.error('Failed to fetch new arrivals:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  if (loading) return null; // or a skeleton/spinner if you have one

  return (
    <ProductSection
      title="New Arrival"
      linkTo="/products#new-arrivals"
      products={products}
      cardColor="bg-white"
    />
  );
}
