interface IOption {
  name: string;
  id: string;
  description: string;
  option?: any;
}

export const arrayItems: IOption[] = [
  {
    name: "Q&A",
    id: "q&a",
    description: "Answer questions based on existing knowledge.",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: "\n",
    },
  },
  {
    name: "Grammar correction",
    id: "grammarCorrection",
    description: "Corrects sentences into standard English.",
    option: {
      model: "text-davinci-003",
      prompt: "Correct this to standard English:\n\nShe no went to the market.",
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Summarize for a 2nd grader",
    id: "summary",
    description: "Translates difficult text into simpler concepts.",
    option: {
      model: "text-davinci-003",
      prompt:
        "Summarize this for a second-grade student:\n\nJupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined. Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.[19] When viewed from Earth, Jupiter can be bright enough for its reflected light to cast visible shadows,[20] and is on average the third-brightest natural object in the night sky after the Moon and Venus.",
      temperature: 1,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Natural language to OpenAI API",
    id: "naturalLanguage",
    description:
      "Create code to call to the OpenAI API using a natural language instruction.",
    option: {
      model: "text-davinci-003",
      prompt:
        '"""\nUtil exposes the following:\nutil.openai() -> authenticates & returns the openai module, which has the following functions:\nopenai.Completion.create(\n    prompt="<my prompt>", # The prompt to start completing from\n    max_tokens=123, # The max number of tokens to generate\n    temperature=1.0 # A measure of randomness\n    echo=True, # Whether to return the prompt in addition to the generated completion\n)\n"""\nimport util\n"""\nCreate an OpenAI completion starting from the prompt "Once upon an AI", no more than 5 tokens. Does not include the prompt.\n"""\n',
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['"""'],
    },
  },
  {
    name: "Text to command",
    id: "textToCommand",
    description: "Translate text into programmatic commands.",
    option: {
      model: "text-davinci-003",
      prompt:
        "Convert this text to a programmatic command:\n\nExample: Ask Constance if we need some bread\nOutput: send-msg `find constance` Do we need some bread?\n\nReach out to the ski store and figure out if I can get my skis fixed before I leave on Thursday",
      temperature: 0,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.2,
      presence_penalty: 0.0,
    },
  },
  {
    name: "English to other languages",
    id: "translate",
    description: "Translates English text into French, Spanish and Japanese.",
    option: {
      model: "text-davinci-003",
      prompt:
        "Translate this into 1. French, 2. Spanish and 3. Japanese:\n\nWhat rooms do you have available?\n\n1.",
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
];
