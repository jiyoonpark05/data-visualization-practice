import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>Data Visualization Practce</div>
      <div className={styles.container}>
        <div className={styles.wrraper}>
          <div className={styles.box}>
            <Link href="/line">
              <div
                className={styles.element}
                style={{ backgroundColor: "#2f3029" }}
              >
                1
              </div>
            </Link>
            <div
              className={styles.element}
              style={{ backgroundColor: "#B73A3B" }}
            >
              2
            </div>
            <div
              className={styles.element}
              style={{ backgroundColor: "#FF7671" }}
            >
              3
            </div>
            <div
              className={styles.element}
              style={{ backgroundColor: "#F3EED9" }}
            >
              4
            </div>
            <div
              className={styles.element}
              style={{ backgroundColor: "#83A539" }}
            >
              5
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
