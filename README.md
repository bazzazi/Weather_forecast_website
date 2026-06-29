<div align="center">
  <h1>AuraCast</h1>
  <h3>قالب حرفه‌ای و مدرن پیش‌بینی آب‌وهوا</h3>
  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/github/stars/bazzazi/Weather_forecast_website?style=for-the-badge" />
    <img src="https://img.shields.io/github/license/bazzazi/Weather_forecast_website?style=for-the-badge" />
  </p>
</div>

---

## 📸 پیش‌نمایش (Screenshots)

| دسکتاپ | موبایل |
|:---:|:---:|
| ![دسکتاپ](https://github.com/bazzazi/Weather_forecast_website/blob/main/Screenshots/shot_desktop.png) | ![موبایل](https://github.com/bazzazi/Weather_forecast_website/blob/main/Screenshots/shot_mobile.png) |

> 🎥 **دموی زنده:** [مشاهده نسخه‌ی آنلاین](https://weatherforcastwebsite.netlify.app/)

---

## 📖 معرفی

**AuraCast** یک قالب فول‌فرانت‌اند، مدرن و آینده‌نگرانه برای نمایش وضعیت آب‌وهوا است. این پروژه با ترکیبی از **Glassmorphism**، گرادیان‌های **Aurora** و انیمیشن‌های نرم، تجربه‌ای کاربری در سطح وب‌سایت‌های برجسته ارائه می‌دهد.

برخلاف ویجت‌های ساده، AuraCast شامل یک **نقشهٔ تعاملی واقعی** بر پایهٔ **Leaflet** است که لایه‌های زندهٔ ابر، بارش، دما، باد و فشار را از **OpenWeatherMap** روی نقشه پایه تاریک نمایش می‌دهد. کاربر با کلیک روی هر نقطه از کرهٔ زمین، داشبورد را به آن مختصات منتقل می‌کند.

---

## ✨ ویژگی‌های کلیدی

| دسته‌بندی | ویژگی |
|:---|:---|
| **نقشه** | نقشه تعاملی چند لایه‌ای (ابر، بارش، دما، باد، فشار) با Leaflet + OpenWeatherMap |
| **جستجو** | جستجوی هوشمند شهر با پیشنهاد لحظه‌ای از Open-Meteo Geocoding |
| **موقعیت‌یابی** | شناسایی خودکار موقعیت کاربر با Geolocation API |
| **داشبورد لحظه‌ای** | نمایش دما، احساس واقعی، رطوبت، باد، فشار، دید، UV و ابرناکی |
| **پیش‌بینی ساعتی** | نمایش ۲۴ ساعت آینده به‌صورت اسکرول افقی |
| **پیش‌بینی هفتگی** | نمایش ۷ روز آینده با نمودار میله‌ای محدودهٔ دما |
| **طلوع و غروب** | کمان پویا با موقعیت لحظه‌ای خورشید |
| **کیفیت هوا** | شاخص کیفیت هوا (AQI) اروپایی همراه با PM2.5، PM10، O₃، NO₂ |
| **پشتیبانی از RTL** | پشتیبانی کامل از زبان فارسی با فونت Vazirmatn |
| **رسپانسیو** | کاملاً واکنش‌گرا برای موبایل، تبلت و دسکتاپ |
| **تم بصری** | تم تاریک پیش‌فرض با افکت‌های Glassmorphism و Aurora متحرک |

---

## 🚀 راه‌اندازی سریع

این پروژه **هیچ وابستگی، بیلد یا نصب پکیجی** ندارد. کافی است:

```bash
# ۱. مخزن را کلون کنید
git clone https://github.com/bazzazi/Weather_forecast_website.git

# ۲. وارد پوشه شوید
cd Weather_forecast_website

# ۳. فایل index.html را در مرورگر باز کنید
# یا از Live Server در VS Code استفاده کنید
```

---

## 🗂️ ساختار فایل‌ها

```
Weather_forecast_website/
├── index.html    # ساختار صفحه (نوار ابزار، داشبورد، نقشه، پیش‌بینی)
├── styles.css    # طراحی کامل سیستم (توکن‌ها، گلس، رسپانسیو)
├── script.js     # منطق API، نقشه، رندر داده‌ها
└── README.md     # این فایل
```

---

## ⚙️ تنظیمات (اختیاری)

برای استفادهٔ Production از نقشهٔ آب‌وهوا، کلید رایگان خود را از [OpenWeatherMap](https://openweathermap.org/api) دریافت و در فایل `script.js` جایگزین کنید:

```js
const OWM_KEY = 'YOUR_API_KEY_HERE';
```

> ℹ️ داده‌های اصلی پیش‌بینی (Open-Meteo) **نیازی به کلید API ندارند**.

---

## 🎨 طراحی و پالت رنگی

پالت رنگی الهام‌گرفته از شفق قطبی (**Aurora**):

| نقش | رنگ |
|:---|:---|
| پس‌زمینه عمیق | `#070912` |
| اولیه (Cyan) | `#7df9ff` |
| ثانویه (Violet) | `#8b5cf6` |
| تأکید (Pink) | `#ff6ec4` |
| متن اصلی | `#e7ecff` |

---

## 🛠️ معماری فنی

| لایه | تکنولوژی |
|:---|:---|
| **ساختار** | HTML5 سمنتیک، RTL |
| **استایل** | CSS3 خالص + CSS Variables + Glassmorphism |
| **منطق** | JavaScript ES2020+ (بدون فریم‌ورک) |
| **نقشه** | [Leaflet 1.9.4](https://leafletjs.com) |
| **لایه پایه نقشه** | CartoDB Dark Matter |
| **لایه‌های آب‌وهوا** | [OpenWeatherMap Tiles](https://openweathermap.org/api/weathermaps) |
| **داده آب‌وهوا** | [Open-Meteo API](https://open-meteo.com) (رایگان، بدون کلید) |
| **داده کیفیت هوا** | [Open-Meteo Air Quality API](https://open-meteo.com/en/docs/air-quality-api) |
| **Geocoding** | Open-Meteo Geocoding API |
| **فونت** | Vazirmatn (فارسی) + Space Grotesk (انگلیسی) |

---

## 🤝 مشارکت

1. مخزن را **Fork** کنید
2. یک **Branch** جدید بسازید (`git checkout -b feature/amazing-feature`)
3. تغییرات خود را **Commit** کنید (`git commit -m 'Add some amazing feature'`)
4. Branch را **Push** کنید (`git push origin feature/amazing-feature`)
5. یک **Pull Request** باز کنید

---

## 📄 مجوز

© 2026 محمدعلی بزازی (Mohammadali Bazzazi). تمامی حقوق محفوظ است.

---

## 👨‍💻 سازنده و طراح

**طراحی و توسعه** توسط **محمدعلی بزازی** — Mohammadali Bazzazi  
`Front-End Engineer · UI/UX Designer · Visual Architect`

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bazzazi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/bazzazi)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/bazzazi)
```
