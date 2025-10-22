import React, { useState } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { useLanguage } from '../contexts/LanguageContext';

interface ImageGeneratorProps {
  templateImageUrl: string;
  onImageGenerated: (url: string) => void;
  onClose: () => void;
}

// Helper function to convert image URL to base64
const imageUrlToBase64 = async (url: string): Promise<string> => {
  // NOTE: This can be blocked by CORS policy if the image is not from the same origin
  // or doesn't have permissive CORS headers. Using a proxy might be necessary in a real-world scenario.
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ templateImageUrl, onImageGenerated, onClose }) => {
  const { t } = useLanguage();
  const [prompt, setPrompt] = useState<string>('A professional headshot, studio lighting, wearing a dark business suit, neutral background');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setError(null);
    setGeneratedImageUrl(null);

    try {
      const base64DataWithMime = await imageUrlToBase64(templateImageUrl);
      const [mimePart, base64Data] = base64DataWithMime.split(';base64,');
      const mimeType = mimePart.split(':')[1];
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              inlineData: { data: base64Data, mimeType },
            },
            { text: prompt },
          ],
        },
        config: {
          responseModalities: [Modality.IMAGE],
        },
      });
      
      const part = response.candidates?.[0]?.content?.parts?.[0];
      if (part && part.inlineData) {
        const newBase64 = part.inlineData.data;
        const newMimeType = part.inlineData.mimeType;
        setGeneratedImageUrl(`data:${newMimeType};base64,${newBase64}`);
      } else {
         throw new Error("No image data in response.");
      }

    } catch (err) {
      console.error('Image generation failed:', err);
      setError(t.imageGenerator.error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSetImage = () => {
    if (generatedImageUrl) {
      onImageGenerated(generatedImageUrl);
      onClose();
    }
  };

  return (
    <div className="mt-6 border-t border-slate-200 pt-6 w-full max-w-sm">
      <h4 className="text-lg font-semibold text-slate-800 mb-3">{t.imageGenerator.title}</h4>
      <div className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-slate-700">{t.imageGenerator.promptLabel}</label>
          <textarea
            id="prompt"
            rows={2}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={t.imageGenerator.promptPlaceholder}
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full transition duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed flex items-center"
          >
            {loading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : null}
            {loading ? t.imageGenerator.buttonLoading : t.imageGenerator.button}
          </button>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-800 font-medium py-2 px-4 rounded-full transition duration-300"
          >
            {t.imageGenerator.cancel}
          </button>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        {generatedImageUrl && (
          <div className="mt-4 p-4 border border-slate-200 rounded-lg bg-slate-50">
            <img src={generatedImageUrl} alt="Generated professional headshot" className="rounded-md shadow-md mb-4 w-full" />
            <button
              onClick={handleSetImage}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              {t.imageGenerator.setAsImage}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;