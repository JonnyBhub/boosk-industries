import React, { useState } from "react";
import { Switch } from "@aws-amplify/ui-react";
import { Icon } from "@iconify/react";


function ToggleDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode");
    };

    return (
        <div>
            <Switch
                checked={isDarkMode}
                onChange={handleToggle}
                checkedIcon={<Icon icon="line-md:moon-filled-to-sunny-filled-transition" />}
                uncheckedIcon={<Icon icon="line-md:sunny-filled-loop-to-moon-filled-transition" />}
            />
        </div>
    );
}

export default ToggleDarkMode;
