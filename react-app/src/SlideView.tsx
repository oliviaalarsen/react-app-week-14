// Import Cocktail type from data file

import { Cocktail } from "./cocktailsData";

// Define the expected props for SlideView
interface SlideViewProps {
  cocktail: Cocktail; // The selected cocktail to display
}

// SlideView Component: Displays detailed information about the selected cocktail
export default function SlideView({ cocktail }: SlideViewProps) {
  return (
    <div className="flex-grow-1 p-3">
      <div className="d-flex flex-grow-1 justify-content-center">
        <div className="shadow m-3 w-75 h-85 px-3 py-2 border bg-light">
      <h2>{cocktail.name}</h2>
      <p><strong>Glass:</strong> {cocktail.glass}</p>
      <p><strong>Ingredients:</strong> {cocktail.ingredients}</p>
      <p><strong>Method:</strong> {cocktail.method}</p>
      <p><strong>Notes:</strong> {cocktail.notes}</p>
    </div>
    </div>
    </div>
  );
}


