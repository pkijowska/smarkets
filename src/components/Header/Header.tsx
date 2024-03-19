import Image from "next/image";
import style from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={style.header}>
      <Image src="/smarkets-logo.svg" alt="logo" width={200} height={46} />
      <nav className={style.links}>
        <Link className={style.link} href="/">
          Home
        </Link>
        <Link className={style.link} href="/events/football">
          Events
        </Link>
      </nav>
    </header>
  );
};
export default Header;
