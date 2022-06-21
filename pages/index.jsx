import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import ProductDisplay from "../components/ProductDisplay";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | E-commerce product page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
    </div>
  );
}
