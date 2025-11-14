export type Language = 'en' | 'zh' | 'ja' | 'vi' | 'ms' | 'fr' | 'ar'

export interface Translation {
  nav: {
    home: string
    brandStory: string
    products: string
    store: string
    contact: string
  }
  language: {
    en: string
    zh: string
    ja: string
    vi: string
    ms: string
    fr: string
    ar: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  footer: {
    brandName: string
    description: string
    quickLinks: string
    contact: string
    followUs: string
    rights: string
  }
  home: {
    heroTitle: string
    heroSubtitle: string
    exploreCollection: string
    viewProducts: string
    craftsmanshipTitle: string
    craftsmanshipDesc: string
    sustainabilityTitle: string
    sustainabilityDesc: string
    eleganceTitle: string
    eleganceDesc: string
    // New content for actual Home page
    creativeExcellence: string
    yuiNakahara: string
    pleatsQuote: string
    yuiBio: string
    yuiPhilosophy: string
    brandStory: string
    contactUs: string
    manufacturingExcellence: string
    exceptionalPleatedArtistry: string
    manufacturingDesc1: string
    manufacturingDesc2: string
    manufacturingDesc3: string
    philosophy: string
    structuredArtistry: string
    brandPhilosophy: string
  }
  brandStory: {
    title: string
    subtitle: string
    intro: string
    heritageTitle: string
    heritageDesc: string
    philosophyTitle: string
    philosophyDesc: string
    craftsmanshipTitle: string
    craftsmanshipDesc: string
    meetArtisans: string
    // New content for actual Brand Story page
    fusionOfPleatsAndElegance: string
    pleatsArt: string
    pleatsDesc: string
    eleganceArt: string
    eleganceDesc: string
    whereStructuredArtistry: string
    artOfTransformation: string
    transformationDesc1: string
    transformationDesc2: string
    transformationDesc3: string
    fromConceptToCreation: string
    conceptDesc1: string
    conceptDesc2: string
    conceptDesc3: string
    heritageAndFuture: string
    rootedInTradition: string
    japaneseHeritage: string
    japaneseHeritageDesc: string
    modernInnovation: string
    modernInnovationDesc: string
    sustainableFuture: string
    sustainableFutureDesc: string
  }
  products: {
    title: string
    subtitle: string
    allProducts: string
    categories: {
      dresses: string
      skirts: string
      tops: string
      accessories: string
    }
    filters: {
      color: string
      size: string
      price: string
      apply: string
      reset: string
    }
    // New content for actual Products page
    discoverCollection: string
    everyFoldTellsStory: string
    collectionDesc: string
    everydayEssentials: string
    everydayDesc: string
    statementPieces: string
    statementDesc: string
    professionalCollection: string
    professionalDesc: string
    eveningElegance: string
    eveningDesc: string
    comfortFit: string
    breathableFabric: string
    easyCare: string
    architecturalDesign: string
    handFinished: string
    limitedEdition: string
    officeReady: string
    wrinkleResistant: string
    travelFriendly: string
    premiumFabric: string
    intricatePleating: string
    specialOccasion: string
    artOfPerfectPleats: string
    fabricSelection: string
    fabricSelectionDesc: string
    pleatFormation: string
    pleatFormationDesc: string
    heatSetting: string
    heatSettingDesc: string
    experiencePlearance: string
    experienceDesc: string
    visitStore: string
  }
  store: {
    title: string
    subtitle: string
    visitUs: string
    bookAppointment: string
    location: string
    hours: string
    features: string
    // New content for actual Store page
    discoverCuratedCollection: string
    experienceInPerson: string
    tokyoFlagship: string
    storeAddress: string
    storeHours: string
    personalJourney: string
    personalJourneyDesc1: string
    personalJourneyDesc2: string
    personalJourneyDesc3: string
    bespokeServices: string
    personalStyling: string
    personalStylingDesc: string
    customPleating: string
    customPleatingDesc: string
    alterations: string
    alterationsDesc: string
    careInstructions: string
    careInstructionsDesc: string
    shopAnywhere: string
    shopOnlineDesc1: string
    shopOnlineDesc2: string
    shopOnlineDesc3: string
    onlineContact: string
    emailLabel: string
    phoneLabel: string
    whatsappLabel: string
    beginJourney: string
    beginJourneyDesc: string
    contactUs: string
  }
  contacts: {
    title: string
    subtitle: string
    getInTouch: string
    generalInquiries: string
    storeAppointments: string
    pressMedia: string
    businessInquiries: string
    visitUs: string
    sendMessage: string
    letsTalk: string
    name: string
    email: string
    subject: string
    phone: string
    message: string
    sendButton: string
    sending: string
    successMessage: string
    errorMessage: string
    formIdError: string
    networkError: string
    faq: string
    commonQuestions: string
    careInstructions: string
    careInstructionsDesc: string
    internationalShipping: string
    internationalShippingDesc: string
    customPleating: string
    customPleatingDesc: string
    returnPolicy: string
    returnPolicyDesc: string
    // New content for actual Contacts page
    letsConnect: string
    createSomethingBeautiful: string
    weWouldLoveToHear: string
    responseTime: string
    within24Hours: string
    highResImages: string
    availableUponRequest: string
    partnerships: string
    wholesaleCollaboration: string
    tokyoFlagshipStore: string
    address: string
    addressDetails: string
    hours: string
    hoursDetails: string
    closedOnHolidays: string
    storeFeatures: string
    personalStylingConsultations: string
    customPleatingServices: string
    alterationsAdjustments: string
    privateShoppingAppointments: string
    getDirections: string
    letsStartConversation: string
    nameLabel: string
    emailLabel: string
    subjectLabel: string
    phoneLabel: string
    messageLabel: string
    yourFullName: string
    yourEmail: string
    selectSubject: string
    generalInquiry: string
    storeAppointment: string
    customOrder: string
    pressMediaContact: string
    businessPartnership: string
    other: string
    phonePlaceholder: string
    messagePlaceholder: string
    frequentlyAsked: string
    howToCare: string
    careDesc: string
    doYouShip: string
    shippingDesc: string
    canRequestCustom: string
    customDesc: string
    whatIsReturnPolicy: string
    returnDesc: string
  }
}

const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      brandStory: 'Brand Story',
      products: 'Products',
      store: 'Store',
      contact: 'Contact'
    },
    language: {
      en: 'English',
      zh: '中文',
      ja: '日本語',
      vi: 'Tiếng Việt',
      ms: 'Bahasa Melayu',
      fr: 'Français',
      ar: 'العربية'
    },
    hero: {
      title: 'Plearance',
      subtitle: 'Elegant Pleats, Timeless Beauty',
      cta: 'Explore Collection'
    },
    footer: {
      brandName: 'Plearance',
      description: 'Crafting elegant pleated fashion with traditional Japanese craftsmanship and modern sustainability.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved.'
    },
    home: {
      heroTitle: 'Discover the Art of Pleating',
      heroSubtitle: 'Where traditional Japanese craftsmanship meets contemporary elegance',
      exploreCollection: 'Explore Collection',
      viewProducts: 'View Products',
      craftsmanshipTitle: 'Master Craftsmanship',
      craftsmanshipDesc: 'Each piece is meticulously crafted by skilled artisans using traditional techniques passed down through generations.',
      sustainabilityTitle: 'Sustainable Fashion',
      sustainabilityDesc: 'We believe in creating timeless pieces that transcend trends, promoting conscious consumption.',
      eleganceTitle: 'Timeless Elegance',
      eleganceDesc: 'Our pleated designs embody sophistication and grace, perfect for the modern discerning individual.',
      // New content for actual Home page
      creativeExcellence: 'Creative Excellence',
      yuiNakahara: 'Yui Nakahara',
      pleatsQuote: '"Pleats and structure bring garments to life"',
      yuiBio: 'Born in 1991 in Ōita, Japan. Graduated from Bunka Fashion College (Apparel Technology). After graduation, joined ISSEY MIYAKE and worked on PLEATS PLEASE in design and pattern making, gaining end-to-end experience from planning, pattern development to sample prototyping.',
      yuiPhilosophy: 'My practice centers on the balance between function and beauty, emphasizing structure, proportion, and the sustainable use of fabric. By connecting modern craftsmanship with everyday wearing scenarios, she cultivates a distinct, restrained visual language.',
      brandStory: 'Brand Story',
      contactUs: 'Contact Us',
      manufacturingExcellence: 'Our Manufacturing Excellence',
      exceptionalPleatedArtistry: 'Welcome to the world of exceptional pleated artistry',
      manufacturingDesc1: 'In pursuit of creating the finest pleated garments, I have carefully selected the most prestigious manufacturing partner renowned for their unparalleled expertise in fabric manipulation and pleating techniques.',
      manufacturingDesc2: 'Our chosen manufacturer operates state-of-the-art pleating machinery, featuring precision-engineered equipment that transforms ordinary fabrics into extraordinary sculptural pieces. These advanced machines ensure every fold is perfectly aligned, every crease maintains its integrity, and every pleat tells a story of meticulous craftsmanship.',
      manufacturingDesc3: 'The manufacturing facility houses cutting-edge technology including computer-controlled pleating systems, heat-setting chambers with precise temperature regulation, and specialized pressing equipment that locks each fold into permanent perfection.',
      philosophy: 'Philosophy',
      structuredArtistry: 'Where structured artistry meets effortless grace',
      brandPhilosophy: 'PLEARANCE is my newly founded personal brand, specializing in pleated womenswear across diverse categories — from everyday essentials to statement pieces — exploring structure, movement, and comfort through pleats.'
    },
    brandStory: {
      title: 'Brand Story',
      subtitle: 'The Art of Pleating',
      intro: 'Founded in Tokyo, Plearance represents the perfect fusion of traditional Japanese pleating techniques and contemporary fashion design.',
      heritageTitle: 'Our Heritage',
      heritageDesc: 'Drawing from centuries-old Japanese textile traditions, we honor the meticulous art of fabric pleating.',
      philosophyTitle: 'Our Philosophy',
      philosophyDesc: 'We believe in creating garments that embody both aesthetic beauty and functional excellence.',
      craftsmanshipTitle: 'Our Craftsmanship',
      craftsmanshipDesc: 'Each pleat is carefully calculated and executed by master artisans with decades of experience.',
      meetArtisans: 'Meet Our Artisans',
      // New content for actual Brand Story page
      fusionOfPleatsAndElegance: 'The fusion of Pleats and Elegance',
      pleatsArt: 'Pleats',
      pleatsDesc: 'The art of folding fabric\nCreating structure and movement',
      eleganceArt: 'Elegance',
      eleganceDesc: 'Refined beauty in simplicity\nTimeless sophistication',
      whereStructuredArtistry: 'Where structured artistry meets effortless grace',
      artOfTransformation: 'The Art of Transformation',
      transformationDesc1: 'Born from the fusion of Pleats and Elegance, Plearance represents the harmonious marriage of technical precision and aesthetic refinement. Each fold tells a story of craftsmanship, while every silhouette whispers of timeless beauty.',
      transformationDesc2: 'Our design philosophy celebrates the transformative power of pleating — not merely as a technique, but as a language of expression that speaks to the modern woman\'s desire for both structure and fluidity in her wardrobe.',
      transformationDesc3: 'Through meticulous attention to proportion and an unwavering commitment to quality, we create garments that transcend seasonal trends, offering instead a permanent collection of refined pieces that age gracefully with their wearer.',
      fromConceptToCreation: 'From Concept to Creation',
      conceptDesc1: 'Every Plearance piece begins with an idea — a vision of how fabric can be transformed through the ancient art of pleating into something both functional and beautiful.',
      conceptDesc2: 'Our design process is meticulous and thoughtful. We begin by selecting the finest fabrics, each chosen for its ability to hold a pleat while maintaining drape and movement. The pleating process itself is a dance between heat, pressure, and time, requiring years of expertise to perfect.',
      conceptDesc3: 'The result is clothing that moves with you, that breathes with you, that becomes more beautiful with each wearing. This is not fast fashion — this is slow, deliberate creation of pieces meant to last a lifetime.',
      heritageAndFuture: 'Heritage & Future',
      rootedInTradition: 'Rooted in Tradition, Designed for Tomorrow',
      japaneseHeritage: 'Japanese Heritage',
      japaneseHeritageDesc: 'Drawing from centuries of Japanese textile tradition, our approach to pleating honors the past while embracing contemporary aesthetics. The precision and attention to detail that defines Japanese craftsmanship is evident in every fold.',
      modernInnovation: 'Modern Innovation',
      modernInnovationDesc: 'By combining traditional techniques with modern technology, we push the boundaries of what\'s possible with pleated fabric. Our commitment to innovation ensures that each collection builds upon the last, constantly evolving and improving.',
      sustainableFuture: 'Sustainable Future',
      sustainableFutureDesc: 'Sustainability is not an afterthought — it\'s woven into every decision we make. From selecting eco-friendly fabrics to creating timeless designs that transcend trends, we\'re building a brand that respects both people and planet.'
    },
    products: {
      title: 'Products',
      subtitle: 'Elegant Pleated Collection',
      allProducts: 'All Products',
      categories: {
        dresses: 'Dresses',
        skirts: 'Skirts',
        tops: 'Tops',
        accessories: 'Accessories'
      },
      filters: {
        color: 'Color',
        size: 'Size',
        price: 'Price',
        apply: 'Apply',
        reset: 'Reset'
      },
      // New content for actual Products page
      discoverCollection: 'Discover our collection of pleated artistry',
      everyFoldTellsStory: 'Every Fold Tells a Story',
      collectionDesc: 'Our carefully curated collection represents the pinnacle of pleated craftsmanship. Each piece is designed to transcend seasons, offering timeless elegance through the transformative power of pleats.',
      everydayEssentials: 'Everyday Essentials',
      everydayDesc: 'Thoughtfully designed pieces that seamlessly integrate into your daily wardrobe. These versatile garments combine comfort with sophistication, featuring subtle pleating that adds texture and movement to classic silhouettes.',
      statementPieces: 'Statement Pieces',
      statementDesc: 'Bold, architectural designs that showcase the dramatic potential of pleating. These garments are crafted to make an impression, featuring innovative pleat patterns and sculptural forms that celebrate the artistry of our craft.',
      professionalCollection: 'Professional Collection',
      professionalDesc: 'Sophisticated pieces designed for the modern professional. These garments feature refined pleating techniques that add visual interest while maintaining a polished, workplace-appropriate aesthetic.',
      eveningElegance: 'Evening Elegance',
      eveningDesc: 'Luxurious pieces designed for special occasions. These garments feature intricate pleating patterns and premium fabrics that create dramatic silhouettes perfect for evening events and celebrations.',
      comfortFit: 'Comfort Fit',
      breathableFabric: 'Breathable Fabric',
      easyCare: 'Easy Care',
      architecturalDesign: 'Architectural Design',
      handFinished: 'Hand-finished',
      limitedEdition: 'Limited Edition',
      officeReady: 'Office Ready',
      wrinkleResistant: 'Wrinkle Resistant',
      travelFriendly: 'Travel Friendly',
      premiumFabric: 'Premium Fabric',
      intricatePleating: 'Intricate Pleating',
      specialOccasion: 'Special Occasion',
      artOfPerfectPleats: 'The Art of Perfect Pleats',
      fabricSelection: 'Fabric Selection',
      fabricSelectionDesc: 'We begin with the finest fabrics, each chosen for its ability to hold a pleat while maintaining its natural drape and movement. Our selection process is rigorous, ensuring only materials that meet our exacting standards.',
      pleatFormation: 'Pleat Formation',
      pleatFormationDesc: 'Using state-of-the-art equipment combined with traditional techniques, each pleat is formed with precision. The process requires perfect timing, temperature, and pressure to create permanent, beautiful folds.',
      heatSetting: 'Heat Setting',
      heatSettingDesc: 'The final step involves carefully controlled heat setting that locks each pleat into place. This ensures that your garment will maintain its beautiful structure wash after wash, wear after wear.',
      experiencePlearance: 'Experience Plearance',
      experienceDesc: 'Each Plearance piece is more than just clothing — it\'s a work of art that celebrates the beauty of structure and the poetry of movement. Discover how pleats can transform not just fabric, but how you feel in your clothes.',
      visitStore: 'Visit Our Store'
    },
    store: {
      title: 'Store',
      subtitle: 'Visit Our Flagship',
      visitUs: 'Visit Us',
      bookAppointment: 'Book Appointment',
      location: 'Tokyo Flagship Store',
      hours: 'Store Hours',
      features: 'Store Features',
      // New content for actual Store page
      discoverCuratedCollection: 'Discover our curated collection',
      experienceInPerson: 'Experience Plearance in Person',
      tokyoFlagship: 'Tokyo Flagship',
      storeAddress: '1 Chome-8-1 Marunouchi<br>Chiyoda City, Tokyo<br>100-0005, Japan',
      storeHours: 'Monday - Saturday: 11:00 - 20:00<br>Sunday: 12:00 - 19:00',
      personalJourney: 'A Personal Journey',
      personalJourneyDesc1: 'Stepping into a Plearance store is more than a shopping trip — it\'s an immersion into the world of pleated artistry. Our carefully designed spaces reflect the same attention to detail and minimalist aesthetic that defines our clothing.',
      personalJourneyDesc2: 'Each store is conceived as a gallery where garments are displayed as works of art. The lighting is meticulously calibrated to highlight the texture and movement of each pleat, allowing you to appreciate the craftsmanship that goes into every piece.',
      personalJourneyDesc3: 'Our knowledgeable staff are trained not just in fashion, but in the art and science of pleating. They can guide you through our collections, explaining the different techniques used and helping you find pieces that complement your personal style and lifestyle.',
      bespokeServices: 'Bespoke Services',
      personalStyling: 'Personal Styling',
      personalStylingDesc: 'Our expert stylists work with you to understand your aesthetic preferences, lifestyle needs, and body type to curate a selection of pieces that will become the foundation of your wardrobe.',
      customPleating: 'Custom Pleating',
      customPleatingDesc: 'For those seeking something truly unique, we offer custom pleating services. Work with our artisans to create bespoke pleat patterns that reflect your personal style and vision.',
      alterations: 'Alterations',
      alterationsDesc: 'Our in-house alteration service ensures that every piece fits you perfectly. We understand that the beauty of pleated garments lies in their precise fit and drape.',
      careInstructions: 'Care Instructions',
      careInstructionsDesc: 'Learn how to properly care for your pleated garments to ensure they maintain their beauty and structure for years to come. We provide detailed guidance on cleaning, storage, and maintenance.',
      shopAnywhere: 'Shop from Anywhere',
      shopOnlineDesc1: 'While we believe nothing compares to experiencing our garments in person, we understand that visiting our Tokyo flagship isn\'t always possible. Our online store brings the Plearance experience to you, wherever you are.',
      shopOnlineDesc2: 'Each product page includes detailed photographs that capture the texture and movement of our pleated fabrics. We provide comprehensive measurements, fabric information, and styling suggestions to help you make informed decisions.',
      shopOnlineDesc3: 'Our customer service team is available to answer questions, provide styling advice, and ensure that your online shopping experience meets the same high standards as visiting our store in person.',
      onlineContact: 'Get in Touch',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      beginJourney: 'Begin Your Plearance Journey',
      beginJourneyDesc: 'Whether you visit our Tokyo flagship or shop online, we\'re here to help you discover the transformative power of pleated artistry. Each piece in our collection is designed to become a cherished part of your wardrobe, bringing structure, movement, and elegance to your everyday life.',
      contactUs: 'Contact Us'
    },
    contacts: {
      title: 'Contact',
      subtitle: "Let's Connect",
      getInTouch: 'Get in Touch',
      generalInquiries: 'General Inquiries',
      storeAppointments: 'Store & Appointments',
      pressMedia: 'Press & Media',
      businessInquiries: 'Business Inquiries',
      visitUs: 'Visit Us',
      sendMessage: 'Send a Message',
      letsTalk: "Let's Start a Conversation",
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      phone: 'Phone',
      message: 'Message',
      sendButton: 'Send Message',
      sending: 'Sending...',
      successMessage: "Thank you for your message! We'll get back to you within 24 hours.",
      errorMessage: 'Sorry, there was an error sending your message. Please try again.',
      formIdError: 'Formspree endpoint not configured. Please set VITE_FORMSPREE_ENDPOINT in your .env file.',
      networkError: 'Network error. Please check your internet connection and try again.',
      faq: 'FAQ',
      commonQuestions: 'Common Questions',
      careInstructions: 'How do I care for pleated garments?',
      careInstructionsDesc: 'Our pleated garments are designed to maintain their shape. We recommend gentle hand washing or dry cleaning. Never iron directly on pleats.',
      internationalShipping: 'Do you offer international shipping?',
      internationalShippingDesc: 'Yes, we ship worldwide. Shipping costs and delivery times vary by destination.',
      customPleating: 'Can I request custom pleating?',
      customPleatingDesc: 'Absolutely! We offer custom pleating services. Contact us to discuss your vision.',
      returnPolicy: 'What is your return policy?',
      returnPolicyDesc: 'We accept returns within 14 days of delivery for unworn items with tags attached.',
      // New content for actual Contacts page
      letsConnect: "Let's Connect",
      createSomethingBeautiful: 'Create Something Beautiful Together',
      weWouldLoveToHear: 'We Would Love to Hear From You',
      responseTime: 'Response Time',
      within24Hours: 'Within 24 Hours',
      highResImages: 'High Resolution Images',
      availableUponRequest: 'Available Upon Request',
      partnerships: 'Partnerships',
      wholesaleCollaboration: 'Wholesale Collaboration',
      tokyoFlagshipStore: 'Tokyo Flagship Store',
      address: 'Address',
      addressDetails: '1 Chome-8-1 Marunouchi<br>Chiyoda City, Tokyo<br>100-0005, Japan',
      hours: 'Hours',
      hoursDetails: 'Monday - Saturday: 11:00 - 20:00<br>Sunday: 12:00 - 19:00',
      closedOnHolidays: 'Closed on Holidays',
      storeFeatures: 'Store Features',
      personalStylingConsultations: 'Personal Styling Consultations',
      customPleatingServices: 'Custom Pleating Services',
      alterationsAdjustments: 'Alterations & Adjustments',
      privateShoppingAppointments: 'Private Shopping Appointments',
      getDirections: 'Get Directions',
      letsStartConversation: "Let's Start a Conversation",
      nameLabel: 'Name',
      emailLabel: 'Email',
      subjectLabel: 'Subject',
      phoneLabel: 'Phone',
      messageLabel: 'Message',
      yourFullName: 'Your Full Name',
      yourEmail: 'Your Email',
      selectSubject: 'Select Subject',
      generalInquiry: 'General Inquiry',
      storeAppointment: 'Store Appointment',
      customOrder: 'Custom Order',
      pressMediaContact: 'Press & Media Contact',
      businessPartnership: 'Business Partnership',
      other: 'Other',
      phonePlaceholder: 'Your phone number (optional)',
      messagePlaceholder: 'Tell us what you think...',
      frequentlyAsked: 'Frequently Asked',
      howToCare: 'How do I care for pleated garments?',
      careDesc: 'Our pleated garments are designed to maintain their shape. We recommend gentle hand washing or dry cleaning. Never iron directly on pleats.',
      doYouShip: 'Do you offer international shipping?',
      shippingDesc: 'Yes, we ship worldwide. Shipping costs and delivery times vary by destination.',
      canRequestCustom: 'Can I request custom pleating?',
      customDesc: 'Absolutely! We offer custom pleating services. Contact us to discuss your vision.',
      whatIsReturnPolicy: 'What is your return policy?',
      returnDesc: 'We accept returns within 14 days of delivery for unworn items with tags attached.'
    }
  },
  zh: {
    nav: {
      home: '首页',
      brandStory: '品牌故事',
      products: '产品',
      store: '店铺',
      contact: '联系我们'
    },
    language: {
      en: 'English',
      zh: '中文',
      ja: '日本語',
      vi: 'Tiếng Việt',
      ms: 'Bahasa Melayu',
      fr: 'Français',
      ar: 'العربية'
    },
    hero: {
      title: 'Plearance',
      subtitle: '优雅褶皱，永恒之美',
      cta: '探索系列'
    },
    footer: {
      brandName: 'Plearance',
      description: '运用传统日本工艺和现代可持续性理念，精心打造优雅褶皱时尚。',
      quickLinks: '快速链接',
      contact: '联系我们',
      followUs: '关注我们',
      rights: '版权所有。'
    },
    home: {
      heroTitle: '探索褶皱艺术',
      heroSubtitle: '传统日本工艺与现代优雅的完美融合',
      exploreCollection: '探索系列',
      viewProducts: '查看产品',
      craftsmanshipTitle: '精湛工艺',
      craftsmanshipDesc: '每件作品都由技艺精湛的工匠运用世代传承的传统技术精心制作。',
      sustainabilityTitle: '可持续时尚',
      sustainabilityDesc: '我们相信创造超越潮流的永恒作品，促进理性消费。',
      eleganceTitle: '永恒优雅',
      eleganceDesc: '我们的褶皱设计体现精致与优雅，完美适合现代有品味的人士。',
      // New content for actual Home page
      creativeExcellence: '创意卓越',
      yuiNakahara: '中原唯衣',
      pleatsQuote: '"褶皱与结构赋予服装生命力"',
      yuiBio: '1991年出生于日本大分县。毕业于文化时装学院（服装技术专业）。毕业后加入三宅一生，从事PLEATS PLEASE的设计与制版工作，从企划、版型开发到样衣制作积累了全流程经验。',
      yuiPhilosophy: '我的实践注重功能与美的平衡，强调结构、比例和面料的可持续运用。通过将现代工艺与日常穿着场景相连接，培育出独特而克制的视觉语言。',
      brandStory: '品牌故事',
      contactUs: '联系我们',
      manufacturingExcellence: '我们的制造卓越',
      exceptionalPleatedArtistry: '欢迎来到卓越褶皱工艺的世界',
      manufacturingDesc1: '为了创造最优质的褶皱服装，我精心选择了在面料处理和褶皱技术方面享有无与伦比专业声誉的制造合作伙伴。',
      manufacturingDesc2: '我们选择的制造商运营着最先进的褶皱机械，配备精密工程设备，将普通面料转化为非凡的雕塑作品。这些先进机器确保每个折叠都完美对齐，每个褶皱都保持完整性，每个褶皱都讲述着精心工艺的故事。',
      manufacturingDesc3: '制造工厂配备了尖端技术，包括计算机控制的褶皱系统、具有精确温度调节的热定型室，以及将每个折叠锁定为永久完美的专业压烫设备。',
      philosophy: '理念',
      structuredArtistry: '结构艺术与轻松优雅的完美结合',
      brandPhilosophy: 'PLEARANCE是我新创立的个人品牌，专注于各类褶皱女装——从日常必需品到个性单品——通过褶皱探索结构、流动性和舒适性。'
    },
    brandStory: {
      title: '品牌故事',
      subtitle: '褶皱艺术',
      intro: 'Plearance成立于东京，代表着传统日本褶皱工艺与现代时装设计的完美融合。',
      heritageTitle: '我们的传承',
      heritageDesc: '汲取日本纺织传统数百年的精髓，我们秉承精益求精的布料褶皱艺术。',
      philosophyTitle: '我们的理念',
      philosophyDesc: '我们相信创造兼具美学美感与功能卓越的服装。',
      craftsmanshipTitle: '我们的工艺',
      craftsmanshipDesc: '每个褶皱都由拥有数十年经验的大师级工匠精心计算和执行。',
      meetArtisans: '认识我们的工匠',
      // New content for actual Brand Story page
      fusionOfPleatsAndElegance: '褶皱与优雅的融合',
      pleatsArt: '褶皱',
      pleatsDesc: '折叠面料的艺术\n创造结构与流动',
      eleganceArt: '优雅',
      eleganceDesc: '简约中的精致美\n永恒的精致',
      whereStructuredArtistry: '结构艺术与轻松优雅的完美结合',
      artOfTransformation: '转变的艺术',
      transformationDesc1: 'Plearance诞生于褶皱与优雅的融合，代表着技术精度与美学精致的和谐结合。每个折叠都讲述着工艺的故事，而每个轮廓都低语着永恒之美。',
      transformationDesc2: '我们的设计理念颂扬褶皱的变革力量——不仅仅是作为一种技术，而是作为一种表达语言，诉说着现代女性对服装结构与流动性的双重渴望。',
      transformationDesc3: '通过对比例的细致关注和坚定不移的品质承诺，我们创造出超越季节趋势的服装，而是提供一系列精致的永久收藏品，与穿着者一起优雅地老化。',
      fromConceptToCreation: '从概念到创作',
      conceptDesc1: '每件Plearance作品都始于一个想法——一个关于如何通过古老的褶皱艺术将面料转化为既实用又美丽的事物的愿景。',
      conceptDesc2: '我们的设计过程是细致而深思熟虑的。我们首先选择最优质的面料，每种面料都因其保持褶皱的能力而同时保持悬垂性和流动性而被选中。褶皱过程本身是热量、压力和时间之间的舞蹈，需要多年的专业知识才能完善。',
      conceptDesc3: '结果是与你同行、与你同呼吸、随着每次穿着而变得更加美丽的服装。这不是快时尚——这是缓慢的、深思熟虑的创造，旨在持续一生的作品。',
      heritageAndFuture: '传承与未来',
      rootedInTradition: '根植传统，为明天而设计',
      japaneseHeritage: '日本传统',
      japaneseHeritageDesc: '从日本纺织传统的数百年中汲取灵感，我们对褶皱的处理方法在向过去致敬的同时拥抱当代美学。定义日本工艺的精确度和对细节的关注在每个折叠中都显而易见。',
      modernInnovation: '现代创新',
      modernInnovationDesc: '通过将传统技术与现代技术相结合，我们突破了褶皱面料可能性的界限。我们对创新的承诺确保每个系列都在前一个系列的基础上建立，不断发展和改进。',
      sustainableFuture: '可持续未来',
      sustainableFutureDesc: '可持续性不是事后考虑——它融入我们做出的每个决定。从选择环保面料到创造超越趋势的永恒设计，我们正在建立一个尊重人和地球的品牌。'
    },
    products: {
      title: '产品',
      subtitle: '优雅褶皱系列',
      allProducts: '所有产品',
      categories: {
        dresses: '连衣裙',
        skirts: '半身裙',
        tops: '上衣',
        accessories: '配饰'
      },
      filters: {
        color: '颜色',
        size: '尺码',
        price: '价格',
        apply: '应用',
        reset: '重置'
      },
      // New content for actual Products page
      discoverCollection: '发现我们的褶皱艺术收藏',
      everyFoldTellsStory: '每个褶皱都讲述一个故事',
      collectionDesc: '我们精心策划的收藏代表了褶皱工艺的巅峰。每件作品都设计为超越季节，通过褶皱的变革力量提供永恒的优雅。',
      everydayEssentials: '日常必需品',
      everydayDesc: '精心设计的产品，无缝融入您的日常衣橱。这些多功能服装将舒适与精致相结合，采用微妙的褶皱为经典轮廓增添质感和流动性。',
      statementPieces: '个性单品',
      statementDesc: '大胆的建筑设计，展示褶皱的戏剧性潜力。这些服装旨在留下深刻印象，采用创新的褶皱图案和雕塑形式，颂扬我们工艺的艺术性。',
      professionalCollection: '职业系列',
      professionalDesc: '为现代专业人士设计的精致作品。这些服装采用精致的褶皱技术，在保持精致、适合工作场所的美学的同时增加视觉趣味。',
      eveningElegance: '晚装优雅',
      eveningDesc: '为特殊场合设计的奢华作品。这些服装采用复杂的褶皱图案和优质面料，创造出适合晚间活动和庆典的戏剧性轮廓。',
      comfortFit: '舒适版型',
      breathableFabric: '透气面料',
      easyCare: '易护理',
      architecturalDesign: '建筑设计',
      handFinished: '手工精修',
      limitedEdition: '限量版',
      officeReady: '办公就绪',
      wrinkleResistant: '抗皱',
      travelFriendly: '旅行友好',
      premiumFabric: '优质面料',
      intricatePleating: '复杂褶皱',
      specialOccasion: '特殊场合',
      artOfPerfectPleats: '完美褶皱的艺术',
      fabricSelection: '面料选择',
      fabricSelectionDesc: '我们从最优质的面料开始，每种面料都因其保持褶皱的能力而同时保持其自然悬垂性和流动性而被选中。我们的选择过程严格，确保只有符合我们严格标准的材料。',
      pleatFormation: '褶皱形成',
      pleatFormationDesc: '使用最先进的设备结合传统技术，每个褶皱都以精确的方式形成。该过程需要完美的时机、温度和压力，以创造永久、美丽的折叠。',
      heatSetting: '热定型',
      heatSettingDesc: '最后一步涉及仔细控制的热定型，将每个褶皱锁定到位。这可确保您的服装在洗涤后、穿着后仍能保持其美丽的结构。',
      experiencePlearance: '体验Plearance',
      experienceDesc: '每件Plearance作品不仅仅是服装——它是一件艺术品，颂扬结构之美和流动之诗。发现褶皱如何改变不仅仅是面料，还有你在衣服中的感受。',
      visitStore: '参观我们的店铺'
    },
    store: {
      title: '店铺',
      subtitle: '参观我们的旗舰店',
      visitUs: '参观我们',
      bookAppointment: '预约参观',
      location: '东京旗舰店',
      hours: '营业时间',
      features: '店铺特色',
      // New content for actual Store page
      discoverCuratedCollection: '发现我们的精心策划系列',
      experienceInPerson: '亲身体验Plearance',
      tokyoFlagship: '东京旗舰店',
      storeAddress: '东京都千代田区丸之内1-8-1<br>邮编100-0005，日本',
      storeHours: '周一至周六：11:00 - 20:00<br>周日：12:00 - 19:00',
      personalJourney: '个人之旅',
      personalJourneyDesc1: '踏入Plearance店铺不仅仅是购物——这是沉浸在褶皱艺术世界中。我们精心设计的空间体现了定义我们服装的同样细节关注和极简美学。',
      personalJourneyDesc2: '每家店铺都被设想为一个画廊，服装作为艺术品展示。灯光经过精心校准，突出每个褶皱的质地和流动性，让您欣赏每件作品的工艺。',
      personalJourneyDesc3: '我们的知识渊博的员工不仅在时尚方面受过培训，而且在褶皱的艺术和科学方面也受过培训。他们可以引导您了解我们的系列，解释使用的不同技术，并帮助您找到补充您个人风格和生活方式的作品。',
      bespokeServices: '定制服务',
      personalStyling: '个人造型',
      personalStylingDesc: '我们的专家造型师与您合作，了解您的审美偏好、生活方式需求和体型，策划一系列将成为您衣橱基础的单品。',
      customPleating: '定制褶皱',
      customPleatingDesc: '对于那些寻求真正独特东西的人，我们提供定制褶皱服务。与我们的工匠合作，创建反映您个人风格和愿景的定制褶皱图案。',
      alterations: '修改服务',
      alterationsDesc: '我们的内部修改服务确保每件作品都完美适合您。我们理解褶皱服装的美感在于其精确的合身性和悬垂性。',
      careInstructions: '护理说明',
      careInstructionsDesc: '学习如何正确护理您的褶皱服装，确保它们在未来多年保持美丽和结构。我们提供关于清洁、储存和维护的详细指导。',
      shopAnywhere: '随时随地购物',
      shopOnlineDesc1: '虽然我们相信没有什么能比得上亲身体验我们的服装，但我们理解参观我们的东京旗舰店并不总是可能的。我们的在线商店将Plearance体验带到您身边，无论您身在何处。',
      shopOnlineDesc2: '每个产品页面都包含详细的照片，捕捉我们褶皱面料的质地和流动性。我们提供全面的测量、面料信息和造型建议，帮助您做出明智的决定。',
      shopOnlineDesc3: '我们的客户服务团队可以回答问题、提供造型建议，并确保您的在线购物体验达到与我们店铺亲自访问相同的高标准。',
      onlineContact: '联系我们',
      emailLabel: '邮箱',
      phoneLabel: '电话',
      whatsappLabel: 'WhatsApp',
      beginJourney: '开始您的Plearance之旅',
      beginJourneyDesc: '无论您参观我们的东京旗舰店还是在线购物，我们都在这里帮助您发现褶皱艺术的变革力量。我们系列中的每件作品都旨在成为您衣橱中珍贵的一部分，为您的日常生活带来结构、流动性和优雅。',
      contactUs: '联系我们'
    },
    contacts: {
      title: '联系我们',
      subtitle: '让我们联系',
      getInTouch: '联系我们',
      generalInquiries: '一般咨询',
      storeAppointments: '店铺预约',
      pressMedia: '新闻媒体',
      businessInquiries: '商业咨询',
      visitUs: '参观我们',
      sendMessage: '发送消息',
      letsTalk: '开始对话',
      name: '姓名',
      email: '邮箱',
      subject: '主题',
      phone: '电话',
      message: '消息',
      sendButton: '发送消息',
      sending: '发送中...',
      successMessage: '感谢您的消息！我们将在24小时内回复。',
      errorMessage: '抱歉，发送消息时出错。请重试。',
      formIdError: 'Formspree表单ID未配置。请在您的.env文件中设置VITE_FORMSPREE_FORM_ID。',
      networkError: '网络错误。请检查您的网络连接并重试。',
      faq: '常见问题',
      commonQuestions: '常见问题',
      careInstructions: '如何护理褶皱服装？',
      careInstructionsDesc: '我们的褶皱服装专为保持形状而设计。我们建议轻柔手洗或干洗。切勿直接在褶皱上熨烫。',
      internationalShipping: '你们提供国际运输吗？',
      internationalShippingDesc: '是的，我们全球运输。运输费用和交付时间因目的地而异。',
      customPleating: '我可以要求定制褶皱吗？',
      customPleatingDesc: '当然可以！我们提供定制褶皱服务。联系我们讨论您的想法。',
      returnPolicy: '你们的退货政策是什么？',
      returnPolicyDesc: '我们在交付后14天内接受未穿着且带标签的商品退货。',
      // New content for actual Contacts page
      letsConnect: '让我们联系',
      createSomethingBeautiful: '一起创造美好的事物',
      weWouldLoveToHear: '我们很乐意听取您的意见',
      responseTime: '回复时间',
      within24Hours: '24小时内',
      highResImages: '高分辨率图片',
      availableUponRequest: '可根据要求提供',
      partnerships: '合作伙伴关系',
      wholesaleCollaboration: '批发合作',
      tokyoFlagshipStore: '东京旗舰店',
      address: '地址',
      addressDetails: '东京都千代田区丸之内1-8-1<br>邮编100-0005，日本',
      hours: '营业时间',
      hoursDetails: '周一至周六：11:00 - 20:00<br>周日：12:00 - 19:00',
      closedOnHolidays: '节假日休息',
      storeFeatures: '店铺特色',
      personalStylingConsultations: '个人造型咨询',
      customPleatingServices: '定制褶皱服务',
      alterationsAdjustments: '修改调整',
      privateShoppingAppointments: '私人购物预约',
      getDirections: '获取路线',
      letsStartConversation: '让我们开始对话',
      nameLabel: '姓名',
      emailLabel: '邮箱',
      subjectLabel: '主题',
      phoneLabel: '电话',
      messageLabel: '消息',
      yourFullName: '您的全名',
      yourEmail: '您的邮箱',
      selectSubject: '选择主题',
      generalInquiry: '一般咨询',
      storeAppointment: '店铺预约',
      customOrder: '定制订单',
      pressMediaContact: '新闻媒体联系',
      businessPartnership: '商业合作',
      other: '其他',
      phonePlaceholder: '您的电话号码（可选）',
      messagePlaceholder: '请告诉我们您的想法...',
      frequentlyAsked: '常见问题',
      howToCare: '如何护理褶皱服装？',
      careDesc: '我们的褶皱服装专为保持形状而设计。我们建议轻柔手洗或干洗。切勿直接在褶皱上熨烫。',
      doYouShip: '你们提供国际运输吗？',
      shippingDesc: '是的，我们全球运输。运输费用和交付时间因目的地而异。',
      canRequestCustom: '我可以要求定制褶皱吗？',
      customDesc: '当然可以！我们提供定制褶皱服务。联系我们讨论您的想法。',
      whatIsReturnPolicy: '你们的退货政策是什么？',
      returnDesc: '我们在交付后14天内接受未穿着且带标签的商品退货。'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      brandStory: 'ブランドストーリー',
      products: '製品',
      store: '店舗',
      contact: 'お問い合わせ'
    },
    language: {
      en: 'English',
      zh: '中文',
      ja: '日本語',
      vi: 'Tiếng Việt',
      ms: 'Bahasa Melayu',
      fr: 'Français',
      ar: 'العربية'
    },
    hero: {
      title: 'Plearance',
      subtitle: 'エレガントなプリーツ、タイムレスな美しさ',
      cta: 'コレクションを探索'
    },
    footer: {
      brandName: 'Plearance',
      description: '伝統的な日本の職人技と現代的な持続可能性で、エレガントなプリーツファッションを作り上げます。',
      quickLinks: 'クイックリンク',
      contact: 'お問い合わせ',
      followUs: 'フォローする',
      rights: 'All rights reserved.'
    },
    home: {
      heroTitle: 'プリーツのアートを発見',
      heroSubtitle: '伝統的な日本の職人技と現代的なエレガンスが出会う場所',
      exploreCollection: 'コレクションを探索',
      viewProducts: '製品を見る',
      craftsmanshipTitle: 'マスタークラフトマンシップ',
      craftsmanshipDesc: '各作品は、世代を超えて受け継がれる伝統的な技術を用いた熟練した職人によって熟慮されて制作されています。',
      sustainabilityTitle: '持続可能なファッション',
      sustainabilityDesc: '私たちは、トレンドを超える時代を超えた作品の創造を信じ、意識的な消費を促進しています。',
      eleganceTitle: 'タイムレスなエレガンス',
      eleganceDesc: '私たちのプリーツデザインは洗練と優雅さを体現し、現代の識別力のある個人に最適です。',
      // New content for actual Home page
      creativeExcellence: 'クリエイティブエクセレンス',
      yuiNakahara: '中原唯衣',
      pleatsQuote: '"プリーツと構造が衣服に命を吹き込む"',
      yuiBio: '1991年大分県生まれ。文化ファッション大学院（服装技術科）卒業。卒業後、ISSEY MIYAKE入社。PLEATS PLEASEのデザイン・パターン業務に携わり、企画、型開発、サンプル試作に至るまで一貫した経験を積む。',
      yuiPhilosophy: '私のプラクティスは、機能性と美しさのバランスを重視し、構造、プロポーション、そして生地の持続可能な使用を強調しています。現代のクラフトマンシップを日常の着用シーンと繋ぐことで、独自で抑制の効いたビジュアル言語を育んでいます。',
      brandStory: 'ブランドストーリー',
      contactUs: 'お問い合わせ',
      manufacturingExcellence: '私たちの製造エクセレンス',
      exceptionalPleatedArtistry: '卓越したプリーツアートの世界へようこそ',
      manufacturingDesc1: '最高品質のプリーツ衣服を創造するために、私は生地の処理とプリーツ技術において比類なき専門知識で知られる最も有名な製造パートナーを慎重に選定しました。',
      manufacturingDesc2: '私たちが選んだ製造業者は、最先端のプリーツ機械を運用し、精密エンジニアリングされた機器を備え、普通の生地を並外れた彫刻作品に変換します。これらの先進的な機械は、すべての折り目が完全に整列し、すべての折り目が整合性を保ち、すべてのプリーツが綿密な職人技の物語を語ることを保証します。',
      manufacturingDesc3: '製造施設には、コンピューター制御のプリーツシステム、精密温度調節を備えた熱設定室、そして各折り目を永久の完璧さにロックする専用プレス機器を含む最先端技術が備わっています。',
      philosophy: 'フィロソフィー',
      structuredArtistry: '構造化された芸術性と effortless な優雅さが出会う場所',
      brandPhilosophy: 'PLEARANCEは、私が新しく設立したパーソナルブランドで、デイリーエッセンシャルからステートメントピースまで、多様なカテゴリーにわたるプリーツウィメンズウェアを専門とし、プリーツを通じて構造、動き、そして快適さを探求しています。'
    },
    brandStory: {
      title: 'ブランドストーリー',
      subtitle: 'プリーツのアート',
      intro: '東京で設立されたPlearanceは、伝統的な日本のプリーツ技術と現代的なファッションデザインの完璧な融合を代表しています。',
      heritageTitle: '私たちの遺産',
      heritageDesc: '何世紀もの日本の繊維伝統を引き出し、私たちは綿密な布地プリーツのアートを尊重しています。',
      philosophyTitle: '私たちの哲学',
      philosophyDesc: '私たちは、美的美しさと機能的卓越性の両方を体現する衣服の創造を信じています。',
      craftsmanshipTitle: '私たちの職人技',
      craftsmanshipDesc: '各プリーツは、数十年の経験を持つマスター職人によって慎重に計算され実行されます。',
      meetArtisans: '私たちの職人に会う',
      // New content for actual Brand Story page
      fusionOfPleatsAndElegance: 'プリーツとエレガンスの融合',
      pleatsArt: 'プリーツ',
      pleatsDesc: '生地を折りたたくアート\n構造と動きを創造する',
      eleganceArt: 'エレガンス',
      eleganceDesc: 'シンプルさの中の洗練された美しさ\nタイムレスな洗練',
      whereStructuredArtistry: '構造化された芸術性と effortless な優雅さが出会う場所',
      artOfTransformation: '変革のアート',
      transformationDesc1: 'プリーツとエレガンスの融合から生まれたPlearanceは、技術的精度と美的洗練の調和の取れた結婚を代表しています。各折り目は職人技の物語を語り、各シルエットは永遠の美しさをささやいています。',
      transformationDesc2: '私たちのデザインフィロソフィーは、変革の力を祝う——技術としてではなく、現代の女性の衣装における構造と流動性の両方への願いを語る表現の言語として。',
      transformationDesc3: 'プロポーションへの綿密な注意と品質への揺るぎない献身を通じて、私たちは季節のトレンドを超える衣服を創造し、代わりに着用者と共に優雅に老化する洗練された永久コレクションを提供しています。',
      fromConceptToCreation: '概念から創造へ',
      conceptDesc1: 'すべてのPlearance作品はアイデアから始まります——生地を古代のプリーツアートを通じて実用的で美しいものに変換する方法についてのビジョン。',
      conceptDesc2: '私たちのデザインプロセスは綿密で思慮深いです。私たちは最初に最上質の生地を選択し、各生地はプリーツを保ちながらその自然なドレープと動きを維持する能力のために選ばれます。プリーツプロセス自体は、完璧にするために多年の専門知識を必要とする、熱、圧力、そして時間の間のダンスです。',
      conceptDesc3: 'その結果、あなたと共に動き、あなたと共に呼吸し、各着用ごとにより美しくなる衣服が生まれます。これはファストファッションではありません——生涯続くことを意図した、遅い、意図的な創造です。',
      heritageAndFuture: '遺産と未来',
      rootedInTradition: '伝統に根ざし、明日のために設計',
      japaneseHeritage: '日本の遺産',
      japaneseHeritageDesc: '日本の繊維伝統の何世紀もから引き出すことで、私たちのプリーツへのアプローチは過去に敬意を表しながら現代の美学を受け入れています。日本の職人技を定義する精度と細部への注意は、各折り目に明らかです。',
      modernInnovation: '現代の革新',
      modernInnovationDesc: '伝統的な技術を現代技術と組み合わせることで、私たちはプリーツ生地で可能なことの境界を押し広げています。革新への献身により、各コレクションは前のコレクションに基づいて構築され、絶えず進化し改善されています。',
      sustainableFuture: '持続可能な未来',
      sustainableFutureDesc: '持続可能性は事後考慮事項ではありません——私たちが行う各決定に織り込まれています。エコフレンドリーな生地の選択から、トレンドを超えるタイムレスなデザインの創造まで、私たちは人と地球の両方を尊重するブランドを構築しています。'
    },
    products: {
      title: '製品',
      subtitle: 'エレガントなプリーツコレクション',
      allProducts: 'すべての製品',
      categories: {
        dresses: 'ドレス',
        skirts: 'スカート',
        tops: 'トップス',
        accessories: 'アクセサリー'
      },
      filters: {
        color: '色',
        size: 'サイズ',
        price: '価格',
        apply: '適用',
        reset: 'リセット'
      },
      // New content for actual Products page
      discoverCollection: 'プリーツアートのコレクションを発見',
      everyFoldTellsStory: 'すべての折り目が物語を語る',
      collectionDesc: '私たちが慎重にキュレートしたコレクションは、プリーツクラフトマンシップの頂点を表しています。各作品は季節を超越するように設計され、プリーツの変革的な力を通じてタイムレスなエレガンスを提供します。',
      everydayEssentials: '日常の必需品',
      everydayDesc: 'デイリーウォードローブにシームレスに統合されるように念入りに設計された作品。これらの多用途の衣服は快適さと洗練を組み合わせ、クラシックなシルエットに質感と動きを加える繊細なプリーツを特徴としています。',
      statementPieces: 'ステートメントピース',
      statementDesc: 'プリーツの劇的な可能性を展示する大胆な建築デザイン。これらの衣服は印象を与えるために作られ、私たちのクラフトの芸術性を祝う革新的なプリーツパターンと彫刻的なフォームを特徴としています。',
      professionalCollection: 'プロフェッショナルコレクション',
      professionalDesc: '現代のプロフェッショナルのために設計された洗練された作品。これらの衣服は、職場に適した洗練された美学を維持しながら、視覚的な興味を加える洗練されたプリーツ技術を特徴としています。',
      eveningElegance: 'イブニングエレガンス',
      eveningDesc: '特別な機会のために設計された豪華な作品。これらの衣服は、イブニングイベントやお祝いのために完璧な劇的なシルエットを作成する複雑なプリーツパターンとプレミアム生地を特徴としています。',
      comfortFit: '快適なフィット',
      breathableFabric: '通気性の生地',
      easyCare: '簡単ケア',
      architecturalDesign: '建築デザイン',
      handFinished: '手仕上げ',
      limitedEdition: '限定版',
      officeReady: 'オフィス対応',
      wrinkleResistant: 'しわになりにくい',
      travelFriendly: '旅行に優しい',
      premiumFabric: 'プレミアム生地',
      intricatePleating: '複雑なプリーツ',
      specialOccasion: '特別な機会',
      artOfPerfectPleats: '完璧なプリーツのアート',
      fabricSelection: '生地選択',
      fabricSelectionDesc: '私たちは、プリーツを保ちながらその自然なドレープと動きを維持する能力のために、それぞれが選ばれた最高品質の生地から始めます。私たちの選択プロセスは厳格で、私たちの厳しい基準を満たす材料のみを確実にします。',
      pleatFormation: 'プリーツ形成',
      pleatFormationDesc: '最先端の機器を伝統的な技術と組み合わせて使用し、各プリーツは精度を持って形成されます。このプロセスは、永続的で美しい折り目を作成するために、完璧なタイミング、温度、そして圧力を必要とします。',
      heatSetting: '熱設定',
      heatSettingDesc: '最終ステップは、各プリーツを所定の位置にロックする慎重に制御された熱設定を含みます。これにより、衣服は洗濯後、着用後もその美しい構造を維持することが保証されます。',
      experiencePlearance: 'Plearanceを体験',
      experienceDesc: '各Plearance作品は、衣服以上のもの——それは構造の美しさと動きの詩を祝う芸術作品です。プリーツが生地だけでなく、衣服の中での感じ方をどのように変換できるかを発見してください。',
      visitStore: 'ストアを訪問'
    },
    store: {
      title: '店舗',
      subtitle: 'フラッグシップを訪問',
      visitUs: '私たちを訪問',
      bookAppointment: '予約を取る',
      location: '東京フラッグシップストア',
      hours: '営業時間',
      features: 'ストア機能',
      // New content for actual Store page
      discoverCuratedCollection: '厳選されたコレクションを発見',
      experienceInPerson: 'Plearanceを直接体験',
      tokyoFlagship: '東京フラッグシップ',
      storeAddress: '千代田区丸の内1-8-1<br>東京都、100-0005、日本',
      storeHours: '月曜日 - 土曜日：11:00 - 20:00<br>日曜日：12:00 - 19:00',
      personalJourney: 'パーソナルジャーニー',
      personalJourneyDesc1: 'Plearanceストアに足を踏み入れることは、買い物以上のものです——それはプリーツアートの世界への没入です。私たちの慎重に設計された空間は、私たちの衣服を定義する同じ細部への注意とミニマリスト美学を反映しています。',
      personalJourneyDesc2: '各ストアは、衣服が芸術作品として展示されるギャラリーとして考案されています。照明は、各プリーツの質感と動きを強調するように綿密に調整され、各作品の職人技を鑑賞できるようにします。',
      personalJourneyDesc3: '私たちの知識豊富なスタッフは、ファッションだけでなく、プリーツの芸術と科学の両方でトレーニングを受けています。彼らは私たちのコレクションを案内し、使用される異なる技術を説明し、あなたの個人的スタイルとライフスタイルを補完する作品を見つけるのを手伝うことができます。',
      bespokeServices: 'ベスポークサービス',
      personalStyling: 'パーソナルスタイリング',
      personalStylingDesc: '私たちの専門スタイリストは、あなたの美的好み、ライフスタイルニーズ、体型を理解して、あなたのワードローブの基盤となる作品のセレクションをキュレートするためにあなたと協力します。',
      customPleating: 'カスタムプリーツ',
      customPleatingDesc: '本当にユニークなものを求める人のために、私たちはカスタムプリーツサービスを提供しています。私たちの職人と協力して、あなたの個人的スタイルとビジョンを反映するカスタムプリーツパターンを作成してください。',
      alterations: 'アレンジメント',
      alterationsDesc: '私たちの社内アレンジメントサービスは、すべての作品があなたに完璧にフィットすることを保証します。プリーツ衣服の美しさは、その正確なフィットとドレープにあることを理解しています。',
      careInstructions: 'ケア説明',
      careInstructionsDesc: 'プリーツ衣服が何年も美しさと構造を保つように適切にケアする方法を学びます。清掃、保管、メンテナンスに関する詳細なガイダンスを提供します。',
      shopAnywhere: 'どこでもショッピング',
      shopOnlineDesc1: '私たちの衣服を直接体験することに勝るものはないと信じていますが、私たちの東京フラッグシップを訪問することが常に可能であるとは理解していません。私たちのオンラインストアは、Plearance体験をあなたのもとに、どこにいてもお届けします。',
      shopOnlineDesc2: '各製品ページには、私たちのプリーツ生地の質感と動きを捉えた詳細な写真が含まれています。私たちは、あなたが情報に基づいた決定を下すのを助けるための包括的な測定、生地情報、スタイリング提案を提供します。',
      shopOnlineDesc3: '私たちのカスタマーサービスチームは、質問に答え、スタイリングアドバイスを提供し、あなたのオンラインショッピング体験が私たちのストアを直接訪問するのと同じ高基準を満たすことを保証するために利用可能です。',
      onlineContact: 'お問い合わせ',
      emailLabel: 'メール',
      phoneLabel: '電話',
      whatsappLabel: 'WhatsApp',
      beginJourney: 'Plearanceジャーニーを始める',
      beginJourneyDesc: '私たちの東京フラッグシップを訪問しても、オンラインで買い物しても、私たちはあなたがプリーツアートの変革力を発見するのを手伝うためにここにいます。私たちのコレクションの各作品は、あなたの日常生活に構造、動き、そしてエレガンスをもたらす、あなたのワードローブの大切な一部になるように設計されています。',
      contactUs: 'お問い合わせ'
    },
    contacts: {
      title: 'お問い合わせ',
      subtitle: '接続しましょう',
      getInTouch: '連絡する',
      generalInquiries: '一般的な問い合わせ',
      storeAppointments: 'ストア予約',
      pressMedia: 'プレスメディア',
      businessInquiries: 'ビジネス問い合わせ',
      visitUs: '私たちを訪問',
      sendMessage: 'メッセージを送る',
      letsTalk: '会話を始めましょう',
      name: '名前',
      email: 'メール',
      subject: '件名',
      phone: '電話',
      message: 'メッセージ',
      sendButton: 'メッセージを送る',
      sending: '送信中...',
      successMessage: 'メッセージをありがとうございます！24時間以内にご返信いたします。',
      errorMessage: '申し訳ありませんが、メッセージの送信中にエラーが発生しました。もう一度お試しください。',
      formIdError: 'FormspreeフォームIDが設定されていません。 .envファイルでVITE_FORMSPREE_FORM_IDを設定してください。',
      networkError: 'ネットワークエラー。インターネット接続を確認して、もう一度お試しください。',
      faq: 'よくある質問',
      commonQuestions: 'よくある質問',
      careInstructions: 'プリーツの衣類のケア方法は？',
      careInstructionsDesc: '私たちのプリーツ衣類は形状を維持するように設計されています。優しい手洗いまたはドライクリーニングをお勧めします。プリーツに直接アイロンをかけないでください。',
      internationalShipping: '国際配送は提供していますか？',
      internationalShippingDesc: 'はい、世界中に配送しています。配送費用と納期は目的地によって異なります。',
      customPleating: 'カスタムプリーツをリクエストできますか？',
      customPleatingDesc: 'もちろんできます！カスタムプリーツサービスを提供しています。あなたのビジョンについて話し合うためにご連絡ください。',
      returnPolicy: '返品ポリシーは何ですか？',
      returnPolicyDesc: 'タグが付いた未着用の商品は、配達後14日以内に返品を受け付けています。',
      // New content for actual Contacts page
      letsConnect: 'つながりましょう',
      createSomethingBeautiful: '一緒に美しいものを作りましょう',
      weWouldLoveToHear: 'あなたからのお便りをお待ちしています',
      responseTime: '応答時間',
      within24Hours: '24時間以内',
      highResImages: '高解像度画像',
      availableUponRequest: '要請に応じて提供',
      partnerships: 'パートナーシップ',
      wholesaleCollaboration: '卸売協力',
      tokyoFlagshipStore: '東京フラッグシップストア',
      address: '住所',
      addressDetails: '千代田区丸の内1-8-1<br>東京都、100-0005、日本',
      hours: '営業時間',
      hoursDetails: '月曜日 - 土曜日：11:00 - 20:00<br>日曜日：12:00 - 19:00',
      closedOnHolidays: '祝日は休み',
      storeFeatures: 'ストア機能',
      personalStylingConsultations: 'パーソナルスタイリング相談',
      customPleatingServices: 'カスタムプリーツサービス',
      alterationsAdjustments: '修正と調整',
      privateShoppingAppointments: 'プライベートショッピング予約',
      getDirections: '道順を取得',
      letsStartConversation: '会話を始めましょう',
      nameLabel: '名前',
      emailLabel: 'メール',
      subjectLabel: '件名',
      phoneLabel: '電話',
      messageLabel: 'メッセージ',
      yourFullName: 'あなたのフルネーム',
      yourEmail: 'あなたのメール',
      selectSubject: '件名を選択',
      generalInquiry: '一般的なお問い合わせ',
      storeAppointment: 'ストア予約',
      customOrder: 'カスタムオーダー',
      pressMediaContact: 'プレスメディア連絡',
      businessPartnership: 'ビジネスパートナーシップ',
      other: 'その他',
      phonePlaceholder: 'あなたの電話番号（オプション）',
      messagePlaceholder: 'あなたの考えを教えてください...',
      frequentlyAsked: 'よくある質問',
      howToCare: 'プリーツの衣類のケア方法は？',
      careDesc: '私たちのプリーツ衣類は形状を維持するように設計されています。優しい手洗いまたはドライクリーニングをお勧めします。プリーツに直接アイロンをかけないでください。',
      doYouShip: '国際配送は提供していますか？',
      shippingDesc: 'はい、世界中に配送しています。配送費用と納期は目的地によって異なります。',
      canRequestCustom: 'カスタムプリーツをリクエストできますか？',
      customDesc: 'もちろんできます！カスタムプリーツサービスを提供しています。あなたのビジョンについて話し合うためにご連絡ください。',
      whatIsReturnPolicy: '返品ポリシーは何ですか？',
      returnDesc: 'タグが付いた未着用の商品は、配達後14日以内に返品を受け付けています。'
    }
  },
  vi: {
    nav: {
      home: 'Trang Chủ',
      brandStory: 'Câu Chuyện Thương Hiệu',
      products: 'Sản Phẩm',
      store: 'Cửa Hàng',
      contact: 'Liên Hệ'
    },
    language: {
      en: 'English',
      zh: '中文',
      ja: '日本語',
      vi: 'Tiếng Việt',
      ms: 'Bahasa Melayu',
      fr: 'Français',
      ar: 'العربية'
    },
    hero: {
      title: 'Plearance',
      subtitle: 'Nếp Gấp Tinh Tế, Vẻ Đẹp Vượt Thời Gian',
      cta: 'Khám Phộ Bộ Sưu Tập'
    },
    footer: {
      brandName: 'Plearance',
      description: 'Tạo ra thời trang nếp gấp tinh tế với nghề thủ công truyền thống Nhật Bản và tính bền vững hiện đại.',
      quickLinks: 'Liên Kết Nhanh',
      contact: 'Liên Hệ',
      followUs: 'Theo Dõi Chúng Tôi',
      rights: 'Đã đăng ký bản quyền.'
    },
    home: {
      heroTitle: 'Khám Phá Nghệ Thuật Nếp Gấp',
      heroSubtitle: 'Nơi nghề thủ công truyền thống Nhật Bản gặp gỡ sự tinh tế đương đại',
      exploreCollection: 'Khám Phá Bộ Sưu Tập',
      viewProducts: 'Xem Sản Phẩm',
      craftsmanshipTitle: 'Nghề Thủ Công Tinh Xảo',
      craftsmanshipDesc: 'Mỗi sản phẩm được chế tác cẩn thận bởi các nghệ nhân lành nghề sử dụng kỹ thuật truyền thống được truyền lại qua nhiều thế hệ.',
      sustainabilityTitle: 'Thời Trang Bền Vững',
      sustainabilityDesc: 'Chúng tôi tin vào việc tạo ra những tác phẩm vượt thời gian, thúc đẩy tiêu dùng có ý thức.',
      eleganceTitle: 'Vẻ Đẹp Vượt Thời Gian',
      eleganceDesc: 'Thiết kế nếp gấp của chúng tôi thể hiện sự tinh tế và duyên dáng, hoàn hảo cho người có gu thẩm mỹ hiện đại.',
      // New content for actual Home page
      creativeExcellence: 'Xuất Sắc Sáng Tạo',
      yuiNakahara: 'Yui Nakahara',
      pleatsQuote: '"Nếp gấp và cấu trúc làm cho trang phục trở nên sống động"',
      yuiBio: 'Sinh năm 1991 tại Ōita, Nhật Bản. Tốt nghiệp Đại học Thời trang Bunka (Công nghệ May mặc). Sau khi tốt nghiệp, gia nhập ISSEY MIYAKE và làm việc trong thiết kế và tạo mẫu PLEATS PLEASE, tích lũy kinh nghiệm toàn diện từ lập kế hoạch, phát triển mẫu đến tạo mẫu thử.',
      yuiPhilosophy: 'Thực tiễn của tôi tập trung vào sự cân bằng giữa chức năng và vẻ đẹp, nhấn mạnh cấu trúc, tỷ lệ và việc sử dụng vải bền vững. Bằng cách kết nối thủ công hiện đại với các tình huống mặc hàng ngày, cô ấy nuôi dưỡng một ngôn ngữ hình ảnh riêng biệt, kiềm chế.',
      brandStory: 'Câu Chuyện Thương Hiệu',
      contactUs: 'Liên Hệ Chúng Tôi',
      manufacturingExcellence: 'Xuất Sắc Sản Xuất Của Chúng Tôi',
      exceptionalPleatedArtistry: 'Chào mừng đến thế giới nghệ thuật nếp gấp đặc biệt',
      manufacturingDesc1: 'Để tạo ra những bộ trang phục nếp gấp tinh tế nhất, tôi đã cẩn thận lựa chọn đối tác sản xuất uy tín nhất được biết đến với chuyên môn chưa từng có trong xử lý vải và kỹ thuật nếp gấp.',
      manufacturingDesc2: 'Nhà sản xuất được chọn của chúng tôi vận hành máy móc nếp gấp tiên tiến nhất, được trang bị thiết bị được thiết kế chính xác biến đổi vải thông thường thành những tác phẩm điêu khắc đặc biệt. Những máy móc tiên tiến này đảm bảo mọi nếp gấp được căn chỉnh hoàn hảo, mọi nếp nhăn giữ được tính toàn vẹn, và mọi nếp gấp kể một câu chuyện về thủ công tỉ mỉ.',
      manufacturingDesc3: 'Cơ sở sản xuất có công nghệ tiên tiến bao gồm hệ thống nếp gấp điều khiển bằng máy tính, buồng định hình nhiệt với điều chỉnh nhiệt độ chính xác, và thiết bị ép chuyên dụng khóa mỗi nếp gấp vào sự hoàn hảo vĩnh viễn.',
      philosophy: 'Triết Lý',
      structuredArtistry: 'Nơi nghệ thuật có cấu trúc gặp gỡ vẻ duyên dáng không công sức',
      brandPhilosophy: 'PLEARANCE là thương hiệu cá nhân mới được tôi thành lập, chuyên về trang phục nữ nếp gấp trên các danh mục đa dạng — từ những thứ cần thiết hàng ngày đến những món đồ nổi bật — khám phá cấu trúc, chuyển động và sự thoải mái thông qua nếp gấp.'
    },
    brandStory: {
      title: 'Câu Chuyện Thương Hiệu',
      subtitle: 'Nghệ Thuật Nếp Gấp',
      intro: 'Được thành lập tại Tokyo, Plearance đại diện cho sự kết hợp hoàn hảo giữa kỹ thuật nếp gấp truyền thống Nhật Bản và thiết kế thời trang đương đại.',
      heritageTitle: 'Di Sản Của Chúng Tôi',
      heritageDesc: 'Dựa trên truyền thống dệt may Nhật Bản hàng thế kỷ, chúng tôi tôn vinh nghệ thuật nếp gấp vải cẩn thận.',
      philosophyTitle: 'Triết Lý Của Chúng Tôi',
      philosophyDesc: 'Chúng tôi tin vào việc tạo ra trang phục thể hiện cả vẻ đẹp thẩm mỹ và chức năng xuất sắc.',
      craftsmanshipTitle: 'Nghề Thủ Công Của Chúng Tôi',
      craftsmanshipDesc: 'Mỗi nếp gấp được tính toán và thực hiện cẩn thận bởi các nghệ nhân thạo với hàng thập kỷ kinh nghiệm.',
      meetArtisans: 'Gặp Gỡ Thợ Thủ Công Của Chúng Tôi',
      // New content for actual Brand Story page
      fusionOfPleatsAndElegance: 'Sự hợp nhất của Nếp Gấp và Sự Tinh Tế',
      pleatsArt: 'Nếp Gấp',
      pleatsDesc: 'Nghệ thuật gấp vải\nTạo ra cấu trúc và chuyển động',
      eleganceArt: 'Sự Tinh Tế',
      eleganceDesc: 'Vẻ đẹp tinh tế trong sự đơn giản\nSự tinh tế vượt thời gian',
      whereStructuredArtistry: 'Nơi nghệ thuật có cấu trúc gặp gỡ vẻ duyên dáng không công sức',
      artOfTransformation: 'Nghệ Thuật Chuyển Đổi',
      transformationDesc1: 'Ra đời từ sự hợp nhất của Nếp Gấp và Sự Tinh Tế, Plearance đại diện cho cuộc hôn nhân hài hòa giữa độ chính xác kỹ thuật và sự tinh chế thẩm mỹ. Mỗi nếp gấp kể một câu chuyện về thủ công, trong khi mỗi đường nét thì thầm về vẻ đẹp vĩnh cửu.',
      transformationDesc2: 'Triết lý thiết kế của chúng tôi tôn vinh sức mạnh chuyển đổi của nếp gấp — không chỉ đơn thuần là một kỹ thuật, mà là một ngôn ngữ biểu cảm nói với mong muốn của người phụ nữ hiện đại về cả cấu trúc và sự linh hoạt trong tủ quần áo của cô ấy.',
      transformationDesc3: 'Thông qua sự chú ý tỉ mỉ đến tỷ lệ và cam kết không lay chuyển với chất lượng, chúng tôi tạo ra những bộ trang phục vượt xa xu hướng theo mùa, thay vào đó cung cấp một bộ sưu tập các món đồ tinh tế vĩnh viễn đẹp một cách duyên dáng cùng với người mặc.',
      fromConceptToCreation: 'Từ Khái Niệm Đến Sáng Tạo',
      conceptDesc1: 'Mỗi tác phẩm Plearance bắt đầu với một ý tưởng — một tầm nhìn về cách vải có thể được chuyển đổi thông qua nghệ thuật nếp gấp cổ đại thành thứ gì đó vừa thiết thực vừa đẹp đẽ.',
      conceptDesc2: 'Quy trình thiết kế của chúng tôi là tỉ mỉ và có suy nghĩ. Chúng tôi bắt đầu bằng việc chọn những loại vải tinh tế nhất, mỗi loại được chọn vì khả năng giữ nếp gấp trong khi vẫn duy trì sự rũ và chuyển động. Bản thân quá trình nếp gấp là một điệu nhảy giữa nhiệt, áp lực và thời gian, đòi hỏi nhiều năm chuyên môn để hoàn thiện.',
      conceptDesc3: 'Kết quả là quần áo di chuyển cùng bạn, thở cùng bạn, trở nên đẹp hơn với mỗi lần mặc. Đây không phải là thời trang nhanh — đây là sự sáng tạo chậm rãi, có chủ ý được thiết kế để tồn tại cả đời.',
      heritageAndFuture: 'Di Sản & Tương Lai',
      rootedInTradition: 'Có Rễ Từ Truyền Thống, Được Thiết Kế Cho Ngày Mai',
      japaneseHeritage: 'Di Sản Nhật Bản',
      japaneseHeritageDesc: 'Lấy cảm hứng từ hàng thế kỷ truyền thống dệt may Nhật Bản, cách tiếp cận của chúng tôi với nếp gấp tôn vinh quá khứ trong khi đón nhận thẩm mỹ đương đại. Độ chính xác và sự chú ý đến chi tiết xác định thủ công Nhật Bản hiện rõ trong từng nếp gấp.',
      modernInnovation: 'Đổi Mới Hiện Đại',
      modernInnovationDesc: 'Bằng cách kết hợp kỹ thuật truyền thống với công nghệ hiện đại, chúng tôi đẩy ranh giới của những gì có thể với vải nếp gấp. Cam kết của chúng tôi với đổi mới đảm bảo mỗi bộ sưu tập được xây dựng dựa trên bộ sưu tập trước, không ngừng phát triển và cải thiện.',
      sustainableFuture: 'Tương Lai Bền Vững',
      sustainableFutureDesc: 'Tính bền vững không phải là điều nghĩ đến sau — nó được dệt vào mỗi quyết định chúng tôi đưa ra. Từ việc chọn vải thân thiện với môi trường đến việc tạo ra những thiết kế vượt thời gian, chúng tôi đang xây dựng một thương hiệu tôn trọng cả con người và hành tinh.'
    },
    products: {
      title: 'Sản Phẩm',
      subtitle: 'Bộ Sưu Tập Nếp Gấp Tinh Tế',
      allProducts: 'Tất Cả Sản Phẩm',
      categories: {
        dresses: 'Váy',
        skirts: 'Chân Váy',
        tops: 'Áo',
        accessories: 'Phụ Kiện'
      },
      filters: {
        color: 'Màu Sắc',
        size: 'Kích Thước',
        price: 'Giá',
        apply: 'Áp Dụng',
        reset: 'Đặt Lại'
      },
      // New content for actual Products page
      discoverCollection: 'Khám phá bộ sưu tập nghệ thuật nếp gấp của chúng tôi',
      everyFoldTellsStory: 'Mỗi Nếp Gấp Kể Một Câu Chuyện',
      collectionDesc: 'Bộ sưu tập được chúng tôi tuyển chọn cẩn thận đại diện cho đỉnh cao của nghề thủ công nếp gấp. Mỗi tác phẩm được thiết kế để vượt qua các mùa, mang lại vẻ đẹp vượt thời gian thông qua sức mạnh chuyển đổi của nếp gấp.',
      everydayEssentials: 'Thiết Yếu Hàng Ngày',
      everydayDesc: 'Những tác phẩm được thiết kế một cách chu đáo hòa nhập liền mạch vào tủ quần áo hàng ngày của bạn. Những trang phục đa năng này kết hợp sự thoải mái với sự tinh tế, có đường nếp gấp tinh tế thêm kết cấu và chuyển động cho những đường nét cổ điển.',
      statementPieces: 'Tác Phẩm Nổi Bật',
      statementDesc: 'Thiết kế kiến trúc táo bạo thể hiện tiềm năng kịch tính của nếp gấp. Những trang phục này được chế tác để tạo ấn tượng, có những mẫu nếp gấp sáng tạo và hình thức điêu khắc tôn vinh tính nghệ thuật của nghề thủ công chúng tôi.',
      professionalCollection: 'Bộ Sưu Tập Chuyên Nghiệp',
      professionalDesc: 'Những tác phẩm tinh tế được thiết kế cho chuyên gia hiện đại. Những trang phục này có kỹ thuật nếp gấp tinh xảo thêm sự thú vị thị giác trong khi duy trì thẩm mỹ đánh bóng, phù hợp với nơi làm việc.',
      eveningElegance: 'Sự Tinh Tế Buổi Tối',
      eveningDesc: 'Những tác phẩm sang trọng được thiết kế cho những dịp đặc biệt. Những trang phục này có những mẫu nếp gấp phức tạp và vải cao cấp tạo ra những đường nét kịch tính hoàn hảo cho sự kiện buổi tối và lễ kỷ niệm.',
      comfortFit: 'Vừa Vặn Thoải Mái',
      breathableFabric: 'Vải Thoáng Khí',
      easyCare: 'Dễ Chăm Sóc',
      architecturalDesign: 'Thiết Kế Kiến Trúc',
      handFinished: 'Hoàn Thiện Bằng Tay',
      limitedEdition: 'Phiên Bản Giới Hạn',
      officeReady: 'Sẵn Sàng Văn Phòng',
      wrinkleResistant: 'Chống Nhăn',
      travelFriendly: 'Thân Thiện Du Lịch',
      premiumFabric: 'Vải Cao Cấp',
      intricatePleating: 'Nếp Gấp Phức Tạp',
      specialOccasion: 'Dịp Đặc Biệt',
      artOfPerfectPleats: 'Nghệ Thuật Của Những Nếp Gấp Hoàn Hảo',
      fabricSelection: 'Lựa Chọn Vải',
      fabricSelectionDesc: 'Chúng tôi bắt đầu với những loại vải tinh tế nhất, mỗi loại được chọn vì khả năng giữ nếp gấp trong khi vẫn duy trì sự rũ và chuyển động tự nhiên của nó. Quy trình lựa chọn của chúng tôi nghiêm ngặt, đảm bảo chỉ những vật liệu đáp ứng tiêu chuẩn khắt khe của chúng tôi.',
      pleatFormation: 'Hình Thành Nếp Gấp',
      pleatFormationDesc: 'Sử dụng thiết bị tiên tiến kết hợp với kỹ thuật truyền thống, mỗi nếp gấp được hình thành với độ chính xác. Quá trình này đòi hỏi thời gian hoàn hảo, nhiệt độ và áp lực để tạo ra những nếp gấp đẹp vĩnh viễn.',
      heatSetting: 'Định Hình Nhiệt',
      heatSettingDesc: 'Bước cuối cùng liên quan đến việc định hình nhiệt được kiểm soát cẩn thận khóa mỗi nếp gấp vào vị trí. Điều này đảm bảo trang phục của bạn sẽ duy trì cấu trúc đẹp của nó sau mỗi lần giặt, sau mỗi lần mặc.',
      experiencePlearance: 'Trải Nghiệm Plearance',
      experienceDesc: 'Mỗi tác phẩm Plearance là nhiều hơn cả quần áo — đó là một tác phẩm nghệ thuật tôn vinh vẻ đẹp của cấu trúc và thơ ca của chuyển động. Khám phá cách nếp gấp có thể chuyển đổi không chỉ vải vóc, mà còn cảm giác của bạn trong quần áo.',
      visitStore: 'Thăm Cửa Hàng Của Chúng Tôi'
    },
    store: {
      title: 'Cửa Hàng',
      subtitle: 'Thăm Cửa Hàng Flagship Của Chúng Tôi',
      visitUs: 'Thăm Chúng Tôi',
      bookAppointment: 'Đặt Lịch Hẹn',
      location: 'Cửa Hàng Flagship Tokyo',
      hours: 'Giờ Mở Cửa',
      features: 'Tính Năng Cửa Hàng',
      // New content for actual Store page
      discoverCuratedCollection: 'Khám phá bộ sưu tập được tuyển chọn của chúng tôi',
      experienceInPerson: 'Trải Nghiệm Plearance Trực Tiếp',
      tokyoFlagship: 'Flagship Tokyo',
      storeAddress: '1 Chome-8-1 Marunouchi<br>Quận Chiyoda, Tokyo<br>100-0005, Nhật Bản',
      storeHours: 'Thứ Hai - Thứ Bảy: 11:00 - 20:00<br>Chủ Nhật: 12:00 - 19:00',
      personalJourney: 'Một Hành Trình Cá Nhân',
      personalJourneyDesc1: 'Bước vào cửa hàng Plearance là nhiều hơn một chuyến mua sắm — đó là sự đắm chìm vào thế giới của nghệ thuật nếp gấp. Không gian được thiết kế cẩn thận của chúng tôi phản ánh cùng một sự chú ý đến chi tiết và thẩm mỹ tối giản xác định quần áo của chúng tôi.',
      personalJourneyDesc2: 'Mỗi cửa hàng được thiết kế như một phòng trưng bày nơi quần áo được trưng bày như những tác phẩm nghệ thuật. Ánh sáng được hiệu chỉnh tỉ mỉ để làm nổi bật kết cấu và chuyển động của từng nếp gấp, cho phép bạn đánh giá cao sự khéo léo trong từng tác phẩm.',
      personalJourneyDesc3: 'Nhân viên am hiểu của chúng tôi được đào tạo không chỉ về thời trang, mà còn về nghệ thuật và khoa học của việc tạo nếp gấp. Họ có thể hướng dẫn bạn qua các bộ sưu tập của chúng tôi, giải thích các kỹ thuật khác nhau được sử dụng và giúp bạn tìm những tác phẩm bổ sung cho phong cách và lối sống cá nhân của bạn.',
      bespokeServices: 'Dịch Vụ Thiết Kế Riêng',
      personalStyling: 'Phong Cách Cá Nhân',
      personalStylingDesc: 'Các nhà tạo mẫu chuyên gia của chúng tôi làm việc với bạn để hiểu sở thích thẩm mỹ, nhu cầu lối sống và kiểu cơ thể của bạn để tuyển chọn một lựa chọn các tác phẩm sẽ trở thành nền tảng của tủ quần áo bạn.',
      customPleating: 'Nếp Gấp Tùy Chỉnh',
      customPleatingDesc: 'Đối với những người tìm kiếm điều gì đó thực sự độc đáo, chúng tôi cung cấp dịch vụ tạo nếp gấp tùy chỉnh. Làm việc với các nghệ nhân của chúng tôi để tạo ra các mẫu nếp gấp tùy chỉnh phản ánh phong cách và tầm nhìn cá nhân của bạn.',
      alterations: 'Chỉnh Sửa',
      alterationsDesc: 'Dịch vụ chỉnh sửa nội bộ của chúng tôi đảm bảo mọi tác phẩm đều vừa vặn hoàn hảo với bạn. Chúng tôi hiểu rằng vẻ đẹp của quần áo nếp gấp nằm ở sự vừa vặn và độ rũ chính xác của nó.',
      careInstructions: 'Hướng Dẫn Chăm Sóc',
      careInstructionsDesc: 'Tìm hiểu cách chăm sóc đúng cách cho quần áo nếp gấp của bạn để đảm bảo chúng duy trì vẻ đẹp và cấu trúc trong nhiều năm tới. Chúng tôi cung cấp hướng dẫn chi tiết về làm sạch, lưu trữ và bảo trì.',
      shopAnywhere: 'Mua Sắm Ở Mọi Nơi',
      shopOnlineDesc1: 'Trong khi chúng tôi tin rằng không có gì sánh được với việc trải nghiệm quần áo của chúng tôi trực tiếp, chúng tôi hiểu rằng việc đến thăm flagship Tokyo của chúng tôi không phải lúc nào cũng khả thi. Cửa hàng trực tuyến của chúng tôi mang trải nghiệm Plearance đến với bạn, dù bạn ở đâu.',
      shopOnlineDesc2: 'Mỗi trang sản phẩm đều có những bức ảnh chi tiết chụp lại kết cấu và chuyển động của vải nếp gấp của chúng tôi. Chúng tôi cung cấp phép đo toàn diện, thông tin vải và đề xuất tạo mẫu để giúp bạn đưa ra quyết định sáng suốt.',
      shopOnlineDesc3: 'Đội ngũ dịch vụ khách hàng của chúng tôi có sẵn để trả lời câu hỏi, cung cấp lời khuyên tạo mẫu và đảm bảo trải nghiệm mua sắm trực tuyến của bạn đáp ứng cùng tiêu chuẩn cao như khi bạn đến thăm cửa hàng của chúng tôi.',
      onlineContact: 'Liên Hệ',
      emailLabel: 'Email',
      phoneLabel: 'Điện Thoại',
      whatsappLabel: 'WhatsApp',
      beginJourney: 'Bắt Đầu Hành Trình Plearance Của Bạn',
      beginJourneyDesc: 'Dù bạn đến thăm flagship Tokyo của chúng tôi hay mua sắm trực tuyến, chúng tôi ở đây để giúp bạn khám phá sức mạnh chuyển đổi của nghệ thuật nếp gấp. Mỗi tác phẩm trong bộ sưu tập của chúng tôi được thiết kế để trở thành một phần quý giá của tủ quần áo bạn, mang lại cấu trúc, chuyển động và sự tinh tế cho cuộc sống hàng ngày của bạn.',
      contactUs: 'Liên Hệ Chúng Tôi'
    },
    contacts: {
      title: 'Liên Hệ',
      subtitle: 'Hãy Kết Nối',
      getInTouch: 'Liên Hệ Với Chúng Tôi',
      generalInquiries: 'Thắc Mắc Chung',
      storeAppointments: 'Cửa Hàng & Cuộc Hẹn',
      pressMedia: 'Báo Chí & Truyền Thông',
      businessInquiries: 'Thắc Mắc Kinh Doanh',
      visitUs: 'Thăm Chúng Tôi',
      sendMessage: 'Gửi Tin Nhắn',
      letsTalk: 'Bắt Đầu Cuộc Trò Chuyện',
      name: 'Tên',
      email: 'Email',
      subject: 'Chủ Đề',
      phone: 'Điện Thoại',
      message: 'Tin Nhắn',
      sendButton: 'Gửi Tin Nhắn',
      sending: 'Đang Gửi...',
      successMessage: 'Cảm ơn tin nhắn của bạn! Chúng tôi sẽ phản hồi trong vòng 24 giờ.',
      errorMessage: 'Xin lỗi, đã xảy ra lỗi khi gửi tin nhắn của bạn. Vui lòng thử lại.',
      formIdError: 'Formspree form ID chưa được cấu hình. Vui lòng đặt VITE_FORMSPREE_FORM_ID trong tệp .env của bạn.',
      networkError: 'Lỗi mạng. Vui lòng kiểm tra kết nối internet của bạn và thử lại.',
      faq: 'Câu Hỏi Thường Gặp',
      commonQuestions: 'Câu Hỏi Thường Gặp',
      careInstructions: 'Làm thế nào để chăm sóc quần áo nếp gấp?',
      careInstructionsDesc: 'Quần áo nếp gấp của chúng tôi được thiết kế để duy trì hình dạng. Chúng tôi khuyến nghị giặt tay nhẹ nhàng hoặc giặt khô. Không bao giờ là trực tiếp lên nếp gấp.',
      internationalShipping: 'Bạn có cung cấp vận chuyển quốc tế không?',
      internationalShippingDesc: 'Có, chúng tôi vận chuyển toàn cầu. Chi phí vận chuyển và thời gian giao hàng khác nhau tùy theo điểm đến.',
      customPleating: 'Tôi có thể yêu cầu nếp gấp tùy chỉnh không?',
      customPleatingDesc: 'Chắc chắn rồi! Chúng tôi cung cấp dịch vụ nếp gấp tùy chỉnh. Liên hệ với chúng tôi để thảo luận về tầm nhìn của bạn.',
      returnPolicy: 'Chính sách hoàn trả của bạn là gì?',
      returnPolicyDesc: 'Chúng tôi chấp nhận trả hàng trong vòng 14 ngày kể từ ngày giao hàng đối với các mặt hàng chưa mặc còn thẻ.',
      // New content for actual Contacts page
      letsConnect: 'Hãy Kết Nối',
      createSomethingBeautiful: 'Tạo Ra Điều Gì Đó Đẹp Đẽ Cùng Nhau',
      weWouldLoveToHear: 'Chúng Tôi Rất Muốn Nghe Từ Bạn',
      responseTime: 'Thời Gian Phản Hồi',
      within24Hours: 'Trong Vòng 24 Giờ',
      highResImages: 'Hình Ảnh Độ Phân Giải Cao',
      availableUponRequest: 'Có Sẵn Theo Yêu Cầu',
      partnerships: 'Đối Tác',
      wholesaleCollaboration: 'Hợp Tác Bán Sỉ',
      tokyoFlagshipStore: 'Cửa Hàng Flagship Tokyo',
      address: 'Địa Chỉ',
      addressDetails: '1 Chome-8-1 Marunouchi<br>Quận Chiyoda, Tokyo<br>100-0005, Nhật Bản',
      hours: 'Giờ Mở Cửa',
      hoursDetails: 'Thứ Hai - Thứ Bảy: 11:00 - 20:00<br>Chủ Nhật: 12:00 - 19:00',
      closedOnHolidays: 'Đóng Cửa Vào Ngày Lễ',
      storeFeatures: 'Tính Năng Cửa Hàng',
      personalStylingConsultations: 'Tư Vấn Phong Cách Cá Nhân',
      customPleatingServices: 'Dịch Vụ Nếp Gấp Tùy Chỉnh',
      alterationsAdjustments: 'Chỉnh Sửa Điều Chỉnh',
      privateShoppingAppointments: 'Cuộc Hẹn Mua Sắm Riêng Tư',
      getDirections: 'Chỉ Đường',
      letsStartConversation: 'Hãy Bắt Đầu Cuộc Trò Chuyện',
      nameLabel: 'Tên',
      emailLabel: 'Email',
      subjectLabel: 'Chủ Đề',
      phoneLabel: 'Điện Thoại',
      messageLabel: 'Tin Nhắn',
      yourFullName: 'Tên Đầy Đủ Của Bạn',
      yourEmail: 'Email Của Bạn',
      selectSubject: 'Chọn Chủ Đề',
      generalInquiry: 'Thắc Mắc Chung',
      storeAppointment: 'Cuộc Hẹn Cửa Hàng',
      customOrder: 'Đơn Hàng Tùy Chỉnh',
      pressMediaContact: 'Liên Hệ Báo Chí Truyền Thông',
      businessPartnership: 'Đối Tác Kinh Doanh',
      other: 'Khác',
      phonePlaceholder: 'Số Điện Thoại Của Bạn (Tùy Chọn)',
      messagePlaceholder: 'Hãy cho chúng tôi biết suy nghĩ của bạn...',
      frequentlyAsked: 'Câu Hỏi Thường Gặp',
      howToCare: 'Làm Thế Nào Để Chăm Sóc Quần Áo Nếp Gấp?',
      careDesc: 'Quần áo nếp gấp của chúng tôi được thiết kế để duy trì hình dạng. Chúng tôi khuyến nghị giặt tay nhẹ nhàng hoặc giặt khô. Không bao giờ là trực tiếp lên nếp gấp.',
      doYouShip: 'Bạn Có Vận Chuyển Quốc Tế Không?',
      shippingDesc: 'Có, chúng tôi vận chuyển toàn cầu. Chi phí vận chuyển và thời gian giao hàng khác nhau tùy theo điểm đến.',
      canRequestCustom: 'Tôi Có Thể Yêu Cầu Nếp Gấp Tùy Chỉnh Không?',
      customDesc: 'Chắc chắn rồi! Chúng tôi cung cấp dịch vụ nếp gấp tùy chỉnh. Liên hệ với chúng tôi để thảo luận về tầm nhìn của bạn.',
      whatIsReturnPolicy: 'Chính Sách Hoàn Trả Của Bạn Là Gì?',
      returnDesc: 'Chúng tôi chấp nhận trả hàng trong vòng 14 ngày kể từ ngày giao hàng đối với các mặt hàng chưa mặc còn thẻ.'
    }
  },
  ms: {
    nav: {
      home: 'Laman Utama',
      brandStory: 'Kisah Jenama',
      products: 'Produk',
      store: 'Kedai',
      contact: 'Hubungi'
    },
    language: {
      en: 'English',
      zh: '中文',
      ja: '日本語',
      vi: 'Tiếng Việt',
      ms: 'Bahasa Melayu',
      fr: 'Français',
      ar: 'العربية'
    },
    hero: {
      title: 'Plearance',
      subtitle: 'Lipatan Elegan, Kecantikan Abadi',
      cta: 'Terokai Koleksi'
    },
    footer: {
      brandName: 'Plearance',
      description: 'Mencipta fesyen berlipat elegan dengan kraftangan tradisional Jepun dan kelestarian moden.',
      quickLinks: 'Pautan Pantas',
      contact: 'Hubungi',
      followUs: 'Ikuti Kami',
      rights: 'Hak cipta terpelihara.'
    },
    home: {
      heroTitle: 'Temui Seni Lipatan',
      heroSubtitle: 'Di mana kraftangan tradisional Jepun bertemu keanggunan kontemporari',
      exploreCollection: 'Terokai Koleksi',
      viewProducts: 'Lihat Produk',
      craftsmanshipTitle: 'Kraftangan Mahir',
      craftsmanshipDesc: 'Setiap kepingan direka dengan teliti oleh pengarah mahir menggunakan teknik tradisional yang diturunkan melalui generasi.',
      sustainabilityTitle: 'Fesyen Lestari',
      sustainabilityDesc: 'Kami percaya dalam mencipta karya yang melampaui trend, menggalakkan penggunaan secara sedar.',
      eleganceTitle: 'Keanggunan Abadi',
      eleganceDesc: 'Reka bentuk berlipat kami mewakili kecanggihan dan keanggunan, sempurna untuk individu yang bijak moden.',
      // New content for actual Home page
      creativeExcellence: 'Kecemerlangan Kreatif',
      yuiNakahara: 'Yui Nakahara',
      pleatsQuote: '"Lipatan dan struktur menghidupkan pakaian"',
      yuiBio: 'Dilahirkan pada tahun 1991 di Ōita, Jepun. Lulusan dari Kolej Fesyen Bunka (Teknologi Pakaian). Selepas graduation, menyertai ISSEY MIYAKE dan bekerja dalam reka bentuk dan pembuatan corak PLEATS PLEASE, memperoleh pengalaman menyeluruh dari perancangan, pembangunan corak hingga pembuatan sampel.',
      yuiPhilosophy: 'Amalan saya menumpukan pada keseimbangan antara fungsi dan keindahan, menekankan struktur, nisbah dan penggunaan fabrik secara lestari. Dengan menghubungkan kraftangan moden dengan senario pemakaian harian, dia membina bahasa visual yang berbeza dan tertahan.',
      brandStory: 'Kisah Jenama',
      contactUs: 'Hubungi Kami',
      manufacturingExcellence: 'Kecemerlangan Pembuatan Kami',
      exceptionalPleatedArtistry: 'Selamat datang ke dunia seni lipatan luar biasa',
      manufacturingDesc1: 'Dalam usaha untuk mencipta pakaian berlipat terbaik, saya telah memilih rakan pembuatan paling terkenal yang terkenal dengan kepakaran yang tiada tandingan dalam pemprosesan fabrik dan teknik melipat.',
      manufacturingDesc2: 'Pengeluar pilihan kami mengendalikan jentera melipat termaju, dilengkapi dengan peralatan direka kejuruteraan yang tepat yang mengubah fabrik biasa kepada karya seni pahat luar biasa. Jentera termaju ini memastikan setiap lipatan disejajarkan dengan sempurna, setiap kedutan mengekalkan integritinya, dan setiap lipatan memberitahu kisah kraftangan teliti.',
      manufacturingDesc3: 'Kemudahan pembuatan menempatkan teknologi termasuk termasuk sistem melipat terkawal komputer, kebuk penetapan haba dengan pengawalan suhu tepat, dan peralatan pengacuan khusus yang mengunci setiap lipatan ke dalam kesempurnaan kekal.',
      philosophy: 'Falsafah',
      structuredArtistry: 'Di mana seni berstruktur bertemu keanggunan tanpa usaha',
      brandPhilosophy: 'PLEARANCE ialah jenama peribadi saya yang baru ditubuhkan, mengkhususkan diri dalam pakaian wanita berlipat merentas kategori pelbagai — dari keperluan harian kepada keping pernyata — meneroka struktur, pergerakan dan keselesaan melalui lipatan.'
    },
    brandStory: {
      title: 'Kisah Jenama',
      subtitle: 'Seni Lipatan',
      intro: 'Ditubuhkan di Tokyo, Plearance mewakili gabungan sempurna antara teknik lipatan tradisional Jepun dan reka bentuk fesyen kontemporari.',
      heritageTitle: 'Warisan Kami',
      heritageDesc: 'Mengambil dari tradisi tekstil Jepun yang berusia berabad-abad, kami menghormati seni kain berlipat yang teliti.',
      philosophyTitle: 'Falsafah Kami',
      philosophyDesc: 'Kami percaya dalam mencipta pakaian yang mewakili kedua-dua keindahan estetik dan kecemerlangan berfungsi.',
      craftsmanshipTitle: 'Kraftangan Kami',
      craftsmanshipDesc: 'Setiap lipatan dikira dan dilaksanakan dengan teliti oleh pengarah mahir dengan dekad pengalaman.',
      meetArtisans: 'Temui Pengarah Kami',
      // New content for actual Brand Story page
      fusionOfPleatsAndElegance: 'Perpaduan Lipatan dan Keanggunan',
      pleatsArt: 'Lipatan',
      pleatsDesc: 'Seni melipat fabrik\nMencipta struktur dan pergerakan',
      eleganceArt: 'Keanggunan',
      eleganceDesc: 'Kecantikan yang diperhalus dalam kesederhanaan\nKecantikan abadi',
      whereStructuredArtistry: 'Di mana seni berstruktur bertemu keanggunan tanpa usaha',
      artOfTransformation: 'Seni Transformasi',
      transformationDesc1: 'Lahir daripada perpaduan Lipatan dan Keanggunan, Plearance mewakili perkahwinan yang harmoni antara ketepatan teknikal dan penambahbaikan estetik. Setiap lipatan menceritakan kisah kraftangan, manakala setiap garisan bisik tentang kecantikan abadi.',
      transformationDesc2: 'Falsafah reka bentuk kami menghormati kuasa transformasi lipatan — bukan hanya sebagai teknik, tetapi sebagai bahasa ekspresi yang bercakap tentang keinginan wanita moden untuk kedua-dua struktur dan kelancaran dalam pakaiannya.',
      transformationDesc3: 'Melalui perhatian teliti terhadap nisbah dan komitmen yang tidak berbelah bahagi terhadap kualiti, kami mencipta pakaian yang melampaui trend bermusim, sebaliknya menawarkan koleksi abadi yang diperhalus yang menua dengan anggun bersama pemakai.',
      fromConceptToCreation: 'Dari Konsep ke Ciptaan',
      conceptDesc1: 'Setiap kepingan Plearance bermula dengan idea — visi tentang bagaimana fabrik boleh diubah suai melalui seni lipatan purba menjadi sesuatu yang praktikal dan indah.',
      conceptDesc2: 'Proses reka bentuk kami adalah teliti dan berfikir panjang. Kami bermula dengan memilih fabrik yang paling halus, setiap satu dipilih kerana keupayaannya untuk mengekalkan lipatan sambil mengekalkan aliran dan pergerakan semula jadinya. Proses melipat sendiri adalah tarian antara haba, tekanan dan masa, memerlukan tahun pakar untuk menyempurnakannya.',
      conceptDesc3: 'Hasilnya adalah pakaian yang bergerak dengan anda, bernafas dengan anda, menjadi lebih cantik dengan setiap pemakaian. Ini bukan fesyen pantas — ini ialah penciptaan perlahan, berfikir yang direka untuk bertahan seumur hidup.',
      heritageAndFuture: 'Warisan dan Masa Depan',
      rootedInTradition: 'Berakar dalam Tradisi, Direka untuk Esok',
      japaneseHeritage: 'Warisan Jepun',
      japaneseHeritageDesc: 'Dengan mengambil inspirasi daripada berabad-abad tradisi tekstil Jepun, pendekatan kami terhadap lipatan menghormati masa lalu sambil menerima estetika kontemporari. Ketepatan dan perhatian terhadap perincian yang menentukan kraftangan Jepun jelas dalam setiap lipatan.',
      modernInnovation: 'Inovasi Moden',
      modernInnovationDesc: 'Dengan menggabungkan teknik tradisional dengan teknologi moden, kami menolak sempadan apa yang mungkin dengan fabrik berlipat. Komitmen kami terhadap inovasi memastikan setiap koleksi dibina berdasarkan koleksi sebelumnya, sentiasa berkembang dan memperbaiki.',
      sustainableFuture: 'Masa Depan Lestari',
      sustainableFutureDesc: 'Kelestarian bukan pertimbangan kemudian — ia terkait dalam setiap keputusan yang kami buat. Dari pemilihan fabrik mesra alam kepada penciptaan reka bentuk yang kekal melampaui trend, kami membina jenama yang menghormati kedua-dua manusia dan planet.'
    },
    products: {
      title: 'Produk',
      subtitle: 'Koleksi Lipatan Elegan',
      allProducts: 'Semua Produk',
      categories: {
        dresses: 'Gaun',
        skirts: 'Skirt',
        tops: 'Atasan',
        accessories: 'Aksesori'
      },
      filters: {
        color: 'Warna',
        size: 'Saiz',
        price: 'Harga',
        apply: 'Gunakan',
        reset: 'Tetapkan Semula'
      },
      // New content for actual Products page
      discoverCollection: 'Temui koleksi seni lipatan kami',
      everyFoldTellsStory: 'Setiap Lipatan Menceritakan Kisah',
      collectionDesc: 'Koleksi kami yang teliti diperhalus mewakili kemuncak kraftangan lipatan. Setiap keping direka untuk melampaui musim, menawarkan keanggunan abadi melalui kuasa transformasi lipatan.',
      everydayEssentials: 'Keperluan Harian',
      everydayDesc: 'Keping yang direka dengan teliti untuk bergabung secara lancar ke dalam lemari pakaian harian anda. Pakaian serba guna ini menggabungkan keselesaan dengan kecanggihan, menampilkan lipatan halus yang menambah tekstur dan pergerakan kepada sila klasik.',
      statementPieces: 'Keping Pernyataan',
      statementDesc: 'Reka bentuk berasaskan seni bina yang berani yang menunjukkan potensi dramatik lipatan. Pakaian ini direka untuk memberi kesan, menampilkan corak lipatan inovatif dan bentuk pahat yang menghargai kesenian kraftangan kami.',
      professionalCollection: 'Koleksi Profesional',
      professionalDesc: 'Keping yang diperhalus direka untuk profesional moden. Pakaian ini menampilkan teknik lipatan yang diperhalus yang menambah minat visual sambil mengekalkan estetik yang digilap dan sesuai untuk pejabat.',
      eveningElegance: 'Keanggunan Petang',
      eveningDesc: 'Keping mewah direka untuk majlis istimewa. Pakaian ini menampilkan corak lipatan yang rumit dan fabrik premium yang mewujudkan sila dramatik yang sempurna untuk acara petang dan sambutan.',
      comfortFit: 'Kesesuaian Selesa',
      breathableFabric: 'Fabrik Bernafas',
      easyCare: 'Penjagaan Mudah',
      architecturalDesign: 'Reka Bentuk Seni Bina',
      handFinished: 'Siap Tangan',
      limitedEdition: 'Edisi Terhad',
      officeReady: 'Sedia Pejabat',
      wrinkleResistant: 'Tahan Kedut',
      travelFriendly: 'Mesra Pelancongan',
      premiumFabric: 'Fabrik Premium',
      intricatePleating: 'Lipatan Rumit',
      specialOccasion: 'Majlis Khas',
      artOfPerfectPleats: 'Seni Lipatan Sempurna',
      fabricSelection: 'Pemilihan Fabrik',
      fabricSelectionDesc: 'Kami bermula dengan fabrik yang paling halus, setiap satu dipilih kerana keupayaannya untuk mengekalkan lipatan sambil mengekalkan aliran dan pergerakan semula jadinya. Proses pemilihan kami ketat, memastikan hanya bahan yang memenuhi standard ketat kami.',
      pleatFormation: 'Pembentukan Lipatan',
      pleatFormationDesc: 'Menggunakan peralatan termaju digabungkan dengan teknik tradisional, setiap lipatan dibentuk dengan ketepatan. Proses ini memerlukan masa, suhu dan tekanan yang sempurna untuk mewujudkan lipatan yang cantik dan kekal.',
      heatSetting: 'Penetapan Haba',
      heatSettingDesc: 'Langkah terakhir melibatkan penetapan haba yang dikawal dengan teliti yang mengunci setiap lipatan ke tempatnya. Ini memastikan pakaian anda akan mengekalkan struktur cantiknya selepas setiap cucian, selepas setiap pemakaian.',
      experiencePlearance: 'Alami Plearance',
      experienceDesc: 'Setiap kepingan Plearance adalah lebih daripada pakaian — ia adalah karya seni yang menghargai keindahan struktur dan puisi pergerakan. Temui bagaimana lipatan boleh mengubah bukan sahaja fabrik, tetapi bagaimana anda rasa dalam pakaian anda.',
      visitStore: 'Lawati Kedai Kami'
    },
    store: {
      title: 'Kedai',
      subtitle: 'Lawati Flagship Kami',
      visitUs: 'Lawati Kami',
      bookAppointment: 'Tempah Janji',
      location: 'Kedai Flagship Tokyo',
      hours: 'Waktu Operasi',
      features: 'Ciri-ciri Kedai',
      // New content for actual Store page
      discoverCuratedCollection: 'Temui koleksi terpilih kami',
      experienceInPerson: 'Alami Plearance Secara Peribadi',
      tokyoFlagship: 'Flagship Tokyo',
      storeAddress: '1 Chome-8-1 Marunouchi<br>Chiyoda City, Tokyo<br>100-0005, Jepun',
      storeHours: 'Isnin - Sabtu: 11:00 - 20:00<br>Ahad: 12:00 - 19:00',
      personalJourney: 'Perjalanan Peribadi',
      personalJourneyDesc1: 'Melangkah ke kedai Plearance adalah lebih daripada perjalanan membeli-belah — ia adalah penerapan ke dalam dunia seni lipatan. Ruang kami yang direka dengan teliti mencerminkan perhatian terhadap perincian dan estetika minimalis yang sama yang menentukan pakaian kami.',
      personalJourneyDesc2: 'Setiap kedai direka sebagai galeri di mana pakaian dipaparkan sebagai karya seni. Pencahayaan ditala dengan teliti untuk menonjolkan tekstur dan pergerakan setiap lipatan, membolehkan anda menghargai kraftangan yang terdapat dalam setiap kepingan.',
      personalJourneyDesc3: 'Kakitangan kami yang berpengetahuan dilatih bukan sahaja dalam fesyen, tetapi juga dalam seni dan sains melipat. Mereka boleh memandu anda melalui koleksi kami, menjelaskan teknik berbeza yang digunakan dan membantu anda menemui kepingan yang melengkapkan gaya dan gaya hidup peribadi anda.',
      bespokeServices: 'Perkhidmatan Bespoke',
      personalStyling: 'Gaya Peribadi',
      personalStylingDesc: 'Pereka gaya pakar kami bekerjasama dengan anda untuk memahami pilihan estetik anda, keperluan gaya hidup dan jenis badan untuk mengumpulkan pilihan kepingan yang akan menjadi asas lemari pakaian anda.',
      customPleating: 'Lipatan Tersuai',
      customPleatingDesc: 'Bagi mereka yang mencari sesuatu yang benar-benar unik, kami menawarkan perkhidmatan lipatan tersuai. Bekerjasama dengan pengarah kami untuk mewujudkan corak lipatan tersuai yang mencerminkan gaya dan visi peribadi anda.',
      alterations: 'Pengubahsuaian',
      alterationsDesc: 'Perkhidmatan pengubahsuaian dalaman kami memastikan setiap kepingan muat sempurna untuk anda. Kami memahami bahawa keindahan pakaian berlipat terletak pada pemasangan dan aliran tepatnya.',
      careInstructions: 'Arahan Penjagaan',
      careInstructionsDesc: 'Pelajari cara menjaga pakaian berlipat anda dengan betul untuk memastikan ia mengekalkan keindahan dan strukturnya selama bertahun-tahun akan datang. Kami memberikan panduan terperinci tentang pembersihan, penyimpanan dan penyelenggaraan.',
      shopAnywhere: 'Membeli-belah dari Mana-mana',
      shopOnlineDesc1: 'Walaupun kami percaya tiada apa yang dapat menandingi pengalaman pakaian kami secara langsung, kami memahami bahawa melawat flagship Tokyo kami tidak selalu mungkin. Kedai dalam talian kami membawa pengalaman Plearance kepada anda, di mana sahaja anda berada.',
      shopOnlineDesc2: 'Setiap halaman produk merangkumi gambar terperinci yang menangkap tekstur dan pergerakan fabrik berlipat kami. Kami menyediakan pengukuran komprehensif, maklumat fabrik dan cadangan bergaya untuk membantu anda membuat keputusan yang berinformasi.',
      shopOnlineDesc3: 'Pasukan perkhidmatan pelanggan kami sedia menjawab soalan, memberikan nasihat bergaya dan memastikan pengalaman membeli-belah dalam talian anda memenuhi standard tinggi yang sama seperti melawat kedai kami secara peribadi.',
      onlineContact: 'Hubungi Kami',
      emailLabel: 'Emel',
      phoneLabel: 'Telefon',
      whatsappLabel: 'WhatsApp',
      beginJourney: 'Mulakan Perjalanan Plearance Anda',
      beginJourneyDesc: 'Sama ada anda melawat flagship Tokyo kami atau membeli-belah dalam talian, kami di sini untuk membantu anda menemui kuasa transformasi seni lipatan. Setiap kepingan dalam koleksi kami direka untuk menjadi bahagian berharga lemari pakaian anda, membawa struktur, pergerakan dan keanggunan ke kehidupan harian anda.',
      contactUs: 'Hubungi Kami'
    },
    contacts: {
      title: 'Hubungi',
      subtitle: 'Mari Berkawan',
      getInTouch: 'Hubungi Kami',
      generalInquiries: 'Pertanyaan Umum',
      storeAppointments: 'Kedai & Janji Temu',
      pressMedia: 'Akhbara & Media',
      businessInquiries: 'Pertanyaan Perniagaan',
      visitUs: 'Lawati Kami',
      sendMessage: 'Hantar Mesej',
      letsTalk: 'Mari Mulakan Perbualan',
      name: 'Nama',
      email: 'Emel',
      subject: 'Subjek',
      phone: 'Telefon',
      message: 'Mesej',
      sendButton: 'Hantar Mesej',
      sending: 'Menghantar...',
      successMessage: 'Terima kasih atas mesej anda! Kami akan menghubungi anda dalam masa 24 jam.',
      errorMessage: 'Maaf, terdapat ralat menghantar mesej anda. Sila cuba lagi.',
      formIdError: 'ID borang Formspree tidak dikonfigurasi. Sila tetapkan VITE_FORMSPREE_FORM_ID dalam fail .env anda.',
      networkError: 'Ralat rangkaian. Sila periksa sambungan internet anda dan cuba lagi.',
      faq: 'Soalan Lazim',
      commonQuestions: 'Soalan Lazim',
      careInstructions: 'Bagaimana saya menjaga pakaian berlipat?',
      careInstructionsDesc: 'Pakaian berlipat kami direka untuk mengekalkan bentuknya. Kami mengesyorkan pencucian tangan lembut atau pencucian kering. Jangan sekali-kali menggosok terus pada lipatan.',
      internationalShipping: 'Adakah anda menawarkan penghantaran antarabangsa?',
      internationalShippingDesc: 'Ya, kami menghantar ke seluruh dunia. Kos penghantaran dan masa penghantaran berbeza mengikut destinasi.',
      customPleating: 'Bolehkah saya meminta lipatan tersuai?',
      customPleatingDesc: 'Sudah tentu! Kami menyediakan perkhidmatan lipatan tersuai. Hubungi kami untuk membincangkan visi anda.',
      returnPolicy: 'Apakah dasar pemulangan anda?',
      returnPolicyDesc: 'Kami menerima pemulangan dalam masa 14 hari selepas penghantaran untuk barang yang tidak dipakai dengan tag terpasang.',
      // New content for actual Contacts page
      letsConnect: 'Mari Berkawan',
      createSomethingBeautiful: 'Cipta Sesuatu yang Indah Bersama',
      weWouldLoveToHear: 'Kami Ingin Mendengar Daripada Anda',
      responseTime: 'Masa Respons',
      within24Hours: 'Dalam Masa 24 Jam',
      highResImages: 'Imej Resolusi Tinggi',
      availableUponRequest: 'Tersedia Atas Permintaan',
      partnerships: 'Perkongsian',
      wholesaleCollaboration: 'Kolaborasi Borong',
      tokyoFlagshipStore: 'Kedai Flagship Tokyo',
      address: 'Alamat',
      addressDetails: '1 Chome-8-1 Marunouchi<br>Chiyoda City, Tokyo<br>100-0005, Jepun',
      hours: 'Waktu Operasi',
      hoursDetails: 'Isnin - Sabtu: 11:00 - 20:00<br>Ahad: 12:00 - 19:00',
      closedOnHolidays: 'Tutup Pada Hari Kelepasan',
      storeFeatures: 'Ciri-ciri Kedai',
      personalStylingConsultations: 'Konsultasi Gaya Peribadi',
      customPleatingServices: 'Perkhidmatan Lipatan Tersuai',
      alterationsAdjustments: 'Pengubahsuaian & Pelarasan',
      privateShoppingAppointments: 'Janji Temu Membeli-belah Peribadi',
      getDirections: 'Dapatkan Arah',
      letsStartConversation: 'Mari Mulakan Perbualan',
      nameLabel: 'Nama',
      emailLabel: 'Emel',
      subjectLabel: 'Subjek',
      phoneLabel: 'Telefon',
      messageLabel: 'Mesej',
      yourFullName: 'Nama Penuh Anda',
      yourEmail: 'Emel Anda',
      selectSubject: 'Pilih Subjek',
      generalInquiry: 'Pertanyaan Umum',
      storeAppointment: 'Janji Temu Kedai',
      customOrder: 'Pesanan Tersuai',
      pressMediaContact: 'Hubungan Akhbara & Media',
      businessPartnership: 'Perkongsian Perniagaan',
      other: 'Lain-lain',
      phonePlaceholder: 'Nombor telefon anda (pilihan)',
      messagePlaceholder: 'Beritahu kami apa yang anda fikirkan...',
      frequentlyAsked: 'Soalan Lazim',
      howToCare: 'Bagaimana menjaga pakaian berlipat?',
      careDesc: 'Pakaian berlipat kami direka untuk mengekalkan bentuknya. Kami mengesyorkan pencucian tangan lembut atau pencucian kering. Jangan sekali-kali menggosok terus pada lipatan.',
      doYouShip: 'Adakah anda menghantar ke antarabangsa?',
      shippingDesc: 'Ya, kami menghantar ke seluruh dunia. Kos penghantaran dan masa penghantaran berbeza mengikut destinasi.',
      canRequestCustom: 'Bolehkah saya meminta lipatan tersuai?',
      customDesc: 'Sudah tentu! Kami menyediakan perkhidmatan lipatan tersuai. Hubungi kami untuk membincangkan visi anda.',
      whatIsReturnPolicy: 'Apakah dasar pemulangan anda?',
      returnDesc: 'Kami menerima pemulangan dalam masa 14 hari selepas penghantaran untuk barang yang tidak dipakai dengan tag terpasang.'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      brandStory: 'Histoire de la Marque',
      products: 'Produits',
      store: 'Boutique',
      contact: 'Contact'
    },
    language: {
      en: 'English',
      zh: '中文',
      ja: '日本語',
      vi: 'Tiếng Việt',
      ms: 'Bahasa Melayu',
      fr: 'Français',
      ar: 'العربية'
    },
    hero: {
      title: 'Plearance',
      subtitle: 'Plis Élégants, Beauté Intemporelle',
      cta: 'Explorer la Collection'
    },
    footer: {
      brandName: 'Plearance',
      description: 'Créer des plis élégants avec l\'artisanat japonais traditionnel et la durabilité moderne.',
      quickLinks: 'Liens Rapides',
      contact: 'Contact',
      followUs: 'Suivez-nous',
      rights: 'Tous droits réservés.'
    },
    home: {
      heroTitle: 'Découvrir l\'Art du Plissage',
      heroSubtitle: 'Là où l\'artisanat japonais traditionnel rencontre l\'élégance contemporaine',
      exploreCollection: 'Explorer la Collection',
      viewProducts: 'Voir les Produits',
      craftsmanshipTitle: 'Artisanat Maître',
      craftsmanshipDesc: 'Chaque pièce est méticuleusement conçue par des artisans qualifiés utilisant des techniques traditionnelles transmises à travers les générations.',
      sustainabilityTitle: 'Mode Durable',
      sustainabilityDesc: 'Nous croyons en créant des pièces intemporelles qui transcendent les tendances, promouvant la consommation consciente.',
      eleganceTitle: 'Élégance Intemporelle',
      eleganceDesc: 'Nos designs plissés incarnent la sophistication et la grâce, parfaits pour l\'individu moderne averti.',
      // New content for actual Home page
      creativeExcellence: 'Excellence Créative',
      yuiNakahara: 'Yui Nakahara',
      pleatsQuote: 'Les plis ne sont pas seulement des lignes - ce sont des poèmes écrits en tissu',
      yuiBio: 'Fondatrice et directrice de la création, Yui Nakahara, a commencé son voyage dans le monde du plissage à l\'âge de 16 ans, en apprenant auprès de maîtres artisans traditionnels japonais. Diplômée de l\'Université des Arts de Tokyo, elle a consacré sa carrière à la préservation des techniques traditionnelles de plissage tout en les adaptant aux besoins de la femme moderne.',
      yuiPhilosophy: 'Pour Yui, chaque pli représente une intention - une délibération consciente qui transforme le tissu plat en quelque chose de tridimensionnel et expressif. Son approche du design est profondément enracinée dans la philosophie japonaise du « ma » - l\'espace entre, le silence entre les notes qui donne du sens au son.',
      brandStory: 'Histoire de la Marque',
      contactUs: 'Nous Contacter',
      manufacturingExcellence: 'Excellence de Fabrication',
      exceptionalPleatedArtistry: 'Art Exceptionnel du Plissage',
      manufacturingDesc1: 'Chaque pièce Plearance est créée dans notre atelier de Tokyo, où la tradition rencontre l\'innovation. Nos artisans, dont plusieurs ont plus de 30 ans d\'expérience, travaillent avec une précision qui ne peut être répliquée par des machines.',
      manufacturingDesc2: 'Le processus commence par la sélection du tissu - uniquement les meilleurs matériaux qui peuvent supporter le stress du plissage tout en conservant leur beauté et leur intégrité. Chaque fibre est testée pour sa capacité à maintenir un pli, sa texture, et sa capacité à bouger gracieusement avec le corps.',
      manufacturingDesc3: 'Le plissage lui-même est une danse entre la chaleur, la pression et le timing. Nos maîtres artisans utilisent à la fois des techniques traditionnelles transmises à travers les générations et des innovations modernes pour créer des plis qui sont à la fois structurels et sensuels.',
      philosophy: 'Philosophie',
      structuredArtistry: 'Art Structuré',
      brandPhilosophy: 'Notre philosophie est simple : créer des vêtements qui honorent à la fois la structure et le mouvement. Chaque pli est calculé, chaque ligne est intentionnelle, chaque silhouette est conçue pour flatter et bouger avec le corps féminin.'
    },
    brandStory: {
      title: 'Histoire de la Marque',
      subtitle: 'L\'Art du Plissage',
      intro: 'Fondée à Tokyo, Plearance représente la fusion parfaite entre les techniques de plissage japonaises traditionnelles et le design de mode contemporain.',
      heritageTitle: 'Notre Héritage',
      heritageDesc: 'Tirant parti des traditions textiles japonaises séculaires, nous honorons l\'art méticuleux du plissage de tissu.',
      philosophyTitle: 'Notre Philosophie',
      philosophyDesc: 'Nous croyons en créant des vêtements qui incarnent à la fois la beauté esthétique et l\'excellence fonctionnelle.',
      craftsmanshipTitle: 'Notre Artisanat',
      craftsmanshipDesc: 'Chaque pli est soigneusement calculé et exécuté par des artisans maîtres avec des décennies d\'expérience.',
      meetArtisans: 'Rencontrer Nos Artisans',
      // New content for actual Brand Story page
      fusionOfPleatsAndElegance: 'La Fusion des Plis et de l\'Élégance',
      pleatsArt: 'Plis',
      pleatsDesc: 'L\'art de plier le tissu\nCréer de la structure et du mouvement',
      eleganceArt: 'Élégance',
      eleganceDesc: 'La beauté raffinée dans la simplicité\nLa sophistication intemporelle',
      whereStructuredArtistry: 'Là où l\'art structuré rencontre la grâce sans effort',
      artOfTransformation: 'L\'Art de la Transformation',
      transformationDesc1: 'Née de la fusion des Plis et de l\'Élégance, Plearance représente le mariage harmonieux entre la précision technique et le raffinement esthétique. Chaque pli raconte une histoire d\'artisanat, tandis que chaque silhouette murmure de beauté éternelle.',
      transformationDesc2: 'Notre philosophie de design célèbre le pouvoir transformateur du plissage — non pas simplement comme une technique, mais comme un langage d\'expression qui parle du désir de la femme moderne pour à la fois la structure et la fluidité dans ses vêtements.',
      transformationDesc3: 'Grâce à une attention méticuleuse aux proportions et un engagement inébranlable envers la qualité, nous créons des vêtements qui transcendent les tendances saisonnières, offrant plutôt une collection d\'articles raffinés et permanents qui vieillissent avec grâce avec le porteur.',
      fromConceptToCreation: 'Du Concept à la Création',
      conceptDesc1: 'Chaque pièce Plearance commence par une idée — une vision de comment le tissu peut être transformé à travers l\'art ancien du plissage en quelque chose à la fois pratique et magnifique.',
      conceptDesc2: 'Notre processus de design est méticuleux et réfléchi. Nous commençons par sélectionner les tissus les plus fins, chacun choisi pour sa capacité à maintenir un pli tout en conservant son drape et son mouvement naturels. Le processus de plissage lui-même est une danse entre la chaleur, la pression et le temps, nécessitant des années d\'expertise pour perfectionner.',
      conceptDesc3: 'Le résultat est un vêtement qui bouge avec vous, respire avec vous, devient plus beau avec chaque port. Ce n\'est pas la mode rapide — c\'est une création lente et intentionnelle conçue pour durer toute une vie.',
      heritageAndFuture: 'Héritage et Avenir',
      rootedInTradition: 'Enraciné dans la Tradition, Conçu pour Demain',
      japaneseHeritage: 'Héritage Japonais',
      japaneseHeritageDesc: 'En nous inspirant des siècles de tradition textile japonaise, notre approche du plissage honore le passé tout en embrassant l\'esthétique contemporaine. La précision et l\'attention aux détails qui définissent l\'artisanat japonais sont évidentes dans chaque pli.',
      modernInnovation: 'Innovation Moderne',
      modernInnovationDesc: 'En combinant des techniques traditionnelles avec une technologie moderne, nous repoussons les limites de ce qui est possible avec le tissu plissé. Notre engagement envers l\'innovation garantit que chaque collection se construit sur la précédente, évoluant et s\'améliorant constamment.',
      sustainableFuture: 'Avenir Durable',
      sustainableFutureDesc: 'La durabilité n\'est pas une réflexion après coup — elle est tissée dans chaque décision que nous prenons. Du choix de tissus écologiques à la création de designs intemporels qui transcendent les tendances, nous construisons une marque qui respecte à la fois les humains et la planète.'
    },
    products: {
      title: 'Produits',
      subtitle: 'Collection de Plis Élégants',
      allProducts: 'Tous les Produits',
      categories: {
        dresses: 'Robes',
        skirts: 'Jupes',
        tops: 'Hauts',
        accessories: 'Accessoires'
      },
      filters: {
        color: 'Couleur',
        size: 'Taille',
        price: 'Prix',
        apply: 'Appliquer',
        reset: 'Réinitialiser'
      },
      // New content for actual Products page
      discoverCollection: 'Découvrez notre collection d\'art du plissage',
      everyFoldTellsStory: 'Chaque Pli Raconte une Histoire',
      collectionDesc: 'Notre collection soigneusement organisée représente l\'apogée de l\'artisanat du plissage. Chaque pièce est conçue pour transcender les saisons, offrant une élégance intemporelle grâce au pouvoir transformateur du plissage.',
      everydayEssentials: 'Essentiels Quotidiens',
      everydayDesc: 'Des pièces méticuleusement conçues pour s\'intégrer harmonieusement dans votre garde-robe quotidienne. Ces vêtements polyvalents combinent confort et sophistication, avec des plis subtils qui ajoutent de la texture et du mouvement aux silhouettes classiques.',
      statementPieces: 'Pièces Remarquables',
      statementDesc: 'Des conceptions architecturales audacieuses qui mettent en valeur le potentiel dramatique du plissage. Ces vêtements sont conçus pour impressionner, présentant des motifs de plis innovants et des formes sculpturales qui célèbrent l\'aspect artistique de notre artisanat.',
      professionalCollection: 'Collection Professionnelle',
      professionalDesc: 'Des pièces raffinées conçues pour les professionnels modernes. Ces vêtements présentent des techniques de plissage sophistiquées qui ajoutent un intérêt visuel tout en maintenant une esthétique polie et adaptée au bureau.',
      eveningElegance: 'Élégance du Soir',
      eveningDesc: 'Des pièces luxueuses conçues pour des occasions spéciales. Ces vêtements présentent des motifs de plis complexes et des tissus premium créant des silhouettes dramatiques parfaites pour les événements du soir et les célébrations.',
      comfortFit: 'Ajustement Confortable',
      breathableFabric: 'Tissu Respirant',
      easyCare: 'Entretien Facile',
      architecturalDesign: 'Design Architectural',
      handFinished: 'Finition à la Main',
      limitedEdition: 'Édition Limitée',
      officeReady: 'Prêt pour le Bureau',
      wrinkleResistant: 'Résistant aux Plis',
      travelFriendly: 'Voyage-Friendly',
      premiumFabric: 'Tissu Premium',
      intricatePleating: 'Plissage Complexe',
      specialOccasion: 'Occasion Spéciale',
      artOfPerfectPleats: 'L\'Art des Plis Parfaits',
      fabricSelection: 'Sélection du Tissu',
      fabricSelectionDesc: 'Nous commençons par les tissus les plus fins, chacun choisi pour sa capacité à maintenir un pli tout en conservant son drape et son mouvement naturels. Notre processus de sélection est rigoureux, garantissant uniquement des matériaux répondant à nos normes strictes.',
      pleatFormation: 'Formation des Plis',
      pleatFormationDesc: 'Utilisant un équipement de pointe combiné à des techniques traditionnelles, chaque pli est formé avec précision. Le processus nécessite un timing, une température et une pression parfaits pour créer des plis permanents et magnifiques.',
      heatSetting: 'Fixation Thermique',
      heatSettingDesc: 'L\'étape finale implique une fixation thermique soigneusement contrôlée qui verrouille chaque pli en place. Cela garantit que votre vêtement maintiendra sa belle structure lavage après lavage, port après port.',
      experiencePlearance: 'Expérience Plearance',
      experienceDesc: 'Chaque pièce Plearance est plus qu\'un vêtement — c\'est une œuvre d\'art qui célèbre la beauté de la structure et la poésie du mouvement. Découvrez comment les plis peuvent transformer non seulement le tissu, mais aussi la façon dont vous vous sentez dans vos vêtements.',
      visitStore: 'Visitez Notre Boutique'
    },
    store: {
      title: 'Boutique',
      subtitle: 'Visitez Notre Flagship',
      visitUs: 'Visitez-nous',
      bookAppointment: 'Prendre Rendez-vous',
      location: 'Boutique Flagship Tokyo',
      hours: 'Heures d\'Ouverture',
      features: 'Caractéristiques de la Boutique',
      // New content for actual Store page
      discoverCuratedCollection: 'Découvrez notre collection organisée',
      experienceInPerson: 'Expériencez Plearance en Personne',
      tokyoFlagship: 'Flagship Tokyo',
      storeAddress: '1 Chome-8-1 Marunouchi<br>Chiyoda City, Tokyo<br>100-0005, Japon',
      storeHours: 'Lundi - Samedi: 11:00 - 20:00<br>Dimanche: 12:00 - 19:00',
      personalJourney: 'Un Voyage Personnel',
      personalJourneyDesc1: 'Entrer dans une boutique Plearance est plus qu\'un voyage d\'achat — c\'est une immersion dans le monde de l\'art du plissage. Nos espaces soigneusement conçus reflètent la même attention aux détails et esthétique minimaliste qui définissent nos vêtements.',
      personalJourneyDesc2: 'Chaque boutique est conçue comme une galerie où les vêtements sont présentés comme des œuvres d\'art. L\'éclairage est méticuleusement calibré pour mettre en valeur la texture et le mouvement de chaque pli, vous permettant d\'apprécier l\'artisanat présent dans chaque pièce.',
      personalJourneyDesc3: 'Notre personnel compétent est formé non seulement à la mode, mais aussi à l\'art et à la science du plissage. Ils peuvent vous guider à travers nos collections, expliquer les différentes techniques utilisées et vous aider à trouver des pièces qui complètent votre style et mode de vie personnels.',
      bespokeServices: 'Services Sur Mesure',
      personalStyling: 'Styling Personnel',
      personalStylingDesc: 'Nos stylistes experts travaillent avec vous pour comprendre vos préférences esthétiques, vos besoins de mode de vie et votre type de corps afin de créer une sélection de pièces qui deviendront la base de votre garde-robe.',
      customPleating: 'Plissage Personnalisé',
      customPleatingDesc: 'Pour ceux qui recherchent quelque chose de vraiment unique, nous proposons des services de plissage personnalisé. Travaillez avec nos artisans pour créer des motifs de plis personnalisés qui reflètent votre style et votre vision personnels.',
      alterations: 'Retouches',
      alterationsDesc: 'Notre service de retouche en interne garantit que chaque pièce vous va parfaitement. Nous comprenons que la beauté des vêtements plissés réside dans leur ajustement et leur drapé précis.',
      careInstructions: 'Instructions d\'Entretien',
      careInstructionsDesc: 'Apprenez à entretenir correctement vos vêtements plissés pour garantir qu\'ils conservent leur beauté et leur structure pendant des années à venir. Nous fournissons des conseils détaillés sur le nettoyage, le stockage et l\'entretien.',
      shopAnywhere: 'Magasiner de N\'importe Où',
      shopOnlineDesc1: 'Bien que nous croyions que rien ne vaut l\'expérience de nos vêtements en personne, nous comprenons que visiter notre flagship de Tokyo n\'est pas toujours possible. Notre boutique en ligne vous apporte l\'expérience Plearance, où que vous soyez.',
      shopOnlineDesc2: 'Chaque page produit comprend des photos détaillées qui capturent la texture et le mouvement de nos tissus plissés. Nous fournissons des mesures complètes, des informations sur les tissus et des suggestions de style pour vous aider à prendre des décisions éclairées.',
      shopOnlineDesc3: 'Notre équipe de service client est disponible pour répondre aux questions, fournir des conseils de style et s\'assurer que votre expérience d\'achat en ligne répond aux mêmes normes élevées que lors de la visite de notre boutique en personne.',
      onlineContact: 'Contactez-nous',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      whatsappLabel: 'WhatsApp',
      beginJourney: 'Commencez Votre Voyage Plearance',
      beginJourneyDesc: 'Que vous visitiez notre flagship de Tokyo ou que vous fassiez vos achats en ligne, nous sommes là pour vous aider à découvrir le pouvoir transformateur de l\'art du plissage. Chaque pièce de notre collection est conçue pour devenir une partie précieuse de votre garde-robe, apportant structure, mouvement et élégance à votre vie quotidienne.',
      contactUs: 'Contactez-nous'
    },
    contacts: {
      title: 'Contact',
      subtitle: 'Connectons-nous',
      getInTouch: 'Entrer en Contact',
      generalInquiries: 'Demandes Générales',
      storeAppointments: 'Boutique & Rendez-vous',
      pressMedia: 'Presse & Média',
      businessInquiries: 'Demandes Commerciales',
      visitUs: 'Visitez-nous',
      sendMessage: 'Envoyer un Message',
      letsTalk: 'Commençons une Conversation',
      name: 'Nom',
      email: 'Email',
      subject: 'Sujet',
      phone: 'Téléphone',
      message: 'Message',
      sendButton: 'Envoyer le Message',
      sending: 'Envoi...',
      successMessage: 'Merci pour votre message ! Nous vous répondrons dans les 24 heures.',
      errorMessage: 'Désolé, une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.',
      formIdError: 'ID de formulaire Formspree non configuré. Veuillez définir VITE_FORMSPREE_FORM_ID dans votre fichier .env.',
      networkError: 'Erreur réseau. Veuillez vérifier votre connexion internet et réessayer.',
      faq: 'FAQ',
      commonQuestions: 'Questions Communes',
      careInstructions: 'Comment dois-je entretenir les vêtements plissés ?',
      careInstructionsDesc: 'Nos vêtements plissés sont conçus pour maintenir leur forme. Nous recommandons un lavage à la main doux ou le nettoyage à sec. Ne jamais repasser directement sur les plis.',
      internationalShipping: 'Proposez-vous l\'expédition internationale ?',
      internationalShippingDesc: 'Oui, nous expédions dans le monde entier. Les coûts et délais d\'expédition varient selon la destination.',
      customPleating: 'Puis-je demander un plissage personnalisé ?',
      customPleatingDesc: 'Absolument ! Nous proposons des services de plissage personnalisé. Contactez-nous pour discuter de votre vision.',
      returnPolicy: 'Quelle est votre politique de retour ?',
      returnPolicyDesc: 'Nous acceptons les retours dans les 14 jours suivant la livraison pour les articles non portés avec étiquettes attachées.',
      // New content for actual Contacts page
      letsConnect: 'Connectons-nous',
      createSomethingBeautiful: 'Créons Quelque Chose de Beau Ensemble',
      weWouldLoveToHear: 'Nous Aimerions Vous Entendre',
      responseTime: 'Temps de Réponse',
      within24Hours: 'Dans les 24 Heures',
      highResImages: 'Images Haute Résolution',
      availableUponRequest: 'Disponible Sur Demande',
      partnerships: 'Partenariats',
      wholesaleCollaboration: 'Collaboration en Gros',
      tokyoFlagshipStore: 'Boutique Flagship Tokyo',
      address: 'Adresse',
      addressDetails: '1 Chome-8-1 Marunouchi<br>Chiyoda City, Tokyo<br>100-0005, Japon',
      hours: 'Heures d\'Ouverture',
      hoursDetails: 'Lundi - Samedi: 11:00 - 20:00<br>Dimanche: 12:00 - 19:00',
      closedOnHolidays: 'Fermé les Jours Fériés',
      storeFeatures: 'Caractéristiques de la Boutique',
      personalStylingConsultations: 'Consultations de Styling Personnel',
      customPleatingServices: 'Services de Plissage Personnalisé',
      alterationsAdjustments: 'Retouches et Ajustements',
      privateShoppingAppointments: 'Rendez-vous d\'Achats Privés',
      getDirections: 'Obtenir l\'Itinéraire',
      letsStartConversation: 'Commençons une Conversation',
      nameLabel: 'Nom',
      emailLabel: 'Email',
      subjectLabel: 'Sujet',
      phoneLabel: 'Téléphone',
      messageLabel: 'Message',
      yourFullName: 'Votre Nom Complet',
      yourEmail: 'Votre Email',
      selectSubject: 'Sélectionner un Sujet',
      generalInquiry: 'Demande Générale',
      storeAppointment: 'Rendez-vous en Boutique',
      customOrder: 'Commande Personnalisée',
      pressMediaContact: 'Contact Presse & Média',
      businessPartnership: 'Partenariat Commercial',
      other: 'Autre',
      phonePlaceholder: 'Votre Numéro de Téléphone (Optionnel)',
      messagePlaceholder: 'Dites-nous ce que vous pensez...',
      frequentlyAsked: 'Foire Aux Questions',
      howToCare: 'Comment Entretenir les Vêtements Plissés ?',
      careDesc: 'Nos vêtements plissés sont conçus pour maintenir leur forme. Nous recommandons un lavage à la main doux ou le nettoyage à sec. Ne jamais repasser directement sur les plis.',
      doYouShip: 'Proposez-vous l\'Expédition Internationale ?',
      shippingDesc: 'Oui, nous expédions dans le monde entier. Les coûts et délais d\'expédition varient selon la destination.',
      canRequestCustom: 'Puis-je Demander un Plissage Personnalisé ?',
      customDesc: 'Absolument ! Nous proposons des services de plissage personnalisé. Contactez-nous pour discuter de votre vision.',
      whatIsReturnPolicy: 'Quelle est Votre Politique de Retour ?',
      returnDesc: 'Nous acceptons les retours dans les 14 jours suivant la livraison pour les articles non portés avec étiquettes attachées.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      brandStory: 'قصة العلامة',
      products: 'المنتجات',
      store: 'المتجر',
      contact: 'اتصل بنا'
    },
    language: {
      en: 'English',
      zh: '中文',
      ja: '日本語',
      vi: 'Tiếng Việt',
      ms: 'Bahasa Melayu',
      fr: 'Français',
      ar: 'العربية'
    },
    hero: {
      title: 'Plearance',
      subtitle: 'طيات أنيقة، جمال خالد',
      cta: 'استكشاف المجموعة'
    },
    footer: {
      brandName: 'Plearance',
      description: 'صناعة أزياء طيات أنيقة بالحرفية اليابانية التقليدية والاستدامة الحديثة.',
      quickLinks: 'روابط سريعة',
      contact: 'اتصل بنا',
      followUs: 'تابعنا',
      rights: 'جميع الحقوق محفوظة.'
    },
    home: {
      heroTitle: 'اكتشف فن الطي',
      heroSubtitle: 'حيث تلتقي الحرفية اليابانية التقليدية بالأناقة المعاصرة',
      exploreCollection: 'استكشاف المجموعة',
      viewProducts: 'عرض المنتجات',
      craftsmanshipTitle: 'حرفية رئيسية',
      craftsmanshipDesc: 'كل قطعة مصنوعة بدقة من قبل حرفيين ماهرين باستخدام تقنيات تقليدية موروثة عبر الأجيال.',
      sustainabilityTitle: 'أزياء مستدامة',
      sustainabilityDesc: 'نؤمن بإنشاء قطع خالدة تتجاوز الاتجاهات، وتعزيز الاستهلاك الواعي.',
      eleganceTitle: 'أناقة خالدة',
      eleganceDesc: 'تصاميمنا المطوية تجسد الرقي والنعومة، مثالية للفرد الحديث المتميز.',
      // New content for actual Home page
      creativeExcellence: 'التميز الإبداعي',
      yuiNakahara: 'يوي ناكاهارا',
      pleatsQuote: 'الطيات ليست مجرد خطوط - إنها قصائد مكتوبة بالقماش',
      yuiBio: 'المؤسسة والمديرة الإبداعية، يوي ناكاهارا، بدأت رحلتها في عالم الطي في سن السادسة عشرة، حيث تعلمت من الحرفيين التقليديين اليابانيين. حاصلة على درجة من جامعة الفنون في طوكيو، كرست حياتها المهنية للحفاظ على تقنيات الطي التقليدية مع تكييفها لاحتياجات المرأة الحديثة.',
      yuiPhilosophy: 'بالنسبة ليوي، تمثل كل طية نية - تفكير واعي يحول القماش المسطح إلى شيء ثلاثي الأبعاد وتعبيري. نهجها في التصميم مرتبط بعمق بفلسفة "ما" اليابانية - الفراغ بين، الصمت بين النغمات الذي يعطي المعنى للصوت.',
      brandStory: 'قصة العلامة',
      contactUs: 'اتصل بنا',
      manufacturingExcellence: 'التفوق في التصنيع',
      exceptionalPleatedArtistry: 'فن الطي الاستثنائي',
      manufacturingDesc1: 'يتم إنشاء كل قطعة من Plearance في استوديو طوكيو الخاص بنا، حيث تلتقي التقاليد بالابتكار. يعمل حرفيونا، ومن بينهم العديد من ذوي الخبرة التي تزيد عن 30 عامًا، بدقة لا يمكن تكرارها بالآلات.',
      manufacturingDesc2: 'تبدأ العملية باختيار القماش - فقط أفضل المواد التي يمكنها تحمل ضغط الطي مع الحفاظ على جمالها وسلامتها. يتم اختبار كل ليفة لقدرتها على الحفاظ على الطية، ونسيجها، وقدرتها على التحرك بأناقة مع الجسم.',
      manufacturingDesc3: 'الطي نفسه هو رقصة بين الحرارة والضغط والتوقيت. يستخدم أساتذتنا الحرفيون كل من التقنيات التقليدية الموروثة عبر الأجيال والابتكارات الحديثة لإنشاء طيات تكون هيكلية وحسية في نفس الوقت.',
      philosophy: 'الفلسفة',
      structuredArtistry: 'الفن المنظم',
      brandPhilosophy: 'فلسفتنا بسيطة: إنشاء ملابس تكرم كل من الهيكلة والحركة. كل طية محسوبة، كل خط مقصود، كل صيغة مصممة لتبرز وتتحرك مع الجسم الأنثوي.'
    },
    brandStory: {
      title: 'قصة العلامة',
      subtitle: 'فن الطي',
      intro: 'تأسست في طوكيو، تمثل Plearance المزيج المثالي بين تقنيات الطي اليابانية التقليدية وتصميم الأزياء المعاصر.',
      heritageTitle: 'إرثنا',
      heritageDesc: 'مستمدة من تقاليد النسيج اليابانية القرونية، نحن نكرم فن الطي الدقيق للأقمشة.',
      philosophyTitle: 'فلسفتنا',
      philosophyDesc: 'نؤمن بإنشاء الملابس التي تجسد كل من الجمال الجمالي والتميز الوظيفي.',
      craftsmanshipTitle: 'حرفيتنا',
      craftsmanshipDesc: 'كل طية محسوبة وتنفذ بعناية من قبل الحرفيين الرئيسيين بعقود من الخبرة.',
      meetArtisans: 'تعرف على حرفيينا',
      // New content for actual Brand Story page
      fusionOfPleatsAndElegance: 'اندماج الطيات والأناقة',
      pleatsArt: 'الطيات',
      pleatsDesc: 'فن طي القماش\nخلق البنية والحركة',
      eleganceArt: 'الأناقة',
      eleganceDesc: 'الجمال الراقي في البساطة\nالرقي الخالد',
      whereStructuredArtistry: 'حيث تلتقي الفن المنظم بالأناقة غير المبذولة',
      artOfTransformation: 'فن التحول',
      transformationDesc1: 'وُلدت Plearance من اندماج الطيات والأناقة، ممثلة الزواج المتناغم بين الدقة التقنية والتنقيذ الجمالي. كل طية تحكي قصة حرفية، بينما كل خطابة تهمس بالجمال الخالد.',
      transformationDesc2: 'تكرم فلسفتنا التصميمية قوة التحويل التي تمتلكها الطيات - ليس فقط كتقنية، بل كلغة تعبير تتحدث عن رغبة المرأة الحديثة في كل من البنية والسيولة في ملابسها.',
      transformationDesc3: 'من خلال الانتباه الدقيق للنسب والالتزام الثابت بالجودة، نخلق ملابس تتجاوز الاتجاهات الموسمية، بل نقدم مجموعة من القطع الراقية الدائمة التي تتقدم بالعمر بأناقة مع من يرتديها.',
      fromConceptToCreation: 'من المفهوم إلى الإبداع',
      conceptDesc1: 'كل قطعة Plearance تبدأ بفكرة - رؤية حول كيف يمكن تحويل القماش من خلال فن الطي القديم إلى شيء عملي وجميل.',
      conceptDesc2: 'عملية تصميمنا دقيقة ومدروسة. نبدأ باختيار أفضل الأقمشة، كل منها تم اختياره لقدرته على الحفاظ على الطية مع الحفاظ على طياته وحركته الطبيعية. عملية الطي نفسها هي رقصة بين الحرارة والضغط والوقت، تتطلب سنوات من الخبرة لإتقانها.',
      conceptDesc3: 'النتيجة هي ملابس تتحرك معك، تتنفس معك، تصبح أكثر جمالاً مع كل ارتداء. هذه ليست الموضة السريعة - هذه هي الإبداع البطيء والمتعمد المصمم ليدوم مدى الحياة.',
      heritageAndFuture: 'الإرث والمستقبل',
      rootedInTradition: 'متجذر في التقاليد، مصمم للغد',
      japaneseHeritage: 'الإرث الياباني',
      japaneseHeritageDesc: 'من خلال الاستلهام من قرون من التقاليد النسيجية اليابانية، نهجنا للطيات يكرم الماضي مع احتضان الجماليات المعاصرة. الدقة والانتباه للتفاصيل اللذان يحددان الحرفية اليابانية واضحان في كل طية.',
      modernInnovation: 'الابتكار الحديث',
      modernInnovationDesc: 'من خلال الجمع بين التقنيات التقليدية والتكنولوجيا الحديثة، ندفع حدود ما هو ممكن مع القماش المطوي. التزامنا بالابتكار يضمن أن كل مجموعة تبنى على سابقتها، وتتطور وتتحسن باستمرار.',
      sustainableFuture: 'مستقبل مستدام',
      sustainableFutureDesc: 'الاستدامة ليست تفكيراً لاحقاً - إنها منسوجة في كل قرار نتخذه. من اختيار الأقمشة الصديقة للبيئة إلى إنشاء تصاميم خالدة تتجاوز الاتجاهات، نبني علامة تجارية تحترم كل من البشر والكوكب.'
    },
    products: {
      title: 'المنتجات',
      subtitle: 'مجموعة الطيات الأنيقة',
      allProducts: 'جميع المنتجات',
      categories: {
        dresses: 'فساتين',
        skirts: 'تنانير',
        tops: 'بلوزات',
        accessories: 'إكسسوارات'
      },
      filters: {
        color: 'اللون',
        size: 'الحجم',
        price: 'السعر',
        apply: 'تطبيق',
        reset: 'إعادة تعيين'
      },
      // New content for actual Products page
      discoverCollection: 'اكتشف مجموعة فن الطيات لدينا',
      everyFoldTellsStory: 'كل طية تحكي قصة',
      collectionDesc: 'مجموعتنا المنتقاة بعناية تمثل ذروة حرفية الطيات. كل قطعة مصممة لتتجاوز المواسم، وتقدم أناقة خالدة من خلال قوة التحول التي تمتلكها الطيات.',
      everydayEssentials: 'الأساسيات اليومية',
      everydayDesc: 'قطع مصممة بدقة لتندمج بسلاسة في خزانة ملابسك اليومية. هذه الملابس متعددة الاستخدامات تجمع بين الراحة والرقي، مع طيات دقيقة تضيف نسيجاً وحركة إلى السيلويت الكلاسيكية.',
      statementPieces: 'قطع بيان',
      statementDesc: 'تصاميم معمارية جريئة تُظهر الإمكانات الدرامية للطيات. هذه الملابس مصممة لتحدث انطباعاً، وتقدم أنماط طيات مبتكرة وأشكالاً نحتية تحتفي بالطابع الفني لحرفيتنا.',
      professionalCollection: 'المجموعة المهنية',
      professionalDesc: 'قطع راقية مصممة للمحترفين الحديثين. هذه الملابس تتميز بتقنيات طيات متطورة تضيف اهتماماً بصرياً مع الحفاظ على جمالية مصقولة ومناسبة للعمل.',
      eveningElegance: 'أناقة المساء',
      eveningDesc: 'قطع فاخرة مصممة للمناسبات الخاصة. هذه الملابس تتميز بأنماط طيات معقدة وأقمشة ممتازة تخلق سيلويت درامية مثالية لأحداث المساء والاحتفالات.',
      comfortFit: 'ملاءمة مريحة',
      breathableFabric: 'قماش قابل للتنفس',
      easyCare: 'سهل العناية',
      architecturalDesign: 'تصميم معماري',
      handFinished: 'منتهي يدوياً',
      limitedEdition: 'إصدار محدود',
      officeReady: 'جاهز للمكتب',
      wrinkleResistant: 'مقاوم للتجاعيد',
      travelFriendly: 'صديق للسفر',
      premiumFabric: 'قماش ممتاز',
      intricatePleating: 'طيات معقدة',
      specialOccasion: 'مناسبة خاصة',
      artOfPerfectPleats: 'فن الطيات المثالية',
      fabricSelection: 'اختيار القماش',
      fabricSelectionDesc: 'نبدأ بأفضل الأقمشة، كل منها تم اختياره لقدرته على الحفاظ على الطية مع الحفاظ على طياته وحركته الطبيعية. عملية اختيارنا صارمة، مما يضمن فقط المواد التي تلبي معاييرنا الصارمة.',
      pleatFormation: 'تكوين الطيات',
      pleatFormationDesc: 'باستخدام معدات متطورة مجتمعة مع التقنيات التقليدية، تُشكل كل طية بدقة. تتطلب العملية توقيتاً وحرارة وضغطاً مثاليين لإنشاء طيات دائمة وجميلة.',
      heatSetting: 'ضبط الحرارة',
      heatSettingDesc: 'الخطوة النهائية تنطوي على ضبط حراري يُراقب بعناية يقفل كل طية في مكانها. هذا يضمن أن ملابسك ستحافظ على بنيتها الجميلة بعد كل غسلة، وبعد كل ارتداء.',
      experiencePlearance: 'اختبر Plearance',
      experienceDesc: 'كل قطعة Plearance هي أكثر من مجرد ملابس - إنها عمل فني يحتفي بجمال البنية وشعرية الحركة. اكتشف كيف يمكن للطيات أن تُحوّل ليس فقط القماش، بل أيضاً شعورك في ملابسك.',
      visitStore: 'زور متجرنا'
    },
    store: {
      title: 'المتجر',
      subtitle: 'زوروا متجرنا الرئيسي',
      visitUs: 'زورونا',
      bookAppointment: 'حجز موعد',
      location: 'متجر طوكيو الرئيسي',
      hours: 'ساعات العمل',
      features: 'ميزات المتجر',
      // New content for actual Store page
      discoverCuratedCollection: 'اكتشف مجموعتنا المنتقاة',
      experienceInPerson: 'اختبر Plearance شخصياً',
      tokyoFlagship: 'طوكيو الرئيسي',
      storeAddress: '1 Chome-8-1 Marunouchi<br>Chiyoda City, Tokyo<br>100-0005, اليابان',
      storeHours: 'الاثنين - السبت: 11:00 - 20:00<br>الأحد: 12:00 - 19:00',
      personalJourney: 'رحلة شخصية',
      personalJourneyDesc1: 'الدخول إلى متجر Plearance هو أكثر من مجرد رحلة تسوق - إنه انغماس في عالم فن الطيات. تعكس مساحاتنا المصممة بعناية نفس الاهتمام بالتفاصيل والجمالية البسيطة التي تحدد ملابسنا.',
      personalJourneyDesc2: 'كل متجر مصمم كمعرض تُعرض فيه الملابس كأعمال فنية. يُضبط الإضاءة بعناية لإبراز نسيج وحركة كل طية، مما يسمح لك بتقدير الحرفية الموجودة في كل قطعة.',
      personalJourneyDesc3: 'يتلقى موظفونا المطلعون تدريباً ليس فقط في الموضة، بل أيضاً في فن وعلم الطي. يمكنهم توجيهك خلال مجموعاتنا، وشرح التقنيات المختلفة المستخدمة، ومساعدتك في العثور على القطع التي تكمل أسلوبك ونمط حياتك الشخصي.',
      bespokeServices: 'خدمات مخصصة',
      personalStyling: 'تنسيق شخصي',
      personalStylingDesc: 'يعمل مصممو الأزياء الخبراء لدينا معك لفهم تفضيلاتك الجمالية، واحتياجات نمط حياتك، ونوع جسمك لتحديد مجموعة من القطع التي ستصبح أساس خزانة ملابسك.',
      customPleating: 'طي مخصص',
      customPleatingDesc: 'لأولئك الذين يبحثون عن شيء فريد حقاً، نحن نقدم خدمات الطي المخصص. تعاون مع حرفيينا لإنشاء أنماط طي مخصصة تعكس أسلوبك ورؤيتك الشخصية.',
      alterations: 'تعديلات',
      alterationsDesc: 'تضمن خدمة التعديل الداخلية لدينا أن كل قطعة تناسبك تماماً. نحن ندرك أن جمال الملابس المطوية يكمن في ملاءمتها وانسيابها الدقيق.',
      careInstructions: 'تعليمات العناية',
      careInstructionsDesc: 'تعلم كيفية العناية بملابسك المطوية بشكل صحيح لضمان الحفاظ على جمالها وبنيتها لسنوات قادمة. نحن نقدم إرشادات مفصلة حول التنظيف والتخزين والصيانة.',
      shopAnywhere: 'تسوق من أي مكان',
      shopOnlineDesc1: 'بينما نؤمن أن لا شيء يضاهي تجربة ملابسنا شخصياً، فإننا ندرك أن زيارة متجرنا الرئيسي في طوكيو ليست ممكنة دائماً. يجلب متجرنا الإلكتروني تجربة Plearance إليك، أينما كنت.',
      shopOnlineDesc2: 'تتضمن كل صفحة منتج صوراً مفصلة تلتقط نسيج وحركة أقمشتنا المطوية. نحن نقدم قياسات شاملة، ومعلومات الأقمشة، واقتراحات التنسيق لمساعدتك في اتخاذ قرارات مبنية على المعرفة.',
      shopOnlineDesc3: 'فريق خدمة العملاء لدينا متاح للإجابة على الأسئلة، وتقديم نصائح التنسيق، والتأكد من أن تجربة التسوق الإلكترونية الخاصة بك تلبي نفس المعايير العالية كزيارتنا للمتجر شخصياً.',
      onlineContact: 'تواصل معنا',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      whatsappLabel: 'واتساب',
      beginJourney: 'ابدأ رحلة Plearance الخاصة بك',
      beginJourneyDesc: 'سواء زرت متجرنا الرئيسي في طوكيو أو تسوقت عبر الإنترنت، نحن هنا لمساعدتك في اكتشاف قوة تحول فن الطيات. كل قطعة في مجموعتنا مصممة لتصبح جزءاً ثميناً من خزانة ملابسك، مما يجلب البنية والحركة والأناقة إلى حياتك اليومية.',
      contactUs: 'تواصل معنا'
    },
    contacts: {
      title: 'اتصل بنا',
      subtitle: 'دعونا نتواصل',
      getInTouch: 'تواصل معنا',
      generalInquiries: 'استفسارات عامة',
      storeAppointments: 'المتجر والمواعيد',
      pressMedia: 'الصحافة والإعلام',
      businessInquiries: 'استفسارات الأعمال',
      visitUs: 'زورونا',
      sendMessage: 'إرسال رسالة',
      letsTalk: 'لنبدأ محادثة',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      phone: 'الهاتف',
      message: 'الرسالة',
      sendButton: 'إرسال الرسالة',
      sending: 'جار الإرسال...',
      successMessage: 'شكرا لرسالتك! سنتواصل معك خلال 24 ساعة.',
      errorMessage: 'عذرا، حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى.',
      formIdError: 'معرف نموذج Formspree غير مكون. يرجى تعيين VITE_FORMSPREE_FORM_ID في ملف .env الخاص بك.',
      networkError: 'خطأ في الشبكة. يرجى التحقق من اتصال الإنترنت الخاص بك والمحاولة مرة أخرى.',
      faq: 'الأسئلة الشائعة',
      commonQuestions: 'أسئلة شائعة',
      careInstructions: 'كيف أعتني بالملابس المطوية؟',
      careInstructionsDesc: 'تم تصميم ملابسنا المطوية للحفاظ على شكلها. نوصي بالغسل اليدوي اللطيف أو التنظيف الجاف. لا تكوي أبدا مباشرة على الطيات.',
      internationalShipping: 'هل تقدمون الشحن الدولي؟',
      internationalShippingDesc: 'نعم، نشحن حول العالم. تختلف تكاليف الشحن وأوقات التسليم حسب الوجهة.',
      customPleating: 'هل يمكنني طلب طي مخصص؟',
      customPleatingDesc: 'بالتأكيد! نحن نقدم خدمات الطي المخصص. اتصل بنا لمناقشة رؤيتك.',
      returnPolicy: 'ما هي سياسة الإرجاع الخاصة بكم؟',
      returnPolicyDesc: 'نقبل الإرجاع خلال 14 يومًا من التسليم للعناصر غير الملبوسة مع العلامات المرفقة.',
      // New content for actual Contacts page
      letsConnect: 'دعونا نتواصل',
      createSomethingBeautiful: 'لنخلق شيئاً جميلاً معاً',
      weWouldLoveToHear: 'نود أن نسمع منك',
      responseTime: 'وقت الاستجابة',
      within24Hours: 'خلال 24 ساعة',
      highResImages: 'صور عالية الدقة',
      availableUponRequest: 'متاح عند الطلب',
      partnerships: 'الشراكات',
      wholesaleCollaboration: 'التعاون بالجملة',
      tokyoFlagshipStore: 'متجر طوكيو الرئيسي',
      address: 'العنوان',
      addressDetails: '1 Chome-8-1 Marunouchi<br>Chiyoda City, Tokyo<br>100-0005, اليابان',
      hours: 'ساعات العمل',
      hoursDetails: 'الاثنين - السبت: 11:00 - 20:00<br>الأحد: 12:00 - 19:00',
      closedOnHolidays: 'مغلق في العطل',
      storeFeatures: 'ميزات المتجر',
      personalStylingConsultations: 'استشارات الأناقة الشخصية',
      customPleatingServices: 'خدمات الطي المخصصة',
      alterationsAdjustments: 'التعديلات والتعديلات',
      privateShoppingAppointments: 'مواعيد التسوق الخاصة',
      getDirections: 'الحصول على الاتجاهات',
      letsStartConversation: 'لنبدأ محادثة',
      nameLabel: 'الاسم',
      emailLabel: 'البريد الإلكتروني',
      subjectLabel: 'الموضوع',
      phoneLabel: 'الهاتف',
      messageLabel: 'الرسالة',
      yourFullName: 'اسمك الكامل',
      yourEmail: 'بريدك الإلكتروني',
      selectSubject: 'اختر الموضوع',
      generalInquiry: 'استفسار عام',
      storeAppointment: 'موعد المتجر',
      customOrder: 'طلب مخصص',
      pressMediaContact: 'الاتصال بالصحافة والإعلام',
      businessPartnership: 'شراكة تجارية',
      other: 'آخر',
      phonePlaceholder: 'رقم هاتفك (اختياري)',
      messagePlaceholder: 'أخبرنا بما تفكر فيه...',
      frequentlyAsked: 'الأسئلة الشائعة',
      howToCare: 'كيفية العناية بالملابس المطوية؟',
      careDesc: 'تم تصميم ملابسنا المطوية للحفاظ على شكلها. نوصي بالغسل اليدوي اللطيف أو التنظيف الجاف. لا تكوي أبدا مباشرة على الطيات.',
      doYouShip: 'هل تقومون بالشحن الدولي؟',
      shippingDesc: 'نعم، نشحن حول العالم. تختلف تكاليف الشحن وأوقات التسليم حسب الوجهة.',
      canRequestCustom: 'هل يمكنني طلب طي مخصص؟',
      customDesc: 'بالتأكيد! نحن نقدم خدمات الطي المخصص. اتصل بنا لمناقشة رؤيتك.',
      whatIsReturnPolicy: 'ما هي سياسة الإرجاع الخاصة بكم؟',
      returnDesc: 'نقبل الإرجاع خلال 14 يومًا من التسليم للعناصر غير الملبوسة مع العلامات المرفقة.'
    }
  }
}

export default translations