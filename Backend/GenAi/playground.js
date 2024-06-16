const {GEN_AI_API}=require("../config")
if (!GEN_AI_API) {
  throw new Error('Missing GENERATIVE_AI_API_KEY environment variable');
}
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAi = new GoogleGenerativeAI(GEN_AI_API); 
async function generateResult(prompt){
   
    const model=genAi.getGenerativeModel({model:"gemini-pro"});
    try {
        const res=await model.generateContent(prompt);
        console.log(res.response.text());
    } catch (error) {
        console.error(error);
    }
}

module.exports={generateResult}