import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import styles from "../styles//NavBar.module.css";

const NavBar = () => {
  let [mobileMenu, setMobileMenu] = useState(null);
  let menuRef = useRef(null);

  useEffect(() => {
    if (mobileMenu !== null) {
      if (mobileMenu) {
        console.log("is menu openxxx -> ", mobileMenu);
        menuRef.current.classList.add(`${styles.openMobileNavMenu}`);
        menuRef.current.classList.remove(`${styles.closeMobileNavMenu}`);
        console.log(menuRef.current.className);
      } else {
        console.log("is menu openyyy -> ", mobileMenu);
        menuRef.current.classList.add(`${styles.closeMobileNavMenu}`);
        menuRef.current.classList.remove(`${styles.openMobileNavMenu}`);

        console.log(menuRef.current.className);
      }
    }
  }, [mobileMenu]);

  return (
    <div className={styles.container}>
      <div
        onClick={() => setMobileMenu(!mobileMenu)}
        className={`${styles.imageWrapper}`}
      >
        {/* conditional rendering */}
        {mobileMenu ? (
          <Image
            className={`${styles.image}`}
            src="/icon-close.svg"
            height={"18rem"}
            width={"15rem"}
          />
        ) : (
          <Image
            className={`${styles.image}`}
            src="/icon-menu.svg"
            height={"18rem"}
            width={"15rem"}
          />
        )}
      </div>
      <div className={`${styles.imageWrapper}`}>
        <Image
          className={`${styles.image}`}
          src="/logo.svg"
          height={"50rem"}
          width={"100rem"}
        />
      </div>
      <ul ref={menuRef} className={`${styles.navMenu}`}>
        <li className={`${styles.navItem}`}>Collections</li>
        <li className={`${styles.navItem}`}>Men</li>
        <li className={`${styles.navItem}`}>Women</li>
        <li className={`${styles.navItem}`}>About</li>
        <li className={`${styles.navItem}`}>Contact</li>
      </ul>
      <div className={`${styles.imageWrapper}`}>
        <Image
          className={`${styles.image}`}
          src="/icon-cart.svg"
          height={"25rem"}
          width={"25rem"}
        />
      </div>
      <div className={`${styles.imageWrapper}`}>
        <Image
          className={`${styles.image}`}
          src="/image-avatar.png"
          height={"25rem"}
          width={"25rem"}
        />
      </div>
    </div>
  );
};

export default NavBar;
