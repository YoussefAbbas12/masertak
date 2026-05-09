import React from 'react'
import conversationImg from '../assets/images/conversation.png'
import contractImg from '../assets/images/contract.png'
import passportImg from '../assets/images/passport.png'

function Why() {
  return (

<section id="why_ischool" className="why_i_school">
  <h1 id="test_id" className="h2 center">لماذا <span className="h1-40-bold-2"> مسيرتك</span>؟</h1>
  <div className="w-layout-blockcontainer why_i_school_container w-container">
    <section className="uui-section_layout13-2">
      <div className="uui-page-padding-3">
        <div className="uui-container-large-2">
          <div className="uui-padding-vertical-xhuge-2">
            <div data-duration-in={150} data-duration-out={150} data-current="Tab 1" data-easing="ease" className="uui-layout13_component-2 w-tabs">
              <div id="w-node-_070e6843-fcbc-f2fa-5c98-83d98c23b5aa-5b7b51fb" className="uui-layout13_tabs-menu-2 w-tab-menu">
                <a data-w-tab="Tab 1" className="uui-layout13_tabs-link-2 w-inline-block w-tab-link w--current">
                <div className="img" style={{ background: '#E6F0FF' , borderRadius: '50%'}}>
                    <i className="fa-solid fa-headset" style={{ color: '#056FEC', fontSize: '24px' }}></i>
                </div>
                <div className="lightbox_tab_container">
                    <h3 className="uui-heading-xsmall-2 ar">استشارة مجانية</h3>
                    <div className="uui-text-size-medium-3 ar">
                    نساعدك في تحديد تخصصك الدراسي واختيار الجامعة المناسبة مجانًا؛ يتواصل معك مستشار تعليمي فورًا.
                    </div>
                </div>
                </a>
                <a data-w-tab="Tab 2" className="uui-layout13_tabs-link-2 w-inline-block w-tab-link">
                <div className="img" style={{ background: '#EAFAF1', borderRadius: '50%' }}>
                    <i className="fa-solid fa-building-columns" style={{ color: '#27AE60', fontSize: '24px' }}></i>
                </div>
                <div className="lightbox_tab_container">
                    <h3 className="uui-heading-xsmall-2 ar">التقديم على الجامعات</h3>
                    <div className="uui-text-size-medium-3 ar">
                    نُسجّل لك في أفضل الجامعات ونضمن قبولك كوكيل معتمد في أغلب الجامعات الخاصة التركية.
                    </div>
                </div>
                </a>
                <a data-w-tab="Tab 3" className="uui-layout13_tabs-link-2 w-inline-block w-tab-link">
                <div className="img" style={{ background: '#FFF3E6' , borderRadius: '50%'}}>
                    <i className="fa-solid fa-location-dot" style={{ color: '#E67E22', fontSize: '24px' }}></i>
                </div>
                <div className="lightbox_tab_container">
                    <h3 className="uui-heading-xsmall-2 ar">الإقامة في تركيا</h3>
                    <div className="uui-text-size-medium-3 ar">
                    نرافقك من اختيار الجامعة والاستقبال من المطار حتى السكن المناسب وإكمال الأوراق الرسمية.
                    </div>
                </div>
                </a>
              </div>
              <div className="tabs-content-2 w-tab-content">
                <div data-w-tab="Tab 1" className="tab-pane-tab-1-3 w-tab-pane w--tab-active">
                  <img sizes="(max-width: 687px) 100vw, 687px" alt="استشارة مجانية" src={conversationImg} loading="lazy" className="tab-img" />
                </div>
                <div data-w-tab="Tab 2" className="w-tab-pane">
                  <img loading="lazy" src={contractImg} alt="التقديم على الجامعات" className="tab-img" />
                </div>
                <div data-w-tab="Tab 3" className="w-tab-pane">
                  <img sizes="100vw" alt="الإقامة في تركيا" src={passportImg} loading="lazy" className="tab-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div data-delay={4000} data-animation="slide" className="why-ischool-slider w-slider" data-autoplay="true" data-easing="ease" data-hide-arrows="true" data-disable-swipe="false" data-autoplay-limit={0} data-nav-spacing={3} data-duration={500} data-infinite="true">
      <div className="mask w-slider-mask">
        <div className="slide w-slide">
          <div className="slide-content ar">
            <div className="why-image"><img src="https://cdn.prod.website-files.com/654117d5c0d58bf27cf29031/65772bcb306dd4b9d2d46fbb_Website-designs-o-01.png" loading="lazy" width={467} height={364} alt="مناهج متعددة" className="website-designs-o-01" decoding="async" /></div>
            <div className="why-description">
              <div className="pre-heading">مناهج متعددة من stem &amp; Ai</div>
              <div className="headline">يتعلم الطلاب البرمجة باستخدام نفس المنصات التي يتعلم منها
                المحترفون</div>
              <div className="subtitle-2">
                <div className="subtitle-text">تتبع تقدم ابنك لحظة بلحظة، احصل على متابعة دورية من
                  المدرب حصة بحصة.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide w-slide">
          <div className="slide-content ar">
            <div className="why-image"><img src="https://cdn.prod.website-files.com/655a78032f46f2e55da300d7/6574c81e3de59b1b60bc7352_Website%20designs-o-02.webp" loading="lazy" width={467} height={364} alt="تكون الحصة لايف" className="website-designs-o-01" decoding="async" /></div>
            <div className="why-description">
              <div className="pre-heading">تكون الحصة لايف وليست مسجلة</div>
              <div className="headline">مع مدرب شخصي</div>
              <div className="subtitle-2">
                <div className="subtitle-text">دروس تفاعلية وجذابة وممتعة عبر الإنترنت، اختر جدولًا
                  مرنًا، في أي يوم / في أي وقت.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide w-slide">
          <div className="slide-content ar">
            <div className="why-image"><img src="https://cdn.prod.website-files.com/655a78032f46f2e55da300d7/6574c839b33e1d97576bb0dc_Website%20designs-o-03.webp" loading="lazy" width={467} height={364} alt="أفضل مدربين" srcSet="https://cdn.prod.website-files.com/655a78032f46f2e55da300d7/6574c839b33e1d97576bb0dc_Website%20designs-o-03-p-500.webp 500w, https://cdn.prod.website-files.com/655a78032f46f2e55da300d7/6574c839b33e1d97576bb0dc_Website%20designs-o-03.webp 601w" sizes="(max-width: 479px) 100vw, 467px" className="website-designs-o-01" decoding="async" /></div>
            <div className="why-description">
              <div className="pre-heading">أفضل مدربين علوم الكمبيوتر</div>
              <div className="headline">من جميع أنحاء العالم تم تدريبهم من قبل فريق الخبراء و لدينا أيضًا
                تدريس البرمجة باللغتين الإنجليزية والعربية</div>
              <div className="subtitle-2">
                <div className="subtitle-text">يخضع معلمو iSchool لتدريب لمدة شهرين ويتم تطبيقه بناءً
                  على أسلوب التعلم الخاص بطفلك واهتماماته.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide w-slide">
          <div className="slide-content ar">
            <div className="why-image"><img src="https://cdn.prod.website-files.com/655a78032f46f2e55da300d7/6574c84f9f60d7965dba86fb_Website%20designs-o-04.webp" loading="lazy" width={467} height={364} alt="خطة مهنية" srcSet="https://cdn.prod.website-files.com/655a78032f46f2e55da300d7/6574c84f9f60d7965dba86fb_Website%20designs-o-04-p-500.webp 500w, https://cdn.prod.website-files.com/655a78032f46f2e55da300d7/6574c84f9f60d7965dba86fb_Website%20designs-o-04.webp 596w" sizes="(max-width: 479px) 100vw, 467px" className="website-designs-o-01" decoding="async" /></div>
            <div className="why-description">
              <div className="pre-heading">خطة مهنية طويلة المدى للبرمجة</div>
              <div className="headline">مع رؤية متكاملة لتنمية طفلك</div>
              <div className="subtitle-2">
                <div className="subtitle-text">تتبع تقدم ابنك لحظة بلحظة، احصل على متابعة دورية من
                  المدرب كل حصة.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-slider-arrow-left">
        <div className="icon-3 w-icon-slider-left" />
      </div>
      <div className="right-arrow w-slider-arrow-right">
        <div className="icon-4 w-icon-slider-right" />
      </div>
      <div className="slide-nav ar w-slider-nav w-round" />
    </div>
  </div>
</section>


  )
}

export default Why