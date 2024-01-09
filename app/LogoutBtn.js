'use client';

import Image from 'next/image';
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function LogoutBtn({ author }) {

    const router = useRouter();

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
                            top: '0px',
                            bottom: '0px',
                            left: '33px',
                            display: 'flex',
                            margin: 'auto 0px',
                            borderRadius: '50%'
                        }}></Image>
                    <span>{author.name} 로 시작하기</span>
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