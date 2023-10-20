'use client';

import Image from 'next/image';
import { signOut } from 'next-auth/react'

export default function LogoutBtn({ session }) {
    return (
        <>
            <button className='loginBtn' onClick={() => { window.location.href = '/user' }}>
                <div className='loginBtn-box'>
                    <Image src={session.image}
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
                    <span>{session.name} 로 시작하기</span>
                </div></button>
            <div className='logoutBtn-box'>
                <div className='logout-Line'></div>
                <button onClick={() => { signOut() }}><span>로그아웃</span></button>
                <div className='logout-Line'></div>
            </div>

        </>
    )
}