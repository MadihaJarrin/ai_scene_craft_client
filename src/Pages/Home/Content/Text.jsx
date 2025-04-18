import React, { useState } from 'react';
import backgroundImg from './img/cartoon-ai-robot-scene.jpg';
import axios from 'axios';

const Text = () => {

    const [text, setText] = useState('');
    const [generatedImage, setGeneratedImage] = useState('');


    const [isLoading, setIsLoading] = useState(false);

    // Handle image generation
    const handleGenerateImage = async () => {

        console.log("Sending prompt:", text);

        if (!text) {
            alert("No text available for image generation.");
            return;
        }

        setIsLoading(true);
        try {
            // Call backend API to generate the image
            const response = await axios.post("http://localhost:5000/generate", {
                prompt: text, //send the text to backend 
            });
            console.log("Image URL:", response.data.imageUrl);

            //  backend returns the URL of the generated image
            setGeneratedImage(response.data.imageUrl);

        } catch (error) {
            console.error("Error generating image:", error);
            alert("Failed to generate image.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="flex justify-center items-center min-h-screen"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                padding: "20px",
            }}
        >
            <div
                className="w-full sm:w-96 shadow-xl bg-white p-6 opacity-98 border-blue-900 border-2"
                style={{ borderRadius: "10px" }}
            >
                <h2 className="text-2xl font-semibold text-center mb-4 text-orange-800 ">
                    Extracted Prompt
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                    This is the extracted text from the audio. You can generate an image based on the prompt.
                </p>
                <textarea
                    className="w-full p-2 mb-4 border-2 border-gray-300 rounded-md"
                    rows="5"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Text from audio will appear here..."
                />
                <button
                    onClick={handleGenerateImage}
                    className="btn btn-primary w-full mt-4"
                    disabled={isLoading}
                >
                    {isLoading ? "Generating..." : "Generate Image"}
                </button>
                {generatedImage && (
                    <div className="mt-6">
                        <button
                            onClick={handleGenerateImage}
                            className="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
                        >
                            Generate Images
                        </button>
                        <img
                            src={generatedImage}
                            alt="Generated"
                            className="mt-4 w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                )}
            </div>
        </div>


        // <div
        //     className="flex justify-center items-center min-h-screen"
        //     style={{
        //         backgroundImage: `url(${backgroundImg})`,
        //         backgroundSize: "cover",
        //         backgroundPosition: "center",
        //         color: "white", // Ensures text is readable over the image
        //         padding: "20px",
        //     }}
        // >
        //     <div
        //         className="w-full sm:w-96 shadow-xl bg-white p-6 opacity-90" // Adds opacity to background for better text visibility
        //         style={{ borderRadius: "10px" }}
        //     >
        //         <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
        //             Extracted Audio From Video
        //         </h2>
        //         <p className="text-lg text-gray-700 mb-4">
        //             This is an example text page. You can add any content here, and the background will stay consistent with the one used on your Content page.
        //         </p>
        //         <p className="text-lg text-gray-700">
        //             Adding more
        //         </p>
        //     </div>
        // </div>
    );
};

export default Text;