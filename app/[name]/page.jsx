import '@/styles/user.css'
import { getAuthor } from '@/utils/session/session'
import { getDocument } from '@/utils/session/document'
import Image from 'next/image'
import ring from '@/public/ring.png'
import WriteBtn from './WriteBtn'
import Random from './Random'

export default async function User() {

    const authorDb = await getAuthor();
    const authorDocument = await getDocument();

    // progress의 값이 'Completed'인 객체의 수 (완료된 인터뷰)
    const notStartedCount = authorDocument.filter(data => data.progress === 'Completed').length;

    return (
        <div className='mainContainer'>
            <main className='mainSection'>
                <div className='mainFlex'>
                    <div className='mainLogo'>
                        <div className='logoSection'>
                            <h2 className='mainLogo_txt'><span className='mainLogo_color'>PRO </span>인터뷰</h2>
                        </div>
                        <div className='userSection'>
                            <div className='userImg'>
                                <Image src={authorDb.image}
                                    alt="User Avatar"
                                    width={50}
                                    height={50}
                                    style={{ borderRadius: '50%' }}></Image>
                            </div>
                            <div className='userDesc'>
                                <p className='user-name'>{authorDb.name}</p>
                                <p className='user-email'>{authorDb.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className='mainDesc'>
                        <div className='mainDesc-txt'>
                            <p>안녕하세요! <span className='mainLogo_color'>{authorDb.name}</span> 님,<br /> 회원님의 인터뷰 활동을 확인하세요 &#128075;&#127995;</p>
                            <WriteBtn />
                        </div>
                    </div>
                    <div className='mainActivity'>
                        <div className='ma1'>
                            <Random authorDocument={authorDocument} userName={authorDb.name} />
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
                                        <p className='countNum'>{notStartedCount}<span> 개</span></p>
                                        <span style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.5)' }}>완료된 인터뷰</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}