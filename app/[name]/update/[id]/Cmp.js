'use client'

import '@/styles/write.css'
import { useParams, useRouter } from 'next/navigation'
import { notFound } from "next/navigation"
import PrgUpd from './PrgUpd'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Cmp({ authorDb, authorDocument }) {

    let router = useRouter();
    let updateParams = useParams();

    const urlUpdateName = decodeURIComponent(updateParams.name);
    const urlMatchName = urlUpdateName === authorDb.name;

    const updateData = authorDocument.find(e => e._id === updateParams.id);

    if (updateData === undefined || urlMatchName === false) {
        return notFound()
    }

    return (
        <div className='wrtie'>
            <form action='/api/update' method='POST' className='writeForm'>
                <div className='write-flex'>
                    <div className='write-left'>
                        <h4 variant="h4" tabIndex="0">면접관의 예상질문을<br />작성해주세요.</h4>
                        <textarea
                            type='text'
                            maxLength='200'
                            name='question'
                            defaultValue={updateData.question}
                            className='write-question-text'
                        ></textarea>
                    </div>
                    <div className='write-right'>
                        <div className='write-section'>
                            <PrgUpd updateData={updateData} />
                            {/* <div className='write-section-option'>
                            <p className='write-section-priority-text'>우선순위를 위해 중요도를 설정해 주세요</p>
                            <select className='select' name='priority' defaultValue={'⭐ ⭐ ⭐ ⭐ ⭐'}>
                                <option>⭐ ⭐ ⭐ ⭐ ⭐</option>
                                <option>⭐ ⭐ ⭐ ⭐</option>
                                <option>⭐ ⭐ ⭐</option>
                                <option>⭐ ⭐</option>
                                <option>⭐</option>
                            </select>
                        </div> */}
                            <div className='write-answer-update' tabIndex="0">
                                <h6 className='write-answer-text'>내가 준비한 답변을 입력해주세요. </h6><span className='option'> (공백포함 500자)</span>
                                <hr className='write-answer-hr'></hr>
                                <textarea
                                    type='text'
                                    maxLength='500'
                                    name='answer'
                                    className='write-answer-input-update'
                                    defaultValue={updateData.answer}
                                ></textarea >
                            </div>
                            <div className='write-section-option write-section-keyword '>
                                <div className='write-section-keyword-text'><span className='hint'>Hint!</span> 키워드</div>
                                <div className='write-section-form'>
                                    <input type='text' name='keyword' id='keyword01' defaultValue={updateData.keyword[0]}></input>
                                    <input type='text' name='keyword' id='keyword02' defaultValue={updateData.keyword[1]}></input>
                                    <input type='text' name='keyword' id='keyword03' defaultValue={updateData.keyword[2]}></input>
                                </div>
                            </div>
                            <input className='hideId' name="_id" defaultValue={updateData._id.toString()} />
                            <div className='submit-session'>
                                <button type="submit" className='submit-btn'>수정하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="backBtn">
                <button className="back" onClick={() => { router.back(); }}>
                    <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{ color: 'white' }} />
                </button>
            </div>
        </div>
    )
}