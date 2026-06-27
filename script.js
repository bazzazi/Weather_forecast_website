/* ============================================================
   AuraCast — JavaScript
   © Mohammadali Bazzazi (محمدعلی بزازی) — All rights reserved.
   هرگونه کپی‌برداری بدون اجازه ممنوع است.
   ============================================================ */

// ---- Anti-copy console signature ----
console.log(
  '%c AuraCast %c طراحی: محمدعلی بزازی — Mohammadali Bazzazi ',
  'background:linear-gradient(135deg,#7df9ff,#8b5cf6);color:#0b0f1e;font-weight:700;padding:6px 10px;border-radius:6px 0 0 6px;',
  'background:#0b0f1e;color:#7df9ff;padding:6px 10px;border-radius:0 6px 6px 0;'
);

/* ----------------------------------------------------------
   Weather code → label + icon (Open-Meteo WMO codes)
   ---------------------------------------------------------- */
const WMO = {
  0:  ['آفتابی', '☀️'],
  1:  ['عمدتاً صاف', '🌤️'],
  2:  ['نیمه ابری', '⛅'],
  3:  ['ابری', '☁️'],
  45: ['مه', '🌫️'],
  48: ['مه یخ‌زده', '🌫️'],
  51: ['نم‌نم باران ملایم', '🌦️'],
  53: ['نم‌نم باران', '🌦️'],
  55: ['نم‌نم باران شدید', '🌧️'],
  61: ['باران ملایم', '🌧️'],
  63: ['باران', '🌧️'],
  65: ['باران شدید', '⛈️'],
  71: ['برف ملایم', '🌨️'],
  73: ['برف', '🌨️'],
  75: ['برف شدید', '❄️'],
  77: ['دانه‌های برف', '❄️'],
  80: ['رگبار ملایم', '🌦️'],
  81: ['رگبار', '🌧️'],
  82: ['رگبار شدید', '⛈️'],
  85: ['رگبار برف ملایم', '🌨️'],
  86: ['رگبار برف شدید', '❄️'],
  95: ['رعد و برق', '⛈️'],
  96: ['رعد و برق با تگرگ', '⛈️'],
  99: ['رعد و برق شدید با تگرگ', '⛈️']
};
const wmo = (c) => WMO[c] || ['—','❔'];

const PERSIAN_DAYS = ['یک‌شنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنج‌شنبه','جمعه','شنبه'];

/* ----------------------------------------------------------
   Geocoding + Weather APIs (Open-Meteo — keyless, free)
   ---------------------------------------------------------- */
async function geocode(query){
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=6&language=fa&format=json`;
  const r = await fetch(url); const j = await r.json();
  return j.results || [];
}
async function reverseGeo(lat, lon){
  try{
    const r = await fetch(`https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}&language=fa&format=json`);
    const j = await r.json(); return j.results?.[0];
  }catch{ return null; }
}
async function getWeather(lat, lon){
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}`
    + `&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,pressure_msl,cloud_cover,visibility,uv_index`
    + `&hourly=temperature_2m,precipitation_probability,weather_code`
    + `&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max`
    + `&timezone=auto`;
  const r = await fetch(url); return r.json();
}
async function getAQI(lat, lon){
  try{
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=european_aqi,pm10,pm2_5,ozone,nitrogen_dioxide`;
    const r = await fetch(url); return r.json();
  }catch{ return null; }
}

/* ----------------------------------------------------------
   State
   ---------------------------------------------------------- */
const state = { lat: 35.6892, lon: 51.3890, name: 'تهران، ایران' };

/* ----------------------------------------------------------
   Map (Leaflet) + weather overlay layers
   Tiles: free demo key from OpenWeatherMap (rate-limited).
   Replace OWM_KEY with your own key in production.
   ---------------------------------------------------------- */
const OWM_KEY = '9de243494c0b295cca9337e1e96b00e2'; // public demo key
let map, baseTile, overlay, marker;
const overlayUrls = {
  clouds:       `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${OWM_KEY}`,
  precipitation:`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${OWM_KEY}`,
  temp:         `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${OWM_KEY}`,
  wind:         `https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${OWM_KEY}`,
  pressure:     `https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${OWM_KEY}`,
};

function initMap(){
  map = L.map('leafletMap', { zoomControl:true, attributionControl:true })
        .setView([state.lat, state.lon], 5);

  // Dark base tiles (CartoDB)
  baseTile = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap • &copy; CARTO • Weather © OpenWeather',
    subdomains:'abcd', maxZoom:19
  }).addTo(map);

  setOverlay('clouds');
  setMarker(state.lat, state.lon);

  map.on('click', async (e) => {
    const { lat, lng } = e.latlng;
    const rev = await reverseGeo(lat, lng);
    const name = rev ? `${rev.name}${rev.country?'، '+rev.country:''}` : `${lat.toFixed(2)}, ${lng.toFixed(2)}`;
    loadLocation(lat, lng, name);
  });

  document.querySelectorAll('.layer-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      document.querySelectorAll('.layer-btn').forEach(x=>x.classList.remove('is-active'));
      b.classList.add('is-active');
      setOverlay(b.dataset.layer);
    });
  });
}
function setOverlay(key){
  if (overlay) map.removeLayer(overlay);
  overlay = L.tileLayer(overlayUrls[key], { opacity:.75, maxZoom:19 }).addTo(map);
}
function setMarker(lat, lon){
  if (marker) map.removeLayer(marker);
  const icon = L.divIcon({
    className:'',
    html:`<div style="width:18px;height:18px;border-radius:50%;
      background:radial-gradient(circle,#7df9ff,#8b5cf6);
      box-shadow:0 0 0 6px rgba(125,249,255,.25),0 0 20px #7df9ff;"></div>`,
    iconSize:[18,18], iconAnchor:[9,9]
  });
  marker = L.marker([lat,lon],{icon}).addTo(map);
}

/* ----------------------------------------------------------
   Render
   ---------------------------------------------------------- */
function $(id){ return document.getElementById(id); }

async function loadLocation(lat, lon, name){
  state.lat = lat; state.lon = lon; state.name = name;
  $('locName').textContent = name;
  $('chipCoords').textContent = `${lat.toFixed(3)}°, ${lon.toFixed(3)}°`;
  if (map){ map.flyTo([lat,lon], Math.max(map.getZoom(), 7), {duration:1.2}); setMarker(lat,lon); }

  try{
    const [w, aq] = await Promise.all([ getWeather(lat,lon), getAQI(lat,lon) ]);
    renderCurrent(w);
    renderHourly(w);
    renderDaily(w);
    renderAQI(aq);
  }catch(err){ console.error(err); }
}

function renderCurrent(w){
  const c = w.current, d = w.daily;
  const [label, ico] = wmo(c.weather_code);

  $('tempNow').textContent  = Math.round(c.temperature_2m) + '°';
  $('tempFeels').textContent= Math.round(c.apparent_temperature) + '°';
  $('tempMin').textContent  = Math.round(d.temperature_2m_min[0]) + '°';
  $('tempMax').textContent  = Math.round(d.temperature_2m_max[0]) + '°';
  $('chipCondition').textContent = `${ico} ${label}`;
  $('heroIcon').textContent = '';
  $('heroIcon').style.fontSize = '120px';
  $('heroIcon').style.display = 'grid';
  $('heroIcon').style.placeItems = 'center';
  $('heroIcon').textContent = ico;

  $('mHum').textContent   = Math.round(c.relative_humidity_2m) + '%';
  $('mWind').textContent  = Math.round(c.wind_speed_10m) + ' km/h';
  $('mPres').textContent  = Math.round(c.pressure_msl) + ' hPa';
  $('mVis').textContent   = (c.visibility/1000).toFixed(1) + ' km';
  $('mUv').textContent    = (c.uv_index ?? 0).toFixed(1);
  $('mCloud').textContent = Math.round(c.cloud_cover) + '%';

  const now = new Date(c.time);
  $('locTime').textContent = now.toLocaleString('fa-IR', { weekday:'long', hour:'2-digit', minute:'2-digit'});

  // sunrise / sunset
  const sr = new Date(d.sunrise[0]), ss = new Date(d.sunset[0]);
  $('sunrise').textContent = sr.toLocaleTimeString('fa-IR',{hour:'2-digit',minute:'2-digit'});
  $('sunset').textContent  = ss.toLocaleTimeString('fa-IR',{hour:'2-digit',minute:'2-digit'});
  const t = (Date.now() - sr.getTime()) / (ss.getTime() - sr.getTime());
  const pct = Math.max(0, Math.min(1, t));
  const x = 10 + pct * 180, y = 90 - Math.sin(pct * Math.PI) * 80;
  const dot = $('sunDot'); if (dot){ dot.setAttribute('cx', x); dot.setAttribute('cy', y); }
}

function renderHourly(w){
  const host = $('hourly'); host.innerHTML = '';
  const startIdx = w.hourly.time.findIndex(t => new Date(t) >= new Date());
  for (let i = Math.max(0,startIdx); i < Math.min(w.hourly.time.length, startIdx+24); i++){
    const t = new Date(w.hourly.time[i]);
    const [, ico] = wmo(w.hourly.weather_code[i]);
    const el = document.createElement('div'); el.className = 'hour';
    el.innerHTML = `
      <div class="h">${t.getHours().toString().padStart(2,'0')}:00</div>
      <div class="ico">${ico}</div>
      <div class="t">${Math.round(w.hourly.temperature_2m[i])}°</div>
      <div class="p">💧 ${w.hourly.precipitation_probability?.[i] ?? 0}%</div>`;
    host.appendChild(el);
  }
}

function renderDaily(w){
  const host = $('daily'); host.innerHTML = '';
  const d = w.daily;
  const gMin = Math.min(...d.temperature_2m_min);
  const gMax = Math.max(...d.temperature_2m_max);
  for (let i = 0; i < d.time.length; i++){
    const date = new Date(d.time[i]);
    const dayName = i === 0 ? 'امروز' : PERSIAN_DAYS[date.getDay()];
    const [label, ico] = wmo(d.weather_code[i]);
    const min = d.temperature_2m_min[i], max = d.temperature_2m_max[i];
    const left  = ((min - gMin) / (gMax - gMin)) * 100;
    const right = ((gMax - max) / (gMax - gMin)) * 100;
    const row = document.createElement('div'); row.className = 'day';
    row.innerHTML = `
      <div class="name">${dayName}<small>${date.toLocaleDateString('en-CA')}</small></div>
      <div class="ico">${ico}</div>
      <div class="cond">${label}</div>
      <div class="range">
        <span class="min">${Math.round(min)}°</span>
        <div class="bar"><i style="left:${left}%; right:${right}%"></i></div>
        <span class="max">${Math.round(max)}°</span>
      </div>
      <div class="pop">💧 ${d.precipitation_probability_max?.[i] ?? 0}%</div>`;
    host.appendChild(row);
  }
}

function renderAQI(aq){
  if (!aq?.current){ return; }
  const v = aq.current.european_aqi ?? 0;
  const labels = [[20,'عالی'],[40,'خوب'],[60,'متوسط'],[80,'ناسالم'],[100,'بد'],[1e9,'خطرناک']];
  const label = labels.find(([n])=> v <= n)[1];
  $('aqiVal').textContent = Math.round(v);
  $('aqiLabel').textContent = label;
  const ring = $('aqiRing');
  const pct = Math.min(1, v/150);
  ring.setAttribute('stroke-dashoffset', 314 * (1 - pct));
  $('pm25').textContent = (aq.current.pm2_5 ?? 0).toFixed(1);
  $('pm10').textContent = (aq.current.pm10 ?? 0).toFixed(1);
  $('o3').textContent   = (aq.current.ozone ?? 0).toFixed(0);
  $('no2').textContent  = (aq.current.nitrogen_dioxide ?? 0).toFixed(0);
}

/* ----------------------------------------------------------
   Search
   ---------------------------------------------------------- */
const input = $('searchInput'), sBtn = $('searchBtn'), sugg = $('suggest');
let debounce;
input.addEventListener('input', () => {
  clearTimeout(debounce);
  const q = input.value.trim();
  if (q.length < 2){ sugg.hidden = true; return; }
  debounce = setTimeout(async () => {
    const items = await geocode(q);
    if (!items.length){ sugg.hidden = true; return; }
    sugg.innerHTML = items.map(r =>
      `<button data-lat="${r.latitude}" data-lon="${r.longitude}" data-name="${r.name}${r.country?'، '+r.country:''}">
        📍 ${r.name}${r.admin1?'، '+r.admin1:''}${r.country?' — '+r.country:''}
      </button>`).join('');
    sugg.hidden = false;
  }, 250);
});
sugg.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  loadLocation(+b.dataset.lat, +b.dataset.lon, b.dataset.name);
  sugg.hidden = true; input.value = b.dataset.name;
});
sBtn.addEventListener('click', async () => {
  const q = input.value.trim(); if (!q) return;
  const items = await geocode(q);
  if (items[0]){ const r = items[0]; loadLocation(r.latitude, r.longitude, `${r.name}${r.country?'، '+r.country:''}`); sugg.hidden = true; }
});
input.addEventListener('keydown', e => { if (e.key === 'Enter') sBtn.click(); });
document.addEventListener('click', e => { if (!e.target.closest('.search')) sugg.hidden = true; });

/* ----------------------------------------------------------
   Boot
   ---------------------------------------------------------- */
window.addEventListener('DOMContentLoaded', () => {
  initMap();
  loadLocation(state.lat, state.lon, state.name);
  // Try geolocation
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords;
      const rev = await reverseGeo(latitude, longitude);
      const name = rev ? `${rev.name}${rev.country?'، '+rev.country:''}` : 'موقعیت من';
      loadLocation(latitude, longitude, name);
    }, () => {}, { timeout: 4000 });
  }
});

/* ---- Soft anti-copy: warn on right-click & devtools open ---- */
document.addEventListener('contextmenu', e => {
  e.preventDefault();
  console.warn('© طراحی توسط محمدعلی بزازی — کپی‌برداری ممنوع است.');
});
