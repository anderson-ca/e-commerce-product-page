import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles//NavBar.module.css";

const NavBar = () => {
  let [mobileMenu, setMobileMenu] = useState(null);


  const setMobileNavState = () => {
      
  }

  return (
    <div className={styles.container}>
      <div
        onClick={() => console.log("boom")}
        className={`${styles.imageWrapper}`}
      >
        <Image
          className={`${styles.image}`}
          src="/icon-menu.svg"
          height={"18rem"}
          width={"15rem"}
        />
      </div>
      <div className={`${styles.imageWrapper}`}>
        <Image
          className={`${styles.image}`}
          src="/logo.svg"
          height={"50rem"}
          width={"100rem"}
        />
      </div>
      <ul className={`${styles.navMenu}`}>
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
