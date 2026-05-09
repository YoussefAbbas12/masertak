import React from 'react'

function Who() {
  return (
    <section id="parents" className="section-2">
        <div className="w-layout-blockcontainer container_happy_parents w-container">
            <h1 className="h2 center"><span className="blue-span">مين </span>احنا</h1>
            <p className="sub_title" style={{width: '80%', margin: 'auto', marginTop: '30px'}}>مع فريق من الاستشاريين ذوي الخبرة، نعمل في مسيرتك على توجيه الطلاب الطامحين للحصول على منح دراسية في الخارج بأن نكون معهم خطوة بخطوة في كل المراحل وحتى الوصول إلى بلد الدراسة.</p>
            <div className="margin-80-top-bottom" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <iframe style={{borderRadius: '20px'}}  width={937} height={527} src="https://www.youtube.com/embed/AXGPgo9qTR4" title="من نحن وماذا نفعل وما الخدمات التي نقدمها لك وكيف تحجز من خلالنا ؟" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
        </div>
    </section>

  )
}

export default Who