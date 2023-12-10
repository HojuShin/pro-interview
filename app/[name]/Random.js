import Link from "next/link";

export default function Random({ authorDocument, userName }) {

    // 랜덤 인덱스 뽑기
    const randomIndex = Math.floor(Math.random() * authorDocument.length);
    const randomQ = authorDocument[randomIndex]

    return (
        <Link href={`/${userName}/${randomQ._id}`} >
            <div className='ma1-txt'>
                <span className='ma1-category'>Today 랜덤질문</span>
                <p className='ma1-q'>{randomQ.question}</p>
            </div>
        </Link>
    )
}