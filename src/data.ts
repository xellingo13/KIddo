import { Category, Nanny, ProductAd, JournalEntry, BlogPost } from './types';

import nannyMadina from './assets/images/nanny_madina_1782636265539.jpg';
import nannyShaxnoza from './assets/images/nanny_shaxnoza_1782636283603.jpg';
import nannySevara from './assets/images/nanny_sevara_1782636302188.jpg';
import nannyDilnoza from './assets/images/nanny_dilnoza_1782636318925.jpg';
import nannyNargiza from './assets/images/nanny_nargiza_1782636336819.jpg';
import nannyZilola from './assets/images/nanny_zilola_1782636354937.jpg';
import nannyKamola from './assets/images/nanny_kamola_1782636371050.jpg';

export const SAMPLE_NANNIES: Nanny[] = [
  {
    id: '1',
    name: 'Madina Alimova',
    category: Category.BABY,
    rating: 4.9,
    reviewsCount: 28,
    hourlyRate: 45000,
    experienceYears: 5,
    location: {
      lat: 41.3111,
      lng: 69.2797,
      address: 'Toshkent shahri, Shayxontohur tumani, Gafur Gulom ko\'chasi, 12',
      city: 'Toshkent',
      address_uz: 'Toshkent shahri, Shayxontohur tumani, Gafur Gulom ko\'chasi, 12',
      address_en: '12 Gafur Gulom Street, Shaykhantakhur District, Tashkent City',
      address_ru: 'г. Ташкент, Шайхантахурский район, улица Гафура Гуляма, 12',
      city_uz: 'Toshkent',
      city_en: 'Tashkent',
      city_ru: 'Ташкент'
    },
    images: [
      nannyMadina, // Sitter photo (Central Asian smiling woman)
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800', // Reading together
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800', // Coloring
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800', // Educational block games
      'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&q=80&w=800'  // Healthy meal prep
    ],
    bio: 'Men oliy pedagogik ma\'lumotga ega professional enagaman. Chaqaloqlar parvarishi, ularning rivojlanish psixologiyasi, sensor o\'yinlar va sog\'lom ovqatlantirish borasida katta tajribam bor. Bolajonlarni chin dildan yaxshi ko\'raman, har biriga individual yondashaman. Birinchi yordam ko\'rsatish sertifikatiga egaman.',
    bio_uz: 'Men oliy pedagogik ma\'lumotga ega professional enagaman. Chaqaloqlar parvarishi, ularning rivojlanish psixologiyasi, sensor o\'yinlar va sog\'lom ovqatlantirish borasida katta tajribam bor. Bolajonlarni chin dildan yaxshi ko\'raman, har biriga individual yondashaman. Birinchi yordam ko\'rsatish sertifikatiga egaman.',
    bio_en: 'I am a professional babysitter with higher pedagogical education. I have extensive experience in infant care, developmental psychology, sensory games, and healthy feeding. I sincerely love children and approach each individually. I hold a first-aid certificate.',
    bio_ru: 'Я профессиональная няня с высшим педагогическим образованием. У меня большой опыт в уходе за младенцами, возрастной психологии, сенсорных играх и здоровом питании. Я искренне люблю детей и подхожу к каждому индивидуально. Имею сертификат первой помощи.',
    phone: '+998 90 954 11 22',
    languages: ['O\'zbekcha', 'Ruscha', 'Inglizcha'],
    availability: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma'],
    ageGroupPreference: '0-2 yosh (Chaqaloqlar)',
    ageGroupPreference_uz: '0-2 yosh (Chaqaloqlar)',
    ageGroupPreference_en: '0-2 years old (Infants)',
    ageGroupPreference_ru: '0-2 года (Младенцы)',
    isVerified: true,
    certificates: [
      'Oliy Pedagogika Diplomi (TDPU)',
      'Qizil Xoch: Bolalar uchun birinchi yordam sertifikati',
      'Montessori pedagogikasi bo\'yicha malaka oshirish'
    ],
    certificates_uz: [
      'Oliy Pedagogika Diplomi (TDPU)',
      'Qizil Xoch: Bolalar uchun birinchi yordam sertifikati',
      'Montessori pedagogikasi bo\'yicha malaka oshirish'
    ],
    certificates_en: [
      'Higher Pedagogical Diploma (TDPU)',
      'Red Cross: Pediatric First Aid Certificate',
      'Montessori Pedagogy Professional Development'
    ],
    certificates_ru: [
      'Диплом высшего педагогического образования (ТГПУ)',
      'Красный Крест: Сертификат первой помощи детям',
      'Повышение квалификации по педагогике Монтессори'
    ],
    recommendations: [
      'Lola S. (Toshkent): "Madina o\'g\'limizga 1.5 yil davomida qaradi. O\'ta ishonchli, muloyim va har doim mas\'uliyatli enaga."',
      'Akbar J. (Chilonzor): "Chaqaloq parvarishi va gigiyenasi bo\'yicha Madinaga teng keladigani yo\'q. Juda minnatdormiz."'
    ],
    recommendations_uz: [
      'Lola S. (Toshkent): "Madina o\'g\'limizga 1.5 yil davomida qaradi. O\'ta ishonchli, muloyim va har doim mas\'uliyatli enaga."',
      'Akbar J. (Chilonzor): "Chaqaloq parvarishi va gigiyenasi bo\'yicha Madinaga teng keladigani yo\'q. Juda minnatdormiz."'
    ],
    recommendations_en: [
      'Lola S. (Tashkent): "Madina cared for our son for 1.5 years. She is an extremely reliable, gentle, and always responsible nanny."',
      'Akbar J. (Chilonzor): "When it comes to baby care and hygiene, no one compares to Madina. We are very grateful."'
    ],
    recommendations_ru: [
      'Лола С. (Ташкент): "Мадина заботилась о нашем сыне 1,5 года. Она очень надежная, вежливая и всегда ответственная няня."',
      'Акбар Д. (Чиланзар): "В уходе за младенцами и гигиене Мадине нет равных. Мы очень благодарны."'
    ],
    poster: {
      name: 'Madina (Mustaqil)',
      avatar: nannyMadina,
      role: 'Mustaqil Enaga',
      role_uz: 'Mustaqil Enaga',
      role_en: 'Independent Sitter',
      role_ru: 'Частная няня',
      listingsCount: 2,
      callsCount: 144
    },
    reviews: [
      {
        id: 'r1',
        authorName: 'Shahlo Karimova',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
        rating: 5,
        comment: 'Madina ajoyib enaga! Qizim uni birinchi kundan boshlab yaxshi ko\'rib qoldi. Juda tartibli va mehribon.',
        comment_uz: 'Madina ajoyib enaga! Qizim uni birinchi kundan boshlab yaxshi ko\'rib qoldi. Juda tartibli va mehribon.',
        comment_en: 'Madina is an amazing nanny! My daughter loved her from day one. Very organized and kind.',
        comment_ru: 'Мадина — чудесная няня! Дочка полюбила ее с первого дня. Очень аккуратная и добрая.',
        date: '20.06.2026'
      },
      {
        id: 'r2',
        authorName: 'Umid Abdullayev',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
        rating: 4.8,
        comment: 'Tajribasi darhol seziladi, bolani uxlata olish va to\'g\'ri rejimga o\'rgatish borasida juda tajribali ekan.',
        comment_uz: 'Tajribasi darhol seziladi, bolani uxlata olish va to\'g\'ri rejimga o\'rgatish borasida juda tajribali ekan.',
        comment_en: 'Her experience is immediately noticeable; she is highly skilled in putting the baby to sleep and setting a proper routine.',
        comment_ru: 'Сразу чувствуется опыт; она очень умело укладывает ребенка спать и приучает к правильному режиму.',
        date: '15.06.2026'
      }
    ]
  },
  {
    id: '2',
    name: 'Shaxnoza Usmonova',
    category: Category.TODDLER,
    rating: 4.8,
    reviewsCount: 19,
    hourlyRate: 38000,
    experienceYears: 3,
    location: {
      lat: 41.2995,
      lng: 69.2401,
      address: 'Toshkent shahri, Chilonzor tumani, Muqimiy ko\'chasi, 45-uy',
      city: 'Toshkent',
      address_uz: 'Toshkent shahri, Chilonzor tumani, Muqimiy ko\'chasi, 45-uy',
      address_en: 'Apt 45, Muqimiy Street, Chilonzor District, Tashkent City',
      address_ru: 'г. Ташкент, Чиланзарский район, улица Мукими, дом 45',
      city_uz: 'Toshkent',
      city_en: 'Tashkent',
      city_ru: 'Ташкент'
    },
    images: [
      nannyShaxnoza, // Sitter photo (smiling Central Asian face)
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800', // Giving toy
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800', // Group activity
      'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&q=80&w=800', // Playground outdoor
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=800'  // Indoor safety guard
    ],
    bio: 'Maktabgacha ta\'lim mutaxassisiman. Bolajonlarni maktabga tayyorlash, nutq o\'stirish va kreativ mashg\'ulotlar (plastilin, rasm chizish, Origami) bilan band qilish bo\'yicha mutaxassisman. Bolalar xavfsizligi mening bosh maqsadimdir.',
    bio_uz: 'Maktabgacha ta\'lim mutaxassisiman. Bolajonlarni maktabga tayyorlash, nutq o\'stirish va kreativ mashg\'ulotlar (plastilin, rasm chizish, Origami) bilan band qilish bo\'yicha mutaxassisman. Bolalar xavfsizligi mening bosh maqsadimdir.',
    bio_en: 'I am a preschool education specialist. I specialize in preparing kids for school, speech development, and engaging them in creative activities (modelling clay, drawing, Origami). Child safety is my main priority.',
    bio_ru: 'Я специалист по дошкольному образованию. Специализируюсь на подготовке детей к школе, развитии речи и вовлечении в творческие занятия (пластилин, рисование, оригами). Безопасность детей — моя главная цель.',
    phone: '+998 93 115 54 88',
    languages: ['O\'zbekcha', 'Inglizcha'],
    availability: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'],
    ageGroupPreference: '3-5 yosh (Kichkintoylar)',
    ageGroupPreference_uz: '3-5 yosh (Kichkintoylar)',
    ageGroupPreference_en: '3-5 years old (Toddlers)',
    ageGroupPreference_ru: '3-5 лет (Малыши)',
    isVerified: true,
    certificates: [
      'Maktabgacha Ta\'lim Mutaxassisligi Diplomi',
      'Nutq o\'stirish va logopediya boshlang\'ich kursi sertifikati'
    ],
    certificates_uz: [
      'Maktabgacha Ta\'lim Mutaxassisligi Diplomi',
      'Nutq o\'stirish va logopediya boshlang\'ich kursi sertifikati'
    ],
    certificates_en: [
      'Preschool Education Specialist Diploma',
      'Speech Development & Basic Speech Therapy Course Certificate'
    ],
    certificates_ru: [
      'Диплом специалиста дошкольного образования',
      'Сертификат начального курса развития речи и логопедии'
    ],
    recommendations: [
      'Malika D.: "Farzandimiz Shaxnoza bilan bir oyda inglizcha harflar va qo\'shiqlarni to\'liq o\'rganib oldi. Juda kreativ qiz."',
      'Zarina X.: "O\'yin shaklidagi darslari qizimga juda yoqadi, telefon o\'rniga foydali o\'yinlar o\'ynashni o\'rgatdi."'
    ],
    recommendations_uz: [
      'Malika D.: "Farzandimiz Shaxnoza bilan bir oyda inglizcha harflar va qo\'shiqlarni to\'liq o\'rganib oldi. Juda kreativ qiz."',
      'Zarina X.: "O\'yin shaklidagi darslari qizimga juda yoqadi, telefon o\'rniga foydali o\'yinlar o\'ynashni o\'rgatdi."'
    ],
    recommendations_en: [
      'Malika D.: "In just one month with Shaxnoza, our child fully learned English letters and songs. Very creative girl."',
      'Zarina X.: "My daughter loves her play-based lessons; she taught her to play useful games instead of using the phone."'
    ],
    recommendations_ru: [
      'Малика Д.: "Наш ребенок за один месяц с Шахнозой полностью выучил английские буквы и песни. Очень творческая девушка."',
      'Зарина Х.: "Моей дочери очень нравятся ее игровые занятия, она научила ее полезным играм вместо телефона."'
    ],
    poster: {
      name: 'KIDDOO Premium',
      avatar: nannyShaxnoza,
      role: 'Sifat nazorati',
      role_uz: 'Sifat nazorati',
      role_en: 'Quality Control',
      role_ru: 'Контроль качества',
      listingsCount: 220,
      callsCount: 3450
    },
    reviews: [
      {
        id: 'r3',
        authorName: 'Sardor Mirzayev',
        authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
        rating: 5,
        comment: 'Bolalarni zeriktirmaydigan, doim energiya bilan to\'la enaga. Juda mamnunmiz.',
        comment_uz: 'Bolalarni zeriktirmaydigan, doim energiya bilan to\'la enaga. Juda mamnunmiz.',
        comment_en: 'A nanny full of energy who never lets children get bored. We are very satisfied.',
        comment_ru: 'Няня, полная энергии, которая никогда не дает детям скучать. Мы очень довольны.',
        date: '18.06.2026'
      }
    ]
  },
  {
    id: '3',
    name: 'Sevara Qodirova',
    category: Category.SCHOOL,
    rating: 4.7,
    reviewsCount: 12,
    hourlyRate: 35000,
    experienceYears: 4,
    location: {
      lat: 41.3256,
      lng: 69.3142,
      address: 'Toshkent shahri, Mirzo Ulug\'bek tumani, Buyuk Ipak Yo\'li, 88',
      city: 'Toshkent',
      address_uz: 'Toshkent shahri, Mirzo Ulug\'bek tumani, Buyuk Ipak Yo\'li, 88',
      address_en: '88 Buyuk Ipak Yoli, Mirzo Ulugbek District, Tashkent City',
      address_ru: 'г. Ташкент, Мирзо-Улугбекский район, Буюк Ипак Йули, 88',
      city_uz: 'Toshkent',
      city_en: 'Tashkent',
      city_ru: 'Ташкент'
    },
    images: [
      nannySevara, // Sitter photo (youthful friendly Central Asian girl)
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800', // Mind game
      'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&q=80&w=800', // Helping with homework
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800', // Bedtime stories
      'https://images.unsplash.com/photo-1536640712247-3a530dbb31f2?auto=format&fit=crop&q=80&w=800'  // Painting outdoors
    ],
    bio: 'Men maktab yoshidagi bolalarga uy vazifalarini bajarishda yordamlashaman, ingliz va rus tillarini o\'rgataman. Maktabdan kutib olish va to\'garaklarga kuzatib borish xizmati ham mavjud. Oila va bola psixologiyasi bo\'yicha malakam bor.',
    bio_uz: 'Men maktab yoshidagi bolalarga uy vazifalarini bajarishda yordamlashaman, ingliz va rus tillarini o\'rgataman. Maktabdan kutib olish va to\'garaklarga kuzatib borish xizmati ham mavjud. Oila va bola psixologiyasi bo\'yicha malakam bor.',
    bio_en: 'I help school-age children with their homework and teach them English and Russian. Pick-up from school and guidance to extracurricular clubs are also available. I am qualified in family and child psychology.',
    bio_ru: 'Я помогаю детям школьного возраста делать домашние задания, обучаю английскому и русскому языкам. Также доступна услуга встречи из школы и сопровождения в кружки. Имею квалификацию по семейной и детской психологии.',
    phone: '+998 91 770 44 55',
    languages: ['O\'zbekcha', 'Ruscha', 'Inglizcha'],
    availability: ['Dushanba', 'Chorshanba', 'Juma'],
    ageGroupPreference: '6+ yosh (Maktab yoshi)',
    ageGroupPreference_uz: '6+ yosh (Maktab yoshi)',
    ageGroupPreference_en: '6+ years old (School age)',
    ageGroupPreference_ru: '6+ лет (Школьный возраст)',
    isVerified: true,
    certificates: [
      'Ingliz tili IELTS 7.5 Sertifikati',
      'Amaliy psixologiya va kognitiv rivojlanish kursi'
    ],
    certificates_uz: [
      'Ingliz tili IELTS 7.5 Sertifikati',
      'Amaliy psixologiya va kognitiv rivojlanish kursi'
    ],
    certificates_en: [
      'English IELTS 7.5 Certificate',
      'Applied Psychology & Cognitive Development Course'
    ],
    certificates_ru: [
      'Сертификат английского языка IELTS 7.5',
      'Курс практической психологии и когнитивного развития'
    ],
    recommendations: [
      'Elena G.: "Sevara qizimning matematika va ingliz tilidan darslarini juda yaxshilab berdi. Baholari ancha ko\'tarildi."',
      'Umidjon S.: "Juda xushmuomala va vaqtida keladigan qiz. To\'garaklarga har doim xavfsiz olib borib keladi."'
    ],
    recommendations_uz: [
      'Elena G.: "Sevara qizimning matematika va ingliz tilidan darslarini juda yaxshilab berdi. Baholari ancha ko\'tarildi."',
      'Umidjon S.: "Juda xushmuomala va vaqtida keladigan qiz. To\'garaklarga har doim xavfsiz olib borib keladi."'
    ],
    recommendations_en: [
      'Elena G.: "Sevara tutored my daughter in math and English exceptionally well. Her grades improved significantly."',
      'Umidjon S.: "Very polite and punctual girl. Always brings and returns our child safely to/from extracurricular activities."'
    ],
    recommendations_ru: [
      'Елена Г.: "Севара отлично подтянула мою дочь по математике и английскому. Оценки заметно выросли."',
      'Умиджон С.: "Очень вежливая и пунктуальная девушка. Всегда безопасно водит и забирает ребенка из кружков."'
    ],
    poster: {
      name: 'Sevara (Mustaqil)',
      avatar: nannySevara,
      role: 'Mustaqil Enaga',
      role_uz: 'Mustaqil Enaga',
      role_en: 'Independent Sitter',
      role_ru: 'Частная няня',
      listingsCount: 1,
      callsCount: 92
    },
    reviews: [
      {
        id: 'r4',
        authorName: 'Nigora Yo\'ldosheva',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100',
        rating: 4.7,
        comment: 'Dars tayyorlatishda va intizomda juda qattiqqo\'l, lekin bolaga juda mehribon enaga.',
        comment_uz: 'Dars tayyorlatishda va intizomda juda qattiqqo\'l, lekin bolaga juda mehribon enaga.',
        comment_en: 'Very strict with homework and discipline, but a very affectionate nanny to the child.',
        comment_ru: 'Очень строгая в приготовлении уроков и дисциплине, но очень добрая к ребенку няня.',
        date: '10.06.2026'
      }
    ]
  },
  {
    id: '4',
    name: 'Dilnoza Karimova',
    category: Category.SPECIAL,
    rating: 5.0,
    reviewsCount: 35,
    hourlyRate: 60000,
    experienceYears: 8,
    location: {
      lat: 41.2825,
      lng: 69.2136,
      address: 'Toshkent shahri, Yakkasaroy tumani, Shota Rustaveli ko\'chasi, 19',
      city: 'Toshkent',
      address_uz: 'Toshkent shahri, Yakkasaroy tumani, Shota Rustaveli ko\'chasi, 19',
      address_en: '19 Shota Rustaveli Street, Yakkasaroy District, Tashkent City',
      address_ru: 'г. Ташкент, Яккасарайский район, улица Шота Руставели, 19',
      city_uz: 'Toshkent',
      city_en: 'Tashkent',
      city_ru: 'Ташкент'
    },
    images: [
      nannyDilnoza, // Sitter photo (smiling Central Asian female doctor/professional)
      'https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=800', // Music play
      'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&q=80&w=800', // Logic puzzles
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800', // Medical support
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800'  // Happy walk
    ],
    bio: 'Men oliy tibbiy (pediatriya) va logopedik ma\'lumotga ega professional enagaman. Autizm, Daun sindromi, nutqida nuqsoni bor bo\'lgan yoki alohida tibbiy parvarishga muhtoj bolalar bilan ishlashda 8 yillik tajribaga egaman.',
    bio_uz: 'Men oliy tibbiy (pediatriya) va logopedik ma\'lumotga ega professional enagaman. Autizm, Daun sindromi, nutqida nuqsoni bor bo\'lgan yoki alohida tibbiy parvarishga muhtoj bolalar bilan ishlashda 8 yillik tajribaga egaman.',
    bio_en: 'I am a professional babysitter with higher medical (pediatrics) and speech therapy education. I have 8 years of experience working with children with autism, Down syndrome, speech impediments, or those who need special medical care.',
    bio_ru: 'Я профессиональная няня с высшим медицинским (педиатрическим) и логопедическим образованием. У меня 8 лет опыта работы с детьми с аутизмом, синдромом Дауна, нарушениями речи или нуждающимися в особом медицинском уходе.',
    phone: '+998 90 318 77 99',
    languages: ['O\'zbekcha', 'Ruscha', 'Inglizcha'],
    availability: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'],
    ageGroupPreference: 'Barcha yoshdagilar (Maxsus ehtiyojli)',
    ageGroupPreference_uz: 'Barcha yoshdagilar (Maxsus ehtiyojli)',
    ageGroupPreference_en: 'All ages (Special needs)',
    ageGroupPreference_ru: 'Все возрасты (Особые потребности)',
    isVerified: true,
    certificates: [
      'Toshkent Pediatriya Tibbiyot Instituti Diplomi',
      'Klinik Logopediya va Reabilitatsiya Sertifikati',
      'Defektologiya bo\'yicha maxsus pedagogika kursi'
    ],
    certificates_uz: [
      'Toshkent Pediatriya Tibbiyot Instituti Diplomi',
      'Klinik Logopediya va Reabilitatsiya Sertifikati',
      'Defektologiya bo\'yicha maxsus pedagogika kursi'
    ],
    certificates_en: [
      'Tashkent Pediatric Medical Institute Diploma',
      'Clinical Speech Therapy & Rehabilitation Certificate',
      'Special Pedagogy Course in Defectology'
    ],
    certificates_ru: [
      'Диплом Ташкентского педиатрического медицинского института',
      'Сертификат клинической логопедии и реабилитации',
      'Курс специальной педагогики по дефектологии'
    ],
    recommendations: [
      'Dr. Natalya S.: "Dilnoza professional tibbiy enaga hisoblanadi. Murakkab vaziyatlarda tezkor va sovuqqon qaror qabul qila oladi."',
      'Farrux K.: "O\'g\'limizning nutq rivojlanishida va jismoniy mashg\'ulotlarida Dilnozaning yordami beqiyos bo\'ldi."'
    ],
    recommendations_uz: [
      'Dr. Natalya S.: "Dilnoza professional tibbiy enaga hisoblanadi. Murakkab vaziyatlarda tezkor va sovuqqon qaror qabul qila oladi."',
      'Farrux K.: "O\'g\'limizning nutq rivojlanishida va jismoniy mashg\'ulotlarida Dilnozaning yordami beqiyos bo\'ldi."'
    ],
    recommendations_en: [
      'Dr. Natalya S.: "Dilnoza is a professional medical nurse. She is capable of making swift and calm decisions in complex situations."',
      'Farrux K.: "Dilnoza\'s help in our son\'s speech development and physical exercises was invaluable."'
    ],
    recommendations_ru: [
      'Др. Наталья С.: "Дильноза является профессиональной медицинской няней. Способна принимать оперативные и хладнокровные решения в сложных ситуациях."',
      'Фаррух К.: "Помощь Дильнозы в развитии речи и физических упражнениях нашего сына была неоценимой."'
    ],
    poster: {
      name: 'MedSitter Toshkent',
      avatar: nannyDilnoza,
      role: 'Tibbiy Koordinatsiya',
      role_uz: 'Tibbiy Koordinatsiya',
      role_en: 'Medical Coordination',
      role_ru: 'Медицинская координация',
      listingsCount: 45,
      callsCount: 890
    },
    reviews: [
      {
        id: 'r5',
        authorName: 'Malika Ivanova',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100',
        rating: 5,
        comment: 'Dilnoza shunchaki mo\'jiza! Farzandimizning barcha injiqliklarini yengib, uni tartibga o\'rgatdi. Oliy toifali shifokordek g\'amxo\'r.',
        comment_uz: 'Dilnoza shunchaki mo\'jiza! Farzandimizning barcha injiqliklarini yengib, uni tartibga o\'rgatdi. Oliy toifali shifokordek g\'amxo\'r.',
        comment_en: 'Dilnoza is simply a miracle! She overcame all of our child\'s tantrums and taught them order. Caring like a top-tier doctor.',
        comment_ru: 'Дильноза — просто чудо! Справилась со всеми капризами нашего ребенка и приучила к порядку. Заботливая, как первоклассный врач.',
        date: '25.06.2026'
      }
    ]
  },
  {
    id: '5',
    name: 'Nargiza Fayziyeva',
    category: Category.BABY,
    rating: 4.95,
    reviewsCount: 14,
    hourlyRate: 40000,
    experienceYears: 6,
    location: {
      lat: 41.2750,
      lng: 69.2050,
      address: 'Toshkent shahri, Chilonzor tumani, Bunyodkor shoh ko\'chasi, 28-uy',
      city: 'Toshkent',
      address_uz: 'Toshkent shahri, Chilonzor tumani, Bunyodkor shoh ko\'chasi, 28-uy',
      address_en: '28 Bunyodkor Avenue, Chilonzor District, Tashkent City',
      address_ru: 'г. Ташкент, Чиланзарский район, проспект Бунёдкор, дом 28',
      city_uz: 'Toshkent',
      city_en: 'Tashkent',
      city_ru: 'Ташкент'
    },
    images: [
      nannyNargiza, // Sitter photo (professional smiling Asian woman)
      'https://images.unsplash.com/photo-1519689680058-324335c77ebe?auto=format&fit=crop&q=80&w=800', // Baby massage
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'  // Baby feeding
    ],
    bio: 'Assalomu alaykum! Men Nargizaman, bolalarni, ayniqsa chaqaloqlarni juda yaxshi ko\'raman. Tibbiy bilimga egaman (o\'rta maxsus hamshiralik kollejini bitirganman). Chaqaloqlarni cho\'miltirish, massaj qilish va emizikli onalarga maslahat berish borasida yordam beraman.',
    bio_uz: 'Assalomu alaykum! Men Nargizaman, bolalarni, ayniqsa chaqaloqlarni juda yaxshi ko\'raman. Tibbiy bilimga egaman (o\'rta maxsus hamshiralik kollejini bitirganman). Chaqaloqlarni cho\'miltirish, massaj qilish va emizikli onalarga maslahat berish borasida yordam beraman.',
    bio_en: 'Hello! I am Nargiza, I love children, especially infants. I have medical knowledge (graduated from nursing college). I help with bathing infants, massaging, and counseling breastfeeding mothers.',
    bio_ru: 'Здравствуйте! Я Наргиза, очень люблю детей, особенно младенцев. Имею медицинские знания (окончила колледж сестринского дела). Помогаю купать младенцев, делать массаж и консультировать кормящих мам.',
    phone: '+998 90 123 77 11',
    languages: ['O\'zbekcha', 'Ruscha'],
    availability: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma'],
    ageGroupPreference: '0-2 yosh (Chaqaloqlar)',
    ageGroupPreference_uz: '0-2 yosh (Chaqaloqlar)',
    ageGroupPreference_en: '0-2 years old (Infants)',
    ageGroupPreference_ru: '0-2 года (Младенцы)',
    isVerified: true,
    certificates: [
      'Hamshiralik ishi bo\'yicha diplom (Toshkent tibbiyot kolleji)',
      'Bolalar massaji va jismoniy reabilitatsiyasi sertifikati'
    ],
    certificates_uz: [
      'Hamshiralik ishi bo\'yicha diplom (Toshkent tibbiyot kolleji)',
      'Bolalar massaji va jismoniy reabilitatsiyasi sertifikati'
    ],
    certificates_en: [
      'Nursing Diploma (Tashkent Medical College)',
      'Pediatric Massage & Physical Rehabilitation Certificate'
    ],
    certificates_ru: [
      'Диплом сестринского дела (Ташкентский медицинский колледж)',
      'Сертификат детского массажа и физической реабилитации'
    ],
    recommendations: [
      'Diyora M.: "Nargiza chaqalog\'imiz tug\'ilgan kundan boshlab uydagi eng katta yordamchimiz bo\'ldi. Chaqaloqni to\'g\'ri parvarishlashni o\'rgatdi."'
    ],
    recommendations_uz: [
      'Diyora M.: "Nargiza chaqalog\'imiz tug\'ilgan kundan boshlab uydagi eng katta yordamchimiz bo\'ldi. Chaqaloqni to\'g\'ri parvarishlashni o\'rgatdi."'
    ],
    recommendations_en: [
      'Diyora M.: "Nargiza has been our biggest helper at home since the day our baby was born. She taught us how to properly care for the infant."'
    ],
    recommendations_ru: [
      'Диёра М.: "Наргиза была нашей главной помощницей дома со дня рождения малыша. Научила нас правильному уходу за новорожденным."'
    ],
    poster: {
      name: 'Nargiza (Mustaqil)',
      avatar: nannyNargiza,
      role: 'Mustaqil Enaga',
      role_uz: 'Mustaqil Enaga',
      role_en: 'Independent Sitter',
      role_ru: 'Частная няня',
      listingsCount: 1,
      callsCount: 48
    },
    reviews: [
      {
        id: 'r6',
        authorName: 'Gulnoza Saidova',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
        rating: 5,
        comment: 'Juda samimiy, har doim ozoda va gigiyenaga qattiq rioya qiladigan ajoyib hamshira va enaga!',
        comment_uz: 'Juda samimiy, har doim ozoda va gigiyenaga qattiq rioya qiladigan ajoyib hamshira va enaga!',
        comment_en: 'Very sincere, always clean, and strictly adheres to hygiene. An excellent nurse and nanny!',
        comment_ru: 'Очень искренняя, всегда чистая и строго соблюдающая гигиену чудесная медсестра и няня!',
        date: '18.06.2026'
      }
    ]
  },
  {
    id: '6',
    name: 'Zilola Baxtiyorova',
    category: Category.TODDLER,
    rating: 4.9,
    reviewsCount: 22,
    hourlyRate: 37000,
    experienceYears: 4,
    location: {
      lat: 41.3615,
      lng: 69.2910,
      address: 'Toshkent shahri, Yunusobod tumani, Amir Temur ko\'chasi, 102-uy',
      city: 'Toshkent',
      address_uz: 'Toshkent shahri, Yunusobod tumani, Amir Temur ko\'chasi, 102-uy',
      address_en: '102 Amir Temur Street, Yunusobod District, Tashkent City',
      address_ru: 'г. Ташкент, Юнусабадский район, улица Амира Темура, дом 102',
      city_uz: 'Toshkent',
      city_en: 'Tashkent',
      city_ru: 'Ташкент'
    },
    images: [
      nannyZilola, // Sitter photo (youthful smiling Central Asian girl)
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800', // Playing games
      'https://images.unsplash.com/photo-1537655780520-1e392edd816a?auto=format&fit=crop&q=80&w=800'  // Educational activities
    ],
    bio: 'Salom! Men Zilolaman. Hozirda Nizomiy nomidagi Toshkent davlat pedagogika universitetida maktabgacha ta\'lim yo\'nalishida o\'qiyman. Bolalar bilan turli xil mantiqiy va ijodiy o\'yinlar o\'ynash, rasm chizish, ertaklar aytish orqali ularning til va muloqot ko\'nikmalarini rivojlantiraman.',
    bio_uz: 'Salom! Men Zilolaman. Hozirda Nizomiy nomidagi Toshkent davlat pedagogika universitetida maktabgacha ta\'lim yo\'nalishida o\'qiyman. Bolalar bilan turli xil mantiqiy va ijodiy o\'yinlar o\'ynash, rasm chizish, ertaklar aytish orqali ularning til va muloqot ko\'nikmalarini rivojlantiraman.',
    bio_en: 'Hello! I am Zilola. I am currently studying Preschool Education at Tashkent State Pedagogical University named after Nizami. I develop children\'s language and communication skills by playing logical and creative games, drawing, and telling fairy tales.',
    bio_ru: 'Привет! Я Зилола. Сейчас учусь на факультете дошкольного образования в Ташкентском государственном педагогическом университете имени Низами. Развиваю языковые и коммуникативные навыки детей с помощью логических и творческих игр, рисования и сказок.',
    phone: '+998 93 333 44 55',
    languages: ['O\'zbekcha', 'Inglizcha'],
    availability: ['Seshanba', 'Payshanba', 'Shanba', 'Yakshanba'],
    ageGroupPreference: '3-5 yosh (Kichkintoylar)',
    ageGroupPreference_uz: '3-5 yosh (Kichkintoylar)',
    ageGroupPreference_en: '3-5 years old (Toddlers)',
    ageGroupPreference_ru: '3-5 лет (Малыши)',
    isVerified: true,
    certificates: [
      'TDPU Talabasi (Maktabgacha Ta\'lim)',
      'Bolalar psixologiyasi va nutqini rivojlantirish kursi sertifikati'
    ],
    certificates_uz: [
      'TDPU Talabasi (Maktabgacha Ta\'lim)',
      'Bolalar psixologiyasi va nutqini rivojlantirish kursi sertifikati'
    ],
    certificates_en: [
      'TDPU Student (Preschool Education)',
      'Child Psychology & Speech Development Course Certificate'
    ],
    certificates_ru: [
      'Студент ТГПУ (Дошкольное образование)',
      'Сертификат курса детской психологии и развития речи'
    ],
    recommendations: [
      'Shahzoda K.: "Zilola bolajonlarni juda tez o\'ziga jalb qiladi. Qizim uning kelishini intiqlik bilan kutadi."'
    ],
    recommendations_uz: [
      'Shahzoda K.: "Zilola bolajonlarni juda tez o\'ziga jalb qiladi. Qizim uning kelishini intiqlik bilan kutadi."'
    ],
    recommendations_en: [
      'Shahzoda K.: "Zilola engages children very quickly. My daughter eagerly awaits her arrival."'
    ],
    recommendations_ru: [
      'Шахзода К.: "Зилола очень быстро располагает к себе детей. Дочка с нетерпением ждет ее прихода."'
    ],
    poster: {
      name: 'Zilola (Mustaqil)',
      avatar: nannyZilola,
      role: 'Mustaqil Enaga',
      role_uz: 'Mustaqil Enaga',
      role_en: 'Independent Sitter',
      role_ru: 'Частная няня',
      listingsCount: 1,
      callsCount: 82
    },
    reviews: [
      {
        id: 'r7',
        authorName: 'Laylo Axmedova',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100',
        rating: 5,
        comment: 'Bolani telefondan uzoqlashtirishda Zilolaning o\'yinlari juda qo\'l keldi. Tavsiya qilaman!',
        comment_uz: 'Bolani telefondan uzoqlashtirishda Zilolaning o\'yinlari juda qo\'l keldi. Tavsiya qilaman!',
        comment_en: 'Zilola\'s games were extremely helpful in distancing the child from phones. Highly recommended!',
        comment_ru: 'Игры Зилолы очень помогли отвлечь ребенка от телефона. Рекомендую!',
        date: '22.06.2026'
      }
    ]
  },
  {
    id: '7',
    name: 'Kamola Rustamova',
    category: Category.SCHOOL,
    rating: 4.85,
    reviewsCount: 17,
    hourlyRate: 45000,
    experienceYears: 5,
    location: {
      lat: 41.3010,
      lng: 69.2680,
      address: 'Toshkent shahri, Mirobod tumani, Nukus ko\'chasi, 48-uy',
      city: 'Toshkent',
      address_uz: 'Toshkent shahri, Mirobod tumani, Nukus ko\'chasi, 48-uy',
      address_en: '48 Nukus Street, Mirabad District, Tashkent City',
      address_ru: 'г. Ташкент, Мирабадский район, улица Нукусская, дом 48',
      city_uz: 'Toshkent',
      city_en: 'Tashkent',
      city_ru: 'Ташкент'
    },
    images: [
      nannyKamola, // Sitter photo (smiling female portrait)
      'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&q=80&w=800', // Homework help
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'  // Tutoring
    ],
    bio: 'Men ingliz tili va matematika o\'qituvchisiman. Maktab yoshidagi bolalaringizni maktabdan kutib olib, ularga uy vazifalarini sifatli va tushunarli tarzda bajarishga yordamlashaman. Shuningdek, ularni til kurslariga va to\'garaklarga xavfsiz olib borib kelaman.',
    bio_uz: 'Men ingliz tili va matematika o\'qituvchisiman. Maktab yoshidagi bolalaringizni maktabdan kutib olib, ularga uy vazifalarini sifatli va tushunarli tarzda bajarishga yordamlashaman. Shuningdek, ularni til kurslariga va to\'garaklarga xavfsiz olib borib kelaman.',
    bio_en: 'I am an English and math teacher. I pick up your school-age children from school and help them complete their homework in a high-quality and understandable way. I also safely accompany them to language courses and extracurricular activities.',
    bio_ru: 'Я учитель английского языка и математики. Забираю ваших детей школьного возраста из школы и помогаю им качественно и понятно выполнять домашние задания. Также безопасно сопровождаю их на языковые курсы и кружки.',
    phone: '+998 94 999 88 77',
    languages: ['O\'zbekcha', 'Ruscha', 'Inglizcha'],
    availability: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'],
    ageGroupPreference: '6+ yosh (Maktab yoshi)',
    ageGroupPreference_uz: '6+ yosh (Maktab yoshi)',
    ageGroupPreference_en: '6+ years old (School age)',
    ageGroupPreference_ru: '6+ лет (Школьный возраст)',
    isVerified: true,
    certificates: [
      'Ingliz tili filologiyasi diplomi (O\'zDJTU)',
      'IELTS 7.0 va C1 daraja sertifikati'
    ],
    certificates_uz: [
      'Ingliz tili filologiyasi diplomi (O\'zDJTU)',
      'IELTS 7.0 va C1 daraja sertifikati'
    ],
    certificates_en: [
      'English Philology Diploma (UzSWLU)',
      'IELTS 7.0 & C1 Level Certificate'
    ],
    certificates_ru: [
      'Диплом английской филологии (УзГУМЯ)',
      'Сертификат IELTS 7.0 и уровня C1'
    ],
    recommendations: [
      'Sardor B.: "O\'g\'limizning maktabdagi baholari ancha yaxshilandi, dars qilishga bo\'lgan qiziqishi oshdi. Kamolaxon juda yaxshi ustoz."'
    ],
    recommendations_uz: [
      'Sardor B.: "O\'g\'limizning maktabdagi baholari ancha yaxshilandi, dars qilishga bo\'lgan qiziqishi oshdi. Kamolaxon juda yaxshi ustoz."'
    ],
    recommendations_en: [
      'Sardor B.: "Our son\'s school grades improved significantly, and his interest in studying increased. Kamola is an excellent teacher."'
    ],
    recommendations_ru: [
      'Сардор Б.: "Оценки нашего сына в школе заметно улучшились, вырос интерес к учебе. Камола — отличный учитель."'
    ],
    poster: {
      name: 'Kamola (Mustaqil)',
      avatar: nannyKamola,
      role: 'Oila repetitori',
      role_uz: 'Oila repetitori',
      role_en: 'Family Tutor',
      role_ru: 'Семейный репетитор',
      listingsCount: 1,
      callsCount: 65
    },
    reviews: [
      {
        id: 'r8',
        authorName: 'Nilufar Umarova',
        authorAvatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=100',
        rating: 4.8,
        comment: 'Darslarni tushuntirish mahorati juda yuqori. Ingliz tilini noldan boshlab qisqa muddatda o\'rgatib qo\'ydi.',
        comment_uz: 'Darslarni tushuntirish mahorati juda yuqori. Ingliz tilini noldan boshlab qisqa muddatda o\'rgatib qo\'ydi.',
        comment_en: 'Her ability to explain lessons is superb. She taught English from scratch in a very short time.',
        comment_ru: 'Ее умение объяснять уроки на высоте. Обучила английскому с нуля за короткий срок.',
        date: '14.06.2026'
      }
    ]
  },
  {
    id: '8',
    name: 'Umida To\'rayeva',
    category: Category.SPECIAL,
    rating: 5.0,
    reviewsCount: 29,
    hourlyRate: 55000,
    experienceYears: 7,
    location: {
      lat: 41.2890,
      lng: 69.1820,
      address: 'Toshkent shahri, Uchtepa tumani, Lutfiy ko\'chasi, 14-uy',
      city: 'Toshkent',
      address_uz: 'Toshkent shahri, Uchtepa tumani, Lutfiy ko\'chasi, 14-uy',
      address_en: '14 Lutfiy Street, Uchtepa District, Tashkent City',
      address_ru: 'г. Ташкент, Учтепинский район, улица Лутфи, дом 14',
      city_uz: 'Toshkent',
      city_en: 'Tashkent',
      city_ru: 'Ташкент'
    },
    images: [
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800', // Sitter photo (smiling Central Asian medical/professional woman)
      'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=800', // Professional interaction
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&q=80&w=800'  // Safe walk
    ],
    bio: 'Men professional logoped-defektolog va bolalar massajichisiman. Alaliya, dizartriya va boshqa nutq nuqsonlari bor bolalar bilan alohida dastur asosida shug\'ullanaman. Nutqni rivojlantiruvchi maxsus logopedik massaj xizmati ham mavjud.',
    bio_uz: 'Men professional logoped-defektolog va bolalar massajichisiman. Alaliya, dizartriya va boshqa nutq nuqsonlari bor bolalar bilan alohida dastur asosida shug\'ullanaman. Nutqni rivojlantiruvchi maxsus logopedik massaj xizmati ham mavjud.',
    bio_en: 'I am a professional speech therapist-defectologist and pediatric massage therapist. I work on an individual program with children having alalia, dysarthria, and other speech impediments. Special logopedic massage for speech development is also available.',
    bio_ru: 'Я профессиональный логопед-дефектолог и детский массажист. Занимаюсь по индивидуальной программе с детьми с алалией, дизартрией и другими дефектами речи. Также доступна услуга специального логопедического массажа для развития речи.',
    phone: '+998 90 777 33 22',
    languages: ['O\'zbekcha', 'Ruscha'],
    availability: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma'],
    ageGroupPreference: 'Barcha yoshdagilar (Maxsus ehtiyojli)',
    ageGroupPreference_uz: 'Barcha yoshdagilar (Maxsus ehtiyojli)',
    ageGroupPreference_en: 'All ages (Special needs)',
    ageGroupPreference_ru: 'Все возрасты (Особые потребности)',
    isVerified: true,
    certificates: [
      'Defektologiya va Logopediya mutaxassisligi diplomi (TDPU)',
      'Bolalar logopedik massaji bo\'yicha malaka oshirish sertifikati'
    ],
    certificates_uz: [
      'Defektologiya va Logopediya mutaxassisligi diplomi (TDPU)',
      'Bolalar logopedik massaji bo\'yicha malaka oshirish sertifikati'
    ],
    certificates_en: [
      'Special Education & Speech Therapy Specialization Diploma (TDPU)',
      'Pediatric Logopedic Massage Advanced Training Certificate'
    ],
    certificates_ru: [
      'Диплом дефектологии и логопедии (ТГПУ)',
      'Сертификат повышения квалификации по детскому логопедическому массажу'
    ],
    recommendations: [
      'Mohira S.: "Umidaning mashg\'ulotlaridan so\'ng o\'g\'limiz 4 yoshida gapira boshladi. Haqiqiy o\'z kasbining ustasi!"'
    ],
    recommendations_uz: [
      'Mohira S.: "Umidaning mashg\'ulotlaridan so\'ng o\'g\'limiz 4 yoshida gapira boshladi. Haqiqiy o\'z kasbining ustasi!"'
    ],
    recommendations_en: [
      'Mohira S.: "After Umida\'s sessions, our son started speaking at 4 years old. A true master of her craft!"'
    ],
    recommendations_ru: [
      'Мохира С.: "После занятий с Умидой наш сын заговорил в 4 года. Настоящий мастер своего дела!"'
    ],
    poster: {
      name: 'Umida (Mustaqil)',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100',
      role: 'Logoped-Defektolog',
      role_uz: 'Logoped-Defektolog',
      role_en: 'Speech Therapist',
      role_ru: 'Логопед-дефектолог',
      listingsCount: 2,
      callsCount: 112
    },
    reviews: [
      {
        id: 'r9',
        authorName: 'Zamira Qosimova',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100',
        rating: 5,
        comment: 'Bolamizning nutqini o\'stirishdagi xizmatlari beqiyos. Juda samimiy va bolajon inson.',
        comment_uz: 'Bolamizning nutqini o\'stirishdagi xizmatlari beqiyos. Juda samimiy va bolajon inson.',
        comment_en: 'Her service in developing our child\'s speech is unparalleled. A very sincere and child-loving person.',
        comment_ru: 'Ее заслуги в развитии речи нашего ребенка неоценимы. Очень искренний и любящий детей человек.',
        date: '20.06.2026'
      }
    ]
  }
];

export const SAMPLE_AD_PRODUCTS: ProductAd[] = [
  {
    id: 'ad1',
    title: 'Kreativ Montessori Yog\'och O\'yinchoqlari',
    category: 'O\'yinchoqlar',
    price: 185000,
    image: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&q=80&w=500',
    description: 'Bolaning mantiqiy fikrlashi va sensor qobiliyatlarini rivojlantiruvchi, ekologik toza tabiiy yog\'ochdan tayyorlangan o\'yinchoqlar to\'plami. 1 yoshdan 5 yoshgacha mos keladi.',
    phone: '+998 90 900 11 22',
    postedBy: 'Kidtoy Do\'koni',
    isPromo: true
  },
  {
    id: 'ad2',
    title: 'Bolalar uchun ingliz tili "Happy Kids" Markazi',
    category: 'Ta\'lim',
    price: 450000,
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=500',
    description: 'Interaktiv o\'yinlar, qo\'shiqlar va chet ellik o\'qituvchilar yordamida bolangiz uchun ajoyib ingliz tili dunyosi. Haftada 3 marta, qulay vaqtda darslar.',
    phone: '+998 71 200 88 99',
    postedBy: 'Happy Kids Academy',
    isPromo: true
  },
  {
    id: 'ad3',
    title: 'Yumshoq Organik Paxtadan Chaqaloq Kiyimlari',
    category: 'Chaqaloqlar',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=500',
    description: '100% tabiiy paxtadan tikilgan, terlatmaydigan va allergik reaksiyalar bermaydigan sifatli chaqaloqlar bodilari va kiyimlari. Turli o\'lchamlarda mavjud.',
    phone: '+998 97 444 55 66',
    postedBy: 'SoftBaby Uzbekistan',
    isPromo: false
  },
  {
    id: 'ad4',
    title: 'Bolalar salomatligi kompleksi "Healthy Child"',
    category: 'Sog\'liqni saqlash',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=500',
    description: 'Pediatr ko\'rigi, ortoped konsultatsiyasi, bolalar massaji va vitaminlar muvozanatini aniqlash xizmatlari jamlangan maxsus sog\'lomlashtirish paketi.',
    phone: '+998 71 140 00 11',
    postedBy: 'Medion Family Clinic',
    isPromo: true
  },
  {
    id: 'ad5',
    title: 'Ergonomik Chaqaloq Kolyaskasi (Yurish uchun)',
    category: 'Chaqaloqlar',
    price: 1450000,
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=500',
    description: 'Yengil, oson buklanadigan va amortizatorli premium kolyaska. Chaqaloqning umurtqasini to\'g\'ri ushlab turadi, quyoshdan ishonchli himoya soyaboni bor.',
    phone: '+998 93 111 22 33',
    postedBy: 'Nigora Alimova',
    isPromo: false
  },
  {
    id: 'ad6',
    title: 'Lego Duplo - Mening Birinchi Hayvonlarim',
    category: 'O\'yinchoqlar',
    price: 320000,
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=500',
    description: 'Kichkintoylar uchun yirik detalli, xavfsiz va juda qiziqarli Lego konstruktori. Bolaning qo\'l motorikasi va tasavvurini rivojlantirish uchun ideal sovg\'a.',
    phone: '+998 90 456 78 90',
    postedBy: 'Lego Store Tashkent',
    isPromo: true
  },
  {
    id: 'ad7',
    title: 'Suv o\'tkazmaydigan Kuzgi-Bahorgi Kombinezon',
    category: 'Kiyimlar',
    price: 280000,
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&q=80&w=500',
    description: 'Yomg\'ir va shamoldan mukammal himoya qiladigan, ichi yumshoq momiqli (flis) zamonaviy kombinezon. 2 yoshdan 4 yoshgacha mos keladi.',
    phone: '+998 95 123 45 67',
    postedBy: 'Zarina X.',
    isPromo: false
  },
  {
    id: 'ad8',
    title: 'Mantiqiy Matematika va Mental Arifmetika To\'garagi',
    category: 'Ta\'lim',
    price: 380000,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=500',
    description: '5 yoshdan 10 yoshgacha bo\'lgan bolalar uchun tezkor hisoblash va mantiqiy fikrlash maktabi. Birinchi sinov darsi mutlaqo bepul! Haftada 2 marta.',
    phone: '+998 99 888 77 66',
    postedBy: 'Abacus Kids Center',
    isPromo: true
  },
  {
    id: 'ad9',
    title: 'Profilaktik Ortopedik Bolalar Oyoq Kiyimlari',
    category: 'Sog\'liqni saqlash',
    price: 250000,
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=500',
    description: 'Yassi oyoqlik (ploskostopiye) oldini oluvchi, tabiiy charmdan tayyorlangan va supinatorli sifatli poyabzallar. O\'lchamlari: 20-28 gacha.',
    phone: '+998 90 321 65 47',
    postedBy: 'Ortomedic Uz',
    isPromo: false
  },
  {
    id: 'ad10',
    title: 'Premium Elektr Beshik (Krovatka) va Shezlong',
    category: 'Chaqaloqlar',
    price: 950000,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=500',
    description: 'Avtomatik tebranish rejimiga ega, mayin musiqa va taymerli zamonaviy beshik-shezlong. Bluetooth boshqaruv pulti bor, chaqaloq tinch uxlashi uchun yordamchi.',
    phone: '+998 91 777 88 99',
    postedBy: 'Premium Kids',
    isPromo: true
  },
  {
    id: 'ad11',
    title: 'Yog\'ochli Katta Bizibord (Busyboard) Doskasi',
    category: 'O\'yinchoqlar',
    price: 195000,
    image: 'https://images.unsplash.com/photo-1537655780520-1e392edd816a?auto=format&fit=crop&q=80&w=500',
    description: 'Bolaning mayda motorikasi, mantiqiy fikrlashi va kundalik ko\'nikmalarini (tugmalar, qulflar, zanjirlar) o\'rgatuvchi katta interaktiv doska. Ekologik xavfsiz bo\'yoq.',
    phone: '+998 93 555 44 33',
    postedBy: 'Handmade Montessori',
    isPromo: false
  },
  {
    id: 'ad12',
    title: 'Premium Bayramona Bolalar Kostyum-Shimi',
    category: 'Kiyimlar',
    price: 350000,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=500',
    description: 'To\'ylar, bayramlar va tadbirlar uchun juda yarashiqli, yuqori sifatli turk matosidan tikilgan klassik kostyum-shim to\'plami. 4-6 yoshga juda mos keladi.',
    phone: '+998 94 666 55 44',
    postedBy: 'Turk_Kids_Fashion',
    isPromo: false
  },
  {
    id: 'ad13',
    title: 'Maktabga Tayyorlov va Logopedik Rivojlantirish',
    category: 'Ta\'lim',
    price: 400000,
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=500',
    description: '6 yoshli bolalarni maktabga professional darajada tayyorlash: o\'qish, yozish, matematika asoslari hamda nutq qusurlarini tuzatish bo\'yicha individual darslar.',
    phone: '+998 71 234 56 78',
    postedBy: 'Ziyo Maskani Edu',
    isPromo: true
  },
  {
    id: 'ad14',
    title: 'Professional Bolalar Massaji (Uyingizga borib)',
    category: 'Sog\'liqni saqlash',
    price: 150000,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77ebe?auto=format&fit=crop&q=80&w=500',
    description: 'Malakali mutaxassis tomonidan uyingizga borgan holda bolalar massaji (gipertonus, gipotoniya, krikosheya va h.k.) va davolash gimnastikasi mashqlari. Seansbay to\'lov.',
    phone: '+998 90 987 65 43',
    postedBy: 'Umida Axmedova (Hamshira)',
    isPromo: false
  },
  {
    id: 'ad15',
    title: 'O\'zbek va Rus tillaridagi Eng Sara Bolalar Ertaklari (10 talik to\'plam)',
    category: 'Ta\'lim',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=500',
    description: 'Bolangizning tasavvuri va so\'z boyligini oshiradigan rasmga boy, qattiq muqovali kitoblar to\'plami. Dunyo xalqlari va o\'zbek xalqining eng sehrli ertaklari jamlangan.',
    phone: '+998 90 123 45 67',
    postedBy: 'Ziyo Nashriyoti',
    isPromo: false
  },
  {
    id: 'ad16',
    title: 'Rivojlantiruvchi Geometrik Yog\'ochli Puzl-Sorter',
    category: 'O\'yinchoqlar',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=500',
    description: 'Yorqin rangli, mutlaqo ekologik xavfsiz tabiiy yog\'ochli geometrik shakllar sorteri. Bolaning mantiqiy fikrlashi, rang va shakllarni ajratish qobiliyatini kuchaytiradi.',
    phone: '+998 93 456 12 34',
    postedBy: 'Diyorbek S.',
    isPromo: false
  },
  {
    id: 'ad17',
    title: 'Qishki Issiq va Shamol O\'tkazmaydigan Kurtka',
    category: 'Kiyimlar',
    price: 340000,
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=500',
    description: 'Turkiyadan keltirilgan, ichi qalin momiq va mo\'ynali, mutlaqo sovuq o\'tkazmaydigan zamonaviy qishki kurtka. 3-5 yoshli o\'g\'il bolalarga juda yarashadi.',
    phone: '+998 97 777 55 44',
    postedBy: 'Nargiza A.',
    isPromo: false
  },
  {
    id: 'ad18',
    title: 'Kichkintoylar uchun Shifobaxsh Suvda Suzish (Aqua Kids)',
    category: 'Sog\'liqni saqlash',
    price: 500000,
    image: 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?auto=format&fit=crop&q=80&w=500',
    description: 'Professional murabbiylar nazorati ostida 1 yoshdan 6 yoshgacha bo\'lgan bolalar uchun shinam va doimo iliq basseynimizda suzish darslari. Jismoniy o\'sish uchun juda foydali.',
    phone: '+998 71 200 11 22',
    postedBy: 'AquaStar Center',
    isPromo: true
  },
  {
    id: 'ad19',
    title: 'Xavfsiz va Universal Bolalar Avtokreslosi (Isofix)',
    category: 'Chaqaloqlar',
    price: 850000,
    image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=500',
    description: 'Avtomobilda to\'liq xavfsiz sayohat qilish uchun 0 dan 36 kg gacha mo\'ljallangan universal avtokreslo. 360 darajaga aylanadi, qulay yotish rejimi mavjud.',
    phone: '+998 90 555 66 77',
    postedBy: 'Sherzod Mirzo',
    isPromo: false
  },
  {
    id: 'ad20',
    title: 'Tungi Chiroqli Ultratovushli Havo Namlantirgich',
    category: 'Sog\'liqni saqlash',
    price: 290000,
    image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=500',
    description: 'Bolalar xonasidagi quruq havodan xalos bo\'ling. Tungi rangli chiroq rejimiga ega, mutlaqo shovqinsiz ishlaydigan va xonaga yoqimli havo ulashuvchi uskunalar.',
    phone: '+998 99 444 88 00',
    postedBy: 'EcoLife Tashkent',
    isPromo: true
  }
];

export const SAMPLE_JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 'j1',
    childName: 'Jasurbek (2 yosh)',
    date: 'Bugun, 11:30',
    meals: 'Sutli kasha (200g), olma pyuresi (100g) - barchasini yaxshi ishtaha bilan edi.',
    sleep: 'Kunduzgi uyqu: 12:30 dan 14:30 gacha. Juda tinch va chuqur uxladi.',
    activities: 'Montessori kubiklari bilan piramida qurdi, rangli qalamlarda doiralar chizdi.',
    note: 'Jasurbek bugun juda quvnoq, tana harorati me\'yorda (36.6 °C), hech qanday bezovtalik yo\'q.',
    media: [
      'https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&q=80&w=300',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=300'
    ],
    loggedBy: 'Madina Alimova (Enaga)'
  },
  {
    id: 'j2',
    childName: 'Solihaxon (4 yosh)',
    date: 'Kecha, 17:00',
    meals: 'Sabzavotli sho\'rva, uyda tayyorlangan pechenye va mevali kompot.',
    sleep: 'Kechki uyqu rejimiga o\'z vaqtida, ertak eshitib tayyorlandi va uxladi.',
    activities: 'Plastilindan kichkina kuchukcha va mushukchalar yasadi, ingliz tilidagi hayvonlar nomini takrorladi.',
    note: 'Yangi so\'zlarni o\'zlashtirish tezligi juda yuqori. Bugun faqat do\'stona muloqotda bo\'ldi.',
    media: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=300'
    ],
    loggedBy: 'Shaxnoza Usmonova (Enaga)'
  }
];

export const SAMPLE_BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Bolada Sensor O\'yinlar nima uchun muhim?',
    summary: 'Sensor o\'yinlar bolaning motorikasini va atrof-muhitni o\'rganish qobiliyatini qanday rivojlantirishi haqida foydali maqola.',
    content: `Sensor o'yinlar bolalarning beshta his-tuyg'usini (ko'rish, eshitish, hid bilish, ta'm bilish va teginish) rag'batlantiradigan har qanday faoliyatdir. Plastilin bilan ishlash, qum va suv o'yinlari, turli xil teksturadagi matolarni ushlab ko'rish bolaning miya neyronlari faoliyatini sezilarli darajada yaxshilaydi. Ushbu o'yinlar bolaning motorika ko'nikmalarini kuchaytiradi va ularning nutqiy rivojlanishiga ham ijobiy ta'sir ko'rsatadi. Haftada kamida 2-3 marta bolalar bilan sensor mashg'ulotlar o'tkazish tavsiya etiladi.`,
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600',
    author: 'Dr. Kamola Saidova (Bolalar Psixologi)',
    date: '24.06.2026',
    readTime: '4 min'
  },
  {
    id: 'b2',
    title: 'Chaqaloqlarda to\'g\'ri uyqu rejimini shakllantirish',
    summary: 'Chaqaloqning sog\'lom o\'sishi va ota-onalarning xotirjamligi uchun kechki uyqu sirlari va maslahatlari.',
    content: `Chaqaloqlarning uyqu rejimi ularning asab tizimi to'g'ri shakllanishi uchun eng muhim omildir. Mutaxassislar bolani har kuni bir xil vaqtda uxlashga yotqizishni maslahat berishadi. Yotishdan oldin iliq vanna, mayin musiqa yoki ertak o'qib berish orqali bolada "uyqu marosimi"ni shakllantiring. Xonadagi harorat 18-22 °C oralig'ida bo'lishini va havoning namligini ta'minlang. Bu bolaning nafas olishini yengillashtiradi va uyquni chuqurlashtiradi.`,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=600',
    author: 'Shaxlo Karimova (Pediatr)',
    date: '18.06.2026',
    readTime: '6 min'
  }
];
