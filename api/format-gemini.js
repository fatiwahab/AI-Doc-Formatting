// Serverless function to handle Gemini API calls securely
// Uses free tier key if no API key provided, or custom key from environment

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { text } = req.body;

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Text input required' });
    }

    // Use environment variable key if available, otherwise use free tier key
    const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyDyWU2xKv5DHNa8rA0OhHl1Y7vI67x4tSI';

    // Call Gemini API
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a document formatting expert. Your task is to format the following document to make it more presentable and professional.

CRITICAL RULES:
- DO NOT change, edit, or modify any text
- DO NOT add or remove any words
- DO NOT correct grammar or spelling
- Preserve every single character exactly as is
- Only apply formatting: colors, typography, layout, spacing, highlighting, styling

Format this document as HTML with:
- Professional typography and spacing
- Semantic HTML structure (headers, paragraphs, etc.)
- Readable color scheme and hierarchy
- Highlight important terms where appropriate
- Use CSS for styling (inline or <style> tag)
- Make it visually appealing and easy to read

Document to format:
${text}

Return ONLY the HTML (no explanations, no backticks, just valid HTML).`
          }]
        }]
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Gemini API error:', error);
      return res.status(response.status).json({ 
        error: error.error?.message || 'Gemini API error' 
      });
    }

    const data = await response.json();
    const formattedHtml = data.candidates[0].content.parts[0].text;

    // Return only the formatted HTML, not the API key or any sensitive info
    return res.status(200).json({ html: formattedHtml });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
