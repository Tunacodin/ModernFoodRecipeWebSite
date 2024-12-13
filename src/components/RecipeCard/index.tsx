import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Recipe } from "@/data/recipes";
import { RecipeImages } from "./RecipeImages";
import { RecipeDetails } from "./RecipeDetails";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden">
      <RecipeImages name={recipe.name} images={recipe.images} />

      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-2">{recipe.name}</h3>
        <p className="text-muted-foreground mb-4">{recipe.description}</p>
        
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls={`recipe-details-${recipe.id}`}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4" /> Tarifi Gizle
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-4 w-4" /> Tarifi Göster
            </>
          )}
        </Button>

        {isExpanded && (
          <div id={`recipe-details-${recipe.id}`}>
            <RecipeDetails 
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}