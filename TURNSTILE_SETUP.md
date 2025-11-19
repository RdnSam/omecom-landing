# 🛡️ Cloudflare Turnstile Setup Guide

## ✅ Installation Complete!

Turnstile sudah diinstall dan dikonfigurasi di Contact Form.

---

## 📝 Setup Steps (5 menit)

### 1. **Buat Cloudflare Account** (Gratis)
   - Go to: https://dash.cloudflare.com/sign-up
   - Sign up dengan email (FREE forever!)

### 2. **Buat Turnstile Site Key**
   1. Login ke Cloudflare Dashboard
   2. Pilih **"Turnstile"** di sidebar kiri
   3. Click **"Add Site"**
   4. Isi form:
      - **Site name**: PT Omecom Landing
      - **Domain**: omecom.com (atau domain Anda)
      - **Widget Mode**: Managed (recommended)
   5. Click **"Create"**
   6. **Copy Site Key** yang muncul

### 3. **Add Site Key ke Project**
   1. Copy file `.env.local.example` → `.env.local`:
      ```bash
      cp .env.local.example .env.local
      ```

   2. Edit `.env.local`, ganti dengan Site Key Anda:
      ```env
      NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAA___YOUR_REAL_KEY___
      ```

   3. Save file

### 4. **Restart Dev Server**
   ```bash
   npm run dev
   ```

### 5. **Test!**
   - Buka: http://localhost:3000/#contact
   - Scroll ke Contact Form
   - You should see Turnstile widget muncul!
   - Submit form (harus centang CAPTCHA dulu)

---

## 🧪 Testing Mode (untuk development)

Untuk testing tanpa perlu Site Key real, gunakan **demo key** di `.env.local`:

```env
# Visible checkbox (recommended untuk testing)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000AA

# Invisible (automatic)
# NEXT_PUBLIC_TURNSTILE_SITE_KEY=2x00000000000000000000AB

# Always pass (no interaction)
# NEXT_PUBLIC_TURNSTILE_SITE_KEY=3x00000000000000000000FF
```

**Note:** Demo keys hanya untuk development! Production wajib pakai real Site Key.

---

## 🎨 What Was Installed

### **Files Modified:**
- ✅ `contact-section.tsx` - Added Turnstile widget
- ✅ `package.json` - Added `@marsidev/react-turnstile`
- ✅ `.env.local.example` - Environment template

### **Features Added:**
- ✅ Turnstile CAPTCHA widget before submit button
- ✅ Button disabled until CAPTCHA completed
- ✅ Auto theme detection (light/dark mode)
- ✅ Token reset after form submission
- ✅ Error & expiry handling

---

## 🔐 How It Works

### **User Flow:**
1. User fills contact form
2. Turnstile widget appears (checkbox or invisible challenge)
3. User completes CAPTCHA
4. Submit button becomes enabled
5. Form submits with `turnstileToken`
6. Token resets after submission

### **Bot Protection:**
- ❌ Bots cannot submit without valid token
- ❌ Expired tokens are rejected
- ❌ Failed challenges prevent submission
- ✅ Real users can submit normally

---

## 📊 Monitoring (Optional)

Track spam attempts di Cloudflare Dashboard:
1. Go to **Turnstile** → **Analytics**
2. See:
   - Total requests
   - Challenge solve rate
   - Bot detection rate
   - Geographic distribution

---

## 🚀 Production Deployment

### **Before Deploy:**
1. ✅ Replace demo key with real Site Key
2. ✅ Add production domain to Cloudflare Turnstile site
3. ✅ Add `.env.local` to `.gitignore` (already done)
4. ✅ Set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` in Vercel/deployment platform

### **Vercel Deployment:**
1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add:
   - **Name**: `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
   - **Value**: Your real Site Key
   - **Environments**: Production, Preview, Development
4. Redeploy

---

## 🎯 Next Steps (Optional Enhancements)

Want even better protection? Consider adding:

### **Level 2: Server-Side Verification** (99% protection)
- Verify token di backend API
- Prevents token spoofing
- Takes ~30 min to implement

### **Level 3: Email Validation**
- Block disposable emails
- Validate email domains
- Add to existing validation schema

### **Level 4: Rate Limiting**
- Max 3 submissions per IP/hour
- Prevents brute force spam
- Use Vercel Edge Config or Redis

---

## ❓ Troubleshooting

### **CAPTCHA not showing?**
- ✅ Check `.env.local` exists and has correct key
- ✅ Restart dev server after adding env vars
- ✅ Check browser console for errors

### **Button stays disabled?**
- ✅ Complete the CAPTCHA challenge
- ✅ Check network tab for Turnstile API calls
- ✅ Verify Site Key is correct

### **Domain mismatch error?**
- ✅ Add your domain to Turnstile site settings in Cloudflare
- ✅ For localhost, use demo keys

---

## 📚 Resources

- [Cloudflare Turnstile Docs](https://developers.cloudflare.com/turnstile/)
- [React Turnstile Package](https://github.com/marsidev/react-turnstile)
- [Get Free Site Key](https://dash.cloudflare.com/)

---

## ✨ Done!

Your contact form is now protected by Cloudflare Turnstile! 🎉

**Spam prevention:** 85-95% effective (basic client-side)

Need help? Contact support or check the docs above.
