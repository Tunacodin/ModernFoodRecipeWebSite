import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Recipe, recipes } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="relative overflow-hidden">
      {/* Carousel */}
      <Carousel className="w-full max-h-[300px]">
        <CarouselContent>
          {recipe.images.map((image: string, index: number) => (
            <CarouselItem key={index}>
              <div
                className={`aspect-video relative overflow-hidden rounded-t-lg transition-opacity duration-300 ${
                  isExpanded ? "opacity-50" : "opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`${recipe.name} - ${index + 1}`}
                  className="w-full h-[300px] object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Ürün Bilgisi */}
      <div className="p-4">
        <h3 className="text-2xl font-bold">{recipe.name}</h3>
        <p className="text-muted-foreground">{recipe.description}</p>
        <p className="text-sm text-gray-500">Kategori: {recipe.categories.join(', ')}</p>
      </div>

      {/* Expandable Content */}
      <div
        className={`absolute bottom-0 left-0 right-0 transition-transform duration-300 ${
          isExpanded ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ height: "100%", backgroundColor: isExpanded ? "rgba(0, 0, 0, 0.5)" : "transparent" }}
      >
        <CardContent className="p-6 h-full overflow-auto">
          {isExpanded && ( // İçindekiler ve tarif sadece genişletildiğinde gösterilecek
            <>
              <div className="flex flex-wrap">
                <div className="w-1/2 pr-2"> {/* Sol taraf */}
                  <h4 className="font-semibold mb-2 text-center">Malzemeler</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {recipe.ingredients.slice(0, Math.ceil(recipe.ingredients.length / 2)).map((ingredient: string, index: number) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2 pl-2"> {/* Sağ taraf */}
                  <ul className="list-disc pl-5 space-y-1">
                    {recipe.ingredients.slice(Math.ceil(recipe.ingredients.length / 2)).map((ingredient: string, index: number) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold mb-2 text-center">Hazırlanışı</h4>
                <ol className="list-decimal pl-5 space-y-1">
                  {recipe.instructions.map((instruction: string, index: number) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </>
          )}
        </CardContent>
      </div>
    </Card>
  );
}
