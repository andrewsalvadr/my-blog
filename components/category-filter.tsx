// components/category-filter.tsx
"use client";

import { useSearchParams } from "next/navigation";

export function CategoryFilter() {
  const searchParams = useSearchParams();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    const params = new URLSearchParams(searchParams);

    if (newCategory === "All") {
      params.delete("category");
    } else {
      params.set("category", newCategory);
    }

    const queryString = params.toString();
    const targetUrl = queryString ? `/blog?${queryString}` : "/blog";
    window.location.href = targetUrl;
  };

  const currentCategory = searchParams.get("category") || "All";

  return (
    <select
      value={currentCategory}
      onChange={handleCategoryChange}
      className="mt-4"
    >
      <option value="All">All Categories</option>
      <option value="AI">AI</option>
      <option value="Coding">Coding</option>
    </select>
  );
}