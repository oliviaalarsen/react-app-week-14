import Toolbar from "./Toolbar"; // Top navigation bar
import Sidebar from "./Sidebar"; // Sidebar for navigation/input
import SlideView from "./SlideView"; // Grid layout for displaying cocktails
import { cocktails } from "./cocktailsData"; // Import static cocktail data

export default function App() {
  return (
    <div className="d-flex bg-light flex-column vh-100">
      <Toolbar />
      <div className="d-flex">
        <Sidebar cocktails={cocktails} />
        <SlideView cocktail={cocktails[0]} />
      </div>
    </div>
  );
}
