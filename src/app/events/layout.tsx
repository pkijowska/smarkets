"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import style from "./Layout.module.css";
import { usePathname } from "next/navigation";
import { CATEGORIES } from "@/utils/utils";

function CategoryLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const category =
    CATEGORIES.find((c) => pathname.includes(c.slug))?.label || "Football";

  return (
    <>
      <h1 className={style.header}>Upcoming {category} Events</h1>
      <div className={style.wrapper}>
        <Sidebar selectedCategory={category} />
        {children}
      </div>
    </>
  );
}

export default CategoryLayout;
