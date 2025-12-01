"use client";

import { useState } from "react";
import { WorkCard } from "../WorkCard/WorkCard";
import { Pagination } from "../Pagination/Pagination";

interface Work {
  id: string;
  title: string;
  image: string;
  tags: string[];
  slug: string;
}

interface WorksGridProps {
  works: Work[];
  itemsPerPage?: number;
}

export function WorksGrid({ works, itemsPerPage = 6 }: WorksGridProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(works.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentWorks = works.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentWorks.map((work) => (
          <WorkCard
            key={work.id}
            title={work.title}
            image={work.image}
            tags={work.tags}
            slug={work.slug}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
}
