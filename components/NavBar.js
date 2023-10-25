'use client'
import Link from "next/link";
import Image from 'next/image';
import '@/styles/navBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useState } from "react";
// import { config } from '@fortawesome/fontawesome-svg-core'
// config.autoAddCss = false
import { signOut } from 'next-auth/react'

export default function NavBar({ sessionUser }) {

    const [isRotated, setIsRotated] = useState(false);

    const handleClick = () => {
        setIsRotated(!isRotated);
    };

    return (
        <>
            <div className="navBar">
                <div className="navLogo">
                </div>
                <div className="navUser">
                    <div className="navUser_Img">
                        <Image src={sessionUser.image}
                            alt="User Avatar"
                            width={42}
                            height={42}
                            style={{ borderRadius: '50%', marginRight: '12px' }}></Image>
                    </div>
                    <div className="navUser_Name">
                        <p className="userName">{sessionUser.name}</p>
                        <p className="userEmail">{sessionUser.email}</p>
                    </div>
                </div>
            </div>

            <header id="Header">
                <div className="navLogo">
                    <Link href='/user'>
                        <h1 className='navLogo_txt'><span className='navLogo_color'>PRO </span>인터뷰</h1>
                    </Link>
                </div>
                <nav>
                    <ul className="menu">
                        <li>
                            <label htmlFor={'btn-1'} onClick={handleClick}>
                                <span className="menuicon"><FontAwesomeIcon icon={faBars} className="menuicon-svg" /></span>
                                <p className="all">Dashboard</p>
                                <FontAwesomeIcon icon={faChevronDown} size="2xs" className={isRotated ? "downIcon rotate" : "downIcon"} />
                            </label>
                            <input type="checkbox" id="btn-1"></input>
                            <ul className="dropdown">
                                <li>
                                    <a href="#">전체보기</a>
                                </li>
                                <li>
                                    <a href="#">자바스크립트</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="darkMode">
                    <button className="light">
                        <div className="lightbox">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                                <path fill="#eee" d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.2226562 2.8085938 L 2.8085938 4.2226562 L 4.9296875 6.34375 L 6.34375 4.9296875 L 4.2226562 2.8085938 z M 19.777344 2.8085938 L 17.65625 4.9296875 L 19.070312 6.34375 L 21.191406 4.2226562 L 19.777344 2.8085938 z M 12 5 C 8.1458514 5 5 8.1458514 5 12 C 5 15.854149 8.1458514 19 12 19 C 15.854149 19 19 15.854149 19 12 C 19 8.1458514 15.854149 5 12 5 z M 12 7 C 14.773268 7 17 9.2267316 17 12 C 17 14.773268 14.773268 17 12 17 C 9.2267316 17 7 14.773268 7 12 C 7 9.2267316 9.2267316 7 12 7 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.9296875 17.65625 L 2.8085938 19.777344 L 4.2226562 21.191406 L 6.34375 19.070312 L 4.9296875 17.65625 z M 19.070312 17.65625 L 17.65625 19.070312 L 19.777344 21.191406 L 21.191406 19.777344 L 19.070312 17.65625 z M 11 21 L 11 24 L 13 24 L 13 21 L 11 21 z"></path>
                            </svg>
                            <p>Light</p>
                        </div>
                    </button>
                    <button className="dark">
                        <div className="darkbox">
                            <img width="20" height="20" src="https://img.icons8.com/ios/50/bright-moon--v1.png" alt="bright-moon--v1" />
                            <p>Dark</p>
                        </div>
                    </button>
                </div>
                <div className="LogoutSection">
                    <button className="logout-btn" onClick={() => { signOut() }}>
                        <img width="20" height="20" src="https://img.icons8.com/ios/50/000000/logout-rounded-left.png" alt="logout-rounded-left" />
                        <span>Log out</span>
                    </button>
                </div>
            </header>
        </>
    )
}