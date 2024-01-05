
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';

//  로그인 안된 사용자 write 페이지 접속 제한 미들웨어
export async function middleware(request) {

  if (request.nextUrl.pathname.startsWith('/write')) {
    // session 쿠키 유무 확인
    const cookiesSession = cookies().get('next-auth.session-token');
    console.log('쿠키 확인', cookiesSession)

    if (cookiesSession == undefined) {
      // 쿠키 없으면 not found 페이지 보여주기
      return NextResponse.redirect(new URL('/not-found', request.url));
    }
  }

} 
