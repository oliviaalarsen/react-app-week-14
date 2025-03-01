// Import SlideThumbnail component (used for each cocktail preview)
import SlideThumbnail from "./SlideThumbnail";

// Import the Cocktail type for TypeScript type checking
import { Cocktail } from "./cocktailsData";

// Define the props that Sidebar expects
interface SidebarProps {
  cocktails: Cocktail[]; // Array of cocktail objects
}

// Sidebar Component: Displays a list of cocktails as thumbnails
export default function Sidebar({ cocktails }: SidebarProps) {
  return (
    <div className="border-end bg-dark p-3 d-flex flex-column">
      {/* Loop through the cocktails array and render a SlideThumbnail for each */}
      {cocktails.map((cocktail) => (
        <SlideThumbnail key={cocktail.id} cocktail={cocktail} />
      ))}
    </div>
  );
}
