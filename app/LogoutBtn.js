'use client';

import Image from 'next/image';
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

export default function LogoutBtn({ author }) {

    const router = useRouter();
    useEffect(() => {
        // 현재 쿠키 값을 가져오기
        let cookie = ('; ' + document.cookie).split(`; proappmode=`).pop().split(';')[0];

        // 쿠키값이 비어있을 때
        if (cookie === '') {
            document.cookie = 'proappmode=dark; max-age=' + (3600 * 24 * 400);
        }
    }, []);

    return (
        <>
            <button
                className='loginBtn'
                onClick={() => {
                    router.push('/home');
                }}>
                <div className='loginBtn-box'>
                    <Image
                        src={author.image}
                        alt="User"
                        width={30}
                        height={30}
                        style={{
                            position: 'absolute',
                            left: '20px',
                            borderRadius: '50%'
                        }}></Image>
                    <p>{author.name} 로 시작하기</p>
                </div>
            </button>
            <div className='logoutBtn-box'>
                <div className='logout-Line'></div>
                <button onClick={() => { signOut('google') }}><span>로그아웃</span></button>
                <div className='logout-Line'></div>
            </div>
        </>
    )
}