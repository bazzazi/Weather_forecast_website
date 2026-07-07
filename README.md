<div align="center">
  <h1>AuraCast</h1>
  <h3>Professional & Modern Weather Forecast Template</h3>
  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/github/stars/bazzazi/Weather_forecast_website?style=for-the-badge" />
    <img src="https://img.shields.io/github/license/bazzazi/Weather_forecast_website?style=for-the-badge" />
  </p>
</div>

---

## 📸 Screenshots

| Desktop | Mobile |
|:---:|:---:|
| ![Desktop](https://github.com/bazzazi/Weather_forecast_website/blob/main/Screenshots/shot_desktop.png) | ![Mobile](https://github.com/bazzazi/Weather_forecast_website/blob/main/Screenshots/shot_mobile.png) |

> 🎥 **Live Demo:** [View Online Version](https://weatherforcastwebsite.netlify.app/)

---

## 📖 Introduction

**AuraCast** is a full‑frontend, modern, and futuristic template for displaying weather conditions. This project combines **Glassmorphism**, **Aurora** gradients, and smooth animations to deliver a user experience on par with top‑tier websites.

Unlike simple widgets, AuraCast includes a **truly interactive map** based on **Leaflet** that displays live layers for clouds, precipitation, temperature, wind, and pressure from **OpenWeatherMap** over a dark base map. Users can click anywhere on the globe to move the dashboard to that location.

---

## ✨ Key Features

| Category | Feature |
|:---|:---|
| **Map** | Multi‑layer interactive map (clouds, precipitation, temperature, wind, pressure) with Leaflet + OpenWeatherMap |
| **Search** | Smart city search with instant suggestions from Open‑Meteo Geocoding |
| **Location** | Automatic user location detection via Geolocation API |
| **Live Dashboard** | Displays temperature, real‑feel, humidity, wind, pressure, visibility, UV, and cloud cover |
| **Hourly Forecast** | Shows the next 24 hours in a horizontal scroll |
| **Weekly Forecast** | Displays the next 7 days with a bar chart of temperature ranges |
| **Sunrise & Sunset** | Dynamic arc with real‑time sun position |
| **Air Quality** | European Air Quality Index (AQI) with PM2.5, PM10, O₃, NO₂ |
| **RTL Support** | Full Persian language support with Vazirmatn font |
| **Responsive** | Fully responsive for mobile, tablet, and desktop |
| **Visual Theme** | Dark theme by default with Glassmorphism effects and animated Aurora background |

---

## 🚀 Quick Start

This project has **no dependencies, builds, or package installations**. Simply:

```bash
# 1. Clone the repository
git clone https://github.com/bazzazi/Weather_forecast_website.git

# 2. Enter the folder
cd Weather_forecast_website

# 3. Open index.html in your browser
# Or use Live Server in VS Code

---

## 📁 File Structure

```
Weather_forecast_website/
├── index.html    # Page structure (toolbar, dashboard, map, forecasts)
├── styles.css    # Full design system (tokens, glass, responsive)
├── script.js     # API logic, map, data rendering
└── README.md     # This file
```

---

## ⚙️ Configuration (Optional)

For production use of the weather map, get your free API key from [OpenWeatherMap](https://openweathermap.org/api) and replace it in `script.js`:

```js
const OWM_KEY = 'YOUR_API_KEY_HERE';
```

> ℹ️ Main forecast data (Open‑Meteo) **does not require an API key**.

---

## 🎨 Design & Color Palette

The color palette is inspired by the **Aurora**:

| Role | Color |
|:---|:---|
| Deep Background | `#070912` |
| Primary (Cyan) | `#7df9ff` |
| Secondary (Violet) | `#8b5cf6` |
| Accent (Pink) | `#ff6ec4` |
| Main Text | `#e7ecff` |

---

## 🛠️ Technical Architecture

| Layer | Technology |
|:---|:---|
| **Structure** | Semantic HTML5, RTL |
| **Styling** | Pure CSS3 + CSS Variables + Glassmorphism |
| **Logic** | JavaScript ES2020+ (no framework) |
| **Map** | [Leaflet 1.9.4](https://leafletjs.com) |
| **Base Map Layer** | CartoDB Dark Matter |
| **Weather Layers** | [OpenWeatherMap Tiles](https://openweathermap.org/api/weathermaps) |
| **Weather Data** | [Open‑Meteo API](https://open-meteo.com) (free, no key) |
| **Air Quality Data** | [Open‑Meteo Air Quality API](https://open-meteo.com/en/docs/air-quality-api) |
| **Geocoding** | Open‑Meteo Geocoding API |
| **Fonts** | Vazirmatn (Persian) + Space Grotesk (English) |

---

## 📄 License

© 2026 Mohammadali Bazzazi. All rights reserved.

---

## 👨‍💻 Author & Designer

**Design & Development** by **Mohammadali Bazzazi**  
`Full-Stack Dev · Mobile Dev · AI Dev`

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bazzazi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/bazzazi)
```
