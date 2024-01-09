import Cmp from './Cmp';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/db/dababase';
  
export default async function Update() {

    const updateuser = await getServerSession(authOptions);
    // 현재 로그인된 사용자가 작성한 글 목록 가져오기 
    const updateuserDb = (await connectDB).db('Pro');
    const updateuserDbResult  = await updateuserDb.collection('post').find({ author: updateuser.user.email }).toArray()
    const updateUserDocument = JSON.parse(JSON.stringify(updateuserDbResult));

    return (
        <Cmp updateuser={updateuser.user} updateUserDocument={updateUserDocument}></Cmp>
    );
}