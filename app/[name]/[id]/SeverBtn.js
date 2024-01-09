'use client'
import { useRouter } from "next/navigation";

export default function ServerBtn({ user, matchdata }) {

    const router = useRouter();

    return (
        <div className="editSection">
            <div className="editList">
                <div className="editList1">
                    <button onClick={() => { router.push(`/${user.name}/update/${matchdata._id}`) }}>
                        <p>수정하기</p>
                    </button>
                </div>
                <div className="editList2">
                    <button
                        type="submit"
                        className="deletebtn"
                        onClick={() => {
                            fetch('/api/delete', { method: 'DELETE', body: matchdata._id })
                                .then((r) => {
                                    // 응답이 성공적이지 않으면
                                    if (!r.ok) {
                                        throw new Error('fetch 네트워크 요청 혹은 서버 응답 에러');
                                    }
                                    return r.json();
                                })
                                .then((result) => {
                                    if (result.redirectTo) {
                                        window.location.href = result.redirectTo; //페이지 지정
                                    }
                                })
                                .catch((error) => console.error('Fetch delete 에러:', error));
                        }}>
                        <p>삭제하기</p>
                    </button>
                </div>
            </div>
        </div>
    )
}