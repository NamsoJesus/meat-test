import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import arrow from "../public/arrow.svg";
import brushTwo from "../public/brush-2.svg";
import styles from "../styles/GalleryMain.module.css";
import { CardProduct } from "./CardProduct";

export const GalleryMain = () => {
 
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const resp = await axios.get( `https://5eed24da4cbc340016330f0d.mockapi.io/api/articles`)
      setProducts(resp.data);
    } catch (err) {
      setProducts([]);
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className={styles.articles}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Nuestros artículos</h2>
          <Image src={brushTwo} alt="Paint" className={styles.brush} />
        </div>
        <div className={styles.content}>
          <aside className={styles.aside}>
            <ul className={styles.list}>
              <li
                className={`${styles.listItem}`}
              >
                <button
                  type="button"
                  className={styles.button}
                >
                  TODOS
                  <Image
                    src={arrow}
                    alt="Flecha"
                    className={`${styles.arrow}`}
                  />
                </button>
              </li>
              <li
                className={`${styles.listItem}`}
              >
                <button
                  type="button"
                  className={styles.button}
                >
                  RECETAS
                  <Image
                    src={arrow}
                    alt="Flecha"
                    className={`${styles.arrow}`}
                  />
                </button>
              </li>
              <li
                className={`${styles.listItem}`}
              >
                <button
                  type="button"
                  className={styles.button}
                >
                  PRODUCTOS
                  <Image
                    src={arrow}
                    alt="Flecha"
                    className={`${styles.arrow}`}
                  />
                </button>
              </li>
              <li
                className={`${styles.listItem}`}
              >
                <button
                  type="button"
                  className={styles.button}
                >
                  CONSEJOS
                  <Image
                    src={arrow}
                    alt="Flecha"
                    className={`${styles.arrow}`}
                  />
                </button>
              </li>
            </ul>
          </aside>
          <div className={styles.articlesWrapper}>
            <ol className={styles.articlesList}>
              {products.map((product) => (
                <CardProduct key={product.id} product={product} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
