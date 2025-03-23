
import './App.css'

function App() {

  return (
    <>

    </>
  )
}

export default App

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { MotionDiv } from "framer-motion";
// import { Upload, Mic, Image, Download } from "lucide-react";

// export default function AIImageEditor() {
//   const [audioFile, setAudioFile] = useState(null);
//   const [transcript, setTranscript] = useState("");
//   const [generatedImages, setGeneratedImages] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleAudioUpload = (event) => {
//     setAudioFile(event.target.files[0]);
//   };

//   const handleTranscribe = async () => {
//     if (!audioFile) return alert("Please upload an audio file.");
//     setLoading(true);

//     // Simulating API Call
//     setTimeout(() => {
//       setTranscript("The sun is setting over the mountains, and birds are flying in the sky.");
//       setGeneratedImages([
//         "https://via.placeholder.com/300", // Placeholder image URLs
//         "https://via.placeholder.com/300",
//       ]);
//       setLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">AI-Powered Image Editor 🎨</h1>

//       <Card className="p-4 mb-4">
//         <Input type="file" accept="audio/*" onChange={handleAudioUpload} className="mb-2" />
//         <Button onClick={handleTranscribe} disabled={loading}>
//           {loading ? "Processing..." : "Transcribe & Generate Images"}
//         </Button>
//       </Card>

//       {transcript && (
//         <Card className="p-4 mb-4">
//           <h2 className="text-lg font-semibold">Extracted Text:</h2>
//           <p className="mt-2">{transcript}</p>
//         </Card>
//       )}

//       {generatedImages.length > 0 && (
//         <div>
//           <h2 className="text-lg font-semibold mb-2">Generated Images:</h2>
//           <div className="grid grid-cols-2 gap-4">
//             {generatedImages.map((img, index) => (
//               <Card key={index}>
//                 <CardContent>
//                   <img src={img} alt={`Generated ${index}`} className="rounded-lg w-full" />
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }