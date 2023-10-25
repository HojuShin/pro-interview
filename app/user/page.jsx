
import '@/styles/user.css'
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import NavBar from "../../components/NavBar";
import WriteBtn from '@/components/writeBtn';
import Link from 'next/link';

export default async function User() {
    let sessionUser = await getServerSession(authOptions);

    return (
        <>
            <NavBar sessionUser={sessionUser.user} />
            <div className="dashboard">
                <div className="dashboardSection">
                    <div className="dashboard-question">
                        <p>Question</p>
                        <WriteBtn></WriteBtn>
                        {/* <div className="dashboard-question-top">
                            <div className="search">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256" id="searchIcon">
                                    <g fill="#737373" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path></g></g>
                                </svg>
                                <input type="text" placeholder="Search..." id="search-form">
                                </input>
                            </div>
                        </div> */}
                    </div>
                    <div className="dashboardList">
                        <table className="dashboardList-table">
                            <thead className="dashboardList-table-thead">
                                <tr>
                                    <th style={{ width: '9%' }}>No</th>
                                    <th style={{ width: '45%' }}>질문</th>
                                    <th style={{ width: '20%' }}>중요도</th>
                                    <th style={{ width: '16%' }}>진행상황</th>
                                    <th style={{ width: '10%' }}>날짜</th>
                                </tr>
                            </thead>
                            <tbody className="dashboardList-table-tbody">
                                <tr>
                                    <td>1</td>
                                    <td className="dashboardList-title">프로그래밍이란 무엇인가요?</td>
                                    <td>⭐⭐⭐⭐⭐</td>
                                    <td>망함</td>
                                    <td>23.03.18</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
} 