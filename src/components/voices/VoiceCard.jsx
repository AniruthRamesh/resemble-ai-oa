import React from "react";

const VoiceCard = ({ voice }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md flex flex-col">
            <div className="flex items-center mb-2">
                <div className="text-lg font-semibold">{voice.voice_name}</div>
                <div className="text-sm text-gray-500 ml-2">({voice.language} - {voice.country})</div>
            </div>
            <div className="flex flex-wrap gap-2">
                {voice.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="text-xs bg-gray-200 text-gray-700 py-1 px-2 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default VoiceCard;
