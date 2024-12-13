import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Recipe } from "@/data/recipes";
import { RecipeCard } from "@/components/RecipeCard";

interface CategoryCarouselProps {
  name: string;
  items: Recipe[];
}

export function CategoryCarousel({ name, items }: CategoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 3 saniyede bir kayma için effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(items.length / 3));
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  // Bir geçiş sırasında hangi ürünlerin görüneceğini hesaplar
  const visibleItems = items.slice(currentIndex * 3, currentIndex * 3 + 3);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(items.length / 3));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(items.length / 3) - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-10 max-w-[1200px] mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-6">{name}</h2>
      <div className="relative">
        {/* Oklar */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel İçeriği */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {visibleItems.map((item) => (
            <RecipeCard key={item.id} recipe={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
