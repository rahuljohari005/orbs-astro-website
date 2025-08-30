# Fondamento Font Setup

## Required File

You need to add the **Fondamento.woff2** font file to this directory.

### How to Get Fondamento Font:

1. **Download from Google Fonts:**
   - Go to: https://fonts.google.com/specimen/Fondamento
   - Click "Download family"
   - Extract the downloaded ZIP file
   - Convert the TTF to WOFF2 (use online converter or font tools)

2. **Alternative - Use Font Squirrel:**
   - Go to: https://www.fontsquirrel.com/tools/webfont-generator
   - Upload the Fondamento TTF file
   - Generate WOFF2 format
   - Download and place here

3. **File Location:**
   ```
   app/fonts/Fondamento.woff2
   ```

### Current Integration:
- ✅ Layout.tsx prepared with localFont import (commented out)
- ✅ CSS variable `--font-fondamento` with fallback added  
- ✅ Applied to h1, h2, h3, blockquote elements
- ⏳ **Missing: Fondamento.woff2 file**

### To Enable After Adding Font File:

1. **Add the font file:** `app/fonts/Fondamento.woff2`

2. **Uncomment the font import in `app/layout.tsx`:**
   ```tsx
   const fondamento = localFont({
     src: "./fonts/Fondamento.woff2",
     variable: "--font-fondamento",
   });
   ```

3. **Add the font variable to className:**
   ```tsx
   <html lang="en" className={`${inter.variable} ${playfair.variable} ${fondamento.variable}`}>
   ```

**Current Status:** Using Playfair Display as fallback font for headings/quotes until Fondamento is added.