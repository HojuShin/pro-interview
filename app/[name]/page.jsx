import '@/styles/user.css'
import { getAuthor } from '@/utils/session/session'
import { getDocument } from '@/utils/session/document'
import Image from 'next/image'
import ring from '@/public/ring.png'
import WriteBtn from '@/components/WriteBtn'
import MainLogout from '@/components/MainLogout'

export default async function User() {

    const authorDb = await getAuthor();
    const authorDocument = await getDocument()

    return (
        <div className='mainContainer'>
            <main className='mainSection'>
                <div className='mainFlex'>
                    <div className='mainLeft'>
                        <div className='mainLogo'>
                            <h2 className='mainLogo_txt'><span className='mainLogo_color'>PRO </span>인터뷰</h2>
                        </div>
                        <div className='mainDesc'>
                            <div className='mainDesc-txt'>
                                <p>안녕하세요! <span className='mainLogo_color'>{authorDb.name}</span> 님</p>
                                <p className='mdt-2'>회원님의 인터뷰 활동을 확인하세요</p>
                                <p className='emotion'>&#128075;&#127995;</p>
                            </div>
                            <div className='mainDesc-cmt'>
                                <button className='main mainbtn'>활동 보기</button>
                                <button className='cmt'>전체 보기</button>
                            </div>
                        </div>
                        <div className='mainActivity'>
                            <div className='ma1'>
                                <div className='ma1-txt'>
                                    <span className='ma1-category'>today 랜덤질문</span>
                                    <p className='ma1-q'>자바스크립트란 무엇이라고 생각하시나요?</p>
                                </div>
                            </div>
                            <div className='ma2'>
                                <div className='ma2-l'>
                                    <Image src={ring} alt="ring Image" id='ringImg'></Image>
                                </div>
                                <div className='ma2-2'>
                                    <div className='ma2-2-desc1'>
                                        <p>나는 얼마나 준비했을까?</p>
                                    </div>
                                    <div className='ma2-2-desc2'>
                                        <div className='count count1'>
                                            <p className='countNum'>{authorDocument.length}<span> 개</span></p>
                                            <span style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.5)' }}>등록된 인터뷰</span>
                                        </div>
                                        <div className='count'>
                                            <p className='countNum'>-<span> 개</span></p>
                                            <span style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.5)' }}>완료된 인터뷰</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mainRight'>
                        <div className='userSeciton'>
                            <div className='user'>
                                <Image src={authorDb.image}
                                    alt="User Avatar"
                                    width={120}
                                    height={120}
                                    style={{ borderRadius: '20%' }}></Image>
                                <p className='user-name'>{authorDb.name}</p>
                                <p className='user-email'>{authorDb.email}</p>
                            </div>
                            <div className='writeBtn'>
                                <WriteBtn />
                                <div className='mainLogout'>
                                    <MainLogout />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}