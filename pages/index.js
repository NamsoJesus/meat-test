import Head from "next/head";
import { GalleryMain } from "../components/GalleryMain";
import { ContactMain } from "../components/ContactMain";
import { HeroComponent } from "../components/HeroComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prueba MEAT</title>
        <meta
          name="description"
          content="Consigue aquí las mejores recetas para tu paladar"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Open+Sans&display=swap"
        />
      </Head>

      <main>
        <HeroComponent />
        <GalleryMain />
        <ContactMain />

      </main>
    </div>
  );
}
