# Habit Tracker 🌸

A simple and elegant habit tracker web application that helps you build and maintain daily habits with a visual calendar interface. Track your progress throughout the current month with an interactive pink-themed calendar.

## Features

- **Interactive Monthly Calendar**: Click on calendar days to mark habits as complete (pink) or incomplete (white)
- **Custom Habit Setting**: Click on "My New Habit" to set your personalized habit goal
- **Visual Progress Tracking**: See your daily progress with color-coded calendar days
- **Real-time Counter**: Track completion with a live "X/total days" counter
- **Local Storage**: Your habit data persists between browser sessions
- **Current Date Highlighting**: Today's date is highlighted with a border
- **One-Click Reset**: Clear all progress and start fresh with the reset button
- **Motivational Alerts**: Get encouragement when you complete all days up to today

## How to Use

1. **Set Your Habit**: Click on "My New Habit" in the calendar header to customize your habit
2. **Mark Daily Progress**: It will start your progress on the current day
3. **View Progress**: Monitor your streak with the completion counter (e.g., "15/31")
4. **Reset When Needed**: Use the "Reset Button" to clear all progress and start over

## Technologies Used

- **HTML5**: Structure and semantic markup
- **CSS3**: Pink-themed styling with background images and animations
- **Vanilla JavaScript**: Interactive functionality and local storage
- **Google Fonts**: Bosento font family for elegant typography
- **Local Storage API**: Persistent data storage

## File Structure

```
habit-tracker/
├── habittracker.html    # Main application page
├── style.css           # Pink-themed styling and layout
├── script.js           # Core JavaScript functionality
└── README.md          # Project documentation
```

## Installation & Setup

1. Clone or download the project files to your local machine
2. Open `habittracker.html` in any modern web browser
3. Start tracking your daily habits immediately!

## Browser Compatibility

Works in all modern browsers that support:
- Local Storage API
- ES6 JavaScript features
- CSS3 styling and flexbox
- DOM manipulation

## Key Features Explained

### Calendar Logic
- Displays the current month with proper day numbering
- Only allows interaction with days up to today's date
- Automatically calculates days in the current month

### Data Persistence
- Uses localStorage with date-based keys (format: "MM-DD-YYYY")
- Automatically loads previous progress on page refresh
- Maintains state across browser sessions

### Visual Design
- Pink color scheme (#EFA2BD) with floral background
- Responsive calendar grid layout
- Smooth button interactions with shadow effects

## Project Background

This project was created following a tutorial by **Cozy Olive Studios**. It demonstrates fundamental web development concepts including:
- DOM manipulation
- Event handling
- Local storage usage
- CSS styling and layout
- Date/time handling in JavaScript

Perfect for beginners learning web development while building a practical habit-tracking tool!

## Future Enhancements

Potential improvements could include:
- Multi-month navigation
- Habit streaks and statistics
- Multiple habit tracking
- Export/import functionality
- Mobile-responsive design improvements

---

Start building better habits today! 🌸