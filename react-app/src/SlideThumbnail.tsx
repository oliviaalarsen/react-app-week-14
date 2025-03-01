// Import the Cocktail type to define props
import { Cocktail } from "./cocktailsData";

// Define the props for the SlideThumbnail component
interface SlideThumbnailProps {
  cocktail: Cocktail; // Each SlideThumbnail represents one cocktail
}

// SlideThumbnail Component: Displays a small thumbnail for each cocktail
export default function SlideThumbnail({ cocktail }: SlideThumbnailProps) {
  return (
    <div className="text-center my-3">
      {/* Cocktail Image */}
      <img
        src={cocktail.image} // Use cocktail's image
        alt={cocktail.name} // Set alt text for accessibility
        className="img-fluid rounded shadow-sm border"
        style={{ width: "80px", height: "80px", objectFit: "cover" }}
      />
      
      {/* Cocktail Name */}
      <p className="mt-2 text-white fw-bold">{cocktail.name}</p>
    </div>
  );
}
