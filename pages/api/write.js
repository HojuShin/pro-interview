import { connectDB } from "@/db/dababase"
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(request, response) {

    // 현재 로그인 유저 정보
    let session = await getServerSession(request, response, authOptions);
    // 현재 날짜, 시간
    let date = new Date()

    if (session) {
        request.body.author = session.user.email;
        request.body.date = date ;
    }

    if (request.method == 'POST') {
        let db = (await connectDB).db('Pro');
        let result = db.collection('post').insertOne(request.body);
        response.redirect(302,  `/${ session.user.name}`)
    }
}