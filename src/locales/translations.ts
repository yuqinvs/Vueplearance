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
  }
  store: {
    title: string
    subtitle: string
    visitUs: string
    bookAppointment: string
    location: string
    hours: string
    features: string
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
      eleganceDesc: 'Our pleated designs embody sophistication and grace, perfect for the modern discerning individual.'
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
      meetArtisans: 'Meet Our Artisans'
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
      }
    },
    store: {
      title: 'Store',
      subtitle: 'Visit Our Flagship',
      visitUs: 'Visit Us',
      bookAppointment: 'Book Appointment',
      location: 'Tokyo Flagship Store',
      hours: 'Store Hours',
      features: 'Store Features'
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
      formIdError: 'Formspree form ID not configured. Please set VITE_FORMSPREE_FORM_ID in your .env file.',
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
      returnPolicyDesc: 'We accept returns within 14 days of delivery for unworn items with tags attached.'
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
      eleganceDesc: '我们的褶皱设计体现精致与优雅，完美适合现代有品味的人士。'
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
      meetArtisans: '认识我们的工匠'
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
      }
    },
    store: {
      title: '店铺',
      subtitle: '参观我们的旗舰店',
      visitUs: '参观我们',
      bookAppointment: '预约参观',
      location: '东京旗舰店',
      hours: '营业时间',
      features: '店铺特色'
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
      returnPolicyDesc: '我们在交付后14天内接受未穿着且带标签的商品退货。'
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
      eleganceDesc: '私たちのプリーツデザインは洗練と優雅さを体現し、現代の識別力のある個人に最適です。'
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
      meetArtisans: '私たちの職人に会う'
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
      }
    },
    store: {
      title: '店舗',
      subtitle: 'フラッグシップを訪問',
      visitUs: '私たちを訪問',
      bookAppointment: '予約を取る',
      location: '東京フラッグシップストア',
      hours: '営業時間',
      features: 'ストア機能'
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
      returnPolicyDesc: 'タグが付いた未着用の商品は、配達後14日以内に返品を受け付けています。'
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
      eleganceDesc: 'Thiết kế nếp gấp của chúng tôi thể hiện sự tinh tế và duyên dáng, hoàn hảo cho người có gu thẩm mỹ hiện đại.'
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
      meetArtisans: 'Gặp Gỡ Thợ Thủ Công Của Chúng Tôi'
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
      }
    },
    store: {
      title: 'Cửa Hàng',
      subtitle: 'Thăm Cửa Hàng Flagship Của Chúng Tôi',
      visitUs: 'Thăm Chúng Tôi',
      bookAppointment: 'Đặt Lịch Hẹn',
      location: 'Cửa Hàng Flagship Tokyo',
      hours: 'Giờ Mở Cửa',
      features: 'Tính Năng Cửa Hàng'
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
      returnPolicyDesc: 'Chúng tôi chấp nhận trả hàng trong vòng 14 ngày kể từ ngày giao hàng đối với các mặt hàng chưa mặc còn thẻ.'
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
      eleganceDesc: 'Reka bentuk berlipat kami mewakili kecanggihan dan keanggunan, sempurna untuk individu yang bijak moden.'
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
      meetArtisans: 'Temui Pengarah Kami'
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
      }
    },
    store: {
      title: 'Kedai',
      subtitle: 'Lawati Flagship Kami',
      visitUs: 'Lawati Kami',
      bookAppointment: 'Tempah Janji',
      location: 'Kedai Flagship Tokyo',
      hours: 'Waktu Operasi',
      features: 'Ciri-ciri Kedai'
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
      returnPolicyDesc: 'Kami menerima pemulangan dalam masa 14 hari selepas penghantaran untuk barang yang tidak dipakai dengan tag terpasang.'
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
      eleganceDesc: 'Nos designs plissés incarnent la sophistication et la grâce, parfaits pour l\'individu moderne averti.'
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
      meetArtisans: 'Rencontrer Nos Artisans'
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
      }
    },
    store: {
      title: 'Boutique',
      subtitle: 'Visitez Notre Flagship',
      visitUs: 'Visitez-nous',
      bookAppointment: 'Prendre Rendez-vous',
      location: 'Boutique Flagship Tokyo',
      hours: 'Heures d\'Ouverture',
      features: 'Caractéristiques de la Boutique'
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
      returnPolicyDesc: 'Nous acceptons les retours dans les 14 jours suivant la livraison pour les articles non portés avec étiquettes attachées.'
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
      eleganceDesc: 'تصاميمنا المطوية تجسد الرقي والنعومة، مثالية للفرد الحديث المتميز.'
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
      meetArtisans: 'تعرف على حرفيينا'
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
      }
    },
    store: {
      title: 'المتجر',
      subtitle: 'زوروا متجرنا الرئيسي',
      visitUs: 'زورونا',
      bookAppointment: 'حجز موعد',
      location: 'متجر طوكيو الرئيسي',
      hours: 'ساعات العمل',
      features: 'ميزات المتجر'
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
      returnPolicyDesc: 'نقبل الإرجاع خلال 14 يومًا من التسليم للعناصر غير الملبوسة مع العلامات المرفقة.'
    }
  }
}

export default translations