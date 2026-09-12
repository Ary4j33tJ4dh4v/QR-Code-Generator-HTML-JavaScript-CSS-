📱 QR Code Generator

A modern, responsive QR Code Generator built with HTML, CSS, and JavaScript. Generate QR codes from text or URLs instantly, customize the QR code size and error correction level, download the result as a PNG, and switch between light and dark mode.

✨ Features
🔗 Generate QR codes from text or URLs
📏 Multiple QR code sizes
🛡️ Adjustable error correction levels
💾 Download QR codes as PNG images
📋 Copy text to clipboard
📋 Paste text directly from clipboard
🗑️ Clear input and generated QR codes
🔢 Live character counter
🌙 Light/Dark mode
💾 Remembers the selected theme
⌨️ Ctrl + Enter keyboard shortcut
📱 Responsive design for desktop and mobile
⚡ Instant QR code generation
✅ Input validation
🎨 Modern card-based UI
🖥️ Preview

The application provides a clean interface for generating QR codes:

┌─────────────────────────────────────────────┐
│  ▦   QR Code Generator                 🌙   │
│      Create QR codes instantly              │
│                                             │
│  Text or URL                                │
│  ┌───────────────────────────────────────┐  │
│  │ https://example.com                   │  │
│  │                                       │  │
│  │                              23/2000  │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  [📋 Paste]  [🗑 Clear]                     │
│                                             │
│  QR Code Size       Error Correction        │
│  [300 × 300 ▼]      [Medium ▼]             │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │       ⚡ Generate QR Code             │  │
│  └───────────────────────────────────────┘  │
│                                             │
│             ┌─────────────┐                 │
│             │             │                 │
│             │   QR CODE   │                 │
│             │             │                 │
│             └─────────────┘                 │
│                                             │
│       [💾 Download]  [📋 Copy Text]         │
└─────────────────────────────────────────────┘

Tip: Add an actual screenshot of your application here once you've deployed it. A screenshot makes the GitHub repository much more visually appealing.

🛠️ Technologies Used
Frontend
HTML5 — Application structure
CSS3 — Styling, responsive design, animations, dark mode
JavaScript — Application logic and user interactions
Library
QRCode.js — QR code generation

The QRCode.js library is loaded through the CDN in index.html.

📂 Project Structure
QR-Code-Generator/
│
├── index.html
├── style.css
├── script.js
└── README.md
🚀 Getting Started
1. Clone the repository
git clone https://github.com/YOUR-USERNAME/qr-code-generator.git
2. Open the project
cd qr-code-generator
3. Run the application

Because this is a frontend project, you don't need to install any packages.

Simply open:

index.html

in your browser.

Recommended

For development, use VS Code + Live Server.

Open the project in VS Code and launch index.html using Live Server.

🎮 How to Use
Step 1 — Enter your content

Enter any text or URL into the text box.

For example:

https://www.google.com

or:

Hello World!
Step 2 — Choose QR size

Select the size you want:

Small       200 × 200
Medium      300 × 300
Large       400 × 400
Extra Large 500 × 500
Step 3 — Select Error Correction

The generator supports four QR error correction levels:

Level	Recovery Capability
L	Low
M	Medium
Q	High
H	Maximum

Higher error correction allows the QR code to remain readable even if part of it is damaged or obscured, but it also requires more QR-code capacity.

Step 4 — Generate

Click:

⚡ Generate QR Code

or use:

Ctrl + Enter

The QR code will appear below the generator.

Step 5 — Download

Click:

💾 Download PNG

to save the generated QR code to your computer.

🌙 Dark Mode

The application includes a light/dark theme switch.

Click the theme button in the top-right corner:

🌙

The selected theme is stored using:

localStorage

This means your preference remains after refreshing or reopening the page.

📋 Clipboard Features

The application includes two clipboard-related functions.

Paste

Click:

📋 Paste

to insert clipboard content into the text field.

Copy

After entering content, click:

📋 Copy Text

to copy it to your clipboard.

Clipboard functionality may require browser permission and generally works best when the site is served from a secure context such as HTTPS or localhost.

🔢 Character Counter

The text field includes a live character counter:

125 / 2000

The generator allows up to 2,000 characters.

This prevents unnecessarily large inputs and gives users immediate feedback.

⚙️ How It Works

The application follows this workflow:

             User enters text/URL
                      │
                      ▼
               Validate input
                      │
                      ▼
              Select QR settings
                      │
                      ▼
             Generate QR Code
                      │
                      ▼
              Display QR Code
                      │
             ┌────────┴────────┐
             ▼                 ▼
       Download PNG        Copy Text
🧠 JavaScript Architecture

The JavaScript code is divided into separate functions to keep the application organized.

Function	Purpose
updateCharacterCount()	Updates the character counter
showStatus()	Displays status/error messages
generateQRCode()	Generates the QR code
downloadQRCode()	Downloads the QR code
copyText()	Copies input text
clearInput()	Clears the application
pasteFromClipboard()	Pastes clipboard content
toggleTheme()	Switches light/dark mode
loadTheme()	Loads the saved theme
handleKeyboard()	Handles keyboard shortcuts
📱 Responsive Design

The interface adapts to different screen sizes.

Desktop

The generator uses a centered card layout with two-column options.

Mobile

The options automatically switch to a single-column layout and buttons become easier to use on smaller screens.

🔐 Privacy

The application does not send your entered text or URLs to a custom backend.

QR generation happens in the browser using JavaScript and QRCode.js.

This means the project can be used without creating an account or storing generated content on a server.

Note: because QRCode.js is loaded from a CDN, your browser does make a request to that CDN to load the library.

⚡ Example

Input:

https://www.youtube.com

Select:

QR Code Size: 300 × 300
Error Correction: Medium

Click:

Generate QR Code

The application generates a QR code that can be scanned using a smartphone.

🎯 Learning Objectives

This project was created to practice:

HTML5 structure
CSS styling
Responsive web design
JavaScript DOM manipulation
Event listeners
Browser APIs
Clipboard API
Local Storage
Third-party JavaScript libraries
Client-side file downloads
Input validation
UI/UX design
🔮 Future Improvements

Possible improvements for future versions:

🎨 Custom QR foreground/background colors
🖼️ Add a logo to the center of the QR code
📄 Generate QR codes for Wi-Fi credentials
👤 Generate vCard/contact QR codes
📧 Generate email QR codes
📞 Generate phone-number QR codes
📱 Generate SMS QR codes
🔗 URL validation
📜 QR code generation history
📥 Download as SVG
🖼️ Download as WebP
🖱️ Drag-and-drop functionality
📊 Usage statistics
🌐 Deploy as a Progressive Web App
🚀 Deployment

This project can be deployed for free using GitHub Pages.

After pushing the project to GitHub:

Repository
    ↓
Settings
    ↓
Pages
    ↓
Deploy from branch
    ↓
main / root
    ↓
Save

GitHub will provide a public URL for your application.

📜 License

This project is available for educational and personal use.

You can add an MIT License if you want others to freely use, modify, and distribute the project.

👨‍💻 Author

Aryajeet Jadhav

Built with HTML, CSS, and JavaScript as a frontend web development project.
