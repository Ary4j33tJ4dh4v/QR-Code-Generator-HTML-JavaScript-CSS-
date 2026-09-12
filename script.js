// ============================================================
// QR CODE GENERATOR
// ============================================================

// Get HTML elements
const inputText = document.getElementById("inputText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const copyBtn = document.getElementById("copyBtn");

const clearBtn = document.getElementById("clearBtn");
const pasteBtn = document.getElementById("pasteBtn");

const qrContainer = document.getElementById("qrContainer");
const qrSection = document.getElementById("qrSection");

const sizeSelect = document.getElementById("size");
const errorCorrection = document.getElementById("errorCorrection");

const characterCount = document.getElementById("characterCount");
const generatedTime = document.getElementById("generatedTime");
const status = document.getElementById("status");

const themeBtn = document.getElementById("themeBtn");


// ============================================================
// CHARACTER COUNTER
// ============================================================

function updateCharacterCount() {

    const length = inputText.value.length;

    characterCount.textContent =
        length + " / 2000";
}


// ============================================================
// STATUS MESSAGE
// ============================================================

function showStatus(message, isError) {

    if (isError === undefined) {
        isError = false;
    }

    status.textContent = message;

    if (isError) {
        status.style.color = "#dc2626";
    } else {
        status.style.color = "";
    }
}


// ============================================================
// GENERATE QR CODE
// ============================================================

function generateQRCode() {

    const text = inputText.value.trim();

    // Check if input is empty
    if (text === "") {

        showStatus(
            "Please enter some text or a URL.",
            true
        );

        inputText.focus();

        return;
    }


    // Clear previous QR code
    qrContainer.innerHTML = "";


    // Get selected size
    const size = parseInt(
        sizeSelect.value,
        10
    );


    // Get error correction level
    const errorLevel =
        errorCorrection.value;


    let correctLevel;


    switch (errorLevel) {

        case "L":
            correctLevel = QRCode.CorrectLevel.L;
            break;

        case "M":
            correctLevel = QRCode.CorrectLevel.M;
            break;

        case "Q":
            correctLevel = QRCode.CorrectLevel.Q;
            break;

        case "H":
            correctLevel = QRCode.CorrectLevel.H;
            break;

        default:
            correctLevel = QRCode.CorrectLevel.M;
    }


    // Make sure QRCode.js loaded
    if (typeof QRCode === "undefined") {

        showStatus(
            "QR Code library failed to load. Check your internet connection.",
            true
        );

        return;
    }


    // Generate QR code
    new QRCode(
        qrContainer,
        {
            text: text,
            width: size,
            height: size,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: correctLevel
        }
    );


    // Show QR section
    qrSection.classList.add("show");


    // Get current time
    const now = new Date();

    generatedTime.textContent =
        "Generated " +
        now.toLocaleTimeString();


    showStatus(
        "QR code generated successfully!"
    );


    // Scroll to QR code
    setTimeout(function () {

        qrSection.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }, 100);
}


// ============================================================
// DOWNLOAD QR CODE
// ============================================================

function downloadQRCode() {

    const canvas =
        qrContainer.querySelector("canvas");

    const image =
        qrContainer.querySelector("img");


    // Make sure QR exists
    if (!canvas && !image) {

        showStatus(
            "Generate a QR code first.",
            true
        );

        return;
    }


    let downloadURL;


    if (canvas) {

        downloadURL =
            canvas.toDataURL("image/png");

    } else {

        downloadURL =
            image.src;
    }


    // Create download link
    const link =
        document.createElement("a");


    link.href = downloadURL;

    link.download = "qr-code.png";


    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);


    showStatus(
        "QR code downloaded successfully!"
    );
}


// ============================================================
// COPY TEXT
// ============================================================

async function copyText() {

    const text =
        inputText.value.trim();


    if (text === "") {

        showStatus(
            "There is no text to copy.",
            true
        );

        return;
    }


    try {

        await navigator.clipboard.writeText(text);

        showStatus(
            "Text copied to clipboard!"
        );

    } catch (error) {

        showStatus(
            "Unable to copy text.",
            true
        );
    }
}


// ============================================================
// CLEAR
// ============================================================

function clearInput() {

    inputText.value = "";

    qrContainer.innerHTML = "";

    qrSection.classList.remove("show");

    generatedTime.textContent =
        "Ready to generate";

    updateCharacterCount();

    showStatus("");

    inputText.focus();
}


// ============================================================
// PASTE
// ============================================================

async function pasteFromClipboard() {

    try {

        const text =
            await navigator.clipboard.readText();


        inputText.value = text;

        updateCharacterCount();

        showStatus(
            "Text pasted successfully!"
        );

        inputText.focus();

    } catch (error) {

        showStatus(
            "Unable to access clipboard. Please paste manually.",
            true
        );
    }
}


// ============================================================
// DARK MODE
// ============================================================

function toggleTheme() {

    document.body.classList.toggle("dark");


    const darkMode =
        document.body.classList.contains("dark");


    if (darkMode) {

        themeBtn.textContent = "☀️";

        localStorage.setItem(
            "qr-theme",
            "dark"
        );

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem(
            "qr-theme",
            "light"
        );
    }
}


// ============================================================
// LOAD THEME
// ============================================================

function loadTheme() {

    const savedTheme =
        localStorage.getItem("qr-theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";
    }
}


// ============================================================
// KEYBOARD SHORTCUT
// ============================================================

function handleKeyboard(event) {

    if (
        event.ctrlKey &&
        event.key === "Enter"
    ) {

        event.preventDefault();

        generateQRCode();
    }
}


// ============================================================
// EVENT LISTENERS
// ============================================================

generateBtn.addEventListener(
    "click",
    generateQRCode
);


downloadBtn.addEventListener(
    "click",
    downloadQRCode
);


copyBtn.addEventListener(
    "click",
    copyText
);


clearBtn.addEventListener(
    "click",
    clearInput
);


pasteBtn.addEventListener(
    "click",
    pasteFromClipboard
);


themeBtn.addEventListener(
    "click",
    toggleTheme
);


inputText.addEventListener(
    "input",
    updateCharacterCount
);


inputText.addEventListener(
    "keydown",
    handleKeyboard
);


// ============================================================
// INITIALIZE
// ============================================================

loadTheme();

updateCharacterCount();
