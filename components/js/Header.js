"use client";

import Link from "next/link";
import styles from "@/components/css/Header.module.css"
import Image from "next/image";
import {useEffect, useState} from "react";

function Header() {
    const [activeElement, setActiveElement] = useState(null);

    const handleActiveEnter = () => {
        setActiveElement("dropDownTrue");
    }

    const handleActiveLeave = () => {
        setActiveElement(null)
    }

    return (
    <header>
        <hgroup className={styles.headerGroup} onMouseLeave={handleActiveLeave}>
            <div className={styles.headerContainer}>
                <nav className={styles.headerNav}>
                    <div className={styles.navRootBox}>
                        <Link href="/">
                            <img
                                src="https://www.dropbox.com/scl/fi/wr9cabtnk4xg3dca2oif8/eplogoBlack.jpg?rlkey=71nyp6jdd9m88e52etsvifz8u&raw=1"
                                className={styles.headerImage}/>
                        </Link>
                        <div className={styles.headerIntroduce} onMouseEnter={handleActiveEnter} >
                            <div className={styles.headerIntroduceElementFirst}>
                                <Link href="/introduce" className="pretendard-semibold">
                                    교회
                                </Link>
                            </div>
                            <div className={styles.headerIntroduceElement}>
                                <Link href="/worship" className="pretendard-semibold">
                                    예배
                                </Link>
                            </div>
                            <div className={styles.headerIntroduceElement}>
                                <Link href="/heresy" className="pretendard-semibold">
                                    이단
                                </Link>
                            </div>
                            <div className={styles.headerIntroduceElement}>
                                <Link href="/feed" className="pretendard-semibold">
                                    양육
                                </Link>
                            </div>
                            <div className={styles.headerIntroduceElement}>
                                <Link href="/consulting" className="pretendard-semibold">
                                    상담
                                </Link>
                            </div>
                            <div className={styles.headerIntroduceElement}>
                                <Link href="/consulting" className="pretendard-semibold">
                                    다음세대
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
                {activeElement === "dropDownTrue" && (
                    <div className={styles.headerMenu}>
                        <div className={styles.headerMenuListBoxFirst}>
                            <li>교회소개</li>
                            <li>목사님소개</li>
                            <li>정통신학</li>
                            <li>신앙의삶</li>
                            <li>신앙고백</li>
                            <li>섬기는이</li>
                            <li>비전</li>
                            <li>연간행사</li>
                            <li>오시는길</li>
                        </div>
                        <div className={styles.headerMenuListBoxSecond}>
                            <li>예배안내</li>
                            <li>주일오전예배</li>
                            <li>주일오후예배</li>
                            <li>수요저녁예배</li>
                            <li>금요기도회</li>
                            <li>청년예배</li>
                            <li>학생부예배</li>
                        </div>
                        <div className={styles.headerMenuListBoxfifth}>
                            <li>이단상담</li>
                            <li>개인상담</li>
                        </div>
                        <div className={styles.headerMenuListLast}>
                            <li>우리는청년</li>
                            <li>라온학생부</li>
                            <li>주일학교</li>
                        </div>
                    </div>
                )}
            </div>
        </hgroup>
    </header>
    );
}

export default Header;