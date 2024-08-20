import React from "react";
import VoicesGrid from "../components/voices/Voicegrid";

const Voices = () => {
    return (
        <div className="p-6">
            <VoicesGrid />
        </div>
    );
};

export default Voices;


// Desired Structure -> component for generating each grid, search functionality should be separate (can be reused across multiple places)