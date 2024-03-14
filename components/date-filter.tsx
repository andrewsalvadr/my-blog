    // components/date-filter.tsx
    "use client";

    import { useSearchParams } from "next/navigation";

    export function DateFilter() {
    const searchParams = useSearchParams();

    const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const sortOrder = e.target.value;
        const params = new URLSearchParams(searchParams);

        if (sortOrder === "newest") {
        params.set("sort", "desc");
        } else if (sortOrder === "oldest") {
        params.set("sort", "asc");
        } else {
        params.delete("sort");
        }

        const queryString = params.toString();
        const targetUrl = queryString ? `/blog?${queryString}` : "/blog";
        window.location.href = targetUrl;
    };

    const currentSortOrder = searchParams.get("sort") || "default";

    return (
        <select value={currentSortOrder} onChange={handleDateChange} className="mt-4">
        <option value="default">Sort by Date</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        </select>
    );
    }