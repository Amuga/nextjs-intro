import Link from "next/link";

interface PaginationProps {
  currentPage: number;
}

export default function Pagination({ currentPage }: PaginationProps) {
  return (
    <div className="mx-auto my-2 flex gap-4 text-center text-lg text-blue-900">
      <Link
        href={currentPage > 1 ? `/?page=${currentPage - 1}` : "/"}
        scroll={false}
        className="hover:underline"
      >
        {currentPage === 1 ? "" : "Previous"}
      </Link>
      <Link
        href={`/?page=${currentPage + 1}`}
        scroll={false}
        className="hover:underline"
      >
        Next
      </Link>
    </div>
  );
}
