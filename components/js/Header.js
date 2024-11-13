"use client";

import Link from "next/link";
import styles from "@/components/css/Header.module.css"
import Image from "next/image";
import {useEffect, useState} from "react";

function Header() {
    const [activeElement, setActiveElement] = useState(null);

    const handleActiveEnter = (element) => {
        setActiveElement(element);
    }

    return (
    <header>
        <hgroup className={styles.headerGroup}>
            <div className={styles.headerContainer}>
                <nav className={styles.headerNav}>
                    <div className={styles.navRootBox}>
                        <Link href="/">
                            <img
                                src="https://www.dropbox.com/scl/fi/wr9cabtnk4xg3dca2oif8/eplogoBlack.jpg?rlkey=71nyp6jdd9m88e52etsvifz8u&raw=1"
                                className={styles.headerImage}/>
                        </Link>
                        <div className={styles.headerIntroduce}>
                            <div className={styles.headerIntroduceElement}
                                 onMouseEnter={() => handleActiveEnter("intro")}
                            >
                                <Link href="/introduce" className="pretendard-semibold">
                                    교회
                                </Link>
                            </div>
                            <div className={styles.headerIntroduceElement}
                                 onMouseEnter={() => handleActiveEnter(null)}
                            >
                                <Link href="/worship" className="pretendard-semibold">
                                    예배
                                </Link>
                            </div>
                            <div className={styles.headerIntroduceElement}
                                 onMouseEnter={() => handleActiveEnter(null)}
                            >
                                <Link href="/heresy" className="pretendard-semibold">
                                    이단
                                </Link>
                            </div>
                            <div className={styles.headerIntroduceElement}
                                 onMouseEnter={() => handleActiveEnter(null)}
                            >
                                <Link href="/feed" className="pretendard-semibold">
                                    양육
                                </Link>
                            </div>
                            <div className={styles.headerIntroduceElement}
                                 onMouseEnter={() => handleActiveEnter(null)}
                            >
                                <Link href="/consulting" className="pretendard-semibold">
                                    상담
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.navRootBox2}>
                        <div className={styles.headerMyInfo}>
                            <Link href="/signUp" className={styles.myInfoLink}>
                                <p>회원가입</p>
                            </Link>
                            <hr className={styles.verticalLine}></hr>
                            <Link href="/login" className={styles.myInfoLink}>
                                <p>로그인</p>
                            </Link>
                        </div>
                        <div className={styles.headerMyInfoMark}>
                            <div className={styles.headerMyInfoMarkElement}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="icon icon-tabler icons-tabler-outline icon-tabler-bell-ringing">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/>
                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
                                    <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727"/>
                                    <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727"/>
                                </svg>
                            </div>
                            <div className={styles.headerMyInfoMarkElement}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="icon icon-tabler icons-tabler-outline icon-tabler-user-square-rounded">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z"/>
                                    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"/>
                                    <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05"/>
                                </svg>
                            </div>
                            <div className={styles.headerMyInfoMarkElement}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M4 6l16 0"/>
                                    <path d="M4 12l16 0"/>
                                    <path d="M4 18l16 0"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </hgroup>
    </header>
    );
}

export default Header;