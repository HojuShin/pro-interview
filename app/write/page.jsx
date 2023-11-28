import '@/styles/write.css'

export default function Write() {
    return (
        <>
            <div className='wrtie'>
                <form action='./api/write' method='POST' className='writeForm'>
                    <div className='write-flex'>
                        <div className='write-left'>
                            <h4 variant="h4" tabindex="0">면접관의 예상질문을<br />작성해주세요.</h4>
                            <textarea type='text' maxLength='200' name='question' placeholder='ex) 프로그래밍이란 뭐라고 생각하나요?' id='write-question-text'></textarea>
                        </div>
                        <div className='write-right'>
                            <div className='write-section'>
                                <div className='write-section-option'>
                                    <p className='write-section-priority-text'>우선순위를 위해 중요도를 설정해 주세요</p>
                                    <select className='select' name='priority' defaultValue={'⭐ ⭐ ⭐ ⭐ ⭐'}>
                                        <option>⭐ ⭐ ⭐ ⭐ ⭐</option>
                                        <option>⭐ ⭐ ⭐ ⭐</option>
                                        <option>⭐ ⭐ ⭐</option>
                                        <option>⭐ ⭐</option>
                                        <option>⭐</option>
                                    </select>
                                </div>
                                <div className='write-answer' tabIndex="0">
                                    <h6 className='write-answer-text'>내가 준비한 답변을 입력해주세요. </h6><span className='option'> (공백포함 350자)</span>
                                    <hr className='write-answer-hr'></hr>
                                    <textarea type='text' maxLength='350' name='answer' id='write-answer-input' placeholder='ex) 프로그래밍은 붕어빵입니다!'></textarea >
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
                                    <button type="submit" className='submit-btn'>등록하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}