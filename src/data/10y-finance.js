const TEN_Y_DATA = {
  "NABIL": {
    symbol: "NABIL", name: "Nabil Bank Limited",
    cagr_revenue: 12.5, cagr_profit: 10.2,
    avg_roe: 15.3, avg_dividend: 3.1,
    verdict_en: "Consistent performer.",
    verdict_ne: "लगातारको प्रदर्शनकर्ता।"
  },
  "NTC": {
    symbol: "NTC", name: "Nepal Doorsanchar Company Ltd.",
    cagr_revenue: 2.1, cagr_profit: -1.5,
    avg_roe: 8.7, avg_dividend: 4.5,
    verdict_en: "Slow growth, high dividend.",
    verdict_ne: "ढिलो वृद्धि, उच्च लाभांश।"
  },
  "CHILIME": {
    symbol: "CHILIME", name: "Chilime Hydropower Co. Ltd.",
    cagr_revenue: 8.3, cagr_profit: 9.1,
    avg_roe: 18.4, avg_dividend: 2.8,
    verdict_en: "Steady hydro income.",
    verdict_ne: "स्थिर जलविद्युत आय।"
  },
  "SHIVAM": {
    symbol: "SHIVAM", name: "Shivam Cements Ltd.",
    cagr_revenue: 15.2, cagr_profit: 22.1,
    avg_roe: 21.3, avg_dividend: 1.5,
    verdict_en: "Fast grower, lower div.",
    verdict_ne: "द्रुत वृद्धि, कम लाभांश।"
  },
  "NIBL": {
    symbol: "NIBL", name: "Nepal Investment Bank Ltd.",
    cagr_revenue: 10.8, cagr_profit: 11.3,
    avg_roe: 14.2, avg_dividend: 3.0,
    verdict_en: "Solid banking franchise.",
    verdict_ne: "बलियो बैंकिङ फ्रेन्चाइज।"
  },
  "PRVU": {
    symbol: "PRVU", name: "Prabhu Bank Ltd.",
    cagr_revenue: 13.1, cagr_profit: 14.8,
    avg_roe: 12.5, avg_dividend: 2.2,
    verdict_en: "Growing aggressively.",
    verdict_ne: "आक्रामक रूपमा बढ्दै।"
  },
  "GBIME": {
    symbol: "GBIME", name: "Global IME Bank Ltd.",
    cagr_revenue: 11.7, cagr_profit: 11.9,
    avg_roe: 13.8, avg_dividend: 2.9,
    verdict_en: "Strong IME network.",
    verdict_ne: "बलियो आइएमई नेटवर्क।"
  },
  "SBL": {
    symbol: "SBL", name: "Siddhartha Bank Ltd.",
    cagr_revenue: 9.8, cagr_profit: 9.5,
    avg_roe: 13.1, avg_dividend: 3.2,
    verdict_en: "Stable mid-tier bank.",
    verdict_ne: "स्थिर मध्यमस्तर बैंक।"
  },
  "EBL": {
    symbol: "EBL", name: "Everest Bank Ltd.",
    cagr_revenue: 10.3, cagr_profit: 10.1,
    avg_roe: 14.0, avg_dividend: 3.0,
    verdict_en: "Everest-brand trust.",
    verdict_ne: "एभरेष्ट ब्रान्ड विश्वास।"
  },
  "HBL": {
    symbol: "HBL", name: "Himalayan Bank Ltd.",
    cagr_revenue: 8.5, cagr_profit: 8.2,
    avg_roe: 12.1, avg_dividend: 2.7,
    verdict_en: "Steady conservative bank.",
    verdict_ne: "स्थिर रुढीवादी बैंक।"
  },
  "ADBL": {
    symbol: "ADBL", name: "Agricultural Development Bank Ltd.",
    cagr_revenue: 7.6, cagr_profit: 6.9,
    avg_roe: 10.5, avg_dividend: 2.0,
    verdict_en: "Social mandate, moderate.",
    verdict_ne: "सामाजिक जिम्मेवारी, मध्यम।"
  },
  "KRBL": {
    symbol: "KRBL", name: "Kumari Bank Ltd.",
    cagr_revenue: 9.2, cagr_profit: 8.8,
    avg_roe: 12.8, avg_dividend: 2.5,
    verdict_en: "Growing with Kumari brand.",
    verdict_ne: "कुमारी ब्रान्डसँग बढ्दै।"
  },
  "SANIMA": {
    symbol: "SANIMA", name: "Sanima Bank Ltd.",
    cagr_revenue: 12.0, cagr_profit: 13.1,
    avg_roe: 15.0, avg_dividend: 2.4,
    verdict_en: "Strong corporate ties.",
    verdict_ne: "बलियो कर्पोरेट सम्बन्ध।"
  },
  "NICA": {
    symbol: "NICA", name: "NIC Asia Bank Ltd.",
    cagr_revenue: 11.1, cagr_profit: 10.9,
    avg_roe: 13.5, avg_dividend: 2.8,
    verdict_en: "Well-managed Asia focus.",
    verdict_ne: "राम्रोसँग व्यवस्थित एसिया फोकस।"
  },
  "MBL": {
    symbol: "MBL", name: "Machhapuchchhre Bank Ltd.",
    cagr_revenue: 8.9, cagr_profit: 9.0,
    avg_roe: 12.3, avg_dividend: 2.6,
    verdict_en: "Pokhara-based steady.",
    verdict_ne: "पोखरा आधारित स्थिर।"
  },
  "JBL": {
    symbol: "JBL", name: "Janata Bank Nepal Ltd.",
    cagr_revenue: 6.3, cagr_profit: 5.7,
    avg_roe: 9.8, avg_dividend: 1.8,
    verdict_en: "Public sector, modest.",
    verdict_ne: "सार्वजनिक क्षेत्र, मध्यम।"
  },
  "NMB": {
    symbol: "NMB", name: "NMB Bank Ltd.",
    cagr_revenue: 10.2, cagr_profit: 10.5,
    avg_roe: 13.7, avg_dividend: 2.9,
    verdict_en: "Good retail presence.",
    verdict_ne: "राम्रो खुद्रा उपस्थिति।"
  },
  "SCB": {
    symbol: "SCB", name: "Standard Chartered Bank Nepal Ltd.",
    cagr_revenue: 5.5, cagr_profit: 6.2,
    avg_roe: 16.1, avg_dividend: 4.0,
    verdict_en: "Premium brand, high ROE.",
    verdict_ne: "प्रिमियम ब्रान्ड, उच्च आरओई।"
  },
  "CBL": {
    symbol: "CBL", name: "Citizens Bank International Ltd.",
    cagr_revenue: 9.0, cagr_profit: 8.7,
    avg_roe: 11.9, avg_dividend: 2.3,
    verdict_en: "Newer bank, growing.",
    verdict_ne: "नयाँ बैंक, बढ्दै।"
  },
  "SHINE": {
    symbol: "SHINE", name: "Shine Resunga Development Bank Ltd.",
    cagr_revenue: 12.3, cagr_profit: 13.0,
    avg_roe: 14.8, avg_dividend: 1.9,
    verdict_en: "Fastest dev bank.",
    verdict_ne: "सबभन्दा छिटो विकास बैंक।"
  }
};
