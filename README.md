<div align="center">

# 🌦️ AuraCast
### پلتفرم حرفه‌ای پیش‌بینی آب‌وهوا با نقشه‌های تعاملی

**طراحی و توسعه: [محمدعلی بزازی](#) — Mohammadali Bazzazi**

![Version](https://img.shields.io/badge/version-1.0.0-7df9ff?style=for-the-badge)
![License](https://img.shields.io/badge/license-Proprietary-ff6ec4?style=for-the-badge)
![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-8b5cf6?style=for-the-badge)

</div>

---

## 📖 معرفی

**AuraCast** یک قالب فول‌فرانت‌اند، مدرن و آینده‌نگرانه برای نمایش وضعیت آب‌وهوا است که با ترکیبی از **Glassmorphism**، گرادیان‌های **Aurora** و انیمیشن‌های نرم، تجربه‌ای در سطح Awwwards ارائه می‌دهد.

برخلاف ویجت‌های ساده‌ی آب‌وهوا، AuraCast یک **نقشهٔ تعاملی واقعی** بر پایهٔ **Leaflet** دارد که لایه‌های زندهٔ ابر، بارش، دما، باد و فشار را از **OpenWeatherMap** روی نقشه پایه تاریک نمایش می‌دهد و با کلیک کاربر روی هر نقطه از کرهٔ زمین، داشبورد را به آن مختصات منتقل می‌کند.

> 🎨 این پروژه به‌صورت اختصاصی توسط **محمدعلی بزازی** طراحی و توسعه داده شده است.
> هرگونه کپی‌برداری، بازنشر یا استفادهٔ تجاری بدون اجازهٔ کتبی، **پیگرد قانونی** دارد.

---

## ✨ ویژگی‌ها

- 🗺️ **نقشه تعاملی چند لایه‌ای** (ابر، بارش، دما، باد، فشار) با Leaflet + OpenWeatherMap
- 🔍 **جستجوی هوشمند شهر** با پیشنهاد لحظه‌ای از Open-Meteo Geocoding
- 📍 **شناسایی خودکار موقعیت کاربر** با Geolocation API
- 🌡️ **داشبورد فعلی**: دما، احساس واقعی، رطوبت، باد، فشار، دید، UV، ابرناکی
- 🕒 **پیش‌بینی ساعتی ۲۴ ساعت آینده** به‌صورت اسکرول افقی
- 📅 **پیش‌بینی هفتگی ۷ روزه** با نمودار میله‌ای محدودهٔ دما
- 🌅 **کمان طلوع و غروب** پویا با موقعیت لحظه‌ای خورشید
- 💨 **شاخص کیفیت هوا (AQI)** اروپایی همراه با PM2.5، PM10، O₃، NO₂
- 🌐 **پشتیبانی کامل از RTL** و زبان فارسی با فونت Vazirmatn
- 📱 **کاملاً Responsive** برای موبایل، تبلت و دسکتاپ
- 🎭 **تم تاریک پیش‌فرض** با افکت‌های Glassmorphism و Aurora متحرک
- 🛡️ **سیستم Anti-Copy** شامل واترمارک، امضای کنسول و غیرفعال‌سازی منوی راست‌کلیک

---

## 🚀 راه‌اندازی

این پروژه **هیچ وابستگی، بیلد یا نصب پکیجی** ندارد. کافی است:

```bash
# 1. فایل‌ها را در یک پوشه قرار دهید
weather-site/
├── index.html
├── styles.css
├── script.js
└── README.md

# 2. فایل index.html را در مرورگر باز کنید
# یا برای تجربه بهتر، روی یک سرور محلی اجرا کنید:
npx serve .
# یا
python3 -m http.server 8080
```

سپس آدرس `http://localhost:8080` را در مرورگر باز کنید.

---

## 🛠️ معماری فنی

| لایه | تکنولوژی |
|------|-----------|
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

## 🔑 تنظیمات (اختیاری)

برای استفادهٔ Production از نقشهٔ آب‌وهوا، کلید رایگان خود را از [openweathermap.org](https://openweathermap.org/api) دریافت و در فایل `script.js` جایگزین کنید:

```js
const OWM_KEY = 'YOUR_API_KEY_HERE';
```

داده‌های اصلی پیش‌بینی (Open-Meteo) **نیازی به کلید API ندارند**.

---

## 📂 ساختار فایل‌ها

```
weather-site/
├── index.html        ← ساختار صفحه (نوار ابزار، داشبورد، نقشه، پیش‌بینی)
├── styles.css        ← طراحی کامل سیستم (توکن‌ها، گلس، رسپانسیو)
├── script.js         ← منطق API، نقشه، رندر داده‌ها
└── README.md         ← این فایل
```

---

## 🎨 طراحی

پالت رنگی الهام‌گرفته از شفق قطبی (**Aurora**):

| نقش | رنگ |
|------|------|
| پس‌زمینه عمیق | `#070912` |
| اولیه (Cyan) | `#7df9ff` |
| ثانویه (Violet) | `#8b5cf6` |
| تأکید (Pink) | `#ff6ec4` |
| متن اصلی | `#e7ecff` |

---

## ⚖️ حق نشر و مالکیت

```
© 2026 Mohammadali Bazzazi (محمدعلی بزازی)
All Rights Reserved.

این پروژه دارای حق مالکیت معنوی است.
هرگونه کپی‌برداری، انتشار مجدد، فروش یا استفاده تجاری
بدون اجازهٔ کتبی طراح، اکیداً ممنوع و قابل پیگرد قانونی است.
```

---

<div align="center">

### 🌟 ساخته‌شده با عشق توسط

# محمدعلی بزازی
**Mohammadali Bazzazi**

`Designer · Front-End Engineer · Visual Architect`

</div>
