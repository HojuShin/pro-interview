'use client'

import { useRef, useState } from 'react';

export default function WriteCmp() {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    // question과 answer 중 하나라도 입력값 비어있으면 submit 버튼 비활성화
    const isSubmitDisabled = !question || !answer;

    const textarea = useRef();

    // question 입력값 변경 시
    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);

        textarea.current.style.height = 'auto'; //height 초기화
        textarea.current.style.height = textarea.current.scrollHeight + 'px';
    };

    // answer 입력값 변경 시
    const handleAnswerChange = (e) => {
        setAnswer(e.target.value);
    };

    return (
        <form action='./api/write' method='POST' className="wrtieForm">
            <div className="write">
                <div className="write-q">
                    <textarea
                        type='text'
                        rows={1}
                        ref={textarea}
                        aria-label="title"
                        maxLength='100'
                        name='question'
                        placeholder='면접관의 예상질문을 작성해보세요.'
                        onChange={handleQuestionChange}
                    >
                    </textarea>
                </div>
                <div className="write-keyword">
                    <p><strong style={{ color: 'rgb(24, 119, 242)' }}> Hint!</strong> 키워드 (최대 3개) </p>
                    <input type='text' name='keyword' id='keyword01' maxLength='8'></input>
                    <input type='text' name='keyword' id='keyword02' maxLength='8'></input>
                    <input type='text' name='keyword' id='keyword03' maxLength='8'></input>

                </div>
                <div className="write-a">
                    <textarea
                        type='text'
                        maxLength='500'
                        name='answer'
                        placeholder='회원님이 준비한 답변을 작성해주세요. (최대 500자) '
                        onChange={handleAnswerChange}
                    ></textarea>
                </div>
                <div className="submit">
                    <div className="submitsection">
                        <button type="button"><p>취소</p></button>
                        <button type="submit" className="submitBtn" disabled={isSubmitDisabled}><p>등록</p></button>
                    </div>
                </div>
            </div >
        </form>
    )
}