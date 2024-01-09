import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import { connectDB } from "@/db/dababase"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {

  let session = await getServerSession(req, res, authOptions)

  if (req.method === 'DELETE') {

    let db = (await connectDB).db('Pro');
    await db.collection('post').deleteOne({ _id: new ObjectId(req.body) });

    // 삭제 요청을 처리 후 완료되면 아래 해당 페이지로 이동
    return res.status(200).json({ redirectTo: '/home' });
  }
  res.status(405).end(); // Method Not Allowed
}