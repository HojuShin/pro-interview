'use client'

import '@/styles/prglist.css'
import Link from "next/link";
import { useParams } from 'next/navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export default function PrgList({ authorDocument }) {

    // [dynamic route]에 입력한 내용 (url파라미터)
    let params = useParams()

    // 각 상태에 해당하는 값들을 필터링하여 배열에 저장, 없을 경우 빈 배열 반환
    const notStarted = authorDocument.filter(dcm => dcm.progress === 'Not started') || [];
    const started = authorDocument.filter(dcm => dcm.progress === 'Started') || [];
    const inProgress = authorDocument.filter(dcm => dcm.progress === 'In Progress') || [];
    const completed = authorDocument.filter(dcm => dcm.progress === 'Completed') || [];
    
    return (
        <>
            <div className='dashboard'>
                <div className="dshFlex">
                    <div className='listSection'>
                        <div className='progress'>
                            <p>Not started</p>
                        </div>
                        <div className="progressList">
                            {notStarted.length === 0 ? (
                                <FontAwesomeIcon icon={faEllipsis} size='2xl' style={{ color: 'rgba(255, 255, 255, 0.1)' }} />
                            ) : (
                                notStarted.map((e, i) => (
                                    <Link href={`/${params.name}/${e._id}`} key={i}>
                                        <div className='progressCmt' key={i}>
                                            <p className="progress-q">{e.question}</p>
                                            <p className="progress-date">등록일 : {e.date}</p>
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>
                    </div>
                    <div className='listSection'>
                        <div className='progress'>
                            <p>Started</p>
                        </div>
                        <div className="progressList">
                            {started.length === 0 ? (
                                <FontAwesomeIcon icon={faEllipsis} size='2xl' style={{ color: 'rgba(255, 255, 255, 0.1)' }} />
                            ) : (
                                started.map((e, i) => (
                                    <Link href={`/${params.name}/${e._id}`} key={i}>
                                        <div className='progressCmt' key={i}>
                                            <p className="progress-q">{e.question}</p>
                                            <p className="progress-date">등록일 : {e.date}</p>
                                        </div>
                                    </Link>
                                ))
                            )}

                        </div>
                    </div>
                    <div className='listSection'>
                        <div className='progress'>
                            <p>In Progress</p>
                        </div>
                        <div className="progressList">
                            {inProgress.length === 0 ? (
                                <FontAwesomeIcon icon={faEllipsis} size='2xl' style={{ color: 'rgba(255, 255, 255, 0.1)' }} />
                            ) : (
                                inProgress.map((e, i) => (
                                    <Link href={`/${params.name}/${e._id}`} key={i}>
                                        <div className='progressCmt' key={i}>
                                            <p className="progress-q">{e.question}</p>
                                            <p className="progress-date">등록일 : {e.date}</p>
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>
                    </div>
                    <div className='listSection'>
                        <div className='progress'>
                            <p>Completed</p>
                        </div>
                        <div className="progressList">
                            {completed.length === 0 ? (
                                <FontAwesomeIcon icon={faEllipsis} size='2xl' style={{ color: 'rgba(255, 255, 255, 0.1)' }} />
                            ) : (
                                completed.map((e, i) => (
                                    <Link href={`/${params.name}/${e._id}`} key={i}>
                                        <div className='progressCmt' key={i}>
                                            <p className="progress-q">{e.question}</p>
                                            <p className="progress-date">등록일 : {e.date}</p>
                                        </div>
                                    </Link>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}