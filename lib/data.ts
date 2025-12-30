export const locales = [
  { code: "az", label: "az" },
  { code: "ru", label: "ru" },
  { code: "en", label: "en" },
] as const;

export type Locale = (typeof locales)[number]["code"];

const heroImage = "/brand/main_home_cover.jpeg";

const whyUsImage = "/brand/BSS.jpeg";

const teamImages = {
  elnur: "/brand/ElnurHesenli.png",
  nigar: "/brand/NigarHesenli.png",
  rashid: "/brand/ReshidMammadzada.png",
  valeh: "/brand/ValehQahramanov.png",
};

const staffImages = {
  firuza: "/brand/Firuza.jpeg",
  sima: "/brand/Sima.jpeg",
  aysel: "/brand/Aysel.JPG",
  merze: "/brand/Merze.JPG",
};

const teamSocials = {
  elnur: {
    instagram: "https://www.instagram.com/elnur_hesenli?igsh=MXQzbG16NjIzZDF3ZA%3D%3D",
    linkedin: "https://www.linkedin.com/in/elnur-hasanli-02566093/?originalSubdomain=az",
    facebook: "https://www.facebook.com/elnur.hesenli.3/?_rdr",
  },
  nigar: {
    instagram: "https://www.instagram.com/hesenlinigar?igsh=MWtscHd1MzBzMXlybQ%3D%3D",
    linkedin: "https://www.linkedin.com/in/hesenli-nigar-64981b98/",
    facebook: "https://www.facebook.com/hesenli.nigar?mibextid=wwXIfr&rdid=y7X4d81W6yXxzkZj#",
  },
  rashid: {
    instagram: "https://www.instagram.com/rashid_mamedzade/",
    linkedin: "https://www.linkedin.com/in/rashid-mammadzada-45532261/",
  },
  valeh: {
    instagram: "https://www.instagram.com/valehgahramanov?igsh=MXd3djhkaXFzMDJ4Zg%3D%3D",
    facebook: "https://www.facebook.com/valeh.qehremanov?mibextid=wwXIfr&rdid=TdzrlPoPDlKPsgDl#",
  },
};

const storyImages = {
  portraitA:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
  portraitB:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
  portraitC:
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
  portraitD:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  portraitE:
    "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=600&q=80",
  portraitF:
    "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",
};

const blogImages = {
  ds1: "/brand/ds1.png",
  ds2: "/brand/ds2.png",
  ds3: "/brand/ds3.png",
};

const servicesPageImage = "/brand/serv1.jpg";

const servicesPageCategoriesAz = {
  diaqnostika: {
    label: "Diaqnostika",
    items: [
      {
        slug: "panoram-rentgen",
        title: "Panoram rentgen",
        summary:
          "Alt v\u0259 \u00fcst \u00e7\u0259n\u0259, di\u015fl\u0259r, gicgah-\u00e7\u0259n\u0259 oyna\u011f\u0131, \u00e7\u0259n\u0259alt\u0131 v\u0259 \u00fcz nahiy\u0259sind\u0259ki s\u00fcm\u00fckl\u0259rin geni\u015f sah\u0259d\u0259 g\u00f6r\u00fcnt\u00fcl\u0259nm\u0259si \u00fc\u00e7\u00fcn iki\u00f6l\u00e7\u00fcl\u00fc rentgen m\u00fcayin\u0259si.",
        details: [
          "Panoram rentgen alt v\u0259 \u00fcst \u00e7\u0259n\u0259, di\u015fl\u0259r, gicgah-\u00e7\u0259n\u0259 oyna\u011f\u0131 (TMJ), \u00e7\u0259n\u0259alt\u0131 v\u0259 \u00fcz nahiy\u0259sind\u0259ki s\u00fcm\u00fckl\u0259ri bir g\u00f6r\u00fcnt\u00fcd\u0259 g\u00f6st\u0259rir. H\u0259kiml\u0259r bu m\u00fcayin\u0259ni \u00fcmumi v\u0259ziyy\u0259ti qiym\u0259tl\u0259ndirm\u0259k v\u0259 diaqnoz qoymaq \u00fc\u00e7\u00fcn istifad\u0259 edirl\u0259r. Prosedur zaman\u0131 pasiyentin ba\u015f\u0131 sabitl\u0259\u015fdirilir, d\u00fczg\u00fcn yerl\u0259\u015fm\u0259 \u00fc\u00e7\u00fcn x\u00fcsusi dayaq v\u0259 plastik tutacaqdan istifad\u0259 olunur. M\u00fcayin\u0259 q\u0131sa m\u00fcdd\u0259tlidir v\u0259 a\u015fa\u011f\u0131 radiasiya il\u0259 apar\u0131l\u0131r.",
        ],
      },
      {
        slug: "sefalometrik-rentgen",
        title: "Sefalometrik rentgen",
        summary:
          "Ortodontik m\u00fcalic\u0259 planlamas\u0131 \u00fc\u00e7\u00fcn ba\u015f v\u0259 \u00e7\u0259n\u0259nin yan g\u00f6r\u00fcnt\u00fcs\u00fcn\u00fc \u00e7\u0259k\u0259n x\u00fcsusi rentgen n\u00f6v\u00fc. Bu m\u00fcayin\u0259 \u00e7\u0259n\u0259 b\u00f6y\u00fcm\u0259 istiqam\u0259tini v\u0259 di\u015f d\u00fcz\u00fcl\u00fc\u015f\u00fcnd\u0259ki anomaliyalar\u0131 d\u0259qiq \u015f\u0259kild\u0259 m\u00fc\u0259yy\u0259n edir.",
        details: [
          "Sefalometrik rentgen ba\u015f skeletinin yan proyeksiyada \u00e7\u0259kil\u0259n iki\u00f6l\u00e7\u00fcl\u00fc g\u00f6r\u00fcnt\u00fcs\u00fcd\u00fcr. \u018fsas\u0259n ortodontiya v\u0259 \u00e7\u0259n\u0259-\u00fcz c\u0259rrahiyy\u0259sind\u0259 \u00f6l\u00e7m\u0259l\u0259r aparmaq v\u0259 m\u00fcalic\u0259 plan\u0131n\u0131 haz\u0131rlamaq \u00fc\u00e7\u00fcn istifad\u0259 olunur. \u00c7\u0259kili\u015f zaman\u0131 pasiyentin ba\u015f\u0131 x\u00fcsusi d\u0259st\u0259k vasit\u0259sil\u0259 sabitl\u0259nir v\u0259 n\u0259tic\u0259l\u0259r r\u0259q\u0259msal \u015f\u0259kild\u0259 analiz edilir.",
        ],
      },
      {
        slug: "cbct",
        title: "3D Tomoqrafiya (CBCT)",
        summary:
          "\u00c7\u0259n\u0259, di\u015fl\u0259r, a\u011f\u0131z bo\u015flu\u011fu v\u0259 \u00fcz skeletinin \u00fc\u00e7\u00f6l\u00e7\u00fcl\u00fc g\u00f6r\u00fcnt\u00fcs\u00fcn\u00fc \u0259ld\u0259 etm\u0259y\u0259 imkan ver\u0259n y\u00fcks\u0259k d\u0259qiqlikli v\u0259 a\u015fa\u011f\u0131 radiasiyal\u0131 rentgen m\u00fcayin\u0259 \u00fcsuludur.",
        details: [
          "CBCT (Cone Beam Computed Tomography) m\u00fcasir 3D g\u00f6r\u00fcnt\u00fcl\u0259m\u0259 \u00fcsuludur. \u0130mplant planla\u015fd\u0131rmas\u0131, \u00e7\u0259n\u0259 patologiyalar\u0131, g\u00f6m\u00fcl\u00fc v\u0259 ya anormal yerl\u0259\u015fmi\u015f di\u015fl\u0259rin t\u0259hlili, k\u00f6k kanallar\u0131n\u0131n formas\u0131 v\u0259 sin\u00fcs nahiy\u0259sinin qiym\u0259tl\u0259ndirilm\u0259si \u00fc\u00e7\u00fcn geni\u015f istifad\u0259 olunur. Prosedur q\u0131sa m\u00fcdd\u0259t \u00e7\u0259kir v\u0259 al\u0131nan g\u00f6r\u00fcnt\u00fcl\u0259r y\u00fcks\u0259k d\u0259qiqlikl\u0259 t\u0259hlil edilir.",
        ],
      },
    ],
  },
  gigiyena: {
    label: "Gigiyena",
    items: [
      {
        slug: "professional-cleaning",
        title: "Di\u015fl\u0259rin professional t\u0259mizl\u0259nm\u0259si",
        summary:
          "Di\u015f da\u015f\u0131 v\u0259 bakterial plaqlar\u0131n tam t\u0259mizl\u0259nm\u0259si \u00fc\u00e7\u00fcn pe\u015f\u0259kar prosedurdur. Bu xidm\u0259t di\u015f \u0259ti x\u0259st\u0259likl\u0259rinin qar\u015f\u0131s\u0131n\u0131n al\u0131nmas\u0131 v\u0259 a\u011f\u0131z gigiyenas\u0131n\u0131n optimal s\u0259viyy\u0259d\u0259 saxlanmas\u0131 \u00fc\u00e7\u00fcn m\u00fctl\u0259q z\u0259ruridir.",
        details: [
          "Professional t\u0259mizl\u0259m\u0259 zaman\u0131 di\u015fl\u0259rin s\u0259thind\u0259 y\u0131\u011f\u0131lan s\u0259rt v\u0259 yum\u015faq \u00e7\u00f6k\u00fcnt\u00fcl\u0259r x\u00fcsusi al\u0259tl\u0259r vasit\u0259sil\u0259 t\u0259mizl\u0259nir, daha sonra di\u015fl\u0259r cilalan\u0131r. Bu prosedur di\u015f \u0259ti iltihab\u0131n\u0131n azalmas\u0131na, xo\u015fag\u0259lm\u0259z qoxunun aradan qalxmas\u0131na v\u0259 estetik g\u00f6r\u00fcn\u00fc\u015f\u00fcn yax\u015f\u0131la\u015fmas\u0131na k\u00f6m\u0259k edir. Stomatoloqlar ild\u0259 1-2 d\u0259f\u0259 pe\u015f\u0259kar t\u0259mizl\u0259m\u0259ni t\u00f6vsiy\u0259 edirl\u0259r.",
        ],
      },
      {
        slug: "air-flow",
        title: "Air-Flow il\u0259 t\u0259mizl\u0259m\u0259",
        summary:
          "Y\u00fcks\u0259k t\u0259zyiqli hava, su v\u0259 x\u00fcsusi toz qar\u0131\u015f\u0131\u011f\u0131 il\u0259 di\u015fl\u0259rin yum\u015faq \u0259rp, piqment l\u0259k\u0259l\u0259ri v\u0259 bakterial t\u0259b\u0259q\u0259d\u0259n z\u0259r\u0259rsiz \u015f\u0259kild\u0259 t\u0259mizl\u0259nm\u0259si.",
        details: [
          "Air-Flow metodunda x\u00fcsusi hava-su qar\u0131\u015f\u0131\u011f\u0131 v\u0259 toz hiss\u0259cikl\u0259ri di\u015f s\u0259thin\u0259 y\u00f6n\u0259ldil\u0259r\u0259k piqment l\u0259k\u0259l\u0259rini (\u00e7ay, kofe, siqaret v\u0259 s.) v\u0259 yum\u015faq \u0259rpi \u00e7\u0131xar\u0131r. Bu \u00fcsul di\u015f minas\u0131na v\u0259 di\u015f \u0259tin\u0259 z\u0259r\u0259r verm\u0259d\u0259n t\u0259mizl\u0259m\u0259 apar\u0131r v\u0259 breket, implant v\u0259 protezl\u0259rin \u0259traf\u0131nda da effektivdir. Prosedur tez v\u0259 a\u011fr\u0131s\u0131zd\u0131r.",
        ],
      },
      {
        slug: "scaler-cleaning",
        title: "Scaler il\u0259 di\u015f t\u0259mizl\u0259m\u0259",
        summary:
          "Ultras\u0259s texnologiyas\u0131 il\u0259 di\u015fl\u0259rd\u0259ki s\u0259rt \u00e7\u00f6k\u00fcnt\u00fcl\u0259rin v\u0259 di\u015f da\u015flar\u0131n\u0131n effektiv \u015f\u0259kild\u0259 t\u0259mizl\u0259nm\u0259si proseduru.",
        details: [
          "Ultras\u0259s scaler cihaz\u0131 di\u015f da\u015flar\u0131n\u0131 titr\u0259m\u0259 v\u0259 su il\u0259 yum\u015faldaraq par\u00e7alay\u0131r v\u0259 t\u0259mizl\u0259yir. Bu prosedur di\u015f \u0259ti x\u0259st\u0259likl\u0259rinin profilaktikas\u0131 \u00fc\u00e7\u00fcn vacibdir v\u0259 di\u015fl\u0259rin s\u0259thini t\u0259miz saxlay\u0131r. \u018fks\u0259r hallarda polisaj (cilalama) il\u0259 tamamlan\u0131r v\u0259 di\u015f \u0259tl\u0259rinin sa\u011flaml\u0131\u011f\u0131n\u0131 yax\u015f\u0131la\u015fd\u0131r\u0131r.",
        ],
      },
    ],
  },
  estetik: {
    label: "Estetik stomatologiya",
    items: [
      {
        slug: "ev-seraitinde-agardilma",
        title: "Ev \u015f\u0259raitind\u0259 di\u015fl\u0259rin a\u011fard\u0131lmas\u0131",
        summary:
          "F\u0259rdi haz\u0131rlanm\u0131\u015f qapaqlar v\u0259 pe\u015f\u0259kar a\u011fard\u0131c\u0131 gel vasit\u0259sil\u0259 ev \u015f\u0259raitind\u0259 t\u0259hl\u00fck\u0259siz v\u0259 effektiv di\u015f a\u011fartma proseduru.",
        details: [
          "Bu prosedur stomatoloqun haz\u0131rlad\u0131\u011f\u0131 f\u0259rdi qapaqlar v\u0259 a\u011fard\u0131c\u0131 gel il\u0259 evd\u0259 h\u0259yata ke\u00e7irilir. Pasiyent h\u0259kimin g\u00f6st\u0259ri\u015fl\u0259rin\u0259 uy\u011fun olaraq qapaqlar\u0131 m\u00fc\u0259yy\u0259n m\u00fcdd\u0259t g\u00fcnd\u0259lik istifad\u0259 edir v\u0259 n\u0259tic\u0259 t\u0259dric\u0259n \u0259ld\u0259 olunur. Ev \u015f\u0259raitind\u0259 a\u011fard\u0131lma daha yum\u015faq t\u0259sir g\u00f6st\u0259rir v\u0259 di\u015fl\u0259rin r\u0259ngini t\u0259hl\u00fck\u0259siz \u015f\u0259kild\u0259 a\u00e7\u0131r.",
        ],
      },
      {
        slug: "klinikada-agardilma",
        title: "Klinikada di\u015fl\u0259rin a\u011fard\u0131lmas\u0131",
        summary:
          "Pe\u015f\u0259kar avadanl\u0131qlar v\u0259 y\u00fcks\u0259k konsentrasiyal\u0131 a\u011fard\u0131c\u0131 madd\u0259l\u0259rl\u0259 klinik \u015f\u0259raitd\u0259 apar\u0131lan s\u00fcr\u0259tli v\u0259 effektiv di\u015f a\u011fartma proseduru.",
        details: [
          "Klinik a\u011fard\u0131lma m\u00fcayin\u0259d\u0259n sonra di\u015f \u0259tl\u0259rinin qorunmas\u0131 v\u0259 a\u011fard\u0131c\u0131 gelin t\u0259tbiqi il\u0259 h\u0259yata ke\u00e7irilir. Gel x\u00fcsusi lampa v\u0259 ya lazer il\u0259 aktivl\u0259\u015fdiril\u0259r\u0259k q\u0131sa m\u00fcdd\u0259td\u0259 daha parlaq n\u0259tic\u0259 verir. Prosedur ad\u0259t\u0259n 30-60 d\u0259qiq\u0259 \u00e7\u0259kir v\u0259 h\u0259kim n\u0259zar\u0259ti alt\u0131nda apar\u0131ld\u0131\u011f\u0131 \u00fc\u00e7\u00fcn t\u0259hl\u00fck\u0259sizdir.",
        ],
      },
      {
        slug: "dis-viniri",
        title: "Di\u015f viniri",
        summary:
          "Di\u015fl\u0259rin \u00f6n s\u0259thin\u0259 t\u0259tbiq olunan inc\u0259 qatl\u0131 keramik v\u0259 ya kompozit \u00f6rt\u00fckl\u0259r. Di\u015fl\u0259rin forma, r\u0259ng v\u0259 \u00f6l\u00e7\u00fcs\u00fcn\u00fc d\u0259yi\u015fdir\u0259r\u0259k m\u00fck\u0259mm\u0259l g\u00fcl\u00fc\u015f estetikas\u0131 yarad\u0131r.",
        details: [
          "Di\u015f vinirl\u0259ri estetik probleml\u0259ri aradan qald\u0131rmaq \u00fc\u00e7\u00fcn di\u015fl\u0259rin \u00f6n s\u0259thin\u0259 yerl\u0259\u015fdiril\u0259n nazik \u00f6rt\u00fckl\u0259rdir. R\u0259ng d\u0259yi\u015fiklikl\u0259ri, aral\u0131qlar, \u00e7atlar v\u0259 forma pozuntular\u0131 vinir vasit\u0259sil\u0259 d\u00fcz\u0259ldil\u0259 bil\u0259r. Minimal m\u00fcdaxil\u0259 il\u0259 t\u0259bii g\u00f6r\u00fcn\u00fc\u015f \u0259ld\u0259 olunur v\u0259 d\u00fczg\u00fcn qulluqla uzunm\u00fcdd\u0259tli n\u0259tic\u0259 verir.",
        ],
      },
    ],
  },
} as const;

const servicesPageCategoriesEn = {
  diaqnostika: {
    label: "Diagnostics",
    items: [
      {
        slug: "panoram-rentgen",
        title: "Panoramic X-ray",
        summary:
          "A two-dimensional X-ray examination that provides a broad view of the upper and lower jaws, teeth, TMJ, submandibular area, and facial bones.",
        details: [
          "A panoramic X-ray shows the upper and lower jaws, teeth, temporomandibular joint (TMJ), submandibular region, and facial bones in one image. Doctors use it to assess overall condition and make a diagnosis. During the procedure, the patient's head is stabilized; a special support and plastic bite block ensure proper positioning. The exam is quick and uses low radiation.",
        ],
      },
      {
        slug: "sefalometrik-rentgen",
        title: "Cephalometric X-ray",
        summary:
          "A special X-ray that captures the lateral view of the head and jaw for orthodontic treatment planning. It precisely identifies jaw growth direction and dental alignment anomalies.",
        details: [
          "Cephalometric X-ray is a two-dimensional lateral image of the skull. It is mainly used in orthodontics and maxillofacial surgery to take measurements and prepare a treatment plan. During imaging, the patient's head is stabilized with a special support and results are analyzed digitally.",
        ],
      },
      {
        slug: "cbct",
        title: "3D CBCT scan",
        summary:
          "A high-precision, low-radiation imaging method that provides a three-dimensional view of the jaws, teeth, oral cavity, and facial skeleton.",
        details: [
          "CBCT (Cone Beam Computed Tomography) is a modern 3D imaging method. It is widely used for implant planning, jaw pathologies, analysis of impacted or abnormally positioned teeth, evaluation of root canal anatomy, and assessment of the sinus region. The procedure is short and the images are analyzed with high accuracy.",
        ],
      },
    ],
  },
  gigiyena: {
    label: "Hygiene",
    items: [
      {
        slug: "professional-cleaning",
        title: "Professional teeth cleaning",
        summary:
          "A professional procedure to completely remove tartar and bacterial plaque. This service is essential for preventing gum disease and maintaining optimal oral hygiene.",
        details: [
          "During professional cleaning, hard and soft deposits on the tooth surface are removed with specialized instruments and the teeth are then polished. This helps reduce gum inflammation, eliminate unpleasant odor, and improve aesthetics. Dentists recommend professional cleaning 1-2 times per year.",
        ],
      },
      {
        slug: "air-flow",
        title: "Air-Flow cleaning",
        summary:
          "Removal of soft plaque, pigment stains, and bacterial film using a high-pressure mix of air, water, and special powder.",
        details: [
          "In the Air-Flow method, a specific air-water mixture and powder particles are directed onto the tooth surface to remove pigment stains (tea, coffee, smoking, etc.) and soft plaque. This method cleans without damaging enamel or gums and is effective around braces, implants, and prosthetics. The procedure is quick and painless.",
        ],
      },
      {
        slug: "scaler-cleaning",
        title: "Scaler teeth cleaning",
        summary:
          "An ultrasonic procedure to effectively remove hard deposits and tartar from teeth.",
        details: [
          "An ultrasonic scaler uses vibration and water to soften, break up, and remove tartar. This procedure is important for gum disease prevention and keeps tooth surfaces clean. It is often completed with polishing and improves gum health.",
        ],
      },
    ],
  },
  estetik: {
    label: "Aesthetic dentistry",
    items: [
      {
        slug: "ev-seraitinde-agardilma",
        title: "At-home teeth whitening",
        summary:
          "A safe and effective whitening procedure at home using custom-made trays and professional whitening gel.",
        details: [
          "This procedure is performed at home using custom trays prepared by the dentist and a whitening gel. The patient uses the trays daily for a specified period according to the doctor's instructions, and results appear gradually. At-home whitening is gentler and lightens tooth shade safely.",
        ],
      },
      {
        slug: "klinikada-agardilma",
        title: "In-clinic teeth whitening",
        summary:
          "A fast and effective whitening procedure performed in a clinical setting using professional equipment and high-concentration whitening agents.",
        details: [
          "After examination, in-clinic whitening is performed by protecting the gums and applying a whitening gel. The gel is activated with a special lamp or laser to provide a brighter result in a short time. The procedure typically takes 30-60 minutes and is safe under a doctor's supervision.",
        ],
      },
      {
        slug: "dis-viniri",
        title: "Dental veneers",
        summary:
          "Thin ceramic or composite shells applied to the front surface of teeth. They change the shape, color, and size of teeth to create an ideal smile aesthetic.",
        details: [
          "Dental veneers are thin coverings placed on the front surfaces to correct aesthetic problems. Color changes, gaps, cracks, and shape irregularities can be corrected with veneers. With minimal intervention, a natural look is achieved and, with proper care, results are long-lasting.",
        ],
      },
    ],
  },
} as const;

const servicesPageCategoriesRu = {
  diaqnostika: {
    label: "\u0414\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0430",
    items: [
      {
        slug: "panoram-rentgen",
        title: "\u041f\u0430\u043d\u043e\u0440\u0430\u043c\u043d\u044b\u0439 \u0440\u0435\u043d\u0442\u0433\u0435\u043d",
        summary:
          "\u0414\u0432\u0443\u0445\u043c\u0435\u0440\u043d\u043e\u0435 \u0440\u0435\u043d\u0442\u0433\u0435\u043d-\u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0435\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u043e\u0431\u0437\u043e\u0440 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0438 \u043d\u0438\u0436\u043d\u0435\u0439 \u0447\u0435\u043b\u044e\u0441\u0442\u0438, \u0437\u0443\u0431\u043e\u0432, \u0412\u041d\u0427\u0421, \u043f\u043e\u0434\u043d\u0438\u0436\u043d\u0435\u0447\u0435\u043b\u044e\u0441\u0442\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0438 \u043a\u043e\u0441\u0442\u0435\u0439 \u043b\u0438\u0446\u0430.",
        details: [
          "\u041f\u0430\u043d\u043e\u0440\u0430\u043c\u043d\u044b\u0439 \u0440\u0435\u043d\u0442\u0433\u0435\u043d \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u0435\u0440\u0445\u043d\u044e\u044e \u0438 \u043d\u0438\u0436\u043d\u044e\u044e \u0447\u0435\u043b\u044e\u0441\u0442\u0438, \u0437\u0443\u0431\u044b, \u0432\u0438\u0441\u043e\u0447\u043d\u043e-\u043d\u0438\u0436\u043d\u0435\u0447\u0435\u043b\u044e\u0441\u0442\u043d\u043e\u0439 \u0441\u0443\u0441\u0442\u0430\u0432 (\u0412\u041d\u0427\u0421), \u043f\u043e\u0434\u043d\u0438\u0436\u043d\u0435\u0447\u0435\u043b\u044e\u0441\u0442\u043d\u0443\u044e \u0438 \u043b\u0438\u0446\u0435\u0432\u0443\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043d\u0430 \u043e\u0434\u043d\u043e\u043c \u0441\u043d\u0438\u043c\u043a\u0435. \u0412\u0440\u0430\u0447\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0435\u0433\u043e \u0434\u043b\u044f \u043e\u0446\u0435\u043d\u043a\u0438 \u043e\u0431\u0449\u0435\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0438 \u043f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0434\u0438\u0430\u0433\u043d\u043e\u0437\u0430. \u0412\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b \u0433\u043e\u043b\u043e\u0432\u0430 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 \u0444\u0438\u043a\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044f, \u0434\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u043e\u043f\u043e\u0440\u0430 \u0438 \u043f\u043b\u0430\u0441\u0442\u0438\u043a\u043e\u0432\u044b\u0439 \u043f\u0440\u0438\u043a\u0443\u0441\u043d\u044b\u0439 \u0431\u043b\u043e\u043a. \u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u044b\u0441\u0442\u0440\u043e\u0435 \u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0441 \u043d\u0438\u0437\u043a\u043e\u0439 \u0434\u043e\u0437\u043e\u0439 \u0438\u0437\u043b\u0443\u0447\u0435\u043d\u0438\u044f.",
        ],
      },
      {
        slug: "sefalometrik-rentgen",
        title: "\u0426\u0435\u0444\u0430\u043b\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0435\u043d\u0442\u0433\u0435\u043d",
        summary:
          "\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u043d\u0442\u0433\u0435\u043d, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0444\u0438\u043a\u0441\u0438\u0440\u0443\u0435\u0442 \u0431\u043e\u043a\u043e\u0432\u043e\u0439 \u0441\u043d\u0438\u043c\u043e\u043a \u0433\u043e\u043b\u043e\u0432\u044b \u0438 \u0447\u0435\u043b\u044e\u0441\u0442\u0438 \u0434\u043b\u044f \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043e\u0440\u0442\u043e\u0434\u043e\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043b\u0435\u0447\u0435\u043d\u0438\u044f. \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0442\u043e\u0447\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u043e\u0441\u0442\u0430 \u0447\u0435\u043b\u044e\u0441\u0442\u0438 \u0438 \u0430\u043d\u043e\u043c\u0430\u043b\u0438\u0438 \u0432 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0437\u0443\u0431\u043e\u0432.",
        details: [
          "\u0426\u0435\u0444\u0430\u043b\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0435\u043d\u0442\u0433\u0435\u043d - \u044d\u0442\u043e \u0434\u0432\u0443\u0445\u043c\u0435\u0440\u043d\u043e\u0435 \u0431\u043e\u043a\u043e\u0432\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u043f\u0430. \u0427\u0430\u0449\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0432 \u043e\u0440\u0442\u043e\u0434\u043e\u043d\u0442\u0438\u0438 \u0438 \u0447\u0435\u043b\u044e\u0441\u0442\u043d\u043e-\u043b\u0438\u0446\u0435\u0432\u043e\u0439 \u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0438 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u0439 \u0438 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438 \u043f\u043b\u0430\u043d\u0430 \u043b\u0435\u0447\u0435\u043d\u0438\u044f. \u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0441\u043d\u0438\u043c\u043a\u0430 \u0433\u043e\u043b\u043e\u0432\u0430 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 \u0444\u0438\u043a\u0441\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u043e\u043f\u043e\u0440\u043e\u0439, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0432 \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u043c \u0432\u0438\u0434\u0435.",
        ],
      },
      {
        slug: "cbct",
        title: "3D \u0442\u043e\u043c\u043e\u0433\u0440\u0430\u0444\u0438\u044f (CBCT)",
        summary:
          "\u0412\u044b\u0441\u043e\u043a\u043e\u0442\u043e\u0447\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 \u0440\u0435\u043d\u0442\u0433\u0435\u043d-\u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0438 \u0441 \u043d\u0438\u0437\u043a\u043e\u0439 \u0434\u043e\u0437\u043e\u0439, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0439 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0440\u0435\u0445\u043c\u0435\u0440\u043d\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0447\u0435\u043b\u044e\u0441\u0442\u0435\u0439, \u0437\u0443\u0431\u043e\u0432, \u043f\u043e\u043b\u043e\u0441\u0442\u0438 \u0440\u0442\u0430 \u0438 \u043b\u0438\u0446\u0435\u0432\u043e\u0433\u043e \u0441\u043a\u0435\u043b\u0435\u0442\u0430.",
        details: [
          "CBCT (Cone Beam Computed Tomography) - \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 3D-\u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438. \u0428\u0438\u0440\u043e\u043a\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043b\u0430\u043d\u0442\u0430\u0446\u0438\u0438, \u0432\u044b\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0430\u0442\u043e\u043b\u043e\u0433\u0438\u0439 \u0447\u0435\u043b\u044e\u0441\u0442\u0435\u0439, \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0440\u0435\u0442\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0437\u0443\u0431\u043e\u0432, \u043e\u0446\u0435\u043d\u043a\u0438 \u0444\u043e\u0440\u043c\u044b \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u043a\u0430\u043d\u0430\u043b\u043e\u0432 \u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043f\u0430\u0437\u0443\u0445. \u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0435\u043c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0441 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c\u044e.",
        ],
      },
    ],
  },
  gigiyena: {
    label: "\u0413\u0438\u0433\u0438\u0435\u043d\u0430",
    items: [
      {
        slug: "professional-cleaning",
        title: "\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0447\u0438\u0441\u0442\u043a\u0430 \u0437\u0443\u0431\u043e\u0432",
        summary:
          "\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043f\u043e\u043b\u043d\u043e\u0433\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0437\u0443\u0431\u043d\u043e\u0433\u043e \u043a\u0430\u043c\u043d\u044f \u0438 \u0431\u0430\u043a\u0442\u0435\u0440\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043d\u0430\u043b\u0435\u0442\u0430. \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u0430\u043a\u0442\u0438\u043a\u0438 \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u043d\u0438\u0439 \u0434\u0435\u0441\u0435\u043d \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0433\u0438\u0433\u0438\u0435\u043d\u044b \u043f\u043e\u043b\u043e\u0441\u0442\u0438 \u0440\u0442\u0430.",
        details: [
          "\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0439 \u0447\u0438\u0441\u0442\u043a\u0438 \u0442\u0432\u0435\u0440\u0434\u044b\u0435 \u0438 \u043c\u044f\u0433\u043a\u0438\u0435 \u043e\u0442\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438 \u0437\u0443\u0431\u043e\u0432 \u0443\u0434\u0430\u043b\u044f\u044e\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438, \u0437\u0430\u0442\u0435\u043c \u0437\u0443\u0431\u044b \u043f\u043e\u043b\u0438\u0440\u0443\u044e\u0442\u0441\u044f. \u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u0441\u043d\u0438\u0436\u0430\u0435\u0442 \u0432\u043e\u0441\u043f\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0435\u0441\u0435\u043d, \u0443\u0441\u0442\u0440\u0430\u043d\u044f\u0435\u0442 \u043d\u0435\u043f\u0440\u0438\u044f\u0442\u043d\u044b\u0439 \u0437\u0430\u043f\u0430\u0445 \u0438 \u0443\u043b\u0443\u0447\u0448\u0430\u0435\u0442 \u044d\u0441\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0432\u0438\u0434. \u0421\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u044e\u0442 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0443\u044e \u0447\u0438\u0441\u0442\u043a\u0443 1-2 \u0440\u0430\u0437\u0430 \u0432 \u0433\u043e\u0434.",
        ],
      },
      {
        slug: "air-flow",
        title: "\u0427\u0438\u0441\u0442\u043a\u0430 Air-Flow",
        summary:
          "\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043c\u044f\u0433\u043a\u043e\u0433\u043e \u043d\u0430\u043b\u0435\u0442\u0430, \u043f\u0438\u0433\u043c\u0435\u043d\u0442\u043d\u044b\u0445 \u043f\u044f\u0442\u0435\u043d \u0438 \u0431\u0430\u043a\u0442\u0435\u0440\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u043b\u0435\u043d\u043a\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u043c\u0435\u0441\u0438 \u0432\u043e\u0437\u0434\u0443\u0445\u0430, \u0432\u043e\u0434\u044b \u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u0440\u043e\u0448\u043a\u0430 \u043f\u043e\u0434 \u0432\u044b\u0441\u043e\u043a\u0438\u043c \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c.",
        details: [
          "\u041f\u0440\u0438 \u043c\u0435\u0442\u043e\u0434\u0435 Air-Flow \u0441\u0442\u0440\u0443\u044f \u0432\u043e\u0437\u0434\u0443\u0445\u0430 \u0441 \u0432\u043e\u0434\u043e\u0439 \u0438 \u043f\u043e\u0440\u043e\u0448\u043a\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044c \u0437\u0443\u0431\u0430, \u0443\u0434\u0430\u043b\u044f\u044f \u043f\u0438\u0433\u043c\u0435\u043d\u0442\u043d\u044b\u0435 \u043f\u044f\u0442\u043d\u0430 (\u0447\u0430\u0439, \u043a\u043e\u0444\u0435, \u043a\u0443\u0440\u0435\u043d\u0438\u0435 \u0438 \u0442. \u0434.) \u0438 \u043c\u044f\u0433\u043a\u0438\u0439 \u043d\u0430\u043b\u0435\u0442. \u041c\u0435\u0442\u043e\u0434 \u043d\u0435 \u043f\u043e\u0432\u0440\u0435\u0436\u0434\u0430\u0435\u0442 \u044d\u043c\u0430\u043b\u044c \u0438 \u0434\u0435\u0441\u043d\u044b, \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u0435\u043d \u0432\u043e\u043a\u0440\u0443\u0433 \u0431\u0440\u0435\u043a\u0435\u0442\u043e\u0432, \u0438\u043c\u043f\u043b\u0430\u043d\u0442\u043e\u0432 \u0438 \u043f\u0440\u043e\u0442\u0435\u0437\u043e\u0432. \u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u0431\u044b\u0441\u0442\u0440\u0430\u044f \u0438 \u0431\u0435\u0437\u0431\u043e\u043b\u0435\u0437\u043d\u0435\u043d\u043d\u0430\u044f.",
        ],
      },
      {
        slug: "scaler-cleaning",
        title: "\u0427\u0438\u0441\u0442\u043a\u0430 \u0441\u043a\u0435\u0439\u043b\u0435\u0440\u043e\u043c",
        summary:
          "\u0423\u043b\u044c\u0442\u0440\u0430\u0437\u0432\u0443\u043a\u043e\u0432\u0430\u044f \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0442\u0432\u0435\u0440\u0434\u044b\u0445 \u043e\u0442\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0438 \u0437\u0443\u0431\u043d\u043e\u0433\u043e \u043a\u0430\u043c\u043d\u044f.",
        details: [
          "\u0423\u043b\u044c\u0442\u0440\u0430\u0437\u0432\u0443\u043a\u043e\u0432\u043e\u0439 \u0441\u043a\u0435\u0439\u043b\u0435\u0440 \u0440\u0430\u0437\u043c\u044f\u0433\u0447\u0430\u0435\u0442 \u043a\u0430\u043c\u0435\u043d\u044c \u0432\u0438\u0431\u0440\u0430\u0446\u0438\u0435\u0439 \u0438 \u0432\u043e\u0434\u043e\u0439, \u0434\u0440\u043e\u0431\u0438\u0442 \u0438 \u0443\u0434\u0430\u043b\u044f\u0435\u0442 \u0435\u0433\u043e. \u042d\u0442\u043e \u0432\u0430\u0436\u043d\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u0430\u043a\u0442\u0438\u043a\u0438 \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u043d\u0438\u0439 \u0434\u0435\u0441\u0435\u043d \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f \u0447\u0438\u0441\u0442\u043e\u0442\u044b \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438 \u0437\u0443\u0431\u043e\u0432. \u0427\u0430\u0441\u0442\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u0438\u0440\u043e\u0432\u043a\u043e\u0439 \u0438 \u0443\u043b\u0443\u0447\u0448\u0430\u0435\u0442 \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435 \u0434\u0435\u0441\u0435\u043d.",
        ],
      },
    ],
  },
  estetik: {
    label: "\u042d\u0441\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u0438\u044f",
    items: [
      {
        slug: "ev-seraitinde-agardilma",
        title: "\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u043e\u0442\u0431\u0435\u043b\u0438\u0432\u0430\u043d\u0438\u0435 \u0437\u0443\u0431\u043e\u0432",
        summary:
          "\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430\u044f \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043e\u0442\u0431\u0435\u043b\u0438\u0432\u0430\u043d\u0438\u044f \u0434\u043e\u043c\u0430 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u0430\u043f\u043f \u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0433\u0435\u043b\u044f.",
        details: [
          "\u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0434\u043e\u043c\u0430 \u0441 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043a\u0430\u043f\u043f\u0430\u043c\u0438, \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u043e\u043c, \u0438 \u043e\u0442\u0431\u0435\u043b\u0438\u0432\u0430\u044e\u0449\u0438\u043c \u0433\u0435\u043b\u0435\u043c. \u041f\u0430\u0446\u0438\u0435\u043d\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043a\u0430\u043f\u043f\u044b \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u043f\u043e \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u0432\u0440\u0430\u0447\u0430, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u0440\u043e\u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u0442\u0435\u043f\u0435\u043d\u043d\u043e. \u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u043e\u0442\u0431\u0435\u043b\u0438\u0432\u0430\u043d\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u044f\u0433\u0447\u0435 \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u043e\u0441\u0432\u0435\u0442\u043b\u044f\u0435\u0442 \u043e\u0442\u0442\u0435\u043d\u043e\u043a \u0437\u0443\u0431\u043e\u0432.",
        ],
      },
      {
        slug: "klinikada-agardilma",
        title: "\u041a\u043b\u0438\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0442\u0431\u0435\u043b\u0438\u0432\u0430\u043d\u0438\u0435 \u0437\u0443\u0431\u043e\u0432",
        summary:
          "\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043e\u0442\u0431\u0435\u043b\u0438\u0432\u0430\u043d\u0438\u044f \u0432 \u043a\u043b\u0438\u043d\u0438\u043a\u0435 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0433\u0435\u043b\u0435\u0439 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u043a\u043e\u043d\u0446\u0435\u043d\u0442\u0440\u0430\u0446\u0438\u0438.",
        details: [
          "\u041f\u043e\u0441\u043b\u0435 \u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0437\u0430\u0449\u0438\u0442\u0430 \u0434\u0435\u0441\u0435\u043d \u0438 \u043d\u0430\u043d\u0435\u0441\u0435\u043d\u0438\u0435 \u043e\u0442\u0431\u0435\u043b\u0438\u0432\u0430\u044e\u0449\u0435\u0433\u043e \u0433\u0435\u043b\u044f. \u0413\u0435\u043b\u044c \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u043b\u0430\u043c\u043f\u043e\u0439 \u0438\u043b\u0438 \u043b\u0430\u0437\u0435\u0440\u043e\u043c, \u0447\u0442\u043e \u0434\u0430\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u044f\u0440\u043a\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0437\u0430 \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u0432\u0440\u0435\u043c\u044f. \u041f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0430 \u043e\u0431\u044b\u0447\u043d\u043e \u0434\u043b\u0438\u0442\u0441\u044f 30-60 \u043c\u0438\u043d\u0443\u0442 \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430 \u043f\u043e\u0434 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u043c \u0432\u0440\u0430\u0447\u0430.",
        ],
      },
      {
        slug: "dis-viniri",
        title: "\u0412\u0438\u043d\u0438\u0440\u044b",
        summary:
          "\u0422\u043e\u043d\u043a\u0438\u0435 \u043a\u0435\u0440\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0438\u043b\u0438 \u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0442\u043d\u044b\u0435 \u043d\u0430\u043a\u043b\u0430\u0434\u043a\u0438 \u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u043d\u044e\u044e \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044c \u0437\u0443\u0431\u043e\u0432. \u041c\u0435\u043d\u044f\u044e\u0442 \u0444\u043e\u0440\u043c\u0443, \u0446\u0432\u0435\u0442 \u0438 \u0440\u0430\u0437\u043c\u0435\u0440 \u0437\u0443\u0431\u043e\u0432, \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u044f \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u0443\u044e \u044d\u0441\u0442\u0435\u0442\u0438\u043a\u0443 \u0443\u043b\u044b\u0431\u043a\u0438.",
        details: [
          "\u0412\u0438\u043d\u0438\u0440\u044b - \u0442\u043e\u043d\u043a\u0438\u0435 \u043d\u0430\u043a\u043b\u0430\u0434\u043a\u0438 \u043d\u0430 \u043f\u0435\u0440\u0435\u0434\u043d\u044e\u044e \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u044c \u0437\u0443\u0431\u043e\u0432 \u0434\u043b\u044f \u0443\u0441\u0442\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u044d\u0441\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043f\u0440\u043e\u0431\u043b\u0435\u043c. \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0446\u0432\u0435\u0442\u0430, \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043a\u0438, \u0442\u0440\u0435\u0449\u0438\u043d\u044b \u0438 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u044f \u0444\u043e\u0440\u043c\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0441\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0432\u0438\u043d\u0438\u0440\u0430\u043c\u0438. \u041f\u0440\u0438 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u043c\u0435\u0448\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0435 \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0435\u0442\u0441\u044f \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0432\u0438\u0434 \u0438 \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u0440\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u043c \u0443\u0445\u043e\u0434\u0435.",
        ],
      },
    ],
  },
} as const;

export const content = {
  az: {
    navLinks: [
      { label: "Biz kimik?", href: "/about" },
      { label: "Komandam\u0131z", href: "/#team" },
      { label: "Xidm\u0259tl\u0259r", href: "/#services" },
      { label: "T\u0259dris", href: "/education" },
      { label: "\u018flaq\u0259", href: "/#contact" },
    ],
    header: {
      cta: "Sual\u0131n\u0131z var?",
      tagline: "for foreigners",
      menuLabel: "Menyunu a\u00e7",
      languageLabel: "Dil",
      teamMenu: {
        items: [
          { label: "H\u0259kiml\u0259r", href: "/#team" },
          { label: "Personal", href: "/staff" },
        ],
      },
      servicesMenu: {
        groups: [
          {
            title: "Diaqnostika",
            items: [
              { label: "Panoram rentgen", href: "/services/diaqnostika/panoram-rentgen" },
              { label: "Sefalometrik rentgen", href: "/services/diaqnostika/sefalometrik-rentgen" },
              { label: "3D tomoqrafiya (CBCT)", href: "/services/diaqnostika/cbct" },
            ],
          },
          {
            title: "Gigiyena",
            items: [
              { label: "Di\u015fl\u0259rin professional t\u0259mizl\u0259nm\u0259si", href: "/services/gigiyena/professional-cleaning" },
              { label: "Air-Flow il\u0259 t\u0259mizl\u0259m\u0259", href: "/services/gigiyena/air-flow" },
              { label: "Scaler il\u0259 di\u015f t\u0259mizl\u0259m\u0259", href: "/services/gigiyena/scaler-cleaning" },
            ],
          },
          {
            title: "Estetik stomatologiya",
            items: [
              { label: "Ev \u015f\u0259raitind\u0259 di\u015fl\u0259rin a\u011fard\u0131lmas\u0131", href: "/services/estetik/ev-seraitinde-agardilma" },
              { label: "Klinikada di\u015fl\u0259rin a\u011fard\u0131lmas\u0131", href: "/services/estetik/klinikada-agardilma" },
              { label: "Di\u015f viniri", href: "/services/estetik/dis-viniri" },
            ],
          },
        ],
      },
    },
    hero: {
      badge: "",
      title: "\u018fziz t\u0259b\u0259ss\u00fcm, S\u0259n Azadsan!",
      description: "",
      primaryCta: "",
      secondaryCta: "",
      scrollLabel: "A\u015fa\u011f\u0131",
      quickLinks: [
        { label: "Texnologiyalar", href: "#services" },
        { label: "Hekay\u0259miz", href: "#stories" },
      ],
      image: {
        src: heroImage,
        alt: "Sakit stomatoloji klinika",
      },
    },
    stats: [
      { value: 30, suffix: "+", label: "texnoloji avadanl\u0131q" },
      { value: 4, suffix: "+", label: "m\u00fct\u0259x\u0259ssis h\u0259kim" },
      { value: 20000, suffix: "+", label: "u\u011furlu m\u00fcalic\u0259" },
    ],
    services: {
      label: "Dental xidm\u0259tl\u0259r",
      title: "siz\u0259 t\u0259klif edirik",
      items: [
        {
          title: "Diaqnostika",
          description:
            "R\u0259q\u0259msal g\u00f6r\u00fcnt\u00fcl\u0259m\u0259 il\u0259 d\u0259qiq analiz v\u0259 f\u0259rdi plan.",
        },
        {
          title: "Gigiyena",
          description:
            "Professional t\u0259mizl\u0259m\u0259 v\u0259 sa\u011flam g\u00fcl\u00fc\u015f \u00fc\u00e7\u00fcn profilaktika.",
        },
        {
          title: "Endodontiya",
          description:
            "M\u00fcasir kanal m\u00fcalic\u0259si il\u0259 a\u011fr\u0131s\u0131z yana\u015fma.",
        },
        {
          title: "C\u0259rrahiyy\u0259",
          description:
            "Z\u0259rif v\u0259 t\u0259hl\u00fck\u0259siz oral c\u0259rrahi prosedurlar.",
        },
        {
          title: "Protezl\u0259m\u0259",
          description:
            "Estetik v\u0259 funksional protez h\u0259ll\u0259ri.",
        },
        {
          title: "Ortodontiya",
          description:
            "Breket v\u0259 \u015f\u0259ffaf aparatlar il\u0259 d\u00fczg\u00fcn d\u00fcz\u00fcl\u00fc\u015f.",
        },
        {
          title: "\u0130mplantologiya",
          description:
            "D\u0259qiq planlama il\u0259 dayan\u0131ql\u0131 implantlar.",
        },
        {
          title: "Qapaqlar",
          description:
            "Zirkon v\u0259 keramik qapaqlar il\u0259 t\u0259bii g\u00f6r\u00fcn\u00fc\u015f.",
        },
        {
          title: "Fotokurs",
          description:
            "G\u00fcl\u00fc\u015f dizayn\u0131 \u00fc\u00e7\u00fcn foto protokol v\u0259 analiz.",
        },
      ],
    },
    whyUs: {
      label: "Bizi se\u00e7m\u0259yiniz",
      title: "\u00fc\u00e7\u00fcn \u0259sas s\u0259b\u0259bl\u0259r",
      image: {
        src: whyUsImage,
        alt: "Sakit klinikada h\u0259kim",
      },
      reasons: [
        { title: "Yenilik", description: "" },
        { title: "D\u00fcr\u00fcstl\u00fck", description: "" },
        { title: "\u0130nki\u015faf", description: "" },
        { title: "G\u00fcl\u0259r\u00fczl\u00fck", description: "" },
        { title: "Keyfiyy\u0259t", description: "" },
        { title: "Pe\u015f\u0259karl\u0131q", description: "" },
      ],
    },
    foreignPatients: {
      label: "Xarici pasiyentl\u0259r",
      title: "Xarici pasiyentl\u0259r \u00fc\u00e7\u00fcn rahat xidm\u0259t",
      description:
        "Bak\u0131ya g\u0259l\u0259n pasiyentl\u0259r \u00fc\u00e7\u00fcn \u0259vv\u0259lc\u0259d\u0259n planlama, online konsultasiya v\u0259 \u00e7oxdilli d\u0259st\u0259k t\u0259qdim edirik.",
      highlights: [
        "Online ilkin konsultasiya",
        "Transfer v\u0259 yerl\u0259\u015fdirm\u0259 d\u0259st\u0259yi",
        "F\u0259rdi m\u00fcalic\u0259 plan\u0131",
        "\u0130ngilis v\u0259 rus dill\u0259rind\u0259 xidm\u0259t",
      ],
      cta: "Beyn\u0259lxalq konsultasiya",
    },
    servicesPages: {
      image: servicesPageImage,
      detailsTitle: "Xidm\u0259t haqq\u0131nda",
      breadcrumb: {
        home: "Ana s\u0259hif\u0259",
        services: "Xidm\u0259tl\u0259r",
      },
      notFound: "Xidm\u0259t tap\u0131lmad\u0131.",
      categories: servicesPageCategoriesAz,
    },
    statement: {
      text: "G\u00fcl\u00fc\u015f, insan\u0131n sa\u011flam v\u0259 estetik di\u015fl\u0259rl\u0259 d\u0259st\u0259kl\u0259n\u0259n \u0259n g\u00f6z\u0259l nax\u0131\u015f\u0131d\u0131r",
      cta: "Onlayn q\u0259bula yaz\u0131l\u0131n",
      ctaHref: "#contact",
    },
    team: {
      label: "Komanda",
      title:
        "H\u0259r g\u00fcv\u0259nli t\u0259b\u0259ss\u00fcm\u00fcn arxas\u0131nda pe\u015f\u0259karlar dayan\u0131r.",
      socialLabels: {
        email: "E-po\u00e7t",
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "LinkedIn",
      },
      members: [
        {
          name: "Elnur H\u0259s\u0259nli",
          role: "Ba\u015f h\u0259kim, estetik stomatologiya",
          image: teamImages.elnur,
          socials: teamSocials.elnur,
        },
        {
          name: "Nigar H\u0259s\u0259nli",
          role: "Ortodont",
          image: teamImages.nigar,
          socials: teamSocials.nigar,
        },
        {
          name: "R\u0259\u015fid M\u0259mm\u0259dzad\u0259",
          role: "C\u0259rrah-stomatoloq",
          image: teamImages.rashid,
          socials: teamSocials.rashid,
        },
        {
          name: "Valeh Q\u0259hr\u0259manov",
          role: "\u0130mplantoloq",
          image: teamImages.valeh,
          socials: teamSocials.valeh,
        },
      ],
    },
    staff: {
      label: "Personal",
      title: "Klinika personal\u0131",
      socialLabels: {
        email: "E-po\u00e7t",
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "LinkedIn",
      },
      members: [
        {
          name: "Firuz\u0259 H\u0259s\u0259nli",
          role: "Personal",
          image: staffImages.firuza,
        },
        {
          name: "Sima Ba\u011f\u0131rova",
          role: "Personal",
          image: staffImages.sima,
        },
        {
          name: "Aysel Zeynall\u0131",
          role: "Personal",
          image: staffImages.aysel,
        },
        {
          name: "M\u0259rz\u0259xan\u0131m H\u0259s\u0259nova",
          role: "Personal",
          image: staffImages.merze,
        },
      ],
    },
    stories: {
      label: "Hekay\u0259l\u0259r",
      title: "Pasiyentl\u0259rin real hekay\u0259l\u0259ri v\u0259 klinika atmosferi.",
      openLabel: "Hekay\u0259ni a\u00e7",
      closeLabel: "Hekay\u0259ni ba\u011fla",
      stories: [
        {
          title: "G\u00fcl\u00fc\u015f dizayn\u0131",
          name: "Aysel",
          label: "G\u00fcl\u00fc\u015f dizayn\u0131",
          image: storyImages.portraitA,
          description:
            "D\u0259qiq \u00f6l\u00e7\u00fcl\u0259r v\u0259 r\u0259ng balans\u0131 il\u0259 t\u0259bii, z\u0259rif g\u00fcl\u00fc\u015f \u0259ld\u0259 etdik.",
        },
        {
          title: "Ortodontik rahatl\u0131q",
          name: "Tural",
          label: "Ortodontiya",
          image: storyImages.portraitB,
          description:
            "\u015e\u0259ffaf aparatlar say\u0259sind\u0259 d\u00fcz\u00fcl\u00fc\u015f s\u00fcr\u0259tli v\u0259 komfortlu oldu.",
        },
        {
          title: "Estetik qapaqlar",
          name: "Lal\u0259",
          label: "Qapaqlar",
          image: storyImages.portraitC,
          description:
            "Keramik qapaqlar il\u0259 t\u0259bii parlaql\u0131q v\u0259 simmetriya b\u0259rpa edildi.",
        },
        {
          title: "\u0130mplant plan\u0131",
          name: "Kamran",
          label: "\u0130mplantologiya",
          image: storyImages.portraitD,
          description:
            "D\u0259qiq planlama n\u0259tic\u0259sind\u0259 funksional v\u0259 estetik n\u0259tic\u0259 \u0259ld\u0259 etdik.",
        },
        {
          title: "Pediatrik rahatl\u0131q",
          name: "Mina",
          label: "U\u015faq stomatologiyas\u0131",
          image: storyImages.portraitE,
          description:
            "Rahat v\u0259 dostyana yana\u015fma il\u0259 ilk m\u00fcayin\u0259 stresssiz ke\u00e7di.",
        },
        {
          title: "A\u011fartma seans\u0131",
          name: "Elvin",
          label: "Gigiyena",
          image: storyImages.portraitF,
          description:
            "Z\u0259rif a\u011fartma il\u0259 t\u0259miz v\u0259 i\u015f\u0131ql\u0131 g\u00fcl\u00fc\u015f \u0259ld\u0259 edildi.",
        },
      ],
    },
    blog: {
      label: "",
      title: "Di\u015f sa\u011flaml\u0131\u011f\u0131 haqq\u0131nda",
      subtitle: "faydal\u0131 m\u0259lumatlar",
      controls: {
        previous: "Geri",
        next: "\u0130r\u0259li",
      },
      posts: [
        {
          title: "Ortodontik M\u00fcalic\u0259nin \u018fh\u0259miyy\u0259ti",
          date: "02 Sentyabr 2025",
          excerpt:
            "A\u011f\u0131z gigiyenas\u0131: Di\u015fl\u0259ri m\u00fcnt\u0259z\u0259m olaraq f\u0131r\u00e7alamaq v\u0259 di\u015f sap\u0131ndan (floss) istifad\u0259 etm\u0259k l\u0259k\u0259l\u0259rin qar\u015f\u0131s\u0131n\u0131 alma\u011fa k\u00f6m\u0259k edir.",
          image: blogImages.ds1,
        },
        {
          title: "Parlaq T\u0259b\u0259ss\u00fcm\u00fc Qorumaq \u00dc\u00e7\u00fcn M\u0259sl\u0259h\u0259tl\u0259r",
          date: "06 Sentyabr 2025",
          excerpt:
            "Parlaq v\u0259 sa\u011flam t\u0259b\u0259ss\u00fcm h\u0259r k\u0259sin arzusudur. D\u00fczg\u00fcn qulluq v\u0259 sa\u011flam h\u0259yat t\u0259rzi il\u0259 di\u015fl\u0259rinizin t\u0259bii parlaql\u0131\u011f\u0131n\u0131 qoruyub saxlaya bil\u0259rsiniz.",
          image: blogImages.ds2,
        },
        {
          title: "Di\u015f A\u011fartma \u00dcsullar\u0131",
          date: "08 Sentyabr 2025",
          excerpt:
            "A\u011f\u0131z gigiyenas\u0131: Di\u015fl\u0259ri m\u00fcnt\u0259z\u0259m olaraq f\u0131r\u00e7alamaq v\u0259 di\u015f sap\u0131ndan (floss) istifad\u0259 etm\u0259k l\u0259k\u0259l\u0259rin qar\u015f\u0131s\u0131n\u0131 alma\u011fa k\u00f6m\u0259k edir.",
          image: blogImages.ds3,
        },
      ],
    },
    educationPage: {
      breadcrumb: {
        home: "Ana s\u0259hif\u0259",
        current: "T\u0259dris",
      },
    },
    aboutPage: {
      breadcrumb: {
        home: "Ana s\u0259hif\u0259",
        current: "Biz kimik?",
      },
      hero: {
        title: "Bizi se\u00e7m\u0259yiniz",
        subtitle: "\u00fc\u00e7\u00fcn \u0259sas s\u0259b\u0259bl\u0259r",
        description: [
          "Art & Smile Dental 2012-ci ild\u0259n Bak\u0131 \u015f\u0259h\u0259rind\u0259 m\u00fcasir v\u0259 etibarl\u0131 di\u015f klinikas\u0131 kimi f\u0259aliyy\u0259t g\u00f6st\u0259rir.",
          "Komandam\u0131z pasiyent\u0259 f\u0259rdi yana\u015fma, m\u00fcasir avadanl\u0131q v\u0259 sakit m\u00fchit t\u0259min etm\u0259yi \u0259sas d\u0259y\u0259r kimi q\u0259bul edir.",
          "H\u0259r m\u00fcayin\u0259 v\u0259 m\u00fcalic\u0259 d\u0259qiq planlan\u0131r, n\u0259tic\u0259l\u0259r is\u0259 \u015f\u0259ffaf \u015f\u0259kild\u0259 izah olunur.",
        ],
        image: {
          src: heroImage,
          alt: "Art & Smile klinikas\u0131",
        },
      },
      advantages: {
        title: "Xidm\u0259tl\u0259rimizd\u0259 se\u00e7il\u0259n",
        subtitle: "\u0259sas \u00fcst\u00fcnl\u00fckl\u0259r",
        description: [
          "Art & Smile Dental olaraq, t\u0259cr\u00fcb\u0259, keyfiyy\u0259t v\u0259 etibara \u0259saslanan xidm\u0259t g\u00f6st\u0259ririk.",
          "M\u00fcasir texnologiya v\u0259 pasiyent rahatl\u0131\u011f\u0131 h\u0259r add\u0131mda prioritetdir.",
        ],
        items: [
          { title: "Pe\u015f\u0259karl\u0131q", description: "T\u0259cr\u00fcb\u0259li v\u0259 ixtisasl\u0131 h\u0259kim hey\u0259ti." },
          { title: "Texnologiya", description: "\u018fn son avadanl\u0131qlardan istifad\u0259." },
          { title: "Qay\u011f\u0131", description: "Pasiyent\u0259 f\u0259rdi yana\u015fma v\u0259 rahatl\u0131q." },
          { title: "Etibar", description: "\u015e\u0259ffaf planlama v\u0259 ayd\u0131n n\u0259tic\u0259l\u0259r." },
          { title: "Keyfiyy\u0259t", description: "Materiallarda y\u00fcks\u0259k standart." },
          { title: "Davaml\u0131 inki\u015faf", description: "Daimi t\u0259lim v\u0259 yenilikl\u0259r." },
        ],
      },
      video: {
        title: "Klinikam\u0131zdan",
        subtitle: "q\u0131sa video",
        description: "M\u00fchitimiz v\u0259 komandam\u0131zla yax\u0131ndan tan\u0131\u015f olun.",
        src: "/brand/abtus.mp4",
      },
    },
    faq: {
      label: "FAQ",
      title: "Q\u0259bula g\u0259lm\u0259zd\u0259n \u0259vv\u0259l bilm\u0259li olduqlar\u0131n\u0131z.",
      items: [
        {
          question: "U\u015faqlar\u0131 q\u0259bul edirsiniz?",
          answer:
            "B\u0259li. U\u015faq pasiyentl\u0259r \u00fc\u00e7\u00fcn x\u00fcsusi diqq\u0259t v\u0259 rahat m\u00fchit t\u0259qdim edirik.",
        },
        {
          question: "Q\u0259bula nec\u0259 yaz\u0131la bil\u0259r\u0259m?",
          answer:
            "\u018flaq\u0259 formas\u0131n\u0131 doldurun v\u0259 ya klinikaya z\u0259ng edin. 24 saat \u0259rzind\u0259 t\u0259sdiq edirik.",
        },
        {
          question: "Hans\u0131 texnologiyalardan istifad\u0259 edirsiniz?",
          answer:
            "R\u0259q\u0259msal diaqnostika, m\u00fcasir g\u00f6r\u00fcnt\u00fcl\u0259m\u0259 v\u0259 y\u00fcks\u0259k d\u0259qiqlikli avadanl\u0131q.",
        },
        {
          question: "M\u00fcalic\u0259 plan\u0131 nec\u0259 haz\u0131rlan\u0131r?",
          answer:
            "\u0130lkin m\u00fcayin\u0259d\u0259n sonra f\u0259rdi ehtiyaclar\u0131n\u0131za uy\u011fun m\u0259rh\u0259l\u0259li plan qurulur.",
        },
      ],
    },
    contact: {
      label: "\u018flaq\u0259",
      title: "Sakit v\u0259 f\u0259rdi q\u0259bul \u00fc\u00e7\u00fcn m\u00fcraci\u0259t edin.",
      description:
        "M\u0259lumatlar\u0131n\u0131z\u0131 g\u00f6nd\u0259rin, koordinatorlar\u0131m\u0131z 24 saat \u0259rzind\u0259 sizinl\u0259 \u0259laq\u0259 saxlayacaq.",
      statusMessages: {
        sending: "G\u00f6nd\u0259rilir...",
        success:
          "Mesaj g\u00f6nd\u0259rildi. Tezlikl\u0259 sizinl\u0259 \u0259laq\u0259 saxlan\u0131lacaq.",
        error:
          "Mesaj g\u00f6nd\u0259rm\u0259k m\u00fcmk\u00fcn olmad\u0131. Z\u0259hm\u0259t olmasa yenid\u0259n c\u0259hd edin.",
        genericError:
          "Haz\u0131rda g\u00f6nd\u0259rm\u0259k m\u00fcmk\u00fcn deyil. Z\u0259hm\u0259t olmasa yenid\u0259n c\u0259hd edin.",
      },
      form: {
        nameLabel: "Ad Soyad",
        namePlaceholder: "Ad\u0131n\u0131z",
        phoneLabel: "Telefon",
        phonePlaceholder: "+994",
        emailLabel: "Email",
        emailPlaceholder: "email@domen.com",
        messageLabel: "Mesaj",
        messagePlaceholder: "M\u00fcraci\u0259tinizi q\u0131sa yaz\u0131n",
        cta: "\u018flaq\u0259 saxla",
      },
      details: {
        title: "Klinikaya g\u0259lin",
        address: "Bak\u0131, Az\u0259rbaycan, Nizami k\u00fc\u00e7\u0259si 45",
        hours: "Bazar ert\u0259si - \u015e\u0259nb\u0259, 9:00 - 19:00",
        phone: "+994 (12) 555 24 24",
        email: "hello@artandsmile.az",
        note:
          "S\u00fcr\u0259tli cavab ist\u0259yirsiniz? Mesaj g\u00f6nd\u0259rin, bir i\u015f g\u00fcn\u00fc \u0259rzind\u0259 q\u0259bul vaxt\u0131n\u0131 t\u0259sdiq ed\u0259k.",
      },
    },
    footer: {
      title: "Daha sakit bir stomatoloji t\u0259cr\u00fcb\u0259y\u0259 haz\u0131rs\u0131n\u0131z?",
      description:
        "Q\u0259bula yaz\u0131l\u0131n, m\u00fct\u0259x\u0259ssisl\u0259rimiz sizi y\u00f6nl\u0259ndirsin.",
      primaryCta: "Q\u0259bula yaz\u0131l",
      secondaryCta: "Xidm\u0259tl\u0259r\u0259 bax",
      rights: "\u00a9 2025 B\u00fct\u00fcn H\u00fcquqlar Qorunur",
      developer: "KG Group",
    },
    floating: {
      whatsappLabel: "WhatsApp il\u0259 \u0259laq\u0259",
    },
  },
  en: {
    navLinks: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/#team" },
      { label: "Services", href: "/#services" },
      { label: "Education", href: "/education" },
      { label: "Contact", href: "/#contact" },
    ],
    header: {
      cta: "Have a question?",
      tagline: "for foreigners",
      menuLabel: "Toggle menu",
      languageLabel: "Language",
      teamMenu: {
        items: [
          { label: "Doctors", href: "/#team" },
          { label: "Staff", href: "/staff" },
        ],
      },
      servicesMenu: {
        groups: [
          {
            title: "Diagnostics",
            items: [
              { label: "Panoramic X-ray", href: "/services/diaqnostika/panoram-rentgen" },
              { label: "Cephalometric X-ray", href: "/services/diaqnostika/sefalometrik-rentgen" },
              { label: "3D CBCT scan", href: "/services/diaqnostika/cbct" },
            ],
          },
          {
            title: "Hygiene",
            items: [
              { label: "Professional cleaning", href: "/services/gigiyena/professional-cleaning" },
              { label: "Air-flow polishing", href: "/services/gigiyena/air-flow" },
              { label: "Scaler cleaning", href: "/services/gigiyena/scaler-cleaning" },
            ],
          },
          {
            title: "Aesthetic dentistry",
            items: [
              { label: "At-home whitening", href: "/services/estetik/ev-seraitinde-agardilma" },
              { label: "In-clinic whitening", href: "/services/estetik/klinikada-agardilma" },
              { label: "Dental veneers", href: "/services/estetik/dis-viniri" },
            ],
          },
        ],
      },
    },
    hero: {
      badge: "",
      title: "Dear smile, you're free!",
      description: "",
      primaryCta: "",
      secondaryCta: "",
      scrollLabel: "Scroll",
      quickLinks: [
        { label: "Technologies", href: "#services" },
        { label: "Our stories", href: "#stories" },
      ],
      image: {
        src: heroImage,
        alt: "Calm dental clinic",
      },
    },
    stats: [
      { value: 30, suffix: "+", label: "technological equipment" },
      { value: 4, suffix: "+", label: "specialist doctors" },
      { value: 20000, suffix: "+", label: "successful treatments" },
    ],
    services: {
      label: "Dental services",
      title: "we offer you",
      items: [
        {
          title: "Diagnostics",
          description: "Digital imaging and precise analysis for a tailored plan.",
        },
        {
          title: "Hygiene",
          description:
            "Professional cleaning and preventive care for a healthy smile.",
        },
        {
          title: "Endodontics",
          description: "Gentle root canal therapy with modern techniques.",
        },
        {
          title: "Surgery",
          description: "Safe and careful oral surgical procedures.",
        },
        {
          title: "Prosthetics",
          description: "Functional, aesthetic prosthetic solutions.",
        },
        {
          title: "Orthodontics",
          description: "Braces and clear aligners for perfect alignment.",
        },
        {
          title: "Implantology",
          description: "Stable implants with precise planning.",
        },
        {
          title: "Crowns",
          description: "Zirconia and ceramic crowns with a natural finish.",
        },
        {
          title: "Photo protocol",
          description: "Smile design photography and analysis for accuracy.",
        },
      ],
    },
    whyUs: {
      label: "Why choose us",
      title: "key reasons",
      image: {
        src: whyUsImage,
        alt: "Doctor in a calm clinic",
      },
      reasons: [
        { title: "Innovation", description: "" },
        { title: "Integrity", description: "" },
        { title: "Growth", description: "" },
        { title: "Warmth", description: "" },
        { title: "Quality", description: "" },
        { title: "Professionalism", description: "" },
      ],
    },
    foreignPatients: {
      label: "International patients",
      title: "Seamless care for international patients",
      description:
        "We support visiting patients with pre-planning, online consultations, and multilingual assistance.",
      highlights: [
        "Online pre-consultation",
        "Transfer and accommodation support",
        "Personalized treatment plan",
        "Care in English and Russian",
      ],
      cta: "International consultation",
    },
    servicesPages: {
      image: servicesPageImage,
      detailsTitle: "About the service",
      breadcrumb: {
        home: "Home",
        services: "Services",
      },
      notFound: "Service not found.",
      categories: servicesPageCategoriesEn,
    },
    statement: {
      text: "A smile is the most beautiful pattern, supported by healthy and aesthetic teeth.",
      cta: "Book an online appointment",
      ctaHref: "#contact",
    },
    team: {
      label: "Team",
      title: "Meet the doctors behind every confident smile.",
      socialLabels: {
        email: "Email",
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "LinkedIn",
      },
      members: [
        {
          name: "Elnur H\u0259s\u0259nli",
          role: "Chief doctor, aesthetic dentistry",
          image: teamImages.elnur,
          socials: teamSocials.elnur,
        },
        {
          name: "Nigar H\u0259s\u0259nli",
          role: "Orthodontist",
          image: teamImages.nigar,
          socials: teamSocials.nigar,
        },
        {
          name: "R\u0259\u015fid M\u0259mm\u0259dzad\u0259",
          role: "Oral surgeon",
          image: teamImages.rashid,
          socials: teamSocials.rashid,
        },
        {
          name: "Valeh Q\u0259hr\u0259manov",
          role: "Implantologist",
          image: teamImages.valeh,
          socials: teamSocials.valeh,
        },
      ],
    },
    staff: {
      label: "Staff",
      title: "Clinic staff",
      socialLabels: {
        email: "Email",
        instagram: "Instagram",
        facebook: "Facebook",
        linkedin: "LinkedIn",
      },
      members: [
        {
          name: "Firuz\u0259 H\u0259s\u0259nli",
          role: "Staff",
          image: staffImages.firuza,
        },
        {
          name: "Sima Ba\u011f\u0131rova",
          role: "Staff",
          image: staffImages.sima,
        },
        {
          name: "Aysel Zeynall\u0131",
          role: "Staff",
          image: staffImages.aysel,
        },
        {
          name: "M\u0259rz\u0259xan\u0131m H\u0259s\u0259nova",
          role: "Staff",
          image: staffImages.merze,
        },
      ],
    },
    stories: {
      label: "Stories",
      title: "Patient stories and the clinic atmosphere.",
      openLabel: "Open story",
      closeLabel: "Close story",
      stories: [
        {
          title: "Smile design",
          name: "Aysel",
          label: "Smile design",
          image: storyImages.portraitA,
          description:
            "Precise measurements and shade balance delivered a natural, refined smile.",
        },
        {
          title: "Orthodontic comfort",
          name: "Tural",
          label: "Orthodontics",
          image: storyImages.portraitB,
          description:
            "Clear aligners helped achieve alignment quickly and comfortably.",
        },
        {
          title: "Aesthetic crowns",
          name: "Lal\u0259",
          label: "Crowns",
          image: storyImages.portraitC,
          description:
            "Ceramic crowns restored symmetry with a natural glow.",
        },
        {
          title: "Implant plan",
          name: "Kamran",
          label: "Implantology",
          image: storyImages.portraitD,
          description:
            "A precise plan delivered functional and aesthetic results.",
        },
        {
          title: "Pediatric comfort",
          name: "Mina",
          label: "Pediatric dentistry",
          image: storyImages.portraitE,
          description:
            "A friendly approach made the first visit calm and stress-free.",
        },
        {
          title: "Whitening session",
          name: "Elvin",
          label: "Hygiene",
          image: storyImages.portraitF,
          description:
            "Gentle whitening delivered a clean, radiant smile.",
        },
      ],
    },
    blog: {
      label: "",
      title: "About dental health",
      subtitle: "useful information",
      controls: {
        previous: "Previous",
        next: "Next",
      },
      posts: [
        {
          title: "The importance of orthodontic treatment",
          date: "02 September 2025",
          excerpt:
            "Oral hygiene: Brushing regularly and using dental floss helps prevent stains.",
          image: blogImages.ds1,
        },
        {
          title: "Tips to keep a bright smile",
          date: "06 September 2025",
          excerpt:
            "A bright, healthy smile is everyone's goal. With proper care and a healthy lifestyle, you can preserve the natural shine of your teeth.",
          image: blogImages.ds2,
        },
        {
          title: "Teeth whitening methods",
          date: "08 September 2025",
          excerpt:
            "Oral hygiene: Brushing regularly and using dental floss helps prevent stains.",
          image: blogImages.ds3,
        },
      ],
    },
    educationPage: {
      breadcrumb: {
        home: "Home",
        current: "Education",
      },
    },
    aboutPage: {
      breadcrumb: {
        home: "Home",
        current: "About us",
      },
      hero: {
        title: "Why choose us",
        subtitle: "key reasons",
        description: [
          "Art & Smile Dental has served Baku since 2012 as a modern, trusted clinic.",
          "We focus on individualized care, advanced equipment, and a calm environment.",
          "Every exam and treatment plan is carefully explained and transparent.",
        ],
        image: {
          src: heroImage,
          alt: "Art & Smile clinic",
        },
      },
      advantages: {
        title: "Key advantages",
        subtitle: "in our services",
        description: [
          "We build every service on experience, quality, and trust.",
          "Modern technology and patient comfort stay at the center of our work.",
        ],
        items: [
          { title: "Professionalism", description: "Experienced, specialized doctors." },
          { title: "Technology", description: "Latest equipment and protocols." },
          { title: "Care", description: "Personalized, calm approach." },
          { title: "Trust", description: "Transparent planning and outcomes." },
          { title: "Quality", description: "High standards in materials." },
          { title: "Continuous growth", description: "Ongoing training and innovation." },
        ],
      },
      video: {
        title: "Clinic tour",
        subtitle: "short video",
        description: "Take a closer look at our team and environment.",
        src: "/brand/abtus.mp4",
      },
    },
    faq: {
      label: "FAQ",
      title: "Everything you need before your visit.",
      items: [
        {
          question: "Do you treat children?",
          answer: "Yes. We provide gentle pediatric care in a comfortable setting.",
        },
        {
          question: "How do I book an appointment?",
          answer:
            "Fill out the contact form or call the clinic. We confirm within 24 hours.",
        },
        {
          question: "What technologies do you use?",
          answer:
            "Digital diagnostics, modern imaging, and high-precision equipment.",
        },
        {
          question: "How is the treatment plan prepared?",
          answer:
            "After the initial exam, we design a step-by-step plan tailored to you.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Book a calm, personalized appointment.",
      description:
        "Share your details and our coordinators will reach out within 24 hours.",
      statusMessages: {
        sending: "Sending...",
        success: "Message sent. We'll reach out shortly.",
        error: "Something went wrong. Please try again.",
        genericError: "Unable to send right now. Please try again.",
      },
      form: {
        nameLabel: "Full name",
        namePlaceholder: "Your name",
        phoneLabel: "Phone",
        phonePlaceholder: "+994",
        emailLabel: "Email",
        emailPlaceholder: "you@email.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell us how we can help",
        cta: "Contact us",
      },
      details: {
        title: "Visit the clinic",
        address: "45 Nizami Street, Baku, Azerbaijan",
        hours: "Monday - Saturday, 9:00 - 19:00",
        phone: "+994 (12) 555 24 24",
        email: "hello@artandsmile.az",
        note:
          "Prefer a quick response? Send a message and we will confirm within one business day.",
      },
    },
    footer: {
      title: "Ready for a calmer dental experience?",
      description: "Book a visit and let our specialists guide your next smile.",
      primaryCta: "Book visit",
      secondaryCta: "View services",
      rights: "\u00a9 2025 All Rights Reserved",
      developer: "KG Group",
    },
    floating: {
      whatsappLabel: "Chat on WhatsApp",
    },
  },
  ru: {
    navLinks: [
      { label: "\u041e \u043d\u0430\u0441", href: "/about" },
      { label: "\u041a\u043e\u043c\u0430\u043d\u0434\u0430", href: "/#team" },
      { label: "\u0423\u0441\u043b\u0443\u0433\u0438", href: "/#services" },
      { label: "\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435", href: "/education" },
      { label: "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b", href: "/#contact" },
    ],
    header: {
      cta: "\u0415\u0441\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441?",
      tagline: "for foreigners",
      menuLabel: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e",
      languageLabel: "\u042f\u0437\u044b\u043a",
      teamMenu: {
        items: [
          { label: "\u0412\u0440\u0430\u0447\u0438", href: "/#team" },
          { label: "\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b", href: "/staff" },
        ],
      },
      servicesMenu: {
        groups: [
          {
            title: "\u0414\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0430",
            items: [
              { label: "\u041f\u0430\u043d\u043e\u0440\u0430\u043c\u043d\u044b\u0439 \u0440\u0435\u043d\u0442\u0433\u0435\u043d", href: "/services/diaqnostika/panoram-rentgen" },
              { label: "\u0426\u0435\u0444\u0430\u043b\u043e\u043c\u0435\u0442\u0440\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0440\u0435\u043d\u0442\u0433\u0435\u043d", href: "/services/diaqnostika/sefalometrik-rentgen" },
              { label: "3D \u0442\u043e\u043c\u043e\u0433\u0440\u0430\u0444\u0438\u044f (CBCT)", href: "/services/diaqnostika/cbct" },
            ],
          },
          {
            title: "\u0413\u0438\u0433\u0438\u0435\u043d\u0430",
            items: [
              { label: "\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0447\u0438\u0441\u0442\u043a\u0430", href: "/services/gigiyena/professional-cleaning" },
              { label: "Air-Flow \u0447\u0438\u0441\u0442\u043a\u0430", href: "/services/gigiyena/air-flow" },
              { label: "\u0427\u0438\u0441\u0442\u043a\u0430 \u0441\u043a\u0435\u0439\u043b\u0435\u0440\u043e\u043c", href: "/services/gigiyena/scaler-cleaning" },
            ],
          },
          {
            title: "\u042d\u0441\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u0438\u044f",
            items: [
              { label: "\u0414\u043e\u043c\u0430\u0448\u043d\u0435\u0435 \u043e\u0442\u0431\u0435\u043b\u0438\u0432\u0430\u043d\u0438\u0435", href: "/services/estetik/ev-seraitinde-agardilma" },
              { label: "\u041a\u043b\u0438\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0442\u0431\u0435\u043b\u0438\u0432\u0430\u043d\u0438\u0435", href: "/services/estetik/klinikada-agardilma" },
              { label: "\u0412\u0438\u043d\u0438\u0440\u044b", href: "/services/estetik/dis-viniri" },
            ],
          },
        ],
      },
    },
    hero: {
      badge: "",
      title: "\u0414\u043e\u0440\u043e\u0433\u0430\u044f \u0443\u043b\u044b\u0431\u043a\u0430, \u0442\u044b \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u0430!",
      description: "",
      primaryCta: "",
      secondaryCta: "",
      scrollLabel: "\u0412\u043d\u0438\u0437",
      quickLinks: [
        { label: "\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438", href: "#services" },
        { label: "\u041d\u0430\u0448\u0438 \u0438\u0441\u0442\u043e\u0440\u0438\u0438", href: "#stories" },
      ],
      image: {
        src: heroImage,
        alt: "\u0421\u043f\u043e\u043a\u043e\u0439\u043d\u0430\u044f \u0441\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u043b\u0438\u043d\u0438\u043a\u0430",
      },
    },
    stats: [
      { value: 30, suffix: "+", label: "\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435" },
      { value: 4, suffix: "+", label: "\u0432\u0440\u0430\u0447\u0438-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b" },
      { value: 20000, suffix: "+", label: "\u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0435 \u043b\u0435\u0447\u0435\u043d\u0438\u044f" },
    ],
    services: {
      label: "\u0421\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438",
      title: "\u043c\u044b \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c \u0432\u0430\u043c",
      items: [
        {
          title: "\u0414\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0430",
          description:
            "\u0426\u0438\u0444\u0440\u043e\u0432\u0430\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0442\u043e\u0447\u043d\u044b\u0439 \u0430\u043d\u0430\u043b\u0438\u0437 \u0434\u043b\u044f \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043b\u0430\u043d\u0430.",
        },
        {
          title: "\u0413\u0438\u0433\u0438\u0435\u043d\u0430",
          description:
            "\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0447\u0438\u0441\u0442\u043a\u0430 \u0438 \u043f\u0440\u043e\u0444\u0438\u043b\u0430\u043a\u0442\u0438\u043a\u0430 \u0434\u043b\u044f \u0437\u0434\u043e\u0440\u043e\u0432\u043e\u0439 \u0443\u043b\u044b\u0431\u043a\u0438.",
        },
        {
          title: "\u042d\u043d\u0434\u043e\u0434\u043e\u043d\u0442\u0438\u044f",
          description:
            "\u0429\u0430\u0434\u044f\u0449\u0435\u0435 \u043b\u0435\u0447\u0435\u043d\u0438\u0435 \u043a\u0430\u043d\u0430\u043b\u043e\u0432 \u0441 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0442\u043e\u0434\u0438\u043a\u0430\u043c\u0438.",
        },
        {
          title: "\u0425\u0438\u0440\u0443\u0440\u0433\u0438\u044f",
          description:
            "\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0435 \u0438 \u0430\u043a\u043a\u0443\u0440\u0430\u0442\u043d\u044b\u0435 \u0445\u0438\u0440\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b.",
        },
        {
          title: "\u041f\u0440\u043e\u0442\u0435\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",
          description:
            "\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0438 \u044d\u0441\u0442\u0435\u0442\u0438\u0447\u043d\u044b\u0435 \u043f\u0440\u043e\u0442\u0435\u0437\u043d\u044b\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u044f.",
        },
        {
          title: "\u041e\u0440\u0442\u043e\u0434\u043e\u043d\u0442\u0438\u044f",
          description:
            "\u0411\u0440\u0435\u043a\u0435\u0442\u044b \u0438 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0435 \u044d\u043b\u0430\u0439\u043d\u0435\u0440\u044b \u0434\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u043a\u0443\u0441\u0430.",
        },
        {
          title: "\u0418\u043c\u043f\u043b\u0430\u043d\u0442\u043e\u043b\u043e\u0433\u0438\u044f",
          description:
            "\u041d\u0430\u0434\u0435\u0436\u043d\u044b\u0435 \u0438\u043c\u043f\u043b\u0430\u043d\u0442\u044b \u0441 \u0442\u043e\u0447\u043d\u044b\u043c \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c.",
        },
        {
          title: "\u041a\u043e\u0440\u043e\u043d\u043a\u0438",
          description:
            "\u0426\u0438\u0440\u043a\u043e\u043d\u0438\u0435\u0432\u044b\u0435 \u0438 \u043a\u0435\u0440\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043a\u043e\u0440\u043e\u043d\u043a\u0438 \u0441 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0432\u0438\u0434\u043e\u043c.",
        },
        {
          title: "\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b",
          description:
            "\u0424\u043e\u0442\u043e\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0434\u043b\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0430 \u0443\u043b\u044b\u0431\u043a\u0438 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0430.",
        },
      ],
    },
    whyUs: {
      label: "\u041f\u043e\u0447\u0435\u043c\u0443 \u0432\u044b\u0431\u0438\u0440\u0430\u044e\u0442 \u043d\u0430\u0441",
      title: "\u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u044b",
      image: {
        src: whyUsImage,
        alt: "\u0412\u0440\u0430\u0447 \u0432 \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u043e\u0439 \u043a\u043b\u0438\u043d\u0438\u043a\u0435",
      },
      reasons: [
        { title: "\u0418\u043d\u043d\u043e\u0432\u0430\u0446\u0438\u0438", description: "" },
        { title: "\u0427\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u044c", description: "" },
        { title: "\u0420\u0430\u0437\u0432\u0438\u0442\u0438\u0435", description: "" },
        { title: "\u0414\u043e\u0431\u0440\u043e\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c", description: "" },
        { title: "\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e", description: "" },
        { title: "\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u0438\u0437\u043c", description: "" },
      ],
    },
    foreignPatients: {
      label: "\u0418\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0435 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u044b",
      title: "\u041a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0435 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0445 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432",
      description:
        "\u041c\u044b \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u043c \u043f\u0440\u0438\u0435\u0437\u0436\u0430\u044e\u0449\u0438\u043c \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430\u043c \u0441 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u043c \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c, \u043e\u043d\u043b\u0430\u0439\u043d \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f\u043c\u0438 \u0438 \u043c\u043d\u043e\u0433\u043e\u044f\u0437\u044b\u0447\u043d\u043e\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439.",
      highlights: [
        "\u041e\u043d\u043b\u0430\u0439\u043d \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f",
        "\u0422\u0440\u0430\u043d\u0441\u0444\u0435\u0440 \u0438 \u043f\u043e\u043c\u043e\u0449\u044c \u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u0435\u043c",
        "\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043b\u0430\u043d \u043b\u0435\u0447\u0435\u043d\u0438\u044f",
        "\u0421\u0435\u0440\u0432\u0438\u0441 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u0438 \u0440\u0443\u0441\u0441\u043a\u043e\u043c",
      ],
      cta: "\u041c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0430\u0446\u0438\u044f",
    },
    servicesPages: {
      image: servicesPageImage,
      detailsTitle: "\u041e\u0431 \u0443\u0441\u043b\u0443\u0433\u0435",
      breadcrumb: {
        home: "\u0413\u043b\u0430\u0432\u043d\u0430\u044f",
        services: "\u0423\u0441\u043b\u0443\u0433\u0438",
      },
      notFound: "\u0423\u0441\u043b\u0443\u0433\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430.",
      categories: servicesPageCategoriesRu,
    },
    statement: {
      text: "\u0423\u043b\u044b\u0431\u043a\u0430 \u2014 \u0441\u0430\u043c\u044b\u0439 \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0443\u0437\u043e\u0440, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u043d\u043d\u044b\u0439 \u0437\u0434\u043e\u0440\u043e\u0432\u044b\u043c\u0438 \u0438 \u044d\u0441\u0442\u0435\u0442\u0438\u0447\u043d\u044b\u043c\u0438 \u0437\u0443\u0431\u0430\u043c\u0438.",
      cta: "\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043e\u043d\u043b\u0430\u0439\u043d",
      ctaHref: "#contact",
    },
    team: {
      label: "\u041a\u043e\u043c\u0430\u043d\u0434\u0430",
      title: "\u041f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u0432\u0440\u0430\u0447\u0430\u043c\u0438, \u0441\u0442\u043e\u044f\u0449\u0438\u043c\u0438 \u0437\u0430 \u043a\u0430\u0436\u0434\u043e\u0439 \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0439 \u0443\u043b\u044b\u0431\u043a\u043e\u0439.",
      socialLabels: {
        email: "\u042d\u043b. \u043f\u043e\u0447\u0442\u0430",
        instagram: "\u0418\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c",
        facebook: "Facebook",
        linkedin: "LinkedIn",
      },
      members: [
        {
          name: "Elnur H\u0259s\u0259nli",
          role: "\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u0432\u0440\u0430\u0447, \u044d\u0441\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u0438\u044f",
          image: teamImages.elnur,
          socials: teamSocials.elnur,
        },
        {
          name: "Nigar H\u0259s\u0259nli",
          role: "\u041e\u0440\u0442\u043e\u0434\u043e\u043d\u0442",
          image: teamImages.nigar,
          socials: teamSocials.nigar,
        },
        {
          name: "R\u0259\u015fid M\u0259mm\u0259dzad\u0259",
          role: "\u0425\u0438\u0440\u0443\u0440\u0433-\u0441\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433",
          image: teamImages.rashid,
          socials: teamSocials.rashid,
        },
        {
          name: "Valeh Q\u0259hr\u0259manov",
          role: "\u0418\u043c\u043f\u043b\u0430\u043d\u0442\u043e\u043b\u043e\u0433",
          image: teamImages.valeh,
          socials: teamSocials.valeh,
        },
      ],
    },
    staff: {
      label: "\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b",
      title: "\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b \u043a\u043b\u0438\u043d\u0438\u043a\u0438",
      socialLabels: {
        email: "\u042d\u043b. \u043f\u043e\u0447\u0442\u0430",
        instagram: "\u0418\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c",
        facebook: "Facebook",
        linkedin: "LinkedIn",
      },
      members: [
        {
          name: "Firuz\u0259 H\u0259s\u0259nli",
          role: "\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b",
          image: staffImages.firuza,
        },
        {
          name: "Sima Ba\u011f\u0131rova",
          role: "\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b",
          image: staffImages.sima,
        },
        {
          name: "Aysel Zeynall\u0131",
          role: "\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b",
          image: staffImages.aysel,
        },
        {
          name: "M\u0259rz\u0259xan\u0131m H\u0259s\u0259nova",
          role: "\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b",
          image: staffImages.merze,
        },
      ],
    },
    stories: {
      label: "\u0418\u0441\u0442\u043e\u0440\u0438\u0438",
      title: "\u0418\u0441\u0442\u043e\u0440\u0438\u0438 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u043e\u0432 \u0438 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0430 \u043a\u043b\u0438\u043d\u0438\u043a\u0438.",
      openLabel: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e",
      closeLabel: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e",
      stories: [
        {
          title: "\u0414\u0438\u0437\u0430\u0439\u043d \u0443\u043b\u044b\u0431\u043a\u0438",
          name: "Aysel",
          label: "\u0414\u0438\u0437\u0430\u0439\u043d \u0443\u043b\u044b\u0431\u043a\u0438",
          image: storyImages.portraitA,
          description:
            "\u0422\u043e\u0447\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u0438 \u0431\u0430\u043b\u0430\u043d\u0441 \u043e\u0442\u0442\u0435\u043d\u043a\u0430 \u0434\u0430\u043b\u0438 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e, \u0443\u0442\u043e\u043d\u0447\u0435\u043d\u043d\u0443\u044e \u0443\u043b\u044b\u0431\u043a\u0443.",
        },
        {
          title: "\u041e\u0440\u0442\u043e\u0434\u043e\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043a\u043e\u043c\u0444\u043e\u0440\u0442",
          name: "Tural",
          label: "\u041e\u0440\u0442\u043e\u0434\u043e\u043d\u0442\u0438\u044f",
          image: storyImages.portraitB,
          description:
            "\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u044b\u0435 \u044d\u043b\u0430\u0439\u043d\u0435\u0440\u044b \u043f\u043e\u043c\u043e\u0433\u043b\u0438 \u0431\u044b\u0441\u0442\u0440\u043e \u0438 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e \u0432\u044b\u0440\u043e\u0432\u043d\u044f\u0442\u044c \u0437\u0443\u0431\u044b.",
        },
        {
          title: "\u042d\u0441\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043a\u043e\u0440\u043e\u043d\u043a\u0438",
          name: "Lal\u0259",
          label: "\u041a\u043e\u0440\u043e\u043d\u043a\u0438",
          image: storyImages.portraitC,
          description:
            "\u041a\u0435\u0440\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043a\u043e\u0440\u043e\u043d\u043a\u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438 \u0441\u0438\u043c\u043c\u0435\u0442\u0440\u0438\u044e \u0441 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0431\u043b\u0435\u0441\u043a\u043e\u043c.",
        },
        {
          title: "\u041f\u043b\u0430\u043d \u0438\u043c\u043f\u043b\u0430\u043d\u0442\u0430\u0446\u0438\u0438",
          name: "Kamran",
          label: "\u0418\u043c\u043f\u043b\u0430\u043d\u0442\u043e\u043b\u043e\u0433\u0438\u044f",
          image: storyImages.portraitD,
          description:
            "\u0422\u043e\u0447\u043d\u044b\u0439 \u043f\u043b\u0430\u043d \u0434\u0430\u043b \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0438 \u044d\u0441\u0442\u0435\u0442\u0438\u0447\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442.",
        },
        {
          title: "\u0414\u0435\u0442\u0441\u043a\u0438\u0439 \u043a\u043e\u043c\u0444\u043e\u0440\u0442",
          name: "Mina",
          label: "\u0414\u0435\u0442\u0441\u043a\u0430\u044f \u0441\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u0438\u044f",
          image: storyImages.portraitE,
          description:
            "\u0414\u0440\u0443\u0436\u0435\u043b\u044e\u0431\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0441\u0434\u0435\u043b\u0430\u043b \u043f\u0435\u0440\u0432\u044b\u0439 \u0432\u0438\u0437\u0438\u0442 \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u044b\u043c \u0438 \u0431\u0435\u0437 \u0441\u0442\u0440\u0435\u0441\u0441\u0430.",
        },
        {
          title: "\u0421\u0435\u0430\u043d\u0441 \u043e\u0442\u0431\u0435\u043b\u0438\u0432\u0430\u043d\u0438\u044f",
          name: "Elvin",
          label: "\u0413\u0438\u0433\u0438\u0435\u043d\u0430",
          image: storyImages.portraitF,
          description:
            "\u041c\u044f\u0433\u043a\u043e\u0435 \u043e\u0442\u0431\u0435\u043b\u0438\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u043b\u043e \u0447\u0438\u0441\u0442\u0443\u044e \u0438 \u0441\u0438\u044f\u044e\u0449\u0443\u044e \u0443\u043b\u044b\u0431\u043a\u0443.",
        },
      ],
    },
    blog: {
      label: "",
      title: "\u041e \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u0435 \u0437\u0443\u0431\u043e\u0432",
      subtitle: "\u043f\u043e\u043b\u0435\u0437\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",
      controls: {
        previous: "\u041d\u0430\u0437\u0430\u0434",
        next: "\u0412\u043f\u0435\u0440\u0451\u0434",
      },
      posts: [
        {
          title: "\u0412\u0430\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0440\u0442\u043e\u0434\u043e\u043d\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043b\u0435\u0447\u0435\u043d\u0438\u044f",
          date: "02 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2025",
          excerpt:
            "\u0413\u0438\u0433\u0438\u0435\u043d\u0430 \u043f\u043e\u043b\u043e\u0441\u0442\u0438 \u0440\u0442\u0430: \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u0430\u044f \u0447\u0438\u0441\u0442\u043a\u0430 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0443\u0431\u043d\u043e\u0439 \u043d\u0438\u0442\u0438 \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0442 \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u043f\u044f\u0442\u043d\u0430.",
          image: blogImages.ds1,
        },
        {
          title: "\u0421\u043e\u0432\u0435\u0442\u044b \u0434\u043b\u044f \u044f\u0440\u043a\u043e\u0439 \u0443\u043b\u044b\u0431\u043a\u0438",
          date: "06 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2025",
          excerpt:
            "\u042f\u0440\u043a\u0430\u044f \u0438 \u0437\u0434\u043e\u0440\u043e\u0432\u0430\u044f \u0443\u043b\u044b\u0431\u043a\u0430 \u2014 \u043c\u0435\u0447\u0442\u0430 \u043a\u0430\u0436\u0434\u043e\u0433\u043e. \u041f\u0440\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u043c \u0443\u0445\u043e\u0434\u0435 \u0438 \u0437\u0434\u043e\u0440\u043e\u0432\u043e\u043c \u043e\u0431\u0440\u0430\u0437\u0435 \u0436\u0438\u0437\u043d\u0438 \u0432\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0431\u043b\u0435\u0441\u043a \u0437\u0443\u0431\u043e\u0432.",
          image: blogImages.ds2,
        },
        {
          title: "\u041c\u0435\u0442\u043e\u0434\u044b \u043e\u0442\u0431\u0435\u043b\u0438\u0432\u0430\u043d\u0438\u044f \u0437\u0443\u0431\u043e\u0432",
          date: "08 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f 2025",
          excerpt:
            "\u0413\u0438\u0433\u0438\u0435\u043d\u0430 \u043f\u043e\u043b\u043e\u0441\u0442\u0438 \u0440\u0442\u0430: \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u0430\u044f \u0447\u0438\u0441\u0442\u043a\u0430 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0443\u0431\u043d\u043e\u0439 \u043d\u0438\u0442\u0438 \u043f\u043e\u043c\u043e\u0433\u0430\u044e\u0442 \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u043f\u044f\u0442\u043d\u0430.",
          image: blogImages.ds3,
        },
      ],
    },
    educationPage: {
      breadcrumb: {
        home: "\u0413\u043b\u0430\u0432\u043d\u0430\u044f",
        current: "\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435",
      },
    },
    aboutPage: {
      breadcrumb: {
        home: "\u0413\u043b\u0430\u0432\u043d\u0430\u044f",
        current: "\u041e \u043d\u0430\u0441",
      },
      hero: {
        title: "\u041f\u043e\u0447\u0435\u043c\u0443 \u0432\u044b\u0431\u0438\u0440\u0430\u044e\u0442 \u043d\u0430\u0441",
        subtitle: "\u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043f\u0440\u0438\u0447\u0438\u043d\u044b",
        description: [
          "Art & Smile Dental \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 \u0411\u0430\u043a\u0443 \u0441 2012 \u0433\u043e\u0434\u0430 \u043a\u0430\u043a \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0438 \u043d\u0430\u0434\u0435\u0436\u043d\u0430\u044f \u043a\u043b\u0438\u043d\u0438\u043a\u0430.",
          "\u041c\u044b \u0434\u0435\u043b\u0430\u0435\u043c \u0430\u043a\u0446\u0435\u043d\u0442 \u043d\u0430 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u043c \u043f\u043e\u0434\u0445\u043e\u0434\u0435, \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u043c \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0438 \u0438 \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u043e\u0439 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0435.",
          "\u041a\u0430\u0436\u0434\u044b\u0439 \u043e\u0441\u043c\u043e\u0442\u0440 \u0438 \u043f\u043b\u0430\u043d \u043b\u0435\u0447\u0435\u043d\u0438\u044f \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043e\u0431\u044a\u044f\u0441\u043d\u044f\u0435\u0442\u0441\u044f \u0438 \u043f\u0440\u043e\u0437\u0440\u0430\u0447\u0435\u043d.",
        ],
        image: {
          src: heroImage,
          alt: "\u041a\u043b\u0438\u043d\u0438\u043a\u0430 Art & Smile",
        },
      },
      advantages: {
        title: "\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",
        subtitle: "\u043d\u0430\u0448\u0438\u0445 \u0443\u0441\u043b\u0443\u0433",
        description: [
          "\u041c\u044b \u0441\u0442\u0440\u043e\u0438\u043c \u0441\u0435\u0440\u0432\u0438\u0441 \u043d\u0430 \u043e\u043f\u044b\u0442\u0435, \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438 \u0434\u043e\u0432\u0435\u0440\u0438\u0438.",
          "\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0438 \u043a\u043e\u043c\u0444\u043e\u0440\u0442 \u043f\u0430\u0446\u0438\u0435\u043d\u0442\u0430 \u2014 \u043d\u0430\u0448 \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442.",
        ],
        items: [
          { title: "\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u0438\u0437\u043c", description: "\u041e\u043f\u044b\u0442\u043d\u044b\u0435 \u0432\u0440\u0430\u0447\u0438-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b." },
          { title: "\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438", description: "\u041d\u043e\u0432\u0435\u0439\u0448\u0435\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u044b." },
          { title: "\u0417\u0430\u0431\u043e\u0442\u0430", description: "\u0418\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0438 \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434." },
          { title: "\u0414\u043e\u0432\u0435\u0440\u0438\u0435", description: "\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0435 \u043f\u043b\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442." },
          { title: "\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u043e", description: "\u0412\u044b\u0441\u043e\u043a\u0438\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u044b \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432." },
          { title: "\u041f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0435 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435", description: "\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0438 \u0438\u043d\u043d\u043e\u0432\u0430\u0446\u0438\u0438." },
        ],
      },
      video: {
        title: "\u0412\u0438\u0434\u0435\u043e \u043e \u043a\u043b\u0438\u043d\u0438\u043a\u0435",
        subtitle: "\u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043e\u0431\u0437\u043e\u0440",
        description: "\u041f\u043e\u0437\u043d\u0430\u043a\u043e\u043c\u044c\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u0448\u0435\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 \u0438 \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u043e\u0439.",
        src: "/brand/abtus.mp4",
      },
    },
    faq: {
      label: "FAQ",
      title: "\u0412\u0441\u0435, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0437\u043d\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u0432\u0438\u0437\u0438\u0442\u043e\u043c.",
      items: [
        {
          question: "\u0412\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442\u0435 \u0434\u0435\u0442\u0435\u0439?",
          answer:
            "\u0414\u0430. \u041c\u044b \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u043c \u0434\u0435\u043b\u0438\u043a\u0430\u0442\u043d\u044b\u0439 \u0443\u0445\u043e\u0434 \u0437\u0430 \u0434\u0435\u0442\u044c\u043c\u0438 \u0432 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0439 \u043e\u0431\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435.",
        },
        {
          question: "\u041a\u0430\u043a \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0440\u0438\u0435\u043c?",
          answer:
            "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443 \u0438\u043b\u0438 \u043f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u0432 \u043a\u043b\u0438\u043d\u0438\u043a\u0443. \u041c\u044b \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u043c \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 24 \u0447\u0430\u0441\u043e\u0432.",
        },
        {
          question: "\u041a\u0430\u043a\u0438\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435?",
          answer:
            "\u0426\u0438\u0444\u0440\u043e\u0432\u0430\u044f \u0434\u0438\u0430\u0433\u043d\u043e\u0441\u0442\u0438\u043a\u0430, \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0438 \u0432\u044b\u0441\u043e\u043a\u043e\u0442\u043e\u0447\u043d\u043e\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435.",
        },
        {
          question: "\u041a\u0430\u043a \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043b\u0430\u043d \u043b\u0435\u0447\u0435\u043d\u0438\u044f?",
          answer:
            "\u041f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0433\u043e \u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043c\u044b \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u043e\u0448\u0430\u0433\u043e\u0432\u044b\u0439 \u043f\u043b\u0430\u043d, \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0432\u0430\u0441.",
        },
      ],
    },
    contact: {
      label: "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",
      title: "\u0417\u0430\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u044b\u0439, \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0438\u0435\u043c.",
      description:
        "\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u0438 \u043d\u0430\u0448\u0438 \u043a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u043e\u0440\u044b \u0441\u0432\u044f\u0436\u0443\u0442\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 24 \u0447\u0430\u0441\u043e\u0432.",
      statusMessages: {
        sending: "\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c...",
        success:
          "\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e. \u041c\u044b \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0432\u0430\u043c\u0438 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f.",
        error:
          "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",
        genericError:
          "\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435.",
      },
      form: {
        nameLabel: "\u0418\u043c\u044f \u0438 \u0444\u0430\u043c\u0438\u043b\u0438\u044f",
        namePlaceholder: "\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",
        phoneLabel: "\u0422\u0435\u043b\u0435\u0444\u043e\u043d",
        phonePlaceholder: "+994",
        emailLabel: "Email",
        emailPlaceholder: "you@email.com",
        messageLabel: "\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",
        messagePlaceholder: "\u041e\u043f\u0438\u0448\u0438\u0442\u0435, \u0447\u0435\u043c \u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043c\u043e\u0447\u044c",
        cta: "\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f",
      },
      details: {
        title: "\u041f\u043e\u0441\u0435\u0442\u0438\u0442\u0435 \u043a\u043b\u0438\u043d\u0438\u043a\u0443",
        address: "45 Nizami Street, Baku, Azerbaijan",
        hours: "\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a - \u0421\u0443\u0431\u0431\u043e\u0442\u0430, 9:00 - 19:00",
        phone: "+994 (12) 555 24 24",
        email: "hello@artandsmile.az",
        note:
          "\u041d\u0443\u0436\u0435\u043d \u0431\u044b\u0441\u0442\u0440\u044b\u0439 \u043e\u0442\u0432\u0435\u0442? \u041e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435, \u043c\u044b \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043c \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u0434\u043d\u044f.",
      },
    },
    footer: {
      title: "\u0413\u043e\u0442\u043e\u0432\u044b \u043a \u0431\u043e\u043b\u0435\u0435 \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u043e\u043c\u0443 \u0441\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u043e\u043f\u044b\u0442\u0443?",
      description: "\u0417\u0430\u043f\u0438\u0448\u0438\u0442\u0435\u0441\u044c \u043d\u0430 \u043f\u0440\u0438\u0435\u043c, \u0438 \u043d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u043f\u043e\u043c\u043e\u0433\u0443\u0442 \u0432\u0430\u043c.",
      primaryCta: "\u0417\u0430\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f",
      secondaryCta: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0443\u0441\u043b\u0443\u0433\u0438",
      rights: "\u00a9 2025 \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b",
      developer: "KG Group",
    },
    floating: {
      whatsappLabel: "\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 WhatsApp",
    },
  },
} as const;
