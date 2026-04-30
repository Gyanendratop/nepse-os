// worker/worker.js — Nepse OS Autonomous AI
const TEN_Y = {
  "NABIL": { symbol: "NABIL", name: "Nabil Bank Limited", cagr_revenue: 12.5, cagr_profit: 10.2, avg_roe: 15.3, avg_dividend: 3.1, verdict_en: "Consistent performer.", verdict_ne: "लगातारको प्रदर्शनकर्ता।" },
  "NTC": { symbol: "NTC", name: "Nepal Doorsanchar Company Ltd.", cagr_revenue: 2.1, cagr_profit: -1.5, avg_roe: 8.7, avg_dividend: 4.5, verdict_en: "Slow growth, high dividend.", verdict_ne: "ढिलो वृद्धि, उच्च लाभांश।" },
  "CHILIME": { symbol: "CHILIME", name: "Chilime Hydropower Co. Ltd.", cagr_revenue: 8.3, cagr_profit: 9.1, avg_roe: 18.4, avg_dividend: 2.8, verdict_en: "Steady hydro income.", verdict_ne: "स्थिर जलविद्युत आय।" },
  "SHIVAM": { symbol: "SHIVAM", name: "Shivam Cements Ltd.", cagr_revenue: 15.2, cagr_profit: 22.1, avg_roe: 21.3, avg_dividend: 1.5, verdict_en: "Fast grower, lower div.", verdict_ne: "द्रुत वृद्धि, कम लाभांश।" },
  "NIBL": { symbol: "NIBL", name: "Nepal Investment Bank Ltd.", cagr_revenue: 10.8, cagr_profit: 11.3, avg_roe: 14.2, avg_dividend: 3.0, verdict_en: "Solid banking franchise.", verdict_ne: "बलियो बैंकिङ फ्रेन्चाइज।" },
  "PRVU": { symbol: "PRVU", name: "Prabhu Bank Ltd.", cagr_revenue: 13.1, cagr_profit: 14.8, avg_roe: 12.5, avg_dividend: 2.2, verdict_en: "Growing aggressively.", verdict_ne: "आक्रामक रूपमा बढ्दै।" },
  "GBIME": { symbol: "GBIME", name: "Global IME Bank Ltd.", cagr_revenue: 11.7, cagr_profit: 11.9, avg_roe: 13.8, avg_dividend: 2.9, verdict_en: "Strong IME network.", verdict_ne: "बलियो आइएमई नेटवर्क।" },
  "SBL": { symbol: "SBL", name: "Siddhartha Bank Ltd.", cagr_revenue: 9.8, cagr_profit: 9.5, avg_roe: 13.1, avg_dividend: 3.2, verdict_en: "Stable mid-tier bank.", verdict_ne: "स्थिर मध्यमस्तर बैंक।" },
  "EBL": { symbol: "EBL", name: "Everest Bank Ltd.", cagr_revenue: 10.3, cagr_profit: 10.1, avg_roe: 14.0, avg_dividend: 3.0, verdict_en: "Everest-brand trust.", verdict_ne: "एभरेष्ट ब्रान्ड विश्वास।" },
  "HBL": { symbol: "HBL", name: "Himalayan Bank Ltd.", cagr_revenue: 8.5, cagr_profit: 8.2, avg_roe: 12.1, avg_dividend: 2.7, verdict_en: "Steady conservative bank.", verdict_ne: "स्थिर रुढीवादी बैंक।" },
  "ADBL": { symbol: "ADBL", name: "Agricultural Development Bank Ltd.", cagr_revenue: 7.6, cagr_profit: 6.9, avg_roe: 10.5, avg_dividend: 2.0, verdict_en: "Social mandate, moderate.", verdict_ne: "सामाजिक जिम्मेवारी, मध्यम।" },
  "KRBL": { symbol: "KRBL", name: "Kumari Bank Ltd.", cagr_revenue: 9.2, cagr_profit: 8.8, avg_roe: 12.8, avg_dividend: 2.5, verdict_en: "Growing with Kumari brand.", verdict_ne: "कुमारी ब्रान्डसँग बढ्दै।" },
  "SANIMA": { symbol: "SANIMA", name: "Sanima Bank Ltd.", cagr_revenue: 12.0, cagr_profit: 13.1, avg_roe: 15.0, avg_dividend: 2.4, verdict_en: "Strong corporate ties.", verdict_ne: "बलियो कर्पोरेट सम्बन्ध।" },
  "NICA": { symbol: "NICA", name: "NIC Asia Bank Ltd.", cagr_revenue: 11.1, cagr_profit: 10.9, avg_roe: 13.5, avg_dividend: 2.8, verdict_en: "Well-managed Asia focus.", verdict_ne: "राम्रोसँग व्यवस्थित एसिया फोकस।" },
  "MBL": { symbol: "MBL", name: "Machhapuchchhre Bank Ltd.", cagr_revenue: 8.9, cagr_profit: 9.0, avg_roe: 12.3, avg_dividend: 2.6, verdict_en: "Pokhara-based steady.", verdict_ne: "पोखरा आधारित स्थिर।" },
  "JBL": { symbol: "JBL", name: "Janata Bank Nepal Ltd.", cagr_revenue: 6.3, cagr_profit: 5.7, avg_roe: 9.8, avg_dividend: 1.8, verdict_en: "Public sector, modest.", verdict_ne: "सार्वजनिक क्षेत्र, मध्यम।" },
  "NMB": { symbol: "NMB", name: "NMB Bank Ltd.", cagr_revenue: 10.2, cagr_profit: 10.5, avg_roe: 13.7, avg_dividend: 2.9, verdict_en: "Good retail presence.", verdict_ne: "राम्रो खुद्रा उपस्थिति।" },
  "SCB": { symbol: "SCB", name: "Standard Chartered Bank Nepal Ltd.", cagr_revenue: 5.5, cagr_profit: 6.2, avg_roe: 16.1, avg_dividend: 4.0, verdict_en: "Premium brand, high ROE.", verdict_ne: "प्रिमियम ब्रान्ड, उच्च आरओई।" },
  "CBL": { symbol: "CBL", name: "Citizens Bank International Ltd.", cagr_revenue: 9.0, cagr_profit: 8.7, avg_roe: 11.9, avg_dividend: 2.3, verdict_en: "Newer bank, growing.", verdict_ne: "नयाँ बैंक, बढ्दै।" },
  "SHINE": { symbol: "SHINE", name: "Shine Resunga Development Bank Ltd.", cagr_revenue: 12.3, cagr_profit: 13.0, avg_roe: 14.8, avg_dividend: 1.9, verdict_en: "Fastest dev bank.", verdict_ne: "सबभन्दा छिटो विकास बैंक।" }
};

function computeEmotion(nepse) {
  if (!nepse) return 50;
  const adv = nepse.advance ?? 0;
  const dec = nepse.decline ?? 0;
  const ratio = adv / (dec || 1);
  const avgVol = nepse.avg_volume_20d ?? nepse.volume ?? 1;
  const volRatio = (nepse.volume || 0) / (avgVol || 1);
  const buzz = 0.5;
  let score = (ratio * 25) + ((volRatio - 1) * 30) + (buzz * 20) + 25;
  return Math.min(100, Math.max(0, Math.round(score)));
}

function generatePredictions(marketData) {
  const emotion = computeEmotion(marketData);
  let pred_en = "", poster_en = "", pred_ne = "", poster_ne = "";
  if (emotion > 60) {
    pred_en = "Market is greedy. Caution ahead.";
    poster_en = "The herd is hungry — but the plate is almost empty.";
    pred_ne = "बजार लोभी छ। सावधानी अपनाउनुहोस्।";
    poster_ne = "भीड भोकाएको छ — तर थाल लगभग खाली छ।";
  } else if (emotion < 40) {
    pred_en = "Fear grips the market. Opportunities may emerge.";
    poster_en = "When everyone is running away, the path forward is wide open.";
    pred_ne = "बजारमा डर छ। अवसरहरू देखा पर्न सक्छन्।";
    poster_ne = "जब सबै भागिरहेका छन्, अगाडिको बाटो खुला छ।";
  } else {
    pred_en = "Neutral sentiment. No clear direction.";
    poster_en = "Sideways markets make millionaires slowly — or break impatient hands.";
    pred_ne = "तटस्थ भावना। स्पष्ट दिशा छैन।";
    poster_ne = "साइडवेज बजारले धनीहरू बिस्तारै बनाउँछ — वा अधीर हातहरू तोड्छ।";
  }
  const topGainer = marketData?.topGainers?.[0]?.symbol || "NABIL";
  const ten = TEN_Y[topGainer] || TEN_Y["NABIL"];
  return {
    prediction_en: pred_en,
    poster_en,
    prediction_ne: pred_ne,
    poster_ne,
    ten_summary_en: ten?.verdict_en || "",
    ten_summary_ne: ten?.verdict_ne || "",
    symbol: topGainer,
    emotion_index: emotion
  };
}

async function publishPrediction(prediction, marketData) {
  const idx = marketData?.index?.value || 2000;
  const chg = marketData?.index?.percent || 0;
  const enText = `${prediction.poster_en}\n\nNEPSE: ${idx} (${chg>0?'+':''}${chg.toFixed(2)}%) — Fear/Greed: ${prediction.emotion_index}\n10Y check (${prediction.symbol}): ${prediction.ten_summary_en}`;
  const neText = `${prediction.poster_ne}\n\nनेप्से: ${idx} (${chg>0?'+':''}${chg.toFixed(2)}%) — डर/लोभ: ${prediction.emotion_index}\n१० वर्षे जाँच (${prediction.symbol}): ${prediction.ten_summary_ne}`;
  await sendTelegram(neText);
  await sendFacebook(enText);
  return { en: enText, ne: neText };
}

async function sendTelegram(text) {
  const token = TELEGRAM_BOT_TOKEN;
  const chatId = TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' })
  });
}

async function sendFacebook(text) {
  const token = FB_PAGE_ACCESS_TOKEN;
  const pageId = FB_PAGE_ID;
  if (!token || !pageId) return;
  await fetch(`https://graph.facebook.com/${pageId}/feed`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ message: text, access_token: token })
  });
}

async function fetchNepseLive() {
  try {
    const resp = await fetch('https://www.nepalstock.com.np/api/nots/nepse-data/live', {
      headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' }
    });
    if (!resp.ok) throw new Error('NEPSE down');
    return await resp.json();
  } catch (e) { return null; }
}

function normalizeNepse(raw) {
  if (!raw) return { index: {}, turnover: 0, volume: 0, advance: 0, decline: 0, topGainers: [], topLosers: [] };
  return {
    index: { value: raw.indexValue || 0, change: raw.change || 0, percent: raw.percentChange || 0, high: raw.high || 0, low: raw.low || 0, turnover: raw.totalTurnover || 0, volume: raw.totalVolume || 0 },
    turnover: raw.totalTurnover || 0,
    volume: raw.totalVolume || 0,
    advance: raw.advanceCount || 0,
    decline: raw.declineCount || 0,
    topGainers: (raw.topGainers || []).slice(0,5).map(s => ({ symbol: s.symbol, ltp: s.ltp, percent: s.percentChange })),
    topLosers: (raw.topLosers || []).slice(0,5).map(s => ({ symbol: s.symbol, ltp: s.ltp, percent: s.percentChange }))
  };
}

function getWorldMarkets() {
  return { sp500: 4500.12, nasdaq: 14320.45, dow: 35100.78, gold: 1950.30, crude: 82.5, usdnpr: 133.5 };
}

async function updateLiveData() {
  const raw = await fetchNepseLive();
  const nepse = normalizeNepse(raw);
  const world = getWorldMarkets();
  const emotion = computeEmotion(nepse);
  const liveState = { nepse, world, emotion_index: emotion, timestamp: Date.now() };
  await NEPSE_KV.put('live_state', JSON.stringify(liveState), { expirationTtl: 90 });
}

async function dailyPrediction() {
  const rawState = await NEPSE_KV.get('live_state', 'json') || { nepse: {}, world: getWorldMarkets() };
  const prediction = generatePredictions(rawState.nepse);
  await NEPSE_KV.put('daily_prediction', JSON.stringify(prediction), { expirationTtl: 86400 });
  await publishPrediction(prediction, rawState.nepse);
}

async function holidayCheck() {
  const today = new Date();
  const dateStr = today.toISOString().slice(0,10);
  const holidays = ['2026-05-01', '2026-05-10', '2026-05-15'];
  if (holidays.includes(dateStr)) {
    const msg = "🔕 Nepal Stock Exchange is closed today for a public holiday. Market will resume on the next trading day.";
    await sendTelegram(msg);
    await sendFacebook(msg);
  }
}

addEventListener('fetch', event => { event.respondWith(handleRequest(event.request)); });

async function handleRequest(request) {
  const url = new URL(request.url);
  if (url.pathname === '/api/state') {
    let state = await NEPSE_KV.get('live_state', 'json');
    if (!state) { state = { nepse: {}, world: getWorldMarkets(), emotion_index: 50 }; }
    const prediction = await NEPSE_KV.get('daily_prediction', 'json');
    if (prediction) { Object.assign(state, prediction); }
    return new Response(JSON.stringify(state), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=15' } });
  }
  if (url.pathname === '/sitemap.xml') {
    let xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const d = new Date(today - i * 86400000);
      const ds = d.toISOString().slice(0,10);
      xml += `<url><loc>https://nepseos.com.np/p/${ds}</loc><changefreq>daily</changefreq></url>`;
    }
    xml += '</urlset>';
    return new Response(xml, { headers: { 'Content-Type': 'text/xml' } });
  }
  return new Response('Not found', { status: 404 });
}

addEventListener('scheduled', event => {
  event.waitUntil((async () => {
    switch (event.cron) {
      case '*/15 11-14 * * 0-5':
      case '*/20 * * * *':
        await updateLiveData();
        break;
      case '0 6 * * *':
        await dailyPrediction();
        break;
      case '5 0 * * *':
        await holidayCheck();
        break;
    }
  })());
});
