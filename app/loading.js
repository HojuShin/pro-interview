import Image from 'next/image'
import loading from '@/public/loading.gif'

export default function Loading() {
    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#1b1b1b',
            }}>
            <Image src={loading} alt="loading" id='loadingImg'></Image>
        </div>
    )
}