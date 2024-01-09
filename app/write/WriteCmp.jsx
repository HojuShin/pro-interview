'use client'

import { useState } from 'react';

export default function WriteCmp() {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    // question과 answer 중 하나라도 입력값 비어있으면 submit 버튼 비활성화
    const isSubmitDisabled = !question || !answer;

    // question 입력값 변경 시
    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    // answer 입력값 변경 시
    const handleAnswerChange = (e) => {
        setAnswer(e.target.value);
    };

    return (
        <>
            <div className='wrtie'>
                <form action='./api/write' method='POST' className='writeForm'>
                    <div className='write-flex'>
                        <div className='write-left'>
                            <h4 variant="h4" tabIndex="0">면접관의 예상질문을 작성해주세요.</h4>
                            <textarea
                                type='text'
                                maxLength='100'
                                name='question'
                                placeholder='ex) 프로그래밍이란 뭐라고 생각하나요?'
                                className='write-question-text'
                                onChange={handleQuestionChange}></textarea>
                        </div>
                        <div className='write-right'>
                            <div className='write-section'>
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
                                <div className='scroll'>
                                    <div className='write-answer-update' tabIndex="0" style={{padding: '35px 38px'}}>
                                        <div><h6 className='write-answer-text'>내가 준비한 답변을 입력해주세요. </h6><span className='option'> (공백포함 500자)</span></div>
                                        <hr className='write-answer-hr'></hr>
                                        <textarea
                                            type='text'
                                            maxLength='500'
                                            name='answer'
                                            className='write-answer-input-update'
                                            placeholder='ex) 프로그래밍은 붕어빵입니다!'
                                            onChange={handleAnswerChange}
                                        ></textarea >
                                    </div>
                                </div>
                                <div className='write-section-option write-section-keyword '>
                                    <div className='write-section-keyword-text'><span className='hint'>Hint!</span> 키워드</div>
                                    <div className='write-section-form'>
                                        <input type='text' name='keyword' id='keyword01'></input>
                                        <input type='text' name='keyword' id='keyword02'></input>
                                        <input type='text' name='keyword' id='keyword03'></input>
                                    </div>
                                </div>
                                <div className='submit-session'>
                                    {/* 질문, 답변란 입력값 없으면 disabled */}
                                    <button
                                        type="submit"
                                        className='submit-btn'
                                        disabled={isSubmitDisabled}>등록하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}