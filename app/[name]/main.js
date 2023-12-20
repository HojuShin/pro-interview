'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import NoWriting from './NoWriting'
import Image from 'next/image'
import ring from '@/public/ring.png'
import Random from './Random'
import PrgList from './PrgList'

export default function Main({ authorDb, authorDocument }) {

    // 완료된 인터뷰 갯수 상태
    const [completedCount, setCompletedCount] = useState(0);

    // 라우터
    let router = useRouter();

    // [dynamic route]에 입력한 내용 (url파라미터)
    let params = useParams();

    useEffect(() => {
        // progress의 값이 'Completed'인 객체의 수 (완료된 인터뷰)
        const completed = authorDocument.filter(data => data.progress === 'Completed').length;
        setCompletedCount(completed);
    }, [authorDocument]);

    return (
        <div className='mainContainer'>
            <main className='mainSection'>
                {authorDocument.length === 0
                    ? <NoWriting user={authorDb} />
                    : (
                        <div className='mainFlex'>
                            <div className='mainLogo'>
                                <div className='logoSection' onClick={() => { router.refresh() }}>
                                    <h2 className='mainLogo_txt'><span className='mainLogo_color'>PRO </span>인터뷰</h2>
                                </div>
                                <div className='userSection'>
                                    <div className="newQ" onClick={() => { router.push('/write') }}>
                                        <button id="newQ-btn"><p>인터뷰 등록하기</p></button>
                                    </div>
                                    <div className='userImg'>
                                        <Image src={authorDb.image}
                                            alt="User Avatar"
                                            width={40}
                                            height={40}
                                            style={{ borderRadius: '50%' }}></Image>
                                    </div>
                                </div>
                            </div>
                            <div className='mainDesc'>
                                <div className='mainDesc-txt'>
                                    <p>안녕하세요! <span className='mainLogo_color'>{authorDb.name}</span> 님<br />회원님의 인터뷰 활동을 확인하세요 <span className='hand'> &#128075;&#127995;</span></p>
                                </div>
                            </div>
                            <div className='mainActivity'>
                                <div className='ma1'>
                                    <Random authorDocument={authorDocument} userName={authorDb.name} />
                                </div>
                                <div className='ma2'>
                                    <div className='ma2-l'>
                                        <Image src={ring} alt="ring Image" id='ringImg'></Image>
                                    </div>
                                    <div className='ma2-2'>
                                        <div className='ma2-2-desc1'>
                                            <p>나는 얼마나 준비했을까?</p>
                                        </div>
                                        <div className='ma2-2-desc2'>
                                            <div className='count count1'>
                                                <p className='countNum'>{authorDocument.length}<span> 개</span></p>
                                                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)' }}>등록된 인터뷰</span>
                                            </div>
                                            <div className='count'>
                                                <p className='countNum'>{completedCount}<span> 개</span></p>
                                                <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)' }}>완료된 인터뷰</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <PrgList authorDocument={authorDocument} params={params} router={router} />
                        </div>
                    )
                }
            </main>
        </div>
    )
}