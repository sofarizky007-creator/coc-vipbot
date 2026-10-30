/**
 * ============================================================================
 * COC VIPBOT — CENTRALIZED CONFIGURATION, 3X STRIKETHROUGH PROMO & DISCORD
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

  // Gambar QRIS yang sudah ditaruh di folder assets/images/
  qrisIndoImage: "assets/images/qris_indo.png",
  qrisBinanceImage: "assets/images/qris_binance.png",

  // Harga Paket Promo + Harga Coret 3x Lipat (IDR & International Binance USDT)
  pricing: {
    trial: {
      idrCurr: "Rp", idrVal: "0", idrOld: "",
      usdtCurr: "USDT", usdtVal: "0", usdtOld: "",
      tgCodeIdr: "TRIAL", tgCodeUsdt: "TRIAL"
    },
    weekly: {
      idrCurr: "Rp", idrVal: "28.900", idrOld: "Rp 86.700",
      usdtCurr: "$", usdtVal: "1.99 USDT", usdtOld: "$5.97 USDT",
      tgCodeIdr: "BUY_7_QRIS_INDO", tgCodeUsdt: "BUY_7_BINANCE"
    },
    monthly: {
      idrCurr: "Rp", idrVal: "99.000", idrOld: "Rp 297.000",
      usdtCurr: "$", usdtVal: "6.50 USDT", usdtOld: "$19.50 USDT",
      tgCodeIdr: "BUY_30_QRIS_INDO", tgCodeUsdt: "BUY_30_BINANCE"
    },
    lifetime: {
      idrCurr: "Rp", idrVal: "499.000", idrOld: "Rp 1.497.000",
      usdtCurr: "$", usdtVal: "32.00 USDT", usdtOld: "$96.00 USDT",
      tgCodeIdr: "BUY_LIFETIME_QRIS_INDO", tgCodeUsdt: "BUY_LIFETIME_BINANCE"
    }
  },

  // Action, Download, Discord & Telegram URLs
  downloadUrl: "https://dl.coc-vipbot.web.id/COC-VIPBot-Setup.zip",
  discordUrl: "https://discord.gg/YyRhX7uPvp",
  telegramUrl: "https://t.me/SlashQueenFarmer_bot",
  communityUrl: "https://discord.gg/YyRhX7uPvp",
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
    hero_promo_pill: "🔨 PROMO HAMMER JAM & TH 19 (-67%)",
    hero_title: 'Non-Stop Deadbase Loot.<br /><span class="text-gradient">Auto Max Walls Faster.</span>',
    hero_desc: 'Dominasi progres Home Village, Ranked Mode &amp; Builder Base Anda menyambut hadirnya <strong>Town Hall 19</strong> dengan <strong>COC VIPBot</strong>. Dilengkapi <em>Best Loot Finder</em>, <em>Super Smart Auto Up Wall</em>, dukungan <em>Multi-Instances</em> mandiri, serta fitur <em>Auto-Reload</em> &amp; <em>Auto Zoom-Out</em>.',
    hero_chip_promo: "🔥 Spesial Hammer Jam & TH 19",
    hero_chip1: "⚡ Trial Gratis 1 Hari",
    hero_chip2: "🏆 Auto Ranked ➔ Farming",
    hero_chip3: "🖥️ Multi-Instances Mandiri",
    hero_btn_primary: "Claim Free Trial 1 Hari",
    hero_btn_download: "Download Bot (.EXE)",
    hero_btn_discord: "Join Discord (Testimoni & Trial)",
    mock_switch_village: "Ganti Desa",
    mock_min_loot: "MINIMAL LOOT FARMING (0 = LANGSUNG SERANG)",
    mock_malam_desc: "Pastikan layar di Desa Malam. Deploy 1 Hero + 6 Troop otomatis & Auto Up Wall.",
    trust_label1: "Kekuatan Multi-Akun",
    trust_label2: "Otomatisasi 2 Desa + Ranked",
    trust_label3: "Pemulihan Pintar",
    trust_label4: "Pembayaran & Komunitas",
    feat_sec_title: "Fitur Unggulan COC VIPBot",
    feat_sec_sub: "Dirancang khusus untuk memaksimalkan perolehan loot harian selama event Hammer Jam dan mempercepat progres Wall menyambut Town Hall 19.",
    feat_1_desc: "Jalankan jatah serangan Ranked secara otomatis lalu berpindah sendiri ke mode Farming untuk memindai deadbase kaya sesuai target Gold, Elixir, dan Dark Elixir.",
    feat_2_desc: "Tidak ada lagi loot yang terbuang karena storage penuh! Bot otomatis mengenali posisi tombol Upgrade Wall secara dinamis dan meng-upgrade banyak Wall sekaligus.",
    feat_3_desc: "Dilengkapi pola deploy natural, klaim otomatis Star Bonus harian, serta fitur Auto-Reload pintar saat koneksi internet PC Anda sempat terputus.",
    feat_4_desc: "Aplikasi .EXE dilengkapi sistem Auto-Update 1-Klik langsung dari dalam bot setiap kali ada pembaruan fitur atau update Town Hall 19, tanpa perlu unduh ulang manual.",
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
    how_sec_sub: "Tidak perlu pengaturan rumit. Dari klaim Trial Gratis di Discord/Telegram hingga bot berjalan otomatis meng-upgrade Wall Anda hanya butuh beberapa menit.",
    how_1_title: "Unduh Bot (.EXE) & Klaim Key",
    how_1_desc: "Unduh paket COC-VIPBot-Setup.zip, lalu klaim Trial Gratis 1 Hari via Server Discord / Bot Telegram kami atau pilih paket promo Hammer Jam.",
    how_2_title: "Hubungkan Emulator (1600x900)",
    how_2_desc: "Atur resolusi MuMuPlayer / LDPlayer ke 1600x900 (240 DPI). Klik tombol Scan di bot untuk memilih target emulator untuk masing-masing akun.",
    how_3_title: "Atur Set Army & More Option",
    how_3_desc: "Rekam titik slot pasukan Anda di menu Set Army, lalu aktifkan Auto Upgrade Wall beserta batas minimal Gold/Elixir di More Option.",
    how_4_title: "Klik Start & Biarkan Bot Bekerja",
    how_4_desc: "Bot akan menyelesaikan jatah Ranked, lanjut Farming, mengklaim Star Bonus, me-reload jika terputus, dan meng-upgrade Wall Anda 24/7.",
    price_eyebrow: "🔥 SPECIAL EVENT SALE • DISKON 67%",
    price_sec_title: "Pilih Paket Terbaik Untuk Desa Anda",
    price_sec_sub: "Semua paket membuka 100% fitur utama. Mendukung pembayaran instan via QRIS Indonesia (IDR) dan Binance Pay QRIS (USDT) untuk pengguna internasional!",
    promo_pill_1: "🔨 SPESIAL EVENT HAMMER JAM",
    promo_pill_2: "🏰 MENYAMBUT TOWN HALL 19 AKAN HADIR",
    promo_banner_title: "Kejar Max Wall & Storage Penuh Sebelum Update Town Hall 19 Rilis!",
    promo_banner_sub: "Nikmati potongan harga spesial 1/3 dari harga normal (Hemat 67%) untuk seluruh paket berbayar selama periode event berlangsung!",
    promo_stamp_sub: "HARGA CORET 3X LIPAT",
    promo_cut_label: "🔥 HEMAT 67%",
    tier1_name: "Trial Free",
    tier1_free_tag: "🎁 100% GRATIS 24 JAM",
    tier1_period: "/ 1 Hari",
    tier1_desc: "Uji coba langsung seluruh kehebatan bot di akun Anda selama 24 jam penuh tanpa biaya (Bisa klaim via Discord atau Telegram).",
    tier1_btn: "Claim Free Trial (Telegram)",
    tier1_btn_dc: "💬 Klaim Trial via Server Discord",
    tier2_name: "Paket 1 Minggu",
    tier2_period: "/ 7 Hari",
    tier2_desc: "Cocok untuk kejar progres mingguan selama event Hammer Jam, Clan Games, atau mengisi penuh storage dengan cepat.",
    tier2_btn: "Pilih Paket 1 Minggu",
    tier3_ribbon: "⚡ PROMO HAMMER JAM • HEMAT 67%",
    tier3_name: "Paket 1 Bulan",
    tier3_pill: "~Rp 3.300 / hari",
    tier3_period: "/ 30 Hari",
    tier3_desc: "Pilihan favorit mayoritas pemain! Siapkan seluruh Wall & Hero Anda sebulan penuh menyambut rilisnya Town Hall 19.",
    tier3_btn: "Ambil Promo 1 Bulan",
    tier4_ribbon: "👑 SPESIAL TH 19 • SEKALI BAYAR SELAMANYA",
    tier4_pill: "Akses Selamanya",
    tier4_period: "/ Selamanya",
    tier4_desc: "Investasi terbaik menyambut Town Hall 19 tanpa biaya bulanan lagi! Bayar 1x untuk akses permanen, bebas update selamanya + Role VIPP Discord.",
    tier4_btn: "👑 Ambil Promo Life Time Sekarang",
    faq_sec_title: "Pertanyaan yang Sering Diajukan (FAQ)",
    faq_sec_sub: "Informasi lengkap seputar penggunaan COC VIPBot, keamanan Anti-Ban, Multi-Instances, hingga klaim Trial & Testimoni di Discord.",
    faq_q1: "Apakah Trial Free 1 Hari bisa diklaim langsung dari Discord maupun Telegram?",
    faq_a1: "Ya! Anda bisa mengklaim Serial Key Trial Gratis 1 Hari (All Fitur Unlock) dengan mengklik tombol di channel #🎁-claim-free-trial pada Server Discord kami atau langsung melalui Bot Telegram resmi kami.",
    faq_q2: "Bagaimana cara kerja fitur Auto Up Wall saat event Hammer Jam?",
    faq_a2: "Cukup masukkan harga Wall sesuai diskon Hammer Jam di menu More Option. Setiap kali Gold atau Elixir melewati batas minimum, bot otomatis memindai tombol Upgrade secara visual, meng-upgrade banyak Wall sekaligus, lalu melakukan Pinch Zoom-Out otomatis.",
    faq_q3: "Apa itu Support Multi Instances dan apakah pengaturannya terpisah?",
    faq_a3: "Support Multi Instances memungkinkan Anda membuka beberapa jendela Bot untuk beberapa emulator (MuMuPlayer / LDPlayer) secara bersamaan di 1 PC. Setiap jendela bot otomatis menyimpan pengaturan Set Army dan Wall/Event secara mandiri tanpa saling menimpa.",
    faq_q4: "Dimana saya bisa melihat testimoni pengguna lain yang sudah membeli?",
    faq_a4: "Anda dapat bergabung ke Server Discord resmi kami (https://discord.gg/YyRhX7uPvp) dan membuka channel #⭐-testimoni-pembeli. Hanya pembeli terverifikasi (Verified Buyer & VIPP Lifetime) yang dapat mengirimkan ulasan dan screenshot hasil farming di ruangan tersebut.",
    faq_q5: "Bagaimana sistem Anti-Ban & kesiapan bot menyambut Town Hall 19?",
    faq_a5: "Bot kami tidak memodifikasi memori game, melainkan membaca layar secara visual (OpenCV) dan mengirim sentuhan ADB layaknya jari manusia. Dengan fitur Auto-Updater bawaan, setiap penyesuaian untuk Town Hall 19 akan langsung ter-update otomatis di aplikasi Anda.",
    faq_q6: "Bagaimana cara melakukan pembayaran dari Indonesia maupun Luar Negeri?",
    faq_a6: "Klik paket yang Anda inginkan di bagian Pricing. Anda dapat memilih pembayaran via QRIS Indonesia (DANA, GoPay, OVO, ShopeePay, M-Banking) atau QRIS Binance Pay (USDT) untuk pengguna internasional. Pembayaran diverifikasi cepat melalui Bot Telegram resmi kami.",
    cta_eyebrow: "GABUNG KOMUNITAS & MULAI FARMING",
    cta_title: "Siapkan Desa Anda Menyambut Town Hall 19 Sekarang!",
    cta_desc: "Jangan lewatkan momen emas Hammer Jam & diskon 67% hari ini. Gabung ke Server Discord kami untuk melihat testimoni pembeli asli dan klaim Trial Gratis 1 Hari!",
    cta_btn_discord: "Join Discord (Testimoni & Free Trial)",
    cta_btn1: "🔥 Ambil Promo Hammer Jam (-67%)",
    footer_bio: "Platform otomatisasi farming Clash of Clans dengan Best Loot Finder, Super Smart Auto Up Wall, Auto Ranked ➔ Farming, Auto Builder Base, dan dukungan Multi-Instances."
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
    hero_promo_pill: "🔨 HAMMER JAM & TH 19 SALE (-67%)",
    hero_title: 'Non-Stop Deadbase Loot.<br /><span class="text-gradient">Auto Max Walls Faster.</span>',
    hero_desc: 'Dominate your Home Village, Ranked Mode &amp; Builder Base progression ahead of <strong>Town Hall 19</strong> with <strong>COC VIPBot</strong>. Powered by <em>Best Loot Finder</em>, <em>Super Smart Auto Up Wall</em>, independent <em>Multi-Instances</em> support, plus built-in <em>Auto-Reload</em> &amp; <em>Auto Zoom-Out</em>.',
    hero_chip_promo: "🔥 Hammer Jam & TH 19 Promo",
    hero_chip1: "⚡ 1-Day Free Trial",
    hero_chip2: "🏆 Auto Ranked ➔ Farming",
    hero_chip3: "🖥️ Independent Multi-Instances",
    hero_btn_primary: "Claim 1-Day Free Trial",
    hero_btn_download: "Download Bot (.EXE)",
    hero_btn_discord: "Join Discord (Reviews & Trial)",
    mock_switch_village: "Switch Base",
    mock_min_loot: "MINIMUM FARMING LOOT (0 = INSTANT ATTACK)",
    mock_malam_desc: "Ensure camera is in Builder Base. Rapidly deploys 1 Hero + 6 Troops & Auto Up Wall.",
    trust_label1: "Multi-Account Power",
    trust_label2: "Dual Village + Ranked",
    trust_label3: "Smart Recovery",
    trust_label4: "Global Payment & Discord",
    feat_sec_title: "COC VIPBot Core Features",
    feat_sec_sub: "Engineered to maximize your daily loot income during Hammer Jam and accelerate Wall upgrades ahead of Town Hall 19.",
    feat_1_desc: "Complete your Ranked attacks automatically and seamlessly switch to Farming Mode to locate rich deadbases matching your Gold, Elixir, and Dark thresholds.",
    feat_2_desc: "Never waste overflowing loot again! The bot dynamically detects Upgrade buttons via Template Matching and upgrades multiple Walls at once non-stop.",
    feat_3_desc: "Equipped with humanized deployment patterns, automatic daily Star Bonus claiming, and smart Auto-Reload if your PC internet briefly drops.",
    feat_4_desc: "Our standalone .EXE includes a 1-Click Auto-Updater right inside the app whenever new features or Town Hall 19 patches are released.",
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
    how_sec_sub: "Zero complicated setup. Going from claiming your Free Trial on Discord/Telegram to automated 24/7 Wall upgrades takes just minutes.",
    how_1_title: "Download Bot (.EXE) & Claim Key",
    how_1_desc: "Download COC-VIPBot-Setup.zip, then claim your 1-Day Free Trial via our Discord Server / Telegram Bot or pick a Hammer Jam promo plan.",
    how_2_title: "Connect Emulator (1600x900)",
    how_2_desc: "Set your MuMuPlayer / LDPlayer resolution to 1600x900 (240 DPI). Click Scan in the bot to select the target emulator for each account.",
    how_3_title: "Configure Set Army & More Option",
    how_3_desc: "Record your army bar slots in Set Army, then enable Auto Upgrade Wall and minimum Gold/Elixir thresholds in More Option.",
    how_4_title: "Click Start & Let the Bot Work",
    how_4_desc: "The bot will finish Ranked loops, switch to Farming, claim Star Bonuses, auto-reload on disconnects, and upgrade your village walls 24/7.",
    price_eyebrow: "🔥 SPECIAL EVENT SALE • 67% OFF",
    price_sec_title: "Choose the Best Plan for Your Village",
    price_sec_sub: "Every plan unlocks 100% of core features. Instant checkout via Indonesian QRIS (IDR) or Binance Pay QRIS (USDT) for international users!",
    promo_pill_1: "🔨 HAMMER JAM SPECIAL EVENT",
    promo_pill_2: "🏰 WELCOMING UPCOMING TOWN HALL 19",
    promo_banner_title: "Max Out Your Walls & Storages Before Town Hall 19 Drops!",
    promo_banner_sub: "Enjoy a massive 67% discount (1/3 of regular 3x prices) across all paid plans during our Hammer Jam & Town Hall 19 celebration!",
    promo_stamp_sub: "67% OFF NORMAL PRICE",
    promo_cut_label: "🔥 SAVE 67%",
    tier1_name: "Trial Free",
    tier1_free_tag: "🎁 100% FREE FOR 24H",
    tier1_period: "/ 1 Day",
    tier1_desc: "Experience the full power of COC VIPBot on your account for a full 24 hours at zero cost (Claim via Discord or Telegram).",
    tier1_btn: "Claim Free Trial (Telegram)",
    tier1_btn_dc: "💬 Claim Trial on Discord Server",
    tier2_name: "1 Week Plan",
    tier2_period: "/ 7 Days",
    tier2_desc: "Great for weekly Hammer Jam progression boosts, Clan Games events, or quickly maxing out your resource storages.",
    tier2_btn: "Choose 1 Week Plan",
    tier3_ribbon: "⚡ HAMMER JAM PROMO • SAVE 67%",
    tier3_name: "1 Month Plan",
    tier3_pill: "~$0.21 / day",
    tier3_period: "/ 30 Days",
    tier3_desc: "Player favorite! Prepare all your Walls & Heroes for a full month ahead of the upcoming Town Hall 19 release.",
    tier3_btn: "Get 1 Month Promo",
    tier4_ribbon: "👑 TH 19 SPECIAL • PAY ONCE FOREVER",
    tier4_pill: "Forever Access",
    tier4_period: "/ Lifetime",
    tier4_desc: "The ultimate investment for Town Hall 19 with zero monthly fees! Pay once for permanent access, free lifetime updates + VIPP Discord Role.",
    tier4_btn: "👑 Get Life Time Promo Now",
    faq_sec_title: "Frequently Asked Questions (FAQ)",
    faq_sec_sub: "Everything you need to know about COC VIPBot, Anti-Ban safety, Multi-Instances, and claiming trials on Discord.",
    faq_q1: "Can I claim the 1-Day Free Trial from both Discord and Telegram?",
    faq_a1: "Yes! You can claim your 24-Hour Free Trial Serial Key with 1 click in the #🎁-claim-free-trial channel on our Discord Server or via our official Telegram Bot.",
    faq_q2: "How does Auto Up Wall work during the Hammer Jam event?",
    faq_a2: "Simply set your discounted Hammer Jam wall price in More Option. Whenever your Gold or Elixir exceeds your threshold, the bot visually scans the Upgrade buttons, upgrades multiple walls at once, and performs an automatic Pinch Zoom-Out.",
    faq_q3: "What is Support Multi Instances and are settings isolated per emulator?",
    faq_a3: "Support Multi Instances lets you run multiple Bot windows for multiple emulators (MuMuPlayer / LDPlayer) simultaneously on 1 PC. Each bot window automatically saves its own Set Army and Wall/Event settings independently.",
    faq_q4: "Where can I see testimonials and reviews from verified buyers?",
    faq_a4: "Join our official Discord Server (https://discord.gg/YyRhX7uPvp) and check the #⭐-testimoni-pembeli channel. Only verified buyers with active FULL keys can post reviews and farming screenshots there.",
    faq_q5: "How do Anti-Ban & Town Hall 19 readiness work in COC VIPBot?",
    faq_a5: "Our engine never modifies game memory; it uses visual OpenCV screen recognition and human-like ADB touch inputs. With the built-in Auto-Updater, all Town Hall 19 updates are delivered automatically to your app.",
    faq_q6: "How do I complete payment from Indonesia or Internationally?",
    faq_a6: "Click your desired plan in the Pricing section. You can choose QRIS Indonesia (IDR) or Binance Pay QRIS (USDT) for international users. Orders and Serial Keys are processed seamlessly via our official Telegram Bot.",
    cta_eyebrow: "JOIN OUR COMMUNITY & START FARMING",
    cta_title: "Prepare Your Village for Town Hall 19 Today!",
    cta_desc: "Don't miss the Hammer Jam event & 67% discount. Join our Discord Server to view real buyer testimonials and claim your 1-Day Free Trial!",
    cta_btn_discord: "Join Discord (Reviews & Free Trial)",
    cta_btn1: "🔥 Grab Hammer Jam Promo (-67%)",
    footer_bio: "Clash of Clans farming automation platform featuring Best Loot Finder, Super Smart Auto Up Wall, Auto Ranked ➔ Farming, Auto Builder Base, and Multi-Instances."
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
    const oldEl = document.querySelector(`[data-price-old="${tierKey}"]`);
    if (currEl) currEl.textContent = isUsdt ? cfg.usdtCurr : cfg.idrCurr;
    if (valEl) valEl.textContent = isUsdt ? cfg.usdtVal : cfg.idrVal;
    if (oldEl) oldEl.textContent = isUsdt ? cfg.usdtOld : cfg.idrOld;
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
  let remCount = 8;

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

  const sampleLogs = [
    "[09:15:10] [WALL-SUCCESS] Upgrade 8 Wall menggunakan GOLD selesai!",
    "[09:15:12] [ZOOM] Mereset kamera (Pinch Zoom Out via /dev/input/event2)...",
    "[09:15:14] [AUTO-SWITCH] Ranked selesai! Otomatis pindah ke Mode Farming...",
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
      remCount = remCount > 1 ? remCount - 1 : 8;
      const prefix = currentLang === "en" ? "Left:" : "Sisa:";
      remBadge.textContent = `${prefix} R:${remCount}➔15`;
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

/* 7. Dual-Payment Checkout Modal (QRIS Indonesia, Binance Pay & Discord Server) */
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
  const chkDesc = document.getElementById("chkModalDesc");
  const tgActionBtn = document.getElementById("chkTelegramActionBtn");
  const tgBtnText = document.getElementById("chkTelegramBtnText");
  const dcBtnText = document.getElementById("chkDiscordBtnText");

  const tierTitles = {
    id: {
      trial: "Trial Gratis 1 Hari (All Fitur Unlock)",
      weekly: "Paket 1 Minggu (Promo Hammer Jam)",
      monthly: "⚡ Paket 1 Bulan (Promo Hammer Jam)",
      lifetime: "👑 Paket Life Time VIPP (Spesial TH 19)"
    },
    en: {
      trial: "1-Day Free Trial (All Features Unlocked)",
      weekly: "1 Week Plan (Hammer Jam Promo)",
      monthly: "⚡ 1 Month Plan (Hammer Jam Promo)",
      lifetime: "👑 Life Time VIPP (TH 19 Special)"
    }
  };

  const renderCheckoutState = () => {
    const isEn = currentLang === "en";
    const isUsdt = currentPaymentRegion === "usdt";
    const cfg = SITE_CONFIG.pricing[activeCheckoutTier] || SITE_CONFIG.pricing.monthly;

    if (chkBadge) {
      chkBadge.textContent = activeCheckoutTier === "trial"
        ? (isEn ? "FREE TRIAL ACCESS (24 HOURS)" : "AKSES TRIAL GRATIS (24 JAM)")
        : (isUsdt ? "🔥 HAMMER JAM & TH 19 SALE (-67%)" : "🔥 PROMO HAMMER JAM & TH 19 (-67%)");
    }

    if (chkTitle) {
      chkTitle.textContent = (tierTitles[currentLang] || tierTitles.id)[activeCheckoutTier];
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
      chkPrice.textContent = isUsdt
        ? `${cfg.usdtCurr} ${cfg.usdtVal}`
        : `${cfg.idrCurr} ${cfg.idrVal}`;
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

    const startParam = isUsdt ? cfg.tgCodeUsdt : cfg.tgCodeIdr;
    const tgUrl = `https://t.me/${SITE_CONFIG.telegramBotUsername}?start=${startParam}`;
    if (tgActionBtn) {
      tgActionBtn.href = tgUrl;
    }

    if (activeCheckoutTier === "trial") {
      if (chkDesc) {
        chkDesc.textContent = isEn
          ? "Claim your 24-hour Free Trial Serial Key instantly via our Telegram Bot or click the Discord button to claim via the #🎁-claim-free-trial channel!"
          : "Klaim Serial Key Trial 24 Jam Anda secara instan melalui Bot Telegram, atau klik tombol Discord untuk klaim langsung di channel #🎁-claim-free-trial!";
      }
      if (tgBtnText) {
        tgBtnText.textContent = isEn
          ? "🤖 Claim Free Trial Key in Telegram"
          : "🤖 Klaim Key Trial Gratis di Telegram";
      }
      if (dcBtnText) {
        dcBtnText.textContent = isEn
          ? "💬 Claim 1-Day Trial on Discord Server"
          : "💬 Klaim Key Trial 1 Hari di Server Discord";
      }
    } else {
      if (chkDesc) {
        chkDesc.textContent = isUsdt
          ? (isEn
              ? "Scan the Binance QR above or click the Telegram button to receive your automated Order ID & Serial Key. After buying, claim your Buyer Role on Discord!"
              : "Scan QRIS Binance di atas atau klik tombol Telegram untuk memproses Order ID & Serial Key otomatis. Setelah beli, klaim Role Buyer di Discord!")
          : (isEn
              ? "Scan the Indonesian QRIS above or click the Telegram button to receive your invoice & Serial Key. After buying, claim your Buyer Role on Discord!"
              : "Scan QRIS Indonesia di atas atau klik tombol Telegram untuk konfirmasi & terima Serial Key otomatis. Setelah beli, klaim Role Buyer Anda di Discord!");
      }
      if (tgBtnText) {
        tgBtnText.textContent = isUsdt
          ? (isEn ? "🌍 Confirm & Get Key via Telegram Bot" : "🌍 Konfirmasi & Ambil Key di Bot Telegram")
          : (isEn ? "🇮🇩 Confirm & Get Key via Telegram Bot" : "🇮🇩 Konfirmasi & Ambil Key di Bot Telegram");
      }
      if (dcBtnText) {
        dcBtnText.textContent = isEn
          ? "💬 View Buyer Testimonials on Discord"
          : "💬 Cek Testimoni Pembeli di Server Discord";
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

  // Hubungkan link downloadUrl, discordUrl, telegramUrl, communityUrl, supportUrl
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