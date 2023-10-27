import '@/styles/write.css'
import NavBar from "@/components/NavBar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers} from "@fortawesome/free-solid-svg-icons";

export default async function Write() {
    let sessionUser = await getServerSession(authOptions);

    return (
        <>
            <NavBar sessionUser={sessionUser.user} />
            <div className="write">
                <div className="write-section">
                <p className='write-top'><FontAwesomeIcon icon={faUsers} /> 면접관의 예상 질문과 나의 답변을 작성해보세요! </p>
                    <div className="write-section-q">
                        <form className='write-section-q-form'>
                            <p className='write-q-text'>Q.질문</p>
                            <input type='text' placeholder="면접관의 예상질문을 입력하세요" id='write-q'></input>
                            <p className='write-a-text'>A.나의 답변</p>
                            <textarea type='text' placeholder="나의 답변을 입력하세요" id='write-a'></textarea >
                        </form>
                        <div className='revealed'>
                            <p className='revealed-text'>답변 공개 여부 </p>
                            <div className='revealed-toggle'>
                                <span className='revealed-btn'>공개</span>
                                <input type="checkbox" id="toggle" defaultChecked={true} hidden />
                                <label htmlFor="toggle" className="toggleSwitch">
                                    <span className="toggleButton"></span>
                                </label>
                                <span className='revealed-btn'>숨기기</span>
                            </div>
                        </div>
                    </div>
                    <div className='write-section-priority'>
                        <p className='write-section-priority-text'>중요도</p>
                        <select className='select' defaultValue={'⭐ ⭐ ⭐ ⭐ ⭐'}>
                            <option>⭐ ⭐ ⭐ ⭐ ⭐</option>
                            <option>⭐ ⭐ ⭐ ⭐</option>
                            <option>⭐ ⭐ ⭐</option>
                            <option>⭐ ⭐</option>
                            <option>⭐</option>
                        </select>
                    </div>
                    <div className='write-section-keyword'>
                        <div className='write-section-keyword-text'><span className='hint'>Hint!</span> 키워드</div>
                        <form className='write-section-form'>
                            <input type='text' id='keyword01'></input>
                            <input type='text' id='keyword02'></input>
                            <input type='text' id='keyword03'></input>
                        </form>
                    </div>
                </div>
            </div>
            <div className='submit-session'>
                <button className='submit-btn'>등록하기</button>
            </div>
        </>
    )
}