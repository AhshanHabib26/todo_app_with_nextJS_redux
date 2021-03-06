import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const date = new Date();
  const getYear = date.getFullYear();

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo Manager</title>
        <meta name="description" content="My Awesome Todo Apps Create With NextJS And Redux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="mx-auto text-center my-40">
        <h1 className=" text-5xl font-extrabold text-secondary">
          {" "}
          Welcome My <span className=" text-error">TODO</span> App
        </h1>
        <span className=" btn btn-error text-white my-8">
          <Link href="/todoManager"> Explore Now</Link>
        </span>
      </main>

      <footer className=" mx-auto text-center">
        <p className=" text-md">
          Copyright © 2021 - {getYear} | All Right Reserved by{" "}
          <a
            className=" text-info hover:text-green-700 transition-all ease-in-out cursor-pointer"
            href="https://habibdev.netlify.app/"
          >
            Ahshan Habib.
          </a>
        </p>
      </footer>
    </div>
  );
}
