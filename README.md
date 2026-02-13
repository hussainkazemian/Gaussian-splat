#  Gaussian Splat Viewer

A modern web application for viewing 3D Gaussian Splat models with an elegant, responsive interface. Built with TypeScript, Three.js, and Vite.

![Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)

##  Overview

This project showcases a high-quality 3D model captured and processed using modern photogrammetry techniques. The model is rendered using Gaussian Splat technology, providing smooth, efficient rendering of complex 3D geometry on the web.

##  Features

-  **Dual Viewer Layout** - Side-by-side HTML and PLY model viewers
-  **Gaussian Splat Support** - Native .ply file rendering with @mkkellogg/gaussian-splats-3d
-  **Fully Responsive** - Adapts beautifully to all screen sizes

##  Technology Stack

- **Frontend Framework**: TypeScript, Vite
- **3D Rendering**: Three.js, @mkkellogg/gaussian-splats-3d
- **Build Tool**: Vite



### Installation

1. **Clone the repository**
   
   git clone https://github.com/hussainkazemian/Gaussian-splat.git
   cd Gaussian-splat
   

2. **Install dependencies**

   npm install
   

3. **Start development server**
   
   npm run dev
   
   The app will be available at \http://localhost:5173\


### 2. **Enhancement** 
- Model enhancement with softer rendering applied
- Export to .PLY (Point Cloud) format

### 3. **Processing** 
- Imported into **SuperSplat Editor** (https://superspl.at/editor)
- Advanced optimization using sphere and box selection tools
- Removal of unnecessary geometric details
- Quality improvement and file size reduction

### 4. **Animation** 
- keypoints added
- Dynamic camera paths/keys for interactive viewing
- Enhanced presentation capabilities

### 5. **Export** 
- Final export as optimized HTML file
- Ready for web deployment

