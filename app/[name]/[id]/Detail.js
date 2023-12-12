'use client'

import { useParams } from "next/navigation";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ServerBtn from "./severBtn";

export default function Detail({ authorDb, authorDocument }) {

  // 답변 숨김/보기와 힌트 토글 기능을 갖는 상태 변수
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  // 수정/삭제하기 토글 기능을 갖는 상태변수
  const [isEditVisible, setIsEditlVisible] = useState(false);
  // body 요소를 저장할 state 변수
  const [body, setBody] = useState(null);

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

  // 삭제하기, 수정하기 화면 토글  기능
  const toggleEdit = () => {
    setIsEditlVisible(!isEditVisible)
  }

  useEffect(() => {
    // 버튼 외부를 클릭하면 ServerBtn 컴포넌트 영역 닫기

    // 클릭 이벤트가 발생했을 때 호출되는 함수 
    const handleOutsideClick = (event) => {
      // editButton 요소 가져오기
      const editButton = document.getElementById('editButton');
      //editButton이 존재하고, 그리고 사용자가 클릭한 대상이 editButton의 하위 요소가 아니라면
      if (editButton && !editButton.contains(event.target)) {
        // ServerBtn 컴포넌트 영역을 닫기 위해 isEditVisible 상태를 false로 설정
        setIsEditlVisible(false);
      }
    };

    // 컴포넌트가 마운트될 때, 화면 전체에 대한 클릭 이벤트를 감지하는 handleOutsideClick 추가
    // 사용자가 화면 어디를 클릭하던지간에 클릭 이벤트를 감지
    document.addEventListener('click', handleOutsideClick);

    // 컴포넌트가 언마운트될 때.
    // 컴포넌트가 더 이상 화면에 렌더링되지 않을 때 해당 이벤트 리스너를 더 이상 유지할 필요가 없기 때문 이벤트 리스너 제거
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isEditVisible]);

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
                              style={{ background: keyword.trim() === '' ? 'initial' : 'rgba(0, 0, 0, 0.125)' }}
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
        <button id="editButton" onClick={toggleEdit}>
          <FontAwesomeIcon icon={faBars} size="2xl" style={{ color: 'white' }} />
        </button>
      </div>
      {isEditVisible ? <ServerBtn authorDb={authorDb.name} matchdata={matchdata._id} /> : null}
    </>
  )
}