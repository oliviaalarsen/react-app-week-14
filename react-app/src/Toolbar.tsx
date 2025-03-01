// Import ToolbarButton component to create buttons
import ToolbarButton from "./ToolbarButton";

// Import icons for the toolbar buttons
import colorIcon from "./assets/martini-glass-citrus-solid.svg";
import fontIcon from "./assets/whiskey-glass-solid.svg";

// Toolbar Component: Displays buttons for different actions
export default function Toolbar() {
    return (
        <div className="bg-dark p-2 text-light">
            {/* Button 1: Displays an alert when clicked */}
            <ToolbarButton icon={colorIcon} onClick={() => alert("Shaken, not stirred!")} />
            
            {/* Button 2: Displays a different alert when clicked */}
            <ToolbarButton icon={fontIcon} onClick={() => alert("Never shake brown liquor!")} />
        </div>
    );
}
