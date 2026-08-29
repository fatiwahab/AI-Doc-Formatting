// Serverless function to handle Claude API calls securely
// API key is stored in environment variable, never exposed to browser

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

    // Get API key from environment variable (set in Vercel dashboard)
    const apiKey = process.env.CLAUDE_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Call Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 4000,
        messages: [{
          role: 'user',
          content: `You are a document formatting expert. Your task is to format the following document to make it more presentable and professional.

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
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Claude API error:', error);
      return res.status(response.status).json({ 
        error: error.error?.message || 'Claude API error' 
      });
    }

    const data = await response.json();
    const formattedHtml = data.content[0].text;

    // Return only the formatted HTML, not the API key or any sensitive info
    return res.status(200).json({ html: formattedHtml });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
