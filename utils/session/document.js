import { getAuthor } from "./session";
import dbResult from "@/db/db";

export const getDocument = async () => {

    try {
        // 현재 로그인된 유저 정보
        const author = await getAuthor();

        if (!author) {
            // 현재 로그인된 유저가 없을 때의 처리
            console.error('로그인한 사용자가 없습니다.');
            return []; 
        }

        // 현재 로그인된 유저가 발행한 글 가져오기 
        // dbResult(발행글)의 객체 중 author 값이 author.email 값과 일치하는 객체 모두 추출
        const userDocuments = dbResult.filter(obj => obj.author === author.email);
        return userDocuments;
    } catch (error) {
        // 예외 처리
        console.error('사용자 정보 불러오기 혹은 필터링 에러', error.message);
        throw error; // 에러 전파 
    }
    
};  