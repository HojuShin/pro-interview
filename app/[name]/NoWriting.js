import '@/styles/nowriting.css'
import LogoBtn from './LogoBtn'
import Image from 'next/image'
import Link from 'next/link';

export default function NoWriting({ user }) {

    return (
        <>
            <div className='mainContainer'>
                <main className='mainSection'>
                    <div className='mainLogo'>
                        <LogoBtn />
                        <div className='userSection'>
                            <div className='userImg'>
                                <Image src={user.image}
                                    alt="User Avatar"
                                    width={40}
                                    height={40}
                                    style={{ borderRadius: '50%' }}></Image>
                            </div>
                        </div>
                    </div>
                    <div className='nowriting'>
                        <div className='nwt-section'>
                            <div className='nwt'>
                                <p>환영합니다! <span className='mainLogo_color'> {user.name}</span> 님<br /> </p>
                            </div>
                            <div className='nwt nwt2'>
                                <p>첫 인터뷰 글을 등록해 보세요 <span className='hand'> &#128075;&#127995;</span></p>
                            </div>
                            <div className='nwt nwt3'>
                                <Link href={'/write'}>
                                    <div className='nwtBtn'>
                                        <p>인터뷰 등록하기</p></div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}