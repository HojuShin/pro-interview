'use client'

import { signOut } from 'next-auth/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function MainLogout() {
    return (
        <div className="LogoutSection">
            <button className="logout-btn" onClick={() => { signOut() }}>
                <span>로그아웃</span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} style={{ margin: '0px 10px 0px 0px', color: "#ffffff",}} />
            </button>
        </div>
    )
} 