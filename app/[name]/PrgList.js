'use client'

import '@/styles/prglist.css'
import Link from "next/link";
import { useParams } from 'next/navigation'

export default function PrgList({ authorDocument }) {

    // [dynamic route]에 입력한 내용 (url파라미터)
    let params = useParams()

    // 각 상태에 해당하는 값들을 필터링하여 배열에 저장, 없을 경우 빈 배열 반환
    const notStarted = authorDocument.filter(dcm => dcm.progress == 'Not started') || [];
    const started = authorDocument.filter(dcm => dcm.progress == 'Started') || [];
    const inProgress = authorDocument.filter(dcm => dcm.progress == 'In Progress') || [];
    const completed = authorDocument.filter(dcm => dcm.progress == 'Completed') || [];

    return (
        <>
            <div className='dashboard'>
                <div className="dshFlex">
                    <div className='listSection'>
                        <div className='progress'>
                            <p style={{ borderBottom: '4px solid white' }}>Not started</p>
                        </div>
                        <div className="progressList">
                            {notStarted.map((e, i) => (
                                <Link href={`/${params.name}/${e._id}`} key={i}>
                                    <div className='progressCmt'>
                                        <p className="progress-q">{e.question}</p>
                                        <p className="progress-date">등록일 : {e.date}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='listSection'>
                        <div className='progress'>
                            <p style={{ borderBottom: '4px solid skyblue' }}>Started</p>
                        </div>
                        <div className="progressList">
                            {started.map((e, i) => {
                                return (
                                    <Link href={`/${params.name}/${e._id}`} key={i}>
                                        <div className='progressCmt' key={i}>
                                            <p className="progress-q">{started[i].question}</p>
                                            <p className="progress-date">등록일 : {started[i].date}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className='listSection'>
                        <div className='progress'>
                            <p style={{ borderBottom: '4px solid rgb(89, 156, 245)' }}>In Progress</p>
                        </div>
                        <div className="progressList">
                            {inProgress.map((e, i) => {
                                return (
                                    <Link href={`/${params.name}/${e._id}`} key={i}>
                                        <div className='progressCmt' key={i}>
                                            <p className="progress-q">{inProgress[i].question}</p>
                                            <p className="progress-date">등록일 : {inProgress[i].date}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className='listSection'>
                        <div className='progress'>
                            <p style={{ borderBottom: '4px solid rgb(24, 119, 242)' }}>Completed</p>
                        </div>
                        <div className="progressList">
                            {completed.map((e, i) => {
                                return (
                                    <Link href={`/${params.name}/${e._id}`} key={i}>
                                        <div className='progressCmt' key={i}>
                                            <p className="progress-q">{completed[i].question}</p>
                                            <p className="progress-date">등록일 : {completed[i].date}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}