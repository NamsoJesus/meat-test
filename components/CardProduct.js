import Image from "next/image";
import styles from "../styles/CardProduct.module.css";

export const CardProduct = ({ product }) => {
  const { image, title, content, url } = product;

  return (
    <article className={styles.card}>
      <div className={styles.picture}>
        <Image
          src={image}
          alt={title}
          width={270}
          height={204}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <a href={url} target="_blank" >
            {title}
          </a>
        </h3>
        <p className={styles.description}>{content}</p>
        <a
          href={url}
          target="_blank"
        
          className={styles.link}
        >
          Ver más
        </a>
      </div>
    </article>
  );
};
