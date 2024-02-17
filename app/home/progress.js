'use client'

import '@/styles/progress.css'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Progress({ authorDocument }) {

    const itemsPerPage = 12; // 페이지당 보여지는 요소 개수
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const [prgOnClick, setPrgOnClick] = useState('Not started'); // 선택된 진행 상태에 따라 필터링된 질문 리스트를 보여주기 위한 상태
    const [filteredDocuments, setFilteredDocuments] = useState([]); // 필터링된 데이터를 저장하는 상태
    const prgLabels = ['Not started', 'Started', 'In Progress', 'Completed']; // 진행 상태에 대한 레이블 목록
    let router = useRouter();


    useEffect(() => {
        // 선택한 진행 상태에 따라 필터링된 데이터 찾기
        const initialFilteredDocuments = authorDocument.filter(doc => doc.progress === prgOnClick);

        // 필터링된 문서 상태 업데이트
        setFilteredDocuments(initialFilteredDocuments);

        // 진행 상태가 변경되면 페이지를 1로 초기화
        setCurrentPage(1);
    }, [prgOnClick, authorDocument]);
    
    // 현재 페이지에 표시할 문서의 범위 계산
    const startDocumentIndex = (currentPage - 1) * itemsPerPage;
    const endDocumentIndex = startDocumentIndex + itemsPerPage;

    // 현재 페이지에 표시할 문서들 선택
    const currentDocuments = filteredDocuments.slice(startDocumentIndex, endDocumentIndex);

    // 페이지 전환 버튼 클릭 시 실행되는 함수
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className='prgsection'>
            <div className='prg-text'>
                <p>진행상황 별 보기</p>
            </div>
            <div className="prgLabel">
                <button className={`labelbtn ${prgOnClick === prgLabels[0] ? 'active' : ''}`} onClick={() => { setPrgOnClick(prgLabels[0]) }}><p>🌱 {prgLabels[0]}</p></button>
                <button className={`labelbtn ${prgOnClick === prgLabels[1] ? 'active' : ''}`} onClick={() => { setPrgOnClick(prgLabels[1]) }}><p>🌈 {prgLabels[1]}</p></button>
                <button className={`labelbtn ${prgOnClick === prgLabels[2] ? 'active' : ''}`} onClick={() => { setPrgOnClick(prgLabels[2]) }}><p>🏃‍♂️ {prgLabels[2]}</p></button>
                <button className={`labelbtn ${prgOnClick === prgLabels[3] ? 'active' : ''}`} onClick={() => { setPrgOnClick(prgLabels[3]) }}><p>✨ {prgLabels[3]}</p></button>
            </div>
            <div className='currently-list'>
                {currentDocuments.length === 0
                    ?
                    <div className="noElement">
                        <p>한 발 더 나가봐요! 다음 레벨을 향해 화이팅!</p>
                    </div>
                    : (
                        <>
                            {currentDocuments.map((data, i) => (
                                <div className='document prgDocument' key={i} onClick={() => router.push(`/home/${data._id}`)}>
                                    <p className="document-q">{data.question}</p>
                                    <p className="document-date">등록일 | {data.date}</p>
                                </div>
                            ))}
                        </>
                    )
                }
            </div>
            {filteredDocuments.length > itemsPerPage && (
                <div className="pagination-buttons">
                    {Array.from({ length: Math.ceil(filteredDocuments.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index + 1}
                            className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
