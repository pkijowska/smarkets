import Image from "next/image";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <Image src="/smarkets-logo.svg" alt="logo" width={200} height={200} />
    </header>
  );
};
export default Header;
