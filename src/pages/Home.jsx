import React, { useState } from "react";
import { voices } from "../utils/voices";
import AudioPlayer from "../components/main_components/AudioPlayer";
import { FaPlay } from 'react-icons/fa';
import { generateVoices } from "../services/api";
import { FaSpinner } from 'react-icons/fa';

const Home = () => {
    const [userText, setUserText] = useState("");
    const [selectedVoice, setSelectedVoice] = useState(voices.length > 0 ? voices[0] : null);
    const [loading, setLoading] = useState(false);
    const [apiMessage, setApiMessage] = useState("");

    const handleGenerate = async () => {
        setLoading(true);
        try {
            const response = await generateVoices({ voiceName: selectedVoice.voice_name });
            setApiMessage(response.message);
        } catch (error) {
            setApiMessage(error.message);
        } finally {
            setLoading(false);
            setTimeout(() => {
                setApiMessage("");
            }, 3000);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 pt-25">
            
            <p className="text-2xl font-bold text-center p-3">Resemble AI - Text to Speech</p>
            {/* Dropdown for voices */}

            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                    <label htmlFor="voiceSelect" className="block text-sm font-medium text-gray-700">
                        Voice
                    </label>
                    <select
                        id="voiceSelect"
                        value={selectedVoice?.id || ""}
                        onChange={(e) =>
                            setSelectedVoice(voices.find((voice) => voice.id === parseInt(e.target.value)))
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                        {voices.map((voice) => (
                            <option key={voice.id} value={voice.id}>
                                {voice.voice_name} ({voice.language} - {voice.country})
                            </option>
                        ))}
                    </select>
                </div>

                <div className="w-full sm:w-2/3 flex justify-center sm:justify-end space-x-4 mt-4 sm:mt-0">
                    <button className="text-blue-500 hover:underline">Set Styles</button>
                    <button className="text-blue-500 hover:underline">Localize</button>
                </div>
            </div>

            {/* Input textarea */}
            <div className="mb-6 flex items-center border border-green-400 rounded-lg p-2">
                <div className="flex-1">
                    <label htmlFor="userText" className="block text-sm font-medium text-gray-700 mb-2">
                        Text
                    </label>
                    <textarea
                        id="userText"
                        value={userText}
                        onChange={(e) => setUserText(e.target.value)}
                        className="w-full p-4 border border-transparent focus:outline-none rounded-lg"
                        rows="4"
                        placeholder="Write here..."
                    />
                </div>
                <button
                    onClick={handleGenerate}
                    className="bg-green-400 text-white text-2xl w-12 h-12 ml-4 rounded-full hover:bg-green-500 focus:outline-none flex items-center justify-center"
                >
                    <FaPlay />  {/* Play icon */}
                </button>
            </div>

            <div className="flex justify-end">
                <span className="text-gray-500 text-sm">{userText.length} / 3000</span>
            </div>

            {/* Conditional rendering for Audio Player or Spinner */}
            <div className="mt-6">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <FaSpinner className="animate-spin text-green-400 text-4xl" />
                    </div>
                ) : (
                    <AudioPlayer />
                )}
            </div>

            {/* API Message */}
            {apiMessage && (
                <div className="mt-4 text-center text-sm text-gray-700">
                    {apiMessage}
                </div>
            )}
        </div>
    );
};

export default Home;
