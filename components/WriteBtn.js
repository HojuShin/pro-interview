'use client'

import Link from 'next/link';

export default function WriteBtn() {
    return (
        <Link href={'/write'}>
            <div className="newQ">
                <button id="newQ-btn"><p><strong>+</strong> 새 인터뷰 등록하기</p></button>
            </div>
        </Link>
    )
}