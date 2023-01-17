import Image from "next/image";
import brush from "../public/brush.svg";
import heroImage from "../public/hero.png";
import styles from "../styles/HeroImage.module.css";
import { Navbar } from "./Navbar";

export const HeroComponent = () => {
  return (
    <section className={styles.hero}>
      <Navbar />
      <div className={styles.content}>
        <div className="container">
          <div className={styles.wrapper}>
            <h1 className={styles.title}>El Secreto de tu cocina</h1>
            <Image src={brush} alt="Pintura" className={styles.brush} />
          </div>
        </div>
      </div>
      <Image
        src={heroImage}
        alt="Decoracion"
        className={styles.background}
      />
      <div className={styles.linear_gradient} />
    </section>
  );
};
