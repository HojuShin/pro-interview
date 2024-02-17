'use client'

import  '@/styles/header.css'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Header({ authorDb, authorDocument }) {

    // 완료된 인터뷰 갯수 상태
    const [completedCount, setCompletedCount] = useState(0);
    // 로그아웃 버튼 토글 상태  
    const [logout, setLogout] = useState(false);
    let router = useRouter();

    useEffect(() => {
        // progress의 값이 'Completed'인 객체의 수 (완료된 인터뷰)
        const completed = authorDocument.filter(data => data.progress === 'Completed').length;
        setCompletedCount(completed);
    }, [authorDocument]);

    const logoutToggle = () => {
        setLogout(!logout)
        const logoutSection = document.querySelector('.hideMenu');
        if (logout === false) {
            logoutSection.style.display = 'block';
        } else if (logout === true) {
            logoutSection.style.display = 'none';
        }
    }

    return (
        <div className='mainFlex'>
            <div className='mainLogo'>
                <div className='logoSection' onClick={() => { router.push('/home') }}>
                    <h2 className='mainLogo_txt'><span className='mainLogo_color'>PRO </span>인터뷰</h2>
                </div>
            </div>
            <div className='userSection'>
                <button className="newQ-btn-main" onClick={() => { router.push('/write') }}>
                    <div className="newQ">인터뷰 등록하기</div>
                </button>
                <div className='userImg' onClick={logoutToggle} >
                    <Image src={authorDb.image}
                        alt="User Avatar"
                        width={40}
                        height={40}
                        style={{ borderRadius: '50%' }}
                        loading="lazy">
                    </Image>
                </div>
                <div className='hideMenu' >
                    <div className='hideMenu-list'>
                        <div className='menu-total'><p>등록된 인터뷰</p><span className='count'>{authorDocument.length}</span></div>
                        <div className='menu-total'><p>완료된 인터뷰</p><span className='count'>{completedCount}</span></div>
                        <hr></hr>
                        {/* 로그아웃 완료 후 '/' 페이지로 리다이렉트 */}
                        <div className='menu-total' onClick={() => signOut({ callbackUrl: '/' })}>
                            <p className='menu-total-logout'>로그아웃</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

