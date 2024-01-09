'use client'

import '@/styles/prglist.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

export default function PrgList({ authorDocument, params, router }) {

    const [notStarted, setNotStarted] = useState([]);
    const [started, setStarted] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [completed, setCompleted] = useState([]);

    // 각 상태에 해당하는 값들을 필터링하여 배열에 저장, 없을 경우 빈 배열 반환
    useEffect(() => {
        const notStartedData = authorDocument.filter(dcm => dcm.progress === 'Not started') || [];
        const startedData = authorDocument.filter(dcm => dcm.progress === 'Started') || [];
        const inProgressData = authorDocument.filter(dcm => dcm.progress === 'In Progress') || [];
        const completedData = authorDocument.filter(dcm => dcm.progress === 'Completed') || [];

        setNotStarted(notStartedData);
        setStarted(startedData);
        setInProgress(inProgressData);
        setCompleted(completedData);
    }, [authorDocument]);

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
                                <FontAwesomeIcon icon={faEllipsis} size='2xl' className='progressIcon'/>
                            ) : (
                                notStarted.map((e, i) => (
                                    <div className='progressCmt' key={i} onClick={() => { router.push(`/home/${e._id}`) }}>
                                        <p className="progress-q">{e.question}</p>
                                        <p className="progress-date">등록일 : {e.date}</p>
                                    </div>
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
                                <FontAwesomeIcon icon={faEllipsis} size='2xl' className='progressIcon' />
                            ) : (
                                started.map((e, i) => (
                                    <div className='progressCmt' key={i} onClick={() => { router.push(`/home/${e._id}`) }}>
                                        <p className="progress-q">{e.question}</p>
                                        <p className="progress-date">등록일 : {e.date}</p>
                                    </div>
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
                                <FontAwesomeIcon icon={faEllipsis} size='2xl' className='progressIcon'/>
                            ) : (
                                inProgress.map((e, i) => (
                                    <div className='progressCmt' key={i} onClick={() => { router.push(`/home/${e._id}`) }}>
                                        <p className="progress-q">{e.question}</p>
                                        <p className="progress-date">등록일 : {e.date}</p>
                                    </div>
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
                                <FontAwesomeIcon icon={faEllipsis} size='2xl' className='progressIcon'/>
                            ) : (
                                completed.map((e, i) => (
                                    <div className='progressCmt' key={i} onClick={() => { router.push(`/home/${e._id}`) }}>
                                        <p className="progress-q">{e.question}</p>
                                        <p className="progress-date">등록일 : {e.date}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}