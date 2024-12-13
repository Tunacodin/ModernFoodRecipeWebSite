interface RecipeDetailsProps {
  ingredients: string[];
  instructions: string[];
}

export function RecipeDetails({ ingredients, instructions }: RecipeDetailsProps) {
  return (
    <div className="mt-4 space-y-4">
      <div>
        <h4 className="font-semibold mb-2">Malzemeler</h4>
        <ul className="list-disc pl-5 space-y-1">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Hazırlanışı</h4>
        <ol className="list-decimal pl-5 space-y-1">
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}