/**
 * ============================================================================
 * COC VIPBOT — CENTRALIZED CONFIGURATION, DUAL-PAYMENT & LIVE UI REPLICA
 * ============================================================================
 */

const SITE_CONFIG = {
  brandName: "COC VIPBot",
  domain: "https://coc-vipbot.web.id",
  defaultLang: "id", // "id" atau "en"

  // Username Bot Telegram Anda (tanpa @) untuk Deep-Link Otomatis Pembelian & Trial
  telegramBotUsername: "SlashQueenFarmer_bot",

  // Video Showcase Configuration (Isi salah satu jika video sudah siap)
  showcaseVideoMp4: "",       // Contoh: "assets/images/showcase.mp4"
  showcaseYoutubeEmbed: "",   // Contoh: "https://www.youtube-nocookie.com/embed/xxxxxxx"

  // Opsional: Gambar QRIS jika ingin ditampilkan langsung di pop-up Web (kosongkan jika hanya lewat Bot Telegram)
  qrisIndoImage: "",          // Contoh: "assets/images/qris_indo.png"
  qrisBinanceImage: "",       // Contoh: "assets/images/qris_binance.png"

  // Harga Paket untuk QRIS Indonesia (IDR) & International Binance Pay (USDT)
  pricing: {
    trial: {
      idrCurr: "Rp", idrVal: "0",
      usdtCurr: "USDT", usdtVal: "0",
      tgCodeIdr: "TRIAL", tgCodeUsdt: "TRIAL"
    },
    weekly: {
      idrCurr: "Rp", idrVal: "28.900",
      usdtCurr: "$", usdtVal: "1.99 USDT",
      tgCodeIdr: "BUY_7_QRIS_INDO", tgCodeUsdt: "BUY_7_BINANCE"
    },
    monthly: {
      idrCurr: "Rp", idrVal: "99.000",
      usdtCurr: "$", usdtVal: "6.50 USDT",
      tgCodeIdr: "BUY_30_QRIS_INDO", tgCodeUsdt: "BUY_30_BINANCE"
    },
    lifetime: {
      idrCurr: "Rp", idrVal: "499.000",
      usdtCurr: "$", usdtVal: "32.00 USDT",
      tgCodeIdr: "BUY_LIFETIME_QRIS_INDO", tgCodeUsdt: "BUY_LIFETIME_BINANCE"
    }
  },

  // Action & Download URLs
  downloadUrl: "https://dl.coc-vipbot.web.id/COC-VIPBot-Setup.zip",
  communityUrl: "https://t.me/SlashQueenFarmer_bot",
  supportUrl: "https://t.me/SlashQueenFarmer_bot"
};

/* Kamus Bahasa (ID & ENG) */
const I18N_DICT = {
  id: {
    nav_home: "Home",
    nav_features: "Features",
    nav_showcase: "Video Showcase",
    nav_how: "How It Works",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",
    nav_download: "Download .EXE",
    nav_cta: "Free Trial 1 Hari",
    hero_eyebrow: "NEXT-GEN CLASH AUTOMATION ENGINE",
    hero_title: 'Non-Stop Deadbase Loot.<br /><span class="text-gradient">Auto Max Walls Faster.</span>',
    hero_desc: 'Dominasi progres Home Village &amp; Builder Base Anda dengan <strong>COC VIPBot</strong>. Dilengkapi <em>Best Loot Finder</em>, <em>Super Smart Auto Up Wall</em>, dukungan <em>Multi-Instances</em> mandiri untuk banyak emulator sekaligus, serta fitur <em>Auto-Reload</em> &amp; <em>Auto Zoom-Out</em>.',
    hero_chip1: "⚡ Trial Gratis 1 Hari",
    hero_chip2: "🧱 Auto Wall Main & Builder Base",
    hero_chip3: "🖥️ Multi-Instances Mandiri",
    hero_btn_primary: "Claim Free Trial 1 Hari",
    hero_btn_download: "Download Bot (.EXE)",
    hero_btn_secondary: "Video Demo",
    mock_switch_village: "Ganti Desa",
    mock_min_loot: "MINIMAL LOOT (0 = LANGSUNG SERANG)",
    mock_malam_desc: "Pastikan layar di Desa Malam. Deploy 1 Hero + 6 Troop otomatis & Auto Up Wall.",
    trust_label1: "Kekuatan Multi-Akun",
    trust_label2: "Otomatisasi 2 Desa",
    trust_label3: "Pemulihan Pintar",
    trust_label4: "Pembayaran Global",
    feat_sec_title: "Fitur Unggulan COC VIPBot",
    feat_sec_sub: "Dirancang khusus untuk memaksimalkan perolehan loot harian dan mempercepat progres Wall di semua akun Anda secara bersamaan.",
    feat_1_desc: "Pemindaian cepat untuk menemukan base kaya (deadbase & kolektor penuh) sesuai target minimum Gold, Elixir, dan Dark Elixir yang Anda atur.",
    feat_2_desc: "Tidak ada lagi loot yang terbuang karena storage penuh! Bot otomatis mendeteksi kelebihan Gold/Elixir dan langsung meng-upgrade banyak Wall sekaligus tanpa henti.",
    feat_3_desc: "Dilengkapi pola deploy natural, klaim otomatis Star Bonus harian, serta fitur Auto-Reload pintar saat koneksi internet PC Anda sempat terputus.",
    feat_4_desc: "Aplikasi .EXE dilengkapi sistem Auto-Update 1-Klik langsung dari dalam bot setiap kali ada pembaruan fitur, tanpa perlu mengunduh ulang manual.",
    feat_5_desc: "Punya banyak akun Clash of Clans? Jalankan beberapa jendela MuMuPlayer / LDPlayer sekaligus dengan penyimpanan setting Army & Wall yang terpisah mandiri!",
    feat_6_desc: "Otomatisasi penuh untuk malam hari di Builder Base! Deploy kilat 1 Hero + 6 Troop, aktifkan skill berkala, dan upgrade tembok Desa Malam otomatis.",
    show_sec_title: "Lihat UI Bot & Cara Kerjanya",
    show_sec_sub: "Tonton demonstrasi singkat (30–60 detik) bagaimana COC VIPBot memindai deadbase, menurunkan pasukan dengan cepat, dan meng-upgrade Wall secara otomatis.",
    show_sim_title: "Klik untuk Simulasi Alur Kerja COC VIPBot",
    show_sim_sub: "(Pemutar ini otomatis menampilkan video rekaman asli Anda begitu file MP4 ditaruh di folder assets/images/)",
    show_step1: "Best Loot Finder memfilter base mati...",
    show_step2: "Menurunkan Troop, Spell, Hero & Ability...",
    show_step3: "Upgrade Wall & Reset Kamera Otomatis!",
    how_eyebrow: "4 LANGKAH MUDAH",
    how_sec_title: "Bagaimana COC VIPBot Bekerja?",
    how_sec_sub: "Tidak perlu pengaturan rumit. Dari klaim Trial Gratis hingga bot berjalan otomatis meng-upgrade Wall Anda hanya butuh beberapa menit.",
    how_1_title: "Unduh Bot (.EXE) & Klaim Key",
    how_1_desc: "Unduh aplikasi COC_VIPBot.exe, lalu klaim Trial Gratis 1 Hari via Bot Telegram kami atau pilih paket berlangganan (QRIS Indonesia / Binance Pay).",
    how_2_title: "Hubungkan Emulator (1600x900)",
    how_2_desc: "Atur resolusi MuMuPlayer / LDPlayer ke 1600x900 (240 DPI). Klik tombol Scan di bot untuk memilih target emulator untuk masing-masing akun.",
    how_3_title: "Atur Set Army & More Option",
    how_3_desc: "Rekam titik slot pasukan Anda di menu Set Army, lalu aktifkan Auto Upgrade Wall beserta batas minimal Gold/Elixir di More Option.",
    how_4_title: "Klik Start & Biarkan Bot Bekerja",
    how_4_desc: "Bot akan mencari lawan, menyerang, mengklaim Star Bonus, me-reload otomatis jika putus koneksi, dan meng-upgrade Wall Anda 24/7.",
    price_eyebrow: "HARGA TRANSPARAN & FLEKSIBEL",
    price_sec_title: "Pilih Paket Terbaik Untuk Desa Anda",
    price_sec_sub: "Semua paket membuka 100% fitur utama. Mendukung pembayaran instan via QRIS Indonesia (IDR) dan Binance Pay QRIS (USDT) untuk pengguna internasional!",
    tier1_name: "Trial Free",
    tier1_period: "/ 1 Hari",
    tier1_desc: "Uji coba langsung seluruh kehebatan bot di akun Anda selama 24 jam penuh tanpa biaya (1x per PC/HWID).",
    tier1_btn: "Claim Free Trial",
    tier2_name: "Paket 1 Minggu",
    tier2_period: "/ 7 Hari",
    tier2_desc: "Cocok untuk kejar progres mingguan, event Clan Games, atau mengisi penuh storage dengan cepat.",
    tier2_btn: "Pilih Paket 1 Minggu",
    tier3_ribbon: "⚡ MOST POPULAR • HEMAT 15%",
    tier3_name: "Paket 1 Bulan",
    tier3_pill: "~Rp 3.300 / hari",
    tier3_period: "/ 30 Hari",
    tier3_desc: "Pilihan favorit mayoritas pemain! Jauh lebih hemat dibanding beli mingguan untuk farming non-stop sebulan penuh.",
    tier3_btn: "Ambil Best Monthly",
    tier4_ribbon: "👑 ULTIMATE BEST VALUE • SEKALI BAYAR",
    tier4_pill: "Akses Selamanya",
    tier4_period: "/ Selamanya",
    tier4_desc: "Investasi terbaik tanpa biaya bulanan lagi! Bayar 1x untuk akses permanen, bebas update selamanya, plus layanan kasta tertinggi VIPP Support.",
    tier4_btn: "👑 Ambil Paket Life Time Sekarang",
    faq_sec_title: "Pertanyaan yang Sering Diajukan (FAQ)",
    faq_sec_sub: "Informasi lengkap seputar penggunaan COC VIPBot, keamanan Anti-Ban, Multi-Instances, hingga metode pembayaran lokal & internasional.",
    faq_q1: "Apakah Trial Free 1 Hari membuka semua fitur seperti Auto Up Wall & Multi-Instance?",
    faq_a1: "Ya! Paket Trial Free 1 Hari memberikan akses All Fitur Unlock termasuk Best Loot Finder, Super Smart Wall Upgrade, Auto Builder Base, dan sistem Anti-Ban agar Anda bisa membuktikan sendiri performanya sebelum berlangganan.",
    faq_q2: "Bagaimana cara kerja fitur Auto Up Wall di Home Village dan Builder Base?",
    faq_a2: "Setiap kali sesi serangan selesai dan jumlah Gold atau Elixir Anda melewati batas minimum yang Anda tentukan, bot secara cerdas akan mencari tembok (Wall) sesuai harga yang disetel, meng-upgrade banyak tembok sekaligus, lalu melakukan Pinch Zoom-Out otomatis.",
    faq_q3: "Apa itu Support Multi Instances dan apakah pengaturannya terpisah?",
    faq_a3: "Support Multi Instances memungkinkan Anda membuka beberapa jendela Bot untuk beberapa emulator (MuMuPlayer / LDPlayer) secara bersamaan di 1 PC. Setiap jendela bot otomatis menyimpan pengaturan Set Army dan Wall/Event secara mandiri tanpa saling menimpa.",
    faq_q4: "Apa perbedaan Standard Support, Priority Support, dan VIPP Support?",
    faq_a4: "Standard Support (Trial & 1 Minggu) mencakup bantuan tiket komunitas reguler. Priority Support (Paket 1 Bulan) mendapatkan antrean respons lebih cepat. Sedangkan VIPP Support (khusus member Life Time) adalah layanan eksklusif kasta tertinggi dengan bantuan setup prioritas utama dan konsultasi multi-instance.",
    faq_q5: "Bagaimana sistem Anti-Ban & Auto-Updater pada COC VIPBot bekerja?",
    faq_a5: "Bot kami tidak memodifikasi memori game, melainkan membaca layar secara visual (OpenCV) dan mengirim sentuhan ADB layaknya jari manusia. Selain itu, aplikasi dilengkapi Auto-Updater bawaan yang otomatis memperbarui bot Anda setiap kali ada rilis versi baru.",
    faq_q6: "Bagaimana cara melakukan pembayaran dari Indonesia maupun Luar Negeri?",
    faq_a6: "Klik paket yang Anda inginkan di bagian Pricing. Anda dapat memilih pembayaran via QRIS Indonesia (DANA, GoPay, OVO, ShopeePay, M-Banking) atau QRIS Binance Pay (USDT) untuk pengguna internasional. Pembayaran diverifikasi cepat melalui Bot Telegram resmi kami.",
    cta_eyebrow: "SIAP FARMING OTOMATIS?",
    cta_title: "Maksimalkan Desa Utama & Builder Base Anda Sekarang",
    cta_desc: "Jangan biarkan Builder dan Storage Anda menganggur. Unduh aplikasinya sekarang, klaim Trial Gratis 1 Hari, atau amankan lisensi Life Time VIPP Support hari ini!",
    cta_btn1: "🔥 Lihat Paket & Klaim Trial",
    footer_bio: "Platform otomatisasi farming Clash of Clans dengan Best Loot Finder, Super Smart Auto Up Wall, Auto Builder Base, dan dukungan Multi-Instances."
  },
  en: {
    nav_home: "Home",
    nav_features: "Features",
    nav_showcase: "Video Showcase",
    nav_how: "How It Works",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",
    nav_download: "Download .EXE",
    nav_cta: "1-Day Free Trial",
    hero_eyebrow: "NEXT-GEN CLASH AUTOMATION ENGINE",
    hero_title: 'Non-Stop Deadbase Loot.<br /><span class="text-gradient">Auto Max Walls Faster.</span>',
    hero_desc: 'Dominate your Home Village &amp; Builder Base progression with <strong>COC VIPBot</strong>. Powered by <em>Best Loot Finder</em>, <em>Super Smart Auto Up Wall</em>, independent <em>Multi-Instances</em> support, plus built-in <em>Auto-Reload</em> &amp; <em>Auto Zoom-Out</em>.',
    hero_chip1: "⚡ 1-Day Free Trial",
    hero_chip2: "🧱 Auto Wall Main & Builder Base",
    hero_chip3: "🖥️ Independent Multi-Instances",
    hero_btn_primary: "Claim 1-Day Free Trial",
    hero_btn_download: "Download Bot (.EXE)",
    hero_btn_secondary: "Video Demo",
    mock_switch_village: "Switch Base",
    mock_min_loot: "MINIMUM LOOT (0 = INSTANT ATTACK)",
    mock_malam_desc: "Ensure camera is in Builder Base. Rapidly deploys 1 Hero + 6 Troops & Auto Up Wall.",
    trust_label1: "Multi-Account Power",
    trust_label2: "Dual Village Automation",
    trust_label3: "Smart Recovery",
    trust_label4: "Global Payment",
    feat_sec_title: "COC VIPBot Core Features",
    feat_sec_sub: "Engineered to maximize your daily loot income and accelerate Wall upgrades across all your accounts simultaneously.",
    feat_1_desc: "High-speed OCR scanning to locate rich deadbases matching your custom Gold, Elixir, and Dark Elixir thresholds.",
    feat_2_desc: "Never waste overflowing loot again! The bot automatically detects surplus Gold/Elixir and upgrades multiple Walls at once non-stop.",
    feat_3_desc: "Equipped with humanized deployment patterns, automatic daily Star Bonus claiming, and smart Auto-Reload if your PC internet briefly drops.",
    feat_4_desc: "Our standalone .EXE includes a 1-Click Auto-Updater right inside the app whenever new features or patches are released.",
    feat_5_desc: "Run multiple MuMuPlayer / LDPlayer windows simultaneously on a single PC with isolated per-emulator Army & Wall configurations!",
    feat_6_desc: "Full automation for your Builder Base! Rapid 1 Hero + 6 Troops deployment, timed Hero Ability triggers, and automatic Builder Wall upgrades.",
    show_sec_title: "See Bot UI & Workflow in Action",
    show_sec_sub: "Watch a quick demonstration (30–60s) of how COC VIPBot scans deadbases, deploys troops rapidly, and upgrades Walls automatically.",
    show_sim_title: "Click to Simulate COC VIPBot Workflow",
    show_sim_sub: "(This player frame will automatically play your 30–60s MP4 video once placed in the assets/images/ folder)",
    show_step1: "Best Loot Finder filtering rich deadbases...",
    show_step2: "Deploying Troops, Spells, Heroes & Abilities...",
    show_step3: "Upgrading Walls & Auto Pinch Zoom-Out!",
    how_eyebrow: "4 SIMPLE STEPS",
    how_sec_title: "How Does COC VIPBot Work?",
    how_sec_sub: "Zero complicated setup. Going from claiming your Free Trial to automated 24/7 Wall upgrades takes just minutes.",
    how_1_title: "Download Bot (.EXE) & Claim Key",
    how_1_desc: "Download COC_VIPBot.exe, then claim your 1-Day Free Trial via our Telegram Bot or pick a subscription plan (QRIS Indonesia / Binance Pay USDT).",
    how_2_title: "Connect Emulator (1600x900)",
    how_2_desc: "Set your MuMuPlayer / LDPlayer resolution to 1600x900 (240 DPI). Click Scan in the bot to select the target emulator for each account.",
    how_3_title: "Configure Set Army & More Option",
    how_3_desc: "Record your army bar slots in Set Army, then enable Auto Upgrade Wall and minimum Gold/Elixir thresholds in More Option.",
    how_4_title: "Click Start & Let the Bot Work",
    how_4_desc: "The bot will search for loot, attack, claim Star Bonuses, auto-reload on disconnects, and upgrade your village walls 24/7.",
    price_eyebrow: "TRANSPARENT & FLEXIBLE PRICING",
    price_sec_title: "Choose the Best Plan for Your Village",
    price_sec_sub: "Every plan unlocks 100% of core features. Instant checkout via Indonesian QRIS (IDR) or Binance Pay QRIS (USDT) for international users!",
    tier1_name: "Trial Free",
    tier1_period: "/ 1 Day",
    tier1_desc: "Experience the full power of COC VIPBot on your account for a full 24 hours at zero cost (1x per PC/HWID).",
    tier1_btn: "Claim Free Trial",
    tier2_name: "1 Week Plan",
    tier2_period: "/ 7 Days",
    tier2_desc: "Great for weekly progression boosts, Clan Games events, or quickly maxing out your resource storages.",
    tier2_btn: "Choose 1 Week Plan",
    tier3_ribbon: "⚡ MOST POPULAR • SAVE 15%",
    tier3_name: "1 Month Plan",
    tier3_pill: "~$0.21 / day",
    tier3_period: "/ 30 Days",
    tier3_desc: "Player favorite! Much more economical than weekly renewals for non-stop full-month farming.",
    tier3_btn: "Get Best Monthly",
    tier4_ribbon: "👑 ULTIMATE BEST VALUE • PAY ONCE",
    tier4_pill: "Forever Access",
    tier4_period: "/ Lifetime",
    tier4_desc: "The ultimate investment with zero monthly fees! Pay once for permanent access, free lifetime updates, plus top-tier VIPP Support.",
    tier4_btn: "👑 Get Life Time Access Now",
    faq_sec_title: "Frequently Asked Questions (FAQ)",
    faq_sec_sub: "Everything you need to know about COC VIPBot, Anti-Ban safety, Multi-Instances, and global payment options.",
    faq_q1: "Does the 1-Day Free Trial unlock all features like Auto Up Wall & Multi-Instance?",
    faq_a1: "Yes! The 1-Day Free Trial gives you All Fitur Unlock access including Best Loot Finder, Super Smart Wall Upgrade, Auto Builder Base, and Anti-Ban so you can test everything before subscribing.",
    faq_q2: "How does Auto Up Wall work in Home Village and Builder Base?",
    faq_a2: "After each attack session, whenever your Gold or Elixir exceeds your configured threshold, the bot locates upgradeable Walls matching your configured cost, upgrades multiple walls at once, and performs an automatic Pinch Zoom-Out.",
    faq_q3: "What is Support Multi Instances and are settings isolated per emulator?",
    faq_a3: "Support Multi Instances lets you run multiple Bot windows for multiple emulators (MuMuPlayer / LDPlayer) simultaneously on 1 PC. Each bot window automatically saves its own Set Army and Wall/Event settings independently.",
    faq_q4: "What is the difference between Standard, Priority, and VIPP Support?",
    faq_a4: "Standard Support (Trial & 1 Week) covers regular community ticket assistance. Priority Support (1 Month) gives you faster response queues. VIPP Support (exclusive to Life Time members) is our highest royal tier with top-priority setup assistance and multi-instance optimization.",
    faq_q5: "How do the Anti-Ban & Auto-Updater systems work in COC VIPBot?",
    faq_a5: "Our engine never modifies game memory; it uses visual OpenCV screen recognition and human-like ADB touch inputs. It also includes a built-in Auto-Updater that updates your .EXE automatically whenever a new version is released.",
    faq_q6: "How do I complete payment from Indonesia or Internationally?",
    faq_a6: "Click your desired plan in the Pricing section. You can choose QRIS Indonesia (IDR) or Binance Pay QRIS (USDT) for international users. Orders and Serial Keys are processed seamlessly via our official Telegram Bot.",
    cta_eyebrow: "READY FOR AUTOMATED FARMING?",
    cta_title: "Maximize Your Home Village & Builder Base Today",
    cta_desc: "Stop leaving your Builders and Storages idle. Download the app now, start with a 1-Day Free Trial, or secure your Life Time VIPP Support license!",
    cta_btn1: "🔥 View Plans & Claim Trial",
    footer_bio: "Clash of Clans farming automation platform featuring Best Loot Finder, Super Smart Auto Up Wall, Auto Builder Base, and Multi-Instances."
  }
};

let currentLang = localStorage.getItem("coc_vipbot_lang") || SITE_CONFIG.defaultLang;
let currentPaymentRegion = localStorage.getItem("coc_vipbot_region") || (currentLang === "en" ? "usdt" : "idr");
let activeCheckoutTier = "monthly";

document.addEventListener("DOMContentLoaded", () => {
  initDynamicYear();
  initLanguageSwitcher();
  initPaymentRegionSwitcher();
  initHeroBotUiReplica();
  initMobileNav();
  initVideoShowcase();
  initCheckoutModalAndLinks();
  initFaqAccordion();
  initScrollReveal();
  initScrollSpyAndBackToTop();
});

/* 1. Dynamic Copyright Year */
function initDynamicYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* 2. Bilingual Language Switcher (ID / ENG) */
function initLanguageSwitcher() {
  const langBtn = document.getElementById("langSwitchBtn");
  const htmlFormattedKeys = ["hero_title", "hero_desc"];

  const applyLanguage = (lang) => {
    currentLang = lang === "en" ? "en" : "id";
    localStorage.setItem("coc_vipbot_lang", currentLang);
    document.documentElement.lang = currentLang;

    const dict = I18N_DICT[currentLang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        if (htmlFormattedKeys.includes(key)) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    document.querySelectorAll("[data-lang-ind]").forEach((ind) => {
      const code = ind.getAttribute("data-lang-ind");
      ind.classList.toggle("active-lang", code === currentLang);
    });

    updatePricingDisplay();
  };

  applyLanguage(currentLang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const nextLang = currentLang === "id" ? "en" : "id";
      // Otomatis arahkan tampilan mata uang ke USDT saat pilih ENG, atau IDR saat pilih ID
      currentPaymentRegion = nextLang === "en" ? "usdt" : "idr";
      localStorage.setItem("coc_vipbot_region", currentPaymentRegion);
      applyLanguage(nextLang);
    });
  }
}

/* 3. Dual-Payment Region Switcher (IDR QRIS vs International Binance USDT) */
function initPaymentRegionSwitcher() {
  const btnIdr = document.getElementById("regionBtnIdr");
  const btnUsdt = document.getElementById("regionBtnUsdt");

  if (btnIdr) {
    btnIdr.addEventListener("click", () => {
      currentPaymentRegion = "idr";
      localStorage.setItem("coc_vipbot_region", "idr");
      updatePricingDisplay();
    });
  }

  if (btnUsdt) {
    btnUsdt.addEventListener("click", () => {
      currentPaymentRegion = "usdt";
      localStorage.setItem("coc_vipbot_region", "usdt");
      updatePricingDisplay();
    });
  }

  updatePricingDisplay();
}

function updatePricingDisplay() {
  const isUsdt = currentPaymentRegion === "usdt";
  const btnIdr = document.getElementById("regionBtnIdr");
  const btnUsdt = document.getElementById("regionBtnUsdt");
  const monthlyPill = document.getElementById("monthlyPerDayPill");

  if (btnIdr) btnIdr.classList.toggle("active-region", !isUsdt);
  if (btnUsdt) btnUsdt.classList.toggle("active-region", isUsdt);

  Object.keys(SITE_CONFIG.pricing).forEach((tierKey) => {
    const cfg = SITE_CONFIG.pricing[tierKey];
    const currEl = document.querySelector(`[data-price-curr="${tierKey}"]`);
    const valEl = document.querySelector(`[data-price-val="${tierKey}"]`);
    if (currEl) currEl.textContent = isUsdt ? cfg.usdtCurr : cfg.idrCurr;
    if (valEl) valEl.textContent = isUsdt ? cfg.usdtVal : cfg.idrVal;
  });

  if (monthlyPill) {
    monthlyPill.textContent = isUsdt
      ? (currentLang === "en" ? "~$0.21 / day" : "~$0.21 / hari")
      : (currentLang === "en" ? "~Rp 3,300 / day" : "~Rp 3.300 / hari");
  }
}

/* 4. Interactive Replica of COC_VIPBot.exe in Hero Section */
function initHeroBotUiReplica() {
  const switchBtn = document.getElementById("mockSwitchModeBtn");
  const badge = document.getElementById("mockVillageBadge");
  const panelAsal = document.getElementById("mockPanelAsal");
  const panelMalam = document.getElementById("mockPanelMalam");
  const toggleLogBtn = document.getElementById("mockBtnToggleLog");
  const logContainer = document.getElementById("mockLogContainer");
  const dynamicLog = document.getElementById("mockDynamicLog");
  const remBadge = document.getElementById("mockRemLoop");

  let isMalam = false;
  let remCount = 12;

  if (switchBtn && badge && panelAsal && panelMalam) {
    switchBtn.addEventListener("click", () => {
      isMalam = !isMalam;
      panelAsal.hidden = isMalam;
      panelMalam.hidden = !isMalam;
      if (isMalam) {
        badge.textContent = currentLang === "en" ? "🌙 BUILDER BASE" : "🌙 DESA MALAM";
        badge.classList.add("malam-badge");
      } else {
        badge.textContent = currentLang === "en" ? "☀️ HOME VILLAGE" : "☀️ DESA ASAL";
        badge.classList.remove("malam-badge");
      }
    });
  }

  if (toggleLogBtn && logContainer) {
    toggleLogBtn.addEventListener("click", () => {
      const willHide = !logContainer.hidden;
      logContainer.hidden = willHide;
      toggleLogBtn.textContent = willHide ? "▼" : "▲";
    });
  }

  // Simulasi Log Berjalan & Hitung Mundur Sisa Loop
  const sampleLogs = [
    "[09:15:10] [WALL-SUCCESS] Upgrade 5 Wall menggunakan GOLD selesai!",
    "[09:15:12] [ZOOM] Mereset kamera (Pinch Zoom Out via /dev/input/event2)...",
    "[09:15:14] [REWARD-SIANG] Daily Star Bonus terdeteksi! Klik 'Okay' (795, 767)...",
    "[09:15:18] [LOOT] Gold: 1,120,000/500,000 (OK) | Elixir: 980,500 (OK)",
    "[09:15:20] [FAST-DEPLOY] Menurunkan pasukan Desa Siang dalam 2.45 detik!"
  ];
  let logIdx = 0;

  setInterval(() => {
    logIdx = (logIdx + 1) % sampleLogs.length;
    if (dynamicLog) {
      dynamicLog.textContent = sampleLogs[logIdx];
    }
    if (logIdx === 0 && remBadge) {
      remCount = remCount > 1 ? remCount - 1 : 15;
      const prefix = currentLang === "en" ? "Left:" : "Sisa:";
      remBadge.textContent = `${prefix} ${remCount}`;
    }
  }, 3200);
}

/* 5. Mobile Navigation Toggle */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileNavToggle");
  const navMenu = document.getElementById("primaryNavigation");
  if (!toggleBtn || !navMenu) return;

  const closeMenu = () => {
    toggleBtn.setAttribute("aria-expanded", "false");
    navMenu.classList.toggle("is-open", false);
  };

  toggleBtn.addEventListener("click", () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
    navMenu.classList.toggle("is-open", !isExpanded);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("is-open")) {
      closeMenu();
      toggleBtn.focus();
    }
  });
}

/* 6. Smart Video Showcase Loader & Interactive Preview Simulator */
function initVideoShowcase() {
  const nativeVideo = document.getElementById("showcaseNativeVideo");
  const youtubeIframe = document.getElementById("showcaseYoutubeIframe");
  const posterOverlay = document.getElementById("videoPosterOverlay");
  const triggerBtn = document.getElementById("triggerDemoVideoBtn");
  const simTitle = document.getElementById("simTitleText");
  const simSub = document.getElementById("simSubText");
  const simSteps = document.querySelectorAll(".sim-step");

  if (SITE_CONFIG.showcaseVideoMp4 && SITE_CONFIG.showcaseVideoMp4.trim() !== "") {
    if (nativeVideo && posterOverlay) {
      nativeVideo.src = SITE_CONFIG.showcaseVideoMp4;
      nativeVideo.hidden = false;
      posterOverlay.style.display = "none";
    }
    return;
  }

  if (SITE_CONFIG.showcaseYoutubeEmbed && SITE_CONFIG.showcaseYoutubeEmbed.trim() !== "") {
    if (youtubeIframe && posterOverlay) {
      youtubeIframe.src = SITE_CONFIG.showcaseYoutubeEmbed;
      youtubeIframe.hidden = false;
      posterOverlay.style.display = "none";
    }
    return;
  }

  let simInterval = null;
  let currentStep = 0;

  if (triggerBtn) {
    triggerBtn.addEventListener("click", () => {
      if (simInterval) {
        clearInterval(simInterval);
        simInterval = null;
        if (simTitle) {
          simTitle.textContent = currentLang === "en"
            ? "Simulation Paused — Ready for Your MP4 Video"
            : "Simulasi Dihentikan — Siap Untuk Video MP4 Anda";
        }
        return;
      }

      const stages = {
        id: [
          {
            title: "🔍 [00:05] Best Loot Finder Memindai Deadbase...",
            sub: "Menemukan target: Gold 1.150.000 | Elixir 1.210.000 (Melewati batas filter minimum)"
          },
          {
            title: "⚔️ [00:20] Balanced-Fast Deploy & Auto Ability...",
            sub: "Menurunkan Troop, Spell, Hero, dan Siege Machine secara presisi."
          },
          {
            title: "🧱 [00:38] Auto Up Wall + Pinch Zoom-Out Otomatis!",
            sub: "Upgrade 8x Wall sekaligus lalu mereset kamera kembali ke ukuran penuh."
          }
        ],
        en: [
          {
            title: "🔍 [00:05] Best Loot Finder Scanning Deadbases...",
            sub: "Target found: Gold 1,150,000 | Elixir 1,210,000 (Exceeds minimum filter threshold)"
          },
          {
            title: "⚔️ [00:20] Balanced-Fast Deploy & Hero Abilities...",
            sub: "Deploys Troops, Spells, Heroes, and Siege Machine with natural intervals."
          },
          {
            title: "🧱 [00:38] Auto Up Wall + Automatic Pinch Zoom-Out!",
            sub: "Upgrades 8x Walls at once and resets camera zoom back to full view."
          }
        ]
      };

      const runStep = () => {
        const list = stages[currentLang] || stages.id;
        const data = list[currentStep];
        if (simTitle) simTitle.textContent = data.title;
        if (simSub) simSub.textContent = data.sub;

        simSteps.forEach((stepEl, idx) => {
          stepEl.classList.toggle("active-step", idx === currentStep);
        });

        currentStep = (currentStep + 1) % list.length;
      };

      runStep();
      simInterval = setInterval(runStep, 2600);
    });
  }
}

/* 7. Dual-Payment Checkout Modal (QRIS Indonesia & Binance Pay QRIS) */
function initCheckoutModalAndLinks() {
  const chkModal = document.getElementById("checkoutModal");
  const chkBackdrop = document.getElementById("chkModalBackdrop");
  const chkCloseX = document.getElementById("chkCloseXBtn");
  const chkBadge = document.getElementById("chkTierBadge");
  const chkTitle = document.getElementById("chkModalTitle");
  const chkPrice = document.getElementById("chkPriceDisplay");
  const chkPaySelectorWrap = document.getElementById("chkPaymentSelectorWrap");
  const payTabIndo = document.getElementById("payTabQrisIndo");
  const payTabBinance = document.getElementById("payTabBinance");
  const qrPreviewBox = document.getElementById("chkQrPreviewBox");
  const qrImage = document.getElementById("chkQrImage");
  const chkDesc = document.getElementById("chkModalDesc");
  const tgActionBtn = document.getElementById("chkTelegramActionBtn");
  const tgBtnText = document.getElementById("chkTelegramBtnText");

  const tierTitles = {
    id: {
      trial: "Trial Gratis 1 Hari (All Fitur Unlock)",
      weekly: "Paket 1 Minggu (7 Hari)",
      monthly: "⚡ Paket Best Monthly (30 Hari)",
      lifetime: "👑 Paket Life Time + VIPP Support"
    },
    en: {
      trial: "1-Day Free Trial (All Features Unlocked)",
      weekly: "1 Week Plan (7 Days)",
      monthly: "⚡ Best Monthly Plan (30 Days)",
      lifetime: "👑 Life Time Plan + VIPP Support"
    }
  };

  const renderCheckoutState = () => {
    const isEn = currentLang === "en";
    const isUsdt = currentPaymentRegion === "usdt";
    const cfg = SITE_CONFIG.pricing[activeCheckoutTier] || SITE_CONFIG.pricing.monthly;

    if (chkBadge) {
      chkBadge.textContent = activeCheckoutTier === "trial"
        ? (isEn ? "FREE TRIAL ACCESS" : "AKSES TRIAL GRATIS")
        : (isUsdt ? "INTERNATIONAL CHECKOUT (BINANCE PAY)" : "CHECKOUT QRIS INDONESIA");
    }

    if (chkTitle) {
      chkTitle.textContent = (tierTitles[currentLang] || tierTitles.id)[activeCheckoutTier];
    }

    if (chkPrice) {
      chkPrice.textContent = isUsdt
        ? `${cfg.usdtCurr} ${cfg.usdtVal}`
        : `${cfg.idrCurr} ${cfg.idrVal}`;
    }

    if (chkPaySelectorWrap) {
      chkPaySelectorWrap.hidden = activeCheckoutTier === "trial";
    }

    if (payTabIndo) payTabIndo.classList.toggle("active-pay-tab", !isUsdt);
    if (payTabBinance) payTabBinance.classList.toggle("active-pay-tab", isUsdt);

    // Tampilkan gambar QR langsung di modal jika disediakan di SITE_CONFIG
    const qrSrc = isUsdt ? SITE_CONFIG.qrisBinanceImage : SITE_CONFIG.qrisIndoImage;
    if (qrPreviewBox && qrImage) {
      if (activeCheckoutTier !== "trial" && qrSrc && qrSrc.trim() !== "") {
        qrImage.src = qrSrc;
        qrPreviewBox.hidden = false;
      } else {
        qrPreviewBox.hidden = true;
      }
    }

    const startParam = isUsdt ? cfg.tgCodeUsdt : cfg.tgCodeIdr;
    const tgUrl = `https://t.me/${SITE_CONFIG.telegramBotUsername}?start=${startParam}`;
    if (tgActionBtn) {
      tgActionBtn.href = tgUrl;
    }

    if (activeCheckoutTier === "trial") {
      if (chkDesc) {
        chkDesc.textContent = isEn
          ? "Download the Bot (.EXE) below, or click the Telegram button to claim your 24-hour Free Trial Serial Key instantly!"
          : "Unduh aplikasi Bot (.EXE) di bawah, atau klik tombol Telegram untuk mengklaim Serial Key Trial 24 Jam secara instan!";
      }
      if (tgBtnText) {
        tgBtnText.textContent = isEn
          ? "🎁 Claim Free Trial Key in Telegram"
          : "🎁 Klaim Key Trial Gratis di Telegram";
      }
    } else {
      if (chkDesc) {
        chkDesc.textContent = isUsdt
          ? (isEn
              ? "Click the button below to open our official Telegram Bot with your selected plan and receive the Binance Pay QRIS (USDT) invoice."
              : "Klik tombol di bawah untuk membuka Bot Telegram resmi kami dan menerima tagihan QRIS Binance Pay (USDT) secara otomatis.")
          : (isEn
              ? "Click the button below to open our official Telegram Bot and receive your Indonesian QRIS invoice."
              : "Klik tombol di bawah untuk membuka Bot Telegram resmi kami dan menampilkan kode pembayaran QRIS Indonesia secara otomatis.");
      }
      if (tgBtnText) {
        tgBtnText.textContent = isUsdt
          ? (isEn ? "🌍 Pay via Binance QR in Telegram Bot" : "🌍 Bayar via QRIS Binance di Telegram")
          : (isEn ? "🇮🇩 Pay via QRIS Indonesia in Telegram" : "🇮🇩 Bayar via QRIS Indonesia di Telegram");
      }
    }
  };

  const openCheckoutModal = (tierKey) => {
    activeCheckoutTier = tierKey;
    renderCheckoutState();
    if (chkModal) chkModal.hidden = false;
  };

  const closeCheckoutModal = () => {
    if (chkModal) chkModal.hidden = true;
  };

  if (payTabIndo) {
    payTabIndo.addEventListener("click", () => {
      currentPaymentRegion = "idr";
      localStorage.setItem("coc_vipbot_region", "idr");
      updatePricingDisplay();
      renderCheckoutState();
    });
  }

  if (payTabBinance) {
    payTabBinance.addEventListener("click", () => {
      currentPaymentRegion = "usdt";
      localStorage.setItem("coc_vipbot_region", "usdt");
      updatePricingDisplay();
      renderCheckoutState();
    });
  }

  if (chkCloseX) chkCloseX.addEventListener("click", closeCheckoutModal);
  if (chkBackdrop) chkBackdrop.addEventListener("click", closeCheckoutModal);

  document.querySelectorAll("[data-checkout-tier]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const tier = btn.getAttribute("data-checkout-tier") || "monthly";
      openCheckoutModal(tier);
    });
  });

  // Hubungkan link downloadUrl, communityUrl, supportUrl
  document.querySelectorAll("[data-config-link]").forEach((el) => {
    const key = el.getAttribute("data-config-link");
    const targetUrl = SITE_CONFIG[key];
    if (targetUrl && targetUrl !== "COMING_SOON") {
      if (el.tagName.toLowerCase() === "a") {
        el.setAttribute("href", targetUrl);
        if (targetUrl.startsWith("http")) {
          el.setAttribute("target", "_blank");
          el.setAttribute("rel", "noopener noreferrer");
        }
      }
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && chkModal && !chkModal.hidden) {
      closeCheckoutModal();
    }
  });
}

/* 8. Accessible FAQ Accordion */
function initFaqAccordion() {
  const triggers = document.querySelectorAll(".faq-trigger");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      const contentId = trigger.getAttribute("aria-controls");
      const contentEl = document.getElementById(contentId);
      const parentItem = trigger.closest(".faq-item");

      trigger.setAttribute("aria-expanded", String(!isExpanded));
      if (contentEl) contentEl.hidden = isExpanded;
      if (parentItem) parentItem.classList.toggle("is-open", !isExpanded);
    });
  });
}

/* 9. Scroll Reveal */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* 10. Active Navigation Spy & Back to Top Button */
function initScrollSpyAndBackToTop() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const onScroll = () => {
    const scrollY = window.scrollY;

    if (backToTopBtn) {
      backToTopBtn.hidden = scrollY < 420;
    }

    let currentSectionId = "home";
    sections.forEach((section) => {
      const top = section.offsetTop - 130;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${currentSectionId}`);
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}