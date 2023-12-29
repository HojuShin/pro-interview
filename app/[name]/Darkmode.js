'use client'

import '@/styles/darkmode.css'
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function DarkMode({ cookies }) {

    let router = useRouter()

    useEffect(() => {
        let cookie = ('; ' + document.cookie).split(`; mode=`).pop().split(';')[0]
        //쿠키값이 비어있을 때
        if (cookie == '') {
            document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
        }
    }, [])

    return (
        <>
            <div className='darkmodeSecion'>
                <span onClick={() => {
                    // 현재 쿠키값 가져오기
                    let darkmodeCookie = ('; ' + document.cookie).split(`; mode=`).pop().split(';')[0]
                    if (darkmodeCookie == 'light') {
                        document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400)
                        router.refresh()
                    } else {
                        document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
                        router.refresh()
                    }
                }}>
                    {cookies.value === 'dark' ? (
                        <FontAwesomeIcon icon={faMoon} className='darkIcon' />
                    ) : (
                        <FontAwesomeIcon icon={faSun} className='lightIcon' />
                    )}
                </span>
            </div>
        </>
    )
}