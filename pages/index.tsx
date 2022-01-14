import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import { Header } from "../components/Header/Header";
import { IpfsFileUpload } from "../components/IpfsFileUpload/IpfsFileUpload";
import Toggle from "../context/ThemeToggle";
import { network } from "../config/wallets";
const Home: NextPage = () => {
  const [feedData, setfeedData] = useState([]);

  useEffect(() => {
    console.log({ network });

    const fetchData = async () => {
      const data = await axios.get(
        "https://random-data-api.com/api/company/random_company?size=30"
      );

      console.log({ data });

      setfeedData(data.data);
    };
    fetchData();
  }, [network]);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="px-20">
        <IpfsFileUpload />

        <div className="flex flex-wrap justify-evenly">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        <h1 className="text-3xl font-bold underline bg-gray-500 dark:bg-red-500">
          Hello world!
        </h1>
      </div>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
