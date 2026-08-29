# GitHub Pages Testing Guide

## Overview
The AI Document Formatter is now deployed on GitHub Pages and ready for testing.

## Access the Tool
**URL**: https://fatiwahab.github.io/AI-Doc-Formatting/

The tool will load at:
- https://fatiwahab.github.io/AI-Doc-Formatting/ (main page - loads index.html)
- https://fatiwahab.github.io/AI-Doc-Formatting/document-formatter.html (direct link)

## Prerequisites for Testing

### Option 1: Claude API (Recommended)
1. Go to [Anthropic Console](https://console.anthropic.com)
2. Create an account or sign in
3. Create an API key in the settings
4. Copy the API key (starts with `sk-`)
5. Use it in the formatter's Claude section

### Option 2: Google Gemini (Free Tier - No API Key Needed)
1. Open the formatter at the GitHub Pages URL
2. Select "Gemini (Free)" option
3. No API key needed - the app uses Google's free tier key
4. Or optionally provide your own key from [ai.google.dev](https://ai.google.dev)

## Testing Workflow

### Step 1: Load the Tool
1. Navigate to https://fatiwahab.github.io/AI-Doc-Formatting/
2. You should see:
   - Title: "📄 Document Formatter"
   - Subtitle: "AI-powered formatting. Text never changes—only formatting applies."
   - Provider selection (Claude / Gemini)
   - Document input area
   - Preview & Export panel

### Step 2: Test UI Components
- [ ] Click between "Claude" and "Gemini" - API key section should switch
- [ ] Type text in the textarea
- [ ] Click the file upload button - file dialog should open
- [ ] Observe that buttons enable/disable appropriately

### Step 3: Test Document Input
Try each input method:

**Plain Text Input:**
```
# My Document

This is a test document with multiple paragraphs.

Here's another paragraph with some emphasis.
```

**DOCX Upload:**
1. Have a .docx file ready
2. Click "+ Upload DOCX File"
3. Select your DOCX file
4. Text should extract and appear in textarea

### Step 4: Test with Claude API
1. Paste your API key in the Claude section
2. Enter test text in textarea
3. Click "Format Document"
4. Wait for processing (typically 2-5 seconds)
5. Formatted HTML should appear in preview
6. Look for verification badge (green ✓ or red ✗)

### Step 5: Test with Gemini Free
1. Select "Gemini (Free)" radio button
2. Leave API key field empty
3. Enter test text
4. Click "Format Document"
5. Formatted HTML should appear
6. Check verification badge

### Step 6: Verify Text Integrity
- Original text: "Hello World"
- After formatting, text should still be: "Hello World"
- Badge should show: "✓ Text Integrity Verified"
- If text changed: "✗ Text was modified - Export blocked"

### Step 7: Test Export Formats

**HTML Export:**
1. Click "Export HTML" (should be enabled)
2. File `formatted-document.html` should download
3. Open in text editor to verify content
4. Open in browser to view rendered output

**DOCX Export:**
1. Click "Export DOCX"
2. File `formatted-document.docx` should download
3. Open in Microsoft Word or compatible software
4. Verify text and formatting

**PDF Export:**
1. Click "Export PDF"
2. File `formatted-document.pdf` should download
3. Open in PDF reader
4. Verify content is readable (not garbled)
5. Check that text is intact

## Sample Test Documents

### Test 1: Simple Text
```
Introduction to Cloud Computing

Cloud computing represents a paradigm shift in how organizations
manage their IT infrastructure. Rather than maintaining physical
servers and storage devices on-site, companies can leverage
cloud-based solutions to access computing resources over the internet.

Benefits include:
- Scalability
- Cost efficiency
- Reliability
- Accessibility
```

### Test 2: Markdown with Structure
```
# Annual Report 2026

## Executive Summary
Strong year with record growth

## Financial Highlights
- Revenue: $50M (up 40%)
- Profit: $12M (up 35%)
- Customer Growth: 150% YoY

## Future Outlook
Continuing expansion into new markets
```

### Test 3: Special Characters
```
Testing special characters: © ® ™ € £ ¥
Emojis: 🚀 ⭐ ✨ 🎯
Quote marks: "double" and 'single'
Math: 2 + 2 = 4, π ≈ 3.14159
```

## Expected Results

### Success Indicators
1. ✓ UI loads without errors
2. ✓ Both API providers work
3. ✓ Document inputs are accepted
4. ✓ Formatting completes within 10 seconds
5. ✓ Text verification badge appears
6. ✓ Original text is preserved exactly
7. ✓ All three export formats download
8. ✓ Exported files are valid and readable

### Test Results Template
```
Date Tested: [Date]
API Provider: [Claude / Gemini]
Input Document: [Text / DOCX / etc.]
Result: [Pass / Fail]
Notes: [Any observations]

Verification Badge: [✓ Pass / ✗ Fail]
Exports Working: 
  - HTML: [✓/✗]
  - DOCX: [✓/✗]  
  - PDF: [✓/✗]
Text Integrity: [✓ Preserved / ✗ Modified]
```

## Troubleshooting

### "API Error" Message
- Claude: Verify API key is valid and has credits
- Gemini: Check that key is entered correctly or use free tier

### Export Button Disabled
- Ensure text verification passed (green badge visible)
- Text in formatted output must match original exactly

### Files Download As Text
- Browser may not recognize file type
- Try right-clicking and "Save As" with correct extension

### PDF Text Is Garbled
- Known limitation of html2pdf with complex styling
- HTML export will be more reliable for formatting

## Browser Compatibility
Tested and working on:
- ✓ Chrome/Chromium (Latest)
- ✓ Safari (Latest)
- ✓ Firefox (Latest)
- ✓ Edge (Latest)

## Support
If you encounter issues:
1. Check browser console (F12 → Console tab)
2. Try a different browser
3. Report at: https://github.com/fatiwahab/AI-Doc-Formatting/issues

## Next Steps After Testing
- Document any bugs found
- Gather feedback on formatting quality
- Consider feature improvements
- Share with users and collect real-world feedback

---
**Last Updated**: August 29, 2026
**Status**: Ready for Testing
