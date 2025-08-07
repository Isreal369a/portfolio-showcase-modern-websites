# Portfolio Showcase - Setup Guide

## 📦 What's Included

This zip file contains a complete Next.js portfolio showcase with 5 distinct websites:

1. **Modern Minimal Portfolio** (`/portfolio/site1`)
2. **Business Landing Page** (`/portfolio/site2`) 
3. **Creative Blog Layout** (`/portfolio/site3`)
4. **E-Commerce Sample** (`/portfolio/site4`)
5. **Tech Startup Landing** (`/portfolio/site5`)

## 🚀 Quick Setup

### 1. Extract and Install
```bash
# Extract the zip file
# Navigate to the project folder
cd portfolio-showcase

# Install dependencies
npm install
```

### 2. Run Locally
```bash
# Start development server
npm run dev

# Visit http://localhost:3000 (or the port shown in terminal)
```

### 3. Deploy to GitHub Pages

#### Option A: GitHub Web Interface
1. Create new repository on GitHub
2. Upload all files from the extracted folder
3. Go to Settings > Pages
4. Select "GitHub Actions" as source
5. Choose "Next.js" workflow

#### Option B: Command Line
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial portfolio commit"

# Add your GitHub repository
git remote add origin https://github.com/[USERNAME]/[REPO-NAME].git
git push -u origin main

# Enable GitHub Pages in repository settings
```

## 🌐 Your Portfolio URLs

Once deployed, your sites will be available at:
- **Main Portfolio**: `https://[username].github.io/[repo-name]`
- **Individual Sites**: `https://[username].github.io/[repo-name]/portfolio/site[1-5]`

## 🛠️ Customization

- **Colors**: Edit `src/app/globals.css` for theme colors
- **Content**: Modify individual site files in `src/app/portfolio/site[1-5]/page.tsx`
- **Navigation**: Update `src/components/Navigation.tsx`
- **Images**: Replace placeholder URLs with your own images

## 📱 Features

✅ Fully responsive design
✅ Modern UI with Tailwind CSS  
✅ TypeScript for reliability
✅ Interactive elements
✅ SEO optimized
✅ GitHub Pages ready

## 🆘 Need Help?

- Check the main `README.md` for detailed documentation
- All sites are fully functional and ready to showcase
- Each site demonstrates different design approaches

**Happy showcasing! 🎉**
