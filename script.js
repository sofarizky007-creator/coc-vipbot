/**
 * ============================================================================
 * COC VIPBOT — CENTRALIZED CONFIGURATION, BILINGUAL (ID/ENG) & INTERACTIONS
 * ============================================================================
 */

const SITE_CONFIG = {
  brandName: "COC VIPBot",
  domain: "https://coc-vipbot.web.id",
  defaultLang: "id", // "id" atau "en"

  // Video Showcase Configuration (Isi salah satu jika video sudah siap)
  showcaseVideoMp4: "",       // Contoh: "assets/images/showcase.mp4"
  showcaseYoutubeEmbed: "",   // Contoh: "https://www.youtube-nocookie.com/embed/xxxxxxx"

  // Action & Checkout URLs (Ubah "COMING_SOON" ke link WhatsApp/Telegram/Checkout Anda)
  downloadUrl: "COMING_SOON",
  communityUrl: "COMING_SOON",
  supportUrl: "COMING_SOON",
  checkoutTrialUrl: "COMING_SOON",
  checkoutWeeklyUrl: "COMING_SOON",
  checkoutMonthlyUrl: "COMING_SOON",
  checkoutLifetimeUrl: "COMING_SOON"
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
    nav_cta: "Free Trial 1 Hari",
    hero_eyebrow: "NEXT-GEN CLASH AUTOMATION ENGINE",
    hero_title: 'Non-Stop Deadbase Loot.<br /><span class="text-gradient">Auto Max Walls Faster.</span>',
    hero_desc: 'Dominasi progres Home Village &amp; Builder Base Anda dengan <strong>COC VIPBot</strong>. Dilengkapi <em>Best Loot Finder</em>, <em>Super Smart Auto Up Wall</em>, dukungan <em>Multi-Instances</em> untuk banyak akun sekaligus, serta proteksi algoritma <em>Anti-Ban</em> yang humanis.',
    hero_chip1: "⚡ Trial Gratis 1 Hari",
    hero_chip2: "🧱 Auto Wall Main & Builder Base",
    hero_chip3: "🖥️ Multi-Instances",
    hero_btn_primary: "Claim Free Trial 1 Hari",
    hero_btn_secondary: "Tonton Cara Kerja Bot",
    trust_label1: "Kekuatan Multi-Akun",
    trust_label2: "Otomatisasi 2 Desa",
    trust_label3: "Lapisan Keamanan",
    trust_label4: "Bantuan Prioritas",
    feat_sec_title: "Fitur Unggulan COC VIPBot",
    feat_sec_sub: "Dirancang khusus untuk memaksimalkan perolehan loot harian dan mempercepat progres Wall di semua akun Anda secara bersamaan.",
    feat_1_desc: "Pemindaian cepat untuk menemukan base kaya (deadbase & kolektor penuh) sesuai target minimum Gold, Elixir, dan Dark Elixir yang Anda atur.",
    feat_2_desc: "Tidak ada lagi loot yang terbuang karena storage penuh! Bot otomatis mendeteksi kelebihan Gold/Elixir dan langsung meng-upgrade Wall desa utama Anda tanpa henti.",
    feat_3_desc: "Dilengkapi randomized tap coordinates, jeda waktu natural, dan pola deployment pasukan yang meniru perilaku sentuhan jari manusia asli.",
    feat_4_desc: "Panduan instalasi lengkap, troubleshooting cepat, serta pembaruan berkala agar bot selalu optimal mengikuti update terbaru game.",
    feat_5_desc: "Punya banyak akun Clash of Clans? Jalankan beberapa jendela emulator sekaligus dalam satu PC secara paralel tanpa saling mengganggu!",
    feat_6_desc: "Otomatisasi penuh untuk malam hari di Builder Base! Kumpulkan Builder Gold & Elixir secara instan dan upgrade tembok Builder Base tanpa perlu repot bermain manual.",
    show_sec_title: "Lihat UI Bot & Cara Kerjanya",
    show_sec_sub: "Tonton demonstrasi singkat (30–60 detik) bagaimana COC VIPBot memindai deadbase, menurunkan pasukan dengan sistem Anti-Ban, dan meng-upgrade Wall secara otomatis.",
    show_sim_title: "Klik untuk Simulasi Cara Kerja UI Bot",
    show_sim_sub: "(Area ini siap memutar video MP4 30–60 detik Anda begitu file videonya dimasukkan ke folder assets/images/)",
    show_step1: "Best Loot Finder memfilter base mati...",
    show_step2: "Deploy pasukan dengan pola Anti-Ban...",
    show_step3: "Upgrade Wall Main & Builder Base!",
    how_eyebrow: "4 LANGKAH MUDAH",
    how_sec_title: "Bagaimana COC VIPBot Bekerja?",
    how_sec_sub: "Tidak perlu pengaturan rumit. Dari klaim Trial Gratis hingga bot berjalan otomatis meng-upgrade Wall Anda hanya butuh beberapa menit.",
    how_1_title: "Klaim Free Trial 1 Hari / Pilih Paket",
    how_1_desc: "Mulai dengan Trial Gratis 1 Hari untuk mencoba seluruh fitur secara langsung, atau pilih paket 1 Minggu, 1 Bulan, hingga Life Time.",
    how_2_title: "Hubungkan Emulator & Multi-Instances",
    how_2_desc: "Buka aplikasi COC VIPBot di PC Anda. Sistem otomatis mendeteksi emulator dan mengizinkan Anda menjalankan satu atau banyak akun sekaligus.",
    how_3_title: "Aktifkan Loot Finder & Auto Up Wall",
    how_3_desc: "Centang modul Best Loot Finder, Super Smart Wall Upgrade, serta Auto Builder Base sesuai target resource yang Anda inginkan.",
    how_4_title: "Klik Start & Biarkan Bot Bekerja",
    how_4_desc: "Sistem Anti-Ban kami akan menjalankan pencarian loot, menyerang, dan meng-upgrade tembok desa Anda 24/7 secara otomatis dan aman.",
    price_eyebrow: "HARGA TRANSPARAN & FLEKSIBEL",
    price_sec_title: "Pilih Paket Terbaik Untuk Desa Anda",
    price_sec_sub: "Semua paket membuka 100% fitur utama. Coba gratis selama 1 hari, atau pilih paket 1 Bulan & Life Time untuk nilai hemat terbaik!",
    tier1_name: "Trial Free",
    tier1_period: "/ 1 Hari",
    tier1_desc: "Uji coba langsung seluruh kehebatan bot di akun Anda selama 24 jam penuh tanpa biaya.",
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
    faq_sec_sub: "Informasi lengkap seputar penggunaan COC VIPBot, keamanan Anti-Ban, Multi-Instances, hingga perbedaan tingkat Support.",
    faq_q1: "Apakah Trial Free 1 Hari membuka semua fitur seperti Auto Up Wall & Multi-Instance?",
    faq_a1: "Ya! Paket Trial Free 1 Hari memberikan akses All Fitur Unlock termasuk Best Loot Finder, Super Smart Wall Upgrade, Auto Builder Base, dan sistem Anti-Ban agar Anda bisa membuktikan sendiri performanya sebelum berlangganan.",
    faq_q2: "Bagaimana cara kerja fitur Auto Up Wall di Home Village dan Builder Base?",
    faq_a2: "Setiap kali sesi serangan selesai dan jumlah Gold atau Elixir Anda melewati batas minimum yang Anda tentukan, bot secara cerdas akan mencari tembok (Wall) baik di desa utama maupun di Builder Base dan langsung melakukan upgrade secara otomatis.",
    faq_q3: "Apa itu Support Multi Instances dan berapa akun yang bisa dijalankan?",
    faq_a3: "Support Multi Instances memungkinkan Anda menjalankan beberapa akun Clash of Clans di beberapa jendela emulator secara bersamaan dalam 1 PC. Jumlah instance yang dapat berjalan bergantung pada kapasitas RAM dan prosesor komputer Anda.",
    faq_q4: "Apa perbedaan Standard Support, Priority Support, dan VIPP Support?",
    faq_a4: "Standard Support (Trial & 1 Minggu) mencakup bantuan tiket komunitas reguler. Priority Support (Paket 1 Bulan) mendapatkan antrean respons lebih cepat. Sedangkan VIPP Support (khusus member Life Time) adalah layanan eksklusif kasta tertinggi dengan bantuan setup prioritas utama dan konsultasi multi-instance.",
    faq_q5: "Bagaimana sistem Anti-Ban pada COC VIPBot bekerja?",
    faq_a5: "Sistem All Strategies with Anti-Ban kami tidak melakukan modifikasi memori game, melainkan membaca layar secara visual dan meniru ketukan jari manusia dengan titik koordinat acak, kecepatan bervariasi, serta jadwal istirahat natural.",
    faq_q6: "Bagaimana cara mengunduh dan melakukan pembayaran?",
    faq_a6: "Pilih paket yang Anda inginkan pada bagian Pricing di atas atau bergabung ke komunitas resmi kami untuk mendapatkan panduan aktivasi lisensi secara instan.",
    cta_eyebrow: "SIAP FARMING OTOMATIS?",
    cta_title: "Maksimalkan Desa Utama & Builder Base Anda Sekarang",
    cta_desc: "Jangan biarkan Builder dan Storage Anda menganggur. Mulai dengan Trial Gratis 1 Hari atau amankan lisensi Life Time VIPP Support hari ini!",
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
    nav_cta: "1-Day Free Trial",
    hero_eyebrow: "NEXT-GEN CLASH AUTOMATION ENGINE",
    hero_title: 'Non-Stop Deadbase Loot.<br /><span class="text-gradient">Auto Max Walls Faster.</span>',
    hero_desc: 'Dominate your Home Village &amp; Builder Base progression with <strong>COC VIPBot</strong>. Powered by <em>Best Loot Finder</em>, <em>Super Smart Auto Up Wall</em>, parallel <em>Multi-Instances</em> support, and a humanized <em>Anti-Ban</em> algorithm.',
    hero_chip1: "⚡ 1-Day Free Trial",
    hero_chip2: "🧱 Auto Wall Main & Builder Base",
    hero_chip3: "🖥️ Multi-Instances",
    hero_btn_primary: "Claim 1-Day Free Trial",
    hero_btn_secondary: "Watch Bot in Action",
    trust_label1: "Multi-Account Power",
    trust_label2: "Dual Village Automation",
    trust_label3: "Security Layer",
    trust_label4: "Dedicated Assistance",
    feat_sec_title: "COC VIPBot Core Features",
    feat_sec_sub: "Engineered to maximize your daily loot income and accelerate Wall upgrades across all your accounts simultaneously.",
    feat_1_desc: "High-speed scanning to locate rich deadbases and full collectors matching your custom Gold, Elixir, and Dark Elixir thresholds.",
    feat_2_desc: "Never waste overflowing loot again! The bot automatically detects surplus Gold/Elixir and upgrades your Home Village Walls non-stop.",
    feat_3_desc: "Equipped with randomized tap coordinates, natural timing delays, and troop deployment patterns that mimic real human touch.",
    feat_4_desc: "Complete installation guides, fast troubleshooting, and regular compatibility updates following every game patch.",
    feat_5_desc: "Have multiple Clash of Clans accounts? Run several emulator windows simultaneously on a single PC without interference!",
    feat_6_desc: "Full automation for your Builder Base! Farm Builder Gold & Elixir effortlessly and upgrade Builder Base walls automatically.",
    show_sec_title: "See Bot UI & Workflow in Action",
    show_sec_sub: "Watch a quick demonstration (30–60s) of how COC VIPBot scans deadbases, deploys troops with Anti-Ban, and upgrades Walls automatically.",
    show_sim_title: "Click to Simulate Bot UI Workflow",
    show_sim_sub: "(This player frame will automatically play your 30–60s MP4 video once placed in the assets/images/ folder)",
    show_step1: "Best Loot Finder filtering rich deadbases...",
    show_step2: "Deploying troops with Anti-Ban humanizer...",
    show_step3: "Auto upgrading Main & Builder Base Walls!",
    how_eyebrow: "4 SIMPLE STEPS",
    how_sec_title: "How Does COC VIPBot Work?",
    how_sec_sub: "Zero complicated setup. Going from claiming your Free Trial to automated 24/7 Wall upgrades takes just minutes.",
    how_1_title: "Claim 1-Day Free Trial / Choose Plan",
    how_1_desc: "Start with our 1-Day Free Trial to test all features firsthand, or choose the 1 Week, 1 Month, or Life Time license.",
    how_2_title: "Connect Emulator & Multi-Instances",
    how_2_desc: "Launch COC VIPBot on your PC. The system automatically detects your emulator and lets you run single or multiple accounts.",
    how_3_title: "Enable Loot Finder & Auto Up Wall",
    how_3_desc: "Toggle Best Loot Finder, Super Smart Wall Upgrade, and Auto Builder Base according to your preferred resource targets.",
    how_4_title: "Click Start & Let the Bot Work",
    how_4_desc: "Our Anti-Ban engine will search for loot, attack deadbases, and upgrade your village walls 24/7 safely and automatically.",
    price_eyebrow: "TRANSPARENT & FLEXIBLE PRICING",
    price_sec_title: "Choose the Best Plan for Your Village",
    price_sec_sub: "Every plan unlocks 100% of core features. Try it free for 1 day, or pick the 1 Month & Life Time plans for the best value!",
    tier1_name: "Trial Free",
    tier1_period: "/ 1 Day",
    tier1_desc: "Experience the full power of COC VIPBot on your account for a full 24 hours at zero cost.",
    tier1_btn: "Claim Free Trial",
    tier2_name: "1 Week Plan",
    tier2_period: "/ 7 Days",
    tier2_desc: "Great for weekly progression boosts, Clan Games events, or quickly maxing out your resource storages.",
    tier2_btn: "Choose 1 Week Plan",
    tier3_ribbon: "⚡ MOST POPULAR • SAVE 15%",
    tier3_name: "1 Month Plan",
    tier3_pill: "~Rp 3,300 / day",
    tier3_period: "/ 30 Days",
    tier3_desc: "Player favorite! Much more economical than weekly renewals for non-stop full-month farming.",
    tier3_btn: "Get Best Monthly",
    tier4_ribbon: "👑 ULTIMATE BEST VALUE • PAY ONCE",
    tier4_pill: "Forever Access",
    tier4_period: "/ Lifetime",
    tier4_desc: "The ultimate investment with zero monthly fees! Pay once for permanent access, free lifetime updates, plus top-tier VIPP Support.",
    tier4_btn: "👑 Get Life Time Access Now",
    faq_sec_title: "Frequently Asked Questions (FAQ)",
    faq_sec_sub: "Everything you need to know about COC VIPBot, Anti-Ban safety, Multi-Instances, and our Support tiers.",
    faq_q1: "Does the 1-Day Free Trial unlock all features like Auto Up Wall & Multi-Instance?",
    faq_a1: "Yes! The 1-Day Free Trial gives you All Fitur Unlock access including Best Loot Finder, Super Smart Wall Upgrade, Auto Builder Base, and Anti-Ban so you can test everything before subscribing.",
    faq_q2: "How does Auto Up Wall work in Home Village and Builder Base?",
    faq_a2: "After each attack session, whenever your Gold or Elixir exceeds your configured threshold, the bot smartly locates upgradeable Walls in both your Home Village and Builder Base and upgrades them automatically.",
    faq_q3: "What is Support Multi Instances and how many accounts can I run?",
    faq_a3: "Support Multi Instances lets you run multiple Clash of Clans accounts across several emulator windows simultaneously on 1 PC. The maximum number of instances depends on your PC's RAM and CPU capacity.",
    faq_q4: "What is the difference between Standard, Priority, and VIPP Support?",
    faq_a4: "Standard Support (Trial & 1 Week) covers regular community ticket assistance. Priority Support (1 Month) gives you faster response queues. VIPP Support (exclusive to Life Time members) is our highest royal tier with top-priority setup assistance and multi-instance optimization.",
    faq_q5: "How does the Anti-Ban system work in COC VIPBot?",
    faq_a5: "Our All Strategies with Anti-Ban engine never modifies game memory; instead, it uses visual screen recognition and mimics human finger taps with randomized coordinates, variable speeds, and natural break schedules.",
    faq_q6: "How do I download the bot and complete payment?",
    faq_a6: "Select your preferred package in the Pricing section above or join our official community for instant license activation guidance.",
    cta_eyebrow: "READY FOR AUTOMATED FARMING?",
    cta_title: "Maximize Your Home Village & Builder Base Today",
    cta_desc: "Stop leaving your Builders and Storages idle. Start with a 1-Day Free Trial or secure your Life Time VIPP Support license now!",
    cta_btn1: "🔥 View Plans & Claim Trial",
    footer_bio: "Clash of Clans farming automation platform featuring Best Loot Finder, Super Smart Auto Up Wall, Auto Builder Base, and Multi-Instances."
  }
};

let currentLang = localStorage.getItem("coc_vipbot_lang") || SITE_CONFIG.defaultLang;

document.addEventListener("DOMContentLoaded", () => {
  initDynamicYear();
  initLanguageSwitcher();
  initMobileNav();
  initVideoShowcase();
  initConfigurableLinks();
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

    // Update active state on ID / ENG indicator
    document.querySelectorAll("[data-lang-ind]").forEach((ind) => {
      const code = ind.getAttribute("data-lang-ind");
      ind.classList.toggle("active-lang", code === currentLang);
    });
  };

  applyLanguage(currentLang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const nextLang = currentLang === "id" ? "en" : "id";
      applyLanguage(nextLang);
    });
  }
}

/* 3. Mobile Navigation Toggle */
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

/* 4. Smart Video Showcase Loader & Interactive Preview Simulator */
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
            title: "⚔️ [00:20] Menurunkan Pasukan dengan Anti-Ban System...",
            sub: "Titik deploy acak & jeda ketukan natural seperti jari manusia asli."
          },
          {
            title: "🧱 [00:38] Super Smart Auto Up Wall & Builder Base Aktif!",
            sub: "Storage terdeteksi penuh -> Otomatis upgrade Wall di Home Village & Builder Base."
          }
        ],
        en: [
          {
            title: "🔍 [00:05] Best Loot Finder Scanning Deadbases...",
            sub: "Target found: Gold 1,150,000 | Elixir 1,210,000 (Exceeds minimum filter threshold)"
          },
          {
            title: "⚔️ [00:20] Deploying Troops with Anti-Ban System...",
            sub: "Randomized tap coordinates & natural human-like intervals."
          },
          {
            title: "🧱 [00:38] Super Smart Auto Up Wall & Builder Base Active!",
            sub: "Full storage detected -> Automatically upgrading Home Village & Builder Base Walls."
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

/* 5. Centralized Link Configuration & Honest Placeholder Modal */
function initConfigurableLinks() {
  const modal = document.getElementById("placeholderModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMessage = document.getElementById("modalMessage");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modalBackdrop = document.getElementById("modalBackdrop");

  let lastFocusedElement = null;

  const openModal = (configKey) => {
    if (!modal) return;
    lastFocusedElement = document.activeElement;

    const isEn = currentLang === "en";
    const messages = {
      checkoutTrialUrl: {
        title: isEn ? "Claim 1-Day Free Trial (Rp 0)" : "Klaim Trial Free 1 Hari (Rp 0)",
        msg: isEn
          ? "The 1-Day Free Trial link (All Features Unlocked + Standard Support) will be connected here via script.js."
          : "Fitur klaim Trial Gratis 1 Hari (All Fitur Unlock + Standard Support) siap dihubungkan ke link admin/bot Anda di script.js."
      },
      checkoutWeeklyUrl: {
        title: isEn ? "1 Week Plan Checkout (Rp 28,900)" : "Checkout Paket 1 Minggu (Rp 28.900)",
        msg: isEn
          ? "1 Week plan checkout link is being prepared. Set checkoutWeeklyUrl in script.js to activate."
          : "Link pemesanan Paket 1 Minggu sedang disiapkan. Isi checkoutWeeklyUrl di script.js untuk mengaktifkan."
      },
      checkoutMonthlyUrl: {
        title: isEn ? "⚡ Best Monthly Plan (Rp 99,000)" : "⚡ Checkout Best Value 1 Bulan (Rp 99.000)",
        msg: isEn
          ? "Most popular plan with Priority Support! Add your checkout or WhatsApp link to checkoutMonthlyUrl in script.js."
          : "Paket terpopuler dengan Priority Support! Masukkan link pembayaran/admin Anda pada checkoutMonthlyUrl di script.js."
      },
      checkoutLifetimeUrl: {
        title: isEn ? "👑 Life Time + VIPP Support (Rp 499,000)" : "👑 Checkout Life Time + VIPP Support (Rp 499.000)",
        msg: isEn
          ? "Ultimate one-time payment license with exclusive VIPP Support! Connect your checkout URL in script.js."
          : "Paket kasta tertinggi sekali bayar untuk selamanya dengan layanan eksklusif VIPP Support! Hubungkan URL checkout Anda di script.js."
      }
    };

    const info = messages[configKey] || {
      title: isEn ? "Link Coming Soon" : "Tautan Segera Aktif",
      msg: isEn
        ? "This button is ready to be connected to your official URL inside script.js."
        : "Tombol ini siap dihubungkan ke URL resmi Anda melalui bagian SITE_CONFIG di dalam file script.js."
    };

    if (modalTitle) modalTitle.textContent = info.title;
    if (modalMessage) modalMessage.textContent = info.msg;
    modal.hidden = false;
    if (closeModalBtn) closeModalBtn.focus();
  };

  const closeModal = () => {
    if (!modal) return;
    modal.hidden = true;
    if (lastFocusedElement) lastFocusedElement.focus();
  };

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.hidden) {
      closeModal();
    }
  });

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
      } else {
        el.addEventListener("click", () => {
          window.open(targetUrl, "_blank", "noopener,noreferrer");
        });
      }
    } else {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(key);
      });
    }
  });
}

/* 6. Accessible FAQ Accordion */
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

/* 7. Scroll Reveal */
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

/* 8. Active Navigation Spy & Back to Top Button */
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