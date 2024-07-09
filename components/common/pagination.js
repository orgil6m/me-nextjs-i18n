import { LeftIcon, RightIcon } from "@/assets/icons/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Pagination = ({ pagination }) => {
  const { total, start, end, nextPage, prevPage } = pagination;
  const pathname = usePathname();
  const nextPageUrl = `${pathname}?page=${nextPage}`;
  const prevPageUrl = prevPage ? `${pathname}?page=${prevPage}` : pathname;

  return (
    <div className="w-full flex-center gap-4 p-4 col-span-full">
      <Link href={prevPageUrl} className="me-border p-2 rounded">
        <LeftIcon />
      </Link>
      <span className="font-bold">
        {start}-{end}
      </span>
      of {total}
      <Link href={nextPageUrl} className="me-border p-2 rounded">
        <RightIcon />
      </Link>
    </div>
  );
};

export default Pagination;
