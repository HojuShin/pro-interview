'use client'

export default function Error({ error }) {
    console.log(error)
    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '130px',
                    gap: '30px',
                    backgroundColor: '#1b1b1b',
                }}
            >
                <h1 style={{ color: 'white', fontSize: '70px' }} >:( </h1>
                <h1 style={{ color: 'white', fontWeight: '500' }}>오류가 발생했습니다.<br /> 다시 시도해주세요.</h1>
            </div>

        </>
    )
}