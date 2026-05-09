
import heroImg from '../assets/images/hero-img.png'

function Hero() {
  return (
<div id="hero" className="hero">
<div className="text">
  <h1 className="hero-heading">
    منصة <span className="blue-bg">مسيرتك</span><br />دليلك للوصول إلى أفضل الفرص الأكاديمية
  </h1>
  <div className="subtitle">
    <div className="check-point-row">
      <i className="fa-solid fa-check check-icon" style={{color: '#056fec', fontWeight: 'bold'}} />
      <div className="hero-text no-h">جلسات <span className="blue-w-600">استشارات فردية</span> مع خبراء المنح عبر الإنترنت</div>
    </div>
    <div className="check-point-row">
      <i className="fa-solid fa-check check-icon" style={{color: '#056fec', fontWeight: 'bold'}} />
      <div className="hero-text no-h"><span className="blue-w-600">مناهج إرشادية معتمدة دوليًا</span> ومصممة خصيصًا لنجاحك</div>
    </div>
    <div className="check-point-row">
      <i className="fa-solid fa-check check-icon" style={{color: '#056fec', fontWeight: 'bold'}} />
      <div className="hero-text no-h">دعم كامل في <span className="blue-w-600">السيرة الذاتية، خطابات التحفيز، والمقابلات</span></div>
    </div>
    <div className="check-point-row">
      <i className="fa-solid fa-check check-icon" style={{color: '#056fec', fontWeight: 'bold'}} />
      <div className="hero-text no-h"><span className="blue-w-600">12 سنة خبرة</span> في مساعدة الطلاب على الوصول للجامعات العالمية</div>
    </div>
  </div>
  <div>
    <a href="#" className="primary_button whatsapp w-button">تواصل معنا</a>
  </div>
</div>

  <img 
    className="hero-img" 
    src={heroImg} 
    width={573} 
    height={506} 
    alt="مسيرتك - دليلك للوصول إلى أفضل الفرص الأكاديمية" 
    sizes="(max-width: 767px) 100vw, 573px" 
    id="w-node-ab09209e-0ec2-f462-629d-fc74d93ba3e8-5b7b51fb" 
    fetchPriority="high"
    decoding="async"
  />
</div>

  )
}

export default Hero