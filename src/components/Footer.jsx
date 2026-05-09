import ContactIcon from "./ContactIco"
import logoImg from '../assets/images/Logo.png'

function footer() {
    return (
        <>
                    <div className="footer-new">
            <div className="w-layout-blockcontainer container-6 w-container">
                <div className="body-2">
                    <div className="block"><img src={logoImg} loading="lazy" width={242} height={73} alt="مسيرتك" className="vectors-wrapper" />
                        <div className="text-3">صناعة قادة التكنولوجيا القادمين</div>
                        <div className="social">
                            <a href="#!" className="w-inline-block"><i class="fa-solid fa-envelope"></i></a>
                            <a href="#!" className="w-inline-block"><i class="fa-brands fa-square-youtube"></i></a>
                            <a href="#!" className="w-inline-block"><i class="fa-brands fa-square-instagram"></i></a>
                            <a href="#!" className="w-inline-block"><i class="fa-brands fa-square-facebook"></i></a>
                            <a href="#!" className="w-inline-block"><i class="fa-solid fa-phone"></i></a>
                        </div>
                    </div>
                    <div className="block-2" style={{width: '50%'}}>
                        <div className="frame-1929"  style={{width: '100%'}}>
                            <div className="div-footer-ctas"  style={{width: '50%'}}>

                                <div className="footer-row">
                                    <i className="fa-solid fa-comments" style={{ color: "#2D89EF" }}></i>
                                    <div className="text-5">استشارة مجانية</div>
                                </div>

                                <div className="footer-row">
                                    <i className="fa-solid fa-building-columns" style={{ color: "#27AE60" }}></i>
                                    <div className="text-5">التقديم على الجامعات</div>
                                </div>

                                <div className="footer-row">
                                    <i className="fa-solid fa-home" style={{ color: "#E67E22" }}></i>
                                    <div className="text-5">الإقامة في تركيا</div>
                                </div>

                                <div className="footer-row">
                                    <i className="fa-solid fa-graduation-cap" style={{ color: "#8E44AD" }}></i>
                                    <div className="text-5">التقديم على المنح الدراسية</div>
                                </div>
                            </div>
                            <div className="div-footer-ctas"  style={{width: '50%'}}>
                                <div className="footer-row">
                                    <i className="fa-solid fa-file-pen" style={{ color: "#D35400" }}></i>
                                    <div className="text-5">كتابة خطابات النوايا والتوصيات</div>
                                </div>

                                <div className="footer-row">
                                    <i className="fa-solid fa-id-card" style={{ color: "#16A085" }}></i>
                                    <div className="text-5">تجهيز السيرة الذاتية وخطط الدراسة</div>
                                </div>

                                <div className="footer-row">
                                    <i className="fa-solid fa-microphone" style={{ color: "#F1C40F" }}></i>
                                    <div className="text-5">تحضير للمقابلات الأكاديمية</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footnote">
                    <div className="text-5">© 2018 - 2025 سيرتك المحدودة. كل الحقوق محفوظة.</div>
                    <div className="div-privacy-links"><a href="/terms-conditions" className="footer-utility-link w-inline-block">
                        <div className="text-5">البنود و الظروف</div>
                    </a><a href="/ar/privacy-policy" className="footer-utility-link w-inline-block">
                            <div className="text-5">سياسة الخصوصية</div>
                        </a></div>
                </div>
            </div>
        </div>
        <ContactIcon />
        </>
    )
}

export default footer