'use client'

import { useRouter } from 'next/navigation'

export default function Random({ randomQ, userName }) {

    let router = useRouter();

    return (
        <div className='ma1-txt' onClick={() => { router.push(`/${userName}/${randomQ._id}`) }}>
            <span className='ma1-category'>Today 랜덤질문</span>
            <p className='ma1-q'>{randomQ.question}</p>
        </div>
    )
}