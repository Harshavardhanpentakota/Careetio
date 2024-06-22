const {GEN_AI_API}=require("../config")
if (!GEN_AI_API) {
  throw new Error('Missing GENERATIVE_AI_API_KEY environment variable');
}
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAi = new GoogleGenerativeAI(GEN_AI_API); 
const additional_prompt="generate a roadmap  with Timelines mentioned with headings duration required to complete  each module in the course with resource links for ";
async function generateResult(prompt){
   
    const model=genAi.getGenerativeModel({model:"gemini-pro"});
    try {
        const input=additional_prompt+prompt;
        const res=await model.generateContent(input);
        return res.response.text();
    } catch (error) {
        throw error;
    }
}

module.exports={generateResult}