import '@/styles/user.css'
import Main from './main'
import { cookies } from 'next/headers'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { connectDB } from '@/db/dababase'
import NoWriting from './NoWriting'

export default async function Home() {

    // 현재 로그인된 사용자
    const authorDb = await getServerSession(authOptions);

    // 현재 로그인된 사용자가 작성한 글 목록 가져오기 
    const db = (await connectDB).db('Pro');
    const result = await db.collection('post').find({ author: authorDb.user.email }).toArray()
    const authorDocument = JSON.parse(JSON.stringify(result));

    // 랜덤 인덱스 생성
    const randomIndex = Math.floor(Math.random() * authorDocument.length);
    // 랜덤 질문 선택
    const randomQ = authorDocument[randomIndex];

    let cookiesRes = cookies().get('mode');

    return (
        <>
            {authorDocument.length === 0
                ? <NoWriting user={authorDb.user} />
                : <Main authorDb={authorDb.user} authorDocument={authorDocument} randomQ={randomQ} cookiesRes={cookiesRes} />
            }
        </>
    )
}
