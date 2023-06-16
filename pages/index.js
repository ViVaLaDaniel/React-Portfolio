import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import { Inter } from "next/font/google";
import Head from "next/head";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel | Fron-End Developer</title>
        <meta name="description" content="Henerated by create next app" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
