# Claire's Birthday Website 🎂💖

A beautiful romantic birthday website for Claire, featuring interactive animations, photo galleries, and heartfelt messages from Egypt to the Philippines.

## 🌟 Features

### 🎭 Lock Screen
- Live countdown timer in Philippines timezone (Asia/Manila)
- Automatic unlock on Claire's birthday
- Beautiful romantic message

### 🌸 Hero Section
- Floating hearts animation
- Glowing birthday message
- "From Egypt to the Philippines" subtitle
- Smooth scroll indicators

### 💌 Love Letter
- Typewriter animation effect
- Heartfelt romantic message
- Glassmorphism card design
- Signature animation

### 🌍 Map Animation
- Animated connection line from Egypt to Philippines
- Distance indicator
- Heart connection visualization
- SVG animations with Framer Motion

### 🎁 Daisy Gift Box
- Interactive 3D gift box
- Opening animation with daisy flower growth
- Floating hearts around the flower
- Typewriter romantic message
- "Open my heart" button with confetti

### 📸 Photo Gallery
- Easy drag-and-drop photo system
- Polaroid-style photo display
- Click to zoom functionality
- Auto-detects photos from `/public/gallery/` folder
- Responsive grid layout

### 🎵 Music Player (Removed)
- Music functionality has been removed for a silent experience
- Focus on visual romance and animations

### 🎉 Surprise Section
- Interactive surprise button
- Confetti explosions
- Animated love message
- Ring animation with hearts

## 🎨 Design Features

- **Dreamy romantic theme** with pink and purple gradients
- **Glassmorphism effects** for modern UI
- **Smooth animations** using Framer Motion
- **Fully responsive** and mobile-first design
- **Typewriter effects** for romantic messages
- **Floating animations** for hearts and decorative elements

## 📁 Project Structure

```
claire-birthday/
├── public/
│   ├── gallery/           # Drop Claire's photos here
│   │   ├── photo1.jpg
│   │   ├── photo2.jpg
│   │   └── ...
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LockScreen.jsx
│   │   ├── HeroSection.jsx
│   │   ├── LoveLetter.jsx
│   │   ├── MapAnimation.jsx
│   │   ├── DaisyGift.jsx
│   │   ├── Gallery.jsx
│   │   ├── SurpriseSection.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📸 Adding Photos

1. **Go to:** `/public/gallery/` folder
2. **Drop your photos:** Simply copy and paste your romantic photos
3. **Name them correctly:**
   - `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
4. **Refresh the website:** Photos will appear automatically

**Recommended photo specs:**
- Size: 800x800 pixels (square)
- Format: JPG or PNG
- File size: Under 500KB each

##  Customization

### Changing Birthday Date
Edit `LockScreen.jsx` and update the birthday date:
```javascript
const birthdayDate = new Date('2024-03-01T00:00:00.000+08:00'); // Philippines timezone
```

### Updating Messages
- **Love Letter:** Edit `LoveLetter.jsx`
- **Daisy Gift:** Edit `DaisyGift.jsx`
- **Hero Section:** Edit `HeroSection.jsx`

### Colors and Theme
Edit `tailwind.config.js` and `index.css` to customize colors and animations.

## 📱 Building for Production

```bash
npm run build
```

The built files will be in the `dist/` folder, ready for deployment.

## 🎮 APK Generation (Optional)

To create an Android APK:

1. **Install Capacitor:**
   ```bash
   npm install @capacitor/core @capacitor/cli @capacitor/android
   ```

2. **Initialize Capacitor:**
   ```bash
   npx cap init "Claire Birthday" "com.claire.birthday"
   ```

3. **Build the app:**
   ```bash
   npm run build
   npx cap add android
   npx cap sync
   ```

4. **Generate APK:**
   ```bash
   npx cap open android
   ```
   Then build the APK from Android Studio.

## 💝 Special Features

### Philippines Timezone
The lock screen automatically detects Philippines timezone (Asia/Manila) for accurate countdown.

### Interactive Elements
- All buttons and cards have hover effects
- Smooth transitions between sections
- Confetti animations for special moments
- Floating decorative elements

### Performance Optimized
- Lazy loading for images
- Optimized animations
- Responsive design for all devices
- Fast loading times

## 💌 Message from the Heart

This website was created with all my love for Claire. Every animation, every message, and every detail was crafted to show how much she means to me. From Egypt to the Philippines, distance means nothing when you live in someone's heart.

Happy Birthday, my love Claire! 🎂💖

---

**Made with ❤️ for Claire**  
*From Egypt to the Philippines, forever and always*
