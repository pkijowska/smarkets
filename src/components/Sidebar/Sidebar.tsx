import { CATEGORIES } from "@/utils/utils";
import Link from "next/link";
import styles from "./Sidebar.module.css";

const Sidebar = ({ selectedCategory }: { selectedCategory: string }) => {
  return (
    <aside className={styles.wrapper}>
      <nav>
        <h2 className={styles.header}>Categories</h2>
        <ul>
          {CATEGORIES.map(({ slug, label, emoji }) => {
            return (
              <li key={slug}>
                <Link
                  href={`/events/${slug}`}
                  className={label === selectedCategory ? styles.active : ""}
                  data-testid={
                    label === selectedCategory ? "active" : "inactive"
                  }
                >
                  <span
                    aria-hidden="true"
                    className={label === selectedCategory ? "" : styles.emoji}
                  >
                    {emoji}
                  </span>{" "}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
