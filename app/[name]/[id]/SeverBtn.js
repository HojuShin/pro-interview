'use client'

import { useRouter } from "next/navigation";

export default function ServerBtn({ authorDb, matchdata }) {
    const router = useRouter();
    return (
        <div className="editSection">
                <div className="editList">
                    <div className="editList1">
                        <button onClick={() => { router.push(`/${authorDb.name}/update/${matchdata._id}`) }}>
                            <p>수정하기</p>
                        </button>
                    </div>
                    <div className="editList2">
                        <button className="deletebtn">
                            <p>삭제하기</p>
                        </button>
                    </div>
                </div>
        </div>
    )
}