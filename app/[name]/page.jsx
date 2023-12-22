import '@/styles/user.css'
import { getAuthor } from '@/utils/session/session'
import { getDocument } from '@/utils/session/document'
import { notFound } from "next/navigation"
import Main from './main'

export default async function User() {

    const authorDb = await getAuthor();
    const authorDocument = await getDocument();
    // 랜덤 인덱스 생성
    const randomIndex = Math.floor(Math.random() * authorDocument.length);
    // 랜덤 질문 선택
    const randomQ = authorDocument[randomIndex];

    // 현재 로그인된 상태가 아니라면 404에러 페이지 보여주기
    if (authorDb === undefined || authorDocument.length === 0) {
        return notFound()
    }

    return (
        <Main authorDb={authorDb} authorDocument={authorDocument} randomQ={randomQ} />
    )
}