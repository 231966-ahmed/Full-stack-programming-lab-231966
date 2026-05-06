"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sortByPrice, setSortByPrice] = useState("default");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error(`Failed to fetch products (${res.status})`);
        }

        const payload = await res.json();
        setProducts(payload.data || []);
      } catch (err) {
        setError(err.message || "Could not load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    [products]
  );

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (search.trim()) {
      const normalized = search.toLowerCase();
      list = list.filter(
        (product) =>
          product.name.toLowerCase().includes(normalized) ||
          product.description.toLowerCase().includes(normalized)
      );
    }

    if (category !== "all") {
      list = list.filter((product) => product.category === category);
    }

    if (sortByPrice === "lowToHigh") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === "highToLow") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, search, category, sortByPrice]);

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl font-bold md:text-4xl">Ecommerce Product Catalog</h1>
          <p className="text-slate-600">
            Interactive Next.js UI with backend API from Node.js, Express.js, and MongoDB.
          </p>
        </header>

        <ProductFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sortByPrice={sortByPrice}
          setSortByPrice={setSortByPrice}
          categories={categories}
        />

        {loading ? (
          <p className="rounded-lg bg-white p-4 text-center">Loading products...</p>
        ) : error ? (
          <p className="rounded-lg bg-rose-50 p-4 text-center text-rose-700">{error}</p>
        ) : filteredProducts.length === 0 ? (
          <p className="rounded-lg bg-white p-4 text-center">No products match your filters.</p>
        ) : (
          <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
