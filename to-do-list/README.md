# Pink Pixel To-Do List

A beautifully designed, pixel-art themed to-do list application with a soft pink aesthetic and custom iconography. The complete design was created from scratch in **Figma**, including the layout, color scheme, and custom pixel art icons.

## 🎨 Design Overview

This to-do list features a unique pixel art design with:

- **Color Scheme**: Soft pink gradients (#f6c6db, #e8b4cb, #f8a2c4)
- **Typography**: "Pixelify Sans" font for authentic pixel feel
- **Custom Icons**: Hand-crafted pink pixel art icons designed in Figma
- **Layout**: Card-based design with decorative cloud backgrounds
- **Original Design**: Complete UI/UX designed from concept to implementation in Figma

## 📁 Project Structure

```
to-do-list/
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and layout
├── icons/              # Custom pixel art icon assets (designed in Figma)
│   ├── Pink_fish_icon.ico
│   ├── Cherry_blossom_icon.ico
│   ├── Pink_file.ico
│   ├── Pink_jellyfish.ico
│   ├── Pink_trashcan.ico
│   └── Pink_cloud_icon.png
└── README.md           # This file
```

## 🔧 Key Features Implemented

### HTML Structure (`index.html`)

1. **Semantic HTML5 Layout**

   - Proper document structure with meta tags
   - External font loading from Google Fonts
   - Accessible icon implementation with title attributes

2. **Main Container System**

   - Central container with fixed dimensions (400x600px)
   - Background cloud decorations (top and bottom)
   - Organized content sections

3. **Header Section**

   - Application title with custom fish icon
   - Centered layout with flexbox

4. **Calendar Widget**

   - Static calendar display showing current date
   - Rounded corner design with pink background
   - Typography hierarchy for date information

5. **Progress Tracking**

   - Visual progress bar with gradient fill
   - Positioned absolutely for design alignment
   - Shows completion percentage (75% default)

6. **Task Input System**

   - Input field with placeholder text
   - Add button with file icon
   - Rounded input bar design

7. **Task List Display**
   - Multiple task bars with consistent styling
   - Each task includes: bullet point icon, text area, delete button
   - Empty task placeholders ready for dynamic content

### CSS Styling (`styles.css`)

1. **Global Styles & Variables**

   - CSS custom properties for consistent theming
   - Universal box-sizing and font family
   - Color variable: `--background-color: #f6c6db`

2. **Icon System**

   - Reusable `.icon` base class
   - Individual icon classes with specific sizing
   - Background image implementation for pixel icons
   - Transform scaling for optimal display

3. **Layout Architecture**

   - Flexbox centering for main container
   - Absolute positioning for decorative elements
   - Z-index layering system (background: 1, content: 10)

4. **Container Design**

   - Rounded corners (40px border-radius)
   - Box shadow for depth
   - Overflow hidden for clean edges
   - Pink gradient background

5. **Background Decorations**

   - Cloud images positioned at top-right and bottom-left
   - Blur effects and scaling for atmospheric depth
   - Flipped cloud at bottom for visual balance

6. **Interactive Elements**

   - Hover-ready button styles
   - Transparent backgrounds for seamless integration
   - Focus states for accessibility

7. **Typography System**

   - Consistent font sizing hierarchy
   - Color coordination with pink theme
   - Weight variations for visual hierarchy

8. **Responsive Design Elements**
   - Fixed container dimensions
   - Scalable icon system
   - Flexible content areas

## 🎯 Design Decisions

### Design Process

- **Figma Prototyping**: Complete design system created in Figma before development
- **Pixel Art Aesthetic**: Intentional retro gaming-inspired visual style
- **Custom Iconography**: All icons hand-designed to maintain visual consistency

### Color Psychology

- **Pink Palette**: Creates a calming, friendly user experience
- **Gradient Fills**: Adds depth and visual interest
- **Transparency**: Creates layered, sophisticated look

### Icon Integration

- **Pixel Art Style**: Maintains consistent aesthetic throughout
- **Functional Icons**: Each icon has clear purpose (fish=brand, file=add, trash=delete, etc.)
- **Scalable System**: Icons can be easily resized with transform scaling

### Layout Strategy

- **Card Design**: Container feels like a physical notepad
- **Absolute Positioning**: Allows for creative, non-grid layouts
- **Visual Hierarchy**: Size and color guide user attention

### User Experience

- **Intuitive Interface**: Clear input and action areas
- **Visual Feedback**: Progress bar shows completion
- **Accessibility**: Title attributes and semantic HTML

## 🚀 Future Enhancements

This static implementation provides the foundation for:

- JavaScript functionality for adding/removing tasks
- Local storage for task persistence
- Dynamic date updating
- Interactive progress calculation
- Task completion states
- Animation and transition effects

## 📱 Browser Compatibility

- Modern browsers supporting CSS Grid and Flexbox
- Google Fonts integration
- CSS custom properties support
- Icon file format compatibility (.ico, .png)

## 🎨 Design Credits

All visual design, including layout, color scheme, typography choices, and custom pixel art icons, were created from scratch in Figma as part of this project's complete design-to-
