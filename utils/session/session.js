import { getServerSession } from 'next-auth';
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { connectDB } from '../../db/dababase';

export const getAuthor = async () => {
    // 현재 로그인된 유저 정보
    let session = await getServerSession(authOptions);

    // 세션에서 사용자 이메일 추출, 이메일이 없을 경우를 대비한 예외 처리
    const userEmail = session?.user?.email || null; // userEmail에 대한 예외 처리

    // 'test' 데이터베이스에 연결
    const db = (await connectDB).db('test');

    // 데이터베이스의 'users' 컬렉션에서 모든 사용자 가져오기
    let result = await db.collection('users').find().toArray();

    // 현재 사용자의 이메일과 일치하는 사용자 객체 찾아서 반환
    return result.find(db => db.email === userEmail);
};