# ⚛️ Tabela Periódica Interativa

An interactive periodic table built quickly as a **simple college assignment**, showcasing **Vanilla JavaScript**, **HTML**, and **CSS** skills.  
Despite its small scope, the project is **well-organized and fully modularized** without any frameworks.

## 📋 About the Project

A complete **interactive periodic table** built with pure HTML, CSS, and JavaScript.  
Explore elements by hovering over them to see detailed information like atomic mass, number of neutrons, protons, and electrons.  
All 118 elements organized according to periods and families! ⚛️

Completed in a few hours as a **college assignment**, the project applies solid web development concepts with **clean architecture** and **reusable components** — all without frameworks, using semantic `<table>` elements.

## 🚀 Technologies

- **Vanilla JavaScript** (ES6 Modules)
- **HTML** (Semantic `<table>` elements)
- **CSS** (Clean, modular styling)
- **Vite** for fast development server
- **No frameworks** — pure web standards

## 💡 Key Concepts Applied

- **Module Pattern** with ES6 imports/exports for code organization
- **Component Architecture** (`ElementBlock`, `ElementDescription`, `PeriodicTable`)
- **Dynamic HTML Generation** from data structures
- **CSS Grid & Flexbox** for responsive layout
- **Event Handling** for interactive element descriptions
- **Semantic HTML** using `<table>` with proper structure
- **Data-driven rendering** — elements positioned by period and family

## 🎨 Features

✨ **Interactive Elements** — Hover over any element to see detailed information  
🎯 **Color-coded Families** — Visual distinction between element types (metals, non-metals, noble gases, etc.)  
📊 **Proper Table Structure** — Using semantic HTML `<table>` elements  
📱 **Responsive Design** — Works on different screen sizes  
🧪 **Complete Dataset** — All 118 elements with descriptions  

## 📁 Project Structure

```
src/
├── assets/
│   └── styles/
│       ├── main.css
│       └── table/
│           ├── table.css
│           ├── block.css
│           └── elementsDescription.css
├── components/
│   └── layout/
│       └── table/
│           ├── table.js
│           ├── block.js
│           └── elementDescription.js
└── utils/
    └── table/
        ├── elementsData.js
        └── tableConstructor.js
```

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

---

> Quick college assignment demonstrating **practical Vanilla JavaScript experience** with clean, organized, and component-based code — built with HTML, CSS, and pure JavaScript. No frameworks needed! 🎓