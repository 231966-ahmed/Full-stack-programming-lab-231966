export default function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover"
      />
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span className="rounded-md bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700">
            {product.category}
          </span>
        </div>
        <p className="line-clamp-2 text-sm text-slate-600">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</p>
          <span
            className={`rounded-md px-2 py-1 text-xs font-medium ${
              product.inStock
                ? "bg-emerald-100 text-emerald-700"
                : "bg-rose-100 text-rose-700"
            }`}
          >
            {product.inStock ? "In stock" : "Out of stock"}
          </span>
        </div>
      </div>
    </div>
  );
}
