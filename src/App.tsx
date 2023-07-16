// import GenerateImage from "./components/GenerateImage";
import { Configuration, OpenAIApi } from "openai";

import { useState } from "react";
import { arrayItems } from "./AIOptions";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import "./styles/Chatgpt.css";

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState({});

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
  };

  return (
    <>
      {/* <GenerateImage /> */}
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} result={result} />
      )}
    </>
  );
}

export default App;
