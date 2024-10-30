import Link from "next/link";
import styles from "@/components/css/Header.module.css"
import Image from "next/image";


const Header = () => (
    <header>
        <hgroup css={styles.headerGroup}>
            <div className={styles.headerContainer}>
                <nav className={styles.headerNav}>
                    <div>
                        <Link href="/">
                            <img
                                src="https://www.dropbox.com/scl/fi/wr9cabtnk4xg3dca2oif8/eplogoBlack.jpg?rlkey=71nyp6jdd9m88e52etsvifz8u&raw=1"
                                className={styles.headerImage}/>
                        </Link>
                    </div>
                    <div className={styles.headerMyInfo}>
                        <Link href="/signUp" className={styles.myInfoLink}>
                            <p>회원가입</p>
                        </Link>
                        <hr className={styles.verticalLine}></hr>
                    </div>
                </nav>
            </div>
        </hgroup>
    </header>
);

export default Header;