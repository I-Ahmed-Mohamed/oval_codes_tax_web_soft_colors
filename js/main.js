/**
 * ========================================
 * MAIN APPLICATION LOGIC
 * ========================================
 */

// ORIGINAL DATA
const ORIGINAL_PRODUCTS = [
  {
    id: 'p1',
    serial: 1,
    name: 'بيض  بيج ايج مائدة ابيض اورجانيك ( 6 ) بيضة',
    barcode: 'EG-766262545-6224003474062',
    brand: 'بيج ايج',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p2',
    serial: 2,
    name: 'بيض  بيج ايج مائدة ابيض اورجانيك ( 10 ) بيضة',
    barcode: 'EG-766262545-6224003474055',
    brand: 'بيج ايج',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p4',
    serial: 4,
    name: 'بيض بيج ايج مائدة ابيض اورجانيك ( 15 ) بيضة',
    barcode: 'EG-766262545-6224003474048',
    brand: 'بيج ايج',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p5',
    serial: 5,
    name: 'بيض بيج ايج  مائدة ابيض  ( 15 ) قطعة كرتون',
    barcode: 'EG-766262545-6224003474191',
    brand: 'بيج ايج',
    color: 'أبيض',
    note: 'بيض مائدة ابيض  ( 15 ) قطعة كرتون',
  },
  {
    id: 'p7',
    serial: 7,
    name: 'بيض بيج ايج   ابيض  مغلف ( 18 ) قطعة',
    barcode: 'EG-766262545-6224003474031',
    brand: 'بيج ايج',
    color: 'أبيض',
    note: 'بيض  ابيض  مغلف ( 18 ) قطعة',
  },
  {
    id: 'p8',
    serial: 8,
    name: 'بيض بيج ايج مائدة ابيض اورجانيك ( 20 ) بيضة',
    barcode: 'EG-766262545-6224003474024',
    brand: 'بيج ايج',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p9',
    serial: 9,
    name: 'بيض بيج ايج  مائدة ابيض اورجانيك ( 20 ) بيضة بلاستيك',
    barcode: 'EG-766262545-6224003474025',
    brand: 'بيج ايج',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p10',
    serial: 10,
    name: 'بيض بيج ايج  مائدة ابيض اورجانيك (30) بيضة-كرتون',
    barcode: 'EG-766262545-6224003474017',
    brand: 'بيج ايج',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p13',
    serial: 13,
    name: 'بيض بيج ايج  ابيض مغلف  (30) قطعة بلاستيك',
    barcode: 'EG-766262545-6224003474215',
    brand: 'بيج ايج',
    color: 'أبيض',
    note: 'بيض ابيض مغلف  (30) قطعة',
  },
  {
    id: 'p14',
    serial: 14,
    name: 'بيض  بيج ايج مائدة ابيض  (30) قطعة  بلاستيك فنادق',
    barcode: 'EG-766262545-6224003474193',
    brand: 'بيج ايج',
    color: 'أبيض',
    note: 'بيض مائدة ابيض  (30) قطعة  بلاستيك فنادق',
  },
  {
    id: 'p21',
    serial: 21,
    name: 'بيض بيج ايج  مائدة احمر اورجانيك ( 6 ) بيضة',
    barcode: 'EG-766262545-6224003474123',
    brand: 'بيج ايج',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p22',
    serial: 22,
    name: 'بيض بيج ايج  مائدة احمر اورجانيك ( 10 ) بيضة',
    barcode: 'EG-766262545-6224003474116',
    brand: 'بيج ايج',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p24',
    serial: 24,
    name: 'بيض بيج ايج  مائدة احمر اورجانيك ( 15 ) بيضة',
    barcode: 'EG-766262545-6224003474109',
    brand: 'بيج ايج',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p26',
    serial: 26,
    name: 'بيض بيج ايج  مائدة احمر اورجانيك ( 15 ) بيضة كرتون',
    barcode: 'EG-766262545-6224003474110',
    brand: 'بيج ايج',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p27',
    serial: 27,
    name: 'بيض بيج ايج  مائدة احمر اورجانيك ( 18 ) بيضة',
    barcode: 'EG-766262545-6224003474093',
    brand: 'بيج ايج',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p28',
    serial: 28,
    name: 'بيض بيج ايج  مائدة احمر اورجانيك ( 20 ) بيضة',
    barcode: 'EG-766262545-6224003474086',
    brand: 'بيج ايج',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p29',
    serial: 29,
    name: 'بيض  بيج ايج مائدة احمر اورجانيك ( 20 ) بيضة بلاستيك',
    barcode: 'EG-766262545-6224003474087',
    brand: 'بيج ايج',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p30',
    serial: 30,
    name: 'بيض  بيج ايج مائدة احمر اورجانيك ( 30 ) بيضة-كرتون',
    barcode: 'EG-766262545-6224003474079',
    brand: 'بيج ايج',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p33',
    serial: 33,
    name: 'بيض  بيج ايج مائدة احمر (30) شنطة بلاستيك',
    barcode: 'EG-766262545-6224003474222',
    brand: 'بيج ايج',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p34',
    serial: 34,
    name: 'بيض بيج ايج  مائدة احمر (30) شنطة بلاستيك فنادق',
    barcode: 'EG-766262545-6224003474208',
    brand: 'بيج ايج',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p41',
    serial: 41,
    name: 'بيض بيج ايج مائدة بلدي اورجانيك ( 6 ) بيضة',
    barcode: 'EG-766262545-6224003474185',
    brand: 'بيج ايج',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p42',
    serial: 42,
    name: 'بيض بيج ايج مائدة بلدي اورجانيك ( 10 ) بيضة',
    barcode: 'EG-766262545-6224003474178',
    brand: 'بيج ايج',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p43',
    serial: 43,
    name: 'بيض بيج ايج  مائدة بلدي اورجانيك ( 15 ) بيضة',
    barcode: 'EG-766262545-6224003474161',
    brand: 'بيج ايج',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p44',
    serial: 44,
    name: 'بيض بيج ايج مائدة بلدي اورجانيك ( 15 ) بيضة كرتون',
    barcode: 'EG-766262545-6224003474162',
    brand: 'بيج ايج',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p45',
    serial: 45,
    name: 'بيض بيج ايج مائدة  بلدي اورجانيك ( 18 ) بيضة',
    barcode: 'EG-766262545-6224003474154',
    brand: 'بيج ايج',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p46',
    serial: 46,
    name: 'بيض بيج ايج  مائدة بلدي اورجانيك ( 20 ) بيضة',
    barcode: 'EG-766262545-6224003474147',
    brand: 'بيج ايج',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p47',
    serial: 47,
    name: 'بيض  بيج ايج مائدة بلدي اورجانيك ( 20 ) بيضة بلاستيك',
    barcode: 'EG-766262545-6224003474148',
    brand: 'بيج ايج',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p48',
    serial: 48,
    name: 'بيض  بيج ايج مائدة بلدي اورجانيك ( 30 ) بيض-كرتون',
    barcode: 'EG-766262545-6224003474130',
    brand: 'بيج ايج',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p50',
    serial: 50,
    name: 'بيض  بيج ايج مائدة بلدي اورجانيك ( 30 ) شنطة بلاستيك',
    barcode: 'EG-766262545-6224003474239',
    brand: 'بيج ايج',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p51',
    serial: 51,
    name: 'بيض بيج ايج  مائدة بلدي اورجانيك ( 30 ) بلاستيك فنادق',
    barcode: 'EG-766262545-6224003474240',
    brand: 'بيج ايج',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p55',
    serial: 55,
    name: 'بيض بلدى  مبيج (30)',
    barcode: 'EG-766262545-6224003474233',
    brand: 'بيج ايج',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p3',
    serial: 3,
    name: 'بيض مائدة ابيض سمارت ( 10 ) قطعة كارفور',
    barcode: 'EG-766262545-6224003474189',
    brand: 'سمارت',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p6',
    serial: 6,
    name: 'بيض مائدة ابيض  سمارت ( 15 ) قطعة كارفور',
    barcode: 'EG-766262545-6224003474190',
    brand: 'سمارت',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p12',
    serial: 12,
    name: 'بيض مائدة ابيض  سمارت  (30) قطعة كارفور',
    barcode: 'EG-766262545-6224003474195',
    brand: 'سمارت',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p23',
    serial: 23,
    name: 'بيض مائدة احمر  سمارت ( 10 ) قطعة كارفور',
    barcode: 'EG-766262545-6224003474197',
    brand: 'سمارت',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p25',
    serial: 25,
    name: 'بيض مائدة احمر  سمارت ( 15 ) قطعة كارفور',
    barcode: 'EG-766262545-6224003474198',
    brand: 'سمارت',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p32',
    serial: 32,
    name: 'بيض مائدة احمر سمارت ( 30 ) قطعةكارفور',
    barcode: 'EG-766262545-6224003474199',
    brand: 'سمارت',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p11',
    serial: 11,
    name: 'بيض مائدة ابيض اورجانيك (30) بيضة-كرتون فاليو',
    barcode: 'EG-766262545-6224003474241',
    brand: 'فاليو',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p31',
    serial: 31,
    name: 'بيض مائدة احمر اورجانيك ( 30 ) بيضة-كرتون فاليو',
    barcode: 'EG-766262545-6224003474242',
    brand: 'فاليو',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p49',
    serial: 49,
    name: 'بيض مائدة بلدي اورجانيك ( 30 ) بيض-كرتون فاليو',
    barcode: 'EG-766262545-6224003474243',
    brand: 'فاليو',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p15',
    serial: 15,
    name: 'بيض ابيض كسر درجة اولى (30)',
    barcode: 'EG-766262545-6224003474200',
    brand: 'أخرى',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p16',
    serial: 16,
    name: 'بيض ابيض كسر درجة ثانية (30)',
    barcode: 'EG-766262545-6224003474201',
    brand: 'أخرى',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p17',
    serial: 17,
    name: 'بيض ابيض سقط (30)',
    barcode: 'EG-766262545-6224003474202',
    brand: 'أخرى',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p18',
    serial: 18,
    name: 'بيض ابيض  مبيش (30)',
    barcode: 'EG-766262545-6224003474203',
    brand: 'أخرى',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p19',
    serial: 19,
    name: 'بيض ابيض متسخ (30)',
    barcode: 'EG-766262545-6224003474204',
    brand: 'أخرى',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p20',
    serial: 20,
    name: 'بيض ابيض سوبر ماركت (30)',
    barcode: 'EG-766262545-6224003474205',
    brand: 'أخرى',
    color: 'أبيض',
    note: '',
  },
  {
    id: 'p35',
    serial: 35,
    name: 'بيض احمر كسر درجة اولى (30)',
    barcode: 'EG-766262545-6224003474209',
    brand: 'أخرى',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p36',
    serial: 36,
    name: 'بيض احمر كسر درجة ثانية (30)',
    barcode: 'EG-766262545-6224003474210',
    brand: 'أخرى',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p37',
    serial: 37,
    name: 'بيض احمر سقط (30)',
    barcode: 'EG-766262545-6224003474211',
    brand: 'أخرى',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p38',
    serial: 38,
    name: 'بيض احمر  مبيش (30)',
    barcode: 'EG-766262545-6224003474212',
    brand: 'أخرى',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p39',
    serial: 39,
    name: 'بيض احمر متسخ (30)',
    barcode: 'EG-766262545-6224003474213',
    brand: 'أخرى',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p40',
    serial: 40,
    name: 'بيض احمر سوبر ماركت (30)',
    barcode: 'EG-766262545-6224003474214',
    brand: 'أخرى',
    color: 'أحمر',
    note: '',
  },
  {
    id: 'p52',
    serial: 52,
    name: 'بيض بلدى كسر درجة اولى (30)',
    barcode: 'EG-766262545-6224003474230',
    brand: 'أخرى',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p53',
    serial: 53,
    name: 'بيض بلدى كسر درجة ثانية (30)',
    barcode: 'EG-766262545-6224003474231',
    brand: 'أخرى',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p54',
    serial: 54,
    name: 'بيض بلدى سقط (30)',
    barcode: 'EG-766262545-6224003474232',
    brand: 'أخرى',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p56',
    serial: 56,
    name: 'بيض بلدى متسخ (30)',
    barcode: 'EG-766262545-6224003474234',
    brand: 'أخرى',
    color: 'بلدي',
    note: '',
  },
  {
    id: 'p57',
    serial: 57,
    name: 'بيض بلدى سوبر ماركت (30)',
    barcode: 'EG-766262545-6224003474235',
    brand: 'أخرى',
    color: 'بلدي',
    note: '',
  },
];

const ORIGINAL_CLIENTS = [
  { id: 'c1', name: 'وكالة المنصورة', tax: '313450196' },
  { id: 'c2', name: 'بندة', tax: '479918899' },
  { id: 'c3', name: 'اوسكار', tax: '200139495' },
  { id: 'c4', name: 'جيان ماركت   رع', tax: '679752358' },
  { id: 'c5', name: 'سبينيس', tax: '215533240' },
  { id: 'c6', name: 'اللولو', tax: '447599798' },
  { id: 'c7', name: 'سوان ماركت', tax: '718794168' },
  { id: 'c8', name: 'بيم', tax: '413344312' },
  { id: 'c9', name: 'جمعية الحصرى', tax: '266853943' },
  { id: 'c10', name: 'الفار', tax: '100535607' },
  { id: 'c11', name: 'فندق هيلتون هليوبلس', tax: '100356672' },
  { id: 'c12', name: 'جودز مارت', tax: '535966474' },
  { id: 'c13', name: 'فندق سانت ريجيس العاصمة', tax: '655468048' },
  { id: 'c14', name: 'اوكازيون', tax: '474218643' },
  { id: 'c15', name: 'فندق ماريوت مينا هاوس', tax: '735475547' },
  { id: 'c16', name: 'نون', tax: '730555992' },
  { id: 'c17', name: 'لوما', tax: '416130453' },
  { id: 'c18', name: 'برينجو', tax: '100497780' },
  { id: 'c19', name: 'بان كيكس فودز', tax: '635919516' },
  { id: 'c20', name: 'فندق سانت ريجيس كورنيش النيل', tax: '239892747' },
  { id: 'c21', name: 'سوبر سنتر', tax: '757864252' },
  { id: 'c22', name: 'زهران', tax: '415831687' },
  { id: 'c23', name: 'فندق رايدسون بلو شيراتون', tax: '274328453' },
  { id: 'c24', name: 'كارفور', tax: '200185128' },
  { id: 'c25', name: 'اولاد رجب', tax: '244946868' },
  { id: 'c26', name: 'امازون', tax: '340035072' },
  { id: 'c27', name: 'هايبر رومين', tax: '723799210' },
];

const sectionOrder = ['بيج ايج', 'كارفور', 'فاليو', 'أخرى'];
const colorOrder = ['أبيض', 'أحمر', 'بلدي', 'غير محدد'];

// STATE
let page = 'products';
let activeProductFilter = 'الكل';
let products = load('oval_products_v6', ORIGINAL_PRODUCTS);
let clients = load('oval_clients_v6', ORIGINAL_CLIENTS);

// DOM REFERENCES
const content = document.getElementById('content');
const statsEl = document.getElementById('stats');

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initHeaderScroll();
  render();
});

// ========================================
// PAGE NAVIGATION
// ========================================

function setPage(p) {
  page = p;
  document.getElementById('productsTab').classList.toggle('active', p === 'products');
  document.getElementById('taxTab').classList.toggle('active', p === 'tax');
  document.getElementById('productFilters').style.display = p === 'products' ? 'flex' : 'none';
  document.getElementById('search').value = '';
  render();
}

// ========================================
// FILTERING
// ========================================

function setProductFilter(f) {
  activeProductFilter = f;
  document.querySelectorAll('#productFilters button').forEach((b) =>
    b.classList.toggle('active', b.dataset.filter === f)
  );
  render();
}

function resetData() {
  products = structuredClone(ORIGINAL_PRODUCTS);
  clients = structuredClone(ORIGINAL_CLIENTS);
  persist();
  render();
  toast('تم استرجاع البيانات الأصلية');
}

// ========================================
// STATS & DISPLAY
// ========================================

function stats(list) {
  if (page === 'products') {
    let c = { 'بيج ايج': 0, 'كارفور': 0, 'فاليو': 0, 'أخرى': 0 };
    list.forEach((x) => c[sectionOf(x)]++);
    statsEl.innerHTML = `
      <span class="pill">الإجمالي: <b>${list.length}</b></span>
      <span class="pill">بيج ايج: <b>${c['بيج ايج']}</b></span>
      <span class="pill">كارفور: <b>${c['كارفور']}</b></span>
      <span class="pill">فاليو: <b>${c['فاليو']}</b></span>
      <span class="pill">أخرى: <b>${c['أخرى']}</b></span>
    `;
  } else {
    statsEl.innerHTML = `<span class="pill">عدد الشركات: <b>${list.length}</b></span>`;
  }
}

function cardClass(p) {
  const c = colorOf(p);
  return c === 'أحمر'
    ? 'egg-red'
    : c === 'بلدي'
    ? 'egg-balady'
    : c === 'أبيض'
    ? 'egg-white'
    : 'egg-other';
}

// ========================================
// RENDERING TEMPLATES
// ========================================

function rowProduct(p, i) {
  return `
    <article class="product-card ${cardClass(p)}">
      <div class="product-card-top">
        <span class="product-index">${i + 1}</span>
        <span class="product-type">${esc(colorOf(p))}</span>
      </div>
      <div class="product-name">${esc(p.name)}</div>
      <div class="product-barcode">${esc(p.barcode)}</div>
      <div class="actions">
        <button onclick='copyText(${JSON.stringify(p.barcode)})'>نسخ</button>
        <button class="blue" onclick='openEdit("product",${JSON.stringify(p.id)})'>تعديل</button>
      </div>
    </article>
  `;
}

function colorClass(c) {
  return c === 'أحمر' ? 'red' : c === 'بلدي' ? 'balady' : c === 'غير محدد' ? 'other' : '';
}

function colorBlockHtml(color, items) {
  return `
    <div class="color-block">
      <div class="color-head">
        <div class="color-title">
          <span class="dot ${colorClass(color)}"></span>${color}
        </div>
        <small>${items.length} صنف</small>
      </div>
      <div class="products-grid">${items.map(rowProduct).join('')}</div>
    </div>
  `;
}

function sectionHtml(name, items) {
  let body = '';
  if (name === 'بيج ايج') {
    colorOrder.forEach((c) => {
      const part = items.filter((x) => colorOf(x) === c);
      if (part.length) body += colorBlockHtml(c, part);
    });
  } else {
    const grouped = {};
    items.forEach((x) => {
      const c = colorOf(x);
      (grouped[c] ??= []).push(x);
    });
    colorOrder.forEach((c) => {
      if (grouped[c]?.length) body += colorBlockHtml(c, grouped[c]);
    });
  }
  return `
    <section class="brand-section">
      <div class="brand-head">
        <h2>${name}</h2>
        <small>${items.length} صنف</small>
      </div>
      ${body}
    </section>
  `;
}

function rowTax(c) {
  return `
    <div class="tax-row">
      <div class="tax-name">${esc(c.name)}</div>
      <div class="tax-code">${esc(c.tax)}</div>
      <div class="actions">
        <button onclick='copyText(${JSON.stringify(c.tax)})'>نسخ</button>
        <button class="blue" onclick='openEdit("tax",${JSON.stringify(c.id)})'>تعديل</button>
      </div>
    </div>
  `;
}

// ========================================
// MAIN RENDER
// ========================================

function render() {
  document.getElementById('productFilters').style.display = page === 'products' ? 'flex' : 'none';
  const q = document.getElementById('search').value;

  if (page === 'products') {
    let list = products
      .filter((x) => matchItem(x, q))
      .filter((x) => activeProductFilter === 'الكل' || sectionOf(x) === activeProductFilter)
      .sort(
        (a, b) =>
          sectionOrder.indexOf(sectionOf(a)) -
            sectionOrder.indexOf(sectionOf(b)) ||
          colorOrder.indexOf(colorOf(a)) - colorOrder.indexOf(colorOf(b)) ||
          (a.serial || 0) - (b.serial || 0)
      );

    stats(list);
    let html = '<div class="product-view">';
    sectionOrder.forEach((sec) => {
      const part = list.filter((x) => sectionOf(x) === sec);
      if (part.length) html += sectionHtml(sec, part);
    });
    html += '</div>';
    content.innerHTML = list.length ? html : '<div class="empty">مفيش بيانات مطابقة للبحث</div>';
  } else {
    let list = clients.filter((x) => matchItem(x, q));
    stats(list);
    content.innerHTML = list.length
      ? `<section class="tax-list">${list.map(rowTax).join('')}</section>`
      : '<div class="empty">مفيش بيانات مطابقة للبحث</div>';
  }
}

// ========================================
// MODAL OPERATIONS
// ========================================

function openAdd() {
  openEdit(page === 'products' ? 'product' : 'tax', null);
}

function openEdit(type, id) {
  const editType = document.getElementById('editType');
  const editId = document.getElementById('editId');
  const productFields = document.getElementById('productFields');
  const taxFields = document.getElementById('taxFields');
  const modalTitle = document.getElementById('modalTitle');
  const editor = document.getElementById('editor');

  editType.value = type;
  editId.value = id || '';
  productFields.style.display = type === 'product' ? 'block' : 'none';
  taxFields.style.display = type === 'tax' ? 'block' : 'none';
  modalTitle.textContent = id ? 'تعديل' : 'إضافة';

  if (type === 'product') {
    const p = products.find((x) => x.id === id) || { name: '', barcode: '', brand: 'بيج ايج', color: '' };
    document.getElementById('editName').value = p.name || '';
    document.getElementById('editCode').value = p.barcode || '';
    document.getElementById('editBrand').value = sectionOf(p) || 'بيج ايج';
  } else {
    const c = clients.find((x) => x.id === id) || { name: '', tax: '' };
    document.getElementById('editClient').value = c.name || '';
    document.getElementById('editTax').value = c.tax || '';
  }

  editor.showModal();
}

function saveEdit(ev) {
  ev.preventDefault();
  const editType = document.getElementById('editType');
  const editId = document.getElementById('editId');
  const type = editType.value;
  const id = editId.value;

  if (type === 'product') {
    if (id) {
      const p = products.find((x) => x.id === id);
      if (p)
        Object.assign(p, {
          name: document.getElementById('editName').value.trim(),
          barcode: document.getElementById('editCode').value.trim(),
          brand: document.getElementById('editBrand').value,
          color: colorOf({ name: document.getElementById('editName').value, color: '' }),
        });
    } else {
      products.push({
        id: 'p' + Date.now(),
        serial: products.length + 1,
        name: document.getElementById('editName').value.trim(),
        barcode: document.getElementById('editCode').value.trim(),
        brand: document.getElementById('editBrand').value,
        color: colorOf({ name: document.getElementById('editName').value, color: '' }),
      });
    }
  } else {
    if (id) {
      const c = clients.find((x) => x.id === id);
      if (c)
        Object.assign(c, {
          name: document.getElementById('editClient').value.trim(),
          tax: document.getElementById('editTax').value.trim(),
        });
    } else {
      clients.push({
        id: 'c' + Date.now(),
        name: document.getElementById('editClient').value.trim(),
        tax: document.getElementById('editTax').value.trim(),
      });
    }
  }

  persist();
  document.getElementById('editor').close();
  render();
  toast('تم الحفظ');
}

function deleteCurrent() {
  const editType = document.getElementById('editType');
  const editId = document.getElementById('editId');
  const type = editType.value;
  const id = editId.value;

  if (type === 'product') {
    products = products.filter((x) => x.id !== id);
  } else {
    clients = clients.filter((x) => x.id !== id);
  }

  persist();
  document.getElementById('editor').close();
  render();
  toast('تم الحذف');
}
