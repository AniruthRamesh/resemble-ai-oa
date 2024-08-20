import React, { useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';  // Import icons

const AudioPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);

        if (!prevValue) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    const onLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const onTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    return (
        <div className="flex items-center w-full max-w-lg mx-auto mt-4">
            <button
                onClick={togglePlayPause}
                className="bg-green-400 text-white text-xl w-10 h-10 rounded-full flex items-center justify-center focus:outline-none"
            >
                {isPlaying ? <FaPause /> : <FaPlay />}  {/* Use the icons here */}
            </button>
            <input
                type="range"
                min="0"
                max={duration}
                value={currentTime}
                onChange={(e) => (audioRef.current.currentTime = e.target.value)}
                className="flex-1 mx-4 h-1 bg-gray-200 rounded-lg appearance-none"
            />
            <div className="text-sm text-gray-700">
                {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            <audio
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
                onTimeUpdate={onTimeUpdate}
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            />
        </div>
    );
};

export default AudioPlayer;
