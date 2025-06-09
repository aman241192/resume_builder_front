import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiEndPoints } from "../../helpers/axios/apiEndPoints";
import axiosInstance from "../../utils/Axios";
import { GoogleGenAI } from "@google/genai";

export const generateAiAction = createAsyncThunk(
  "post/personal",
  async (prompt) => {
    const apiKey = "AIzaSyBBj9Ep0e8H1dCj84LrGOJqPCGyzFrFNzY";
    // const apiKey = process.env.REACT_APP_GEMINI_AI_KEY;

    const ai = new GoogleGenAI({ apiKey: apiKey });

    try {
      if (prompt != "") {
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
          generationConfig: {
            candidateCount: 3, // This will give you 3 variants
            temperature: 0.7, // Adjust for more creativity
          },
        });

        const textResponse =
          response?.candidates?.[0]?.content?.parts?.[0]?.text || "";

        // Remove the ```json and ``` markdown wrapper by regex
        const cleanJsonString = textResponse
          .replace(/```json\s*/, "") // remove ```json at start
          .replace(/\s*```/, "") // remove ``` at end
          .trim();

        // return cleanJsonString;
         return JSON.parse(cleanJsonString);
      }
      // Split the text using regex to match numbered summaries (e.g., "1.", "2.", "3.")
      //   const summariesArray = textResponse
      //     .split(/\n?\d+\.\s+/)
      //     .filter((s) => s.trim().length > 0)
      //     .map((s) => s.trim());

      //   console.log("summariesArray", summariesArray);
      //   setSummaries(summariesArray);
    } catch (error) {
      console.error("Error generating AI content:", error);
    }

    // return response.data;
  }
);
