import '@/styles/footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className='footersection'>
                <div className='footer-desc'>
                    <div className='footer-desc1'>
                        <p style={{color:'rgb(24, 119, 242)',  display:'inline'}}>PRO</p> 인터뷰 | 회사소개 | 서비스 이용약관 | 개인정보 처리 방침 
                    </div>
                    <div className='footer-desc2'>
                        <p style={{ width: '110px', display:'inline-block' }}>고객센터(이용문의)</p> | <span> 02-123-4567</span><br />
                        <p style={{ width: '110px',  display:'inline-block'}}>전자우편주소</p> | <span> tlsghwn03@gmail.com</span>
                    </div>
                    <div className='footer-desc3'>
                        <p>Copyright© 프로인터뷰(주) All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
