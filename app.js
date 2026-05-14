const ORIGINAL_PRODUCTS = [
  {
    "id": "p1",
    "serial": 1,
    "name": "بيض  بيج ايج مائدة ابيض اورجانيك ( 6 ) بيضة",
    "barcode": "EG-766262545-6224003474062",
    "brand": "بيج ايج",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p2",
    "serial": 2,
    "name": "بيض  بيج ايج مائدة ابيض اورجانيك ( 10 ) بيضة",
    "barcode": "EG-766262545-6224003474055",
    "brand": "بيج ايج",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p4",
    "serial": 4,
    "name": "بيض بيج ايج مائدة ابيض اورجانيك ( 15 ) بيضة",
    "barcode": "EG-766262545-6224003474048",
    "brand": "بيج ايج",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p5",
    "serial": 5,
    "name": "بيض بيج ايج  مائدة ابيض  ( 15 ) قطعة كرتون",
    "barcode": "EG-766262545-6224003474191",
    "brand": "بيج ايج",
    "color": "أبيض",
    "note": "بيض مائدة ابيض  ( 15 ) قطعة كرتون"
  },
  {
    "id": "p7",
    "serial": 7,
    "name": "بيض بيج ايج   ابيض  مغلف ( 18 ) قطعة",
    "barcode": "EG-766262545-6224003474031",
    "brand": "بيج ايج",
    "color": "أبيض",
    "note": "بيض  ابيض  مغلف ( 18 ) قطعة"
  },
  {
    "id": "p8",
    "serial": 8,
    "name": "بيض بيج ايج مائدة ابيض اورجانيك ( 20 ) بيضة",
    "barcode": "EG-766262545-6224003474024",
    "brand": "بيج ايج",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p9",
    "serial": 9,
    "name": "بيض بيج ايج  مائدة ابيض اورجانيك ( 20 ) بيضة بلاستيك",
    "barcode": "EG-766262545-6224003474025",
    "brand": "بيج ايج",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p10",
    "serial": 10,
    "name": "بيض بيج ايج  مائدة ابيض اورجانيك (30) بيضة-كرتون",
    "barcode": "EG-766262545-6224003474017",
    "brand": "بيج ايج",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p13",
    "serial": 13,
    "name": "بيض بيج ايج  ابيض مغلف  (30) قطعة بلاستيك",
    "barcode": "EG-766262545-6224003474215",
    "brand": "بيج ايج",
    "color": "أبيض",
    "note": "بيض ابيض مغلف  (30) قطعة"
  },
  {
    "id": "p14",
    "serial": 14,
    "name": "بيض  بيج ايج مائدة ابيض  (30) قطعة  بلاستيك فنادق",
    "barcode": "EG-766262545-6224003474193",
    "brand": "بيج ايج",
    "color": "أبيض",
    "note": "بيض مائدة ابيض  (30) قطعة  بلاستيك فنادق"
  },
  {
    "id": "p21",
    "serial": 21,
    "name": "بيض بيج ايج  مائدة احمر اورجانيك ( 6 ) بيضة",
    "barcode": "EG-766262545-6224003474123",
    "brand": "بيج ايج",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p22",
    "serial": 22,
    "name": "بيض بيج ايج  مائدة احمر اورجانيك ( 10 ) بيضة",
    "barcode": "EG-766262545-6224003474116",
    "brand": "بيج ايج",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p24",
    "serial": 24,
    "name": "بيض بيج ايج  مائدة احمر اورجانيك ( 15 ) بيضة",
    "barcode": "EG-766262545-6224003474109",
    "brand": "بيج ايج",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p26",
    "serial": 26,
    "name": "بيض بيج ايج  مائدة احمر اورجانيك ( 15 ) بيضة كرتون",
    "barcode": "EG-766262545-6224003474110",
    "brand": "بيج ايج",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p27",
    "serial": 27,
    "name": "بيض بيج ايج  مائدة احمر اورجانيك ( 18 ) بيضة",
    "barcode": "EG-766262545-6224003474093",
    "brand": "بيج ايج",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p28",
    "serial": 28,
    "name": "بيض بيج ايج  مائدة احمر اورجانيك ( 20 ) بيضة",
    "barcode": "EG-766262545-6224003474086",
    "brand": "بيج ايج",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p29",
    "serial": 29,
    "name": "بيض  بيج ايج مائدة احمر اورجانيك ( 20 ) بيضة بلاستيك",
    "barcode": "EG-766262545-6224003474087",
    "brand": "بيج ايج",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p30",
    "serial": 30,
    "name": "بيض  بيج ايج مائدة احمر اورجانيك ( 30 ) بيضة-كرتون",
    "barcode": "EG-766262545-6224003474079",
    "brand": "بيج ايج",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p33",
    "serial": 33,
    "name": "بيض  بيج ايج مائدة احمر (30) شنطة بلاستيك",
    "barcode": "EG-766262545-6224003474222",
    "brand": "بيج ايج",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p34",
    "serial": 34,
    "name": "بيض بيج ايج  مائدة احمر (30) شنطة بلاستيك فنادق",
    "barcode": "EG-766262545-6224003474208",
    "brand": "بيج ايج",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p41",
    "serial": 41,
    "name": "بيض بيج ايج مائدة بلدي اورجانيك ( 6 ) بيضة",
    "barcode": "EG-766262545-6224003474185",
    "brand": "بيج ايج",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p42",
    "serial": 42,
    "name": "بيض بيج ايج مائدة بلدي اورجانيك ( 10 ) بيضة",
    "barcode": "EG-766262545-6224003474178",
    "brand": "بيج ايج",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p43",
    "serial": 43,
    "name": "بيض بيج ايج  مائدة بلدي اورجانيك ( 15 ) بيضة",
    "barcode": "EG-766262545-6224003474161",
    "brand": "بيج ايج",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p44",
    "serial": 44,
    "name": "بيض بيج ايج مائدة بلدي اورجانيك ( 15 ) بيضة كرتون",
    "barcode": "EG-766262545-6224003474162",
    "brand": "بيج ايج",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p45",
    "serial": 45,
    "name": "بيض بيج ايج مائدة  بلدي اورجانيك ( 18 ) بيضة",
    "barcode": "EG-766262545-6224003474154",
    "brand": "بيج ايج",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p46",
    "serial": 46,
    "name": "بيض بيج ايج  مائدة بلدي اورجانيك ( 20 ) بيضة",
    "barcode": "EG-766262545-6224003474147",
    "brand": "بيج ايج",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p47",
    "serial": 47,
    "name": "بيض  بيج ايج مائدة بلدي اورجانيك ( 20 ) بيضة بلاستيك",
    "barcode": "EG-766262545-6224003474148",
    "brand": "بيج ايج",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p48",
    "serial": 48,
    "name": "بيض  بيج ايج مائدة بلدي اورجانيك ( 30 ) بيض-كرتون",
    "barcode": "EG-766262545-6224003474130",
    "brand": "بيج ايج",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p50",
    "serial": 50,
    "name": "بيض  بيج ايج مائدة بلدي اورجانيك ( 30 ) شنطة بلاستيك",
    "barcode": "EG-766262545-6224003474239",
    "brand": "بيج ايج",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p51",
    "serial": 51,
    "name": "بيض بيج ايج  مائدة بلدي اورجانيك ( 30 ) بلاستيك فنادق",
    "barcode": "EG-766262545-6224003474240",
    "brand": "بيج ايج",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p55",
    "serial": 55,
    "name": "بيض بلدى  مبيج (30)",
    "barcode": "EG-766262545-6224003474233",
    "brand": "بيج ايج",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p3",
    "serial": 3,
    "name": "بيض مائدة ابيض سمارت ( 10 ) قطعة كارفور",
    "barcode": "EG-766262545-6224003474189",
    "brand": "سمارت",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p6",
    "serial": 6,
    "name": "بيض مائدة ابيض  سمارت ( 15 ) قطعة كارفور",
    "barcode": "EG-766262545-6224003474190",
    "brand": "سمارت",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p12",
    "serial": 12,
    "name": "بيض مائدة ابيض  سمارت  (30) قطعة كارفور",
    "barcode": "EG-766262545-6224003474195",
    "brand": "سمارت",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p23",
    "serial": 23,
    "name": "بيض مائدة احمر  سمارت ( 10 ) قطعة كارفور",
    "barcode": "EG-766262545-6224003474197",
    "brand": "سمارت",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p25",
    "serial": 25,
    "name": "بيض مائدة احمر  سمارت ( 15 ) قطعة كارفور",
    "barcode": "EG-766262545-6224003474198",
    "brand": "سمارت",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p32",
    "serial": 32,
    "name": "بيض مائدة احمر سمارت ( 30 ) قطعةكارفور",
    "barcode": "EG-766262545-6224003474199",
    "brand": "سمارت",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p11",
    "serial": 11,
    "name": "بيض مائدة ابيض اورجانيك (30) بيضة-كرتون فاليو",
    "barcode": "EG-766262545-6224003474241",
    "brand": "فاليو",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p31",
    "serial": 31,
    "name": "بيض مائدة احمر اورجانيك ( 30 ) بيضة-كرتون فاليو",
    "barcode": "EG-766262545-6224003474242",
    "brand": "فاليو",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p49",
    "serial": 49,
    "name": "بيض مائدة بلدي اورجانيك ( 30 ) بيض-كرتون فاليو",
    "barcode": "EG-766262545-6224003474243",
    "brand": "فاليو",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p15",
    "serial": 15,
    "name": "بيض ابيض كسر درجة اولى (30)",
    "barcode": "EG-766262545-6224003474200",
    "brand": "أخرى",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p16",
    "serial": 16,
    "name": "بيض ابيض كسر درجة ثانية (30)",
    "barcode": "EG-766262545-6224003474201",
    "brand": "أخرى",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p17",
    "serial": 17,
    "name": "بيض ابيض سقط (30)",
    "barcode": "EG-766262545-6224003474202",
    "brand": "أخرى",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p18",
    "serial": 18,
    "name": "بيض ابيض  مبيش (30)",
    "barcode": "EG-766262545-6224003474203",
    "brand": "أخرى",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p19",
    "serial": 19,
    "name": "بيض ابيض متسخ (30)",
    "barcode": "EG-766262545-6224003474204",
    "brand": "أخرى",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p20",
    "serial": 20,
    "name": "بيض ابيض سوبر ماركت (30)",
    "barcode": "EG-766262545-6224003474205",
    "brand": "أخرى",
    "color": "أبيض",
    "note": ""
  },
  {
    "id": "p35",
    "serial": 35,
    "name": "بيض احمر كسر درجة اولى (30)",
    "barcode": "EG-766262545-6224003474209",
    "brand": "أخرى",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p36",
    "serial": 36,
    "name": "بيض احمر كسر درجة ثانية (30)",
    "barcode": "EG-766262545-6224003474210",
    "brand": "أخرى",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p37",
    "serial": 37,
    "name": "بيض احمر سقط (30)",
    "barcode": "EG-766262545-6224003474211",
    "brand": "أخرى",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p38",
    "serial": 38,
    "name": "بيض احمر  مبيش (30)",
    "barcode": "EG-766262545-6224003474212",
    "brand": "أخرى",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p39",
    "serial": 39,
    "name": "بيض احمر متسخ (30)",
    "barcode": "EG-766262545-6224003474213",
    "brand": "أخرى",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p40",
    "serial": 40,
    "name": "بيض احمر سوبر ماركت (30)",
    "barcode": "EG-766262545-6224003474214",
    "brand": "أخرى",
    "color": "أحمر",
    "note": ""
  },
  {
    "id": "p52",
    "serial": 52,
    "name": "بيض بلدى كسر درجة اولى (30)",
    "barcode": "EG-766262545-6224003474230",
    "brand": "أخرى",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p53",
    "serial": 53,
    "name": "بيض بلدى كسر درجة ثانية (30)",
    "barcode": "EG-766262545-6224003474231",
    "brand": "أخرى",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p54",
    "serial": 54,
    "name": "بيض بلدى سقط (30)",
    "barcode": "EG-766262545-6224003474232",
    "brand": "أخرى",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p56",
    "serial": 56,
    "name": "بيض بلدى متسخ (30)",
    "barcode": "EG-766262545-6224003474234",
    "brand": "أخرى",
    "color": "بلدي",
    "note": ""
  },
  {
    "id": "p57",
    "serial": 57,
    "name": "بيض بلدى سوبر ماركت (30)",
    "barcode": "EG-766262545-6224003474235",
    "brand": "أخرى",
    "color": "بلدي",
    "note": ""
  }
];
const ORIGINAL_CLIENTS = [
  {
    "id": "c1",
    "name": "وكالة المنصورة",
    "tax": "313450196"
  },
  {
    "id": "c2",
    "name": "بندة",
    "tax": "479918899"
  },
  {
    "id": "c3",
    "name": "اوسكار",
    "tax": "200139495"
  },
  {
    "id": "c4",
    "name": "جيان ماركت   رع",
    "tax": "679752358"
  },
  {
    "id": "c5",
    "name": "سبينيس",
    "tax": "215533240"
  },
  {
    "id": "c6",
    "name": "اللولو",
    "tax": "447599798"
  },
  {
    "id": "c7",
    "name": "سوان ماركت",
    "tax": "718794168"
  },
  {
    "id": "c8",
    "name": "بيم",
    "tax": "413344312"
  },
  {
    "id": "c9",
    "name": "جمعية الحصرى",
    "tax": "266853943"
  },
  {
    "id": "c10",
    "name": "الفار",
    "tax": "100535607"
  },
  {
    "id": "c11",
    "name": "فندق هيلتون هليوبلس",
    "tax": "100356672"
  },
  {
    "id": "c12",
    "name": "جودز مارت",
    "tax": "535966474"
  },
  {
    "id": "c13",
    "name": "فندق سانت ريجيس العاصمة",
    "tax": "655468048"
  },
  {
    "id": "c14",
    "name": "اوكازيون",
    "tax": "474218643"
  },
  {
    "id": "c15",
    "name": "فندق ماريوت مينا هاوس",
    "tax": "735475547"
  },
  {
    "id": "c16",
    "name": "نون",
    "tax": "730555992"
  },
  {
    "id": "c17",
    "name": "لوما",
    "tax": "416130453"
  },
  {
    "id": "c18",
    "name": "برينجو",
    "tax": "100497780"
  },
  {
    "id": "c19",
    "name": "بان كيكس فودز",
    "tax": "635919516"
  },
  {
    "id": "c20",
    "name": "فندق سانت ريجيس كورنيش النيل",
    "tax": "239892747"
  },
  {
    "id": "c21",
    "name": "سوبر سنتر",
    "tax": "757864252"
  },
  {
    "id": "c22",
    "name": "زهران",
    "tax": "415831687"
  },
  {
    "id": "c23",
    "name": "فندق رايدسون بلو شيراتون",
    "tax": "274328453"
  },
  {
    "id": "c24",
    "name": "كارفور",
    "tax": "200185128"
  },
  {
    "id": "c25",
    "name": "اولاد رجب",
    "tax": "244946868"
  },
  {
    "id": "c26",
    "name": "امازون",
    "tax": "340035072"
  },
  {
    "id": "c27",
    "name": "هايبر رومين",
    "tax": "723799210"
  }
];

const ETA_URL = 'https://invoicing.eta.gov.eg/';
const ADMIN_PASSWORD = 'oval';
const STORAGE = {products:'oval_world_products_v1', clients:'oval_world_clients_v1', history:'oval_world_history_v1', favorites:'oval_world_favorites_v1', pinned:'oval_world_pinned_v1', usage:'oval_world_usage_v1', copies:'oval_world_copies_v1', settings:'oval_world_settings_v1'};
let products = load(STORAGE.products, ORIGINAL_PRODUCTS);
let clients = load(STORAGE.clients, ORIGINAL_CLIENTS);
let history = load(STORAGE.history, []);
let favorites = load(STORAGE.favorites, []);
let pinned = load(STORAGE.pinned, []);
let usage = load(STORAGE.usage, {});
let copies = load(STORAGE.copies, []);
let settings = load(STORAGE.settings, {quick:false,wide:false,dark:false});
let page='products', brandFilter='all', colorFilter='all', query='', selected=new Set(), scannerStream=null;
const $=id=>document.getElementById(id);
function load(k,f){try{return JSON.parse(localStorage.getItem(k)) ?? structuredClone(f)}catch{return structuredClone(f)}}
function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
function saveAll(){save(STORAGE.products,products);save(STORAGE.clients,clients);save(STORAGE.history,history.slice(-100));save(STORAGE.favorites,favorites);save(STORAGE.pinned,pinned);save(STORAGE.usage,usage);save(STORAGE.copies,copies.slice(-50));save(STORAGE.settings,settings)}
function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function norm(v){return String(v??'').toLowerCase().replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').replace(/[()\-_/]/g,' ').replace(/\s+/g,' ').trim()}
function digitsOnly(v){return norm(v).replace(/\D/g,'')}
function searchableText(parts){return norm(parts.join(' ')) + ' ' + digitsOnly(parts.join(' '))}
function brandKey(p){const b=norm(p.brand||p.name); if(b.includes('كارفور'))return 'carrefour'; if(b.includes('فاليو')||b.includes('value'))return 'value'; if(b.includes('بيج')||b.includes('big'))return 'big'; return 'other'}
function brandName(k){return {big:'بيج ايج',carrefour:'كارفور',value:'فاليو',other:'أخرى'}[k]||'أخرى'}
function colorClass(c){c=norm(c); if(c.includes('احمر'))return 'red'; if(c.includes('بلدي'))return 'balady'; if(c.includes('ابيض'))return 'white'; return ''}
function tokens(q){return norm(q).split(' ').filter(Boolean)}
function matchesProduct(p){if(brandFilter!=='all'&&brandKey(p)!==brandFilter)return false; if(colorFilter!=='all'&&p.color!==colorFilter)return false; const hay=searchableText([p.name,p.barcode,p.brand,p.color,p.note]); return tokens(query).every(t=>hay.includes(t) || (digitsOnly(t) && hay.includes(digitsOnly(t))));}
function matchesClient(c){const hay=searchableText([c.name,c.tax,c.note,c.type]); return tokens(query).every(t=>hay.includes(t) || (digitsOnly(t) && hay.includes(digitsOnly(t))));}
function toast(msg){$('toast').textContent=msg;$('toast').classList.remove('hidden');clearTimeout(window.__toast);window.__toast=setTimeout(()=>$('toast').classList.add('hidden'),2200)}
async function copyText(text,label,id,type){try{await navigator.clipboard.writeText(text)}catch{const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove()} usage[id]=(usage[id]||0)+1; const rec={time:new Date().toISOString(),label,text,type,id}; copies.push(rec); history.push({time:rec.time,action:'نسخ',label,before:'',after:text}); saveAll(); updateTop(); render(); toast('تم النسخ: '+label)}
function updateTop(){
  $('productCount').textContent=products.length;
  $('clientCount').textContent=clients.length;
  const today=new Date().toDateString();
  const todayCount=copies.filter(c=>new Date(c.time).toDateString()===today).length;
  $('todayCopies').textContent=todayCount;
  const last=copies.at(-1);
  if(!last){$('lastCopied').textContent='آخر نسخ: لا يوجد'; return;}
  const d=new Date(last.time);
  $('lastCopied').innerHTML=`
    <div class="lc-title"><span>📋</span><span>آخر ما تم نسخه</span></div>
    <div class="lc-name">${esc(last.label)}</div>
    <div class="lc-code">${esc(last.text)}</div>
    <div class="lc-meta"><span>${d.toLocaleDateString('ar-EG')}</span><span>${d.toLocaleTimeString('ar-EG',{hour:'2-digit',minute:'2-digit'})}</span><span>${todayCount} نسخ اليوم</span></div>`;
}
function setPage(p){page=p; document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.page===p)); document.querySelectorAll('.product-only').forEach(e=>e.classList.toggle('hidden',p!=='products')); $('addBtn').classList.toggle('hidden',p==='dashboard'||p==='history'); $('pageTitle').textContent={products:'الأصناف والباركود',clients:'الأرقام الضريبية',dashboard:'Dashboard',history:'السجل والجودة'}[p]; $('pageEyebrow').textContent={products:'Products',clients:'Tax numbers',dashboard:'Insights',history:'Audit'}[p]; render();}
function render(){updateTop(); $('pinnedSection').classList.add('hidden'); if(page==='products')renderProducts(); else if(page==='clients')renderClients(); else if(page==='dashboard')renderDashboard(); else renderHistory();}
function renderProducts(){let list=products.filter(matchesProduct); const pinList=list.filter(p=>pinned.includes(p.id)); if(pinList.length){$('pinnedSection').classList.remove('hidden'); $('pinnedSection').innerHTML=sectionHtml('المثبت فوق',pinList)} else $('pinnedSection').classList.add('hidden'); list=list.filter(p=>!pinned.includes(p.id)); const order=['big','carrefour','value','other']; let html=''; order.forEach(k=>{const arr=list.filter(p=>brandKey(p)===k); if(!arr.length)return; if(k==='big'){['أبيض','أحمر','بلدي','غير محدد'].forEach(col=>{const a=arr.filter(p=>(p.color||'غير محدد')===col); if(a.length) html += sectionHtml(`بيج ايج — ${col}`,a);})} else html += sectionHtml(brandName(k),arr);}); $('content').innerHTML=html||'<div class="empty">مفيش نتائج مطابقة للبحث أو الفلتر.</div>';}
function sectionHtml(title,arr){return `<div class="group"><div class="group-head"><div class="group-title">${esc(title)}</div><span class="badge">${arr.length} صنف</span></div><div class="grid">${arr.map(productCard).join('')}</div></div>`}
function productCard(p){const fav=favorites.includes(p.id), pin=pinned.includes(p.id); return `<article class="card ${colorClass(p.color)}" data-id="${p.id}"><div class="card-toolbar"><button class="star" title="مفضلة" data-fav="${p.id}">${fav?'★':'☆'}</button><button class="pin" title="تثبيت" data-pin="${p.id}">${pin?'📌':'📍'}</button></div><div class="meta"><span class="badge color-badge">${esc(p.color||'غير محدد')}</span><span class="usage-pill">${usage[p.id]||0} نسخ</span></div><h3>${esc(p.name)}</h3><div class="code">${esc(p.barcode)}</div><div class="card-actions"><button data-copy="${p.id}">نسخ</button><button class="copyName" data-copy-name="${p.id}">اسم + كود</button><button class="edit" data-edit="${p.id}">تعديل</button><button class="share" data-share="${p.id}">واتساب</button></div></article>`}
function renderClients(){
  const arr=clients.filter(matchesClient);
  $('content').innerHTML = arr.length ? `<div class="group"><div class="group-head"><div class="group-title">الأرقام الضريبية</div><span class="badge">${arr.length} شركة</span></div><div class="client-grid">${arr.map(clientCard).join('')}</div></div>` : '<div class="empty">مفيش شركات مطابقة للبحث.</div>';
}
function clientCard(c){return `<article class="client-card" data-client-card="${c.id}"><span class="badge">${esc(c.type||'عميل')}</span><h3>${esc(c.name)}</h3><div class="client-tax">${esc(c.tax)}</div>${c.note?`<div class="muted">${esc(c.note)}</div>`:''}<div class="client-actions"><button data-copy-client="${c.id}">نسخ</button><button data-edit-client="${c.id}">تعديل</button><button data-share-client="${c.id}">واتساب</button></div></article>`}
function qualityIssues(){const issues=[]; const seen={}; products.forEach(p=>{if(!p.barcode)issues.push(`صنف بدون باركود: ${p.name}`); if(!p.color)issues.push(`صنف بدون لون: ${p.name}`); if(p.barcode){if(seen[p.barcode])issues.push(`باركود مكرر: ${p.barcode}`); seen[p.barcode]=1}}); clients.forEach(c=>{if(!c.tax)issues.push(`عميل بدون رقم ضريبي: ${c.name}`); if(c.tax && !/^\d{9}/.test(String(c.tax)))issues.push(`رقم ضريبي يحتاج مراجعة: ${c.name} - ${c.tax}`)}); return issues;}
function renderDashboard(){const top=[...products].sort((a,b)=>(usage[b.id]||0)-(usage[a.id]||0)).slice(0,8); const issues=qualityIssues(); $('content').innerHTML=`<div class="dashboard-grid"><div class="dash-card"><span class="muted">إجمالي الأصناف</span><br><b>${products.length}</b></div><div class="dash-card"><span class="muted">إجمالي العملاء</span><br><b>${clients.length}</b></div><div class="dash-card"><span class="muted">عمليات النسخ</span><br><b>${copies.length}</b></div><div class="dash-card"><span class="muted">مشاكل البيانات</span><br><b>${issues.length}</b></div></div><div class="group"><div class="group-title">الأكثر استخدامًا</div><div class="list">${top.map(p=>`<div class="list-item"><b>${esc(p.name)}</b><span>${usage[p.id]||0} نسخ</span></div>`).join('')||'<div class="empty">لسه مفيش استخدام</div>'}</div></div><div class="group"><div class="group-title">منظومة الفاتورة الإلكترونية</div><div class="dash-card eta-dashboard-card"><img src="eta-logo.png" alt="شعار مصلحة الضرائب المصرية" style="width:74px;height:74px;object-fit:contain;border-radius:18px;margin-bottom:10px"><p>افتح المنظومة بسرعة من غير ما تدور على اللينك.</p><a class="btn primary" target="_blank" rel="noopener" href="${ETA_URL}">فتح المنظومة</a></div></div>`}
function renderHistory(){const issues=qualityIssues(); $('content').innerHTML=`<div class="group"><div class="group-title">جودة البيانات</div><div class="list">${issues.map(x=>`<div class="list-item">${esc(x)}</div>`).join('')||'<div class="empty">البيانات سليمة ✅</div>'}</div></div><div class="group"><div class="group-title">آخر عمليات النسخ والتعديل</div><div class="list">${history.slice(-40).reverse().map(h=>`<div class="list-item"><div><b>${esc(h.action)}</b><div class="muted">${esc(h.label||'')}</div></div><span class="muted">${new Date(h.time).toLocaleString('ar-EG')}</span></div>`).join('')||'<div class="empty">لا يوجد سجل بعد</div>'}</div></div>`}
function openModal(item,type){$('modal').classList.remove('hidden'); $('modalTitle').textContent=item?'تعديل':'إضافة'; $('editId').value=item?.id||''; $('editName').value=item?.name||''; $('editCode').value=item?.barcode||''; $('editTax').value=item?.tax||''; $('editBrand').value=item?.brand||'بيج ايج'; $('editColor').value=item?.color||'أبيض'; $('editNote').value=item?.note||''; document.querySelectorAll('.product-field').forEach(e=>e.classList.toggle('hidden',type==='client')); document.querySelectorAll('.client-field').forEach(e=>e.classList.toggle('hidden',type!=='client')); $('editForm').dataset.type=type;}
function closeModal(){$('modal').classList.add('hidden')}
function saveForm(e){e.preventDefault(); const type=e.currentTarget.dataset.type; const id=$('editId').value; if(type==='client'){const obj={id:id||'c'+Date.now(),name:$('editName').value.trim(),tax:$('editTax').value.trim(),note:$('editNote').value.trim(),type:'أخرى'}; if(id) clients=clients.map(c=>c.id===id?{...c,...obj}:c); else clients.push(obj); history.push({time:new Date().toISOString(),action:id?'تعديل عميل':'إضافة عميل',label:obj.name})} else {const obj={id:id||'p'+Date.now(),serial:products.length+1,name:$('editName').value.trim(),barcode:$('editCode').value.trim(),brand:$('editBrand').value,color:$('editColor').value,note:$('editNote').value.trim()}; const dup=products.find(p=>p.barcode===obj.barcode&&p.id!==id); if(dup && !confirm('الباركود موجود في صنف آخر. تكمل؟'))return; if(id) products=products.map(p=>p.id===id?{...p,...obj}:p); else products.push(obj); history.push({time:new Date().toISOString(),action:id?'تعديل صنف':'إضافة صنف',label:obj.name})} saveAll(); closeModal(); render(); toast('تم الحفظ')}
function toggleArr(arr,id){const i=arr.indexOf(id); if(i>=0)arr.splice(i,1); else arr.push(id)}
function exportData(){download(new Blob([JSON.stringify({products,clients,history,favorites,pinned,usage,copies},null,2)],{type:'application/json'}),'oval-codes-backup.json')}
function download(blob,name){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;a.click();URL.revokeObjectURL(a.href)}
function importData(file){const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result); if(d.products)products=d.products;if(d.clients)clients=d.clients;if(d.history)history=d.history;if(d.favorites)favorites=d.favorites;if(d.pinned)pinned=d.pinned;if(d.usage)usage=d.usage;if(d.copies)copies=d.copies;saveAll();render();toast('تم الاستيراد')}catch{toast('ملف غير صحيح')}};r.readAsText(file)}
function printSelected(){const arr=products.filter(p=>selected.has(p.id)); if(!arr.length)return toast('حدد أصناف الأول'); const w=open('','_blank'); w.document.write(`<html dir="rtl"><head><title>طباعة باركودات</title><style>body{font-family:Arial;padding:20px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.card{border:1px solid #ddd;border-radius:14px;padding:12px;break-inside:avoid}.code{direction:ltr;text-align:left;font-weight:bold}</style></head><body><h1>باركودات OVAL</h1><div class="grid">${arr.map(p=>`<div class="card"><h3>${esc(p.name)}</h3><div class="code">${esc(p.barcode)}</div></div>`).join('')}</div><script>print()<\/script></body></html>`);w.document.close()}
function startScanner(){if(!('BarcodeDetector' in window))return toast('المتصفح لا يدعم السكان مباشرة. استخدم Chrome حديث.'); $('scanner').classList.remove('hidden'); navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}}).then(stream=>{scannerStream=stream;$('video').srcObject=stream; const detector=new BarcodeDetector({formats:['ean_13','code_128','qr_code']}); const tick=async()=>{if($('scanner').classList.contains('hidden'))return; try{const codes=await detector.detect($('video')); if(codes.length){const raw=codes[0].rawValue; $('scanStatus').textContent='تم قراءة: '+raw; query=raw; $('searchInput').value=raw; closeScanner(); setPage('products'); return;}}catch{} requestAnimationFrame(tick)}; tick();}).catch(()=>toast('تعذر فتح الكاميرا'))}
function closeScanner(){$('scanner').classList.add('hidden'); if(scannerStream)scannerStream.getTracks().forEach(t=>t.stop()); scannerStream=null}
function init(){let alreadyIn=false; try{alreadyIn=!!sessionStorage.getItem('oval_ok')}catch(e){}; if(alreadyIn)unlock(); const loginBtn=$('loginBtn'), passwordInput=$('passwordInput'); if(loginBtn && passwordInput){ loginBtn.onclick=()=>{const pass=String(passwordInput.value||'').replace(/\s+/g,'').toLowerCase(); pass===ADMIN_PASSWORD?unlock():toast('الباسورد غير صحيح')}; } if(passwordInput){ passwordInput.addEventListener('keydown',e=>{if(e.key==='Enter' && loginBtn) loginBtn.click()}); } document.querySelectorAll('.nav-btn').forEach(b=>b.onclick=()=>setPage(b.dataset.page)); $('searchInput').oninput=e=>{query=e.target.value;render()}; document.querySelectorAll('[data-brand]').forEach(b=>b.onclick=()=>{brandFilter=b.dataset.brand;document.querySelectorAll('[data-brand]').forEach(x=>x.classList.toggle('active',x===b));render()}); document.querySelectorAll('[data-color]').forEach(b=>b.onclick=()=>{colorFilter=b.dataset.color;document.querySelectorAll('[data-color]').forEach(x=>x.classList.toggle('active',x===b));render()}); $('addBtn').onclick=()=>openModal(null,page==='clients'?'client':'product'); $('closeModal').onclick=closeModal; $('editForm').onsubmit=saveForm; $('logoutBtn').onclick=()=>{sessionStorage.removeItem('oval_ok');location.reload()}; $('copyEtaBtn').onclick=()=>copyText(ETA_URL,'منظومة الفاتورة الإلكترونية','eta','link'); $('exportBtn').onclick=exportData; $('importFile').onchange=e=>e.target.files[0]&&importData(e.target.files[0]); $('resetBtn').onclick=()=>{if(confirm('ترجع البيانات الأصلية؟')){products=structuredClone(ORIGINAL_PRODUCTS);clients=structuredClone(ORIGINAL_CLIENTS);history=[];favorites=[];pinned=[];usage={};copies=[];selected.clear();saveAll();render();toast('تم استرجاع الأصل')}}; $('copySelectedBtn').onclick=()=>{const arr=products.filter(p=>selected.has(p.id)); if(!arr.length)return toast('حدد أصناف الأول'); copyText(arr.map(p=>`${p.name}: ${p.barcode}`).join('\n'),'الأصناف المحددة','selected','product')}; $('printSelectedBtn').onclick=printSelected; $('scanBtn').onclick=startScanner; $('closeScanner').onclick=closeScanner; $('quickMode').onchange=e=>{settings.quick=e.target.checked;applySettings()}; $('wideMode').onchange=e=>{settings.wide=e.target.checked;applySettings()}; $('themeToggle').onchange=e=>{settings.dark=e.target.checked;applySettings()}; $('voiceBtn').onclick=voiceSearch; document.addEventListener('click',handleClicks); applySettings(); render();}
function unlock(){try{sessionStorage.setItem('oval_ok','1')}catch(e){}; $('login').classList.add('hidden');$('app').classList.remove('hidden');render()}
function applySettings(){$('quickMode').checked=!!settings.quick;$('wideMode').checked=!!settings.wide;$('themeToggle').checked=!!settings.dark;$('app').classList.toggle('quick',settings.quick);$('app').classList.toggle('wide',settings.wide);document.body.classList.toggle('dark',settings.dark);saveAll()}
function handleClicks(e){
  const id=e.target.dataset.copy;
  if(id){const p=products.find(x=>x.id===id);return copyText(p.barcode,p.name,p.id,'product')}
  const cn=e.target.dataset.copyName;
  if(cn){const p=products.find(x=>x.id===cn);return copyText(`${p.name} - ${p.barcode}`,p.name,p.id,'product')}
  const edit=e.target.dataset.edit;
  if(edit)return openModal(products.find(p=>p.id===edit),'product');
  const fav=e.target.dataset.fav;
  if(fav){toggleArr(favorites,fav);saveAll();render();return}
  const pin=e.target.dataset.pin;
  if(pin){toggleArr(pinned,pin);saveAll();render();return}
  const sel=e.target.dataset.select;
  if(sel){e.target.checked?selected.add(sel):selected.delete(sel);render();return}
  const share=e.target.dataset.share;
  if(share){const p=products.find(x=>x.id===share);location.href=`https://wa.me/?text=${encodeURIComponent(p.name+'\n'+p.barcode)}`;return}
  const cc=e.target.dataset.copyClient;
  if(cc){const c=clients.find(x=>x.id===cc);return copyText(c.tax,c.name,c.id,'client')}
  const ec=e.target.dataset.editClient;
  if(ec)return openModal(clients.find(c=>c.id===ec),'client');
  const sc=e.target.dataset.shareClient;
  if(sc){const c=clients.find(x=>x.id===sc);location.href=`https://wa.me/?text=${encodeURIComponent(c.name+'\nالرقم الضريبي: '+c.tax)}`;return}
  const card=e.target.closest('.card[data-id]');
  if(settings.quick && page==='products' && card && !e.target.closest('button,input,a,label,select,textarea')){
    const p=products.find(x=>x.id===card.dataset.id);
    if(p) return copyText(p.barcode,p.name,p.id,'product');
  }
  const clientCardEl=e.target.closest('.client-card[data-client-card]');
  if(settings.quick && page==='clients' && clientCardEl && !e.target.closest('button,input,a,label,select,textarea')){
    const c=clients.find(x=>x.id===clientCardEl.dataset.clientCard);
    if(c) return copyText(c.tax,c.name,c.id,'client');
  }
}
function voiceSearch(){const SR=window.SpeechRecognition||window.webkitSpeechRecognition; if(!SR)return toast('البحث الصوتي غير مدعوم في المتصفح'); const r=new SR(); r.lang='ar-EG'; r.onresult=e=>{query=e.results[0][0].transcript;$('searchInput').value=query;render()}; r.start();}
function boot(){try{init()}catch(err){console.error(err); alert('في مشكلة في تحميل الموقع. اتأكد إن ملفات index.html و style.css و app.js موجودين جنب بعض بنفس الأسماء.')}}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',boot)}else{boot()}
