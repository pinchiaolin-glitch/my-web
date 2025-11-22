import { GoogleGenAI } from "@google/genai";

export async function callGeminiAPI(prompt: string, systemInstruction?: string): Promise<string> {
  // Use type assertion to access aistudio property safely without global augmentation conflicts
  const aiStudio = (window as any).aistudio;

  // 1. Check if we are in AI Studio environment and need to select a key
  if (aiStudio) {
    try {
      const hasKey = await aiStudio.hasSelectedApiKey();
      if (!hasKey) {
        await aiStudio.openSelectKey();
      }
    } catch (e) {
      console.debug("Auto-key selection check failed:", e);
    }
  }

  // 2. Get API Key safely
  const apiKey = process.env.API_KEY?.trim();
  
  if (!apiKey) {
    console.warn("API Key not found in process.env.API_KEY");
    // Try one last time to prompt user if we know we are in the environment
    if (aiStudio) {
        try {
            await aiStudio.openSelectKey();
            return "Please select an API Key to enable the assistant.";
        } catch {
            return "AI service is not configured.";
        }
    }
    return "AI service is not configured.";
  }

  try {
    // 3. Initialize Client
    const ai = new GoogleGenAI({ apiKey });
    
    // 4. Call API
    // Use gemini-2.5-flash for general text tasks as recommended
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: systemInstruction ? { systemInstruction } : undefined,
    });

    return response.text || "Sorry, I couldn't generate a response.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // 5. Handle Permission Errors (403) specifically
    // This often happens if the key project doesn't have the API enabled or if no key is selected
    if (error?.status === 403 || error?.message?.includes('403') || error?.toString().includes('PERMISSION_DENIED')) {
      if (aiStudio) {
        try {
          // Re-trigger key selection if permission is denied (key might be invalid/expired)
          await aiStudio.openSelectKey();
          return "Permission denied. Please select a valid API Key and try again.";
        } catch (e) {
          console.error("Failed to open key selector:", e);
        }
      }
      return "Permission denied. Please check your API Key permissions.";
    }

    return "Sorry, something went wrong with the AI service. Please try again later.";
  }
}