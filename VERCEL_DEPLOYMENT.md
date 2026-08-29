# Vercel Deployment Guide

## Overview
This guide walks you through deploying the AI Document Formatter to Vercel with secure serverless functions for API handling.

## Why Vercel?
✓ **Secure**: API keys stored server-side, never exposed to browser  
✓ **Free Tier**: Includes unlimited serverless function invocations  
✓ **Easy**: One-click deployment from GitHub  
✓ **Fast**: Global CDN for optimal performance  
✓ **Scalable**: Automatically handles traffic spikes  

## Prerequisites
- GitHub account (you already have it ✓)
- Vercel account (free) - sign up at https://vercel.com

## Step 1: Create Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account
5. Confirm your email

## Step 2: Connect GitHub Repository to Vercel

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Search for "AI-Doc-Formatting" repository
4. Click "Import"
5. Vercel will detect it's a Node.js project - this is correct!

## Step 3: Configure Environment Variables

**This is critical** - your API keys need to be stored here!

In the Vercel import page, before clicking "Deploy", add environment variables:

### For Claude API:
1. Add variable: `CLAUDE_API_KEY`
2. Value: Your Claude API key (starts with `sk-`)
3. [Get API key from https://console.anthropic.com]

### For Gemini API (Optional):
1. Add variable: `GEMINI_API_KEY`
2. Value: Your Gemini API key (from https://ai.google.dev)
3. Leave empty to use free tier

**Important**: These are marked as "Development" and "Preview" - they're encrypted and secure.

## Step 4: Deploy

1. Click "Deploy"
2. Wait 1-2 minutes for deployment to complete
3. You'll see a success message with your live URL

**Your app is now live at**: `https://ai-doc-formatting.vercel.app`

## Step 5: Verify Everything Works

1. Open your Vercel URL in a browser
2. Try formatting with Claude:
   - Paste test text
   - Click "Format Document"
   - Should see formatted preview + green verification badge
3. Try formatting with Gemini:
   - Select Gemini provider
   - Paste test text
   - Click "Format Document"
   - Should work immediately (free tier)
4. Test exports:
   - Click "Export HTML"
   - Click "Export DOCX"
   - Click "Export PDF"
   - All should download successfully

## Step 6: Update GitHub Pages (Optional)

Your main deployment is now on Vercel, but GitHub Pages still exists.

**Choose one:**

**Option A: Use Vercel as primary** (Recommended)
- Share this URL: `https://ai-doc-formatting.vercel.app`
- GitHub Pages can remain as backup

**Option B: Keep GitHub Pages**
- Copy Vercel's index.html to GitHub and redeploy
- Push code changes to GitHub, Vercel auto-deploys

## How It Works (Architecture)

```
User's Browser (https://ai-doc-formatting.vercel.app)
    ↓
    Sends: "format this text"
    ↓
Vercel Serverless Function (/api/format-claude or /api/format-gemini)
    ↓
    Has API keys in environment variables
    ↓
Claude/Gemini API
    ↓
    Returns formatted HTML
    ↓
Vercel Function (sends only HTML back)
    ↓
User's Browser (receives formatted HTML, NO API KEYS)
```

## Security Benefits

✅ **API keys never leave Vercel servers**  
✅ **Browser never sees sensitive credentials**  
✅ **Encrypted at rest and in transit**  
✅ **CORS no longer an issue**  
✅ **Rate limiting handled server-side**  

## Troubleshooting

### "API Error" in Vercel deployment
1. Check that environment variables are set correctly
2. Go to Vercel dashboard → Settings → Environment Variables
3. Verify `CLAUDE_API_KEY` is correct
4. Verify Claude key has credits at console.anthropic.com

### Serverless functions not working
1. Check Vercel logs: Dashboard → Deployments → (latest) → Logs
2. Verify `vercel.json` is in repo root
3. Verify `api/` folder has the `.js` files
4. Try redeploying: Dashboard → (project) → Redeploy

### Deployment fails
1. Make sure all files were pushed to GitHub
2. Check for syntax errors in JavaScript files
3. Try deleting the Vercel project and reimporting

## Updating Your Code

### To update the formatter:
1. Make changes locally
2. Commit and push to GitHub
3. Vercel automatically redeploys (takes 1-2 minutes)
4. Your changes go live!

### To update API keys:
1. Go to Vercel dashboard
2. Project settings → Environment Variables
3. Update the key value
4. Click "Save"
5. Go back to Deployments and redeploy

## Monitoring

Vercel dashboard shows:
- **Deployments**: History of all deployments
- **Analytics**: Usage metrics and performance
- **Logs**: Any errors from serverless functions
- **Usage**: Invocation count (free tier has generous limits)

## Cost

**Free Tier Includes**:
- Unlimited deployments
- Unlimited serverless function invocations
- 100GB bandwidth per month
- Custom domain support
- SSL/TLS certificates

**You probably won't need paid plan** unless you get millions of users!

## Custom Domain (Optional)

1. Go to Vercel project settings
2. Click "Domains"
3. Add your domain (e.g., formatter.yourdomain.com)
4. Follow DNS setup instructions
5. Your app is now at your custom URL

## Performance Tips

Your Vercel deployment will be **fast**:
- Edge network: ~50ms response time
- Serverless functions: Cold start ~500ms
- Subsequent requests: <100ms
- Automatic caching and optimization

## Support

- Vercel docs: https://vercel.com/docs
- Vercel support: https://vercel.com/support
- GitHub Issues: Report bugs on your repo

## Summary

You now have:
✅ Secure serverless API handling
✅ Zero CORS errors
✅ Protected API credentials
✅ Global CDN deployment
✅ Automatic updates from GitHub
✅ Professional production setup

**Your users are protected** - their sensitive documents never expose API keys, and the AI provider keys are kept secure server-side.

---
**Last Updated**: August 29, 2026  
**Status**: Ready for Production
