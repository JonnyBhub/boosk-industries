import React, { useState } from "react";
import { SwitchField } from "@aws-amplify/ui-react";
import { Icon } from "@iconify/react";


function ToggleDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode");
        const underlineDiv = document.querySelector(".underline");
        if (underlineDiv) {
            underlineDiv.classList.toggle("dark-mode");
        }
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const movingSun = <Icon icon="line-md:sunny-outline-loop" />;
    const movingMoon = <Icon icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" />;
    const sun = <Icon icon="line-md:sunny-filled" />;
    const moon = <Icon icon="line-md:moon-filled" />;

    let icon;
    if (isDarkMode) {
        icon = isHovering ? movingMoon : moon;
    } else {
        icon = isHovering ? movingSun : sun;
    }


    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <SwitchField
                label={icon}
                labelPosition={isDarkMode ? "end" : "start"}
                checked={isDarkMode}
                onChange={handleToggle}
                lockSwitch={true}
            />
        </div>
    );
}


export default ToggleDarkMode;

