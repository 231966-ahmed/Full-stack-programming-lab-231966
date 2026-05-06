export default function ProductFilters({
  search,
  setSearch,
  category,
  setCategory,
  sortByPrice,
  setSortByPrice,
  categories
}) {
  return (
    <div className="grid gap-4 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-3">
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500"
      >
        <option value="all">All Categories</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        value={sortByPrice}
        onChange={(e) => setSortByPrice(e.target.value)}
        className="rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500"
      >
        <option value="default">Sort by Price</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>
    </div>
  );
}
