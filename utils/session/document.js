import { getAuthor } from "./session";
import dbResult from "@/db/db";

export const getDocument = async () => {
    // 현재 로그인된 유저 정보
    const author = await getAuthor();

    // 현재로그인된 유저가 발행한 글 가져오기 
    // dbResult(발행글)의 객체 중 author값이 author.email 값과 일치하는 객체 모두 추출
    return dbResult.filter(obj => obj.author === author.email)
};  