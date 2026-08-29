# AI Document Formatter - Testing Plan

## Overview
This document outlines the comprehensive testing plan for the AI Document Formatter tool.

## Test Environment
- **Type**: Client-side web application
- **Deployment**: GitHub Pages
- **APIs**: Claude API (3.5-Sonnet), Google Gemini API (free tier)

## Test Categories

### 1. UI/UX Testing
- [ ] Provider selection toggle (Claude/Gemini) works
- [ ] API key input fields show/hide correctly based on provider
- [ ] Textarea accepts text input
- [ ] File upload button opens file dialog
- [ ] Format button is enabled when text is present
- [ ] Status messages display correctly (success, error, warning, info)
- [ ] Export buttons are disabled until text verification passes
- [ ] Verification badge displays correctly

### 2. Document Input Testing
- [ ] Plain text input works
- [ ] Markdown formatted text is handled
- [ ] DOCX file upload extracts text correctly
- [ ] Large documents are handled gracefully
- [ ] Special characters are preserved

### 3. API Integration Testing

#### Claude API
- [ ] API key validation works
- [ ] Successful formatting request returns HTML
- [ ] API error messages are displayed to user
- [ ] Timeout handling works
- [ ] Rate limiting is handled

#### Gemini API
- [ ] Free tier works without API key
- [ ] Custom API key works when provided
- [ ] API error messages are displayed to user
- [ ] Fallback to free tier works

### 4. Text Integrity Verification
- [ ] Original text and formatted text are compared correctly
- [ ] Whitespace normalization works (multiple spaces → single space)
- [ ] Text match shows "✓ Text Integrity Verified" badge
- [ ] Text mismatch shows "✗ Text was modified - Export blocked" badge
- [ ] Export buttons are disabled when text modified
- [ ] 100% character match required (no partial matches)

### 5. Export Functionality

#### HTML Export
- [ ] Exports valid HTML document
- [ ] File downloads with correct name (formatted-document.html)
- [ ] Formatting is preserved in exported HTML
- [ ] Inline styles are included

#### DOCX Export  
- [ ] Exports valid DOCX file
- [ ] File downloads with correct name (formatted-document.docx)
- [ ] Text content is preserved
- [ ] Paragraph structure is maintained
- [ ] File opens in Microsoft Word/compatible software

#### PDF Export
- [ ] Exports valid PDF file
- [ ] File downloads with correct name (formatted-document.pdf)
- [ ] Text is readable (not garbled)
- [ ] Formatting is reasonably preserved
- [ ] Multi-page handling works

### 6. Safety & Security Testing
- [ ] Text content is NEVER modified by AI
- [ ] Verification blocks exports if text changed
- [ ] API keys are not logged or exposed
- [ ] No data is sent to unauthorized endpoints
- [ ] CORS issues are handled

### 7. Browser Compatibility
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iPhone Safari, Chrome Mobile)

### 8. Performance Testing
- [ ] Large documents (>10KB) format without freezing UI
- [ ] API responses timeout gracefully after 30 seconds
- [ ] Memory usage is reasonable
- [ ] No memory leaks from repeated formatting

### 9. Edge Cases
- [ ] Empty document input
- [ ] Single character input
- [ ] Very long document (>100KB)
- [ ] Special characters (emoji, unicode)
- [ ] HTML-like text that could be confused with actual HTML
- [ ] Document with only whitespace

## Test Execution Steps

### Manual Testing Checklist
1. Open the formatter in a web browser
2. Test with Claude API (requires valid API key from console.anthropic.com)
3. Test with Gemini free tier (no API key needed)
4. Upload a sample DOCX file
5. Paste sample markdown text
6. Click Format and verify output
7. Check text verification badge
8. Export to each format (HTML, DOCX, PDF)
9. Open exported files to verify content
10. Check that text content is identical in all formats

### Sample Test Document
```
# Project Status Report

## Overview
Q3 2026 results show strong growth in API adoption with 150% increase in active users.

### Key Metrics
- API Calls: 500M (up from 200M)
- New Customers: 250
- Revenue: $2.5M (target: $2.0M)

## Next Steps
1. Scale infrastructure
2. Launch premium tier
3. Expand documentation
```

## Known Limitations
- File size: Limited by browser memory (typically <50MB)
- Export size: PDF generation may not handle very large documents well
- Formatting: Complex layouts may not translate perfectly to PDF

## Success Criteria
- All tests pass
- Text integrity verification works 100% of the time
- All export formats produce valid files
- No data is modified during formatting
- User experience is smooth and responsive

## Bug Tracking
Report any issues at: https://github.com/fatiwahab/AI-Doc-Formatting/issues

