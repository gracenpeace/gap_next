import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainImgBox}>
        <img src="https://www.dropbox.com/scl/fi/httyqv1z9v2t2wlp1hbl4/mainPic2.jpg?rlkey=ojjzruaodd9t6hhu7w892c35p&raw=1"
             alt="" className={styles.mainImg}
        />
      </div>
    </div>
  );
}
