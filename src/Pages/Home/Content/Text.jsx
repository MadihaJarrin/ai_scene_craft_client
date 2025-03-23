import React from 'react';

const Text = (transcription) => {
    return (
        <div className="mt-6 p-4 bg-gray-700 rounded-lg w-full">
            <h2 className="text-lg font-bold text-white">Transcription:</h2>
            <p className="mt-2 text-white">{transcription}</p>
        </div>
    );
};

export default Text;