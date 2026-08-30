/**
 * دربك سالك (Darbak Salik) - Core Application Logic
 * Real-Time Crowdsourced Traffic & Checkpoint Radar for Iraq
 */

// ==========================================
// 1. Initial State & Authentic Iraqi Dataset
// ==========================================

const INITIAL_IRAQ_REPORTS = [
  // --- BAGHDAD (بغداد) ---
  {
    id: "rep-bgd-1",
    city: "baghdad",
    type: "checkpoint",
    severity: "heavy",
    title: "سيطرة الصقور (مدخل بغداد - الأنبار)",
    desc: "طابور شاحنات وسيارات طويل، مسارين فقط مفتوحة والتفتيش بطيء بالسونار.",
    lat: 33.2980,
    lng: 44.2480,
    upvotes: 42,
    resolvedVotes: 3,
    timeAgo: "منذ 4 دقائق",
    author: "كابتن أبو علي"
  },
  {
    id: "rep-bgd-2",
    city: "baghdad",
    type: "checkpoint",
    severity: "smooth",
    title: "سيطرة الشعب (مدخل بغداد الشمالي)",
    desc: "السيطرة سالكة وممتازة، تم فتح 4 مسارات وحركة التفتيش سريعة جداً.",
    lat: 33.4020,
    lng: 44.3850,
    upvotes: 28,
    resolvedVotes: 1,
    timeAgo: "منذ 11 دقيقة",
    author: "أحمد العراقي"
  },
  {
    id: "rep-bgd-3",
    city: "baghdad",
    type: "radar",
    severity: "moderate",
    title: "رادار سريع محمد القاسم (قرب النهضة)",
    desc: "كاميرا مراقبة ذكية جديدة ترصد السرعة الزائدة (حد السرعة 80 كم/س) وعدم ربط الحزام.",
    lat: 33.3440,
    lng: 44.4250,
    upvotes: 65,
    resolvedVotes: 0,
    timeAgo: "منذ 18 دقيقة",
    author: "سجاد التميمي"
  },
  {
    id: "rep-bgd-4",
    city: "baghdad",
    type: "block",
    severity: "heavy",
    title: "جسر السنك (قطع جزئي)",
    desc: "أعمال صيانة وتبديل فواصل التمدد بالجسر باتجاه الرصافة، السير ثقيل جداً يفضل العبور من الجادرية.",
    lat: 33.3275,
    lng: 44.4022,
    upvotes: 51,
    resolvedVotes: 5,
    timeAgo: "منذ 25 دقيقة",
    author: "حسين مهندس"
  },
  {
    id: "rep-bgd-5",
    city: "baghdad",
    type: "fuel",
    severity: "smooth",
    title: "محطة وقود المنصور الحكومية",
    desc: "متوفر بنزين سوبر وبنزين محسن الدفع ببطاقة فيزا/كي كارد أو كاش، لا يوجد طابور حالياً.",
    lat: 33.3105,
    lng: 44.3540,
    upvotes: 34,
    resolvedVotes: 0,
    timeAgo: "منذ 32 دقيقة",
    author: "عمر السامرائي"
  },
  {
    id: "rep-bgd-6",
    city: "baghdad",
    type: "radar",
    severity: "moderate",
    title: "رادار طريق مطار بغداد الدولي",
    desc: "رادارات رصد السرعة شغالة باتجاه ساحة عباس بن فرناس، السرعة القصوى 100 كم/س.",
    lat: 33.2680,
    lng: 44.2950,
    upvotes: 77,
    resolvedVotes: 1,
    timeAgo: "منذ 45 دقيقة",
    author: "محمد الطائي"
  },
  {
    id: "rep-bgd-7",
    city: "baghdad",
    type: "shortcut",
    severity: "smooth",
    title: "دربونة سالكة (تحويلة حي الجامعة / النفق)",
    desc: "لتجنب زحام نفق الشرطة ادخل من فرع جامع ملا حويش تطلع مباشرة على شارع الربيع سالكة تماماً.",
    lat: 33.3280,
    lng: 44.3310,
    upvotes: 39,
    resolvedVotes: 0,
    timeAgo: "منذ ساعة",
    author: "مصطفى درايف"
  },
  {
    id: "rep-bgd-8",
    city: "baghdad",
    type: "traffic",
    severity: "heavy",
    title: "ساحة النسور (أعمال مجسرات)",
    desc: "زحام وتكدس مروري بسبب أعمال تحويل مسار الآليات لمشروع فك الاختناقات.",
    lat: 33.3080,
    lng: 44.3680,
    upvotes: 48,
    resolvedVotes: 2,
    timeAgo: "منذ ساعة",
    author: "ياسر الكرخي"
  },
  {
    id: "rep-bgd-9",
    city: "baghdad",
    type: "checkpoint",
    severity: "moderate",
    title: "سيطرة الرستمية (مخرج بغداد - الكوت)",
    desc: "حركة متوسطة، تدقيق هويات خفيف للسيارات الصالون.",
    lat: 33.2750,
    lng: 44.5120,
    upvotes: 19,
    resolvedVotes: 0,
    timeAgo: "منذ ساعة ونصف",
    author: "كرار الواسطي"
  },

  // --- BASRA (البصرة) ---
  {
    id: "rep-bsr-1",
    city: "basra",
    type: "checkpoint",
    severity: "heavy",
    title: "سيطرة السدرة (مدخل البصرة الشمالي)",
    desc: "تكدس شاحنات وصهاريج، تفتيش أمني دقيق مع زحام لمسافة 1 كم.",
    lat: 30.6800,
    lng: 47.7100,
    upvotes: 29,
    resolvedVotes: 1,
    timeAgo: "منذ 15 دقيقة",
    author: "حيدر البصراوي"
  },
  {
    id: "rep-bsr-2",
    city: "basra",
    type: "radar",
    severity: "moderate",
    title: "رادار شارع الوفود / الكورنيش الجديد",
    desc: "كاميرات مراقبة ورادار ذكي لرصد السرعة واستخدام الهاتف النقال.",
    lat: 30.5180,
    lng: 47.8350,
    upvotes: 44,
    resolvedVotes: 0,
    timeAgo: "منذ نصف ساعة",
    author: "علي شط العرب"
  },
  {
    id: "rep-bsr-3",
    city: "basra",
    type: "fuel",
    severity: "smooth",
    title: "محطة وقود الجزائر الحكومية",
    desc: "بنزين محسن متوفر 24 ساعة، الدفع إلكتروني سريع جداً.",
    lat: 30.5050,
    lng: 47.8200,
    upvotes: 18,
    resolvedVotes: 0,
    timeAgo: "منذ ساعتين",
    author: "وسام العيداني"
  },

  // --- ERBIL (أربيل) ---
  {
    id: "rep-ebl-1",
    city: "erbil",
    type: "radar",
    severity: "heavy",
    title: "رادارات طريق 100 المتر (أربيل)",
    desc: "رادارات نقطة لنقطة (Point to Point) تحسب معدل السرعة (80 كم/س) احذر تجاوز السرعة.",
    lat: 36.1980,
    lng: 44.0150,
    upvotes: 56,
    resolvedVotes: 0,
    timeAgo: "منذ 20 دقيقة",
    author: "ريبين سوران"
  },
  {
    id: "rep-ebl-2",
    city: "erbil",
    type: "checkpoint",
    severity: "smooth",
    title: "سيطرة شيراوا (مدخل أربيل - كركوك)",
    desc: "إجراءات الدخول سريعة وانسيابية جداً عبر البوابات الإلكترونية.",
    lat: 36.0800,
    lng: 44.0200,
    upvotes: 31,
    resolvedVotes: 0,
    timeAgo: "منذ 40 دقيقة",
    author: "ديار هولير"
  },

  // --- NAJAF & KARBALA (النجف وكربلاء) ---
  {
    id: "rep-njf-1",
    city: "najaf",
    type: "traffic",
    severity: "smooth",
    title: "طريق يا حسين (النجف - كربلاء)",
    desc: "الطريق سالك تماماً وسرعة الحركة ممتازة مع توفر دوريات النجدة.",
    lat: 32.1200,
    lng: 44.3100,
    upvotes: 37,
    resolvedVotes: 0,
    timeAgo: "منذ 30 دقيقة",
    author: "مهدي الموسوي"
  },
  {
    id: "rep-krb-1",
    city: "karbala",
    type: "checkpoint",
    severity: "moderate",
    title: "سيطرة الوند (مدخل كربلاء من بغداد)",
    desc: "تدقيق باجات وهويات للمركبات الكبيرة، الصالون مسارهم سريع.",
    lat: 32.7200,
    lng: 44.1100,
    upvotes: 23,
    resolvedVotes: 1,
    timeAgo: "منذ 50 دقيقة",
    author: "أبو منتظر"
  },

  // --- MOSUL (الموصل) ---
  {
    id: "rep-msl-1",
    city: "mosul",
    type: "checkpoint",
    severity: "smooth",
    title: "سيطرة العقرب (مدخل الموصل الجنوبي)",
    desc: "مفتوحة وسالكة بدون أي معوقات أو تأخير.",
    lat: 36.2500,
    lng: 43.1500,
    upvotes: 21,
    resolvedVotes: 0,
    timeAgo: "منذ ساعة",
    author: "يوسف النينوي"
  },

  // --- BABIL (بابل) ---
  {
    id: "rep-bbl-1",
    city: "babil",
    type: "traffic",
    severity: "heavy",
    title: "سيطرة الآثار (مدخل الحلة الشمالي)",
    desc: "زحام متكرر بسبب تفتيش السونار، المسار بطيء.",
    lat: 32.5500,
    lng: 44.4100,
    upvotes: 19,
    resolvedVotes: 0,
    timeAgo: "منذ 35 دقيقة",
    author: "ضرغام البابلي"
  }
];

// App State
const state = {
  currentCity: "baghdad",
  activeCategory: "all",
  searchQuery: "",
  reports: [],
  userUpvoted: new Set(),
  userResolved: new Set(),
  soundEnabled: true,
  currentTileIndex: 0,
  pickedCoords: { lat: 33.3152, lng: 44.3661 },
  map: null,
  markersLayer: null,
  userLocationMarker: null
};

// Map Tile Providers (100% Free OpenSource Tiles)
const TILE_LAYERS = [
  {
    name: "Dark Matter (ليلي داكن)",
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://openstreetmap.org">OSM</a>'
  },
  {
    name: "Voyager (نهاري عصري)",
    url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://openstreetmap.org">OSM</a>'
  },
  {
    name: "OpenStreetMap (الافتراضي)",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
  }
];

// Sound Synthesizer via Web Audio API (Zero external mp3 dependencies)
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
  }

  playRadarBeep() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, this.ctx.currentTime); // A5 note
      osc.frequency.exponentialRampToValueAtTime(1760, this.ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch (e) {
      console.log("Audio not allowed yet:", e);
    }
  }

  playSuccessChime() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C chord
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;

        gain.gain.setValueAtTime(0.1, this.ctx.currentTime + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.06 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.06);
        osc.stop(this.ctx.currentTime + idx * 0.06 + 0.25);
      });
    } catch (e) {}
  }
}

const sfx = new SoundFX();

// ==========================================
// 2. DOM Elements & Initialization
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  loadSavedState();
  initMap();
  initEventHandlers();
  renderCounters();
  renderFeed();
  startLiveSimulationTicker();
});

function loadSavedState() {
  // Load user reports from localStorage or fallback to defaults
  const savedReports = localStorage.getItem("darbak_reports_v1");
  if (savedReports) {
    try {
      state.reports = JSON.parse(savedReports);
    } catch (e) {
      state.reports = [...INITIAL_IRAQ_REPORTS];
    }
  } else {
    state.reports = [...INITIAL_IRAQ_REPORTS];
    localStorage.setItem("darbak_reports_v1", JSON.stringify(state.reports));
  }

  const savedUpvotes = localStorage.getItem("darbak_upvoted");
  if (savedUpvotes) {
    try {
      state.userUpvoted = new Set(JSON.parse(savedUpvotes));
    } catch (e) {}
  }

  const savedResolved = localStorage.getItem("darbak_resolved");
  if (savedResolved) {
    try {
      state.userResolved = new Set(JSON.parse(savedResolved));
    } catch (e) {}
  }
}

function saveState() {
  localStorage.setItem("darbak_reports_v1", JSON.stringify(state.reports));
  localStorage.setItem("darbak_upvoted", JSON.stringify([...state.userUpvoted]));
  localStorage.setItem("darbak_resolved", JSON.stringify([...state.userResolved]));
}

// ==========================================
// 3. Leaflet Map Setup & Markers
// ==========================================

function initMap() {
  // Center initially on Baghdad
  state.map = L.map("map", {
    zoomControl: true,
    attributionControl: true
  }).setView([33.3152, 44.3661], 12);

  // Set Default Tile Layer
  state.tileLayer = L.tileLayer(TILE_LAYERS[0].url, {
    maxZoom: 19,
    attribution: TILE_LAYERS[0].attribution
  }).addTo(state.map);

  // Layer group for all traffic pins
  state.markersLayer = L.layerGroup().addTo(state.map);

  // Map Click Listener for setting custom report location
  state.map.on("click", (e) => {
    state.pickedCoords = { lat: e.latlng.lat, lng: e.latlng.lng };
    updateReportModalCoords(e.latlng.lat, e.latlng.lng, "تم تحديد النقطة على الخريطة بنجاح");
    sfx.playRadarBeep();
  });

  renderMarkers();
}

function createCustomIcon(report) {
  const typeIcons = {
    checkpoint: "fa-shield-halved",
    radar: "fa-camera",
    block: "fa-ban",
    traffic: "fa-car-burst",
    fuel: "fa-gas-pump",
    shortcut: "fa-route"
  };

  const iconClass = typeIcons[report.type] || "fa-location-dot";
  const pinTypeClass = `pin-${report.type}`;

  const html = `
    <div class="custom-radar-pin ${pinTypeClass}">
      <span class="pin-pulse"></span>
      <div class="pin-icon-box">
        <i class="fa-solid ${iconClass}"></i>
      </div>
    </div>
  `;

  return L.divIcon({
    html: html,
    className: "custom-leaflet-marker",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
  });
}

function createPopupContent(report) {
  const typeLabels = {
    checkpoint: "🚨 سيطرة أمنية",
    radar: "📷 رادار / كاميرا",
    block: "⛔ قطع مروري",
    traffic: "🚗 زحام / حادث",
    fuel: "⛽ محطة وقود",
    shortcut: "🛣️ دربونة سالكة"
  };

  const isUpvoted = state.userUpvoted.has(report.id);
  const isResolved = state.userResolved.has(report.id);

  return `
    <div class="popup-container">
      <div class="popup-header">
        <span class="card-tag tag-${report.type}">${typeLabels[report.type] || "بلاغ"}</span>
        <span class="card-time">${report.timeAgo}</span>
      </div>
      <h4 class="popup-title">${escapeHTML(report.title)}</h4>
      <p class="popup-desc">${escapeHTML(report.desc || "لا توجد ملاحظة إضافية")}</p>
      <div class="popup-actions">
        <button class="popup-btn ${isUpvoted ? 'action-btn-mini upvoted' : ''}" onclick="window.handleUpvote('${report.id}')">
          <i class="fa-solid fa-thumbs-up"></i> تأكيد (${report.upvotes})
        </button>
        <button class="popup-btn popup-btn-share" onclick="window.openShareModal('${report.id}')">
          <i class="fa-solid fa-share-nodes"></i> مشاركة
        </button>
      </div>
    </div>
  `;
}

function renderMarkers() {
  state.markersLayer.clearLayers();

  const filtered = getFilteredReports();

  filtered.forEach(report => {
    const icon = createCustomIcon(report);
    const marker = L.marker([report.lat, report.lng], { icon: icon });
    marker.bindPopup(createPopupContent(report));
    state.markersLayer.addLayer(marker);
  });
}

function getFilteredReports() {
  return state.reports.filter(report => {
    // City filter
    if (state.currentCity !== "all" && report.city !== state.currentCity) {
      // Optional: keep city loose if search is active
      if (!state.searchQuery) return false;
    }

    // Category filter
    if (state.activeCategory !== "all" && report.type !== state.activeCategory) {
      return false;
    }

    // Search query
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = report.title.toLowerCase().includes(q);
      const matchDesc = (report.desc || "").toLowerCase().includes(q);
      if (!matchTitle && !matchDesc) return false;
    }

    return true;
  });
}

// ==========================================
// 4. Feed & Drawer Rendering
// ==========================================

function renderFeed() {
  const feedContainer = document.getElementById("feedContent");
  const filtered = getFilteredReports();

  if (filtered.length === 0) {
    feedContainer.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-road-circle-check" style="font-size: 2rem; margin-bottom: 0.5rem; color: var(--accent-cyan);"></i>
        <p style="font-size: 0.85rem; font-weight: 700;">لا توجد بلاغات تطابق البحث في هذه المنطقة</p>
        <p style="font-size: 0.75rem;">طريقك سالك أو كن أول من يبلّغ!</p>
      </div>
    `;
    return;
  }

  const typeLabels = {
    checkpoint: "🚨 سيطرة أمنية",
    radar: "📷 رادار / كاميرا",
    block: "⛔ قطع مروري",
    traffic: "🚗 زحام / حادث",
    fuel: "⛽ محطة وقود",
    shortcut: "🛣️ دربونة سالكة"
  };

  const severityLabels = {
    smooth: '<span class="status-pill text-green">🟢 سالك</span>',
    moderate: '<span class="status-pill" style="color: var(--sev-yellow)">🟡 بطيء</span>',
    heavy: '<span class="status-pill" style="color: var(--sev-red)">🔴 متوقف / خانق</span>'
  };

  feedContainer.innerHTML = filtered.map(item => {
    const isUpvoted = state.userUpvoted.has(item.id);
    return `
      <div class="feed-card" onclick="window.flyToReport(${item.lat}, ${item.lng})">
        <div class="card-top">
          <span class="card-tag tag-${item.type}">${typeLabels[item.type] || "بلاغ"}</span>
          <span class="card-time"><i class="fa-regular fa-clock"></i> ${item.timeAgo}</span>
        </div>
        <h4 class="card-title">${escapeHTML(item.title)}</h4>
        <p class="card-desc">${escapeHTML(item.desc || "")}</p>
        <div class="card-footer">
          <div>${severityLabels[item.severity] || ""}</div>
          <div class="card-actions-mini" onclick="event.stopPropagation()">
            <button class="action-btn-mini ${isUpvoted ? 'upvoted' : ''}" onclick="window.handleUpvote('${item.id}')" title="تأكيد صحة البلاغ">
              <i class="fa-solid fa-thumbs-up"></i> ${item.upvotes}
            </button>
            <button class="action-btn-mini" onclick="window.openShareModal('${item.id}')" title="مشاركة">
              <i class="fa-solid fa-share-nodes"></i>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function renderCounters() {
  const total = state.reports.length;
  document.getElementById("totalMarkersCount").textContent = total;

  const counts = {
    checkpoint: 0,
    radar: 0,
    block: 0,
    traffic: 0,
    fuel: 0,
    shortcut: 0
  };

  const cityCounts = {
    baghdad: 0,
    basra: 0,
    erbil: 0,
    najaf: 0,
    karbala: 0,
    mosul: 0,
    sulaymaniyah: 0,
    babil: 0
  };

  state.reports.forEach(r => {
    if (counts[r.type] !== undefined) counts[r.type]++;
    if (cityCounts[r.city] !== undefined) cityCounts[r.city]++;
  });

  document.getElementById("count-type-checkpoint").textContent = counts.checkpoint;
  document.getElementById("count-type-radar").textContent = counts.radar;
  document.getElementById("count-type-block").textContent = counts.block;
  document.getElementById("count-type-traffic").textContent = counts.traffic;
  document.getElementById("count-type-fuel").textContent = counts.fuel;

  // City counts in dropdown
  Object.keys(cityCounts).forEach(c => {
    const el = document.getElementById(`count-${c}`);
    if (el) el.textContent = `${cityCounts[c]} بلاغ`;
  });

  const activeLabel = document.getElementById("activeReportsLabel");
  if (activeLabel) {
    activeLabel.innerHTML = `<strong>${total}</strong> حدث نشط الآن في العراق`;
  }
}

// ==========================================
// 5. User Interaction & Event Handlers
// ==========================================

function initEventHandlers() {
  // City Dropdown Toggle
  const cityDropdownBtn = document.getElementById("cityDropdownBtn");
  const cityDropdownMenu = document.getElementById("cityDropdownMenu");

  cityDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    cityDropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    cityDropdownMenu.classList.remove("show");
  });

  // City Options Click
  document.querySelectorAll(".city-opt").forEach(opt => {
    opt.addEventListener("click", () => {
      document.querySelectorAll(".city-opt").forEach(o => o.classList.remove("active"));
      opt.classList.add("active");

      const city = opt.getAttribute("data-city");
      const lat = parseFloat(opt.getAttribute("data-lat"));
      const lng = parseFloat(opt.getAttribute("data-lng"));
      const zoom = parseInt(opt.getAttribute("data-zoom"));

      state.currentCity = city;
      document.getElementById("currentCityName").textContent = opt.querySelector("span").textContent.split(" ")[1] || opt.querySelector("span").textContent;

      state.map.flyTo([lat, lng], zoom, { duration: 1.2 });
      state.pickedCoords = { lat, lng };
      updateReportModalCoords(lat, lng, `تم التحديد على مركز ${state.currentCity}`);

      renderMarkers();
      renderFeed();
      sfx.playRadarBeep();
    });
  });

  // Category Filter Pills
  document.querySelectorAll(".pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      state.activeCategory = btn.getAttribute("data-category");
      renderMarkers();
      renderFeed();
      sfx.playRadarBeep();
    });
  });

  // Search Input
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim();
    clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
    renderMarkers();
    renderFeed();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    clearSearchBtn.style.display = "none";
    renderMarkers();
    renderFeed();
  });

  // Locate Me Button (Geolocation)
  const locateMeBtn = document.getElementById("locateMeBtn");
  locateMeBtn.addEventListener("click", getUserLocation);

  // Modal Open / Close
  const openReportModalBtn = document.getElementById("openReportModalBtn");
  const fabReportBtn = document.getElementById("fabReportBtn");
  const reportModal = document.getElementById("reportModal");
  const closeReportModalBtn = document.getElementById("closeReportModalBtn");
  const cancelReportBtn = document.getElementById("cancelReportBtn");

  const openModal = () => {
    reportModal.classList.add("open");
    sfx.playRadarBeep();
  };

  const closeModal = () => {
    reportModal.classList.remove("open");
  };

  openReportModalBtn.addEventListener("click", openModal);
  fabReportBtn.addEventListener("click", openModal);
  closeReportModalBtn.addEventListener("click", closeModal);
  cancelReportBtn.addEventListener("click", closeModal);

  reportModal.addEventListener("click", (e) => {
    if (e.target === reportModal) closeModal();
  });

  // Location Picker Mode in Form
  const pickCurrentGpsBtn = document.getElementById("pickCurrentGpsBtn");
  const pickOnMapBtn = document.getElementById("pickOnMapBtn");

  pickCurrentGpsBtn.addEventListener("click", () => {
    pickCurrentGpsBtn.classList.add("active");
    pickOnMapBtn.classList.remove("active");
    getUserLocation();
  });

  pickOnMapBtn.addEventListener("click", () => {
    pickOnMapBtn.classList.add("active");
    pickCurrentGpsBtn.classList.remove("active");
    closeModal();
    alert("📍 انقر على أي نقطة في الشارع المطلوب على الخريطة لتحديده!");
  });

  // New Report Form Submit
  const newReportForm = document.getElementById("newReportForm");
  newReportForm.addEventListener("submit", handleReportSubmit);

  // Drawer Toggle (Mobile & Desktop)
  const drawerHandle = document.getElementById("drawerHandle");
  const toggleDrawerBtn = document.getElementById("toggleDrawerBtn");
  const feedDrawer = document.getElementById("feedDrawer");

  const toggleDrawer = () => {
    feedDrawer.classList.toggle("collapsed");
  };

  drawerHandle.addEventListener("click", toggleDrawer);
  toggleDrawerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDrawer();
  });

  // Toggle Map Tiles (Layer Button)
  const toggleLayerBtn = document.getElementById("toggleLayerBtn");
  toggleLayerBtn.addEventListener("click", () => {
    state.currentTileIndex = (state.currentTileIndex + 1) % TILE_LAYERS.length;
    const newTile = TILE_LAYERS[state.currentTileIndex];

    state.map.removeLayer(state.tileLayer);
    state.tileLayer = L.tileLayer(newTile.url, {
      maxZoom: 19,
      attribution: newTile.attribution
    }).addTo(state.map);

    sfx.playRadarBeep();
  });

  // Sound Toggle Button
  const soundToggleBtn = document.getElementById("soundToggleBtn");
  soundToggleBtn.addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    soundToggleBtn.innerHTML = state.soundEnabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark" style="color: #f87171;"></i>';
    if (state.soundEnabled) sfx.playRadarBeep();
  });

  // Refresh Feed Button
  const refreshFeedBtn = document.getElementById("refreshFeedBtn");
  refreshFeedBtn.addEventListener("click", () => {
    refreshFeedBtn.querySelector("i").classList.add("fa-spin");
    setTimeout(() => {
      refreshFeedBtn.querySelector("i").classList.remove("fa-spin");
      renderMarkers();
      renderFeed();
      sfx.playSuccessChime();
    }, 600);
  });

  // Ticker items click -> Fly to bridge
  document.querySelectorAll(".ticker-item").forEach(item => {
    item.addEventListener("click", () => {
      const coords = item.getAttribute("data-target");
      if (coords) {
        const [lat, lng] = coords.split(",").map(Number);
        state.map.flyTo([lat, lng], 15, { duration: 1.5 });
        sfx.playRadarBeep();
      }
    });
  });

  // Share Modal Close
  const shareModal = document.getElementById("shareModal");
  const closeShareModalBtn = document.getElementById("closeShareModalBtn");
  closeShareModalBtn.addEventListener("click", () => shareModal.classList.remove("open"));
  shareModal.addEventListener("click", (e) => {
    if (e.target === shareModal) shareModal.classList.remove("open");
  });
}

function updateReportModalCoords(lat, lng, label) {
  document.getElementById("reportLat").value = lat.toFixed(5);
  document.getElementById("reportLng").value = lng.toFixed(5);
  document.getElementById("coordsText").textContent = label || `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
}

function getUserLocation() {
  if (!navigator.geolocation) {
    alert("⚠️ متصفحك لا يدعم تحديد الموقع الجغرافي (GPS).");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      state.pickedCoords = { lat, lng };

      state.map.flyTo([lat, lng], 15, { duration: 1.2 });

      if (state.userLocationMarker) {
        state.map.removeLayer(state.userLocationMarker);
      }

      // Create glowing user pulse marker
      const userIcon = L.divIcon({
        html: `
          <div style="position:relative; width:24px; height:24px; display:flex; align-items:center; justify-content:center;">
            <span style="position:absolute; width:100%; height:100%; border-radius:50%; background:#38bdf8; opacity:0.6; animation:radarWave 1.5s infinite;"></span>
            <span style="width:14px; height:14px; border-radius:50%; background:#0284c7; border:3px solid #fff; box-shadow:0 0 10px #38bdf8;"></span>
          </div>
        `,
        className: "",
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      state.userLocationMarker = L.marker([lat, lng], { icon: userIcon }).addTo(state.map);
      state.userLocationMarker.bindPopup("<strong>📍 أنت هنا الآن</strong>").openPopup();

      updateReportModalCoords(lat, lng, "تم تحديد موقعك بدقة عبر الـ GPS");
      sfx.playSuccessChime();
    },
    (err) => {
      console.warn("GPS error:", err);
      alert("تعذر الوصول لموقعك الحالي. تأكد من تفعيل خدمة الموقع (GPS) في هاتفك.");
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

function handleReportSubmit(e) {
  e.preventDefault();

  const reportType = document.querySelector('input[name="reportType"]:checked').value;
  const severity = document.querySelector('input[name="severity"]:checked').value;
  const title = document.getElementById("reportTitle").value.trim();
  const note = document.getElementById("reportNote").value.trim();
  const lat = parseFloat(document.getElementById("reportLat").value) || state.pickedCoords.lat;
  const lng = parseFloat(document.getElementById("reportLng").value) || state.pickedCoords.lng;

  if (!title) {
    alert("يرجى كتابة اسم الشارع أو السيطرة.");
    return;
  }

  const newReport = {
    id: "rep-user-" + Date.now(),
    city: state.currentCity,
    type: reportType,
    severity: severity,
    title: title,
    desc: note,
    lat: lat,
    lng: lng,
    upvotes: 1,
    resolvedVotes: 0,
    timeAgo: "الآن",
    author: "سائق متصل"
  };

  state.reports.unshift(newReport);
  state.userUpvoted.add(newReport.id);
  saveState();

  renderCounters();
  renderMarkers();
  renderFeed();

  // Close modal & Fly to new marker
  document.getElementById("reportModal").classList.remove("open");
  newReportForm.reset();
  state.map.flyTo([lat, lng], 15, { duration: 1 });

  sfx.playSuccessChime();
}

// Global Window Helpers
window.flyToReport = function(lat, lng) {
  state.map.flyTo([lat, lng], 15, { duration: 1.2 });
  sfx.playRadarBeep();
};

window.handleUpvote = function(reportId) {
  const report = state.reports.find(r => r.id === reportId);
  if (!report) return;

  if (state.userUpvoted.has(reportId)) {
    state.userUpvoted.delete(reportId);
    report.upvotes = Math.max(0, report.upvotes - 1);
  } else {
    state.userUpvoted.add(reportId);
    report.upvotes += 1;
    sfx.playSuccessChime();
  }

  saveState();
  renderMarkers();
  renderFeed();
};

window.openShareModal = function(reportId) {
  const report = state.reports.find(r => r.id === reportId);
  if (!report) return;

  const typeNames = {
    checkpoint: "🚨 سيطرة أمنية",
    radar: "📷 كاميرا رادار",
    block: "⛔ قطع مروري",
    traffic: "🚗 زحام خانق",
    fuel: "⛽ محطة وقود",
    shortcut: "🛣️ دربونة سالكة"
  };

  const shareText = `🚗 تنبيه مروري من تطبيق دربك سالك:\n\n📍 ${report.title} (${typeNames[report.type] || 'بلاغ'})\n📝 التفاصيل: ${report.desc || 'طريق سالك/مزدحم'}\n⏰ التوقيت: ${report.timeAgo}\n\nتابع حالة شوارع وسيطرات العراق لحظة بلحظة على الرابط:\n${window.location.href}`;

  document.getElementById("sharePreviewText").textContent = shareText;

  // WhatsApp
  document.getElementById("shareWhatsappBtn").onclick = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank");
  };

  // Telegram
  document.getElementById("shareTelegramBtn").onclick = () => {
    const url = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(shareText)}`;
    window.open(url, "_blank");
  };

  // Copy
  document.getElementById("copyShareTextBtn").onclick = () => {
    navigator.clipboard.writeText(shareText).then(() => {
      alert("✅ تم نسخ نص البلاغ إلى الحافظة!");
    });
  };

  document.getElementById("shareModal").classList.add("open");
  sfx.playRadarBeep();
};

function escapeHTML(str) {
  return (str || "").replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}

// Live Driver Count & Real-time Ticker Simulation
function startLiveSimulationTicker() {
  setInterval(() => {
    const driverCountEl = document.getElementById("onlineDriversCount");
    if (driverCountEl) {
      const current = parseInt(driverCountEl.textContent.replace(/,/g, "")) || 1420;
      const variation = Math.floor(Math.random() * 7) - 3;
      driverCountEl.textContent = (current + variation).toLocaleString();
    }
  }, 4000);
}
