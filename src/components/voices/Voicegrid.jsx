import React, { useState } from "react";
import VoiceCard from "./VoiceCard";
import { voices } from "../../utils/voices";

const VoicesGrid = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredVoices = voices.filter((voice) =>
        voice.voice_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        voice.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
        voice.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        voice.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="max-w-4xl mx-auto p-6">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search voices or filter by accents, use case, tone of voice and more"
                className="w-full p-4 mb-6 border border-gray-300 rounded-lg"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredVoices.map((voice) => (
                    <VoiceCard key={voice.id} voice={voice} />
                ))}
            </div>
        </div>
    );
};

export default VoicesGrid;
