/* COC VIPBot Frontend Controller, Visual Card Editor & GAS Integration */

const SITE_CONFIG = {
  brandName: "COC VIPBot",
  domain: "https://coc-vipbot.web.id",
  defaultLang: "id",
  telegramBotUsername: "SlashQueenFarmer_bot",
  gasWebAppUrl: "https://script.google.com/macros/s/AKfycbx-YGtUIh9_6_ArE-pbDUrSW4QpmHq6et2nECg2jKsuTm_G17AUPtMnisitozmYjg0F/exec",

  showcaseVideoMp4: "https://dl.coc-vipbot.web.id/showcase.mp4",
  showcaseYoutubeEmbed: "",
  qrisIndoImage: "assets/images/qris_indo.png",
  qrisBinanceImage: "assets/images/qris_binance.png",

  pricing: {
    trial: {
      daysIdr: 1, daysUsdt: 1,
      idrCurr: "Rp", idrVal: "0", idrRaw: 0, idrOld: "", idrOldRaw: 0,
      usdtCurr: "USDT", usdtVal: "0", usdtRaw: 0, usdtOld: "", usdtOldRaw: 0,
      tgCodeIdr: "TRIAL", tgCodeUsdt: "TRIAL"
    },
    weekly: {
      daysIdr: 14, daysUsdt: 20,
      idrCurr: "Rp", idrVal: "30.000", idrRaw: 30000, idrOld: "Rp 90.000", idrOldRaw: 90000,
      usdtCurr: "$", usdtVal: "2 USDT", usdtRaw: 2, usdtOld: "$6 USDT", usdtOldRaw: 6,
      tgCodeIdr: "BUY_7_QRIS_INDO", tgCodeUsdt: "BUY_7_BINANCE"
    },
    monthly: {
      daysIdr: 30, daysUsdt: 30,
      idrCurr: "Rp", idrVal: "99.000", idrRaw: 99000, idrOld: "Rp 297.000", idrOldRaw: 297000,
      usdtCurr: "$", usdtVal: "6.50 USDT", usdtRaw: 6.5, usdtOld: "$19.50 USDT", usdtOldRaw: 19.5,
      tgCodeIdr: "BUY_30_QRIS_INDO", tgCodeUsdt: "BUY_30_BINANCE"
    },
    lifetime: {
      daysIdr: 36500, daysUsdt: 36500,
      idrCurr: "Rp", idrVal: "499.000", idrRaw: 499000, idrOld: "Rp 1.497.000", idrOldRaw: 1497000,
      usdtCurr: "$", usdtVal: "32.00 USDT", usdtRaw: 32, usdtOld: "$96.00 USDT", usdtOldRaw: 96,
      tgCodeIdr: "BUY_LIFETIME_QRIS_INDO", tgCodeUsdt: "BUY_LIFETIME_BINANCE"
    }
  },

  downloadUrl: "https://dl.coc-vipbot.web.id/COC-VIPBot-Setup.zip",
  discordUrl: "https://discord.gg/YyRhX7uPvp",
  telegramUrl: "https://t.me/SlashQueenFarmer_bot",
  communityUrl: "https://discord.gg/YyRhX7uPvp",
  supportUrl: "https://t.me/SlashQueenFarmer_bot"
};

const I18N_DICT = {
  id: {
    nav_home: "Home",
    nav_features: "Features",
    nav_showcase: "Showcase",
    nav_how: "Setup",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",
    nav_download: "Download .EXE",
    nav_cta: "Trial 24 Jam",
    nav_portal: "Portal Key / Login",
    hero_meta_tech: "Windows Desktop (.EXE) · OpenCV & ADB",
    hero_title: "Otomatisasi Farming, Ranked Loop, dan Upgrade Wall Clash of Clans.",
    hero_desc: "Jalankan rotasi serangan Ranked ke Farming, pemindaian deadbase, dan upgrade Wall otomatis di Home Village maupun Builder Base. Bekerja secara visual melalui ADB di LDPlayer dan MuMuPlayer dengan konfigurasi terpisah untuk setiap akun.",
    spec_1_k: "Target Resolusi",
    spec_2_k: "Mode Desa",
    spec_3_k: "Multi-Akun",
    spec_3_v: "Profil Mandiri per Emulator",
    hero_btn_primary: "Klaim Trial Gratis 1 Hari",
    hero_btn_download: "Download Installer (.ZIP)",
    hero_btn_discord: "Gabung Discord & Testimoni",
    mock_switch_village: "Ganti Desa (Asal / Malam)",
    mock_min_loot: "MINIMAL LOOT FARMING (0 = LANGSUNG SERANG)",
    mock_malam_desc: "Deploy 1 Hero + 6 Troop otomatis, aktivasi skill berkala, dan Auto Upgrade Wall Desa Malam.",
    trust_label1: "Arsitektur Multi-Akun",
    trust_label2: "Siklus Pertempuran",
    trust_label3: "Pemulihan Otomatis",
    trust_label4: "Metode Transaksi",
    feat_sec_title: "Modul Otomatisasi COC VIPBot",
    feat_sec_sub: "Enam modul inti untuk menjaga perolehan resource tetap berjalan dan mengalokasikannya langsung ke peningkatan Wall selama event Hammer Jam menuju Town Hall 19.",
    feat_1_desc: "Menyelesaikan kuota serangan Ranked terlebih dahulu, kemudian berpindah otomatis ke mode Farming untuk memfilter base berdasarkan batas minimal Gold, Elixir, dan Dark Elixir.",
    feat_2_desc: "Mencegah resource meluap di storage. Saat saldo melewati ambang batas, bot mendeteksi tombol upgrade secara visual dan menaikkan level beberapa Wall sekaligus.",
    feat_3_desc: "Bekerja tanpa menyuntikkan kode ke memori game. Dilengkapi variasi koordinat sentuhan, klaim Star Bonus harian, dan masuk ulang otomatis saat koneksi terputus.",
    feat_4_desc: "Aplikasi dilengkapi pembaru otomatis 1-klik langsung dari antarmuka bot setiap kali ada pembaruan fitur atau penyesuaian aset Town Hall 19.",
    feat_5_desc: "Jalankan beberapa jendela MuMuPlayer atau LDPlayer secara bersamaan di satu PC. Setiap instance menyimpan profil Army dan konfigurasi Wall secara terpisah.",
    feat_6_desc: "Otomatisasi penuh untuk Desa Malam: menurunkan 1 Hero dan 6 Troop dengan cepat, memicu skill berkala, serta menaikkan level Wall Builder Base secara mandiri.",
    show_sec_title: "Rekaman Alur Kerja Bot",
    show_sec_sub: "Cuplikan langsung bagaimana COC VIPBot memindai nilai loot, menurunkan pasukan, mereset kamera (Pinch Zoom-Out), dan meng-upgrade Wall.",
    show_sim_title: "Putar Pratinjau Alur Kerja",
    show_sim_sub: "Menghubungkan ke stream video dari dl.coc-vipbot.web.id/showcase.mp4",
    vc_label_1: "Scan ADB & Konfigurasi Set Army",
    vc_label_2: "Filter Deadbase & Penurunan Pasukan",
    vc_label_3: "Auto Upgrade Wall & Pinch Zoom-Out",
    how_eyebrow: "PROSEDUR KONFIGURASI",
    how_sec_title: "Empat Langkah Menjalankan Bot",
    how_sec_sub: "Dari mengunduh paket aplikasi hingga rotasi farming berjalan mandiri hanya membutuhkan waktu beberapa menit.",
    how_1_title: "Unduh .EXE & Aktifkan Lisensi",
    how_1_desc: "Unduh paket COC-VIPBot-Setup.zip, lalu klaim Serial Key Trial Gratis 24 Jam melalui Server Discord atau Bot Telegram resmi kami.",
    how_2_title: "Atur Emulator ke 1600×900",
    how_2_desc: "Setel resolusi LDPlayer atau MuMuPlayer ke 1600×900 (240 DPI). Klik tombol Scan di aplikasi bot untuk mengunci port ADB masing-masing emulator.",
    how_3_title: "Konfigurasi Army & Ambang Wall",
    how_3_desc: "Tentukan jumlah slot pasukan pada menu Set Army, kemudian aktifkan Auto Upgrade Wall beserta batas minimal Gold/Elixir di More Option.",
    how_4_title: "Mulai Rotasi Otomatis",
    how_4_desc: "Tekan Start. Bot akan menuntaskan jatah Ranked, beralih ke Farming, mengklaim Star Bonus, dan meng-upgrade Wall secara berkelanjutan.",
    price_eyebrow: "LISENSI & HAMMER TIME SPECIAL PROMO",
    price_sec_title: "Pilih Durasi Lisensi",
    price_sec_sub: "Seluruh paket membuka 100% fitur aplikasi tanpa batasan modul. Mendukung pembayaran via QRIS Indonesia (IDR) dan Binance Pay (USDT).",
    promo_pill_1: "HAMMER TIME SPECIAL DEAL",
    promo_pill_2: "BONUS DURASI & KODE PROMO",
    promo_banner_sub: "Nikmati durasi ekstra pada paket mingguan atau gunakan kode voucher diskon saat checkout untuk potongan harga langsung.",
    promo_stamp_sub: "LIMITED TIME OFFER",
    promo_cut_label: "HEMAT 67%",
    tier1_name: "Trial Free",
    tier1_free_tag: "AKSES PENUH 24 JAM",
    tier1_period: "/ 1 Hari",
    tier1_desc: "Uji coba langsung seluruh fitur bot di PC Anda selama 24 jam penuh tanpa biaya via Discord atau Telegram.",
    tier1_btn: "Klaim Trial (Telegram)",
    tier1_btn_dc: "Klaim Trial via Discord",
    tier2_name: "Hammer Time Promo",
    tier2_desc: "Paket akselerasi mingguan dengan tambahan bonus hari aktif untuk mengejar progres Wall dan event Clan Games.",
    tier2_btn: "Ambil Promo Hammer Time",
    tier3_ribbon: "BEST MONTHLY · HEMAT 67%",
    tier3_name: "Paket 1 Bulan",
    tier3_desc: "Pilihan paling efisien untuk farming bulanan. Siapkan seluruh Wall dan Hero Anda menyambut rilisnya Town Hall 19.",
    tier3_btn: "Ambil Promo 1 Bulan",
    tier4_ribbon: "BEST VALUE · SEKALI BAYAR SELAMANYA",
    tier4_pill: "Permanen",
    tier4_period: "/ Selamanya",
    tier4_desc: "Satu kali pembayaran untuk akses permanen tanpa biaya bulanan, termasuk seluruh update Town Hall 19 dan Role VIPP Discord.",
    tier4_btn: "Ambil Paket Life Time",
    faq_sec_title: "Pertanyaan Umum (FAQ)",
    faq_sec_sub: "Penjelasan teknis seputar klaim Trial, cara kerja deteksi visual OpenCV, Multi-Instances, dan metode pembayaran.",
    faq_q1: "Apakah Trial Free 1 Hari bisa diklaim langsung dari Discord maupun Telegram?",
    faq_a1: "Ya. Anda dapat mengklaim Serial Key Trial Gratis 1 Hari (membuka seluruh fitur) melalui ruang #claim-free-trial di Server Discord kami atau langsung melalui Bot Telegram resmi kami.",
    faq_q2: "Bagaimana cara mengecek masa aktif Serial Key saya di website ini?",
    faq_a2: "Klik tombol Portal Key / Login di pojok kanan atas halaman, lalu masukkan Serial Key Anda tanpa perlu password. Sistem akan langsung menampilkan status lisensi, sisa waktu aktif, dan status perangkat HWID Anda.",
    faq_q3: "Apa itu Support Multi Instances dan apakah pengaturannya terpisah?",
    faq_a3: "Support Multi Instances memungkinkan Anda menjalankan beberapa jendela Bot untuk beberapa emulator (MuMuPlayer / LDPlayer) secara bersamaan di 1 PC. Setiap instance menyimpan profil Set Army dan pengaturan Wall masing-masing tanpa saling menimpa.",
    faq_q4: "Di mana saya bisa melihat testimoni pengguna yang sudah membeli?",
    faq_a4: "Silakan bergabung ke Server Discord resmi kami (https://discord.gg/YyRhX7uPvp) dan buka kanal testimoni pembeli. Hanya pengguna dengan lisensi aktif terverifikasi yang memiliki akses untuk mengirimkan ulasan dan tangkapan layar hasil farming di sana.",
    faq_q5: "Bagaimana jika saya ingin pindah PC (Reset HWID)?",
    faq_a5: "Demi keamanan lisensi, pelepasan perangkat lama (Reset HWID) diverifikasi oleh Admin. Anda dapat mengajukan permintaan Reset HWID melalui menu Key Saya di Bot Telegram resmi kami atau menghubungi Admin melalui Portal Key.",
    faq_q6: "Bagaimana cara menggunakan Kode Promo saat membeli paket?",
    faq_a6: "Pilih paket lisensi yang Anda inginkan di bagian Pricing, masukkan kode voucher pada kolom Kode Promo di jendela pembayaran, lalu klik Terapkan. Harga tagihan di web maupun di Bot Telegram akan otomatis terpotong sesuai diskon.",
    cta_eyebrow: "MULAI OTOMATISASI DESA ANDA",
    cta_title: "Siapkan Progres Wall dan Hero Menuju Town Hall 19",
    cta_desc: "Unduh installer aplikasi sekarang, lihat ulasan komunitas di Discord, atau langsung klaim lisensi Trial 24 Jam tanpa biaya.",
    cta_btn_discord: "Gabung Discord (Testimoni & Trial)",
    cta_btn1: "Lihat Promo Hammer Time",
    footer_bio: "Utilitas otomatisasi desktop untuk Clash of Clans dengan dukungan Loot Finder, Auto Upgrade Wall, rotasi Ranked ke Farming, Builder Base, dan Multi-Instance.",
    chk_method_lbl: "Pilih Metode Pembayaran:",
    chk_promo_lbl: "Punya Kode Promo?",
    chk_promo_btn: "Terapkan",
    portal_badge: "LICENSE & ADMIN PORTAL",
    portal_title: "Portal Akses COC VIPBot",
    portal_sub: "Masukkan Serial Key untuk melihat status masa aktif lisensi Anda, atau masuk ke panel Admin untuk mengedit kartu harga dan kode promo.",
    portal_tab_user: "Cek Serial Key (User)",
    portal_tab_admin: "Login Admin",
    portal_key_lbl: "Masukkan Kode Serial Key Anda:",
    portal_key_btn: "Cek Status"
  },
  en: {
    nav_home: "Home",
    nav_features: "Features",
    nav_showcase: "Showcase",
    nav_how: "Setup",
    nav_pricing: "Pricing",
    nav_faq: "FAQ",
    nav_download: "Download .EXE",
    nav_cta: "24h Free Trial",
    nav_portal: "Portal / Login",
    hero_meta_tech: "Windows Desktop (.EXE) · OpenCV & ADB",
    hero_title: "Automated Farming, Ranked Loops, and Wall Upgrades for Clash of Clans.",
    hero_desc: "Run automated Ranked-to-Farming attack rotations, deadbase scanning, and continuous Wall upgrades across Home Village and Builder Base. Operates visually via ADB on LDPlayer and MuMuPlayer with isolated profiles per account.",
    spec_1_k: "Target Resolution",
    spec_2_k: "Village Modes",
    spec_3_k: "Multi-Account",
    spec_3_v: "Isolated Profile per Emulator",
    hero_btn_primary: "Claim 1-Day Free Trial",
    hero_btn_download: "Download Installer (.ZIP)",
    hero_btn_discord: "Join Discord & Reviews",
    mock_switch_village: "Switch Base (Home / Builder)",
    mock_min_loot: "MINIMUM FARMING LOOT (0 = INSTANT ATTACK)",
    mock_malam_desc: "Deploys 1 Hero + 6 Troops automatically, triggers timed abilities, and upgrades Builder Base Walls.",
    trust_label1: "Multi-Account Architecture",
    trust_label2: "Battle Rotation",
    trust_label3: "Automated Recovery",
    trust_label4: "Payment Gateways",
    feat_sec_title: "COC VIPBot Core Modules",
    feat_sec_sub: "Six automation modules engineered to keep resource income flowing and allocate surplus loot directly into Wall upgrades ahead of Town Hall 19.",
    feat_1_desc: "Completes your Ranked attack quota first, then transitions automatically into Farming mode to filter deadbases by minimum Gold, Elixir, and Dark Elixir.",
    feat_2_desc: "Prevents overflowing storages. Whenever balances exceed your threshold, the bot visually locates upgrade buttons and upgrades multiple Wall segments at once.",
    feat_3_desc: "Operates without modifying game memory. Uses randomized tap offsets, claims daily Star Bonuses, and reconnects automatically after network drops.",
    feat_4_desc: "Includes a built-in 1-click Auto-Updater directly inside the desktop client whenever new features or Town Hall 19 templates are released.",
    feat_5_desc: "Run multiple MuMuPlayer or LDPlayer windows concurrently on a single PC. Each instance saves its own Army and Wall configuration independently.",
    feat_6_desc: "Full Builder Base automation: rapid 1 Hero + 6 Troops deployment, timed Hero Ability activation, and automatic Builder Base Wall upgrades.",
    show_sec_title: "Bot Workflow Recording",
    show_sec_sub: "Direct capture showing how COC VIPBot scans loot values, deploys troops, resets camera zoom (Pinch Zoom-Out), and upgrades Walls.",
    show_sim_title: "Play Workflow Preview",
    show_sim_sub: "Connecting to video stream at dl.coc-vipbot.web.id/showcase.mp4",
    vc_label_1: "ADB Scan & Set Army Setup",
    vc_label_2: "Deadbase Filter & Troop Deployment",
    vc_label_3: "Auto Upgrade Wall & Pinch Zoom-Out",
    how_eyebrow: "CONFIGURATION PROCEDURE",
    how_sec_title: "Four Steps to Run the Bot",
    how_sec_sub: "Going from downloading the client package to unattended 24/7 farming takes only a few minutes.",
    how_1_title: "Download .EXE & Activate Key",
    how_1_desc: "Download COC-VIPBot-Setup.zip, then claim your 24-Hour Free Trial Serial Key via our Discord Server or official Telegram Bot.",
    how_2_title: "Set Emulator to 1600×900",
    how_2_desc: "Configure LDPlayer or MuMuPlayer to 1600×900 (240 DPI). Click Scan inside the bot to bind the target ADB port for each account.",
    how_3_title: "Configure Army & Wall Thresholds",
    how_3_desc: "Record your troop slots in Set Army, then enable Auto Upgrade Wall and minimum Gold/Elixir thresholds under More Option.",
    how_4_title: "Start Automated Rotation",
    how_4_desc: "Press Start. The bot will complete Ranked loops, switch to Farming, claim Star Bonuses, and upgrade your Walls continuously.",
    price_eyebrow: "LICENSING & HAMMER TIME SPECIAL PROMO",
    price_sec_title: "Select License Duration",
    price_sec_sub: "Every license unlocks 100% of application features with no module restrictions. Supports Indonesian QRIS (IDR) and Binance Pay (USDT).",
    promo_pill_1: "HAMMER TIME SPECIAL DEAL",
    promo_pill_2: "DURATION BONUS & PROMO CODE",
    promo_banner_sub: "Enjoy bonus active days on our weekly deal or enter a voucher code at checkout for an instant discount.",
    promo_stamp_sub: "LIMITED TIME OFFER",
    promo_cut_label: "SAVE 67%",
    tier1_name: "Trial Free",
    tier1_free_tag: "FULL 24H ACCESS",
    tier1_period: "/ 1 Day",
    tier1_desc: "Test all bot features on your PC for a full 24 hours at zero cost via Discord or Telegram.",
    tier1_btn: "Claim Trial (Telegram)",
    tier1_btn_dc: "Claim Trial on Discord",
    tier2_name: "Hammer Time Deal",
    tier2_desc: "Accelerated weekly package with bonus active days to boost your Wall progression and Clan Games.",
    tier2_btn: "Grab Hammer Time Deal",
    tier3_ribbon: "BEST MONTHLY · SAVE 67%",
    tier3_name: "1 Month Plan",
    tier3_desc: "Most efficient monthly option. Prepare your Walls and Heroes for a full 30 days ahead of Town Hall 19.",
    tier3_btn: "Get 1 Month Promo",
    tier4_ribbon: "BEST VALUE · ONE-TIME PAYMENT",
    tier4_pill: "Permanent",
    tier4_period: "/ Lifetime",
    tier4_desc: "Single payment for permanent access with zero recurring fees, including all Town Hall 19 updates and VIPP Discord Role.",
    tier4_btn: "Get Life Time License",
    faq_sec_title: "Frequently Asked Questions (FAQ)",
    faq_sec_sub: "Technical details regarding Trial keys, OpenCV visual recognition, Multi-Instances, and payment methods.",
    faq_q1: "Can I claim the 1-Day Free Trial from both Discord and Telegram?",
    faq_a1: "Yes. You can claim a 24-Hour Free Trial Serial Key (unlocking all features) in the #claim-free-trial channel on our Discord Server or via our official Telegram Bot.",
    faq_q2: "How do I check my Serial Key status on this website?",
    faq_a2: "Click the Portal / Login button in the top right corner, then enter your Serial Key without any password. The system will instantly display license status, remaining time, and HWID device binding.",
    faq_q3: "What is Support Multi Instances and are settings isolated?",
    faq_a3: "Support Multi Instances allows you to run multiple Bot windows for multiple emulators (MuMuPlayer / LDPlayer) concurrently on 1 PC. Each instance saves its own Set Army and Wall settings independently.",
    faq_q4: "Where can I see testimonials from verified buyers?",
    faq_a4: "Join our official Discord Server (https://discord.gg/YyRhX7uPvp) and open the buyer reviews channel. Only verified users with active licenses can post reviews and farming screenshots there.",
    faq_q5: "How do I request a PC transfer (Reset HWID)?",
    faq_a5: "For license security, legacy device removal (HWID reset) is verified by Admin. You can submit an HWID reset request via the Key Saya menu in our official Telegram Bot or contact Admin through the Portal.",
    faq_q6: "How do I use Promo Codes when purchasing a plan?",
    faq_a6: "Select your desired license plan in Pricing, enter your voucher code in the Promo Code field at checkout, and click Apply. The invoice price on the web and in Telegram will automatically discount.",
    cta_eyebrow: "START AUTOMATING YOUR VILLAGE",
    cta_title: "Prepare Your Walls and Heroes for Town Hall 19",
    cta_desc: "Download the client installer now, check community reviews on Discord, or claim a 24-Hour Free Trial license at zero cost.",
    cta_btn_discord: "Join Discord (Reviews & Trial)",
    cta_btn1: "View Hammer Time Promo",
    footer_bio: "Desktop automation utility for Clash of Clans featuring Loot Finder, Auto Upgrade Wall, Ranked-to-Farming rotation, Builder Base, and Multi-Instance support.",
    chk_method_lbl: "Select Payment Method:",
    chk_promo_lbl: "Have a Promo Code?",
    chk_promo_btn: "Apply",
    portal_badge: "LICENSE & ADMIN PORTAL",
    portal_title: "COC VIPBot Access Portal",
    portal_sub: "Enter your Serial Key to check your license status, or log in to the Admin panel to edit pricing cards and promo codes.",
    portal_tab_user: "Check Serial Key (User)",
    portal_tab_admin: "Admin Login",
    portal_key_lbl: "Enter Your Serial Key:",
    portal_key_btn: "Check Status"
  }
};

let currentLang = localStorage.getItem("coc_vipbot_lang") || SITE_CONFIG.defaultLang;
let currentPaymentRegion = localStorage.getItem("coc_vipbot_region") || (currentLang === "en" ? "usdt" : "idr");
let activeCheckoutTier = "monthly";
let appliedPromoCode = "";
let appliedDiscountInfo = null;
let currentAdminPassword = "";

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  initLanguageSwitcher();
  initPaymentRegionSwitcher();
  initHeroBotUiReplica();
  initMobileNav();
  initVideoShowcase();
  initCheckoutModalAndLinks();
  initPortalModal();
  initFaqAccordion();
  initScrollSpyAndBackToTop();
  fetchLiveConfigFromSheets();
});

async function postToGas(payloadObj) {
  const res = await fetch(SITE_CONFIG.gasWebAppUrl, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payloadObj)
  });
  return await res.json();
}

function applyRemotePricingToState(remotePricing) {
  if (!remotePricing) return;
  Object.keys(remotePricing).forEach((tKey) => {
    if (SITE_CONFIG.pricing[tKey]) {
      const rem = remotePricing[tKey];
      SITE_CONFIG.pricing[tKey].daysIdr = Number(rem.daysIdr) || SITE_CONFIG.pricing[tKey].daysIdr;
      SITE_CONFIG.pricing[tKey].daysUsdt = Number(rem.daysUsdt) || SITE_CONFIG.pricing[tKey].daysUsdt;
      SITE_CONFIG.pricing[tKey].idrVal = rem.idrVal;
      SITE_CONFIG.pricing[tKey].idrRaw = Number(rem.idrRaw) || 0;
      SITE_CONFIG.pricing[tKey].idrOld = rem.idrOld || "";
      SITE_CONFIG.pricing[tKey].idrOldRaw = Number(rem.idrOldRaw) || 0;
      SITE_CONFIG.pricing[tKey].usdtVal = rem.usdtVal;
      SITE_CONFIG.pricing[tKey].usdtRaw = Number(rem.usdtRaw) || 0;
      SITE_CONFIG.pricing[tKey].usdtOld = rem.usdtOld || "";
      SITE_CONFIG.pricing[tKey].usdtOldRaw = Number(rem.usdtOldRaw) || 0;
    }
  });
  updatePricingDisplay();
}

async function fetchLiveConfigFromSheets() {
  if (!SITE_CONFIG.gasWebAppUrl || SITE_CONFIG.gasWebAppUrl.trim() === "") return;
  try {
    const res = await fetch(`${SITE_CONFIG.gasWebAppUrl}?action=web_public_config&t=${Date.now()}`, {
      method: "GET"
    });
    const data = await res.json();
    if (data && data.ok && data.pricing) {
      applyRemotePricingToState(data.pricing);
    }
  } catch (e) {}
}

function initLanguageSwitcher() {
  const langBtn = document.getElementById("langSwitchBtn");

  const applyLanguage = (lang) => {
    currentLang = lang === "en" ? "en" : "id";
    localStorage.setItem("coc_vipbot_lang", currentLang);
    document.documentElement.lang = currentLang;

    const dict = I18N_DICT[currentLang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
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
      currentPaymentRegion = nextLang === "en" ? "usdt" : "idr";
      localStorage.setItem("coc_vipbot_region", currentPaymentRegion);
      applyLanguage(nextLang);
    });
  }
}

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
  const isEn = currentLang === "en";
  const btnIdr = document.getElementById("regionBtnIdr");
  const btnUsdt = document.getElementById("regionBtnUsdt");

  if (btnIdr) btnIdr.classList.toggle("active-region", !isUsdt);
  if (btnUsdt) btnUsdt.classList.toggle("active-region", isUsdt);

  Object.keys(SITE_CONFIG.pricing).forEach((tierKey) => {
    const cfg = SITE_CONFIG.pricing[tierKey];
    const currEl = document.querySelector(`[data-price-curr="${tierKey}"]`);
    const valEl = document.querySelector(`[data-price-val="${tierKey}"]`);
    const oldEl = document.querySelector(`[data-price-old="${tierKey}"]`);
    const periodEl = document.querySelector(`[data-price-period="${tierKey}"]`);

    if (currEl) currEl.textContent = isUsdt ? cfg.usdtCurr : cfg.idrCurr;
    if (valEl) valEl.textContent = isUsdt ? cfg.usdtVal : cfg.idrVal;
    if (oldEl) {
      const oldTxt = isUsdt ? cfg.usdtOld : cfg.idrOld;
      oldEl.textContent = oldTxt;
      oldEl.hidden = !oldTxt || oldTxt.trim() === "";
    }
    if (periodEl && tierKey !== "lifetime" && tierKey !== "trial") {
      const activeDays = isUsdt ? cfg.daysUsdt : cfg.daysIdr;
      periodEl.textContent = `/ ${activeDays} ${isEn || isUsdt ? "Days" : "Hari"}`;
    }
  });

  const wCfg = SITE_CONFIG.pricing.weekly;
  const mCfg = SITE_CONFIG.pricing.monthly;
  const activeWeeklyDays = isUsdt ? wCfg.daysUsdt : wCfg.daysIdr;

  const weeklyRibbon = document.getElementById("weeklyRibbon");
  const weeklyBonusBadge = document.getElementById("weeklyBonusBadge");
  if (weeklyRibbon) {
    weeklyRibbon.textContent = isEn || isUsdt
      ? `HAMMER TIME · ${activeWeeklyDays} DAYS ACCESS`
      : `HAMMER TIME · ${activeWeeklyDays} HARI PENUH`;
  }
  if (weeklyBonusBadge) {
    weeklyBonusBadge.textContent = isEn || isUsdt
      ? `${activeWeeklyDays} DAYS ACCESS`
      : `${activeWeeklyDays} HARI AKSES`;
  }

  const regionSubIdr = document.getElementById("regionSubIdr");
  const regionSubUsdt = document.getElementById("regionSubUsdt");
  if (regionSubIdr) {
    regionSubIdr.textContent = `Promo Rp ${wCfg.idrVal} = ${wCfg.daysIdr} Hari Penuh`;
  }
  if (regionSubUsdt) {
    regionSubUsdt.textContent = `Special Deal $${wCfg.usdtVal} = ${wCfg.daysUsdt} Days Access`;
  }

  const mainBannerTitle = document.getElementById("mainPromoBannerTitle");
  if (mainBannerTitle) {
    mainBannerTitle.textContent = isEn
      ? `Indonesia: Rp ${wCfg.idrVal} for ${wCfg.daysIdr} Days · International: $${wCfg.usdtVal} for ${wCfg.daysUsdt} Days Access`
      : `Indonesia: Rp ${wCfg.idrVal} Dapat ${wCfg.daysIdr} Hari Penuh · International: $${wCfg.usdtVal} Dapat ${wCfg.daysUsdt} Days Access`;
  }

  const heroPromoLink = document.getElementById("heroPromoLink");
  if (heroPromoLink) {
    heroPromoLink.textContent = `Hammer Time Deal: Rp ${wCfg.idrVal} (${wCfg.daysIdr} Hari) / $${wCfg.usdtVal} (${wCfg.daysUsdt} Days)`;
  }

  const monthlyPill = document.getElementById("monthlyPerDayPill");
  if (monthlyPill) {
    if (isUsdt) {
      const perDayUsdt = (mCfg.usdtRaw / Math.max(1, mCfg.daysUsdt)).toFixed(2);
      monthlyPill.textContent = isEn ? `~$${perDayUsdt} / day` : `~$${perDayUsdt} / hari`;
    } else {
      const perDayIdr = Math.round(mCfg.idrRaw / Math.max(1, mCfg.daysIdr))
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      monthlyPill.textContent = isEn ? `~Rp ${perDayIdr} / day` : `~Rp ${perDayIdr} / hari`;
    }
  }
}

function initHeroBotUiReplica() {
  const switchBtn = document.getElementById("mockSwitchModeBtn");
  const badge = document.getElementById("mockVillageBadge");
  const panelAsal = document.getElementById("mockPanelAsal");
  const panelMalam = document.getElementById("mockPanelMalam");
  const startBtn = document.getElementById("mockBtnStart");
  const stopBtn = document.getElementById("mockBtnStop");
  const emuStatus = document.getElementById("mockEmuStatus");
  const toggleLogBtn = document.getElementById("mockBtnToggleLog");
  const logContainer = document.getElementById("mockLogContainer");
  const dynamicLog = document.getElementById("mockDynamicLog");
  const remBadge = document.getElementById("mockRemLoop");

  let isMalam = false;
  let isRunning = true;
  let remCount = 8;

  if (switchBtn && badge && panelAsal && panelMalam) {
    switchBtn.addEventListener("click", () => {
      isMalam = !isMalam;
      panelAsal.hidden = isMalam;
      panelMalam.hidden = !isMalam;
      if (isMalam) {
        badge.textContent = currentLang === "en" ? "BUILDER BASE" : "DESA MALAM";
        badge.classList.add("malam-badge");
      } else {
        badge.textContent = currentLang === "en" ? "HOME VILLAGE" : "DESA ASAL";
        badge.classList.remove("malam-badge");
      }
    });
  }

  if (startBtn && emuStatus && dynamicLog) {
    startBtn.addEventListener("click", () => {
      isRunning = true;
      emuStatus.textContent = "RUNNING";
      emuStatus.style.color = "#34D399";
      dynamicLog.textContent = "[09:15:22] [ENGINE] Loop pertempuran dimulai oleh pengguna.";
    });
  }

  if (stopBtn && emuStatus && dynamicLog) {
    stopBtn.addEventListener("click", () => {
      isRunning = false;
      emuStatus.textContent = "PAUSED";
      emuStatus.style.color = "#FBBF24";
      dynamicLog.textContent = "[09:15:24] [ENGINE] Siklus dihentikan sementara (Standby).";
    });
  }

  if (toggleLogBtn && logContainer) {
    toggleLogBtn.addEventListener("click", () => {
      const willHide = !logContainer.hidden;
      logContainer.hidden = willHide;
      toggleLogBtn.textContent = willHide ? "▼" : "▲";
    });
  }

  const sampleLogs = [
    "[09:15:10] [WALL] Upgrade 8 segmen Wall menggunakan Gold selesai.",
    "[09:15:12] [ZOOM] Mereset kamera (Pinch Zoom-Out via /dev/input/event2).",
    "[09:15:14] [SWITCH] Kuota Ranked selesai, berpindah ke Mode Farming.",
    "[09:15:18] [LOOT] Gold: 1,120,000 | Elixir: 980,500 (Memenuhi syarat).",
    "[09:15:20] [DEPLOY] Menurunkan pasukan Home Village dalam 2.45 detik."
  ];
  let logIdx = 0;

  setInterval(() => {
    if (!isRunning) return;
    logIdx = (logIdx + 1) % sampleLogs.length;
    if (dynamicLog) {
      dynamicLog.textContent = sampleLogs[logIdx];
    }
    if (logIdx === 0 && remBadge) {
      remCount = remCount > 1 ? remCount - 1 : 8;
      const prefix = currentLang === "en" ? "Left:" : "Sisa:";
      remBadge.textContent = `${prefix} R:${remCount}→15`;
    }
  }, 3400);
}

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

function initVideoShowcase() {
  const nativeVideo = document.getElementById("showcaseNativeVideo");
  const youtubeIframe = document.getElementById("showcaseYoutubeIframe");
  const posterOverlay = document.getElementById("videoPosterOverlay");

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
  }
}

function initCheckoutModalAndLinks() {
  const chkModal = document.getElementById("checkoutModal");
  const chkBackdrop = document.getElementById("chkModalBackdrop");
  const chkCloseX = document.getElementById("chkCloseXBtn");
  const chkBadge = document.getElementById("chkTierBadge");
  const chkTitle = document.getElementById("chkModalTitle");
  const chkOldPrice = document.getElementById("chkOldPriceDisplay");
  const chkPrice = document.getElementById("chkPriceDisplay");
  const chkPaySelectorWrap = document.getElementById("chkPaymentSelectorWrap");
  const payTabIndo = document.getElementById("payTabQrisIndo");
  const payTabBinance = document.getElementById("payTabBinance");
  const qrPreviewBox = document.getElementById("chkQrPreviewBox");
  const qrImage = document.getElementById("chkQrImage");
  const tgActionBtn = document.getElementById("chkTelegramActionBtn");
  const tgBtnText = document.getElementById("chkTelegramBtnText");
  const dcBtnText = document.getElementById("chkDiscordBtnText");
  const promoInput = document.getElementById("chkPromoInput");
  const applyPromoBtn = document.getElementById("chkApplyPromoBtn");
  const promoFeedback = document.getElementById("chkPromoFeedback");

  const getTierTitle = (tierKey) => {
    const isEn = currentLang === "en";
    const isUsdt = currentPaymentRegion === "usdt";
    const cfg = SITE_CONFIG.pricing[tierKey] || SITE_CONFIG.pricing.monthly;
    const d = isUsdt ? cfg.daysUsdt : cfg.daysIdr;

    if (tierKey === "trial") {
      return isEn ? "1-Day Free Trial (All Features Unlocked)" : "Trial Gratis 1 Hari (All Fitur Unlock)";
    }
    if (tierKey === "weekly") {
      return isEn ? `Hammer Time Deal (${d} Days Access)` : `Hammer Time Promo (${d} Hari Penuh)`;
    }
    if (tierKey === "monthly") {
      return isEn ? `1 Month Plan (${d} Days)` : `Paket 1 Bulan (${d} Hari)`;
    }
    return isEn ? "Life Time VIPP (Permanent)" : "Paket Life Time VIPP (Selamanya)";
  };

  const renderCheckoutState = () => {
    const isEn = currentLang === "en";
    const isUsdt = currentPaymentRegion === "usdt";
    const cfg = SITE_CONFIG.pricing[activeCheckoutTier] || SITE_CONFIG.pricing.monthly;

    if (chkBadge) {
      chkBadge.textContent = activeCheckoutTier === "trial"
        ? (isEn ? "FREE TRIAL ACCESS (24 HOURS)" : "AKSES TRIAL GRATIS (24 JAM)")
        : (isUsdt ? "HAMMER TIME SPECIAL DEAL" : "HAMMER TIME SPECIAL PROMO");
    }

    if (chkTitle) {
      chkTitle.textContent = getTierTitle(activeCheckoutTier);
    }

    if (chkOldPrice) {
      const oldTxt = isUsdt ? cfg.usdtOld : cfg.idrOld;
      if (oldTxt && oldTxt !== "") {
        chkOldPrice.textContent = oldTxt;
        chkOldPrice.hidden = false;
      } else {
        chkOldPrice.hidden = true;
      }
    }

    if (chkPrice) {
      if (appliedDiscountInfo && activeCheckoutTier !== "trial") {
        chkPrice.textContent = isUsdt
          ? `$${appliedDiscountInfo.finalUsdtFormatted}`
          : `Rp ${appliedDiscountInfo.finalIdrFormatted}`;
      } else {
        chkPrice.textContent = isUsdt ? `${cfg.usdtCurr}${cfg.usdtVal}` : `${cfg.idrCurr} ${cfg.idrVal}`;
      }
    }

    if (chkPaySelectorWrap) {
      chkPaySelectorWrap.hidden = activeCheckoutTier === "trial";
    }

    if (payTabIndo) payTabIndo.classList.toggle("active-pay-tab", !isUsdt);
    if (payTabBinance) payTabBinance.classList.toggle("active-pay-tab", isUsdt);

    const qrSrc = isUsdt ? SITE_CONFIG.qrisBinanceImage : SITE_CONFIG.qrisIndoImage;
    if (qrPreviewBox && qrImage) {
      if (activeCheckoutTier !== "trial" && qrSrc && qrSrc.trim() !== "") {
        qrImage.src = qrSrc;
        qrPreviewBox.hidden = false;
      } else {
        qrPreviewBox.hidden = true;
      }
    }

    let tgUrl = `https://t.me/${SITE_CONFIG.telegramBotUsername}?start=TRIAL`;
    if (activeCheckoutTier !== "trial") {
      const tierCodeMap = { weekly: "7", monthly: "30", lifetime: "LIFETIME" };
      const codeStr = tierCodeMap[activeCheckoutTier] || "30";
      const payStr = isUsdt ? "BINANCE" : "QRIS_INDO";
      const promoSuffix = appliedPromoCode ? `_PROMO_${appliedPromoCode}` : "";
      tgUrl = `https://t.me/${SITE_CONFIG.telegramBotUsername}?start=BUY_${codeStr}_${payStr}${promoSuffix}`;
    }

    if (tgActionBtn) {
      tgActionBtn.href = tgUrl;
    }

    if (activeCheckoutTier === "trial") {
      if (tgBtnText) {
        tgBtnText.textContent = isEn ? "Claim Free Trial Key in Telegram" : "Klaim Key Trial Gratis di Telegram";
      }
      if (dcBtnText) {
        dcBtnText.textContent = isEn ? "Claim 1-Day Trial on Discord Server" : "Klaim Key Trial 1 Hari di Server Discord";
      }
    } else {
      if (tgBtnText) {
        tgBtnText.textContent = isEn ? "Confirm & Get Key via Telegram Bot" : "Konfirmasi & Ambil Key di Bot Telegram";
      }
      if (dcBtnText) {
        dcBtnText.textContent = isEn ? "View Buyer Testimonials on Discord" : "Cek Testimoni Pembeli di Server Discord";
      }
    }
  };

  const openCheckoutModal = (tierKey) => {
    activeCheckoutTier = tierKey;
    appliedPromoCode = "";
    appliedDiscountInfo = null;
    if (promoInput) promoInput.value = "";
    if (promoFeedback) {
      promoFeedback.hidden = true;
      promoFeedback.textContent = "";
    }
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

  if (applyPromoBtn && promoInput && promoFeedback) {
    applyPromoBtn.addEventListener("click", async () => {
      const codeVal = promoInput.value.trim();
      if (!codeVal) {
        promoFeedback.hidden = false;
        promoFeedback.className = "chk-promo-feedback err";
        promoFeedback.textContent = currentLang === "en" ? "Enter a voucher code first." : "Ketik kode voucher terlebih dahulu.";
        return;
      }
      applyPromoBtn.disabled = true;
      applyPromoBtn.textContent = "...";
      try {
        const json = await postToGas({
          action: "web_check_promo",
          promo_code: codeVal,
          tier: activeCheckoutTier,
          region: currentPaymentRegion
        });
        if (json && json.ok) {
          appliedPromoCode = json.code;
          appliedDiscountInfo = json;
          promoFeedback.hidden = false;
          promoFeedback.className = "chk-promo-feedback ok";
          promoFeedback.textContent = `${json.message} (${json.discountLabel})`;
          renderCheckoutState();
        } else {
          appliedPromoCode = "";
          appliedDiscountInfo = null;
          promoFeedback.hidden = false;
          promoFeedback.className = "chk-promo-feedback err";
          promoFeedback.textContent = (json && json.message) || "Kode promo tidak valid.";
          renderCheckoutState();
        }
      } catch (e) {
        promoFeedback.hidden = false;
        promoFeedback.className = "chk-promo-feedback err";
        promoFeedback.textContent = "Gagal memverifikasi kode promo ke server.";
      } finally {
        applyPromoBtn.disabled = false;
        applyPromoBtn.textContent = currentLang === "en" ? "Apply" : "Terapkan";
      }
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

  document.querySelectorAll("[data-config-link]").forEach((el) => {
    const key = el.getAttribute("data-config-link");
    const targetUrl = SITE_CONFIG[key];
    if (targetUrl && targetUrl !== "COMING_SOON" && el.tagName.toLowerCase() === "a") {
      el.setAttribute("href", targetUrl);
      if (targetUrl.startsWith("http")) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && chkModal && !chkModal.hidden) {
      closeCheckoutModal();
    }
  });
}

function initPortalModal() {
  const modal = document.getElementById("portalModal");
  const modalCard = document.getElementById("portalModalCard");
  const backdrop = document.getElementById("portalModalBackdrop");
  const closeBtn = document.getElementById("portalCloseXBtn");
  const openBtn = document.getElementById("openPortalBtn");
  const footerBtn = document.getElementById("footerPortalBtn");

  const tabUser = document.getElementById("tabBtnUserLogin");
  const tabAdmin = document.getElementById("tabBtnAdminLogin");
  const secUser = document.getElementById("portalUserSection");
  const secAdmin = document.getElementById("portalAdminSection");

  const userForm = document.getElementById("userKeyLoginForm");
  const userInput = document.getElementById("userSerialKeyInput");
  const userSubmitBtn = document.getElementById("userLoginSubmitBtn");
  const userFeedback = document.getElementById("userLoginFeedback");
  const userDashboard = document.getElementById("userDashboardCard");

  const adminForm = document.getElementById("adminLoginForm");
  const adminInput = document.getElementById("adminPasswordInput");
  const adminSubmitBtn = document.getElementById("adminLoginSubmitBtn");
  const adminFeedback = document.getElementById("adminLoginFeedback");
  const adminPanel = document.getElementById("adminDashboardPanel");

  const subTabCards = document.getElementById("admSubTabBtnCards");
  const subTabPromos = document.getElementById("admSubTabBtnPromos");
  const viewCards = document.getElementById("admViewCards");
  const viewPromos = document.getElementById("admViewPromos");

  const currBtnIdr = document.getElementById("admCurrBtnIdr");
  const currBtnUsdt = document.getElementById("admCurrBtnUsdt");

  const savePricingBtn = document.getElementById("admSavePricingBtn");
  const pricingFeedback = document.getElementById("admPricingFeedback");
  const savePromoBtn = document.getElementById("admSavePromoBtn");
  const promoFeedback = document.getElementById("admPromoFeedback");

  const openModal = () => {
    if (modal) modal.hidden = false;
    if (userInput && !secUser.hidden) userInput.focus();
  };

  const closeModal = () => {
    if (modal) modal.hidden = true;
  };

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (footerBtn) footerBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  if (tabUser && tabAdmin && secUser && secAdmin) {
    tabUser.addEventListener("click", () => {
      tabUser.classList.add("active-portal-tab");
      tabUser.setAttribute("aria-selected", "true");
      tabAdmin.classList.remove("active-portal-tab");
      tabAdmin.setAttribute("aria-selected", "false");
      secUser.hidden = false;
      secAdmin.hidden = true;
      if (modalCard) modalCard.classList.remove("admin-expanded");
    });

    tabAdmin.addEventListener("click", () => {
      tabAdmin.classList.add("active-portal-tab");
      tabAdmin.setAttribute("aria-selected", "true");
      tabUser.classList.remove("active-portal-tab");
      tabUser.setAttribute("aria-selected", "false");
      secAdmin.hidden = false;
      secUser.hidden = true;
      if (adminPanel && !adminPanel.hidden && modalCard) {
        modalCard.classList.add("admin-expanded");
      }
      if (adminInput && !adminForm.hidden) adminInput.focus();
    });
  }

  // Sub-Tab Switcher di dalam Panel Admin (Tab 1: Kartu Harga vs Tab 2: Kode Promo)
  if (subTabCards && subTabPromos && viewCards && viewPromos) {
    subTabCards.addEventListener("click", () => {
      subTabCards.classList.add("active-adm-subtab");
      subTabPromos.classList.remove("active-adm-subtab");
      viewCards.hidden = false;
      viewPromos.hidden = true;
    });

    subTabPromos.addEventListener("click", () => {
      subTabPromos.classList.add("active-adm-subtab");
      subTabCards.classList.remove("active-adm-subtab");
      viewPromos.hidden = false;
      viewCards.hidden = true;
    });
  }

  // Saklar Mata Uang (IDR vs USDT) pada Kartu Visual Admin
  const switchAdminCardCurrency = (curr) => {
    const isUsdt = curr === "usdt";
    if (currBtnIdr) currBtnIdr.classList.toggle("active-adm-curr", !isUsdt);
    if (currBtnUsdt) currBtnUsdt.classList.toggle("active-adm-curr", isUsdt);

    document.querySelectorAll('[data-curr-box="idr"]').forEach((el) => {
      el.hidden = isUsdt;
    });
    document.querySelectorAll('[data-curr-box="usdt"]').forEach((el) => {
      el.hidden = !isUsdt;
    });
  };

  if (currBtnIdr) {
    currBtnIdr.addEventListener("click", () => switchAdminCardCurrency("idr"));
  }
  if (currBtnUsdt) {
    currBtnUsdt.addEventListener("click", () => switchAdminCardCurrency("usdt"));
  }

  // 1. User Serial Key Login
  if (userForm && userInput && userFeedback && userDashboard) {
    userForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const keyVal = userInput.value.trim();
      if (!keyVal) return;

      if (userSubmitBtn) {
        userSubmitBtn.disabled = true;
        userSubmitBtn.textContent = "...";
      }
      userFeedback.hidden = true;

      try {
        const json = await postToGas({ action: "web_user_login", serial_key: keyVal });
        if (json && json.ok) {
          const lic = json.license;
          document.getElementById("udSerialKey").textContent = lic.serialKey;
          const statusPill = document.getElementById("udStatusPill");
          statusPill.textContent = lic.status;
          statusPill.style.color = lic.status === "ACTIVE" ? "#34D399" : "#F87171";

          document.getElementById("udTypeAndDur").textContent = `${lic.type} (${lic.durationLabel})`;
          document.getElementById("udRemaining").textContent = lic.remaining;
          document.getElementById("udExpiresAt").textContent = lic.expiresAt;
          document.getElementById("udHwid").textContent = lic.hwid;

          userDashboard.hidden = false;
          userFeedback.hidden = false;
          userFeedback.className = "portal-msg success-msg";
          userFeedback.textContent = "Serial Key berhasil diverifikasi.";
        } else {
          userDashboard.hidden = true;
          userFeedback.hidden = false;
          userFeedback.className = "portal-msg error-msg";
          userFeedback.textContent = (json && json.message) || "Serial Key tidak ditemukan.";
        }
      } catch (err) {
        userFeedback.hidden = false;
        userFeedback.className = "portal-msg error-msg";
        userFeedback.textContent = "Gagal terhubung ke server database.";
      } finally {
        if (userSubmitBtn) {
          userSubmitBtn.disabled = false;
          userSubmitBtn.textContent = currentLang === "en" ? "Check Status" : "Cek Status";
        }
      }
    });
  }

  const populateAdminCardInputs = (pricingObj) => {
    if (!pricingObj) return;
    ["weekly", "monthly", "lifetime"].forEach((tKey) => {
      const p = pricingObj[tKey];
      if (!p) return;
      const dIdr = document.getElementById(`adm_${tKey}_daysIdr`);
      const idrRaw = document.getElementById(`adm_${tKey}_idrRaw`);
      const idrOld = document.getElementById(`adm_${tKey}_idrOldRaw`);
      const dUsdt = document.getElementById(`adm_${tKey}_daysUsdt`);
      const usdtRaw = document.getElementById(`adm_${tKey}_usdtRaw`);
      const usdtOld = document.getElementById(`adm_${tKey}_usdtOldRaw`);

      if (dIdr) dIdr.value = p.daysIdr !== undefined ? p.daysIdr : 14;
      if (idrRaw) idrRaw.value = p.idrRaw !== undefined ? p.idrRaw : 0;
      if (idrOld) idrOld.value = p.idrOldRaw !== undefined ? p.idrOldRaw : 0;
      if (dUsdt) dUsdt.value = p.daysUsdt !== undefined ? p.daysUsdt : 20;
      if (usdtRaw) usdtRaw.value = p.usdtRaw !== undefined ? p.usdtRaw : 0;
      if (usdtOld) usdtOld.value = p.usdtOldRaw !== undefined ? p.usdtOldRaw : 0;
    });
  };

  // 2. Admin Login
  if (adminForm && adminInput && adminFeedback && adminPanel) {
    adminForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const pass = adminInput.value.trim();
      if (!pass) return;

      if (adminSubmitBtn) {
        adminSubmitBtn.disabled = true;
        adminSubmitBtn.textContent = "Memverifikasi...";
      }
      adminFeedback.hidden = true;

      try {
        const json = await postToGas({ action: "web_admin_login", admin_password: pass });
        if (json && json.ok) {
          currentAdminPassword = pass;
          adminPanel.hidden = false;
          adminForm.hidden = true;
          if (modalCard) modalCard.classList.add("admin-expanded");

          populateAdminCardInputs(json.pricing);
          applyRemotePricingToState(json.pricing);
          renderAdminPromos(json.promos || []);
        } else {
          adminFeedback.hidden = false;
          adminFeedback.className = "portal-msg error-msg";
          adminFeedback.textContent = (json && json.message) || "Password Admin salah.";
        }
      } catch (err) {
        adminFeedback.hidden = false;
        adminFeedback.className = "portal-msg error-msg";
        adminFeedback.textContent = "Gagal menghubungkan ke Google Apps Script.";
      } finally {
        if (adminSubmitBtn) {
          adminSubmitBtn.disabled = false;
          adminSubmitBtn.textContent = "Buka Panel Admin";
        }
      }
    });
  }

  // 3. Admin Save Pricing Cards (Berdiri Sendiri, Tidak Perlu Input Kode Promo)
  if (savePricingBtn && pricingFeedback) {
    savePricingBtn.addEventListener("click", async () => {
      if (!currentAdminPassword) return;
      savePricingBtn.disabled = true;
      savePricingBtn.textContent = "Menyimpan Perubahan ke Server...";
      pricingFeedback.hidden = true;

      const payload = {};
      ["weekly", "monthly", "lifetime"].forEach((tKey) => {
        payload[tKey] = {
          daysIdr: Number(document.getElementById(`adm_${tKey}_daysIdr`).value) || 1,
          idrRaw: Number(document.getElementById(`adm_${tKey}_idrRaw`).value) || 0,
          idrOldRaw: Number(document.getElementById(`adm_${tKey}_idrOldRaw`).value) || 0,
          daysUsdt: Number(document.getElementById(`adm_${tKey}_daysUsdt`).value) || 1,
          usdtRaw: Number(document.getElementById(`adm_${tKey}_usdtRaw`).value) || 0,
          usdtOldRaw: Number(document.getElementById(`adm_${tKey}_usdtOldRaw`).value) || 0
        };
      });

      try {
        const json = await postToGas({
          action: "web_admin_save_pricing",
          admin_password: currentAdminPassword,
          pricing: payload
        });
        if (json && json.ok) {
          pricingFeedback.hidden = false;
          pricingFeedback.className = "portal-msg success-msg";
          pricingFeedback.textContent = json.message || "Harga berhasil diperbarui di Website & Bot Telegram!";
          if (json.pricing) {
            applyRemotePricingToState(json.pricing);
            populateAdminCardInputs(json.pricing);
          } else {
            fetchLiveConfigFromSheets();
          }
        } else {
          pricingFeedback.hidden = false;
          pricingFeedback.className = "portal-msg error-msg";
          pricingFeedback.textContent = (json && json.message) || "Gagal menyimpan perubahan harga.";
        }
      } catch (e) {
        pricingFeedback.hidden = false;
        pricingFeedback.className = "portal-msg error-msg";
        pricingFeedback.textContent = "Gagal mengirim data ke server Google Sheets.";
      } finally {
        savePricingBtn.disabled = false;
        savePricingBtn.textContent = "Simpan & Terbitkan Perubahan Kartu Harga (Update Web & Bot Telegram)";
      }
    });
  }

  // 4. Admin Save Promo Code (Berada di Tab 2 Khusus Promo)
  if (savePromoBtn && promoFeedback) {
    savePromoBtn.addEventListener("click", async () => {
      if (!currentAdminPassword) return;
      const code = document.getElementById("admPromoCode").value.trim();
      const discType = document.getElementById("admPromoType").value;
      const discIdr = document.getElementById("admPromoIdr").value;
      const discUsdt = document.getElementById("admPromoUsdt").value;
      const maxUses = document.getElementById("admPromoMax").value;
      const note = document.getElementById("admPromoNote").value;

      if (!code) {
        promoFeedback.hidden = false;
        promoFeedback.className = "portal-msg error-msg";
        promoFeedback.textContent = "Ketik nama Kode Promo terlebih dahulu (contoh: TH19GO).";
        return;
      }

      savePromoBtn.disabled = true;
      savePromoBtn.textContent = "Menyimpan Kode Promo...";
      promoFeedback.hidden = true;

      try {
        const json = await postToGas({
          action: "web_admin_save_promo",
          admin_password: currentAdminPassword,
          promo: {
            code: code,
            discountType: discType,
            discountIdr: discIdr,
            discountUsdt: discUsdt,
            maxUses: maxUses,
            status: "ACTIVE",
            note: note
          }
        });
        if (json && json.ok) {
          renderAdminPromos(json.promos || []);
          document.getElementById("admPromoCode").value = "";
          document.getElementById("admPromoNote").value = "";
          promoFeedback.hidden = false;
          promoFeedback.className = "portal-msg success-msg";
          promoFeedback.textContent = `Kode promo ${code.toUpperCase()} berhasil disimpan!`;
        } else {
          promoFeedback.hidden = false;
          promoFeedback.className = "portal-msg error-msg";
          promoFeedback.textContent = (json && json.message) || "Gagal menyimpan kode promo.";
        }
      } catch (e) {
        promoFeedback.hidden = false;
        promoFeedback.className = "portal-msg error-msg";
        promoFeedback.textContent = "Koneksi ke server gagal.";
      } finally {
        savePromoBtn.disabled = false;
        savePromoBtn.textContent = "Tambah / Simpan Kode Promo Ini";
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.hidden) {
      closeModal();
    }
  });
}

function renderAdminPromos(promos) {
  const tbody = document.getElementById("admPromoTableBody");
  if (!tbody) return;

  if (!promos || promos.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5">Belum ada kode promo aktif.</td></tr>`;
    return;
  }

  let html = "";
  promos.forEach((p) => {
    const valStr = p.discountType === "PERCENT"
      ? `${p.discountIdr}%`
      : `Rp ${p.discountIdr} / $${p.discountUsdt}`;
    const quotaStr = `${p.usedCount} / ${p.maxUses === 0 ? "∞" : p.maxUses}`;
    html += `
      <tr>
        <td><strong>${p.code}</strong></td>
        <td>${p.discountType}</td>
        <td>${valStr}</td>
        <td>${quotaStr}</td>
        <td>
          <button type="button" class="btn btn-outline btn-sm" data-del-promo="${p.code}">Hapus</button>
        </td>
      </tr>
    `;
  });
  tbody.innerHTML = html;

  tbody.querySelectorAll("[data-del-promo]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const codeToDel = btn.getAttribute("data-del-promo");
      if (!codeToDel || !currentAdminPassword) return;
      btn.disabled = true;
      btn.textContent = "...";
      try {
        const json = await postToGas({
          action: "web_admin_delete_promo",
          admin_password: currentAdminPassword,
          promo_code: codeToDel
        });
        if (json && json.ok) {
          renderAdminPromos(json.promos || []);
        }
      } catch (e) {
        btn.disabled = false;
        btn.textContent = "Hapus";
      }
    });
  });
}

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