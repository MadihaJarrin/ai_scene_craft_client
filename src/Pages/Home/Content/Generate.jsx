import { useLocation, useNavigate } from 'react-router-dom';
import backgroundImg from './img/img10.jpg';


const Generate = () => {


    // Simulate image generation (replace with your logic)

    const location = useLocation();
    const { images } = location.state || { images: [] }; // Get images from state
    const navigate = useNavigate();

    return (


        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                padding: "20px",
            }}>
            <div className="bg-white shadow-lg p-6 rounded-lg w-full sm:w-96">
                <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
                    Generated Images
                </h2>

                {images.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Generated ${index + 1}`}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">No images generated yet.</p>
                )}

                <button
                    onClick={() => navigate("/text")}
                    className="btn btn-primary w-full mt-4"
                >
                    Back to Text Page
                </button>
            </div>
        </div>
    );
};

export default Generate;