'use client'

import { useParams } from 'next/navigation'
import PrgUpd from './PrgUpd'
import { useRef } from 'react'

export default function Cmp({ updateUserDocument }) {

    let updateParams = useParams();
    const updateData = updateUserDocument.find(e => e._id === updateParams.id);

    // useRef를 사용하여 textarea 엘리먼트에 접근하기 위한 참조 생성
    const textareaRef = useRef();

    // 텍스트 영역의 높이를 자동으로 조절하는 함수
    const handleHeight = () => {
        textareaRef.current.style.height = 'auto'; //height 초기화
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'; // 스크롤 높이만큼 설정하여 텍스트 영역의 높이 조절
    };

    return (
        <form action='/api/update' method='POST' className='writeForm'>
            <div className="write">
                <PrgUpd updateData={updateData} />
                <div className="write-q">
                    <textarea
                        type='text'
                    rows={1}
                        ref={textareaRef}
                        maxLength='100'
                        name='question'
                        defaultValue={updateData.question}
                        onChange={handleHeight}
                    ></textarea>
                </div>
                <div className="write-keyword">
                    <p><strong style={{ color: 'rgb(24, 119, 242)' }}>Hint!</strong> 키워드 (최대 3개) </p>
                    <input type='text' name='keyword' id='keyword01' defaultValue={updateData.keyword[0]} maxLength='8'></input>
                    <input type='text' name='keyword' id='keyword02' defaultValue={updateData.keyword[1]} maxLength='8'></input>
                    <input type='text' name='keyword' id='keyword03' defaultValue={updateData.keyword[2]} maxLength='8'></input>
                </div>
                <div className="write-a">
                    <textarea
                        type='text'
                        maxLength='500'
                        name='answer'
                        defaultValue={updateData.answer}
                    ></textarea >
                </div>
                <input className='hideId' name="_id" defaultValue={updateData._id.toString()} />
                <div className="submit">
                    <div className="submitsection">
                        <button type="button"><p>취소</p></button>
                        <button type="submit" className="submitBtn"><p>수정</p></button>
                    </div>
                </div>
            </div >
        </form>
    )
}