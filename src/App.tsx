import { Header } from "@/components/Header";
import { RecipeCard } from "@/components/RecipeCard";
import { Contact } from "@/components/Contact";
import { recipes } from "@/data/recipes";
import img from "./img/semra.png";
import food1 from "./img/food1.jpg";
import food2 from "./img/food2.jpg";
import food3 from "./img/food3.jpg";
import food4 from "./img/food4.jpg";
import food5 from "./img/food5.jpg";
import food6 from "./img/food6.jpg";


import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const foodItems = [
  {
    title: "Lezzetin Yolculuğuna Katılın",
    description:
      "20 yıllık tecrübemizle hazırladığımız özel tarifler, sofralarınıza lezzet katacak. Geleneksel tatları modern dokunuşlarla buluşturuyoruz.",
    img: food1,
  },
  {
    title: "En Özel Tarifler Sizler İçin",
    description:
      "Her biri özenle seçilmiş malzemelerle hazırlanan tariflerimizi keşfedin. Mutfağınızda fark yaratmaya hazır mısınız?",
    img: food2,
  },
  {
    title: "Ailenizle Paylaşabileceğiniz Tatlar",
    description:
      "Sıcak bir aile sofrası için ideal tariflerimizle tanışın. Hem pratik hem de lezzetli öneriler sizleri bekliyor.",
    img: food3,
  },
  {
    title: "Lezzet Dolu Bir Deneyime Davetlisiniz",
    description:
      "Yemek yapmak bir sanattır, biz de size bu sanatı öğretmek için buradayız. İlham veren tarifler için keşfe çıkın.",
    img: food4,
  },
  {
    title: "Sofranızın Yeni Gözdesi Olacak Tarifler",
    description:
      "Hem göze hem damağa hitap eden lezzetler hazırlayın. Tariflerimizle sofralarınızı unutulmaz kılın.",
    img: food5,
  },
  {
    title: "Lezzet Tutkunları İçin Özel Tarifler",
    description:
      "Misafirlerinizi etkileyebileceğiniz özel tariflerle tanışın. Deneyimli mutfak sırlarımızı sizinle paylaşıyoruz.",
    img: food6,
  },
];

const categories = Array.from(new Set(recipes.flatMap(recipe => recipe.categories)));

function App() {
  // Carousel state to manage the current index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCategories, setShowCategories] = useState(false);

  // Effect to change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % foodItems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-beyaz text-foreground">
      <Header />
      
      <main className="pt-10 min-h-[800px]">
        {/* Hero Section */}
      {/* Carousel Section */}
<section id="carousel" className="py-10">
  <div className="relative">
    {/* Carousel Container */}
    <div className="carousel relative items-center justify-center overflow-hidden h-[600px]">
      {foodItems.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${
            index === currentIndex ? "block" : "hidden"
          } w-full relative h-full`}
        >
          {/* Carousel Image */}
          <img
            src={item.img}
            alt={item.description}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>

    {/* Carousel Text Overlay - Orta alt kısma taşındı */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-center rounded-lg p-6 shadow-lg max-w-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        {foodItems[currentIndex].title} {/* Dinamik başlık */}
      </h2>
      <p className="text-sm md:text-base">
        {foodItems[currentIndex].description} {/* Dinamik açıklama */}
      </p>
    </div>

    {/* Modernized Indicators - Updated to reflect currentIndex */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
      {foodItems.map((_, index) => (
        <span
          key={index}
          className={`w-4 h-4 rounded-full transition ${
            index === currentIndex // Change to reflect current index
              ? "bg-purple-500 scale-110 shadow-md"
              : "bg-gray-300 hover:bg-purple-400"
          }`}
        ></span>
      ))}
    </div>

    {/* Modernized Navigation Arrows */}
    <button
      className="absolute left-8 top-1/2 transform -translate-y-1/2  text-white p-3 rounded-full shadow-lg hover:bg-purple-300 transition duration-200"
      style={{ fontSize: "3.5rem" }}
      onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + foodItems.length) % foodItems.length)}
    >
      &#8249;
    </button>
    <button
      className="absolute right-8 top-1/2 transform -translate-y-1/2  text-white p-3 rounded-full shadow-lg hover:bg-purple-300 transition duration-200"
      style={{ fontSize: "3.5rem" }}
      onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % foodItems.length)}
    >
      &#8250;
    </button>
  </div>
</section>


       {/* Recipes Section */}
        <section id="recipes" className="py-16 bg-background border rounded-xl border-gray-300 mx-10 z-10 mt-[-2rem] shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-sans text-4xl text-primary">Tarifler</h2>
              <button
                className="flex items-center gap-2 text-primary hover:text-purple-500 transition"
                onClick={() => setShowCategories((prev) => !prev)}
              >
                {showCategories ? (
                  <>
                    <ChevronUp className="h-6 w-6" /> Kategorileri Gizle
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-6 w-6" /> Kategorileri Göster
                  </>
                )}
              </button>
            </div>

            {/* Kategoriler Listesi */}
            {showCategories && (
              <div className="mb-8 bg-gray-100 rounded-lg p-4 shadow-inner">
                <h3 className="text-lg font-semibold mb-2">Kategoriler:</h3>
                <ul className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
                  {categories.map((category: string, index: number) => (
                    <li
                      key={index}
                      className="p-2 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>

      <footer className="py-6 bg-accent border-t border-accent-foreground/10">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2024 Semra'nın Tarifleri. Tüm hakları saklıdır.
        </div>
      </footer>
    </div>
  );
}

export default App;