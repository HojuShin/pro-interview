import '@/styles/write.css'
import NavBar from "@/components/NavBar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Write() {

    let sessionUser = await getServerSession(authOptions);

    return (
        <>
            <NavBar sessionUser={sessionUser.user} />
            <form action='./api/write' method='POST' className='writeForm'>
                <div className="write">
                    <div className="write-section">
                        <div className="write-section-q" tabindex="0">
                            <h6 className='write-q-text'>면접관의 예상질문을 입력해보세요.</h6>
                            <hr className='write-section-hr'></hr>
                            <input type='text' name='question' placeholder='ex) 프로그래밍이란 뭐라고 생각하나요?' id='write-q'></input>
                        </div>
                        <div className="write-section-q" tabindex="0">
                            <h6 className='write-q-text'>내가 준비한 답변을 입력해보세요.</h6>
                            <hr className='write-section-hr'></hr>
                            <textarea type='text' name='answer' id='write-a' placeholder='ex) 프로그래밍은 붕어빵입니다!'></textarea >
                        </div>
                        {/* <div className='write-section-option'>
                            <p className='revealed-text'>답변 공개 여부 </p>
                            <div className='revealed-toggle'>
                                <span className='revealed-btn'>공개</span>
                                <input type="checkbox" id="toggle" defaultChecked={true} hidden />
                                <label htmlFor="toggle" className="toggleSwitch">
                                    <span className="toggleButton"></span>
                                </label>
                                <span className='revealed-btn'>숨기기</span>
                            </div>
                        </div> */}
                        <div className='write-section-option'>
                            <p className='write-section-priority-text'>중요도</p>
                            <select className='select' name='priority' defaultValue={'⭐ ⭐ ⭐ ⭐ ⭐'}>
                                <option>⭐ ⭐ ⭐ ⭐ ⭐</option>
                                <option>⭐ ⭐ ⭐ ⭐</option>
                                <option>⭐ ⭐ ⭐</option>
                                <option>⭐ ⭐</option>
                                <option>⭐</option>
                            </select>
                        </div>
                        <div className='write-section-option write-section-keyword '>
                            <div className='write-section-keyword-text'><span className='hint'>Hint!</span> 키워드</div>
                            <div className='write-section-form'>
                                <input type='text' name='keyword' id='keyword01'></input>
                                <input type='text' name='keyword' id='keyword02'></input>
                                <input type='text' name='keyword' id='keyword03'></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='submit-session'>
                    <button type="submit" className='submit-btn'>등록하기</button>
                </div>
            </form >
        </>
    )
}