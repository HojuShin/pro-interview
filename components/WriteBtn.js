'use client'

import Link from 'next/link';

export default function WriteBtn() {
    return (
        <div className="newQ">
            <Link href={'/write'}>
                <button id="newQ-btn"><p><strong>+</strong> New Question</p></button>
            </Link>
        </div>
    )
}