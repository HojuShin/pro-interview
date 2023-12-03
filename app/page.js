import './globals.css'
import Image from 'next/image'
import mainImg from '../public/main.png'
import LoginBtn from './LoginBtn'
import LogoutBtn from './LogoutBtn'
import { getAuthor } from '@/utils/session/session'

export default async function Home() {
  
  const author = await getAuthor();

  return (
    <div className="container">
      <main className="main">
        <div className="main-left">
          <h1 className='main-left-logo'><span className='main-left-color'>PRO </span>인터뷰</h1>
          <div className='main-session'>
            <p className='main-left-desc'><span className='main-left-color'>PRO</span> 인터뷰로 더 나은 미래를 준비하세요</p>
            {
              author === undefined ? <LoginBtn /> : <LogoutBtn author={author}/> 
            }
          </div>
        </div>
        <div className="main-right">
          <div className='main-session'>
            <div className='main-right-desc'>
              <p>면접 스킬 UP</p>
              <span className='main-right-desc-span'>면접 성공을 위한 첫걸음을 내딛으세요!</span>
              <span>PRO 인터뷰가 함께 합니다</span>
            </div>
            <div className='main-right-session-img'>
              <Image src={mainImg} alt="Main Image" id='mainImg'></Image>
            </div>
          </div>
        </div>
      </main >
    </div>
  )
}
