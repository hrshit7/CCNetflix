import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

export default openai;