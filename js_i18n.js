// Internationalization (i18n) for QUOTEX TRADING BOT
// Fully supporting Bengali (বাংলা) and English (en)

const i18n = {
  currentLang: localStorage.getItem('quotex_lang') || 'bn',

  dict: {
    bn: {
      appName: 'QUOTEX TRADING BOT',
      developerTag: 'ডেভেলপার: Mk Mahin Choudhory',
      loginTitle: 'QUOTEX TRADING BOT',
      loginSubtitle: 'অ্যাডভান্সড AI বাইনারি ট্রেডিং অ্যানালাইজার',
      devCredit: 'Created by Mk Mahin Choudhory',
      usernameLabel: 'ইউজারনেম',
      usernamePlaceholder: 'ইউজারনেম দিন (mk001)',
      passwordLabel: 'পাসওয়ার্ড',
      passwordPlaceholder: 'পাসওয়ার্ড দিন (mk001)',
      rememberMe: 'আমাকে মনে রাখুন (Remember Me)',
      loginBtn: 'টার্মিনালে প্রবেশ করুন ⚡',
      loginValidating: 'যাচাই করা হচ্ছে...',
      loginSuccess: 'লগইন সফল! ড্যাশবোর্ডে প্রবেশ হচ্ছে...',
      loginFailed: 'লগইন ব্যর্থ! সঠিক তথ্য দিন (mk001 / mk001)',
      logout: 'লগআউট',
      navLive: 'লাইভ অ্যানালাইসিস',
      navUpload: 'ইমেজ অ্যানালাইসিস',
      navChat: 'AI অ্যাসিস্ট্যান্ট',
      navDashboard: 'ড্যাশবোর্ড',
      navSettings: 'সেটিংস',
      marketActive: 'মার্কেট সচল',
      marketOtc: 'OTC মার্কেট',
      volatility: 'ভোলাটিলিটি',
      timeframe: 'টাইমফ্রেম',
      selectTimeframe: 'টাইমফ্রেম নির্বাচন',
      confidence: 'নির্ভুলতা / কনফিডেন্স',
      trend: 'মার্কেট ট্রেন্ড',
      pattern: 'ক্যান্ডেলস্টিক প্যাটার্ন',
      support: 'সাপোর্ট জোন',
      resistance: 'রেসিস্ট্যান্স জোন',
      rsiStatus: 'RSI ইন্ডিকেটর',
      maStatus: 'মুভিং এভারেজ (MA)',
      volatilityStatus: 'মার্কেট ভোলাটিলিটি',
      aiRationale: 'AI-এর বিস্তারিত যুক্তি ও বিশ্লেষণ',
      riskAlert: 'রিস্ক ওয়ার্নিং ও সতর্কতা',
      actionAdvice: 'ট্রেডার অ্যাকশন গাইডলাইন',
      upSignal: 'UP / CALL (ক্রয়)',
      downSignal: 'DOWN / PUT (বিক্রয়)',
      waitSignal: 'WAIT / NO TRADE (অপেক্ষা)',
      startScreenShare: 'Start Screen Sharing (স্ক্রিন শেয়ার শুরু)',
      stopScreenShare: 'Stop Sharing (শেয়ার বন্ধ)',
      captureAnalyze: 'Capture & Analyze Now (এখনই বিশ্লেষণ)',
      autoScanLabel: 'অটো-স্ক্যান ফ্রিকোয়েন্সি',
      off: 'বন্ধ',
      sec15: '১৫ সেকেন্ড পর পর',
      sec30: '৩০ সেকেন্ড পর পর',
      sec60: '৬০ সেকেন্ড পর পর',
      screenHint: 'Android ব্রাউজারে অনুমতি দিলে আপনার Quotex লাইভ চার্ট সরাসরি এই ফ্রেমের মাধ্যমে AI দ্বারা স্ক্যান করা হবে।',
      uploadTitle: 'গ্যালারি বা চার্ট স্ক্রিনশট আপলোড',
      uploadSubtitle: 'Quotex অ্যাপ থেকে স্ক্রিনশট নিয়ে এখানে দিন',
      dropzoneText: 'এখানে ছবি নির্বাচন করুন বা ট্যাপ করুন',
      analyzeUploadedImg: 'AI দিয়ে ছবি বিশ্লেষণ করুন ⚡',
      chatTitle: 'AI ট্রেডিং এক্সপার্ট চ্যাট',
      chatSubtitle: 'Quotex, Price Action ও ক্যান্ডেলস্টিক সম্পর্কে যেকোনো প্রশ্ন করুন',
      chatPlaceholder: 'ট্রেডিং সংক্রান্ত যেকোনো প্রশ্ন বাংলায় লিখুন...',
      sendBtn: 'পাঠান',
      quickPrompts: 'জনপ্রিয় প্রশ্নসমূহ:',
      settingsTitle: 'কন্ট্রোল ও সেটিংস প্যানেল',
      aiConfig: 'AI ইঞ্জিন ও প্রোভাইডার সেটিংস',
      selectProvider: 'AI প্রোভাইডার নির্বাচন',
      apiKeyLabel: 'প্রোভাইডার API Key',
      apiKeyPlaceholder: 'আপনার AI API Key লিখুন (ঐচ্ছিক)',
      modelLabel: 'AI মডেল',
      testApiBtn: 'API কানেকশন টেস্ট করুন',
      themeSelector: 'থিম নির্বাচন',
      layoutSelector: 'ড্যাশবোর্ড লেআউট',
      soundToggle: 'অডিও ও সিগন্যাল সাউন্ড',
      hapticToggle: 'ভাইব্রেশন ও হ্যাপটিক টাচ',
      disclaimerTitle: 'ঝুঁকি সতর্কতা ও নীতি:',
      disclaimerText: 'বাইনারি অপশন ট্রেডিংয়ে আর্থিক ঝুঁকির সম্ভাবনা থাকে। এই AI বট কোনো ভুয়া বা ১০০% নিশ্চিত লাভের দাবি করে না। এটি শুধুমাত্র ক্যান্ডেলস্টিক প্যাটার্ন, সাপোর্ট/রেসিস্ট্যান্স ও প্রাইজ অ্যাকশন ভিত্তিক টেকনিক্যাল গাইডেন্স প্রদান করে। নিজ দায়িত্বে ঝুঁকি ও মানি ম্যানেজমেন্ট মেনে ট্রেড করুন।'
    },
    en: {
      appName: 'QUOTEX TRADING BOT',
      developerTag: 'Developer: Mk Mahin Choudhory',
      loginTitle: 'QUOTEX TRADING BOT',
      loginSubtitle: 'Advanced AI Binary Trading Terminal',
      devCredit: 'Created by Mk Mahin Choudhory',
      usernameLabel: 'Username',
      usernamePlaceholder: 'Enter username (mk001)',
      passwordLabel: 'Password',
      passwordPlaceholder: 'Enter password (mk001)',
      rememberMe: 'Remember Me',
      loginBtn: 'Access Terminal ⚡',
      loginValidating: 'Validating credentials...',
      loginSuccess: 'Login successful! Redirecting...',
      loginFailed: 'Invalid credentials! Use mk001 / mk001',
      logout: 'Logout',
      navLive: 'Live Scanner',
      navUpload: 'Image Analyzer',
      navChat: 'AI Assistant',
      navDashboard: 'Dashboard',
      navSettings: 'Settings',
      marketActive: 'Market Active',
      marketOtc: 'OTC Market',
      volatility: 'Volatility',
      timeframe: 'Timeframe',
      selectTimeframe: 'Select Timeframe',
      confidence: 'Confidence Score',
      trend: 'Market Trend',
      pattern: 'Candlestick Pattern',
      support: 'Support Level',
      resistance: 'Resistance Level',
      rsiStatus: 'RSI Momentum',
      maStatus: 'Moving Averages',
      volatilityStatus: 'Market Volatility',
      aiRationale: 'Detailed AI Rationale & Breakdown',
      riskAlert: 'Risk Warning & Advisory',
      actionAdvice: 'Actionable Trader Guidance',
      upSignal: 'UP / CALL (Buy)',
      downSignal: 'DOWN / PUT (Sell)',
      waitSignal: 'WAIT / NO TRADE',
      startScreenShare: 'Start Screen Sharing',
      stopScreenShare: 'Stop Sharing',
      captureAnalyze: 'Capture & Analyze Now',
      autoScanLabel: 'Auto-Scan Interval',
      off: 'Manual / Off',
      sec15: 'Every 15s',
      sec30: 'Every 30s',
      sec60: 'Every 60s',
      screenHint: 'Grant screen capture permission to stream your live Quotex window directly for AI vision processing.',
      uploadTitle: 'Upload Chart Screenshot',
      uploadSubtitle: 'Take a snapshot from Quotex and upload for deep technical inspection',
      dropzoneText: 'Tap to pick screenshot or drag here',
      analyzeUploadedImg: 'Run Deep AI Chart Analysis ⚡',
      chatTitle: 'AI Trading Assistant',
      chatSubtitle: 'Ask anything about Quotex, candlestick setups, or indicators',
      chatPlaceholder: 'Ask trading questions in English or Bengali...',
      sendBtn: 'Send',
      quickPrompts: 'Quick Questions:',
      settingsTitle: 'Settings & Configurations',
      aiConfig: 'AI Engine & Provider Setup',
      selectProvider: 'Select AI Provider',
      apiKeyLabel: 'Provider API Key',
      apiKeyPlaceholder: 'Enter your AI API Key (Optional)',
      modelLabel: 'AI Model',
      testApiBtn: 'Test API Connection',
      themeSelector: 'Theme Selector',
      layoutSelector: 'Dashboard Layout',
      soundToggle: 'Sound Chimes & Alerts',
      hapticToggle: 'Haptic Touch Feedback',
      disclaimerTitle: 'Risk Warning & Disclaimer:',
      disclaimerText: 'Trading binary options involves high financial risk. This AI bot does not provide guaranteed profits. It delivers algorithmic price action and technical pattern evaluation. Always exercise disciplined risk and money management.'
    }
  },

  t(key) {
    const lang = this.currentLang;
    if (this.dict[lang] && this.dict[lang][key]) {
      return this.dict[lang][key];
    }
    return this.dict.bn[key] || key;
  },

  setLanguage(lang) {
    if (lang === 'bn' || lang === 'en') {
      this.currentLang = lang;
      localStorage.setItem('quotex_lang', lang);
      this.applyToDOM();
    }
  },

  applyToDOM() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      if (translation) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.getAttribute('placeholder')) {
            el.setAttribute('placeholder', translation);
          }
        } else {
          el.innerHTML = translation;
        }
      }
    });

    // Update active lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === this.currentLang);
    });
  }
};

window.i18n = i18n;
