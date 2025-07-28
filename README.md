# 🍽️ Recipe Explorer

A modern, responsive web application for discovering and exploring delicious recipes from around the world. Built with React, TypeScript, and Tailwind CSS.

![Recipe Explorer](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### 🔍 **Smart Search**
- Search recipes by meal name, ingredients, or category
- Real-time search results with instant feedback
- Intuitive search interface with dropdown options

### 🎲 **Random Meal Discovery**
- Get inspired with random recipe suggestions
- One-click access to surprise meals
- Perfect for when you don't know what to cook

### 📱 **Fully Responsive Design**
- Beautiful interface that works on all devices
- Mobile-first design approach
- Smooth animations and transitions

### 🏷️ **Category Exploration**
- Browse recipes by food categories
- Easy-to-use category tabs
- Discover new cuisines and cooking styles

### 📖 **Detailed Recipe Information**
- Complete recipe instructions
- High-quality food images
- Category and origin information
- YouTube video integration (when available)

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **UI Components**: Custom shadcn/ui components
- **API**: TheMealDB API

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/recipe-explorer.git
   cd recipe-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

## 📁 Project Structure

```
recipe-explorer/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── SearchBar.tsx   # Search functionality
│   │   ├── MealCard.tsx    # Recipe card component
│   │   └── CategoryTabs.tsx # Category selection
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Main landing page
│   │   └── MealDetail.tsx  # Recipe detail page
│   ├── services/           # API services
│   │   └── mealAPI.ts      # MealDB API integration
│   ├── assets/             # Static assets
│   └── lib/                # Utility functions
├── public/                 # Public assets
└── package.json           # Dependencies and scripts
```

## 🎨 Key Features Explained

### **Responsive Design**
The application uses a mobile-first approach with Tailwind CSS breakpoints:
- **Mobile**: Single column layout with optimized touch targets
- **Tablet**: Two-column grid with improved spacing
- **Desktop**: Multi-column grid with enhanced visual hierarchy

### **Search Functionality**
- **Name Search**: Find recipes by meal name
- **Ingredient Search**: Discover recipes using specific ingredients
- **Category Search**: Browse recipes by food categories

### **Error Handling**
- Comprehensive try-catch blocks for API calls
- Graceful fallbacks for failed requests
- User-friendly error messages

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

This project uses [TheMealDB API](https://www.themealdb.com/api.php) to fetch recipe data. The API provides:
- Recipe search functionality
- Random meal generation
- Category-based filtering
- Detailed recipe information

## 🎯 Future Enhancements

- [ ] User authentication and favorites
- [ ] Recipe rating and reviews
- [ ] Advanced filtering options
- [ ] Recipe sharing functionality
- [ ] Dark mode toggle
- [ ] Offline support with PWA

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for providing the recipe API
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

---

**Made with ❤️ and lots of ☕**

*Happy cooking! 🍳* <img width="1896" height="868" alt="image" src="https://github.com/user-attachments/assets/908c2c65-b5a5-4fd7-a715-8847e774366c" />

