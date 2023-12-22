'use client'

import { useRouter } from "next/navigation"

export default function NotFound() {

    let router = useRouter();

    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '130px',
            }}
        >
            <p style={{ fontSize: '50px', fontWeight: '500' }}>페이지를 <span style={{ color: 'rgb(24, 119, 242)' }}>찾을 수 없습니다.</span> </p>
            <span style={{ fontSize: '50px', fontWeight: '500' }}>(404 Not Found)</span>
            <p style={{ color: '#1b1b1b', margin: '40px 0 50px 0', textAlign: 'center', fontSize: '20px', fontWeight: '500' }}> 페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.<br />입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.</p>
            <button
                style={{
                    width: '250px',
                    height: '70px',
                    fontSize: '22px',
                    border: 'none',
                    cursor: 'pointer'
                }}
                onClick={() => { router.push('/') }}
            >메인으로 돌아가기</button>
        </div>
    )
}