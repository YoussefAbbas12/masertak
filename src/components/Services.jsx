import Service from './Service'

function Curriculums() {
const services = [
  {
    text: "اختيار المنحة والجامعة المناسبة",
    iconClass: "fa-solid fa-graduation-cap",
    iconColor: "#056fec",
    bgColor: "#e6f0ff",
  },
  {
    text: "إعداد السيرة الذاتية وخطاب التحفيز",
    iconClass: "fa-solid fa-file-pen",
    iconColor: "#e67e22",
    bgColor: "#fff3e6",
  },
  {
    text: "تدريب على المقابلات الأكاديمية",
    iconClass: "fa-solid fa-comments",
    iconColor: "#27ae60",
    bgColor: "#eafaf1",
  },
  {
    text: "إرشاد في إجراءات التقديم خطوة بخطوة",
    iconClass: "fa-solid fa-clipboard-check",
    iconColor: "#8e44ad",
    bgColor: "#f5e9fa",
  },
  {
    text: "متابعة شخصية حتى القبول النهائي",
    iconClass: "fa-solid fa-user-check",
    iconColor: "#d35400",
    bgColor: "#fff0e6",
  },
  {
    text: "محتوى إرشادي وأدلة معتمدة دوليًا",
    iconClass: "fa-solid fa-globe",
    iconColor: "#16a085",
    bgColor: "#e6f9f6",
  },
  {
    text: "12 سنة خبرة في دعم الطلاب عالميًا",
    iconClass: "fa-solid fa-trophy",
    iconColor: "#f1c40f",
    bgColor: "#fff9e6",
  },
];




  return (
    <div class="curriculums">
        <div class="h3-24-semibold">أكثر من 48 أداة تطوير برمجي و تكنولوجيا احترافية في منهج واحد</div>
        <div class="icons">
            {services.map((service, index) => (
                <Service
                    key={index}
                    text={service.text}
                    iconClass={service.iconClass}
                    iconColor={service.iconColor}
                    bgColor={service.bgColor}
                />

            ))}
        </div>
    </div>
  )
}

export default Curriculums