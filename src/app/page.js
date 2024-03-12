"use client";

import Image from "next/image";
import { Hero, Products } from "../../components/index.js";

export default function Home() {
  return (
    <>
      <section className="mt-5">
        <Hero />
      </section>
      <section className="mt-5">
        <Products />
      </section>
    </>
  );
}
