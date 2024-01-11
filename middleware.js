import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';

// 비인증 사용자의 페이지 접근을 제한하는 미들웨어
// 브라우저 쿠키에서 세션 ID를 가져와 세션 ID가 없으면 'not-found' 페이지로 리다이렉트.
export default async function Middleware(request) {

    // 브라우저 쿠키 가져오기
    const cookieStore = cookies();

    // 쿠키에 저장된 세션 id를 담을 변수
    let accessToken;

    // 개발 환경 여부에 따라 쿠키 키를 확인
    if (process.env.NODE_ENV === 'development') {
        // dev 환경
        accessToken = cookieStore.get('next-auth.session-token');
    } else {
        // production 환경
        accessToken = cookieStore.get('__Secure-next-auth.session-token');
    }

    // 쿠키에 세션id가 없으면 not-found 페이지로 리다이렉트
    if (!accessToken) {
        return NextResponse.redirect(new URL('/not-found', request.url));
    }
}

// 접속 제한을 적용할 페이지 목록 설정
export const config = {
    matcher: ['/write', '/home', '/home/:path*', '/update/:path*']
};
