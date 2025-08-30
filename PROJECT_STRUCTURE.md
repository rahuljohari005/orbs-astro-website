# 🏗️ ORBS ASTRO WEBSITE - PROJECT STRUCTURE

## 📁 **FOLDER ORGANIZATION - CLEAN & STRUCTURED**

### **🎯 ROOT DIRECTORY (`D:\website\`)**
```
orbs-astro-website/
├── 📁 app/                    # Next.js App Router
├── 📁 components/             # React Components (Organized by Type)
├── 📁 lib/                    # Core Libraries & Utilities
├── 📁 data/                   # Static Data Files
├── 📁 public/                 # Static Assets
├── 📁 styles/                 # Global Styles
└── 📄 Configuration Files
```

---

## 🧩 **COMPONENTS STRUCTURE (`components/`)**

### **📂 `components/sections/` - Main Website Sections**
```
sections/
├── 📄 About.tsx              # About Us Section
├── 📄 Services.tsx            # Services & Features
├── 📄 Testimonials.tsx        # Client Reviews
├── 📄 Contact.tsx             # Contact Form
├── 📄 HeroVideo.tsx           # Main Hero Section
├── 📄 AstrologySystems.tsx    # Astrology Systems
├── 📄 PlanetaryCarousel.tsx   # Planet Carousel
├── 📄 HousesGrid.tsx          # 12 Houses Grid
├── 📄 ChatbotAndConsultation.tsx # AI Chat + Consultation
└── 📄 StarfieldWrapper.tsx    # Background Wrapper
```

### **📂 `components/forms/` - Interactive Forms**
```
forms/
├── 📄 LagnaChartGenerator.tsx # Kundali Generation Form
├── 📄 AstroChatbot.tsx        # AI Chat Interface
├── 📄 ConsultationSection.tsx # Consultation Booking
└── 📄 BookingForm.tsx         # Appointment Booking
```

### **📂 `components/layout/` - Layout Components**
```
layout/
├── 📄 Navigation.tsx          # Main Navigation Bar
├── 📄 Footer.tsx              # Website Footer
├── 📄 CosmicIntro.tsx         # Intro Animation
└── 📄 StarfieldWrapper.tsx    # Background Effects
```

### **📂 `components/ui/` - Reusable UI Elements**
```
ui/
├── 📄 HouseModal.tsx          # House Detail Modal
├── 📄 LagnaCalculatorModal.tsx # Calculator Modal
├── 📄 InfinityLogo.tsx        # Logo Component
└── 📄 InteractiveExplainers.tsx # Interactive Elements
```

---

## 📚 **LIBRARIES STRUCTURE (`lib/`)**

### **📂 `lib/` - Core Libraries**
```
lib/
├── 📄 astrologyEngine.ts      # Astrology Calculations
├── 📂 utils/                  # Utility Functions
├── 📂 constants/              # Constants & Config
└── 📂 types/                  # TypeScript Types
```

### **📂 `lib/utils/` - Utility Functions**
```
utils/
├── 📄 dateUtils.ts            # Date Manipulation
├── 📄 calculationUtils.ts     # Math & Calculations
└── 📄 validationUtils.ts      # Form Validation
```

### **📂 `lib/constants/` - Constants**
```
constants/
├── 📄 astrologyConstants.ts   # Astrology Rules
├── 📄 uiConstants.ts          # UI Configuration
└── 📄 apiConstants.ts         # API Endpoints
```

### **📂 `lib/types/` - TypeScript Types**
```
types/
├── 📄 astrologyTypes.ts       # Astrology Interfaces
├── 📄 componentTypes.ts       # Component Props
└── 📄 apiTypes.ts             # API Interfaces
```

---

## 🌐 **APP STRUCTURE (`app/`)**

### **📂 `app/` - Next.js App Router**
```
app/
├── 📄 layout.tsx              # Root Layout
├── 📄 page.tsx                # Homepage
├── 📄 globals.css             # Global Styles
├── 📂 api/                    # API Routes
├── 📂 houses/                 # House Pages
├── 📂 zodiac/                 # Zodiac Pages
└── 📂 fonts/                  # Custom Fonts
```

### **📂 `app/api/` - API Endpoints**
```
api/
├── 📄 chatbot/                # AI Chatbot API
├── 📄 contact/                # Contact Form API
└── 📄 booking/                # Booking API
```

---

## 📊 **DATA STRUCTURE (`data/`)**

### **📂 `data/` - Static Data**
```
data/
├── 📄 housesData.ts           # 12 Houses Information
├── 📄 zodiacData.ts           # Zodiac Signs Data
└── 📄 testimonialsData.ts     # Client Testimonials
```

---

## 🎨 **STYLES STRUCTURE**

### **📂 `styles/` - Styling**
```
styles/
├── 📄 globals.css             # Global CSS
├── 📄 components.css          # Component Styles
└── 📄 animations.css          # Animation Classes
```

---

## 🔧 **DEVELOPMENT WORKFLOW**

### **📝 Adding New Components:**
1. **Section Component** → `components/sections/`
2. **Form Component** → `components/forms/`
3. **Layout Component** → `components/layout/`
4. **UI Component** → `components/ui/`

### **📝 Adding New Features:**
1. **Business Logic** → `lib/` folder
2. **Types** → `lib/types/`
3. **Constants** → `lib/constants/`
4. **Utilities** → `lib/utils/`

### **📝 Adding New Pages:**
1. **Route** → `app/` folder
2. **API** → `app/api/` folder
3. **Data** → `data/` folder

---

## 🎯 **KEY FEATURES LOCATION**

### **🔮 Astrology Features:**
- **Kundali Generator** → `components/forms/LagnaChartGenerator.tsx`
- **AI Chatbot** → `components/forms/AstroChatbot.tsx`
- **Astrology Engine** → `lib/astrologyEngine.ts`

### **🌐 Website Sections:**
- **Hero** → `components/sections/HeroVideo.tsx`
- **About** → `components/sections/About.tsx`
- **Services** → `components/sections/Services.tsx`
- **Contact** → `components/sections/Contact.tsx`

### **🎨 UI Components:**
- **Navigation** → `components/layout/Navigation.tsx`
- **Footer** → `components/layout/Footer.tsx`
- **Modals** → `components/ui/`

---

## 🚀 **BENEFITS OF THIS STRUCTURE**

### **✅ For Developers:**
- **Easy to find** components by type
- **Clear separation** of concerns
- **Scalable** for future features
- **Maintainable** codebase

### **✅ For New Team Members:**
- **Understand structure** quickly
- **Know where to add** new features
- **Follow consistent** patterns
- **Reduce confusion**

### **✅ For Future Changes:**
- **Add new sections** easily
- **Modify forms** without affecting layout
- **Update UI** components independently
- **Scale functionality** systematically

---

## 📋 **QUICK REFERENCE**

### **🔍 Finding Components:**
- **Main Sections** → `components/sections/`
- **Forms & Inputs** → `components/forms/`
- **Navigation & Layout** → `components/layout/`
- **Reusable UI** → `components/ui/`

### **🔍 Finding Logic:**
- **Astrology Calculations** → `lib/astrologyEngine.ts`
- **Utility Functions** → `lib/utils/`
- **Constants** → `lib/constants/`
- **Type Definitions** → `lib/types/`

### **🔍 Finding Data:**
- **Static Content** → `data/` folder
- **API Routes** → `app/api/` folder
- **Page Routes** → `app/` folder

---

**🎯 This structure makes the project clean, organized, and easy to understand for anyone!**
