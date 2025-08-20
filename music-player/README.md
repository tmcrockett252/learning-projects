# Music Player Project

A modern, responsive web-based music player built with HTML, CSS, and JavaScript. This project demonstrates audio controls, time tracking, and interactive user interface elements.

## Features

### Core Functionality

- **Play/Pause Control**: Toggle audio playback with visual feedback
- **Progress Bar**: Interactive scrubbing through the audio timeline
- **Real-time Time Display**: Shows current playback position and total duration
- **Dynamic Duration**: Automatically detects and displays actual audio file duration
- **Seek Functionality**: Click and drag the progress bar to jump to any position

### User Interface

- **Responsive Design**: Clean, modern layout with CSS styling
- **Font Awesome Icons**: Professional-looking control buttons
- **Album Artwork**: Displays cover image for the current track
- **Track Information**: Shows song title and artist name

## File Structure

```
music-player/
├── index.html          # Main HTML file with embedded JavaScript
├── styles.css          # CSS styling (referenced but not included)
├── README.md           # This documentation file
└── media/
    ├── Cassette_Player.jpeg     # Album cover image
    └── POOKIE'S REQUIEM.mp3     # Audio file
```

## Technical Implementation

### HTML Structure

- Semantic HTML5 audio element for media playback
- Range input for progress bar control
- Structured layout with container, player, navigation, and controls sections

### JavaScript Functionality

#### Event Listeners

1. **`onloadedmetadata`**: Initializes player when audio metadata loads

   - Sets progress bar maximum value to song duration
   - Calculates and displays total track duration

2. **`ontimeupdate`**: Updates UI during playback

   - Moves progress bar in real-time
   - Updates current time display with MM:SS format

3. **`onchange` (progress bar)**: Handles user scrubbing
   - Jumps to selected position in audio
   - Automatically starts playback
   - Updates play/pause icon state

#### Core Functions

- **`playPause()`**: Toggles between play and pause states
  - Manages audio playback state
  - Switches Font Awesome icons (play ↔ pause)
  - Provides visual feedback for current state

### Key JavaScript Features

#### Time Formatting

```javascript
// Converts seconds to MM:SS format
let minutes = Math.floor(time / 60);
let seconds = Math.floor(time % 60);
if (seconds < 10) seconds = "0" + seconds;
```

#### Dynamic Audio Duration

- Replaces hardcoded duration with actual file duration
- Handles different audio file lengths automatically

#### State Management

- Uses CSS class toggling for play/pause states
- Maintains synchronization between audio state and UI

## Recent Improvements

### Time Display Enhancement

- **Before**: Static duration display with hardcoded values
- **After**: Dynamic duration detection and real-time current time updates

### Progress Bar Functionality

- **Added**: Real-time progress tracking during playback
- **Added**: Interactive seeking capability
- **Added**: Automatic play state management when scrubbing

### Code Organization

- **Improved**: Separated concerns between duration setting and time updating
- **Enhanced**: More robust event handling for audio metadata
- **Added**: Proper time formatting with leading zeros

## Browser Compatibility

- Modern browsers with HTML5 audio support
- Requires JavaScript enabled
- Font Awesome CDN for icons
- MP3 audio format support

## Usage

1. Open `index.html` in a web browser
2. The player will automatically load the audio file metadata
3. Click the play button to start playback
4. Use the progress bar to seek to different positions
5. Click play/pause to control playback

## Dependencies

- [Font Awesome](https://fontawesome.com/) - Icons (loaded via CDN)
- HTML5 Audio API
- Modern web browser with JavaScript support
