# Vercel Deployment Checklist

## Pre-Deployment Checklist
- [ ] Claude API key ready (from console.anthropic.com)
- [ ] GitHub account ready
- [ ] Have this checklist open

## Step 1: Create Vercel Account

**Action**: Go to https://vercel.com/signup

- [ ] Click "Continue with GitHub"
- [ ] Authorize Vercel to access GitHub
- [ ] Confirm email
- [ ] You're logged in!

## Step 2: Import Your Repository

**Action**: Go to https://vercel.com/dashboard

- [ ] Click "Add New..." (top right)
- [ ] Click "Project"
- [ ] Search for "AI-Doc-Formatting"
- [ ] Click on your repository
- [ ] Click "Import"

**Expected**: You should see "Configure Project" page

## Step 3: Add Environment Variables (CRITICAL!)

**On the "Configure Project" page:**

### Add Claude API Key:
1. [ ] Click "Environment Variables" section
2. [ ] In the first field, type: `CLAUDE_API_KEY`
3. [ ] In the second field, paste your Claude API key (starts with `sk-`)
4. [ ] Click "Add" button

**Result**: You should see `CLAUDE_API_KEY` listed with a masked value

### Add Gemini API Key (Optional):
1. [ ] Click "Add Another" (or create new variable)
2. [ ] In the first field, type: `GEMINI_API_KEY`
3. [ ] In the second field, paste your Gemini key (leave empty for free tier)
4. [ ] Click "Add" button

**Important**: Make sure both environment variables are visible before deploying

## Step 4: Deploy

**On the "Configure Project" page:**

- [ ] Review settings look correct
- [ ] Click "Deploy" button (large blue button at bottom right)
- [ ] Wait 1-2 minutes for deployment to complete

**Progress indicators:**
- Building... (30 seconds)
- Deploying... (30 seconds)
- Success! ✓ (you see deployment URL)

## Step 5: Get Your Live URL

**After successful deployment:**

- [ ] You see "Congratulations! Your project has been successfully deployed"
- [ ] Copy the URL shown (looks like: https://ai-doc-formatting-xxxxx.vercel.app)
- [ ] Save this URL - this is your live app!

## Step 6: Test Your Deployment

**Open your Vercel URL in a browser:**

### Test Claude API:
1. [ ] Paste test text: "# Hello World\n\nThis is a test."
2. [ ] Make sure "Claude" is selected
3. [ ] Click "Format Document"
4. [ ] Wait for formatting (5-10 seconds)
5. [ ] See formatted preview
6. [ ] See green badge: "✓ Text Integrity Verified"

### Test Gemini API:
1. [ ] Select "Gemini (Free)"
2. [ ] Paste same test text
3. [ ] Click "Format Document"
4. [ ] Should work immediately (free tier)
5. [ ] See green badge

### Test Exports:
1. [ ] Click "Export HTML" - should download file
2. [ ] Click "Export DOCX" - should download file
3. [ ] Click "Export PDF" - should download file
4. [ ] Open downloaded files to verify content matches original text

## Step 7: Verify Text Preservation

**Critical safety check:**

- [ ] Original text: "# Hello World\n\nThis is a test."
- [ ] Formatted HTML: Should contain exact same text
- [ ] Green badge: "✓ Text Integrity Verified" (indicates text preserved)
- [ ] Export files: Text should match exactly

**If red badge appears** ("✗ Text was modified"):
- Something is wrong with API formatting
- Check Vercel logs: Dashboard → (your project) → Deployments → Logs
- Report issue at GitHub

## Step 8: Share Your URL

**Your live app is ready!**

- [ ] Share this URL: `https://your-vercel-url.vercel.app`
- [ ] Users can format documents immediately
- [ ] Their API keys are safe (stored server-side)
- [ ] All features working

## Troubleshooting During Deployment

### "Build failed" error:
- [ ] Go back to project settings
- [ ] Delete and reimport repository
- [ ] Try deploying again

### "Environment variable not found" error:
- [ ] Check you added `CLAUDE_API_KEY` (exact name, no spaces)
- [ ] Verify API key value is correct
- [ ] Check vercel.json exists in repository
- [ ] Try redeploying from Vercel dashboard

### "API Error" during formatting:
- [ ] Check Claude API key has credits (console.anthropic.com)
- [ ] Verify environment variable in Vercel dashboard
- [ ] Check Vercel logs for detailed error message
- [ ] Try regenerating Claude API key

### "Export buttons disabled" after formatting:
- [ ] This means text verification failed
- [ ] Check red badge message
- [ ] Try different text input
- [ ] Check browser console (F12) for errors

## After Successful Deployment

- [ ] Bookmark your Vercel URL
- [ ] Test with different document types
- [ ] Share with others
- [ ] Monitor Vercel dashboard for issues
- [ ] Updates deploy automatically when you push to GitHub

## Important Security Notes

✅ **Never share**: Your Claude API key  
✅ **Never commit**: API keys to GitHub (they're in Vercel env vars)  
✅ **Safe to share**: Your Vercel URL with users  
✅ **Safe practice**: Regenerate API key if accidentally exposed  

## Success Criteria

You're done when:
- [ ] Vercel shows "Deployment Successful"
- [ ] Your URL is live and accessible
- [ ] Claude formatting works with green badge
- [ ] Gemini formatting works with green badge
- [ ] All three exports download successfully
- [ ] Text integrity verified for all tests
- [ ] No API errors

---

**Status**: Ready to Deploy  
**Time Estimate**: 5-10 minutes  
**Questions?**: Check VERCEL_DEPLOYMENT.md for details
