import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import "../styles/GenerateImage.css";

function GenerateImage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<string | undefined>("");

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
    });
    setResult(response.data.data[0].url);
  };

  return (
    <div className="app-main">
      <h3>Generate an Image using Open AI API</h3>

      <input
        className="app-input"
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type something to Generate an Image"
      />
      <button onClick={generateImage}>Generate an Image</button>

      <img src={result} className="result-image" alt="generated image" />
    </div>
  );
}

export default GenerateImage;
