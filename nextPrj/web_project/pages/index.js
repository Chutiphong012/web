import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar/>
      <h1>HomePage</h1>
      
      <Footer/>
    </>
  );
}
