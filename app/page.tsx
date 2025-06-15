import Head from "next/head";
import Image from "next/image";
import Banner from "./components/banner";
import How from "./components/how";
import Lean from "./components/lean";
import FAQ from "./components/FAQ";
import Column from "./components/column";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Banner />
        <How />
        <Lean />
        <FAQ />
      </main>
    </>
  );
}