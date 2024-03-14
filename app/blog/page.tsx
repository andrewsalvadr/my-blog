import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";
import { CategoryFilter } from "@/components/category-filter";
import { DateFilter } from "@/components/date-filter";

export const metadata: Metadata = {
  title: "My blog",
  description: "This is a description",
};

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
    category?: string;
    date?: string;
    sort?: string; 
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const category = searchParams?.category || "All";
  const selectedDate = searchParams?.date ? new Date(searchParams.date) : null;
  const sortOrder = searchParams?.sort || "desc"; // default to newest first

  const sortedPosts = sortPosts(
    posts.filter((post) =>
      post.published &&
      (category === "All" || post.category === category) &&
      (!selectedDate || new Date(post.date).toISOString().split("T")[0] === selectedDate.toISOString().split("T")[0])
    ),
    sortOrder as "asc" | "desc" 
  );

  
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
              Explore Coding, Solution and AI.
          </p>
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <CategoryFilter/>
          <DateFilter />
          </div>
        </div>
      </div>
      <hr className="mt-8" />
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => {
            const { slug, date, title, description, category } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                  category={category}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
      <QueryPagination totalPages={totalPages} className="justify-end mt-4" />
    </div>
  );
}
