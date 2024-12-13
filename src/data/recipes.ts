import manti from "../img/mantı.jpg";
import lahmacun from "../img/lahmacun.jpg";
import fırındaTavuk from "../img/tavuk.jpg";
import baklava from "../img/baklava.jpg";
import çorba from "../img/çorba.jpg";
import imambayildi from "../img/ImamBayıldı.png";
import köfte from "../img/köfte.jpg";
import revani from "../img/Revani.png";
import kısır from "../img/Kısır.png";
import zeytinyağlıFasulye from "../img/Fasulye.png";

export type Recipe = {
  id: string;
  name: string;
  description: string;
  images: string[];
  ingredients: string[];
  instructions: string[];
  categories: string[];
};

export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Köfte',
    description: 'Geleneksel Türk mutfağının vazgeçilmez lezzeti, baharatlarla harmanlanmış el yapımı köfte',
    images: [
      fırındaTavuk,
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1200',
      'https://images.unsplash.com/photo-1633321702518-7feccafb94d5?q=80&w=1200',
    ],
    ingredients: [
      '500g dana kıyma',
      '1 adet soğan',
      '2 diş sarımsak',
      'Maydanoz',
      'Kimyon',
      'Karabiber',
      'Tuz',
    ],
    instructions: [
      'Kıymayı geniş bir kaba alın',
      'Soğan ve sarımsağı ince ince doğrayın',
      'Tüm malzemeleri karıştırın',
      'Köfte şekli verin',
      'Izgara veya tavada pişirin',
    ],
    categories: ['Ana Yemek', 'Et Yemekleri'],
  },
  {
    id: '2',
    name: 'Mantı',
    description: 'El açması hamur, lezzetli iç harcı ve yoğurt sosuyla geleneksel Türk mantısı',
    images: [
      manti,
      'https://images.unsplash.com/photo-1603137659834-fff3821e0d13?q=80&w=1200',
      'https://images.unsplash.com/photo-1583835746434-cf1534674b41?q=80&w=1200',
      'https://images.unsplash.com/photo-1583835746405-e47a95b0f7cb?q=80&w=1200',
    ],
    ingredients: [
      '3 su bardağı un',
      '1 yumurta',
      '300g kıyma',
      'Yoğurt',
      'Tereyağı',
      'Nane',
      'Kırmızı biber',
    ],
    instructions: [
      'Hamuru yoğurun ve dinlendirin',
      'İç harcı hazırlayın',
      'Hamuru açın ve küçük kareler kesin',
      'İç harcı yerleştirip kapatın',
      'Kaynar suda haşlayın',
      'Üzerine sosları ekleyin',
    ],
    categories: ['Ana Yemek', 'Hamur İşleri'],
  },
  {
    id: '3',
    name: 'Lahmacun',
    description: 'İnce çıtır hamur üzerinde baharatlı et karışımıyla lahmacun',
    images: [
      lahmacun,
      'https://images.unsplash.com/photo-1573055378411-7d0f6f7c6539?q=80&w=1200',
      'https://images.unsplash.com/photo-1565450398484-7821c2878a42?q=80&w=1200',
      'https://images.unsplash.com/photo-1600880291807-7e429e0900fb?q=80&w=1200',
    ],
    ingredients: [
      '500g un',
      '300g kıyma',
      '1 adet soğan',
      '1 yemek kaşığı biber salçası',
      'Maydanoz',
      'Baharatlar',
    ],
    instructions: [
      'Hamuru yoğurun ve dinlendirin',
      'İç harcı hazırlayın',
      'Hamuru ince açın',
      'Harcı üzerine yayın',
      'Fırında çıtırlaşana kadar pişirin',
    ],
    categories: ['Ana Yemek', 'Hamur İşleri'],
  },
  {
    id: '4',
    name: 'İmam Bayıldı',
    description: 'Zeytinyağlı patlıcan dolması, soğanlı ve domatesli iç harcıyla İmam Bayıldı',
    images: [
      imambayildi,
      'https://images.unsplash.com/photo-1603137659834-fff3821e0d13?q=80&w=1200',
      'https://images.unsplash.com/photo-1583835746434-cf1534674b41?q=80&w=1200',
      'https://images.unsplash.com/photo-1583835746405-e47a95b0f7cb?q=80&w=1200',
    ],
    ingredients: [
      '4 adet patlıcan',
      '2 adet soğan',
      '2 diş sarımsak',
      '3 adet domates',
      'Zeytinyağı',
      'Tuz',
    ],
    instructions: [
      'Patlıcanları soyup kızartın',
      'İç harcı hazırlayın',
      'Patlıcanları doldurun',
      'Fırında pişirin',
    ],
    categories: ['Ana Yemek', 'Zeytinyağlılar'],
  },
  {
    id: '5',
    name: 'Fırında Tavuk',
    description: 'Baharatlı ve sebzeli tavuk parçalarının fırında mükemmel uyumu',
    images: [
      fırındaTavuk,
      'https://images.unsplash.com/photo-1626127978464-2922e6a6a168?q=80&w=1200',
      'https://images.unsplash.com/photo-1506368083636-6defb67639f0?q=80&w=1200',
      'https://images.unsplash.com/photo-1579099819177-1e5c2fa00744?q=80&w=1200',
    ],
    ingredients: [
      '1 bütün tavuk',
      '2 adet patates',
      '3 adet havuç',
      'Zeytinyağı',
      'Baharatlar',
    ],
    instructions: [
      'Tavuğu marine edin',
      'Sebzeleri doğrayın',
      'Tavuğu ve sebzeleri fırın tepsisine yerleştirin',
      'Fırında pişirin',
    ],
    categories: ['Ana Yemek', 'Et Yemekleri'],
  },
  {
    id: '6',
    name: 'Baklava',
    description: 'Kat kat hamurun cevizle buluştuğu geleneksel Türk tatlısı',
    images: [
      baklava,
      'https://images.unsplash.com/photo-1620136812830-c4dc1d7aeafd?q=80&w=1200',
      'https://images.unsplash.com/photo-1587245931337-285a2fbaebb6?q=80&w=1200',
      'https://images.unsplash.com/photo-1618928461987-ec362dbb7293?q=80&w=1200',
    ],
    ingredients: [
      '500g un',
      '200g ceviz içi',
      '250g tereyağı',
      '1 kg şeker',
      '1 litre su',
    ],
    instructions: [
      'Hamuru ince açın',
      'Cevizi serpin',
      'Katları yerleştirin',
      'Fırında pişirin',
      'Şerbeti dökün',
    ],
    categories: ['Tatlılar'],
  },
  {
    id: '7',
    name: 'Mercimek Çorbası',
    description: 'Besleyici, lezzetli ve klasik mercimek çorbası tarifi',
    images: [
      çorba,
      'https://images.unsplash.com/photo-1587651503195-dc84d80cafd5?q=80&w=1200',
      'https://images.unsplash.com/photo-1600880282676-d1db97db711f?q=80&w=1200',
      'https://images.unsplash.com/photo-1612895134040-17014299ee14?q=80&w=1200',
    ],
    ingredients: [
      '1 su bardağı kırmızı mercimek',
      '1 adet soğan',
      '1 yemek kaşığı un',
      '2 yemek kaşığı tereyağı',
      'Tuz',
      'Baharatlar',
    ],
    instructions: [
      'Soğanı kavurun',
      'Mercimeği ekleyin',
      'Suyu ekleyip pişirin',
      'Blenderdan geçirin',
    ],
    categories: ['Çorbalar'],
  },
  {
    id: '8',
    name: 'Zeytinyağlı Fasulye',
    description: 'Taze fasulyenin zeytinyağıyla buluştuğu hafif ve lezzetli bir tarif',
    images: [
      zeytinyağlıFasulye,
      'https://images.unsplash.com/photo-1631169085890-d972fb575fd3?q=80&w=1200',
      'https://images.unsplash.com/photo-1598511755935-e8e9b3b206a2?q=80&w=1200',
      'https://images.unsplash.com/photo-1617552686181-8c7192ef8d62?q=80&w=1200',
    ],
    ingredients: [
      '500g taze fasulye',
      '2 adet domates',
      '2 diş sarımsak',
      'Zeytinyağı',
      'Tuz',
    ],
    instructions: [
      'Fasulyeleri ayıklayın',
      'Zeytinyağı ile kavurun',
      'Domates ve sarımsağı ekleyin',
      'Kısık ateşte pişirin',
    ],
    categories: ['Zeytinyağlılar'],
  },
  {
    id: '9',
    name: 'Revani',
    description: 'Şerbetli ve hafif tatlı revani tarifi',
    images: [
      revani,
      'https://images.unsplash.com/photo-1603372158617-7715b8f037d0?q=80&w=1200',
      'https://images.unsplash.com/photo-1598538938565-bd98c94849d2?q=80&w=1200',
      'https://images.unsplash.com/photo-1560718392-54565d5b0f11?q=80&w=1200',
    ],
    ingredients: [
      '3 yumurta',
      '1 su bardağı un',
      '1 su bardağı irmik',
      '1 su bardağı şeker',
      '1 su bardağı yoğurt',
      'Şerbet için su ve şeker',
    ],
    instructions: [
      'Malzemeleri karıştırın',
      'Fırında pişirin',
      'Şerbeti dökün',
    ],
    categories: ['Tatlılar'],
  },
  {
    id: '10',
    name: 'Kısır',
    description: 'Bulgur, baharatlar ve taze yeşilliklerle yapılan nefis bir ara öğün',
    images: [
      kısır,
      'https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?q=80&w=1200',
      'https://images.unsplash.com/photo-1614564812718-37c4cc0c7458?q=80&w=1200',
      'https://images.unsplash.com/photo-1568906763018-7a6a34310b94?q=80&w=1200',
    ],
    ingredients: [
      '2 su bardağı ince bulgur',
      '1 çay bardağı zeytinyağı',
      '1 yemek kaşığı biber salçası',
      'Maydanoz',
      'Taze soğan',
      'Limon suyu',
      'Nar ekşisi',
    ],
    instructions: [
      'Bulguru ıslatın',
      'Salça ve baharatları karıştırın',
      'Yeşillikleri ekleyin',
    ],
    categories: ['Aperatif'],
  },
];
