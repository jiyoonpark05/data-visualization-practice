import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>title</div>
      <div className={styles.container}>
        <div className={styles.wrraper}>
          <div className={styles.box}>
            <div className={styles.element}>1</div>
            <div className={styles.element}>2</div>
            <div className={styles.element}>3</div>
          </div>
        </div>
      </div>
    </main>
  );
}
