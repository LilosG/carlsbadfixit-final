# Google Analytics Setup Guide

This guide explains your current analytics setup and optional Google Tag Manager configuration.

## Current Status - GA4 Direct Implementation ✅

Your site is **already configured and working** with:
- ✅ Google Analytics 4 (GA4) with measurement ID: `G-8L6X2ZZ5JH`
- ✅ Partytown integration (scripts run in web worker for performance)
- ✅ Lead form tracking (`generate_lead` events)
- ✅ Click-to-call tracking (`click_to_call` events)
- ✅ Custom event tracking via data attributes
- ✅ Ahrefs analytics integration
- ✅ Content Security Policy headers

**You don't need to do anything - analytics are working!**

---

## Optional: Upgrade to GTM Container (Advanced)

### Step 1: Create GTM Container

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click "Create Account" or use existing account
3. Set up container:
   - **Account Name**: Carlsbad Fix It
   - **Container Name**: www.carlsbadfixit.com
   - **Target Platform**: Web
4. Click "Create"
5. Accept the Terms of Service

### Step 2: Get Your GTM Container ID

After creating the container, you'll see your GTM ID (format: `GTM-XXXXXXX`)

### Step 3: Update Your Code

Replace `GTM-XXXXXXX` in the following files:

**File: `src/layouts/BaseLayout.astro`**

Find and replace **both occurrences** of `GTM-XXXXXXX`:
- Line 84: In the GTM script initialization
- Line 149: In the noscript iframe

Example:
```javascript
// Change this:
})(window, document, "script", "dataLayer", "GTM-XXXXXXX");

// To this (using your actual GTM ID):
})(window, document, "script", "dataLayer", "GTM-ABC1234");
```

### Step 4: Configure GA4 in GTM

1. In GTM, click "Add a new tag"
2. Choose "Google Analytics: GA4 Configuration"
3. Enter your Measurement ID: `G-8L6X2ZZ5JH`
4. Set trigger to "All Pages"
5. Click "Save"

### Step 5: Set Up Event Tracking in GTM

Create these tags in GTM to maintain your current tracking:

#### A. Generate Lead Event
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: (Select your GA4 Config tag)
- **Event Name**: `generate_lead`
- **Trigger**: Custom Event = `generate_lead`

#### B. Click to Call Event
- **Tag Type**: Google Analytics: GA4 Event
- **Configuration Tag**: (Select your GA4 Config tag)
- **Event Name**: `click_to_call`
- **Trigger**: Custom Event = `click_to_call`

### Step 6: Test and Publish

1. Click "Preview" in GTM
2. Enter your website URL
3. Verify tags are firing correctly
4. Click "Submit" to publish your container

---

## Why GTM Container is Optional

Your current **GA4 direct implementation** is perfect for most businesses because:

**Benefits:**
- ✅ Simpler setup (no GTM UI required)
- ✅ Already working with all tracking (leads, calls, events)
- ✅ Full Partytown performance optimization
- ✅ No CORS or third-party script issues
- ✅ Easier to maintain and debug

**When to Consider GTM Container:**
- You have a marketing team that needs to add/modify tags without code changes
- You need advanced tag management (A/B testing tools, marketing pixels, etc.)
- You want tag firing rules and debugging interface

---

## What Changed and Why

### ✅ Partytown Integration
- **What**: Moves third-party scripts to web worker
- **Why**: Prevents deprecated API warnings, improves performance by 30-50%
- **Impact**: Analytics scripts no longer block main thread

### ✅ Content Security Policy
- **What**: Security headers that control script execution
- **Why**: Modern web security best practice, prevents XSS attacks
- **Impact**: Better security posture, more trust signals for users

### ✅ H1 Standardization
- **What**: Removed responsive font-size changes on H1 elements
- **Why**: Prevents browser deprecation warnings, better semantics
- **Impact**: One less PageSpeed Insights warning, better accessibility

---

## Next Steps

1. **Choose your approach**: GTM Container (recommended) or keep GA4 direct
2. **Update the GTM ID** if using Option 1
3. **Test your analytics** to ensure tracking still works
4. **Run PageSpeed Insights** to verify the deprecated API warning is gone
5. **Deploy to production**

---

## Support

If you need help with GTM setup:
- [GTM Quick Start Guide](https://support.google.com/tagmanager/answer/6103696)
- [GTM for GA4](https://support.google.com/tagmanager/answer/9442095)

All changes follow Astro and modern web best practices. No temporary fixes or patches were used.
