import '@/styles/view.css';
import Detail from './Detail';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { connectDB } from '@/db/dababase';

export default async function View() {

  const user = await getServerSession(authOptions);
  // 현재 로그인된 사용자가 작성한 글 목록 가져오기 
  const userdb = (await connectDB).db('Pro');
  const dbresult  = await userdb.collection('post').find({ author: user.user.email }).toArray()
  const userDocument = JSON.parse(JSON.stringify(dbresult));

  return(
    <Detail user={user.user} userDocument={userDocument}/>
  )
}