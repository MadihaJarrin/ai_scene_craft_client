import axios from "axios";
import { useState } from "react";
import Text from "./Text";
import backgroundImage from './img/img1.jpg';
import { useNavigate } from "react-router-dom";


const Content = () => {


    const [video, setVideo] = useState(null);
    const [file, setFile] = useState(null);
    const [transcription, setTranscription] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setVideo(URL.createObjectURL(selectedFile)); // Previews video
            setFile(selectedFile); // Stores file for upload
        }
    };

    const handleChangeVideo = () => {
        setVideo(null);
        setFile(null);
        setTranscription(""); // Reset video
    };

    // Convert video to text
    const handleConvertToText = async () => {
        if (!file) {
            alert("Please upload a video first.");
            return;
        }

        console.log("Video file ready for upload:", file);
        setIsLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post("http://localhost:5000/video", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("Backend response:", response); // Log the response from the backend
            setTranscription(response.data.text);

            // Navigate to the text page after successful conversion
            navigate("/prompt");

        } catch (error) {
            console.error("Error:", error);
            alert("Failed to convert video to text.");
        } finally {
            setIsLoading(false);  //  when the request finishes
        }
    };

    return (

        <div className="flex justify-center items-center min-h-screen "
            style={{
                backgroundImage: `url(${backgroundImage})`, // Use the imported image
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="card w-full sm:w-96 shadow-xl bg-white p-6">
                <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">Upload Video</h2>
                <div className="flex flex-col items-center">
                    <input
                        type="file"
                        accept="video/*"
                        onChange={handleFileChange}
                        className="file-input file-input-bordered w-full max-w-xs mb-4"
                    />
                    {video && (
                        <div className="mt-6 w-full max-w-7xl relative">
                            <h3 className="text-lg text-red-800 font-semibold text-center mb-4">Video Preview</h3>
                            <div className="aspect-w-16 aspect-h-9">
                                <video
                                    controls
                                    className="w-full h-full mt-2 border-2 border-gray-300 rounded-lg"
                                >
                                    <source src={video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    )}
                    <button
                        onClick={handleConvertToText}
                        className="btn btn-primary mt-4 w-full sm:w-3/4 lg:w-1/2"
                        disabled={isLoading}
                    >
                        {isLoading ? "Converting..." : "Convert to Text"}
                    </button>
                    {video && (
                        <button
                            onClick={handleChangeVideo}
                            className="btn btn-secondary mt-4 w-full sm:w-3/4 lg:w-1/2"
                        >
                            Change video
                        </button>
                    )}
                    {transcription && <Text transcription={transcription} />}

                </div>
            </div>
        </div>
    );
};

export default Content;

