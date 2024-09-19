import styles from "../styles/historyPage.module.css";

export default function History() {
  return (
    <div className={styles.hitoryCardWrapper}>
      <div className={styles.imageWrapper}>
        <div>
          <img src="history1.png" alt="Image 1" />
          <img src="history1.png" alt="Image 2" />
        </div>
      </div>
    </div>
  );
}
