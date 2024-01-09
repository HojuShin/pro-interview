//글 수정 서버
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { connectDB } from "@/db/dababase";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {

    let session = await getServerSession(request, response, authOptions)

    if (request.method == 'POST') {
        // 업데이트할 데이터 정의
        let update = {
            question: request.body.question,
            answer: request.body.answer,
            keyword: request.body.keyword,
            progress: request.body.progress
        }
        // 'Pro' 데이터베이스 연결
        let db = (await connectDB).db('Pro')
        // 글 업데이트. _id는 ObjectId로 변환하여 사용
        let updateResult = await db.collection('post').updateOne(
            { _id: new ObjectId(request.body._id) },
            { $set: update }
        );

        // 글이 성공적으로 업데이트되면 수정된 글을 보여주는 페이지로 리다이렉션
        response.redirect(302, `/home/${request.body._id}`)
    }
}