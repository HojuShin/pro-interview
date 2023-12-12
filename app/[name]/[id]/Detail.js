'use client'

import { useParams, useRouter } from "next/navigation";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Detail({ authorDb, authorDocument }) {

  // 답변 숨김/보기와 힌트 토글 기능을 갖는 상태 변수
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  // body 요소를 저장할 state 변수
  const [body, setBody] = useState(null);

  const router = useRouter();

  // 현재 url id와 일치하는 데이터의 id를 찾아 작성글 가져오기
  const { id } = useParams()
  const matchdata = authorDocument.find(e => e._id === id);

  useEffect(() => {
    // 컴포넌트가 클라이언트 측에서 로드된 후에만 실행되도록 
    if (typeof document !== 'undefined') {
      setBody(document.querySelector('body'));
    }
  }, []); // 빈 배열을 전달하여 최초 렌더링 시에만 실행되도록 

  // body 요소가 존재할 때만 '답변 숨기기' 버튼 동작
  const signupOnClick = () => {
    if (body) {
      body.classList.add('slide');
    }
  };

  // body 요소가 존재할 때만 '답변 보기' 버튼 동작
  const signinOnClick = () => {
    if (body) {
      body.classList.remove('slide');
    }
  };

  // 키워드 목록 토글 기능
  const toggleKeywordList = () => {
    setIsDetailVisible(!isDetailVisible);
  };


  return (
    <>
      <div id='mainTest'>
        <div className='container'>
          {/* 답변 숨김/보기 기능 */}
          <div className='box signin'>
            <h2>다시 연습해 볼까요?</h2>
            <button className='hideBtn' onClick={signinOnClick}>답변 숨기기</button>
          </div>
          {/* 답변 보기 기능 */}
          <div className='box signup'>
            <h2>준비한 답변을 확인하세요!</h2>
            <button className='viewBtn' onClick={signupOnClick}>답변보기</button>
          </div>
          {/* 답변 및 키워드 토글 */}
          <div className='formBx'>
            <div className='form viewform'>
              <form>
                <h3>🧑‍💻<br />{matchdata.question}</h3>
                {/* 힌트 토글 버튼 */}
                <div className='keywordcard'>
                  <div className='keywordcard-box' onClick={toggleKeywordList}>
                    <span className='hintbox'>Hint</span>
                  </div>
                  {/* 키워드 목록 */}
                  <div className={`keyword-list ${isDetailVisible ? 'visible' : ''}`}>
                    {
                      Array.isArray(matchdata.keyword) && matchdata.keyword.every(keyword => keyword === '')
                        ? <p>키워드를 설정해 주세요</p>
                        : (
                          matchdata.keyword.map((keyword, i) => (
                            <span
                              className="keyword-open"
                              key={i}
                              style={{ background: keyword.trim() === '' ? 'initial' : 'rgba(0, 0, 0, 0.125);' }}
                            >
                              {keyword}
                            </span>
                          ))
                        )
                    }
                  </div>
                </div>
              </form>
            </div>
            {/* 답변 영역 */}
            <div className='form answerform'>
              <form>
                <Image src={authorDb.image}
                  alt="User"
                  width={30}
                  height={30}
                  style={{
                    display: 'flex',
                    margin: 'auto 0px',
                    borderRadius: '50%'
                  }}></Image>
                <p>{matchdata.answer}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* 수정하기 버튼 */}
      <div className="updateBtn">
        <button onClick={() => { router.push(`/${authorDb.name}/update/${matchdata._id}`) }}>
          <FontAwesomeIcon icon={faPenToSquare} size="2xl" style={{ color: 'white' }} />
        </button>
      </div>
    </>
  )
}