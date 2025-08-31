# Orbs Astro Project Runbook

## 🚀 Quick Start

### First Run Setup
1. **Copy environment file:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Edit .env.local** with your actual values:
   ```
   AI_BASE_URL=http://localhost:4000
   AI_SERVICE_KEY=your-actual-service-key
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

3. **Run the one-command runner:**
   ```bash
   npm run dev:all
   ```

4. **Enter your backend directory path** when prompted (e.g., `D:\ai chatbot`)

### What Success Looks Like
```
🎉 All Tests Passed!
✅ Local integration OK

📱 Both services are running:
   Backend: http://localhost:4000
   Website: http://localhost:3000

🔒 Keep this terminal open to maintain both services
```

## 🔧 Troubleshooting

### 401 Unauthorized
- Ensure `.env.local` and backend `.env` have the same `AI_SERVICE_KEY`
- Check that backend is running on port 4000

### No Session Cookie
- In development, cookies should have `secure: false`
- Check browser dev tools → Application → Cookies

### CORS Errors
- Always use proxy routes (`/api/proxy/*`) instead of calling backend directly
- Backend must allow origin `http://localhost:3000`

### Port Conflicts
- Backend uses port 4000
- Website uses port 3000 (or next available)
- Check `netstat -an | findstr :4000` and `netstat -an | findstr :3000`

## 🚀 Deployment

### Enable Auto-Deploy
1. **Website:** Add Vercel secrets in GitHub Actions
2. **Backend:** Connect repo directly to Render/Railway or add deploy hook

### Manual Deploy
- **Website:** `npm run build && npm run start`
- **Backend:** Deploy from your backend repo

## 📋 One-Command Runner

The `npm run dev:all` command:
1. **Starts your AI backend** from the configured directory
2. **Starts the website** on the next available port
3. **Runs integration tests** to verify both services work together
4. **Keeps both running** for development

### Configuration
- **Backend Directory:** Stored in `.dev.local.ps1` (auto-created on first run)
- **Ports:** Backend 4000, Website 3000 (or next available)
- **Environment:** Reads from `.env.local` and PowerShell variables

### Testing
The runner automatically tests:
- **Kundali Proxy:** POST to `/api/proxy/kundali`
- **Chat Proxy:** POST to `/api/proxy/chat`
- **Service Health:** Both services respond correctly
