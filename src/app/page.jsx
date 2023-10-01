"use client"
import { Navbar } from "@/components/Navbar/Navbar";
import { Header } from "@/components/Header/Header";
import { ServicesComponent } from "@/components/ServicesComponent/ServicesComponent";
import { Portfolio } from "@/components/Portfolio/Portfolio";
import { Form } from "@/components/Form/Form";

export default function Home() {

  return (
    <>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Navbar />
          <Header />
        </section>
        <ServicesComponent />
        <Portfolio />
      </main>
      <Form />
    </>
  );
}
