'use client'

import Image from 'next/image'
import job from '@/public/job.png'
import { useRouter } from 'next/navigation'

export default function Main({ authorDb, authorDocument }) {

    let router = useRouter();

    return (
        <>
            <div className='commonBanner'>
                <div className='commonBanner-desc'>
                    <p className='commonBanner-desc-1'>안녕하세요! <span className='mainLogo_color'>{authorDb.name}</span> 님</p>
                    <p className='commonBanner-desc-2'>회원님의 인터뷰 활동을 확인하세요 <span className='hand'> &#128075;&#127995;</span></p>
                </div>
                <div className='commonBanner-img'>
                    <Image src={job} alt="job" id='jobImg'></Image>
                </div>
            </div>
            <div className='currentlysection'>
                <div className='currently-text'><p>🔥 최근 등록한 질문</p></div>
                <div className='currently-list'>
                    {authorDocument.slice(-4).reverse().map((data, i) => (
                        <div className='document' key={i} onClick={() => { router.push(`/home/${data._id}`) }}>
                            <p className="document-q">{data.question}</p>
                            <p className="document-date">등록일 | {data.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}