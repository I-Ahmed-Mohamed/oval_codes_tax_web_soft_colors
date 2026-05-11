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

const PASSWORD = 'oval';
const STORAGE = {
  products: 'oval_codes_products_pro_v1',
  clients: 'oval_codes_clients_pro_v1',
  usage: 'oval_codes_usage_pro_v1',
  favorites: 'oval_codes_favorites_pro_v1',
  last: 'oval_codes_last_copy_pro_v1',
  theme: 'oval_codes_theme_pro_v1'
};

let page = 'products';
let brandFilter = 'الكل';
let colorFilter = 'الكل';
let editMode = null;
let editId = null;

let products = load(STORAGE.products, ORIGINAL_PRODUCTS);
let clients = load(STORAGE.clients, ORIGINAL_CLIENTS);
let usage = load(STORAGE.usage, {});
let favorites = load(STORAGE.favorites, []);
let lastCopied = load(STORAGE.last, null);

const $ = (id) => document.getElementById(id);
const app = $('app');
const loginScreen = $('loginScreen');
const content = $('content');
const toastEl = $('toast');
const editor = $('editorDialog');
const brandButtons = ['الكل','بيج ايج','كارفور','فاليو','أخرى'];
const colorButtons = ['الكل','أبيض','أحمر','بلدي','غير محدد'];

function load(key, fallback){
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : structuredClone(fallback); }
  catch { return structuredClone(fallback); }
}
function saveAll(){
  localStorage.setItem(STORAGE.products, JSON.stringify(products));
  localStorage.setItem(STORAGE.clients, JSON.stringify(clients));
  localStorage.setItem(STORAGE.usage, JSON.stringify(usage));
  localStorage.setItem(STORAGE.favorites, JSON.stringify(favorites));
  localStorage.setItem(STORAGE.last, JSON.stringify(lastCopied));
}
function esc(value){return String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function groupOf(p){
  const name = `${p.name || ''} ${p.brand || ''}`;
  if(name.includes('فاليو')) return 'فاليو';
  if(name.includes('كارفور') || name.includes('سمارت')) return 'كارفور';
  if(name.includes('بيج') || name.toLowerCase().includes('big')) return 'بيج ايج';
  return 'أخرى';
}
function colorClass(color){
  if(color === 'أبيض') return 'white';
  if(color === 'أحمر') return 'red';
  if(color === 'بلدي') return 'balady';
  return 'unknown';
}
function normalize(v){return String(v || '').toLowerCase().trim();}
function matchesSearch(obj, q){
  if(!q) return true;
  const txt = normalize(Object.values(obj).join(' '));
  return txt.includes(q);
}
function showToast(msg){
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(()=>toastEl.classList.remove('show'), 1700);
}
function copyText(value, label, id){
  navigator.clipboard?.writeText(value).catch(()=>fallbackCopy(value));
  if(id){ usage[id] = (usage[id] || 0) + 1; }
  lastCopied = { value, label, at: new Date().toISOString(), id };
  saveAll();
  updateLastCopied();
  render();
  showToast(`تم نسخ ${label}`);
}
function fallbackCopy(value){
  const ta = document.createElement('textarea');
  ta.value = value; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
}
function updateLastCopied(){
  $('lastCopiedName').textContent = lastCopied?.label || 'لسه مفيش';
  $('lastCopiedValue').textContent = lastCopied?.value || '—';
  $('barcodePreviewText').textContent = lastCopied?.value || '—';
  $('barcodePreview').style.opacity = lastCopied?.value ? '.28' : '.08';
}

function init(){
  if(sessionStorage.getItem('oval_unlocked') === 'yes') unlock();
  $('loginBtn').addEventListener('click', tryLogin);
  $('passwordInput').addEventListener('keydown', e => { if(e.key === 'Enter') tryLogin(); });
  $('lockBtn').addEventListener('click', lock);
  $('controlsToggle').addEventListener('click', toggleControls);
  $('drawerClose')?.addEventListener('click', closeControls);
  $('panelOverlay')?.addEventListener('click', closeControls);
  $('themeBtn').addEventListener('click', toggleTheme);
  $('searchInput').addEventListener('input', render);
  $('addBtn').addEventListener('click', addCurrent);
  $('printBtn').addEventListener('click', () => window.print());
  $('backupBtn').addEventListener('click', exportBackup);
  $('importFile').addEventListener('change', importBackup);
  $('resetBtn').addEventListener('click', resetData);
  $('quickMode').addEventListener('change', () => { app.classList.toggle('quick', $('quickMode').checked); render(); });
  $('showFavoritesFirst').addEventListener('change', render);
  document.querySelectorAll('.nav-tabs button').forEach(btn => btn.addEventListener('click', () => setPage(btn.dataset.page)));
  $('closeEditor').addEventListener('click', () => editor.close());
  $('saveEditor').addEventListener('click', saveEditor);
  $('deleteItem').addEventListener('click', deleteCurrent);
  applyTheme(localStorage.getItem(STORAGE.theme) || 'light');
  createFilterButtons();
  updateLastCopied();
  setupSmartHeader();
}
function tryLogin(){
  if($('passwordInput').value === PASSWORD){ sessionStorage.setItem('oval_unlocked','yes'); unlock(); }
  else $('loginError').textContent = 'كلمة المرور غير صحيحة';
}
function unlock(){ loginScreen.classList.add('hidden'); app.classList.remove('hidden'); $('smartHeader').classList.remove('open'); $('panelOverlay')?.classList.remove('show'); render(); }
function lock(){ sessionStorage.removeItem('oval_unlocked'); app.classList.add('hidden'); loginScreen.classList.remove('hidden'); $('passwordInput').value=''; }
function applyTheme(theme){
  document.body.classList.toggle('dark', theme === 'dark');
  $('themeBtn').textContent = theme === 'dark' ? 'الوضع الفاتح' : 'الوضع الداكن';
  localStorage.setItem(STORAGE.theme, theme);
}
function toggleTheme(){ applyTheme(document.body.classList.contains('dark') ? 'light' : 'dark'); }
function toggleControls(){
  const header = $('smartHeader');
  const isOpen = header.classList.toggle('open');
  header.classList.remove('hide');
  $('panelOverlay')?.classList.toggle('show', isOpen);
  $('controlsToggle').innerHTML = isOpen ? '<span class="toggle-mark">×</span><span>إغلاق</span>' : '<span class="toggle-mark">☰</span><span>القائمة</span>';
}
function closeControls(){
  const header = $('smartHeader');
  header.classList.remove('open');
  header.classList.add('hide');
  $('panelOverlay')?.classList.remove('show');
  $('controlsToggle').innerHTML = '<span class="toggle-mark">☰</span><span>القائمة</span>';
}
function setupSmartHeader(){
  const header = $('smartHeader');
  header.classList.remove('open');
  $('panelOverlay')?.classList.remove('show');
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeControls(); });
}
function createFilterButtons(){
  $('brandFilters').innerHTML = brandButtons.map(b => `<button data-brand="${esc(b)}">${esc(b)}</button>`).join('');
  $('colorFilters').innerHTML = colorButtons.map(b => `<button data-color="${esc(b)}">${esc(b)}</button>`).join('');
  $('brandFilters').querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => { brandFilter = btn.dataset.brand; render(); }));
  $('colorFilters').querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => { colorFilter = btn.dataset.color; render(); }));
}
function setPage(next){
  page = next;
  document.querySelectorAll('.nav-tabs button').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  $('brandFilters').classList.toggle('hidden', page !== 'products');
  $('colorFilters').classList.toggle('hidden', page !== 'products');
  render();
}
function filteredProducts(){
  const q = normalize($('searchInput').value);
  return products.filter(p => {
    const group = groupOf(p);
    return (brandFilter === 'الكل' || group === brandFilter)
      && (colorFilter === 'الكل' || (p.color || 'غير محدد') === colorFilter)
      && matchesSearch({...p, group}, q);
  }).sort((a,b) => {
    const go = {'بيج ايج':1,'كارفور':2,'فاليو':3,'أخرى':4};
    return (go[groupOf(a)] - go[groupOf(b)]) || ((a.serial||999) - (b.serial||999));
  });
}
function filteredClients(){
  const q = normalize($('searchInput').value);
  return clients.filter(c => matchesSearch(c, q)).sort((a,b) => a.name.localeCompare(b.name,'ar'));
}
function render(){
  document.querySelectorAll('#brandFilters button').forEach(b => b.classList.toggle('active', b.dataset.brand === brandFilter));
  document.querySelectorAll('#colorFilters button').forEach(b => b.classList.toggle('active', b.dataset.color === colorFilter));
  if(page === 'products') renderProducts(); else renderClients();
  updateStats();
}
function updateStats(){
  if(page === 'products') $('statsText').textContent = `${filteredProducts().length} صنف ظاهر من ${products.length}`;
  else $('statsText').textContent = `${filteredClients().length} شركة ظاهرة من ${clients.length}`;
}
function renderProducts(){
  const data = filteredProducts();
  if(!data.length){ content.innerHTML = `<div class="empty">مفيش نتائج مطابقة للبحث الحالي.</div>`; return; }
  const showFav = $('showFavoritesFirst').checked;
  let html = '';
  if(showFav){
    const favUsed = [...data].filter(p => favorites.includes(p.id) || usage[p.id]).sort((a,b)=>{
      const favScore = (favorites.includes(b.id)-favorites.includes(a.id))*10000;
      return favScore + ((usage[b.id]||0) - (usage[a.id]||0));
    }).slice(0,10);
    if(favUsed.length){
      html += sectionHTML('الأكثر استخدامًا والمفضلة', favUsed, true);
    }
  }
  const groups = ['بيج ايج','كارفور','فاليو','أخرى'];
  for(const group of groups){
    const groupData = data.filter(p => groupOf(p) === group);
    if(!groupData.length) continue;
    html += `<section class="section"><div class="section-head"><div class="section-title"><h2>${esc(group)}</h2><span class="badge">${groupData.length} صنف</span></div></div>`;
    for(const color of ['أبيض','أحمر','بلدي','غير محدد']){
      const colorData = groupData.filter(p => (p.color || 'غير محدد') === color);
      if(!colorData.length) continue;
      html += `<div class="subsection"><h3><span class="dot ${colorClass(color)}"></span>${esc(color)}</h3><div class="cards-grid">${colorData.map(productCard).join('')}</div></div>`;
    }
    html += `</section>`;
  }
  content.innerHTML = html;
  bindCards();
}
function sectionHTML(title, items){
  return `<section class="section"><div class="section-head"><div class="section-title"><h2>${esc(title)}</h2><span class="badge">${items.length}</span></div></div><div class="subsection"><div class="cards-grid">${items.map(productCard).join('')}</div></div></section>`;
}
function productCard(p){
  const fav = favorites.includes(p.id);
  const count = usage[p.id] || 0;
  return `<article class="product-card ${colorClass(p.color)}" data-copy="${esc(p.barcode)}" data-label="${esc(p.name)}" data-id="${esc(p.id)}">
    <span class="usage">${count ? `نسخ ${count}` : ''}</span>
    <div class="product-name">${esc(p.name)}</div>
    <div class="product-meta"><span class="pill">${esc(groupOf(p))}</span><span class="pill">${esc(p.color || 'غير محدد')}</span></div>
    <div class="barcode">${esc(p.barcode)}</div>
    <div class="card-actions">
      <button class="copy-btn" data-action="copy" data-id="${esc(p.id)}">نسخ</button>
      <button class="star-btn ${fav?'active':''}" data-action="fav" data-id="${esc(p.id)}">${fav?'★':'☆'}</button>
      <button class="edit-btn" data-action="edit" data-id="${esc(p.id)}">تعديل</button>
    </div>
  </article>`;
}
function renderClients(){
  const data = filteredClients();
  if(!data.length){ content.innerHTML = `<div class="empty">مفيش شركات مطابقة للبحث الحالي.</div>`; return; }
  const quickNames = ['كارفور','بندة','سبينيس','اللولو','امازون','نون','سوبر سنتر','اوسكار'];
  const quick = data.filter(c => quickNames.some(n => c.name.includes(n)));
  let html = '';
  if(quick.length){ html += `<section class="section"><div class="section-head"><div class="section-title"><h2>العملاء السريعة</h2><span class="badge">نسخ بضغطة</span></div></div><div class="client-grid">${quick.map(clientCard).join('')}</div></section>`; }
  html += `<section class="section"><div class="section-head"><div class="section-title"><h2>كل الأرقام الضريبية</h2><span class="badge">${data.length} شركة</span></div></div><div class="client-grid">${data.map(clientCard).join('')}</div></section>`;
  content.innerHTML = html;
  bindCards();
}
function clientCard(c){
  return `<article class="client-card" data-copy="${esc(c.tax)}" data-label="${esc(c.name)}" data-id="${esc(c.id)}">
    <div class="client-name">${esc(c.name)}</div>
    <div class="tax-number">${esc(c.tax)}</div>
    <div class="card-actions">
      <button class="copy-btn" data-action="copy-client" data-id="${esc(c.id)}">نسخ</button>
      <button class="edit-btn" data-action="edit-client" data-id="${esc(c.id)}">تعديل</button>
    </div>
  </article>`;
}
function bindCards(){
  content.querySelectorAll('[data-action]').forEach(btn => btn.addEventListener('click', e => {
    e.stopPropagation();
    const action = btn.dataset.action;
    const id = btn.dataset.id;
    if(action === 'copy') { const p = products.find(x=>x.id===id); copyText(p.barcode, p.name, p.id); }
    if(action === 'copy-client') { const c = clients.find(x=>x.id===id); copyText(c.tax, c.name, c.id); }
    if(action === 'fav') toggleFavorite(id);
    if(action === 'edit') openProductEditor(id);
    if(action === 'edit-client') openClientEditor(id);
  }));
  content.querySelectorAll('.product-card,.client-card').forEach(card => card.addEventListener('click', () => {
    copyText(card.dataset.copy, card.dataset.label, card.dataset.id);
  }));
}
function toggleFavorite(id){
  favorites = favorites.includes(id) ? favorites.filter(x => x !== id) : [...favorites, id];
  saveAll(); render();
}
function addCurrent(){ page === 'products' ? openProductEditor(null) : openClientEditor(null); }
function openProductEditor(id){
  editMode = 'product'; editId = id;
  const p = id ? products.find(x=>x.id===id) : {name:'', barcode:'', color:'أبيض'};
  $('editorTitle').textContent = id ? 'تعديل صنف' : 'إضافة صنف';
  $('productFields').classList.remove('hidden'); $('clientFields').classList.add('hidden');
  $('deleteItem').classList.toggle('hidden', !id);
  $('itemName').value = p.name || ''; $('itemBarcode').value = p.barcode || ''; $('itemGroup').value = id ? groupOf(p) : (brandFilter === 'الكل' ? 'بيج ايج' : brandFilter); $('itemColor').value = p.color || 'غير محدد';
  editor.showModal();
}
function openClientEditor(id){
  editMode = 'client'; editId = id;
  const c = id ? clients.find(x=>x.id===id) : {name:'', tax:''};
  $('editorTitle').textContent = id ? 'تعديل شركة' : 'إضافة شركة';
  $('productFields').classList.add('hidden'); $('clientFields').classList.remove('hidden');
  $('deleteItem').classList.toggle('hidden', !id);
  $('clientName').value = c.name || ''; $('clientTax').value = c.tax || '';
  editor.showModal();
}
function saveEditor(e){
  e.preventDefault();
  if(editMode === 'product'){
    const item = { id: editId || `p_${Date.now()}`, serial: editId ? (products.find(x=>x.id===editId)?.serial || products.length+1) : products.length+1, name: $('itemName').value.trim(), barcode: $('itemBarcode').value.trim(), brand: $('itemGroup').value, color: $('itemColor').value, note:'' };
    if(!item.name || !item.barcode) return showToast('اكتب اسم الصنف والباركود');
    products = editId ? products.map(x => x.id === editId ? item : x) : [...products, item];
  } else {
    const item = { id: editId || `c_${Date.now()}`, name: $('clientName').value.trim(), tax: $('clientTax').value.trim() };
    if(!item.name || !item.tax) return showToast('اكتب اسم الشركة والرقم الضريبي');
    clients = editId ? clients.map(x => x.id === editId ? item : x) : [...clients, item];
  }
  saveAll(); editor.close(); render(); showToast('تم الحفظ');
}
function deleteCurrent(){
  if(!editId) return editor.close();
  if(editMode === 'product') products = products.filter(x => x.id !== editId);
  if(editMode === 'client') clients = clients.filter(x => x.id !== editId);
  saveAll(); editor.close(); render(); showToast('تم الحذف');
}
function exportBackup(){
  const data = { products, clients, usage, favorites, exportedAt: new Date().toISOString(), version: 1 };
  const blob = new Blob([JSON.stringify(data,null,2)], {type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `oval-codes-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click(); URL.revokeObjectURL(a.href);
  showToast('تم تجهيز النسخة الاحتياطية');
}
function importBackup(e){
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const data = JSON.parse(reader.result);
      if(Array.isArray(data.products)) products = data.products;
      if(Array.isArray(data.clients)) clients = data.clients;
      if(data.usage && typeof data.usage === 'object') usage = data.usage;
      if(Array.isArray(data.favorites)) favorites = data.favorites;
      saveAll(); render(); showToast('تم استيراد النسخة');
    }catch{ showToast('ملف النسخة غير صحيح'); }
    e.target.value = '';
  };
  reader.readAsText(file);
}
function resetData(){
  if(!confirm('ترجع البيانات الأصلية؟ أي تعديلات محفوظة هتتمسح.')) return;
  products = structuredClone(ORIGINAL_PRODUCTS); clients = structuredClone(ORIGINAL_CLIENTS); usage = {}; favorites = []; lastCopied = null;
  saveAll(); updateLastCopied(); render(); showToast('تم استرجاع الأصل');
}

init();
