import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Test List | Home</title>
        <meta name="keywords" content="test next js" />
      </Head>
      <div className={styles.title}>
        <h1>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          alias, vitae optio iure quisquam distinctio amet veritatis? Ipsa modi
          consequuntur quam sint facilis impedit error excepturi maiores!
          Eligendi, quia eius!
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninjas Listing
        </Link>
      </div>
    </>
  );
}
